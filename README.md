# Agent School Demo

Industry Research & People Discovery demo showcasing Agent School's "learn once, run repeatedly" workflow automation.

## Overview

This demo demonstrates how Agent School AI learns research workflows once (at $2 cost), then executes them repeatedly at 10x lower cost ($0.20) compared to competitors like Apollo.io, Clay.com, and ZoomInfo that re-reason every time ($2 per run).

## Features

- **Landing Page**: Clear value proposition with cost comparison
- **Interactive Demo Flow**:
  - Natural language input
  - RUN 1 (Learning): AI explores sources and creates workflow (45 seconds, $2)
  - RUN 2 (Execution): AI runs the same workflow deterministically (12 seconds, $0.20)
  - Cost comparison visualization showing 81% savings
  - Call-to-action with booking form
- **Animations**: Smooth Framer Motion animations throughout
- **Analytics**: Event tracking for user behavior analysis
- **Responsive**: Desktop-optimized with mobile fallback

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
agent-school-demo/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── demo/
│   │   └── page.tsx       # Demo simulation page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── demo/             # Demo-specific components
│   │   ├── AIThinkingPanel.tsx
│   │   ├── AIExploringPanel.tsx
│   │   ├── WorkflowVisualization.tsx
│   │   ├── ResearchReport.tsx
│   │   └── CostComparison.tsx
│   └── BackButton.tsx    # Navigation component
├── lib/                  # Utilities and data
│   ├── types/           # TypeScript types
│   │   └── demo.ts
│   ├── data/            # Simulation data
│   │   └── simulationData.ts
│   └── analytics.ts     # Analytics tracking
├── public/              # Static assets
└── README.md

```

## Demo Flow

1. **Input**: User describes what they want to find in natural language
2. **RUN 1 (Learning)**:
   - AI explores LinkedIn, associations, databases, forums
   - Creates a 5-step reusable workflow
   - Generates research report
   - Time: 45 seconds | Cost: $2.00
3. **RUN 2 (Execution)**:
   - Same workflow runs on different industry
   - Deterministic execution, no re-reasoning
   - Generates research report
   - Time: 12 seconds | Cost: $0.20
4. **Comparison**: Shows 81% cost savings vs competitors
5. **CTA**: Book a call form

## Analytics Events Tracked

- Landing page views
- Demo starts
- Run 1 completion
- Run 2 completion
- Comparison views
- CTA views and clicks
- Demo restarts
- Example query selections

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Update Simulation Data

Edit `/lib/data/simulationData.ts` to modify:
- Industries shown in demo
- Research sources discovered
- Timing of simulation phases

### Add Real Analytics

Edit `/lib/analytics.ts` to connect to:
- Google Analytics
- Plausible
- Mixpanel
- Or any analytics service

### Update Booking Integration

Edit the form submission in `/app/demo/page.tsx` to:
- Connect to Calendly
- Use custom booking system
- Send data to your CRM

## Performance

- **Initial Load**: <2 seconds
- **Time to Interactive**: <3 seconds
- **Lighthouse Score Target**: 90+ across all metrics
- **Animation Performance**: 60fps

## Browser Support

- Chrome (latest)
- Safari (latest)
- Edge (latest)
- Firefox (latest)

## License

Private - Agent School

## Contact

For questions or support, contact [your-email@example.com]
