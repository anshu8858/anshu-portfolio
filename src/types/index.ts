export type ProfileMode = 'sysarch' | 'anshu';

export type NavTab = 'overview' | 'projects' | 'stack' | 'experience' | 'terminal';

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  detail: string;
  icon?: string;
  delta?: string;
  deltaPositive?: boolean;
}

export interface PipelineStage {
  id: number;
  name: string;
  duration: string;
  status: 'passed' | 'running' | 'queued';
  tool: string;
  logOutput?: string[];
}

export interface CompetencyPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  sysId: string;
  badge: string;
  badgeType: 'prod' | 'idp' | 'stream' | 'gpu' | 'saas' | 'telecom';
  regionOrScale: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  manifestFile: string;
  manifestType: string;
  tags: string[];
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  impact: {
    title: string;
    metrics: Array<{
      label: string;
      value: string;
      subtext?: string;
      isHighlighted?: boolean;
    }>;
  };
  topology: {
    title: string;
    subtitle: string;
    type: 'k8s_mesh' | 'idp_flow' | 'keda_stream' | 'poster_flow' | 'expo_broker' | 'gpu_scheduling' | 'multi_product' | 'telegram_bot';
    details: string;
  };
  code: {
    filename: string;
    language: string;
    content: string;
    metaSource?: string;
    stateText?: string;
  };
}

export interface TechItem {
  name: string;
  category: string;
  level: string;
  years: string;
  description: string;
  icon?: string;
}

export interface TimelineMilestone {
  period: string;
  badge: string;
  title: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
}
