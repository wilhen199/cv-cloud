const translations = {
  es: {
    page_title: "Wilhen Figueredo Hernández - CV Digital",

    header_title: "Ingeniero de Telecomunicaciones | Cloud Engineer | Network Automation Specialist",

    download_cv: "Descargar CV",

    profile_title: "Perfil Profesional",

    profile_p1: `Ingeniero en Telecomunicaciones con más de 10 años de trayectoria liderando el diseño, despliegue y optimización de infraestructuras críticas en entornos corporativos de alta escala. Con una sólida base en ingeniería de redes y administración de servidores,
      "mi enfoque actual se centra en la convergencia entre la infraestructura robusta y la agilidad mediante la automatización.`,

    profile_p2: `Cuento con una trayectoria destacada gestionando arquitecturas multi-vendor (<span class="text-blue-400">Cisco, Huawei, Fortinet, Extreme</span>) y liderando la transición hacia redes definidas por software
                    (SDN) mediante <span class="text-blue-400">Cisco Catalyst Center</span>. Especialista en la creación de soluciones de automatización con <span class="text-blue-400">Python y Bash</span>, orientadas a la remediación de vulnerabilidades y la eficiencia operativa en entornos L2/L3.
                    Experiencia integral en ecosistemas híbridos (<span class="text-blue-400">Windows/Linux</span>), monitoreo proactivo con Zabbix y despliegue de soluciones en <span class="text-blue-400">AWS / Azure</span>. Profesional orientado a la alta disponibilidad y la seguridad perimetral, con capacidad probada para ejecutar proyectos estratégicos bajo metodologías ágiles.`,

    certifications_title: "Certificaciones",

    skills_title: "Habilidades Técnicas",

    projects_title: "Proyectos de Alto Impacto",

    experience_title: "Experiencia Laboral",

    project_1_title: "Auditoría Automatizada NetDevOps",

    project_1_description: `<span class="text-white">Desarrollo de herramientas internas en Python (Netmiko / Pandas)</span> para configuración masiva, auditoría y remediación automática de vulnerabilidades en +1000 nodos de red.
                              <span class="text-white">Resultados: reducción del 30% en tiempos de respuesta y mejora del compliance en un 25% en el primer año.</span>
                               <a href="https://github.com/wilhen199/networking" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">Repositorio en GitHub</a>`,

    project_2_title: "Mitigación de Error Operativo",

    project_2_description: `<span class="text-white">Creación de scripts de configuración rápida</span> para plataformas <span class="text-white">Cisco IOS-X, NX-OS, Extreme y Huawei</span> mediante Python, reduciendo fallos humanos en 40%.
                              <span class="text-white">Resultados: mejora en la calidad del servicio y reducción de tiempos de resolución.</span>`,

    project_3_title: "Gestión de Proyectos",

    project_3_description: `Liderazgo en la actualización masiva de <span class="text-white">400 switches Cisco Serie 9000</span> mediante <span class="text-white">Cisco Catalyst Center</span>, reduciendo la obsolescencia tecnológica y garantizando la seguridad del parque de red regional, pasando de un 14% a 60%.`,

    project_4_title: "Migración Backup Cloud",

    project_4_description: `<span class="font-bold text-white">Migración</span> exitosa de backup de llamadas de Genesys Cloud a Bucket S3 de AWS (<span class="text-white">Integración Genesys Cloud – AWS S3 </span>), asegurando la disponibilidad y recuperación ante desastres.`,

    project_5_title: "Migración On-Premise a Cloud",

    project_5_description: `<span class="font-bold text-white">Migración</span> exitosa de infraestructura crítica de telefonía <span class="text-white"> On-Premise a Genesys Cloud</span>, asegurando la continuidad del negocio en 5 países (Tráfico de llamadas, flujos e IVRs).`,

    project_6_title: "Virtualización",

    project_6_description: `Implementación de <span class="text-white">Zabbix</span> para monitoreo de infraestructura TI Linio LATAM`,

    project_7_title: "Virtualización MySQL",

    project_7_description: `<span class="text-white">Virtualización de Servidor MySQL</span> para réplica de información y métricas Call Center.`,

    project_8_title: "Decomiso Seguro",

    project_8_description: `<span class="text-white">Decomiso</span> reemplazo seguro de sistemas heredados (<span class="text-white">Cisco Prime</span>) debido a vulnerabilidades latentes.`,

    project_9_title: "Virtualización Servidor Linux",

    project_9_description: `<span class="text-white">Virtualización de Servidor Linux</span> para almacenamiento de Backup e información de gastos, cuentas de correo.`,

    experience_1_dates: "Agosto, 2024 – Mayo, 2026",

    experience_2_dates: "Septiembre, 2019 – Agosto, 2024",

    experience_3_dates: "Agosto, 2016 – Septiembre, 2019",

    experience_2_title: "Especialista IT / Platform Engineer",

    experience_3_title: "Supervisor IT",

    experience_1_description_1: "Liderezgo y ejecución de proyectos regionales de networking, seguridad e infraestructura de gran escala en campus corporativo, mejorando la velocidad de despliegue en 15% en Chile, Colombia y Perú.",

    experience_1_description_2: "Liderazgo y ejecución de migración y actualización masiva de 400 switches Cisco Serie 9000 mediante Cisco Catalyst Center, pasando de un 14% a 60% en el compliance regional.",

    experience_1_description_3: "Decomiso y reemplazo seguro de sistemas heredados (como Cisco Prime) debido a vulnerabilidades latentes.",

    experience_1_description_4: "Automatización de tareas repetitivas de red mediante scripts en Python y consumo de la API de Netbox, reduciendo tiempos de aprovisionamiento.",

    experience_1_description_5: "Soporte nivel 2 en redes LAN, WLAN y WAN para entornos multi-vendor (Cisco, Huawei, Extreme).",

    experience_1_description_6: "Desarrollo de scripts en Python para tareas de compliance, remediación de vulnerabilidades y configuración masiva.",

    experience_1_description_7: "Coordinación técnica regional con equipos de infraestructura y proveedores (Argentina, Chile, Perú, Colombia).",

    experience_2_description_1: "Administración y soporte L2/L3 para plataforma híbrida de servidores Windows Server (Active Directory, GPO, WSUS) y Linux (Ubuntu, CentOS).para +500 usuarios, manteniento uptime del 99.9%",

    experience_2_description_2: "Migración crítica de telefonía On-Premise (Asterisk) a Genesys Cloud asegurando continuidad en 5 países (flujos, IVRs y tráfico de llamadas).",

    experience_2_description_3: "Administración central telefónica (Genesys Cloud, Asterisk) para toda la región, con una disponibilidad de 99.3%",

    experience_2_description_4: "Administración de seguridad perimetral a través de Firewalls y túneles VPN Site-Site / SSL (Fortinet, Sophos, pfSense).",

    experience_2_description_5: "Implementación y puesta en marcha de Zabbix para el monitoreo proactivo de la infraestructura TI de Linio LATAM.",

    experience_2_description_6: "Gestión integral de licenciamiento y permisos en Office 365 / SharePoint.",

    experience_3_description_1: "Administración Windows Server (Active Directory, GPO, WSUS) y Linux (Ubuntu Server, CentOS) para +500 usuarios, manteniento uptime del 99.9%.",

    experience_3_description_2: "Administración central telefónica (Asterisk) y base de datos (MySQL) de la solución.",

    experience_3_description_3: "Administración Firewall y VPN Site-Site / VPN SSL (Fortinet, pfSense).",

    experience_3_description_4: "Administración Office 365 (Licenciamiento, Grupos, Permisos en SharePoint).",

    experience_3_description_5: "Implementación y administración Zabbix para infraestructura Linio Venezuela.",

    experience_3_description_6: "Análisis de rendimiento de Infraestructura Tecnológica con wireshark, revisión de logs y zabbix. Definición y documentación de los procesos y políticas de Administración de TI.",

    education_title: "Educación",

    education_1_title: "Pregrado en Ingeniería de Telecomunicaciones",

    education_1_dates: "Graduado (2012)",
  },

  en: {
    page_title: "Wilhen Figueredo Hernández - Digital Resume",

    header_title: "Telecommunications Engineer | Cloud Engineer | Network Automation Specialist",

    download_cv: "Download CV",

    profile_title: "Professional Profile",

    profile_p1: "Telecommunications Engineer with over 10 years of experience leading the design, deployment, and optimization of critical infrastructure in large-scale corporate environments. With a strong background in network engineering and server administration, my current focus is on the convergence of robust infrastructure and agility through automation.",

    profile_p2: `I have a proven track record of managing multi-vendor architectures (<span class="text-blue-400">Cisco, Huawei, Fortinet, Extreme</span>) and leading the transition to software-defined networking (SDN) using <span class="text-blue-400">Cisco Catalyst Center</span>. I specialize in creating automation solutions with <span class="text-blue-400">Python y Bash</span>,  focused on vulnerability remediation and operational efficiency in L2/L3 environments. I have comprehensive experience in hybrid ecosystems (Windows/Linux), proactive monitoring with Zabbix, and deploying solutions on <span class="text-blue-400">AWS/Azure</span>. I am a professional focused on high availability and perimeter security, with a proven ability to execute strategic projects using agile methodologies.`,

    certifications_title: "Certifications",

    skills_title: "Technical Skills",

    projects_title: "High-Impact Projects",

    experience_title: "Work Experience",

    project_1_title: "Automated NetDevOps",

    project_1_description: `<span class="text-white">Development of internal tools in Python (Netmiko / Pandas)</span> for mass configuration, auditing, and automatic remediation of vulnerabilities in +1000 network nodes.
                              <span class="text-white">Results: 30% reduction in response times and a 25% improvement in compliance in the first year.</span>
                              <a href="https://github.com/wilhen199/networking" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">GitHub repository</a>`,

    project_2_title: "Operational Error Mitigation",

    project_2_description: `<span class="text-white">Creation of quick configuration scripts</span> for <span class="text-white">Cisco IOS-X, NX-OS, Extreme, and Huawei</span> platforms using Python, reducing human errors by 40%.
                              <span class="text-white">Results: improved service quality and reduced resolution times.</span>`,

    project_3_title: "Project Management",

    project_3_description: `Leadership in the massive upgrade of <span class="text-white">400 Cisco Series 9000 switches</span> using <span class="text-white">Cisco Catalyst Center</span>, reducing technological obsolescence and ensuring the security of the regional network park, increasing from 14% to 60%.`,

    project_4_title: "Cloud Backup Migration",

    project_4_description: `<span class="font-bold text-white">Migration</span> of call backup from Genesys Cloud to AWS S3 Bucket (<span class="text-white">Genesys Cloud – AWS S3 Integration</span>), ensuring availability and disaster recovery.`,

    project_5_title: "On-Premise to Cloud Migration",

    project_5_description: `<span class="font-bold text-white">Migration</span> of critical telephony infrastructure from <span class="text-white">On-Premise to Genesys Cloud</span>, ensuring business continuity in 5 countries (Call traffic, flows, and IVRs).`,

    project_6_title: "Virtualization",

    project_6_description: `Implementation of <span class="text-white">Zabbix</span> for monitoring Linio LATAM IT infrastructure`,

    project_7_title: "MySQL Virtualization",

    project_7_description: `<span class="text-white">Virtualization of MySQL Server</span> for replication of information and Call Center metrics.`,

    project_8_title: "Secure Decommissioning",

    project_8_description: `<span class="text-white">Decommissioning</span> of secure replacement of legacy systems (<span class="text-white">Cisco Prime</span>) due to latent vulnerabilities.`,

    project_9_title: "Linux Server Virtualization",

    project_9_description: `<span class="text-white">Virtualization of Linux Server</span> for storage of Backup and information of expenses, email accounts.`,

    experience_1_dates: "August, 2024 – May, 2026",

    experience_2_dates: "September, 2019 – August, 2024",

    experience_3_dates: "August, 2016 – September, 2019",

    experience_2_title: "IT Specialist / Platform Engineer",

    experience_3_title: "IT Supervisor",

    experience_1_description_1: "Management and execution +5 regional networking and security projects on corporate campus, improving deployment speed by 15% across Colombia, Chile and Peru.",

    experience_1_description_2: "Leadership and execution the mass migration and upgrade of 400 Cisco Catalyst 9000 Series switches using Cisco Catalyst Center, increasing regional compliance from 14% to 60%.",

    experience_1_description_3: "Decommissioning and secure replacement of legacy systems (such as Cisco Prime) due to latent vulnerabilities.",

    experience_1_description_4: "Automation of repetitive network tasks using Python scripts and consumption of the Netbox API, reducing provisioning times.",

    experience_1_description_5: "Level 2 support in LAN, WLAN, and WAN networks for multi-vendor environments (Cisco, Huawei, Extreme).",

    experience_1_description_6: "Development of Python scripts for compliance tasks, vulnerability remediation, and mass configuration.",

    experience_1_description_7: "Regional technical coordination with infrastructure teams and providers (Argentina, Chile, Peru, Colombia).",

    experience_2_description_1: "Administration and L2/L3 support for a hybrid platform of Windows Server (Active Directory, GPO, WSUS) and Linux (Ubuntu, CentOS) servers for over 500 users, maintaining 99.9% uptime.",

    experience_2_description_2: "Critical migration of On-Premise telephony (Asterisk) to Genesys Cloud ensuring continuity in 5 countries (flows, IVRs, and call traffic).",

    experience_2_description_3: "Centralized telephone system administration (Genesys Cloud, Asterisk) for the entire region, with 99.3% availability.",

    experience_2_description_4: "Administration of perimeter security through Firewalls and Site-Site / SSL VPN tunnels (Fortinet, Sophos, pfSense).",

    experience_2_description_5: "Implementation and commissioning of Zabbix for proactive monitoring of Linio LATAM's IT infrastructure.",

    experience_2_description_6: "Comprehensive management of licensing and permissions in Office 365 / SharePoint.",

    experience_3_description_1: "Administration and L2/L3 support for a hybrid platform of Windows Server (Active Directory, GPO, WSUS) and Linux (Ubuntu, CentOS) servers for over 500 users, maintaining 99.9% uptime.",

    experience_3_description_2: "Management of the soluion’s PBX Telephony (Asterisk) and database (MySQL).",

    experience_3_description_3: "Firewall and VPN Site-Site / VPN SSL management (Fortinet, Sophos, pfSense)",

    experience_3_description_4: "Office 365 management (Licensing, Groups, Sharepoint permissions)",

    experience_3_description_5: "Implementation and management of zabbix for Linio Venezuela infraestructure.",

    experience_3_description_6: "Performance analysis of infraestructure with wireshark, logs review and zabbix. Definition and documentation of IT administration processes and policies.",

    education_title: "Education",

    education_1_title: "Bachelor's Degree in Telecommunications Engineering",

    education_1_dates: "Graduated (2012)",
  },
};
