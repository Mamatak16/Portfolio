export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  tech: string[];
  github: string;
  demoUrl?: string;
  featured?: boolean;
  category: 'fullstack' | 'aiml' | 'agentic' | 'research';
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer?: string;
  type: 'achievement' | 'certification';
  date?: string;
  description?: string;
  badge?: string;
}

export interface InterestNode {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  connections: string[];
}
