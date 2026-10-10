import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Download } from 'lucide-react';
import { CaseStudy } from '../types';

interface ManifestModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const ManifestModal: React.FC<ManifestModalProps> = ({ caseStudy, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!caseStudy) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(caseStudy.code.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([caseStudy.code.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = caseStudy.code.filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090D16]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#0E1420] border border-[#1F293D] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-[#1F293D] bg-[#151E2E] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-4 h-4 text-[#06B6D4]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold text-[#F1F5F9]">
                  {caseStudy.code.filename}
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#0E1420] text-[#10B981] border border-[#1F293D]">
                  {caseStudy.manifestType}
                </span>
              </div>
              <span className="text-[11px] text-[#94A3B8] font-mono">
                {caseStudy.sysId} // {caseStudy.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#0E1420] hover:bg-[#1c2638] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="p-1 text-[#94A3B8] hover:text-[#06B6D4] hover:bg-[#0E1420] rounded border border-transparent hover:border-[#1F293D] transition-colors cursor-pointer"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#0E1420] rounded border border-transparent hover:border-[#1F293D] transition-colors cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Manifest Metadata Banner */}
        <div className="px-5 py-2 bg-[#0E1420] border-b border-[#1F293D] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
          <span>{caseStudy.code.metaSource || 'PROD_SPECIFICATION'}</span>
          <span className="text-[#10B981]">{caseStudy.code.stateText || 'VERIFIED'}</span>
        </div>

        {/* Code View with Line Numbers */}
        <div className="p-4 overflow-y-auto flex-1 font-mono text-xs text-[#E2E8F0] bg-[#070A11] leading-relaxed select-text">
          <pre className="overflow-x-auto">
            {caseStudy.code.content.split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-4 text-right select-none text-[#475569] text-[11px]">
                  {idx + 1}
                </span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#1F293D] bg-[#0E1420] flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>Declarative GitOps compliant manifest</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#151E2E] hover:bg-[#1c2638] text-[#F1F5F9] border border-[#1F293D] text-xs font-mono cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
