import React, { useState } from 'react';
import { X, Send, Copy, Check, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { ProfileMode } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileMode: ProfileMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, profileMode }) => {
  const isAnshu = profileMode === 'anshu';
  const emailTarget = 'kushawahaanshu8858@gmail.com';
  const curlCommand = isAnshu
    ? 'curl -s https://quancore.engineer/anshu_contact.sh | sh'
    : 'curl -s https://sysarch.engineer/contact.sh | sh';

  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleType, setRoleType] = useState('Staff/Lead DevOps');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // open mailto as fallback
      window.location.href = `mailto:${emailTarget}?subject=${encodeURIComponent(`[Engineering Inquiry] ${roleType} from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nRole / Focus: ${roleType}\n\n${message}`)}`;
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090D16]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#0E1420] border border-[#1F293D] rounded-lg shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#151E2E] border-b border-[#1F293D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#10B981]" />
            <div>
              <h2 className="font-mono text-sm font-bold text-[#F1F5F9]">
                {isAnshu ? 'Connect with Anshu Kushwaha' : 'Initiate Engineering Handshake'}
              </h2>
              <span className="text-[11px] text-[#94A3B8] font-mono">
                Direct channel: {emailTarget}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#0E1420] rounded transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* CLI Quick Connect Strip */}
        <div className="px-6 py-3 bg-[#070A11] border-b border-[#1F293D] flex items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#06B6D4] truncate">
            <span className="text-[#64748B]">$</span>
            <span className="truncate">{curlCommand}</span>
          </div>
          <button
            onClick={handleCopyCurl}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E1420] hover:bg-[#151E2E] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D] shrink-0 transition-colors cursor-pointer text-[11px]"
          >
            {copied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy CLI'}</span>
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4 font-mono">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/40 mx-auto flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#F1F5F9]">Handshake Initialized!</h3>
            <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
              Your inquiry has been compiled and is dispatching directly to <span className="text-[#10B981]">{emailTarget}</span>.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-[#090D16] text-xs font-medium rounded transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 font-sans text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#94A3B8] block">Your Name / Organization</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance (Platform VP)"
                  className="w-full bg-[#070A11] border border-[#1F293D] focus:border-[#06B6D4] px-3 py-2 rounded text-[#F1F5F9] outline-none font-mono text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#94A3B8] block">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@enterprise.cloud"
                  className="w-full bg-[#070A11] border border-[#1F293D] focus:border-[#06B6D4] px-3 py-2 rounded text-[#F1F5F9] outline-none font-mono text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#94A3B8] block">Engagement / Focus Area</label>
              <select
                value={roleType}
                onChange={(e) => setRoleType(e.target.value)}
                className="w-full bg-[#070A11] border border-[#1F293D] focus:border-[#06B6D4] px-3 py-2 rounded text-[#F1F5F9] outline-none font-mono text-xs"
              >
                <option value="Staff/Lead DevOps Role">Staff / Lead DevOps & Platform Architect Role</option>
                <option value="Kubernetes & Cloud Migration">Kubernetes Multi-Cluster / Cloud Migration</option>
                <option value="GitOps & CI/CD Pipeline Automation">GitOps & CI/CD Pipeline Modernization</option>
                <option value="High-Throughput Microservices (Python/Node)">High-Throughput Microservices (Python/Node/Go)</option>
                <option value="Enterprise Architecture Consultation">Enterprise Architecture Consultation</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#94A3B8] block">Project Details / Message</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your infrastructure requirements, platform challenges, or engagement timeline..."
                className="w-full bg-[#070A11] border border-[#1F293D] focus:border-[#06B6D4] px-3 py-2 rounded text-[#F1F5F9] outline-none font-mono text-xs resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={`mailto:${emailTarget}`}
                className="flex items-center gap-1.5 font-mono text-[11px] text-[#06B6D4] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open direct email client</span>
              </a>

              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-medium font-mono text-xs rounded transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Handshake</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
