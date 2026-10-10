import { CaseStudy, CompetencyPillar, MetricCard, PipelineStage, TechItem, TimelineMilestone } from '../types';

export const SYSARCH_METRICS: MetricCard[] = [
  {
    id: 'dev_origins',
    label: 'DEV_ORIGINS',
    value: '8+ Years',
    sublabel: 'Full-Stack Experience',
    detail: 'React, Node, Go, DB design before transitioning fully to core Platform/SRE.'
  },
  {
    id: 'availability_slo',
    label: 'AVAILABILITY_SLO',
    value: '99.99%',
    sublabel: 'Production Uptime',
    detail: 'Across 6 multi-region Kubernetes clusters handling 42M reqs/day.'
  },
  {
    id: 'deployment_velocity',
    label: 'DEPLOYMENT_VELOCITY',
    value: '<12m',
    sublabel: 'Avg Cycle Time',
    detail: 'From git push to production rollout via automated GitOps pipelines.'
  },
  {
    id: 'finops_efficiency',
    label: 'FINOPS_EFFICIENCY',
    value: '45%',
    sublabel: 'Cloud Cost Optimization',
    detail: 'Achieved via Karpenter auto-scaling, Spot orchestration & right-sizing.'
  }
];

export const ANSHU_METRICS: MetricCard[] = [
  {
    id: 'tenure_record',
    label: 'TENURE_RECORD',
    value: '9+ Years',
    sublabel: 'Quancore Softech',
    detail: 'Continuous dedicated software leadership and infrastructure stewardship since Sept 2015.'
  },
  {
    id: 'production_scale',
    label: 'PRODUCTION_SCALE',
    value: '10+ Live',
    sublabel: 'Enterprise & SaaS Platforms',
    detail: 'Dzicard, Expoburg, NuHire, MyVAPI, PikStack, Infizero, QR-Codifier, Bagisto ecosystems.'
  },
  {
    id: 'orchestration',
    label: 'ORCHESTRATION',
    value: 'GPU + K8s',
    sublabel: 'Workload Optimization',
    detail: 'Dynamic AI model routing, DMZ pipeline isolation, zero-downtime canary updates.'
  },
  {
    id: 'multi_cloud',
    label: 'MULTI_CLOUD',
    value: '3 Clouds',
    sublabel: 'AWS • GCP • Hostinger',
    detail: 'Unified Terraform provisioning, Docker containerization, edge caches, and cost reduction.'
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    name: '1. LINT & TEST',
    duration: '1m 14s',
    status: 'passed',
    tool: 'FastAPI / Node / Jest',
    logOutput: [
      'Running eslint v9.2.0 --max-warnings=0 ... OK',
      'Running pytest tests/unit tests/integration ... 142 passed in 48.2s',
      'Go vet and staticcheck ./... OK',
      'Result: Zero lint violations, 100% test pass rate.'
    ]
  },
  {
    id: 2,
    name: '2. OCI BUILD',
    duration: '3m 20s',
    status: 'passed',
    tool: 'Docker Multi-Stage Buildx',
    logOutput: [
      'Building target: production-distroless',
      'Layer caching: 92% hit rate via remote build cache (AWS ECR)',
      'Final image size: 28.4MB (stripped symbols, scratch base)',
      'Digest: sha256:3f8b0e414c718b9d0349279019'
    ]
  },
  {
    id: 3,
    name: '3. TRIVY SCAN',
    duration: '0 CVEs',
    status: 'passed',
    tool: 'Aqua Trivy + Cosign Sigstore',
    logOutput: [
      'Scanning OS dependencies: 0 Critical, 0 High, 0 Medium',
      'Scanning language packages (go.mod, package-lock.json): 0 vulnerabilities',
      'Signing OCI artifact with Cosign IRSA KMS key... OK',
      'Attestation uploaded to registry.'
    ]
  },
  {
    id: 4,
    name: '4. IAC APPLY',
    duration: '2m 45s',
    status: 'passed',
    tool: 'Terraform / OpenTofu + Crossplane',
    logOutput: [
      'Terraform plan: 0 to add, 1 to change, 0 to destroy',
      'Updating IAM role policy attachment for EKS IRSA... OK',
      'Applying Crossplane XR Composition: RedisCluster/v1beta1... OK',
      'State lock released: 0 drift detected.'
    ]
  },
  {
    id: 5,
    name: '5. ARGO CANARY',
    duration: '100% HEALTHY',
    status: 'passed',
    tool: 'Argo Rollouts + Flagger',
    logOutput: [
      'Initiating 10% traffic canary split to v8.4.0',
      'Prometheus check: http_request_duration_seconds p99 < 85ms (Current: 24ms)',
      'Flagger canary analysis: step 1 (20%), step 2 (50%), step 3 (100%)',
      'Promotion complete. Traffic 100% routed to stable pods. 0 rollbacks.'
    ]
  }
];

