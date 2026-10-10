import React from 'react';
import { CaseStudy } from '../types';
import { ArrowRight, Server, Cloud, Cpu, Activity, ShieldCheck, Database, Radio, RefreshCw } from 'lucide-react';

interface TopologyDiagramProps {
  caseStudy: CaseStudy;
}

export const TopologyDiagram: React.FC<TopologyDiagramProps> = ({ caseStudy }) => {
  const { topology } = caseStudy;

  return (
    <div className="w-full bg-[#070A11] border border-[#1F293D] rounded p-4 font-mono text-xs flex flex-col justify-between">
      
      {/* Topology Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#1F293D] gap-1 text-[11px]">
        <div className="flex items-center gap-1.5 text-[#06B6D4] font-medium">
          <Activity className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>{topology.title}</span>
        </div>
        <span className="text-[#64748B] text-[10px]">{topology.subtitle}</span>
      </div>

      {/* Schematic Container */}
      <div className="py-4 my-auto min-h-[160px] flex items-center justify-center">
        
        {/* Type 1: K8s Multi-Region Mesh Topology */}
        {topology.type === 'k8s_mesh' && (
          <div className="w-full space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              
              {/* Route 53 Node */}
              <div className="bg-[#0E1420] border border-[#1F293D] hover:border-[#06B6D4] p-2.5 rounded text-center w-full md:w-32 shrink-0 transition-colors">
                <span className="text-[#06B6D4] text-[10px] block font-bold">Route 53</span>
                <span className="text-[#64748B] text-[9px] block">Geo DNS Weight</span>
              </div>

              <div className="hidden md:flex text-[#475569]">
                <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
              </div>

              {/* Cluster Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                
                {/* Cluster US East 1 */}
                <div className="bg-[#0E1420] border border-[#10B981]/40 rounded p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] pb-1 border-b border-[#1F293D]">
                    <span className="text-[#10B981] font-bold">CLUSTER_US_EAST_1</span>
                    <span className="text-[#10B981] text-[9px]">(Primary Active)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
                    <div className="bg-[#151E2E] p-1 rounded border border-[#1F293D] text-[#94A3B8]">
                      <span>Istio Ingress</span>
                      <span className="text-[8px] text-[#475569] block">Envoy Proxy</span>
                    </div>
                    <div className="bg-[#151E2E] p-1 rounded border border-[#10B981]/50 text-[#10B981]">
                      <span>Flagger Canary</span>
                      <span className="text-[8px] text-[#10B981] block">90% Stable / 10% Can</span>
                    </div>
                    <div className="bg-[#151E2E] p-1 rounded border border-[#1F293D] text-[#94A3B8]">
                      <span>Prometheus Gate</span>
                      <span className="text-[8px] text-[#475569] block">Error Rate &lt;0.01%</span>
                    </div>
                  </div>
                </div>

                {/* Cluster EU West 1 */}
                <div className="bg-[#0E1420] border border-[#06B6D4]/40 rounded p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] pb-1 border-b border-[#1F293D]">
                    <span className="text-[#06B6D4] font-bold">CLUSTER_EU_WEST_1</span>
                    <span className="text-[#06B6D4] text-[9px]">(Failover Active)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[9px] text-center">
                    <div className="bg-[#151E2E] p-1 rounded border border-[#1F293D] text-[#94A3B8]">
                      <span>ArgoCD App</span>
                      <span className="text-[8px] text-[#475569] block">Automated Sync</span>
                    </div>
                    <div className="bg-[#151E2E] p-1 rounded border border-[#06B6D4]/50 text-[#06B6D4]">
                      <span>Mesh Gateway</span>
                      <span className="text-[8px] text-[#06B6D4] block">SPIFFE Identity</span>
                    </div>
                    <div className="bg-[#151E2E] p-1 rounded border border-[#1F293D] text-[#94A3B8]">
                      <span>Aurora RDS</span>
                      <span className="text-[8px] text-[#475569] block">Global Synced</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Type 2: IDP Declarative Workflow */}
        {topology.type === 'idp_flow' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">01. UI PORTAL</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">React</span>
              <span className="text-[#64748B] text-[9px] block">TypeScript form generates env spec with TTL policies</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">02. BACKEND</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Go Daemon</span>
              <span className="text-[#64748B] text-[9px] block">Validates budget limits, generates CRDs, emits audit log</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">03. CONTROL</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">Crossplane</span>
              <span className="text-[#64748B] text-[9px] block">Translates to AWS RDS, S3, Redis Compositions</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">04. CLUSTER</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Namespace</span>
              <span className="text-[#64748B] text-[9px] block">K8s vCluster provisioned with URL webhook notification</span>
            </div>
          </div>
        )}

        {/* Type 3: KEDA Ingestion Telemetry Waveform */}
        {topology.type === 'keda_stream' && (
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#06B6D4]">INGESTION_RATE (40k Peak)</span>
              <span className="text-[#10B981]">CONSUMER_LAG: &lt; 20ms</span>
            </div>
            <div className="relative h-20 w-full bg-[#0E1420] rounded border border-[#1F293D] overflow-hidden flex items-center justify-center p-2">
              <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                {/* Grid guidelines */}
                <line x1="0" y1="25" x2="500" y2="25" stroke="#1F293D" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="500" y2="50" stroke="#1F293D" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#1F293D" strokeDasharray="3 3" />
                {/* 40k Ingestion wave */}
                <path
                  d="M0,80 Q70,75 140,55 T250,20 T360,35 T500,70"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                />
                {/* Consumer Lag (Flat & Controlled) */}
                <path
                  d="M0,88 Q120,87 250,83 T380,85 T500,88"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
              </svg>
              <div className="absolute inset-x-0 bottom-1 flex items-center justify-between px-3 text-[9px] text-[#64748B]">
                <span>T - 60m</span>
                <span className="text-[#06B6D4] font-bold">|| PEAK BURST TRAFFIC ||</span>
                <span>NOW (STEADY)</span>
              </div>
            </div>
          </div>
        )}

        {/* Type 4: Dzicard Poster Pipeline */}
        {topology.type === 'poster_flow' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">01. TEMPLATE UI</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Vue Canvas</span>
              <span className="text-[#64748B] text-[9px] block">Dynamic form fields, live visual preview & JSON schema export</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">02. REST API</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">FastAPI</span>
              <span className="text-[#64748B] text-[9px] block">Payload validation, rate-limiting & job dispatch to Redis broker</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">03. RENDER</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">Cairo/PDF</span>
              <span className="text-[#64748B] text-[9px] block">300 DPI print-ready rendering with automatic font embedding</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">04. CDN DELIV</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">S3 Stream</span>
              <span className="text-[#64748B] text-[9px] block">Signed URL generation for instant high-speed poster download</span>
            </div>
          </div>
        )}

        {/* Type 5: Expoburg Buyer & Seller Brokerage */}
        {topology.type === 'expo_broker' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">LIVE VIDEO MESH</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">WebRTC / HLS</span>
              <span className="text-[#64748B] text-[9px] block">Low-latency attendee webinars & 1-on-1 rep meetings</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">SOCKET PRESENCE</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">Redis Engine</span>
              <span className="text-[#64748B] text-[9px] block">18,500 active buyer-seller matchmaking sessions</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">SEARCH CATALOG</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Elasticsearch</span>
              <span className="text-[#64748B] text-[9px] block">Sub-14ms faceted queries across enterprise booths</span>
            </div>
          </div>
        )}

        {/* Type 6: NuHire GPU Scheduling */}
        {topology.type === 'gpu_scheduling' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">DMZ GATEWAY</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Envoy Proxy</span>
              <span className="text-[#64748B] text-[9px] block">mTLS & Token Verification with Ingress Rate-Limiting</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">CORE CONTROLLER</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">K8s HPA</span>
              <span className="text-[#64748B] text-[9px] block">Autoscaling worker pool based on candidate interview load</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">GPU INFERENCE</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">NVIDIA T4</span>
              <span className="text-[#64748B] text-[9px] block">Dedicated node taints (nvidia.com/gpu) for vision proctoring</span>
            </div>
          </div>
        )}

        {/* Type 7: Multi-Product Ecosystem */}
        {topology.type === 'multi_product' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">INFIZERO ERP</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Rental Engine</span>
              <span className="text-[#64748B] text-[9px] block">Rental calendars, billing, dispatch & client multi-tenant portals</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">QR-CODIFIER</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">Dynamic Vectors</span>
              <span className="text-[#64748B] text-[9px] block">High-speed programmatic QR code asset scan & inventory dispatch</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">PIKSTACK PLATFORM</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">Digital Media Hub</span>
              <span className="text-[#64748B] text-[9px] block">Central digital media storage, transformation & CDN distribution</span>
            </div>
          </div>
        )}

        {/* Type 8: Telegram Bot & Commerce */}
        {topology.type === 'telegram_bot' && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">BAGISTO & MAGENTO</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">E-Commerce Core</span>
              <span className="text-[#64748B] text-[9px] block">Inventory sync, multi-currency checkout, custom ERP bridge</span>
            </div>
            <div className="bg-[#0E1420] border border-[#10B981]/50 p-2.5 rounded text-center">
              <span className="text-[#10B981] text-[10px] block font-bold">LIC TELEGRAM BOT</span>
              <span className="text-[#10B981] text-xs font-semibold block my-1">Async Webhooks</span>
              <span className="text-[#64748B] text-[9px] block">Automated policy calculator, premium reminder dispatch & status</span>
            </div>
            <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded text-center">
              <span className="text-[#06B6D4] text-[10px] block font-bold">REDIS STATE MACHINE</span>
              <span className="text-[#F1F5F9] text-xs font-semibold block my-1">AsyncIO Worker</span>
              <span className="text-[#64748B] text-[9px] block">Asynchronous python telegram worker with Redis FSM persistence</span>
            </div>
          </div>
        )}

      </div>

      {/* Topology Footer Details */}
      <div className="pt-2.5 border-t border-[#1F293D] text-[10px] text-[#94A3B8] flex items-center justify-between">
        <span>{topology.details}</span>
      </div>

    </div>
  );
};
