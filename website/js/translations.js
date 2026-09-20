const translations = {
  es: {
    page_title: "Wilhen Figueredo Hernández | Network & Cloud Engineer",

    header_title: "Network & Cloud Engineer | Redes · Automatización · AWS · Terraform",
    header_subtitle: "Ingeniero de Telecomunicaciones con más de 10 años en infraestructura y redes corporativas",
    cta_cloud: "Proyectos Cloud",
    cta_network: "Proyectos Networking",
    download_cv: "Descargar CV",

    profile_title: "Perfil Profesional",
    profile_p1: `Ingeniero en Telecomunicaciones con más de 10 años operando redes e infraestructura crítica en entornos corporativos de varios paises. Con una sólida base en ingeniería de redes y administración de servidores, redes multi-vendor (<span class="text-blue-400">Cisco, Huawei, Fortinet, Extreme</span>), SDN con <span class="text-blue-400">Cisco Catalyst Center</span>, automatización con <span class="text-blue-400">Python</span>, servidores <span class="text-blue-400">Windows/Linux</span> y monitoreo con <span class="text-blue-400">Zabbix</span>.`,
    profile_p2: `A esa base le sumé infraestructura en la nube: construyo y automatizo arquitecturas en <span class="text-blue-400">AWS con Terraform</span> y automatizo el despliegue con <span class="text-blue-400">GitHub Actions</span>. Tengo las certificaciones AWS Solutions Architect Associate y Cloud Practitioner. Busco roles donde se combinen redes, automatización y cloud.`,

    projects_title: "Proyectos Cloud",
    projects_intro: "Proyectos personales de laboratorio. Todo el código está en GitHub.",
    project_status_wip: "En progreso",
    view_repo: "Ver código en GitHub",

    proj_1_title: "AWS three-tier con Terraform",
    proj_1_desc: `Arquitectura de tres capas desplegada completamente con Terraform: VPC con subnets públicas y privadas en 2 zonas de disponibilidad, Application Load Balancer, Auto Scaling Group (2 a 4 instancias, escala por CPU) y RDS MySQL con la contraseña en Secrets Manager. Las instancias no tienen IP pública ni SSH: se acceden por SSM. El estado de Terraform vive en S3 con bloqueo en DynamoDB. El README lista las prácticas de seguridad aplicadas y las que faltarían en producción.`,

    proj_2_title: "Este sitio: hosting serverless en AWS",
    proj_2_desc: `Sitio estático en un bucket S3 privado al que solo accede CloudFront mediante Origin Access Control. Dominio en Route 53 y HTTPS con certificado de ACM. Toda la infraestructura está en Terraform con estado remoto, y GitHub Actions ejecuta el despliegue.`,

    proj_3_title: "F1 Stats: API en FastAPI y contenedor",
    proj_3_desc: `Aplicación web con backend asíncrono en FastAPI (httpx), caché en memoria con TTL y bloqueo por URL, pruebas con pytest sin llamadas de red y contenedor Docker. El pipeline de GitHub Actions construye la imagen, levanta el contenedor, verifica su salud y ejecuta los tests. Uso el proyecto como laboratorio de despliegue en AWS (ECS Fargate); la automatización con Terraform está en progreso.`,

    proj_4_title: "Stack de monitoreo con Docker Compose",
    proj_4_desc: `Node Exporter, Prometheus y Grafana levantados con un solo comando. El datasource y el dashboard se aprovisionan desde archivos, con health checks, orden de arranque, volúmenes persistentes y red aislada. Complementa mi experiencia previa con Zabbix.`,

    net_title: "Proyectos profesionales en redes y automatización",
    net_1_title: "Auditoría y remediación automática de la red (NetDevOps)",
    net_1_desc: "Herramientas internas en Python (Netmiko / Pandas) para auditar, configurar de forma masiva y remediar vulnerabilidades en +1000 nodos de red. Resultado en el primer año: 30% menos de tiempo de respuesta y 25% más de compliance.",
    net_2_title: "Actualización masiva de 400 switches Cisco Serie 9000",
    net_2_desc: "Liderazgo de la migración y actualización con Cisco Catalyst Center para reducir la obsolescencia tecnológica y asegurar el parque de red regional. El compliance regional pasó de 14% a 60%.",
    net_3_title: "Scripts de configuración rápida multi-vendor",
    net_3_desc: "Scripts en Python para Cisco IOS-X, NX-OS, Extreme y Huawei que redujeron los errores humanos en 40% y los tiempos de resolución.",
    net_4_title: "Backup de llamadas de Genesys Cloud a AWS S3",
    net_4_desc: "Integración entre Genesys Cloud y un bucket de S3 para asegurar la disponibilidad y la recuperación ante desastres del backup de llamadas.",
    net_5_title: "Migración de telefonía On-premise a Genesys Cloud",
    net_5_desc: "Migración de infraestructura de telefonía basado en Asterisk hacia Genesys Cloud, asegurando la continuidad del negocio en 5 países (tráfico de llamadas, colas, agentes, flujos e IVRs).",
    net_6_title: "Scripts de automatización para Genesys Cloud",
    net_6_desc: "Scripts en Python para la automatización, gestión y extracción de datos en la plataforma de Contact Center en la nube Genesys Cloud CX utilizando sus APIs oficiales.",
    net_7_title: "Virtualizaciones",
    net_7_desc1: "- Implementación de Zabbix en Linux CentOS para monitoreo de infraestructura TI Linio LATAM.",
    net_7_desc2: "- Virtualización de Servidor MySQL en Linux CentOS para réplica de información y métricas Call Center.",
    net_7_desc3: "- Decomiso de sistemas heredados (Cisco Prime) debido a vulnerabilidades latentes.",
    net_7_desc4: "- Virtualización de Servidor Linux CentOS para almacenamiento de Backup e información de egresos, cuentas de correo.",

    certifications_title: "Certificaciones",

    skills_title: "Habilidades técnicas",
    skills_cloud: "Cloud e infraestructura como código",
    skills_devops: "Contenedores y CI/CD",
    skills_observability: "Monitoreo",
    skills_networking: "Redes",
    skills_automation: "Automatización",
    skills_systems: "Sistemas y virtualización",
    skill_cloudformation: "CloudFormation (básico)",

    experience_title: "Experiencia Laboral",

    experience_1_dates: "Agosto, 2024 – Mayo, 2026",
    experience_1_description_1: "Liderazgo y ejecución de proyectos regionales de networking y seguridad en campus corporativo, mejorando la velocidad de despliegue en 15% en Chile, Colombia y Perú.",
    experience_1_description_2: "Liderazgo y ejecución de migración y actualización masiva de 400 switches Cisco Serie 9000 mediante Cisco Catalyst Center, pasando de un 14% a 60% en el compliance regional.",
    experience_1_description_3: "Decomiso y reemplazo seguro de sistemas heredados (como Cisco Prime) debido a vulnerabilidades latentes.",
    experience_1_description_4: "Automatización de tareas repetitivas de red mediante scripts en Python y consumo de la API de Netbox, reduciendo tiempos de aprovisionamiento.",
    experience_1_description_5: "Soporte nivel 2 en redes LAN, WLAN y WAN para entornos multi-vendor (Cisco, Huawei, Extreme).",
    experience_1_description_6: "Desarrollo de scripts en Python para tareas de compliance, remediación de vulnerabilidades y configuración masiva.",
    experience_1_description_7: "Coordinación técnica regional con equipos de infraestructura, proveedores y seguridad (Argentina, Chile, Perú, Colombia).",

    experience_2_title: "Especialista IT / Platform Engineer",
    experience_2_dates: "Septiembre, 2019 – Agosto, 2024",
    experience_2_description_1: "Administración y soporte L2/L3 de una plataforma híbrida con Windows Server (Active Directory, GPO, WSUS) y Linux (Ubuntu, CentOS) para +500 usuarios, con 99.9% de uptime.",
    experience_2_description_2: "Migración crítica de telefonía On-Premise (Asterisk) a Genesys Cloud con continuidad en 5 países (flujos, IVRs y tráfico de llamadas), y administración central de la telefonía regional con 99.3% de disponibilidad.",
    experience_2_description_3: "Seguridad perimetral con firewalls y túneles VPN Site-Site / SSL (Fortinet, Sophos, pfSense).",
    experience_2_description_4: "Implementación de Zabbix para el monitoreo proactivo (alertas y métricas) de la infraestructura TI de Linio LATAM.",
    experience_2_description_5: "Virtualización de servidores y servicios con Hyper-V y Proxmox; gestión de licenciamiento y permisos en Office 365 / SharePoint.",

    experience_3_title: "Supervisor IT",
    experience_3_dates: "Agosto, 2016 – Septiembre, 2019",
    experience_3_description_1: "Administración de Windows Server (Active Directory, GPO, WSUS) y Linux (Ubuntu Server, CentOS) para +500 usuarios, con 99.9% de uptime.",
    experience_3_description_2: "Administración de la telefonía Asterisk y la base de datos MySQL de la solución, de firewalls y de VPN Site-Site / SSL.",
    experience_3_description_3: "Implementación de Zabbix, análisis de rendimiento con Wireshark y logs, y documentación de los procesos y políticas de administración de TI.",

    education_title: "Educación",
    education_1_title: "Pregrado en Ingeniería de Telecomunicaciones",
    education_1_dates: "Graduado (2012)",

    footer_text: "© 2026 Wilhen Figueredo Hernández. Alojado en infraestructura serverless de AWS.",
  },

  en: {
    page_title: "Wilhen Figueredo Hernandez | Network & Cloud Engineer",

    header_title: "Network & Cloud Engineer | Networking · Automation · AWS · Terraform",
    header_subtitle: "Telecommunications Engineer with over 10 years in corporate infrastructure and networking",
    cta_cloud: "Cloud Projects",
    cta_network: "Networking Projects",
    download_cv: "Download CV",

    profile_title: "Professional profile",
    profile_p1: `Telecommunications Engineer with over 10 years operating networks and critical infrastructure in multi-country corporate environments: multi-vendor networks (<span class="text-blue-400">Cisco, Huawei, Fortinet, Extreme</span>), SDN with <span class="text-blue-400">Cisco Catalyst Center</span>, automation with <span class="text-blue-400">Python</span>, <span class="text-blue-400">Windows/Linux</span> servers, and Zabbix monitoring.`,
    profile_p2: `On top of that base I added cloud infrastructure: I build and automate architectures on <span class="text-blue-400">AWS with Terraform</span> and automate deployments with <span class="text-blue-400">GitHub Actions</span>. I hold the AWS Solutions Architect Associate and Cloud Practitioner certifications. I am looking for roles that combine networking, automation, and cloud.`,

    projects_title: "Cloud Projects",
    projects_intro: "Personal lab projects. All the code is on GitHub.",
    project_status_wip: "In progress",
    view_repo: "View code on GitHub",

    proj_1_title: "AWS three-tier with Terraform",
    proj_1_desc: `Three-tier architecture deployed entirely with Terraform: a VPC with public and private subnets across 2 availability zones, an Application Load Balancer, an Auto Scaling Group (2 to 4 instances, scaling on CPU), and RDS MySQL with the password stored in Secrets Manager. Instances have no public IP and no SSH: access is through SSM. Terraform state lives in S3 with locking in DynamoDB. The README lists the security practices applied and the ones still missing for production.`,

    proj_2_title: "This site: serverless hosting on AWS",
    proj_2_desc: `Static site in a private S3 bucket that only CloudFront can read, through Origin Access Control. Domain on Route 53 and HTTPS with an ACM certificate. All infrastructure is in Terraform with remote state, and GitHub Actions runs the deployment.`,

    proj_3_title: "F1 Stats: FastAPI API and container",
    proj_3_desc: `Web application with an async FastAPI backend (httpx), an in-memory TTL cache with per-URL locking, pytest tests with no network calls, and a Docker container. The GitHub Actions pipeline builds the image, starts the container, checks its health, and runs the tests. I use the project as an AWS deployment lab (ECS Fargate); automation with Terraform is in progress.`,

    proj_4_title: "Monitoring stack with Docker Compose",
    proj_4_desc: `Node Exporter, Prometheus, and Grafana started with a single command. The datasource and dashboard are provisioned from files, with health checks, startup ordering, persistent volumes, and an isolated network. It complements my earlier experience with Zabbix.`,

    net_title: "Professional projects in networking and automation",
    net_1_title: "Automated network auditing and remediation (NetDevOps)",
    net_1_desc: "Internal tools in Python (Netmiko / Pandas) to audit, bulk-configure, and remediate vulnerabilities across +1000 network nodes. First-year result: 30% lower response times and 25% better compliance.",
    net_2_title: "Mass upgrade of 400 Cisco 9000 Series switches",
    net_2_desc: "Led the migration and upgrade with Cisco Catalyst Center to reduce technological obsolescence and secure the regional network estate. Regional compliance rose from 14% to 60%.",
    net_3_title: "Multi-vendor quick configuration scripts",
    net_3_desc: "Python scripts for Cisco IOS-X, NX-OS, Extreme, and Huawei that cut human errors by 40% and reduced resolution times.",
    net_4_title: "Genesys Cloud call backup to AWS S3",
    net_4_desc: "Integration between Genesys Cloud and an S3 bucket to ensure availability and disaster recovery of the call backup.",
    net_5_title: "Migration telephony infraestructure On-premise to Genesys Cloud",
    net_5_desc: "Migration of critical telephony infrastructure from On-Premise to Genesys Cloud, ensuring business continuity in 5 countries (call traffic, queues, agents, flows and IVRs).",
    net_6_title: "Automation Scripts for Genesys Cloud Management",
    net_6_desc: "Python Scripts for automation, management and data extraction on the Genesys Cloud CX Contact Center platform using its official APIs.",
    net_7_title: "Virtualization",
    net_7_desc1: "- Implementation of Zabbix on Linux CentOS for monitoring Linio LATAM IT infrastructure",
    net_7_desc2: "- Virtualization of MySQL Server for replication of information and Contact Center metrics.",
    net_7_desc3: "- Decommissioning of secure replacement of legacy systems (Cisco Prime) due to latent vulnerabilities.",
    net_7_desc4: "- Virtualization of Linux Server (CentOS) for storage of backup and information of expenses, email accounts.",

    certifications_title: "Certifications",

    skills_title: "Technical Skills",
    skills_cloud: "Cloud and infrastructure as code",
    skills_devops: "Containers and CI/CD",
    skills_observability: "Monitoring",
    skills_networking: "Networking",
    skills_automation: "Automation",
    skills_systems: "Systems and virtualization",
    skill_cloudformation: "CloudFormation (basic)",

    experience_title: "Work Experience",

    experience_1_dates: "August, 2024 – May, 2026",
    experience_1_description_1: "Led and executed large-scale regional networking and security projects on a corporate campus, improving deployment speed by 15% across Chile, Colombia, and Peru.",
    experience_1_description_2: "Led and executed the mass migration and upgrade of 400 Cisco Catalyst 9000 Series switches using Cisco Catalyst Center, raising regional compliance from 14% to 60%.",
    experience_1_description_3: "Decommissioned and securely replaced legacy systems (such as Cisco Prime) because of latent vulnerabilities.",
    experience_1_description_4: "Automated repetitive network tasks with Python scripts and the Netbox API, reducing provisioning times.",
    experience_1_description_5: "Level 2 support for LAN, WLAN, and WAN networks in multi-vendor environments (Cisco, Huawei, Extreme).",
    experience_1_description_6: "Developed Python scripts for compliance tasks, vulnerability remediation, and bulk configuration.",
    experience_1_description_7: "Regional technical coordination with infrastructure, vendor, and security teams (Argentina, Chile, Peru, Colombia).",

    experience_2_title: "IT Specialist / Platform Engineer",
    experience_2_dates: "September, 2019 – August, 2024",
    experience_2_description_1: "Administration and L2/L3 support for a hybrid platform of Windows Server (Active Directory, GPO, WSUS) and Linux (Ubuntu, CentOS) for over 500 users, with 99.9% uptime.",
    experience_2_description_2: "Critical migration of On-Premise telephony (Asterisk) to Genesys Cloud with continuity across 5 countries (flows, IVRs, and call traffic), and central administration of regional telephony with 99.3% availability.",
    experience_2_description_3: "Perimeter security with firewalls and Site-Site / SSL VPN tunnels (Fortinet, Sophos, pfSense).",
    experience_2_description_4: "Implemented Zabbix for proactive monitoring (alerts and metrics) of Linio LATAM's IT infrastructure.",
    experience_2_description_5: "Server and service virtualization with Hyper-V and Proxmox; Office 365 / SharePoint licensing and permissions management.",

    experience_3_title: "IT Supervisor",
    experience_3_dates: "August, 2016 – September, 2019",
    experience_3_description_1: "Administration of Windows Server (Active Directory, GPO, WSUS) and Linux (Ubuntu Server, CentOS) for over 500 users, with 99.9% uptime.",
    experience_3_description_2: "Administration of the Asterisk telephony and MySQL database of the solution, plus firewalls and Site-Site / SSL VPN.",
    experience_3_description_3: "Implemented Zabbix, analyzed performance with Wireshark and logs, and documented IT administration processes and policies.",

    education_title: "Education",
    education_1_title: "Bachelor's Degree in Telecommunications Engineering",
    education_1_dates: "Graduated (2012)",

    footer_text: "© 2026 Wilhen Figueredo Hernandez. Hosted on serverless AWS infrastructure.",
  },
};
