import React, { useEffect, useState } from 'react';
import { ProfileMode } from '../types';
import { Radio } from 'lucide-react';

interface TelemetryBarProps {
  profileMode: ProfileMode;
}

export const TelemetryBar: React.FC<TelemetryBarProps> = ({ profileMode }) => {
  const isAnshu = profileMode === 'anshu';
  const [syncLatency, setSyncLatency] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncLatency(Math.floor(16 + Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0E1420] border-b border-[#1F293D] px-4 lg:px-8 py-1.5 text-[11px] font-mono text-[#94A3B8] overflow-x-auto whitespace-nowrap">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left Telemetry Track */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#10B981] font-medium">
            <Radio className="w-3 h-3 text-[#10B981] animate-pulse" />
            <span>{isAnshu ? 'STATUS: QUANCORE SOFTECH LEAD' : 'CONTROL_PLANE: ACTIVE'}</span>
          </div>

          <span className="text-[#1F293D]">//</span>

          <span className="text-[#94A3B8]">
            {isAnshu
              ? 'TENURE: SEP 2015 – PRESENT (9+ YEARS)'
              : 'REGION: global-mesh (us-east-1, eu-west-1, ap-northeast-1)'}
          </span>

          <span className="text-[#1F293D]">//</span>

          <span className="text-[#94A3B8]">
            {isAnshu
              ? 'PRODUCTION PLATFORMS: 10+ LIVE SAAS'
              : 'NODE_POOL: 142/142 HEALTHY'}
          </span>
        </div>

        {/* Right Telemetry Track */}
        <div className="flex items-center gap-3 text-[#64748B]">
          <span className="text-[#94A3B8]">
            {isAnshu ? 'K8S GPU ROUTING: ONLINE' : 'DRIFT_DETECTION: 0 DELTAS'}
          </span>

          <span className="text-[#1F293D]">//</span>

          <span className="text-[#06B6D4]">
            {isAnshu ? 'MULTI-CLOUD: AWS / GCP / HOSTINGER' : `SYNC_LATENCY: ${syncLatency}ms`}
          </span>

          <span className="text-[#1F293D]">//</span>

          <span className="text-[#10B981]">
            {isAnshu ? 'GITOPS: AUTOMATED CI/CD' : 'GITOPS: ARGO_PROD'}
          </span>
        </div>
      </div>
    </div>
  );
};
