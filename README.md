# Cloud-Resume & Infrastructure as Code (IaC) 🚀

Este repositorio contiene la arquitectura, el código fuente y el pipeline de automatización para el despliegue de mi Hoja de Vida/CV Digital ejecutándose de manera 100% Serverless sobre Amazon Web Services (AWS).

🌐 **Enlace del Proyecto:** [CV Digital](https://wilhenfigueredo.dev/)

## 🛠️ Arquitectura del Sistema

El diseño se enfoca en la alta disponibilidad, seguridad perimetral, bajo costo y optimización para dispositivos móviles, mitigando las restricciones de protocolos HTTP en redes celulares.

- **Hosting Estático:** Amazon S3 (configurado en modo privado estricto).
- **Red de Distribución de Contenido (CDN):** Amazon CloudFront para almacenamiento en caché global y aceleración de carga.
- **Seguridad y Cifrado:** Certificado SSL/TLS nativo administrado para forzar conexiones seguras HTTPS.
- **Control de Acceso:** Origin Access Control (OAC) para asegurar que el contenido del bucket S3 solo sea legible a través de la CDN.
- **Automatización de Infraestructura:** Terraform (IaC) parametrizado con control dinámico de Content-Types (MIME mapping).
- **Pipeline de CI/CD / GitOps:** GitHub Actions para la validación automática de la sintaxis y simulación de ejecución de la infraestructura (`terraform plan`).

## 📁 Estructura del Proyecto

```text
├── .github/workflows/
│   └── deploy.yml          # Flujo de CI/CD en GitHub Actions
├── terraform/
│   ├── main.tf                 # Declaración de recursos de AWS (S3, CloudFront, OAC)
│   ├── providers.tf            # Configuración del proveedor de AWS y región
│   ├── variables.tf            # Variables del entorno
│   └── outputs.tf              # Salidas del sistema (URL de CloudFront)
└── website/
    ├── index.html              # Código de la aplicación web (Tailwind CSS)
    └── CV_Wilhen_Figueredo.pdf # Versión tradicional del CV descargable
```
