import { Project, Experience, Skill, NavLink } from '../types';

export const PERSONAL = {
  name: 'Anshu Kushwaha',
  role: 'Full-Stack Engineer & Cloud Architect',
  email: 'kushawahaanshu8858@gmail.com',
  location: 'Vapi, Gujarat, India',
  company: 'Quancore Softech',
  companyUrl: 'https://quancoresoftech.com',
  tenure: 'Sep 2015 – Present',
  website: 'https://anshu.kushawaha.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: [
    'Over the past 9 years at Quancore Softech, I\'ve had the privilege of architecting and shipping production platforms used by hundreds of thousands of users. My work spans the full spectrum — from building Python rendering engines and real-time WebRTC platforms to designing GPU-aware Kubernetes clusters and multi-cloud CI/CD pipelines.',
    'What drives my engineering is the conviction that the best infrastructure is invisible. I write the application code and design the systems that run it, which means I can eliminate friction at every layer — whether it\'s optimizing a PostgreSQL query or re-architecting a deployment pipeline to cut release cycles from days to minutes.',
    'When I\'m not engineering, you\'ll find me exploring cloud-native tooling, contributing to open-source projects, and mentoring the next generation of developers at Quancore.',
  ],
  heroLine: 'I build things for the web.',
  heroDescription:
    'Full-stack engineer and cloud architect with 9+ years of experience shipping production platforms — from rendering engines and virtual exhibition systems to GPU-aware Kubernetes clusters and multi-cloud CI/CD pipelines.',
  techHighlights: [
    'Python / FastAPI',
    'React / Vue.js',
    'Node.js / TypeScript',
    'Kubernetes / Docker',
    'AWS / GCP',
    'PostgreSQL / Redis',
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'dzicard',
    title: 'Dzicard — Digital Card & Poster Engine',
    description:
      'Automated high-scale generation platform for digital business cards, invitations, and marketing posters. Powered by a Python FastAPI backend with asynchronous Celery worker pools, Cairo vector rasterizers, and AWS S3 CDN delivery.',
    tags: ['Python', 'FastAPI', 'Celery', 'Vue.js', 'Redis', 'PostgreSQL', 'AWS S3'],
    impact: [
      { label: 'Render latency', value: '<850ms' },
      { label: 'Cards processed', value: '500,000+' },
      { label: 'Delivery', value: 'Global Edge CDN' },
    ],
    liveUrl: 'https://dzicard.com',
    year: '2019',
    featured: true,
  },
  {
    id: 'expoburg',
    title: 'Expoburg — B2B Virtual Trade Exhibition',
    description:
      'Large-scale virtual exhibition and buyer-seller marketplace supporting concurrent trade show pavilions, live streaming webinars, 1-on-1 attendee matchmaking via WebRTC, and multi-tenant exhibitor self-service portals.',
    tags: ['WebRTC', 'Laravel', 'Node.js', 'React', 'WebSocket', 'Elasticsearch', 'MySQL'],
    impact: [
      { label: 'Concurrent users', value: '12,000+' },
      { label: 'Search latency', value: '<14ms' },
      { label: 'Onboarding', value: 'Self-serve' },
    ],
    liveUrl: 'https://expoburg.com',
    year: '2020',
    featured: true,
  },
  {
    id: 'nuhire',
    title: 'NuHire — Cloud Platform & K8s Optimization',
    description:
      'Enterprise platform infrastructure for candidate intelligence and assessment workflows. Orchestrated Kubernetes cluster optimization, DMZ traffic isolation, GPU-aware container scheduling for AI evaluations, and continuous image optimization.',
    tags: ['Kubernetes', 'Docker', 'GPU Scheduling', 'Envoy', 'Prometheus', 'Grafana'],
    impact: [
      { label: 'Image pull time', value: '-74%' },
      { label: 'Pod crash rate', value: '0.00%' },
      { label: 'Security', value: 'DMZ Isolated' },
    ],
    liveUrl: 'https://developer.nuhire.in',
    year: '2022',
    featured: true,
  },
  {
    id: 'infizero',
    title: 'Infizero — Enterprise ERP & QR Infrastructure',
    description:
      'Unified architecture powering Infizero, QR-Codifier, and PikStack. Multi-tenant ERP managing complex equipment rental schedules, dynamic custom form generators, and automated QR code asset tracking.',
    tags: ['Vue 3', 'Angular', 'Node.js', 'PostgreSQL', 'Dynamic Forms', 'QR Engine'],
    impact: [
      { label: 'Double bookings', value: 'Zero' },
      { label: 'Form load', value: '<35ms' },
      { label: 'QR dispatch', value: 'Real-time' },
    ],
    liveUrl: 'https://infizero.com',
    year: '2019',
  },
  {
    id: 'myvapi',
    title: 'MyVapi — Hyperlocal City Portal & Directory',
    description:
      'Hyperlocal city search engine, B2B directory, and web services platform for the Vapi industrial cluster. High-performance PHP backend serving directory APIs, classifieds, emergency services, and municipal departments.',
    tags: ['PHP', 'MySQL', 'REST APIs', 'Apache', 'Caching', 'Search'],
    impact: [
      { label: 'Categories', value: '100+' },
      { label: 'Response time', value: '<200ms' },
      { label: 'Cache ratio', value: '94.2%' },
    ],
    liveUrl: 'https://myvapi.com',
    year: '2016',
  },
  {
    id: 'commerce_bots',
    title: 'Enterprise Storefronts & Telegram Bots',
    description:
      'Modular enterprise storefronts on Bagisto Laravel and Magento, paired with automated Telegram bot engines for insurance policy queries, premium calculations, and notification dispatch.',
    tags: ['Bagisto', 'Magento', 'Telegram API', 'Python', 'Redis', 'Payment Gateways'],
    impact: [
      { label: 'Response time', value: '<180ms' },
      { label: 'Auto-resolution', value: '91%' },
      { label: 'Checkout', value: '<1.2s' },
    ],
    liveUrl: 'https://quancoresoftech.com',
    year: '2020',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    period: '2021 — Present',
    role: 'Platform & DevOps Lead, Core Cloud Architect',
    company: 'Quancore Softech',
    description:
      'Leading multi-cloud infrastructure across AWS, GCP, and Hostinger. Implementing Kubernetes GPU workload scheduling, automated CI/CD pipelines, and high-availability systems.',
    highlights: [
      'Architected multi-cluster Kubernetes infrastructure powering Dzicard, Expoburg, and NuHire',
      'Engineered automated GitOps deployment pipelines reducing cycle time from 4 days to 4 minutes',
      'Configured GPU-aware Kubernetes scheduling with DMZ isolation for ML inference workloads',
      'Mentored engineering team on distributed system resiliency and zero-downtime deployment patterns',
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform', 'ArgoCD', 'Python', 'FastAPI', 'Node.js'],
  },
  {
    period: '2018 — 2021',
    role: 'Senior Full-Stack & Systems Engineer',
    company: 'Quancore Softech',
    description:
      'Led development on flagship SaaS products. Spearheaded Python microservices, WebRTC video streaming, and headless commerce implementations.',
    highlights: [
      'Built Dzicard vector rendering engine processing 500,000+ cards with sub-second latency',
      'Architected Expoburg virtual expo platform handling 12,000+ concurrent attendees',
      'Engineered multi-tenant ERP with atomic PostgreSQL locking and dynamic form hydration',
      'Designed Telegram bot webhook services with Redis state machines for policy calculations',
    ],
    technologies: ['Python', 'FastAPI', 'Celery', 'Redis', 'Vue.js', 'React', 'Laravel', 'PostgreSQL', 'WebRTC'],
  },
  {
    period: '2015 — 2018',
    role: 'Full-Stack Developer',
    company: 'Quancore Softech',
    description:
      'Built core web services with PHP, Laravel, Node.js, and modern JavaScript. Implemented complex SQL schemas, REST APIs, and e-commerce solutions.',
    highlights: [
      'Engineered MyVapi hyperlocal portal with 100+ categories and aggressive cache tiers',
      'Developed high-volume MySQL schemas with optimized indexes and search pipelines',
      'Created custom e-commerce extensions and payment gateway integrations',
      'Established containerized dev environments and automated testing suites',
    ],
    technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'JavaScript', 'REST APIs', 'Apache', 'Linux'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python / FastAPI', category: 'Languages', level: 95, years: '9+' },
  { name: 'Node.js / TypeScript', category: 'Languages', level: 92, years: '8+' },
  { name: 'PHP / Laravel', category: 'Languages', level: 90, years: '9+' },
  { name: 'Go', category: 'Languages', level: 75, years: '4+' },
  { name: 'React / Vue.js', category: 'Frontend', level: 90, years: '7+' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 88, years: '4+' },
  { name: 'Kubernetes / EKS', category: 'Infrastructure', level: 92, years: '6+' },
  { name: 'Docker', category: 'Infrastructure', level: 95, years: '7+' },
  { name: 'Terraform / IaC', category: 'Infrastructure', level: 88, years: '6+' },
  { name: 'Istio / Service Mesh', category: 'Infrastructure', level: 78, years: '4+' },
  { name: 'AWS / GCP', category: 'Cloud', level: 90, years: '9+' },
  { name: 'PostgreSQL / MySQL', category: 'Data', level: 93, years: '9+' },
  { name: 'Redis / Kafka', category: 'Data', level: 85, years: '6+' },
  { name: 'CI/CD / GitOps', category: 'DevOps', level: 90, years: '5+' },
  { name: 'Prometheus / Grafana', category: 'DevOps', level: 85, years: '5+' },
];
