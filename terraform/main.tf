# S3 Bucket (private)
resource "aws_s3_bucket" "cv_bucket" {
  bucket        = var.bucket_name
  force_destroy = true
}

# Public Access Blocked
resource "aws_s3_bucket_public_access_block" "cv_bucket_public_block" {
  bucket = aws_s3_bucket.cv_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Origin Access Control to Cloudfront
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "oac-cv-${var.bucket_name}"
  description                       = "OAC para restringir acceso al S3 del CV"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Cloudfront Distribution (CDN + HTTPS)
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.cv_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    origin_id                = "S3-${var.bucket_name}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.bucket_name}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https" # HTTPS only
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Project   = "CV-Digital"
    ManagedBy = "Terraform"
  }

  aliases = ["wilhenfigueredo.dev"]
}

# Bucket policy (ReadOnly to CloudFront)
resource "aws_s3_bucket_policy" "allow_cloudfront_only" {
  bucket = aws_s3_bucket.cv_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.cv_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

# Upload (S3 Objects to website)
locals {
  mime_types = {
    "html" = "text/html"
    "pdf"  = "application/pdf"
  }
}

resource "aws_s3_object" "upload_website_files" {
  for_each = fileset("${path.module}/../website", "**/*")

  bucket       = aws_s3_bucket.cv_bucket.id
  key          = each.value
  source       = "${path.module}/../website/${each.value}"
  etag         = filemd5("${path.module}/../website/${each.value}")
  content_type = lookup(local.mime_types, element(split(".", each.value), length(split(".", each.value)) - 1), "application/octet-stream")
}

# Route 53 (DNS)
data "aws_route53_zone" "primary" {
  name         = "wilhenfigueredo.dev."
  private_zone = false
}

# Certificate SSL/TLS on AWS Certificate Manager (ACM)
resource "aws_acm_certificate" "cert" {
  domain_name       = "wilhenfigueredo.dev"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# DNS records for ACM validation
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.primary.zone_id
}

# Certificate validation
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# Create the "Alias" record of type A to point your domain directly to CloudFront
resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "wilhenfigueredo.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
