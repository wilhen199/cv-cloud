output "cv_public_url" {
  value       = "https://${aws_cloudfront_distribution.s3_distribution.domain_name}"
  description = "URL CloutFront Distribution"
}

output "domain" {
  value       = aws_route53_record.www
  description = "URL de zona alojada Route53"
}
