import React, { useState, useRef, useEffect } from 'react';
import { ProfileMode } from '../types';
import { Terminal, CornerDownLeft, Copy, Check, Sparkles } from 'lucide-react';

interface InteractiveTerminalProps {
  profileMode: ProfileMode;
  onOpenContact?: () => void;
  onOpenManifest?: (manifestName: string) => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: string;
  isTable?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  profileMode,
  onOpenContact,
  onOpenManifest,
}) => {
  const isAnshu = profileMode === 'anshu';
  const username = isAnshu ? 'anshu@quancore-bastion' : 'devops-platform@mesh-bastion';
  
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: isAnshu
        ? 'platformctl list-platforms --engineer="Anshu Kushwaha" --status=active'
        : 'kubectl get mesh,scaledobjects.xrs -n prod-platform --wide',
      output: isAnshu
        ? `NAME                         DOMAIN / SCOPE         ENGINEERING CORE                 STATUS       TENURE
dzicard-quancore-suite       dzicard.com            Python FastAPI + Cairo + S3      Production   2015-Now
expoburg-virtual-expo        expoburg.com           WebRTC + Elastic + Socket Mesh   Production   Active
nuhire-k8s-platform          developer.nuhire.in    EKS + DMZ Envoy + GPU Optimize   Production   Active
infizero-erp-ecosystem       infizero.com           Vue/Angular + RLS + QR-Codifier  Enterprise   Active
myvapi-gateway               myvapi.com             PHP APIs + High-Speed Indexing   Production   Active
commerce-&-bot-systems       Telegram Laravel       Telegram Bot API + FSM Webhook   Deployed     Active`
        : `NAME TYPE STATUS CLUSTER AGE
service/istio-east-ingress Gateway Healthy eks-prod-us-east 142d
service/istio-west-failover Gateway Healthy eks-prod-eu-west 142d
scaledobject.keda/worker-scaler KafkaConsumerLag Synchronized eks-prod-us-east 89d
xrd.platform/dev-env-composite Crossplane-XR Bound eks-control-plane 41d`,
      isTable: true,
    },
  ]);

  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = isAnshu
    ? [
        'platformctl list-platforms',
        'kubectl get nodes',
        'cat render_engine.py',
        'quancore --tenure',
        'curl contact',
        'clear',
      ]
    : [
        'kubectl get nodes -o wide',
        'kubectl get mesh,scaledobjects.xrs',
        'argocd app list',
        'cat flagger-canary.yaml',
        'curl contact',
        'clear',
      ];

  const handleCommandExecution = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let resultOutput = '';
    const cmd = trimmed.toLowerCase();

    if (cmd === 'help') {
      resultOutput = `Available Commands:
  • kubectl get nodes -o wide          : List multi-cluster Kubernetes node pools
  • kubectl get pods -n prod-platform  : Check active SRE workloads and KEDA scalers
  • platformctl list-platforms         : Show all 6 production platforms at Quancore Softech
  • argocd app list                    : Inspect GitOps sync and canary health
  • cat flagger-canary.yaml            : View production Flagger canary CRD
  • cat render_engine.py               : View Dzicard Cairo vector rendering worker
  • curl contact                       : Initiate direct engineering communication handshake
  • uptime                             : Print cluster and career tenure uptime
  • clear                              : Clear terminal screen`;
    } else if (cmd.includes('get node')) {
      resultOutput = `NAME             STATUS   ROLES    AGE    VERSION        INTERNAL-IP
ip-10-0-42-18    Ready    control  182d   v1.30.2-eks    10.0.42.18
ip-10-0-88-204   Ready    worker   94d    v1.30.2-eks    10.0.88.204
ip-10-0-120-77   Ready    worker   94d    v1.30.2-eks    10.0.120.77
gke-node-gpu-01  Ready    gpu-t4   48d    v1.30.1-gke    10.128.0.14
Cluster Health: 142/142 Nodes Ready • Zero Taint Drift • Karpenter Autoscaler Active`;
    } else if (cmd.includes('get pod')) {
      resultOutput = `NAME                                   READY   STATUS    RESTARTS   AGE
checkout-svc-prod-7d499fc589-9bxr1     1/1     Running   0          42d
payment-gateway-canary-6cb8fbb664-plm  1/1     Running   0          18m
kafka-stream-processor-go-89fd-2q8lm   1/1     Running   0          14d
keda-operator-6dcff67dbf-k2m8w         1/1     Running   0          89d
dzicard-celery-worker-cairo-99a        1/1     Running   0          31d`;
    } else if (cmd.includes('platformctl') || cmd.includes('platforms')) {
      resultOutput = `NAME                         DOMAIN / SCOPE         ENGINEERING CORE                 STATUS       TENURE
dzicard-quancore-suite       dzicard.com            Python FastAPI + Cairo + S3      Production   2015-Now
expoburg-virtual-expo        expoburg.com           WebRTC + Elastic + Socket Mesh   Production   Active
nuhire-k8s-platform          developer.nuhire.in    EKS + DMZ Envoy + GPU Optimize   Production   Active
infizero-erp-ecosystem       infizero.com           Vue/Angular + RLS + QR-Codifier  Enterprise   Active
myvapi-gateway               myvapi.com             PHP APIs + High-Speed Indexing   Production   Active
commerce-&-bot-systems       Telegram Laravel       Telegram Bot API + FSM Webhook   Deployed     Active`;
    } else if (cmd.includes('argocd')) {
      resultOutput = `NAME                CLUSTER             STATUS   HEALTH   REVISION
checkout-svc-prod   eks-prod-us-east    Synced   Healthy  3f8b0e4 (100% Canary)
payment-ingress     eks-prod-us-east    Synced   Healthy  master (v8.4.0)
nuhire-k8s-cluster  gke-asia-south1     Synced   Healthy  release-v2.1
dzicard-fastapi-api aws-ap-south-1      Synced   Healthy  prod-head (Zero-leak)`;
    } else if (cmd.includes('cat flagger') || cmd.includes('flagger')) {
      resultOutput = `apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: core-payment-api
  namespace: prod-finance
spec:
  targetRef:
    kind: Deployment
    name: core-payment-api
  analysis:
    interval: 30s
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
      - name: request-success-rate
        thresholdRange: { min: 99.95 }`;
    } else if (cmd.includes('cat render') || cmd.includes('render_engine')) {
      resultOutput = `@shared_task(bind=True, max_retries=3)
def generate_highres_poster(self, payload: dict) -> dict:
    canvas = VectorCompositor.build_canvas(dpi=300, format="png")
    canvas.inject_typography(payload["text_layers"])
    canvas.apply_branding(payload["logo_url"], payload["color_palette"])
    output_buffer = canvas.export_bytes(dpi=300, fmt="png")
    signed_url = s3_stream_upload(buffer=output_buffer, key=payload['uuid'])
    return {"status": "READY", "download_url": signed_url}`;
    } else if (cmd.includes('contact') || cmd.includes('curl')) {
      resultOutput = `Connecting to engineering handshake socket...
Engineer: Anshu Kushwaha (Platform Architect // Senior Full-Stack & DevOps Specialist)
Email   : kushawahaanshu8858@gmail.com
Status  : Available for Staff/Lead DevOps, Cloud Architecture & SRE engagements.
Opening contact handshake dispatch...`;
      if (onOpenContact) {
        setTimeout(() => onOpenContact(), 600);
      }
    } else if (cmd.includes('uptime')) {
      resultOutput = isAnshu
        ? `9+ Consecutive Years of Continuous Production Stewardship at Quancore Softech (Sep 2015 - Present).
Target SLA: 99.99% • 10+ Live Enterprise Platforms • 0 Security Advisories.`
        : `UPTIME: 99.998% [NOMINAL] // 142 Nodes Healthy // GitOps Latency: 18ms // 0 Drift Deltas.`;
    } else {
      resultOutput = `bash: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        output: resultOutput,
      },
    ]);
    setInputVal('');
  };

  const handleCopyHistory = () => {
    const raw = history.map((h) => `${username}:~$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#070A11] border border-[#1F293D] rounded-lg overflow-hidden font-mono shadow-xl flex flex-col">
      
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-[#0E1420] border-b border-[#1F293D] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></span>
          </div>
          <span className="text-xs text-[#94A3B8] ml-2">
            arch-session // <span className="text-[#06B6D4]">{username}:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
          <span className="hidden sm:inline">BASH UTF-8</span>
          <button
            onClick={handleCopyHistory}
            className="flex items-center gap-1 text-[#94A3B8] hover:text-[#F1F5F9] px-2 py-0.5 rounded hover:bg-[#151E2E] transition-colors cursor-pointer"
            title="Copy terminal session"
          >
            {copied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
            <span className="text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 overflow-y-auto max-h-[360px] text-xs space-y-3 leading-relaxed select-text bg-[#070A11]">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-[#10B981]">
              <span className="text-[#06B6D4]">{username}:~$</span>
              <span className="text-[#F1F5F9] font-medium">{item.command}</span>
            </div>
            <pre className="text-[#94A3B8] text-[11px] whitespace-pre-wrap pl-2 border-l border-[#1F293D]/60 overflow-x-auto">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Interactive Command Suggestion Bar */}
      <div className="px-4 py-1.5 bg-[#0E1420]/80 border-t border-[#1F293D] flex items-center gap-1.5 overflow-x-auto text-[10px] text-[#64748B]">
        <span className="shrink-0 text-[#06B6D4] flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>Quick:</span>
        </span>
        {quickCommands.map((q) => (
          <button
            key={q}
            onClick={() => handleCommandExecution(q)}
            className="px-2 py-0.5 rounded bg-[#151E2E] hover:bg-[#1F293D] text-[#94A3B8] hover:text-[#06B6D4] transition-colors whitespace-nowrap cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Active Command Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommandExecution(inputVal);
        }}
        className="px-4 py-2.5 bg-[#090D16] border-t border-[#1F293D] flex items-center gap-2 text-xs"
      >
        <span className="text-[#10B981] font-bold shrink-0">{username}:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command ('help', 'kubectl get nodes', 'platformctl list-platforms', 'curl contact')..."
          className="flex-1 bg-transparent text-[#F1F5F9] placeholder-[#475569] outline-none font-mono text-xs"
          autoFocus={false}
        />
        <button
          type="submit"
          className="p-1 text-[#64748B] hover:text-[#10B981] transition-colors cursor-pointer"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
