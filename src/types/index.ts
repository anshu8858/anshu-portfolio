export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: { label: string; value: string }[];
  liveUrl?: string;
  year: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  years: string;
}

export interface NavLink {
  label: string;
  href: string;
}
