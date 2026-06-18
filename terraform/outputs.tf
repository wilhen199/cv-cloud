output "cv_public_url" {
  value       = "https://${aws_cloudfront_distribution.s3_distribution.domain_name}"
  description = "URL para acceder a tu CV desde cualquier dispositivo con conexión a Internet"
}
