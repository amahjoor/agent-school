export interface ThinkingBubble {
  id: string;
  text: string;
  timestamp: number;
}

export interface ExplorationStep {
  id: string;
  type: 'linkedin' | 'association' | 'database' | 'forum' | 'google';
  title: string;
  description: string;
  url: string;
  findings?: string[];
  timestamp: number;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface ResearchSource {
  name: string;
  type: 'primary' | 'secondary';
  description: string;
  details?: string;
}

export interface ResearchReport {
  industry: string;
  persona: string;
  primarySources: ResearchSource[];
  secondarySources: ResearchSource[];
  recommendedApproach: string;
  timeElapsed: number;
  cost: number;
}

export type DemoPhase = 'input' | 'run1-exploring' | 'run1-workflow' | 'run1-output' | 'transition' | 'run2-input' | 'run2-executing' | 'run2-output' | 'comparison' | 'cta';
