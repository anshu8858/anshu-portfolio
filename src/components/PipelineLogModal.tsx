import React from 'react';
import { X, CheckCircle, Clock, Terminal, Wrench } from 'lucide-react';
import { PipelineStage } from '../types';

interface PipelineLogModalProps {
  stage: PipelineStage | null;
  onClose: () => void;
}

export const PipelineLogModal: React.FC<PipelineLogModalProps> = ({ stage, onClose }) => {
  if (!stage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#090D16]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0E1420] border border-[#1F293D] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="px-5 py-3.5 bg-[#151E2E] border-b border-[#1F293D] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#10B981]" />
            <div>
              <span className="font-mono text-xs font-semibold text-[#F1F5F9]">
                STAGE {stage.id}: {stage.name}
              </span>
              <div className="flex items-center gap-2 text-[11px] text-[#94A3B8] font-mono mt-0.5">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#06B6D4]" />
                  <span>Duration: {stage.duration}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-[#10B981]" />
                  <span>{stage.tool}</span>
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#0E1420] rounded transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Line */}
        <div className="px-5 py-2 bg-[#0E1420] border-b border-[#1F293D] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1 text-[#10B981]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>STATUS: EXIT_CODE 0 [SUCCESS]</span>
          </span>
          <span className="text-[#64748B]">STAGE_ID: STG-0{stage.id}-PROD</span>
        </div>

        {/* Log Stream */}
        <div className="p-4 overflow-y-auto flex-1 font-mono text-xs text-[#E2E8F0] bg-[#070A11] space-y-2 select-text">
          <div className="text-[#64748B] flex items-center gap-1 text-[11px]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Runner: ip-10-0-42-18.ec2.internal // Pod: runner-worker-492</span>
          </div>

          <div className="border-t border-[#1F293D]/50 pt-2 space-y-1.5">
            {stage.logOutput?.map((line, idx) => (
              <div key={idx} className="flex gap-2 text-[#94A3B8] leading-relaxed">
                <span className="text-[#475569] select-none text-[10px] w-6 text-right shrink-0">
                  {idx + 1}
                </span>
                <span className={line.includes('OK') || line.includes('passed') || line.includes('complete') ? 'text-[#10B981]' : line.includes('Building') || line.includes('Running') ? 'text-[#06B6D4]' : 'text-[#E2E8F0]'}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 text-[11px] text-[#10B981]">
            <span>✔ Step artifact attestation verified with Cosign IRSA signature.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-[#1F293D] bg-[#0E1420] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#64748B]">
            Automated GitOps pipeline execution
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#151E2E] hover:bg-[#1c2638] text-[#F1F5F9] border border-[#1F293D] text-xs font-mono cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
