import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileMode } from '../types';
import {
  Activity,
  Layers,
  Cpu,
  Server,
  Database,
  Radio,
  Shield,
  Zap,
  CheckCircle2,
  RefreshCw,
  Box,
  Eye,
  Info,
} from 'lucide-react';

interface TopologyViewProps {
  profileMode: ProfileMode;
}

interface ClusterNode {
  id: string;
  name: string;
  kind: string;
  tier: 'ingress' | 'compute' | 'gpu' | 'storage' | 'mesh';
  x: number;
  y: number;
  width: number;
  height: number;
  status: 'Ready' | 'Healthy' | 'Canary' | 'Active';
  details: {
    namespace: string;
    replicas?: string;
    resources?: string;
    endpoint?: string;
    protocol?: string;
    notes: string;
  };
}

export const TopologyView: React.FC<TopologyViewProps> = ({ profileMode }) => {
  const isAnshu = profileMode === 'anshu';
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [trafficAnimated, setTrafficAnimated] = useState<boolean>(true);
  const [activeTierFilter, setActiveTierFilter] = useState<string>('all');

  // Define nodes for Anshu Kushwaha (Quancore Softech Cloud Footprint)
  const anshuNodes: ClusterNode[] = [
    {
      id: 'cf_edge',
      name: 'Cloudflare WARP',
      kind: 'Global Edge / CDN',
      tier: 'ingress',
      x: 40,
      y: 190,
      width: 130,
      height: 70,
      status: 'Active',
      details: {
        namespace: 'edge-network',
        endpoint: 'https://dzicard.com • expoburg.com',
        protocol: 'HTTP/3 • TLS 1.3',
        notes: 'DDoS mitigation, edge SSL offloading, and static caching for poster & expo assets.',
      },
    },
    {
      id: 'dmz_envoy',
      name: 'DMZ Envoy Gateway',
      kind: 'Ingress Controller',
      tier: 'ingress',
      x: 210,
      y: 190,
      width: 140,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'kube-ingress',
        replicas: '4 pods (HPA 2-12)',
        resources: '1.2 CPU / 2Gi Mem',
        protocol: 'mTLS • Rate Limited (10k rps)',
        notes: 'Strict DMZ ingress boundary with automated JWT validation and token throttling.',
      },
    },
    // SaaS Workloads
    {
      id: 'dzicard_pod',
      name: 'dzicard-cairo-engine',
      kind: 'Deployment / Workers',
      tier: 'compute',
      x: 410,
      y: 50,
      width: 170,
      height: 70,
      status: 'Ready',
      details: {
        namespace: 'prod-saas-workloads',
        replicas: '12 pods (Celery pools)',
        resources: '300 DPI Cairo Rasterizer',
        notes: 'High-throughput vector rendering engine processing digital cards & posters with <850ms latency.',
      },
    },
    {
      id: 'expoburg_pod',
      name: 'expoburg-webrtc-broker',
      kind: 'StatefulSet',
      tier: 'compute',
      x: 410,
      y: 140,
      width: 170,
      height: 70,
      status: 'Ready',
      details: {
        namespace: 'prod-saas-workloads',
        replicas: '8 pods (Socket Mesh)',
        resources: '18,500 Socket Connections',
        notes: 'Low-latency live video streaming and buyer-exhibitor matchmaking presence engine.',
      },
    },
    {
      id: 'myvapi_pod',
      name: 'myvapi-rest-gateway',
      kind: 'Deployment',
      tier: 'compute',
      x: 410,
      y: 230,
      width: 170,
      height: 70,
      status: 'Ready',
      details: {
        namespace: 'prod-saas-workloads',
        replicas: '6 pods',
        resources: 'Cached FastCGI / Nginx',
        notes: 'High-volume hyperlocal directory service handling 100+ categories with sub-200ms latency.',
      },
    },
    {
      id: 'nuhire_gpu',
      name: 'nuhire-ai-proctor',
      kind: 'DaemonSet (GPU-Tainted)',
      tier: 'gpu',
      x: 410,
      y: 320,
      width: 170,
      height: 70,
      status: 'Active',
      details: {
        namespace: 'prod-gpu-inference',
        replicas: '6 dedicated GPU nodes',
        resources: 'NVIDIA T4 / 8Gi VRAM',
        notes: 'Computer vision and audio proctoring AI inference container with DMZ isolation.',
      },
    },
    // Storage & Caching
    {
      id: 'postgres_rds',
      name: 'PostgreSQL RDS Multi-AZ',
      kind: 'Database / RLS Engine',
      tier: 'storage',
      x: 640,
      y: 80,
      width: 170,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'infra-storage',
        endpoint: 'aurora-pg.quancore.internal:5432',
        protocol: 'GiST Exclusion Locks',
        notes: 'Infizero equipment reservation isolation, row-level multi-tenancy, zero double bookings.',
      },
    },
    {
      id: 'redis_cluster',
      name: 'Redis Cluster 7.x',
      kind: 'Distributed Cache & PubSub',
      tier: 'storage',
      x: 640,
      y: 190,
      width: 170,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'infra-storage',
        endpoint: 'redis-mesh.quancore.internal:6379',
        resources: '6 Master + 6 Replica Nodes',
        notes: 'Telegram bot conversation FSM states, presence caches, and Celery worker job queues.',
      },
    },
    {
      id: 's3_cdn',
      name: 'AWS S3 + CloudFront CDN',
      kind: 'Object Storage & Delivery',
      tier: 'storage',
      x: 640,
      y: 300,
      width: 170,
      height: 70,
      status: 'Active',
      details: {
        namespace: 'infra-storage',
        endpoint: 's3://quancore-prod-assets-global',
        protocol: 'Presigned Streaming URLs',
        notes: 'Instant high-resolution poster download pipelines and digital vCard asset storage.',
      },
    },
  ];

  // Define nodes for SYS_ARCH (Staff DevOps Multi-Region Architecture)
  const sysarchNodes: ClusterNode[] = [
    {
      id: 'route53_dns',
      name: 'Route 53 Geo DNS',
      kind: 'Traffic Policy / Latency Weight',
      tier: 'ingress',
      x: 40,
      y: 190,
      width: 130,
      height: 70,
      status: 'Active',
      details: {
        namespace: 'global-dns',
        endpoint: 'api.sysarch.engineer',
        protocol: 'Latency Routed (Active-Active)',
        notes: 'Health-checked weighted routing across US-East-1 (Primary) and EU-West-1 (Failover).',
      },
    },
    {
      id: 'istio_us_ingress',
      name: 'Istio Gateway (US-East)',
      kind: 'Service Mesh Ingress',
      tier: 'ingress',
      x: 210,
      y: 110,
      width: 150,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'istio-system',
        replicas: '6 Envoy Proxies',
        resources: 'eBPF Cilium CNI Accelerated',
        protocol: 'mTLS 1.3 Strict',
        notes: 'P99 Ingress latency < 1.8ms with Spiffe/Spire identity attestation.',
      },
    },
    {
      id: 'istio_eu_ingress',
      name: 'Istio Gateway (EU-West)',
      kind: 'Failover Mesh Ingress',
      tier: 'ingress',
      x: 210,
      y: 270,
      width: 150,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'istio-system',
        replicas: '4 Envoy Proxies',
        protocol: 'mTLS 1.3 Cross-Cluster Mesh',
        notes: 'Active failover standby handling EU regional ingress traffic seamlessly.',
      },
    },
    // Compute & Controllers
    {
      id: 'flagger_canary',
      name: 'Flagger Canary Operator',
      kind: 'CRD Controller',
      tier: 'compute',
      x: 420,
      y: 60,
      width: 170,
      height: 70,
      status: 'Canary',
      details: {
        namespace: 'flagger-system',
        replicas: '10% Traffic Weight (Canary v8.4)',
        resources: 'Prometheus SLI Gatekeeper',
        notes: 'Error budget guarded rollouts with automated 60-second auto-rollback on 5xx spike.',
      },
    },
    {
      id: 'core_payment_api',
      name: 'core-payment-api',
      kind: 'EKS Primary Workload',
      tier: 'compute',
      x: 420,
      y: 155,
      width: 170,
      height: 70,
      status: 'Ready',
      details: {
        namespace: 'prod-finance',
        replicas: '90 pods (Karpenter scaled)',
        resources: 'Zero-allocation Go daemon',
        notes: 'Processes 42M req/day with zero dropped sessions and 99.995% SLA.',
      },
    },
    {
      id: 'keda_scaler',
      name: 'KEDA Event Scaler',
      kind: 'Auto-Scaling Operator',
      tier: 'compute',
      x: 420,
      y: 250,
      width: 170,
      height: 70,
      status: 'Active',
      details: {
        namespace: 'keda-system',
        replicas: 'Kafka ConsumerLag Driven',
        resources: 'Dynamic Scale (4 -> 60 Pods)',
        notes: 'Prevents memory thrashing during 40,000 req/sec bursts without over-provisioning.',
      },
    },
    {
      id: 'argocd_engine',
      name: 'ArgoCD GitOps Engine',
      kind: 'Continuous Delivery',
      tier: 'compute',
      x: 420,
      y: 345,
      width: 170,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'argocd',
        replicas: 'Self-healing Git Controller',
        resources: 'Sync Latency: 18ms',
        notes: 'Automated declarative state synchronization maintaining 0 drift across clusters.',
      },
    },
    // Cross-Region Data Tier
    {
      id: 'aurora_global',
      name: 'Amazon Aurora Global RDS',
      kind: 'Multi-Region Synced DB',
      tier: 'storage',
      x: 650,
      y: 100,
      width: 160,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'infra-database',
        endpoint: 'aurora-global-sync.aws',
        protocol: 'Physical Storage Replication',
        notes: 'Sub-second cross-region replication lag (<140ms P95) between US and EU.',
      },
    },
    {
      id: 'kafka_strimzi',
      name: 'Kafka Strimzi Cluster',
      kind: 'Distributed Event Log',
      tier: 'storage',
      x: 650,
      y: 220,
      width: 160,
      height: 70,
      status: 'Healthy',
      details: {
        namespace: 'prod-streaming',
        endpoint: 'kafka-prod:9092 (3 Brokers)',
        resources: 'Strict Ack • Zero-Loss Rate',
        notes: 'Striped topic partitions for real-time telemetry streaming and audit event ingestion.',
      },
    },
  ];

  const currentNodes = isAnshu ? anshuNodes : sysarchNodes;
  const filteredNodes = currentNodes.filter((n) => {
    if (activeTierFilter === 'all') return true;
    return n.tier === activeTierFilter;
  });

  const selectedNode = currentNodes.find((n) => n.id === selectedNodeId) || currentNodes[1];

  // Links connecting components
  const links = isAnshu
    ? [
        { from: 'cf_edge', to: 'dmz_envoy' },
        { from: 'dmz_envoy', to: 'dzicard_pod' },
        { from: 'dmz_envoy', to: 'expoburg_pod' },
        { from: 'dmz_envoy', to: 'myvapi_pod' },
        { from: 'dmz_envoy', to: 'nuhire_gpu' },
        { from: 'dzicard_pod', to: 's3_cdn' },
        { from: 'dzicard_pod', to: 'redis_cluster' },
        { from: 'expoburg_pod', to: 'redis_cluster' },
        { from: 'expoburg_pod', to: 'postgres_rds' },
        { from: 'myvapi_pod', to: 'postgres_rds' },
      ]
    : [
        { from: 'route53_dns', to: 'istio_us_ingress' },
        { from: 'route53_dns', to: 'istio_eu_ingress' },
        { from: 'istio_us_ingress', to: 'flagger_canary' },
        { from: 'istio_us_ingress', to: 'core_payment_api' },
        { from: 'flagger_canary', to: 'core_payment_api' },
        { from: 'istio_eu_ingress', to: 'argocd_engine' },
        { from: 'core_payment_api', to: 'aurora_global' },
        { from: 'core_payment_api', to: 'kafka_strimzi' },
        { from: 'keda_scaler', to: 'kafka_strimzi' },
      ];

  return (
    <div className="bg-[#0E1420] border border-[#1F293D] rounded-lg p-5 sm:p-6 space-y-5 shadow-2xl relative">
      
      {/* Topology Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1F293D] gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#06B6D4]">
            <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
            <span>
              {isAnshu
                ? 'TOPOLOGY_VIEW // QUANCORE CLOUD & GPU CLUSTER ARCHITECTURE'
                : 'TOPOLOGY_VIEW // EKS MULTI-REGION SERVICE MESH ORCHESTRATION'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F5F9]">
            {isAnshu
              ? 'Kubernetes Cluster & Multi-Platform Infrastructure Map'
              : 'Multi-Cluster Kubernetes Ingress & GitOps Mesh Topology'}
          </h3>
          <p className="text-xs text-[#94A3B8]">
            Interactive SVG diagram with real-time packet animation. Click any Kubernetes resource to inspect specifications, health metrics, and CRD configurations.
          </p>
        </div>

        {/* Controls: Traffic toggle & Tier Filters */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setTrafficAnimated(!trafficAnimated)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${
              trafficAnimated
                ? 'bg-[#151E2E] text-[#10B981] border-[#10B981]/50'
                : 'bg-[#070A11] text-[#64748B] border-[#1F293D]'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>Traffic: {trafficAnimated ? 'FLOWING' : 'PAUSED'}</span>
          </button>

          <div className="flex items-center gap-1 bg-[#070A11] p-1 rounded border border-[#1F293D] text-[11px] font-mono">
            {['all', 'ingress', 'compute', 'storage'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTierFilter(t)}
                className={`px-2 py-0.5 rounded uppercase cursor-pointer ${
                  activeTierFilter === t
                    ? 'bg-[#10B981] text-[#090D16] font-bold'
                    : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive SVG Diagram Box */}
      <div className="relative w-full bg-[#070A11] border border-[#1F293D] rounded-lg overflow-hidden p-2 sm:p-4 bg-blueprint-grid">
        
        {/* Top Blueprint Coordinates Header */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pb-2 px-2 border-b border-[#1F293D]/40">
          <span>K8S_CANVAS: 960x440 // PROJECTION: 2D ORTHO</span>
          <span className="text-[#10B981]">
            STATUS: {filteredNodes.length} RESOURCES DEPLOYED
          </span>
        </div>

        {/* SVG Surface */}
        <div className="w-full overflow-x-auto">
          <svg
            className="w-full min-w-[760px] h-[380px]"
            viewBox="0 0 860 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Defs for gradients, markers, and glow filters */}
            <defs>
              <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Links / Connecting Lines */}
            {links.map((link, idx) => {
              const source = currentNodes.find((n) => n.id === link.from);
              const target = currentNodes.find((n) => n.id === link.to);
              if (!source || !target) return null;

              const x1 = source.x + source.width;
              const y1 = source.y + source.height / 2;
              const x2 = target.x;
              const y2 = target.y + target.height / 2;
              const midX = (x1 + x2) / 2;

              const pathData = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;

              return (
                <g key={`link-${idx}`}>
                  {/* Base structural track */}
                  <path
                    d={pathData}
                    stroke="#1F293D"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Subtle glow highlight track */}
                  <path
                    d={pathData}
                    stroke="url(#linkGradient)"
                    strokeWidth="1.2"
                    strokeOpacity="0.4"
                    fill="none"
                  />

                  {/* Animated Particle Packet traversing the path */}
                  {trafficAnimated && (
                    <motion.circle
                      r="3"
                      fill="#10B981"
                      filter="url(#glow)"
                      initial={{ offsetDistance: '0%' }}
                      animate={{ offsetDistance: '100%' }}
                      transition={{
                        duration: 2.4 + (idx % 3) * 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{
                        offsetPath: `path("${pathData}")`,
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Render Nodes */}
            {currentNodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const isDimmed = activeTierFilter !== 'all' && node.tier !== activeTierFilter;

              return (
                <motion.g
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className="cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isDimmed ? 0.35 : 1,
                    scale: isSelected ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Node Outer Container */}
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.width}
                    height={node.height}
                    rx="6"
                    fill={isSelected ? '#151E2E' : '#0E1420'}
                    stroke={
                      isSelected
                        ? '#10B981'
                        : node.tier === 'gpu'
                        ? '#06B6D4'
                        : node.tier === 'ingress'
                        ? '#3B82F6'
                        : '#1F293D'
                    }
                    strokeWidth={isSelected ? '2' : '1.2'}
                    className="transition-colors"
                  />

                  {/* Top Status Header Strip */}
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.width}
                    height="18"
                    rx="6"
                    fill="#070A11"
                    fillOpacity="0.8"
                  />

                  {/* Status Indicator Pip */}
                  <circle
                    cx={node.x + 10}
                    cy={node.y + 9}
                    r="3.5"
                    fill={
                      node.status === 'Ready' || node.status === 'Healthy'
                        ? '#10B981'
                        : node.status === 'Canary'
                        ? '#F59E0B'
                        : '#06B6D4'
                    }
                  />

                  {/* Kind Label */}
                  <text
                    x={node.x + 20}
                    y={node.y + 12}
                    fill="#94A3B8"
                    fontSize="8.5"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {node.kind.length > 20 ? node.kind.slice(0, 18) + '...' : node.kind}
                  </text>

                  {/* Node Title */}
                  <text
                    x={node.x + 10}
                    y={node.y + 36}
                    fill="#F1F5F9"
                    fontSize="10.5"
                    fontWeight="600"
                    fontFamily="Geist, sans-serif"
                  >
                    {node.name.length > 18 ? node.name.slice(0, 16) + '..' : node.name}
                  </text>

                  {/* Subtext info (namespace / status) */}
                  <text
                    x={node.x + 10}
                    y={node.y + 54}
                    fill={node.tier === 'gpu' ? '#06B6D4' : '#64748B'}
                    fontSize="9"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {node.details.namespace}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

      </div>

      {/* Selected Node Real-Time Inspection Drawer */}
      <AnimatePresence mode="wait">
        {selectedNode && (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#070A11] border border-[#10B981]/40 rounded-lg p-4 font-mono text-xs space-y-3"
          >
            {/* Drawer Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#1F293D] gap-2">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-[#10B981]" />
                <span className="font-bold text-sm text-[#F1F5F9]">{selectedNode.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#151E2E] text-[#06B6D4] border border-[#1F293D]">
                  {selectedNode.kind}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-[#64748B]">NAMESPACE:</span>
                <span className="text-[#10B981] font-semibold">{selectedNode.details.namespace}</span>
                <span className="text-[#1F293D]">|</span>
                <span className="text-[#64748B]">STATUS:</span>
                <span className="text-[#10B981] font-semibold">{selectedNode.status}</span>
              </div>
            </div>

            {/* Spec Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-[#94A3B8]">
              {selectedNode.details.replicas && (
                <div className="bg-[#0E1420] p-2.5 rounded border border-[#1F293D]">
                  <span className="text-[10px] text-[#64748B] block">WORKLOAD SCALE:</span>
                  <span className="text-[#F1F5F9] font-bold">{selectedNode.details.replicas}</span>
                </div>
              )}

              {selectedNode.details.resources && (
                <div className="bg-[#0E1420] p-2.5 rounded border border-[#1F293D]">
                  <span className="text-[10px] text-[#64748B] block">RESOURCE BOUNDS:</span>
                  <span className="text-[#06B6D4] font-bold">{selectedNode.details.resources}</span>
                </div>
              )}

              {selectedNode.details.endpoint && (
                <div className="bg-[#0E1420] p-2.5 rounded border border-[#1F293D]">
                  <span className="text-[10px] text-[#64748B] block">ENDPOINT:</span>
                  <span className="text-[#10B981] font-bold truncate block">
                    {selectedNode.details.endpoint}
                  </span>
                </div>
              )}
            </div>

            {/* Architectural Role Notes */}
            <div className="bg-[#0E1420] p-3 rounded border border-[#1F293D] flex items-start gap-2 text-[11px] text-[#94A3B8] leading-relaxed">
              <Info className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#F1F5F9]">Architectural Blueprint: </strong>
                {selectedNode.details.notes}
              </span>
            </div>

            {/* Simulated CLI Inspect shortcut */}
            <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-1">
              <span>
                $ kubectl describe {selectedNode.kind.split(' ')[0].toLowerCase()} {selectedNode.name} -n {selectedNode.details.namespace}
              </span>
              <span className="text-[#10B981]">✔ Sync Health: 100%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
