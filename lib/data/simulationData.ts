import { ExplorationStep, WorkflowStep, ResearchReport, ThinkingBubble } from '../types/demo';

// RUN 1: Manufacturing Operations Managers
export const run1ThinkingBubbles: ThinkingBubble[] = [
  { id: '1', text: 'Breaking down your request...', timestamp: 0 },
  { id: '2', text: 'Target: Operations Managers', timestamp: 2000 },
  { id: '3', text: 'Industry: Manufacturing', timestamp: 3000 },
  { id: '4', text: 'Goal: Discover information sources (not just individual contacts)', timestamp: 4500 },
  { id: '5', text: 'Starting exploration...', timestamp: 6000 },
];

export const run1ExplorationSteps: ExplorationStep[] = [
  {
    id: 'linkedin-1',
    type: 'linkedin',
    title: 'LinkedIn Sales Navigator',
    description: 'Searching "Operations Manager Manufacturing"',
    url: 'linkedin.com/sales/search',
    findings: [
      'Found 12,000+ profiles',
      'But you asked WHERE they hang out, not just names',
      'Let me dig deeper...'
    ],
    timestamp: 7000
  },
  {
    id: 'google-1',
    type: 'google',
    title: 'Google Search',
    description: 'Searching "manufacturing operations manager associations"',
    url: 'google.com/search',
    timestamp: 11000
  },
  {
    id: 'association-1',
    type: 'association',
    title: 'NAM (National Association of Manufacturers)',
    description: 'Discovered industry association',
    url: 'nam.org',
    findings: [
      '14,000 members',
      'Member directory available',
      'Regional chapters',
      'Industry events'
    ],
    timestamp: 14000
  },
  {
    id: 'database-1',
    type: 'database',
    title: 'Thomasnet',
    description: 'Industry-specific database discovery',
    url: 'thomasnet.com',
    findings: [
      '50,000+ manufacturing companies',
      'Company contacts including ops managers',
      'Cross-reference opportunity'
    ],
    timestamp: 18000
  },
  {
    id: 'forum-1',
    type: 'forum',
    title: 'IndustryWeek Forums',
    description: 'Community and forum discovery',
    url: 'industryweek.com/forums',
    findings: [
      'Active discussions',
      'Job postings',
      'Thought leaders',
      'Also found: Manufacturing.net community'
    ],
    timestamp: 22000
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'LinkedIn Sales Navigator',
    description: 'Filter by [Industry] + "Operations Manager"'
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Industry Association Lookup',
    description: 'Search "[Industry] operations manager association"'
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Industry Database Check',
    description: 'Check specialized databases (e.g., Thomasnet for manufacturing)'
  },
  {
    id: 'step-4',
    step: 4,
    title: 'Forum/Community Discovery',
    description: '"[Industry] operations forum" + LinkedIn Groups'
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Cross-reference & Aggregate',
    description: 'Compile sources with access methods'
  }
];

export const run1Report: ResearchReport = {
  industry: 'Manufacturing',
  persona: 'Operations Managers',
  primarySources: [
    {
      name: 'LinkedIn Sales Navigator',
      type: 'primary',
      description: '12,000+ profiles',
      details: 'Search: Operations Manager + Manufacturing + 100-500 employees'
    },
    {
      name: 'NAM (National Association of Manufacturers)',
      type: 'primary',
      description: '14,000 members, directory access, regional chapters'
    },
    {
      name: 'Thomasnet',
      type: 'primary',
      description: '50,000+ companies, searchable by role'
    }
  ],
  secondarySources: [
    {
      name: 'IndustryWeek Forum',
      type: 'secondary',
      description: 'Active community, job posts'
    },
    {
      name: 'Manufacturing.net',
      type: 'secondary',
      description: 'Industry discussions'
    },
    {
      name: 'LinkedIn Group: Manufacturing Leadership Network',
      type: 'secondary',
      description: '18K members'
    }
  ],
  recommendedApproach: 'Start with NAM directory (highest quality), cross-reference with LinkedIn, engage in forums for warm intros',
  timeElapsed: 45,
  cost: 2.00
};

// RUN 2: Real Estate Operations Managers
export const run2Report: ResearchReport = {
  industry: 'Real Estate',
  persona: 'Operations Managers',
  primarySources: [
    {
      name: 'LinkedIn Sales Navigator',
      type: 'primary',
      description: '8,500+ profiles'
    },
    {
      name: 'NAR (National Association of Realtors)',
      type: 'primary',
      description: 'Member directory, local boards'
    },
    {
      name: 'CoStar / LoopNet',
      type: 'primary',
      description: 'Commercial real estate databases'
    }
  ],
  secondarySources: [
    {
      name: 'BiggerPockets Forum',
      type: 'secondary',
      description: 'Active investor/operator community'
    },
    {
      name: 'REIClub',
      type: 'secondary',
      description: 'Real estate professional network'
    },
    {
      name: 'LinkedIn Group: Commercial Real Estate Professionals',
      type: 'secondary',
      description: '25K members'
    }
  ],
  recommendedApproach: 'Start with NAR local boards for regional contacts, use CoStar for company-level research, engage in BiggerPockets for warm network',
  timeElapsed: 12,
  cost: 0.20
};