export const COMPETENCY_PILLARS: CompetencyPillar[] = [
  {
    id: 'idp',
    badge: 'SELF-SERVICE',
    title: 'Developer-First Platform Engineering (IDP / Backstage)',
    description: 'Because I spent years writing apps, I know how painful tickets and opaque infrastructure are. I build Internal Developer Platforms on Spotify Backstage and Kubernetes operators that let feature developers spin up ephemeral staging environments, databases, and microservices in under 3 minutes with zero cloud console access.',
    tags: ['Spotify Backstage', 'Crossplane', 'K8s CRDs', 'Ephemeral Env Operators'],
    icon: 'Terminal'
  },
  {
    id: 'security',
    badge: 'ZERO-TRUST',
    title: 'Zero-Trust Security, IAM & Dynamic Secrets',
    description: 'Bridging app layer tokens with infrastructure identities. Implementing HashiCorp Vault dynamic database credentials, AWS IAM Roles for Service Accounts (IRSA), SPIFFE/SPIRE workload attestation, and automated cryptographic key rotations without application restarts.',
    tags: ['HashiCorp Vault', 'AWS IRSA', 'Cosign / Sigstore', 'Istio mTLS'],
    icon: 'Shield'
  },
  {
    id: 'observability',
    badge: 'HIGH-CARDINALITY',
    title: 'Full-Spectrum Observability & OpenTelemetry',
    description: 'Diagnosing bottlenecks is seamless when you understand both the v8 garbage collection pause and the Linux cgroup CPU throttling. Standardizing OpenTelemetry SDKs into microservice boilerplates, building Grafana SLO dashboards, and configuring eBPF network telemetry for nanosecond root-cause analysis.',
    tags: ['OpenTelemetry', 'Prometheus / Thanos', 'Tempo / Jaeger', 'eBPF / Cilium'],
    icon: 'Activity'
  },
  {
    id: 'gitops',
    badge: 'GITOPS ENGINE',
    title: 'Automated CI/CD with GitOps & Canary Rollouts',
    description: 'Treating both infrastructure state and application manifests as single sources of truth in Git. Harnessing ArgoCD, Argo Rollouts, and GitHub Actions to enforce declarative parity across staging and production clusters with automatic rollback on error-rate spikes.',
    tags: ['ArgoCD', 'Terraform / OpenTofu', 'GitHub Actions', 'Helm / Kustomize'],
    icon: 'Boxes'
  }
];

