# Cloud-Resume & Infrastructure as Code (IaC) 🚀

Este repositorio contiene la arquitectura, el código fuente y el pipeline de automatización para el despliegue de mi Hoja de Vida/CV Digital ejecutándose de manera 100% Serverless sobre Amazon Web Services (AWS).

🌐 **Enlace del Proyecto:** [wilhenfigueredo.dev](https://wilhenfigueredo.dev/)

## 🛠️ Arquitectura del Sistema

El diseño se enfoca en la alta disponibilidad, seguridad perimetral, bajo costo y optimización para dispositivos móviles, mitigando las restricciones de protocolos HTTP en redes celulares.

- **Hosting Estático Serverless:** Amazon S3 (configurado en modo privado estricto, bloqueando todo acceso público directo).
- **Red de Distribución de Contenido (CDN):** Amazon CloudFront para almacenamiento en caché global y aceleración de carga.

* **Control de Acceso (OAC):** Origin Access Control implementado para asegurar que el contenido del bucket S3 solo sea legible a través de la red de CloudFront.
* **DNS & Seguridad SSL/TLS:** Enrutamiento gestionado con Amazon Route 53 y cifrado en tránsito forzado a HTTPS mediante un certificado nativo de AWS Certificate Manager (ACM).

- **Automatización de Infraestructura:** Terraform (IaC) parametrizado con control dinámico de Content-Types (MIME mapping).

* **Infraestructura como Código (IaC):** Todo el entorno está codificado y gestionado con Terraform, incluyendo control dinámico de Content-Types (MIME mapping) y

- **Gestión de estado remoto (Remote Backend)** en un bucket S3 dedicado para sincronización segura.

## 📁 Estructura del Proyecto

```text
├── .github/workflows/
│   └── deploy.yml                  # Flujo de CI/CD en GitHub Actions
├── terraform/
│   ├── main.tf                     # Declaración de recursos de AWS (S3, CloudFront, ACM, Route53)
│   ├── providers.tf                # Configuración del proveedor, alias y Backend Remoto (S3)
│   ├── variables.tf                # Variables del entorno
│   └── outputs.tf                  # Salidas del sistema
└── website/
    ├──js/
    |   ├── languaje.js             # Funciones pra cambio de idioma (ES/EN). persistencia en localStorage y cambio de idioma dinámico
    |   ├── translations.js         # Diccionario de traducciones
    ├── index.html                  # Código de la aplicación web (Tailwind CSS)
    ├── CV_Wilhen_Figueredo_ES.pdf  # Versión tradicional del CV descargable en español
    └── CV_Wilhen_Figueredo_EN.pdf  # Versión tradicional del CV descargable en inglés
```