export const ANSHU_COMPETENCIES: CompetencyPillar[] = [
  {
    id: 'python_microservices',
    badge: 'BACKEND ENGINES',
    title: 'Python API Services & Microservices',
    description: 'Architecting high-throughput asynchronous backends using Python (FastAPI, Flask) and Node.js. Designing custom image rendering engines, batch workers, and streaming gateways capable of handling millions of dynamic media renders and high-load traffic surges.',
    tags: ['Python / FastAPI', 'Node.js / Express', 'REST & gRPC', 'Celery / Redis'],
    icon: 'Terminal'
  },
  {
    id: 'k8s_gpu',
    badge: 'CONTAINER ORCHESTRATION',
    title: 'Kubernetes Cluster & GPU Workload Routing',
    description: 'Designing optimized K8s clusters featuring intelligent GPU-aware workload routing for machine learning and AI inference. Implementing isolated DMZs, namespace quotas, and autoscaling node pools for high-density, low-latency processing.',
    tags: ['Kubernetes (K8s)', 'GPU Node Scheduling', 'Docker Multi-Stage', 'DMZ Isolation'],
    icon: 'Boxes'
  },
  {
    id: 'ecommerce_engines',
    badge: 'ENTERPRISE E-COMMERCE',
    title: 'PHP, Laravel & Bagisto / Magento E-Commerce',
    description: 'Building custom multi-vendor commerce portals, complex rental/booking engines, and ERP database backends. Extensive customization of Bagisto Laravel e-commerce frameworks and Magento architectures with high query optimization.',
    tags: ['PHP 8.x / Laravel', 'Bagisto Framework', 'MySQL Indexing', 'React & Vue Frontends'],
    icon: 'Shield'
  },
  {
    id: 'multicloud_ops',
    badge: 'MULTI-CLOUD OPS',
    title: 'Multi-Cloud Infrastructure (AWS / GCP / Hostinger)',
    description: 'Designing, automating, and maintaining diverse cloud footprints across AWS, Google Cloud Platform, and Hostinger. Deploying automated GitHub Actions CI/CD pipelines, Nginx load balancing, SSL/TLS security hardening, and database replication.',
    tags: ['AWS EC2 / S3 / RDS', 'Google Cloud (GCP)', 'Hostinger VPS / Cloud', 'GitHub Actions CI/CD'],
    icon: 'Activity'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'eks_mesh',
    sysId: 'ARCH-EKS-MESH-01',
    badge: 'DEPLOYED_PROD',
    badgeType: 'prod',
    regionOrScale: 'MULTI-REGION: us-east-1 // eu-west-1',
    title: 'Enterprise Multi-Cluster Kubernetes Migration & Service Mesh',
    subtitle: 'Engineered zero-downtime cutover architecture decomposing monolithic infrastructure into active-active multi-region AWS EKS clusters with Istio cross-cluster routing and progressive canary gate verification.',
    manifestFile: 'flagger-canary.yaml',
    manifestType: 'k8s.crd.v1',
    tags: ['AWS EKS', 'Istio Service Mesh', 'ArgoCD', 'Terraform', 'Prometheus Canary', 'Envoy Gateway'],
    challenge: {
      title: 'THE CHALLENGE',
      description: 'Migrating core banking transaction workloads from bare-metal monoliths to multi-region AWS EKS with zero dropped sessions, strict compliance network segmentation, and zero customer downtime.'
    },
    solution: {
      title: 'ENGINEERED SOLUTION',
      description: 'Designed automated blue-green cutover scripts with Route 53 latency weighting, Istio cross-cluster service mesh mTLS, ArgoCD GitOps pipelines, and Flagger canary rollouts guarded by Prometheus error-budget SLIs.'
    },
    impact: {
      title: 'VERIFIED IMPACT',
      metrics: [
        { label: 'PRODUCTION SLA:', value: '99.995% (Zero DT)', isHighlighted: true },
        { label: 'MTTR REDUCTION:', value: '-60% (Auto-rollback)', isHighlighted: false },
        { label: 'GLOBAL SYNC:', value: '< 3.2s Git-to-Cluster', isHighlighted: false }
      ]
    },
    topology: {
      title: 'TOPOLOGY_MAP: Multi-Region Ingress & Flagger Canary',
      subtitle: 'INTER-MESH: mTLS 1.3 // CROSS_CLUSTER_ROUTE: ACTIVE // LATENCY_INGRESS: <1.8ms',
      type: 'k8s_mesh',
      details: 'Active-Active Ingress failover via Route 53 Geo DNS. Cross-cluster service mesh links US-East and EU-West over private VPC peering with Spiffe/Spire identity.'
    },
    code: {
      filename: 'flagger-canary.yaml',
      language: 'yaml',
      metaSource: 'METRIC_SOURCE: Prometheus',
      stateText: 'CANARY_STATE: STABLE',
      content: `apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: core-payment-api
  namespace: prod-finance
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: core-payment-api
  service:
    port: 8080
    gateways: [ "mesh", "istio-ingress" ]
  analysis:
    interval: 30s
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
      - name: request-success-rate
        thresholdRange: { min: 99.95 }
        interval: 1m
      - name: latency-p99
        thresholdRange: { max: 85 }
        interval: 1m`
    }
  },
  {
    id: 'idp_portal',
    sysId: 'ARCH-IDP-PORTAL-02',
    badge: 'SELF_SERVICE_PLATFORM',
    badgeType: 'idp',
    regionOrScale: 'CYCLE_TIME: 4 DAYS -> 4 MINUTES',
    title: 'Internal Developer Platform (IDP) & Self-Service Portal',
    subtitle: 'Full-stack self-service platform marrying React, TypeScript, and high-performance Go control planes to automate dynamic ephemeral dev environments, RBAC guardrails, and cloud infrastructure modules.',
    manifestFile: 'reconciler.go',
    manifestType: 'pkg/controller',
    tags: ['React / Vite', 'TypeScript', 'Go (gRPC / REST)', 'Crossplane XR', 'Terraform Cloud', 'AWS IAM OIDC'],
    challenge: {
      title: 'THE BOTTLENECK',
      description: 'Over 60 full-stack engineers were blocked filing manual tickets for staging databases, S3 buckets, and preview clusters, averaging 4.2 days lead time per feature release cycle.'
    },
    solution: {
      title: 'FULL-STACK ARCHITECTURE',
      description: 'Engineered a customized portal UI with React, backed by a Go reconciliation service that renders Crossplane Composite Resource Definitions (XRs) and triggers Terraform modules securely under zero-trust IAM.'
    },
    impact: {
      title: 'ENGINEERING GAINS',
      metrics: [
        { label: 'ENV PROVISIONING:', value: '4 min (Automated)', isHighlighted: true },
        { label: 'DEV SPRINT VELOCITY:', value: '+35% YoY', isHighlighted: false },
        { label: 'TICKET VOLUME:', value: '-92% Infra JIRA', isHighlighted: false }
      ]
    },
    topology: {
      title: 'IDP WORKFLOW: Declarative Stack Provisioning',
      subtitle: 'AUTH: Okta OIDC + IAM Roles // COST_REDUCTION: $18,400/mo // TTL Auto-Teardown: 8h max',
      type: 'idp_flow',
      details: '01. UI PORTAL (React forms) -> 02. BACKEND (Go Daemon with budget limits) -> 03. CONTROL (Crossplane translates to AWS RDS, S3, Redis) -> 04. CLUSTER (K8s vCluster with webhook).'
    },
    code: {
      filename: 'reconciler.go',
      language: 'go',
      metaSource: 'TEST_COVERAGE: 88.4%',
      stateText: 'RECONCILER: NOMINAL',
      content: `func (r *EnvReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
    var env platformv1.DevEnvironment
    if err := r.Get(ctx, req.NamespacedName, &env); err != nil {
        return ctrl.Result{}, client.IgnoreNotFound(err)
    }

    // Synthesize ephemeral cloud resource claim
    claim := crossplane.BuildCompositeEnv(&env)
    if err := r.CrossplaneClient.Apply(ctx, claim); err != nil {
        r.Metrics.ProvisionErrors.Inc()
        return ctrl.Result{RequeueAfter: time.Second * 10}, err
    }

    r.Events.Emit("Ready", env.Spec.Requester)
    return ctrl.Result{RequeueAfter: env.Spec.TTL}, nil
}`
    }
  },
  {
    id: 'keda_stream',
    sysId: 'ARCH-STREAM-KEDA-03',
    badge: 'HIGH_CONCURRENCY_STREAM',
    badgeType: 'stream',
    regionOrScale: 'LATENCY: P99 420ms -> 45ms',
    title: 'Full-Stack High-Throughput Event Ingestion Engine & SRE Telemetry',
    subtitle: 'Constructed high-throughput distributed pipeline processing 40,000+ analytics events/sec using Go/Node microservices, Apache Kafka partition buffers, and horizontal KEDA pod autoscaling driven by lag metrics.',
    manifestFile: 'keda-scaledobject.yaml',
    manifestType: 'keda.sh/v1alpha1',
    tags: ['Apache Kafka', 'Kubernetes', 'Go Workers', 'Node.js Gateway', 'KEDA (Event Autoscaler)', 'Grafana / OpenTelemetry'],
    challenge: {
      title: 'TRAFFIC SHOCK',
      description: 'Surges during global consumer sales reached 40,000 req/sec, exhausting traditional relational ingestion buffers, generating memory thrashing, and dropping critical audit telemetry.'
    },
    solution: {
      title: 'DISTRIBUTED STREAMING',
      description: 'Re-architected pipeline into a lightweight zero-allocation Go edge receiver, striped Kafka cluster with partition key hashing, and event-driven KEDA scaler managing Kubernetes worker pods dynamically.'
    },
    impact: {
      title: 'QUANTIFIED SRE METRIC',
      metrics: [
        { label: 'P99 LATENCY:', value: '45ms (Down from 420ms)', isHighlighted: true },
        { label: 'CLOUD INFRA BILL:', value: '-38% (KEDA Dynamic scale)', isHighlighted: false },
        { label: 'DATA LOSS RATE:', value: '0.000% (Strict ack)', isHighlighted: false }
      ]
    },
    topology: {
      title: 'SRE TELEMETRY: Real-time Ingestion vs Consumer Lag',
      subtitle: 'OPENTELEMETRY TRACE EXPORTER: GRPC // AUTO-RECOVERY: ACTIVE // KEDA SCALE: 8 -> 42 PODS',
      type: 'keda_stream',
      details: 'Real-time telemetry showing smooth 40k RPS handling with zero lag accumulation and dynamic scale up/down within 15 seconds.'
    },
    code: {
      filename: 'keda-scaledobject.yaml',
      language: 'yaml',
      metaSource: 'AUTOSCALE_TRIGGER: ConsumerLag',
      stateText: 'STATE: ZERO_THROTTLING',
      content: `apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: kafka-worker-scaler
spec:
  scaleTargetRef:
    name: stream-processor-go
  minReplicaCount: 4
  maxReplicaCount: 60
  triggers:
    - type: kafka
      metadata:
        bootstrapServers: kafka-prod:9092
        consumerGroup: event-analytics-v2
        topic: raw-user-telemetry
        lagThreshold: "50"`
    }
  }
];

export const ANSHU_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dzicard',
    sysId: 'QC-DZICARD-ENGINE',
    badge: 'FLAGSHIP_SAAS',
    badgeType: 'saas',
    regionOrScale: 'dzicard.com // QUANCORE SUITE',
    title: 'Dzicard & Quancore Suite: Automated Digital Card & Poster Generation Engine',
    subtitle: 'High-scale automated generation suite for Digital Cards, Invitations, Birthday Cards, and dynamic business marketing posters. Built with Python FastAPI backend services, high-resolution headless Chromium / WeasyPrint rendering workers, and automated asset delivery pipelines.',
    liveUrl: 'https://dzicard.com',
    manifestFile: 'render_engine.py',
    manifestType: 'python-fastapi/workers',
    tags: ['Python (FastAPI / Celery)', 'Vue.js / Tailwind CSS', 'Pillow & Cairo Render', 'Redis Job Queue', 'PostgreSQL', 'AWS S3 CDN Delivery'],
    challenge: {
      title: 'THE CHALLENGE',
      description: 'Rendering thousands of customized invitations, multi-page vCards, and vector-perfect marketing posters dynamically without server CPU deadlocks, memory leaks from headless browser pools, or rasterization pixelation.'
    },
    solution: {
      title: 'ENGINEERED SOLUTION',
      description: 'Built an asynchronous Python rendering pipeline using Celery worker pools, Cairo vector rasterizers, and canvas compositing. Implemented instant poster download pipelines with presigned AWS S3 streaming urls.'
    },
    impact: {
      title: 'VERIFIED IMPACT',
      metrics: [
        { label: 'RENDER LATENCY:', value: '< 850ms / Print PDF', isHighlighted: true },
        { label: 'POSTERS PROCESSED:', value: '500,000+ Cards', isHighlighted: false },
        { label: 'DELIVERY SPEED:', value: 'Global Edge CDN', isHighlighted: false }
      ]
    },
    topology: {
      title: 'POSTER & VCARD PIPELINE: Asynchronous Generation',
      subtitle: 'CELERY WORKERS: ACTIVE // ZERO DROP RATE // BUFFER_ALLOC: Zero-Leak Pool',
      type: 'poster_flow',
      details: '01. UI Dynamic Canvas (Vue) -> 02. REST API FastAPI -> 03. RENDER Cairo/PDF (300 DPI print-ready) -> 04. CDN DELIVERY S3 Stream (Signed URL).'
    },
    code: {
      filename: 'render_engine.py',
      language: 'python',
      metaSource: 'PIPELINE: PROD ONLINE',
      stateText: 'STATUS: NOMINAL',
      content: `from celery import shared_task
from core.poster_compositor import VectorCompositor
from services.storage import s3_stream_upload

@shared_task(bind=True, max_retries=3)
def generate_highres_poster(self, payload: dict) -> dict:
    # Assemble dynamic poster layers with Cairo vector engine
    canvas = VectorCompositor.build_canvas(dpi=300, format="png")
    canvas.inject_typography(payload["text_layers"])
    canvas.apply_branding(payload["logo_url"], payload["color_palette"])
    
    output_buffer = canvas.export_bytes(dpi=300, fmt="png")
    signed_url = s3_stream_upload(
        buffer=output_buffer,
        key=f"posters/{payload['uuid']}.png",
        content_type="image/png"
    )
    return {"status": "READY", "download_url": signed_url}`
    }
  },
  {
    id: 'expoburg',
    sysId: 'QC-EXPOBURG-VIRTUAL',
    badge: 'B2B_TRADE_PLATFORM',
    badgeType: 'stream',
    regionOrScale: 'expoburg.com // MULTI-TENANT VIRTUAL EXPO',
    title: 'Expoburg B2B Virtual Trade Expo: Scalable Virtual Exhibition Platform',
    subtitle: 'Large-scale Trade India style virtual exhibition and buyer-seller marketplace. Architected to support concurrent trade show pavilions, real-time live streaming webinars, 1-on-1 attendee matchmaking, and dedicated multi-tenant exhibitor self-service portals.',
    liveUrl: 'https://expoburg.com',
    manifestFile: 'matchmaker.service.ts',
    manifestType: 'socket/presence',
    tags: ['WebRTC / Live Streaming', 'Laravel Enterprise / Node.js', 'React Dashboard', 'WebSocket Mesh', 'Elasticsearch Catalog', 'MySQL Cluster (Master-Replica)'],
    challenge: {
      title: 'THE SCALE CHALLENGE',
      description: 'Handling simultaneous surge traffic during live trade inaugurations, with thousands of enterprise buyers navigating 3D virtual booths, querying product directories, and requesting instant audio/video buyer conferences.'
    },
    solution: {
      title: 'SYSTEM ARCHITECTURE',
      description: 'Decomposed into high-speed Elasticsearch catalog clusters for sub-10ms directory search, clustered Redis socket nodes for matchmaking presence, and decoupled HLS/WebRTC streaming nodes with NGINX RTMP relay.'
    },
    impact: {
      title: 'PLATFORM PERFORMANCE',
      metrics: [
        { label: 'CONCURRENT SESSIONS:', value: '12,000+ Concurrent', isHighlighted: true },
        { label: 'SEARCH LATENCY:', value: '< 14ms (Elasticsearch)', isHighlighted: false },
        { label: 'EXHIBITOR ONBOARD:', value: 'Automated Self-Serve', isHighlighted: false }
      ]
    },
    topology: {
      title: 'EXHIBITION INFRASTRUCTURE: Buyer & Seller Brokerage',
      subtitle: 'SOCKET MESH: CLUSTERED // PEAK SOCKET CONNS: 18,500 // FAILOVER: ZERO DOWNTIME',
      type: 'expo_broker',
      details: 'Global Ingress via Cloudflare WARP -> Live Video HLS (RTMP/HLS Video Mesh) + Socket Engine Presence + Elasticsearch Catalog + MySQL Multi-AZ Cluster.'
    },
    code: {
      filename: 'matchmaker.service.ts',
      language: 'typescript',
      metaSource: 'SIGNALING: Sub-50ms',
      stateText: 'MATCH STATUS: CONNECTED',
      content: `export class TradeBoothMatchmaker {
  async connectBuyerToExhibitor(buyerId: string, boothId: string) {
    // Acquire booth availability lock from Redis lock manager
    const lockKey = \`booth:\${boothId}:rep_channel\`;
    const availableRep = await redis.spop(\`rep:\${boothId}\`);

    if (!availableRep) {
      return this.enqueueWaitingRoom(buyerId, boothId);
    }

    const session = await this.webrtcSignaler.createRoom({
      caller: buyerId,
      callee: availableRep,
      bitrateCap: '1.5Mbps',
      p2pFallback: true
    });
    return session;
  }
}`
    }
  },
  {
    id: 'nuhire',
    sysId: 'QC-NUHIRE-K8S',
    badge: 'PLATFORM_K8S_DEV',
    badgeType: 'gpu',
    regionOrScale: 'developer.nuhire.in // K8S CLOUD OPTIMIZATION',
    title: 'NuHire Cloud Platform: Kubernetes Pipeline Optimization & DMZ Traffic Management',
    subtitle: 'Enterprise platform infrastructure engineering for candidate intelligence and testing workflows. Orchestrated Kubernetes cluster optimization, ingress load balancing, strict DMZ traffic isolation, GPU-aware container scheduling for AI evaluations, and continuous image optimization pipelines.',
    liveUrl: 'https://developer.nuhire.in',
    manifestFile: 'gpu-workload-manifest.yaml',
    manifestType: 'k8s/apps/v1',
    tags: ['Kubernetes / EKS', 'DMZ Ingress / Envoy', 'Docker Optimization', 'GPU Device Plugins', 'Harbor Registry', 'Prometheus & Grafana'],
    challenge: {
      title: 'THE INFRASTRUCTURE CHALLENGE',
      description: 'Heavy candidate assessment models running simultaneous computer vision and audio proctoring containers caused node resource starvation, pod evictions, and insecure ingress boundaries.'
    },
    solution: {
      title: 'PLATFORM SOLUTION',
      description: 'Configured multi-tier DMZ ingress controller boundaries, tuned affinity/toleration topologies for GPU workers, and created optimized multi-stage distroless container builds shrinking image sizes by 74%.'
    },
    impact: {
      title: 'ENGINEERING OUTPUT',
      metrics: [
        { label: 'IMAGE PULL TIME:', value: '-74% (Fast Startup)', isHighlighted: true },
        { label: 'POD CRASH RATE:', value: '0.00% Zero Evictions', isHighlighted: false },
        { label: 'SECURITY POSTURE:', value: 'Strict DMZ Isolated', isHighlighted: false }
      ]
    },
    topology: {
      title: 'CLUSTER SCHEDULING: Taints, Tolerations & DMZ Proxy',
      subtitle: 'NODE POOL: HARMONIZED // CLUSTER_HEALTH: 100% HEALTHY // PROMETHEUS TELEMETRY: ACTIVE',
      type: 'gpu_scheduling',
      details: 'Traffic Zone: Public Internet -> DMZ Gateway (mTLS & Rate Limit) -> Core Controller (Autoscaling K8s HPA) -> Private AI Evaluate Pods (Dedicated Node Taints nvidia.com/gpu).'
    },
    code: {
      filename: 'gpu-workload-manifest.yaml',
      language: 'yaml',
      metaSource: 'TARGET: EKS Managed Node',
      stateText: 'DISTROLESS: CONFIRMED',
      content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: proctoring-eval-engine
  namespace: platform-eval
spec:
  template:
    spec:
      tolerations:
        - key: "nvidia.com/gpu"
          operator: "Exists"
          effect: "NoSchedule"
      containers:
        - name: evaluator
          image: harbor.nuhire.in/eval:distroless-v3
          resources:
            limits:
              nvidia.com/gpu: 1
              memory: 8Gi`
    }
  },
  {
    id: 'infizero',
    sysId: 'QC-INFIZERO-ECOSYSTEM',
    badge: 'MULTI_TENANT_ERP',
    badgeType: 'saas',
    regionOrScale: 'infizero.com • qr-codifier.com • pikstack.com',
    title: 'Infizero & ERP Systems: Enterprise Equipment Rental, Dynamic Forms & QR Infrastructure',
    subtitle: 'Unified architecture powering Infizero, QR-Codifier, and Pikstack. Comprehensive multi-tenant ERP managing complex equipment rental schedules, dynamic custom form generators (Vue/Angular), and automated programmatic QR code asset tracking.',
    liveUrl: 'https://infizero.com',
    manifestFile: 'reservation_lock.sql',
    manifestType: 'postgres/rls',
    tags: ['Vue 3 / Angular', 'Node.js / Express', 'PostgreSQL (Row-Level Security)', 'Dynamic Form JSON Engine', 'QR Code Dispatcher', 'Multi-Tenant Tenant Isolation'],
    challenge: {
      title: 'BUSINESS COMPLEXITY',
      description: 'Managing overlap-free equipment rentals across diverse enterprise inventories while allowing clients to build arbitrarily complex custom validation forms on the fly without schema migrations.'
    },
    solution: {
      title: 'ARCHITECTURAL SOLUTION',
      description: 'Built a dynamic JSONSchema form renderer in Vue & Angular coupled with interval tree reservation logic in Postgres. Integrated QR-Codifier\'s high-speed tracking to scan equipment in/out via mobile devices.'
    },
    impact: {
      title: 'OPERATIONAL METRICS',
      metrics: [
        { label: 'DOUBLE BOOKINGS:', value: '0 (Strict Locks)', isHighlighted: true },
        { label: 'DYNAMIC FORM LOAD:', value: '< 35ms Hydration', isHighlighted: false },
        { label: 'QR DISPATCH SPEED:', value: 'Real-time Scan API', isHighlighted: false }
      ]
    },
    topology: {
      title: 'MULTI-PRODUCT ARCHITECTURE: Infizero + QR-Codifier + Pikstack',
      subtitle: 'RLS: ACTIVE // TENANT_ISOLATION: STRICT // GIST EXCLUSION: ACTIVE',
      type: 'multi_product',
      details: 'INFIZERO ERP (Rental calendars, billing, dispatch) <--> QR-CODIFIER (Dynamic vector QR generation, scan analytics) <--> PIKSTACK PLATFORM (Central digital media storage, transformation CDN).'
    },
    code: {
      filename: 'reservation_lock.sql',
      language: 'sql',
      metaSource: 'GIST EXCLUSION: ACTIVE',
      stateText: 'ATOMIC LOCK: ZERO_CONFLICT',
      content: `-- Prevent double booking across concurrent rental requests
ALTER TABLE equipment_bookings
ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON equipment_bookings
USING (tenant_id = current_setting('app.current_tenant_id'));

CREATE EXTENSION IF NOT EXISTS btree_gist;
ALTER TABLE equipment_bookings
ADD CONSTRAINT no_overlap_rentals
EXCLUDE USING gist (
  equipment_id WITH =,
  booking_range WITH &&
);`
    }
  },
  {
    id: 'myvapi',
    sysId: 'QC-MYVAPI-CORE',
    badge: 'CITY_PORTAL & B2B_DIRECTORY',
    badgeType: 'telecom',
    regionOrScale: 'myvapi.com // A DIVISION OF QUANCORE GROUP',
    title: 'MyVapi: Hyperlocal City Portal & B2B Directory Platform',
    subtitle: 'Hyperlocal city search, B2B directory, and web services platform for Vapi industrial & urban cluster. High-performance PHP backend serving high-volume directory APIs, classifieds, emergency services, municipal departments, jobs, and bulk data import/export pipelines.',
    liveUrl: 'https://myvapi.com',
    manifestFile: 'directory_indexer.php',
    manifestType: 'php/indexer',
    tags: ['PHP & MySQL', 'REST APIs', 'Apache mod_expires', 'Gzip Compression', 'Data Pipelines', 'Local Search Engine'],
    challenge: {
      title: 'REGIONAL TRAFFIC CHALLENGE',
      description: 'Serving tens of thousands of simultaneous search queries across municipal departments, emergency contacts, local businesses, and classified postings on constrained infrastructure.'
    },
    solution: {
      title: 'ENGINEERING SOLUTION',
      description: 'Architected the backend directory services, unified model REST APIs, dynamic data import/export pipelines, and high-efficiency Apache/PHP caching layers (mod_gzip, mod_expires) for Vapi\'s leading business directory.'
    },
    impact: {
      title: 'DIRECTORY METRICS',
      metrics: [
        { label: 'CATEGORIES:', value: '100+ Categories', isHighlighted: true },
        { label: 'CACHED LATENCY:', value: '< 200ms Response', isHighlighted: false },
        { label: 'MODEL APIS:', value: 'Unified REST Specs', isHighlighted: false }
      ]
    },
    topology: {
      title: 'HYPERLOCAL DIRECTORY ENGINE: Data Flow',
      subtitle: 'CACHE RATIO: 94.2% // ZERO DROP RATE // COMPRESSION: GZIP ACTIVE',
      type: 'expo_broker',
      details: 'Public Municipal Search -> Apache FastCGI Ingress (mod_expires 24h) -> PHP Indexer -> Indexed MySQL Tables with FullText search.'
    },
    code: {
      filename: 'directory_indexer.php',
      language: 'php',
      metaSource: 'ENGINE: Hyperlocal Search',
      stateText: 'STATUS: ACTIVE',
      content: `<?php
namespace App\\Services;

class DirectoryEngine {
    public function searchBusiness(string $query, ?int $categoryId = null): array {
        $sanitized = htmlspecialchars(trim($query));
        $cacheKey = "dir_search_" . md5($sanitized . "_" . ($categoryId ?? 'all'));
        
        return Cache::remember($cacheKey, 3600, function() use ($sanitized, $categoryId) {
            $builder = BusinessListing::where('is_verified', true)
                ->whereRaw("MATCH(title, description, tags) AGAINST(? IN BOOLEAN MODE)", [$sanitized]);
            
            if ($categoryId) {
                $builder->where('category_id', $categoryId);
            }
            return $builder->with('contacts', 'location')->limit(50)->get();
        });
    }
}`
    }
  },
  {
    id: 'commerce_bots',
    sysId: 'QC-COMMERCE-BOTS-06',
    badge: 'ECOMMERCE & BOT FLEET',
    badgeType: 'telecom',
    regionOrScale: 'TELEGRAM BOT API • BAGISTO / MAGENTO',
    title: 'Enterprise Storefronts & Automated Telegram Systems (Bagisto, Magento & LIC Bot)',
    subtitle: 'Built and deployed modular enterprise storefronts customized on Bagisto Laravel and Magento, paired with high-availability asynchronous Telegram enterprise bot engines (including automated insurance and policy query bots like the LIC bot platform via Telegram Bot API).',
    liveUrl: 'https://quancoresoftech.com',
    manifestFile: 'telegram_bot_dispatcher.py',
    manifestType: 'bot/asyncio',
    tags: ['Bagisto Laravel Core', 'Magento Enterprise', 'Telegram Bot API (Webhook)', 'Python AsyncIO', 'Payment Gateway Integrations', 'Redis State Machine'],
    challenge: {
      title: 'COMPLEX INTEGRATION',
      description: 'Delivering automated insurance premium calculation, status lookup, and policy notification pipelines with conversational Telegram interfaces without hitting rate limits or maintaining stateful memory hogs.'
    },
    solution: {
      title: 'EVENT-DRIVEN ENGINE',
      description: 'Built serverless/containerized webhook receivers processing Telegram updates concurrently, using Redis for user conversation state machines and secure caching of policy calculation algorithms.'
    },
    impact: {
      title: 'PRODUCTION VELOCITY',
      metrics: [
        { label: 'CONVERSATION LATENCY:', value: '< 180ms Response', isHighlighted: true },
        { label: 'STORE CHECKOUT SPEED:', value: '< 1.2s Fast Flow', isHighlighted: false },
        { label: 'AUTO QUERY RESOLUTION:', value: '91% Unassisted', isHighlighted: false }
      ]
    },
    topology: {
      title: 'TELEGRAM BOT & COMMERCE EVENT BUS ARCHITECTURE',
      subtitle: 'WEBHOOK: TLS 1.3 // ZERO CREDENTIALS HARDCODED // STRICT ENV INJECTION',
      type: 'telegram_bot',
      details: 'BAGISTO & MAGENTO (Inventory sync, multi-currency checkout, custom ERP bridge) <---> LIC TELEGRAM BOT (Automated policy calculator, premium reminder dispatch) <---> WEBHOOK RUNTIME (Asynchronous python telegram worker with Redis FSM).'
    },
    code: {
      filename: 'telegram_bot_dispatcher.py',
      language: 'python',
      metaSource: 'BOT_API: Polling/Webhook',
      stateText: 'FSM: DISTRIBUTED',
      content: `async def handle_telegram_webhook(update: TelegramUpdate):
    chat_id = update.message.chat.id
    user_state = await fsm.redis.get(f"state:{chat_id}")

    if update.message.text.startswith("/calculate_premium"):
        await fsm.redis.set(f"state:{chat_id}", "AWAITING_POLICY_TYPE")
        return await bot.send_keyboard(chat_id, policy_options)

    if user_state == "AWAITING_POLICY_TYPE":
        quote = lic_calculator.compute(update.message.text)
        await bot.send_formatted_quote(chat_id, quote)
        await fsm.redis.delete(f"state:{chat_id}")`
    }
  }
];

export const TECH_SPECTRUM: TechItem[] = [
  {
    name: 'Kubernetes (K8s & EKS)',
    category: 'Orchestration & Compute',
    level: 'Expert',
    years: '6+ Years',
    description: 'Multi-cluster topologies, custom operators, Helm charts, CRD controllers, Karpenter node autoscaling, GPU daemonsets.'
  },
  {
    name: 'ArgoCD & GitOps',
    category: 'CI/CD & Delivery',
    level: 'Expert',
    years: '5+ Years',
    description: 'Declarative git-driven rollouts, Argo Rollouts canary/blue-green deployments, Flagger metric analysis.'
  },
  {
    name: 'Terraform & OpenTofu',
    category: 'Infrastructure as Code',
    level: 'Expert',
    years: '6+ Years',
    description: 'Modular cloud provisioning across AWS/GCP, remote state locking, drift detection, Crossplane XRD compositions.'
  },
  {
    name: 'Istio & Service Mesh',
    category: 'Networking & Security',
    level: 'Advanced',
    years: '4+ Years',
    description: 'mTLS strict enforcement, SPIFFE identity attestation, Envoy gateway filters, traffic mirroring and circuit breaking.'
  },
  {
    name: 'Python (FastAPI / Celery)',
    category: 'Languages & Microservices',
    level: 'Staff / Expert',
    years: '9+ Years',
    description: 'High-throughput async APIs, image rasterization workers, distributed task queues, AI pipeline integration.'
  },
  {
    name: 'Node.js & TypeScript',
    category: 'Languages & Microservices',
    level: 'Staff / Expert',
    years: '8+ Years',
    description: 'Real-time WebSocket brokers, microservices, gRPC services, Next.js / Vite full-stack integrations.'
  },
  {
    name: 'Go (Golang)',
    category: 'Languages & Microservices',
    level: 'Advanced',
    years: '4+ Years',
    description: 'Zero-allocation network daemons, K8s reconciliation controllers, Kafka high-throughput consumers, CLI utilities.'
  },
  {
    name: 'PHP & Laravel / Bagisto',
    category: 'Languages & Microservices',
    level: 'Veteran',
    years: '9+ Years',
    description: 'Enterprise ERP backends, Magento & Bagisto e-commerce engine customizations, query index optimization.'
  },
  {
    name: 'Prometheus & OpenTelemetry',
    category: 'Observability & SRE',
    level: 'Expert',
    years: '5+ Years',
    description: 'High-cardinality metric collection, Thanos long-term storage, eBPF Cilium tracing, Grafana SLO alerting.'
  },
  {
    name: 'PostgreSQL & MySQL',
    category: 'Data & Storage',
    level: 'Staff / Expert',
    years: '9+ Years',
    description: 'Row-Level Security (RLS), GiST exclusion locking, multi-AZ replication, connection pooling via PgBouncer.'
  },
  {
    name: 'Apache Kafka & Redis',
    category: 'Streaming & Caching',
    level: 'Expert',
    years: '6+ Years',
    description: 'Partition hash streaming, KEDA consumer-lag scaling, distributed Redis pub/sub presence clusters.'
  },
  {
    name: 'Multi-Cloud (AWS, GCP, Hostinger)',
    category: 'Cloud Providers',
    level: 'Expert',
    years: '9+ Years',
    description: 'AWS (EKS, S3, RDS, IAM IRSA, CloudWatch), GCP (GKE, Cloud Run, Artifact Registry), Hostinger VPS automation.'
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    period: '2021 — PRESENT',
    badge: 'LEADERSHIP',
    title: 'Platform & DevOps Lead // Core Cloud Architect',
    company: 'Quancore Softech',
    role: 'Lead Architect & Systems Engineer',
    description: 'Driving multi-cloud cloud infrastructure across AWS, GCP, and Hostinger. Implementing Kubernetes GPU workload scheduling, automated CI/CD pipelines, and high-availability systems with 99.99% uptime target.',
    highlights: [
      'Architected multi-cluster Kubernetes infrastructure powering Dzicard, Expoburg, and NuHire',
      'Engineered automated GitOps deployment pipelines reducing deployment cycle time from 4 days to 4 minutes',
      'Configured GPU-aware Kubernetes scheduling with DMZ isolation for machine learning inference',
      'Mentored software engineering team on distributed system resiliency and zero-downtime cutover patterns'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS EKS', 'GCP GKE', 'Terraform', 'ArgoCD', 'Python', 'FastAPI', 'Node.js']
  },
  {
    period: '2018 — 2021',
    badge: 'EXPANSION',
    title: 'Distributed SaaS Platforms & Architecture',
    company: 'Quancore Softech',
    role: 'Senior Full-Stack & Systems Engineer',
    description: 'Led development on flagship SaaS products including Dzicard, Expoburg, and Infizero. Spearheaded Python microservices, WebRTC video streaming, and Bagisto headless implementations.',
    highlights: [
      'Built Dzicard high-resolution vector rendering engine processing 500,000+ digital cards with <850ms latency',
      'Architected Expoburg virtual trade expo platform handling 12,000+ concurrent attendees with real-time WebRTC conferencing',
      'Engineered multi-tenant ERP reservation engine with atomic PostgreSQL GiST locking and dynamic form hydration',
      'Designed asynchronous Telegram bot webhook services with Redis state machines for policy calculations'
    ],
    technologies: ['Python', 'FastAPI', 'Celery', 'Redis', 'Vue.js', 'React', 'Laravel', 'Bagisto', 'PostgreSQL', 'WebRTC']
  },
  {
    period: '2015 — 2018',
    badge: 'FOUNDATION',
    title: 'Full-Stack Craftsmanship & Backend Engineering',
    company: 'Quancore Softech',
    role: 'Full-Stack Developer',
    description: 'Built robust core web services with PHP/Laravel, Node.js, and modern JavaScript. Implemented complex SQL schemas, REST APIs, and e-commerce solutions with high performance standards.',
    highlights: [
      'Engineered MyVapi hyperlocal city portal & business directory handling 100+ categories with aggressive cache tiers',
      'Developed high-volume MySQL schema indexes, database normalization, and search acceleration pipelines',
      'Created custom e-commerce extensions and payment gateway integrations across domestic and international processors',
      'Established containerized local developer environments and standardized automated testing suites'
    ],
    technologies: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'JavaScript', 'REST APIs', 'Apache', 'Linux']
  }
];
