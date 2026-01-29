---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping']
inputDocuments: []
workflowType: 'prd'
briefCount: 0
researchCount: 0
brainstormingCount: 0
projectDocsCount: 0
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low'
  projectContext: 'greenfield'
---

# Product Requirements Document - agent-school-demo

**Author:** Arman
**Date:** 2026-01-28

## Strategic Context & Validation Status

**Current State:**
This PRD describes a demo designed to showcase Agent School's core differentiation: **AI that learns workflows once, then executes deterministically at 10x lower cost.** The demo is a conversation starter and validation tool, not a product commitment.

**The Agent School Thesis:**
- **Competitor approach:** AI re-reasons every task execution ($2+ per run, slow, inconsistent)
- **Agent School approach:** AI learns workflow ONCE ($2 first run), then executes deterministically ($0.20 per run), with self-healing when systems change
- **Key innovation:** Student/Teacher agent system - AI "learns" and gets "certified" on workflows, then runs them as deterministic scripts (not re-reasoning)

**Demo Workflow Chosen: Industry Research & People Discovery**

**Why This Workflow:**
- **Demonstrates core thesis clearly:** First run (learning) vs. Second run (fast execution) shows the cost/speed advantage
- **Founder's actual pain:** Arman needs this RIGHT NOW to find operations managers across 10+ industries for customer discovery
- **Universal applicability:** Every B2B founder/sales/BD person needs to research where prospects hang out
- **Differentiates from competitors:** Tools like Apollo/Clay/ZoomInfo re-run expensive AI every time; Agent School learns once

**What We Know:**
- **Market is crowded (red ocean):** Apollo.io, ZoomInfo, Clay.com, LinkedIn Sales Navigator all do people search
- **High willingness to pay:** Companies spend $49-15K/year on these tools, proving demand
- **Competitor weakness:** They re-use databases, not methodologies. They can't "learn your research process"
- **Our edge:** Show that AI LEARNS the research methodology (where to look, how to triangulate sources), not just executes searches
- **Founder validation:** This solves Arman's immediate pain (finding ops managers for customer discovery)

**What We DON'T Know (Hypothesis to Test):**
- Whether "learning once, running repeatedly" resonates as differentiation vs. "just another search tool"
- If founders/sales people care about cost savings ($2 → $0.20) or just want results fast
- Whether showing "research methodology" (where to find people) is more valuable than "list of contacts"
- If this workflow demonstrates Agent School concept better than alternatives (invoice processing, proposal generation, etc.)
- Whether legacy operations managers or founders/sales people are the better beachhead

**Validation Strategy:**
- **Build:** "Industry Research & People Discovery" demo (7-10 days, solo build by Arman)
- **Test:** Cold outreach to 50-100 prospects (founders, sales ops, BD teams)
- **Learn:** Customer discovery calls to validate if "learning" advantage matters, or if different workflow resonates more
- **Pivot:** Be prepared to build different workflow demo if this doesn't demonstrate Agent School thesis effectively

**This Demo's Purpose:**
- **Primary:** Demonstrate Agent School's "learn once, run repeatedly" core differentiation
- **Secondary:** Solve Arman's immediate pain (research where to find ops managers across industries)
- **Tertiary:** Start conversations to discover which workflows have highest value and willingness to pay
- **Build trust:** Show prospects "something real" vs. just an idea

**Parallel Execution:**
While building this demo, we are simultaneously conducting cold outreach and customer discovery interviews to:
1. Test conversion of this specific workflow
2. Discover other high-value workflows
3. Identify target personas with strongest willingness to pay
4. Learn which pain points resonate most
5. Validate if "learning" advantage matters to target personas

**Decision Criteria:**
If customer calls reveal different workflows have significantly higher value or willingness to pay, we will build additional demos or pivot focus accordingly. This is explicitly a learning tool and conversation starter, not a product commitment.

**How This Fits Agent School Vision:**
- **Near-term:** Demo showcases core "learn once, run repeatedly" thesis
- **Mid-term:** Add workflow modules based on customer discovery (invoice processing, proposal generation, meeting booking, etc.)
- **Long-term:** These become operation "nodes" within the broader Agent School platform that automates across legacy systems with self-healing

## Success Criteria

### User Success

**The "Magic Moment" Experience:**
- User experiences smooth, polished animations that feel like a finished product
- Visual execution builds trust through transparency: cursor movement, "AI thinking" bubbles showing reasoning
- User witnesses the learning vs. execution contrast (Run 1: 45 sec, $2 | Run 2: 12 sec, $0.20)
- User recognizes their own pain point ("I spend 2-4 hours researching each new industry")
- User has the "aha!" moment: "It LEARNED my research methodology, not just searched"
- User leaves the demo thinking "This is EXACTLY what Agent School should do" and books a call

**Trust-Building Through Transparency:**
- AI shows exactly what it's discovering at each step (associations, databases, forums)
- Split-screen showing "AI thinking" + "AI exploring" builds confidence
- Workflow visualization shows the "recipe" AI created
- Cost comparison makes the value proposition crystal clear

### Business Success

**Lead Generation Metrics:**
- **Cold email response rate:** 10% target
- **Week 1:** Minimum 2 booked calls (10+ would be excellent)
- **Month 1:** 10+ qualified customer interviews booked
- **Quality bar:** Booked calls are with qualified prospects (sales/ops/founder roles with repetitive workflow pain)

**Iteration Signals:**
- **Email open rate** → Subject line effectiveness
- **Link click rate** → Email copy effectiveness
- **Demo analytics** → Demo experience effectiveness
- Track where users drop off in demo to identify improvement areas

### Technical Success

**Core Functionality:**
- Demo works on modern browsers (Chrome, Safari, Edge, Firefox)
- Desktop-optimized experience
- Mobile shows fallback message ("This demo works best on desktop")
- Next.js ensures reasonable resilience and performance

**Polish:**
- Animations feel smooth and professional
- Feels like a finished product, not a prototype
- Visual quality comparable to top-tier SaaS demos

**Priority: Functional first (the cake), polished second (the icing)**

### Measurable Outcomes

**Immediate Goal:**
- Demo deployed and ready to send cold emails ASAP (tomorrow if possible)
- First customer interview calls booked from cold email → demo → conversion

**Quality Over Speed:**
- Focus on making it functional and polished
- Don't sacrifice quality for arbitrary timeline
- Ship when it's ready to generate qualified conversations

## Product Scope

### MVP - Minimum Viable Product

**Core Experience (Ship When Ready):**
- **Single workflow:** Industry Research & People Discovery
- **Natural language input:** Simple text box where user describes what they're looking for
- **Dual-run demonstration:** First run (learning) vs. Second run (execution) showing cost/speed advantage
- **Visual simulator:** Animated cursor movement showing AI discovering sources (LinkedIn, associations, databases, forums)
- **Transparent execution:** Split-screen with "AI thinking" + "AI exploring" panels showing discovery process
- **Workflow visualization:** Shows the "recipe" AI created as reusable steps
- **Output:** Research report listing WHERE to find target personas (sources, databases, forums, communities)
- **Cost comparison:** Shows Agent School ($3.80 for 10 industries) vs. Competitors ($20 for same work)
- **Call-to-action:** "Book a Call" button prominently displayed
- **Mobile fallback:** Simple message directing to desktop experience

**Workflow Detail:**
- User inputs: "Find where [persona] in [industry] hang out"
- **RUN 1 (Learning - 45 seconds):** AI explores and discovers sources (LinkedIn, associations, databases, forums), creates reusable workflow, costs $2
- **RUN 2 (Execution - 12 seconds):** AI runs the SAME workflow on a different industry deterministically, costs $0.20
- AI generates research report listing all sources with access methods
- Demonstrates 10x cost advantage: competitors re-reason every time ($2/run), Agent School learns once

**Tech Stack:**
- Next.js 14 (App Router)
- Tailwind CSS + Framer Motion (animations)
- Minimal, sleek design (Linear-style)
- Deployed on Vercel

**Priority Order:**
1. **Functional** - Demo works end-to-end
2. **Polished** - Feels professional and magical
3. **Full-featured** - Complete experience for meeting prep workflow

**Out of Scope for MVP:**
- Real browser automation (Stagehand integration)
- Multiple workflow options
- User customization beyond question flow
- Virtual computer instances
- Edge case browser compatibility testing

### Growth Features (Based on Customer Discovery)

**Additional Workflow Demos (If Customer Calls Reveal Demand):**
- Meeting transcript → business proposal generation
- Invoice processing automation
- Meeting booking automation
- Email triage & response automation
- Cross-system data reconciliation

**Product Enhancements:**
- Additional industry templates (healthcare, manufacturing, real estate, etc.)
- Integration with CRM systems (export contacts directly to Salesforce, HubSpot)
- Contact enrichment (go from sources → actual contact list)
- Multi-workflow landing page (if multiple workflows validate)
- Advanced demo analytics and A/B testing
- User customization of research depth and sources

**Note:** Additional workflows will be prioritized based on customer discovery findings, not predetermined roadmap.

### Vision (Future)

**Full Agent School Platform:**
- Real execution (not simulation) with Stagehand + virtual instances
- Software layer/MCP wrapper generation
- Student/Teacher agent certification system
- Self-healing automation
- Workflow marketplace
- Self-service workflow builder for non-technical users

## User Journeys

### Journey 1: Arman - Founder Research Success Path

**Persona: Arman, Founder of Agent School**

**Background:**
- Founder building Agent School (AI workflow automation platform)
- Currently validating product-market fit through customer discovery
- Needs to find operations managers across 10+ industries (manufacturing, distribution, real estate, professional services, healthcare, etc.)
- Current pain: Spends 3-4 hours researching WHERE to find qualified prospects in EACH new industry
- Challenge: Every industry has different databases, forums, associations, LinkedIn groups - all scattered
- Has tried: LinkedIn Sales Navigator (limited), Apollo/ZoomInfo (expensive, shallow data), manual Google research (time-consuming)
- Biggest frustration: Competitors (Apollo, Clay) re-run expensive AI every search. Costs add up fast.

**Current Reality:**
Monday morning, 10am. Arman needs to find operations managers in manufacturing companies for customer discovery interviews.

He opens LinkedIn Sales Navigator. Searches "Operations Manager + Manufacturing." Gets 10K+ results. Too broad. Tries filtering by company size, geography. Still overwhelming and shallow - just names and LinkedIn profiles.

Opens Google: "where to find manufacturing operations managers." Finds: Thomasnet (company database), NAM (National Association of Manufacturers), IndustryWeek forums, LinkedIn groups, trade shows...

Spends next 2 hours manually checking each source, cross-referencing, building a spreadsheet. Finally has 20 qualified contacts.

Now he needs to do the SAME thing for real estate. And distribution. And professional services. And 7 more industries.

**Total time: 30-40 hours across 10 industries. This is killing him.**

**The Journey:**

**Opening Scene - Monday Afternoon, 2pm:**
Arman checks email between research sessions. Subject line: *"AI that learns your research process once, runs it 10x cheaper forever - Watch demo"*

Internal thought: "Another people search tool? But wait... 'learns once'? That's interesting." Clicks.

**Landing - First Impression:**
Clean demo page. Headline: **"Agent School: AI That Learns Once, Runs Repeatedly"**

Subhead: "Competitors like Apollo charge $2+ per search, every time. Agent School: $2 first search (AI learning), $0.20 every search after (deterministic execution). Watch the difference."

Arman thinks: "Okay, THAT'S different. Show me."

Clicks "Try Demo"

**Natural Language Input:**
Demo interface appears. Simple text box with prompt: **"What are you trying to find? Describe it naturally."**

Arman types: *"Find where operations managers in manufacturing companies hang out - databases, forums, associations, LinkedIn groups"*

Hits Enter.

---

**RUN 1: THE LEARNING (First Industry - 45 seconds)**

**Phase 1: AI Exploration & Reasoning (20 seconds)**

Screen splits into two panels:

**LEFT: "AI Thinking" Panel (transparent reasoning)**
- AI bubble: "Breaking down your request..."
- AI bubble: "Target: Operations Managers"
- AI bubble: "Industry: Manufacturing"
- AI bubble: "Goal: Discover information sources (not just individual contacts)"

**RIGHT: "AI Exploring" Panel (visual browser simulation)**

Animated cursor starts moving. AI navigates through mock websites:

1. **LinkedIn Search**
   - AI thinking: "Starting with LinkedIn Sales Navigator..."
   - Searches "Operations Manager Manufacturing"
   - AI thinking: "Found 12,000 profiles. But you asked WHERE they hang out, not just names. Let me dig deeper..."

2. **Industry Associations**
   - AI cursor navigates to Google: "manufacturing operations manager associations"
   - Discovers: **NAM (National Association of Manufacturers)**
   - AI thinking: "NAM has 14,000 members. Checking if they have directory access..."
   - Finds: Member directory, regional chapters, industry events

3. **Industry-Specific Databases**
   - AI discovers: **Thomasnet** (50,000+ manufacturing companies)
   - AI thinking: "Thomasnet lists company contacts including ops managers. Cross-reference opportunity."

4. **Forums & Communities**
   - Finds: **IndustryWeek forums**, **Manufacturing.net community**, **LinkedIn Groups: Manufacturing Leadership Network**
   - AI thinking: "Active discussions, job postings, thought leaders"

**Phase 2: Workflow Creation (10 seconds)**

AI bubble: **"I've learned your research methodology. Creating reusable workflow..."**

Screen shows **"Workflow Recipe Created"** with visual flowchart:

```
Step 1: LinkedIn Sales Navigator → Filter by [Industry] + "Operations Manager"
Step 2: Industry Association Lookup → Search "[Industry] operations manager association"
Step 3: Industry Database Check → Check specialized databases (e.g., Thomasnet for manufacturing)
Step 4: Forum/Community Discovery → "[Industry] operations forum" + LinkedIn Groups
Step 5: Cross-reference & Aggregate → Compile sources with access methods
```

**Phase 3: Output & Cost (5 seconds)**

**Research Report Generated:**

**Manufacturing Operations Managers - Where to Find Them:**

**Primary Sources:**
- LinkedIn Sales Navigator: 12,000+ profiles (search: Operations Manager + Manufacturing + 100-500 employees)
- NAM (National Association of Manufacturers): 14,000 members, directory access, regional chapters
- Thomasnet: 50,000+ companies, searchable by role

**Secondary Sources:**
- IndustryWeek Forum: Active community, job posts
- Manufacturing.net: Industry discussions
- LinkedIn Group: Manufacturing Leadership Network (18K members)

**Recommended Approach:** Start with NAM directory (highest quality), cross-reference with LinkedIn, engage in forums for warm intros

**Cost This Run: $2.00** (Heavy AI reasoning + exploration)
**Time: 45 seconds** (vs 2-4 hours manual)

Arman leans forward. "It didn't just search LinkedIn. It RESEARCHED the industry and told me where to look. And it created a workflow?"

---

**RUN 2: THE EXECUTION (Second Industry - 20 seconds)**

**Phase 4: Fast Deterministic Execution**

Text appears: **"Now watch the SAME workflow run for a different industry - no re-reasoning, just execution."**

Arman types: *"Now find where operations managers in real estate hang out"*

**Speed Animation:**

Screen shows the workflow running FAST:
- Step 1: LinkedIn Search → [REAL ESTATE] substituted → Results in 3 seconds
- Step 2: Association Lookup → Finds **NAR (National Association of Realtors)** → 2 seconds
- Step 3: Industry Database → Finds **CoStar, LoopNet** (real estate databases) → 3 seconds
- Step 4: Forums → Finds **BiggerPockets, REIClub forums** → 2 seconds
- Step 5: Aggregate → Complete report → 2 seconds

**Total Time: 12 seconds**

**Real Estate Operations Managers - Where to Find Them:**

**Primary Sources:**
- LinkedIn Sales Navigator: 8,500+ profiles
- NAR (National Association of Realtors): Member directory, local boards
- CoStar / LoopNet: Commercial real estate databases

**Secondary Sources:**
- BiggerPockets Forum: Active investor/operator community
- REIClub: Real estate professional network
- LinkedIn Group: Commercial Real Estate Professionals

**Cost This Run: $0.20** (Deterministic execution, minimal AI)
**Time: 12 seconds**

---

**THE AHA! MOMENT (10 seconds)**

**Cost Comparison Visualization:**

Split screen comparison:

**Competitors (Apollo, Clay, ZoomInfo):**
- Run 1 (Manufacturing): $2.00, 30 seconds
- Run 2 (Real Estate): $2.00, 30 seconds
- Run 3-10 (8 more industries): $16.00
- **Total: $20.00**

**Agent School:**
- Run 1 (Manufacturing - Learning): $2.00, 45 seconds
- Run 2-10 (Execution): $1.80 total ($0.20 × 9)
- **Total: $3.80**

**Savings: $16.20 (81% cost reduction)**

Text appears: **"Agent School learns once, runs repeatedly. Competitors re-reason every time."**

**The Realization:**

Arman sits back. His mind racing:

"It LEARNED my research methodology. It didn't just search - it figured out the PATTERN: associations, databases, forums. Then it ran the SAME pattern for real estate in 12 seconds."

"For 10 industries, competitors would cost me $20. This costs $3.80. And I just watched it work."

"This is EXACTLY what Agent School is supposed to do: learn workflows, run them deterministically, save massive costs."

**Self-Healing Moment (Optional 10 seconds)**

Small note appears: **"What if LinkedIn changes their UI?"**

Visual shows:
- Workflow runs → LinkedIn step fails (red X)
- AI thinking: "LinkedIn UI changed. Re-learning this step..."
- AI explores new LinkedIn interface (5 seconds)
- AI thinking: "Updated workflow. Continuing..."
- Workflow completes successfully

Text: **"Self-healing: AI detects changes, re-learns only what broke, keeps running."**

**Resolution:**

Big "Book a Call" button: **"See Agent School working on YOUR workflows"**

Arman doesn't hesitate. This is his product thesis, proven visually.

He clicks. Books a call.

As he closes the tab: "I need to build this. This is the demo that shows EXACTLY what makes Agent School different."

**Emotional Arc:**
- Skeptical → Intrigued → Impressed → Validated → Committed

---

### Journey Requirements Summary

**Arman's journey reveals these critical capabilities for the demo:**

**1. Natural Language Input**
- Free-text box for user query
- No forms, no dropdowns - just describe what you need
- AI parses intent from natural language

**2. Transparent AI Reasoning (First Run)**
- Split-screen showing "AI thinking" + "AI exploring"
- Visualize AI discovering sources (LinkedIn, associations, databases, forums)
- Show AI figuring out the methodology, not just executing searches
- Build trust through transparency

**3. Workflow Visualization**
- Show the "recipe" AI created as a visual flowchart
- Clear steps that can be reused
- Demonstrates "learning" explicitly

**4. Dual-Run Demonstration (Critical)**
- **Run 1:** Show learning (45 sec, $2, heavy reasoning)
- **Run 2:** Show execution (12 sec, $0.20, deterministic)
- Side-by-side contrast makes the value obvious

**5. Cost Comparison**
- Explicit pricing shown: "$2 first run, $0.20 after"
- Competitor comparison (Apollo/Clay/ZoomInfo)
- Calculate savings across multiple runs

**6. Output Quality**
- Research report format (not just contact list)
- Shows WHERE to find people (sources, databases, forums)
- Actionable recommendations

**7. Self-Healing Showcase (Optional)**
- Demonstrate what happens when a source/UI changes
- Show AI detecting failure, re-learning, continuing
- Proves robustness

**8. Industry-Agnostic**
- Works for ANY industry (manufacturing → real estate → etc.)
- Same workflow, different inputs
- Horizontal applicability

**9. Call-to-Action**
- "See Agent School working on YOUR workflows"
- Book a call
- Captures qualified leads who understand the differentiation

**10. Validation of Agent School Core Thesis**
- **Visibly demonstrates:** "Learn once, run repeatedly"
- **Proves cost advantage:** 10x cheaper than competitors
- **Shows self-healing:** Adapts when systems change
- **Clear differentiation:** Not just another search tool

**This journey drives every feature in the demo. Every element exists to prove Agent School's thesis and convert viewers to believers.**

## Web Application Specific Requirements

### Project-Type Overview

This is a **Single Page Application (SPA)** demo built with Next.js 14 to showcase the "Industry Research & People Discovery" workflow through an interactive, animated experience. The application prioritizes smooth client-side interactions, fast page loads, and professional visual polish to convert cold email recipients into sales calls by demonstrating Agent School's core "learn once, run repeatedly" thesis.

### Technical Architecture Considerations

**Frontend Architecture:**
- **Framework:** Next.js 14 (App Router) with React 18
- **Architecture:** Single Page Application (SPA) for seamless animations and state management
- **Styling:** Tailwind CSS for rapid UI development + Framer Motion for animations
- **State Management:** React hooks (useState, useContext) or Zustand if needed for complex state
- **Build & Deploy:** Vercel for zero-config deployment and edge optimization

**Browser Support Matrix:**
- **Target:** Modern evergreen browsers (auto-update)
  - Chrome (latest stable)
  - Safari (latest stable)
  - Edge (latest stable)
  - Firefox (latest stable)
- **Strategy:** Use modern web APIs without legacy polyfills
- **Testing:** Cross-browser testing on macOS and Windows
- **Mobile:** Desktop-optimized with mobile fallback message (not responsive design)

**Performance Targets:**
- **Initial Load:** <2 seconds on broadband
- **Time to Interactive:** <3 seconds
- **Animation Performance:** 60fps throughout demo experience
- **Lighthouse Score:** 90+ Performance, 90+ Accessibility, 90+ Best Practices
- **Bundle Size:** <500KB initial JavaScript bundle

**SEO Strategy:**
- **Goal:** Light SEO optimization for organic discovery (secondary to cold email)
- **Meta Tags:** Proper title, description, Open Graph tags for social sharing
- **Semantic HTML:** Proper heading hierarchy, semantic elements
- **Structured Data:** Schema.org markup for SoftwareApplication
- **Sitemap:** Basic XML sitemap
- **robots.txt:** Allow indexing of landing page
- **Analytics:** Google Analytics or Plausible for traffic tracking
- **Note:** SEO is nice-to-have, not critical path (primary traffic is cold email)

**Real-Time Features:**
- **None required:** All demo interactions are client-side simulations
- **No WebSockets, no SSE, no live data streams**
- **API calls:** Only for form submission (booking call) and analytics tracking
- **State:** Fully client-side, no backend synchronization needed

### Accessibility Level

**Phase 1 (MVP - Basic Accessibility Built-In):**
- Semantic HTML structure (Next.js default)
- Keyboard navigation support (tab through interactive elements, Enter/Space to activate)
- Alt text on all images and visual elements
- Proper heading hierarchy (h1 → h2 → h3)
- Good color contrast ratios (4.5:1 minimum for text)
- Focus indicators visible on all interactive elements
- Logical tab order through demo flow
- Form labels properly associated with inputs

**Phase 2 (Post-Launch Enhancement to WCAG 2.1 AA):**
- Full screen reader compatibility testing (NVDA, JAWS, VoiceOver)
- ARIA labels and roles where semantic HTML isn't sufficient
- Descriptive link text (no "click here")
- Skip navigation links
- Accessible error messages and validation
- Keyboard shortcuts documentation
- Animation controls (respect prefers-reduced-motion)

**Rationale:** Start with accessibility basics baked into development (minimal extra effort with Next.js). Enhance to full WCAG 2.1 AA compliance after validating product-market fit. This balances speed-to-market with professional standards.

### Responsive Design

**Desktop-First Approach:**
- **Primary Experience:** Desktop (1280px+ width)
- **Optimization:** Demo designed for large screens to showcase visual detail
- **Mobile Strategy:** Fallback message directing users to desktop
  - Message: "This demo works best on desktop for the full interactive experience. We'll email you a link to try on your computer."
  - CTA: Email capture form or "Book a Call" button
- **Tablet:** Treat as mobile (show fallback message)
- **Rationale:** Demo requires screen real estate for proposal preview, transcript viewing, and multi-step visualization. Mobile responsive would compromise experience quality.

### Implementation Considerations

**Animation Strategy:**
- **Library:** Framer Motion for declarative animations
- **Performance:** Use CSS transforms (translateX, scale, opacity) for GPU acceleration
- **Timing:** Smooth easing curves (ease-out for entrances, ease-in-out for movements)
- **Stagger:** Sequential animations for proposal sections filling in
- **Loading States:** Skeleton screens and progress indicators during simulation
- **Fallback:** Static experience if animations don't load (graceful degradation)

**Demo Simulation Logic:**
- **Pre-scripted:** Workflow steps are predetermined, not actual AI execution
- **Mock Data:** Sample industry research queries, sample research reports, sample source discoveries
- **Dual-Run Timing:** Run 1 (45 sec learning), Run 2 (12 sec execution) with precise timing
- **User Inputs:** Capture target persona and industry, customize simulation accordingly
- **Visual Fidelity:** Mock browser windows showing LinkedIn, Google searches, association websites, forum discoveries
- **Cost Tracking:** Display running cost counter ($2 for learning, $0.20 for execution)

**State Management:**
- **Demo Flow State:** Track current step, user inputs, progress
- **Question Responses:** Store user answers to personalize simulation
- **Error Handling:** Graceful fallbacks if simulation breaks
- **Analytics Events:** Track demo completion rate, drop-off points, CTA clicks

**Third-Party Integrations:**
- **Analytics:** Google Analytics or Plausible for user behavior tracking
- **Call Booking:** Calendly embed or custom booking form
- **Email Capture:** Simple form with validation (if mobile fallback used)
- **No AI APIs:** This is a simulation demo, no real AI processing

**Deployment & Infrastructure:**
- **Platform:** Vercel (zero-config, CDN, edge network)
- **Domain:** Custom domain (agentschool.com or similar)
- **SSL:** Automatic HTTPS via Vercel
- **Environment:** Single production environment (no staging for demo)
- **Monitoring:** Vercel Analytics for performance monitoring
- **Uptime:** Vercel's 99.99% SLA sufficient for demo

**Testing Strategy:**
- **Manual Testing:** Cross-browser testing on Chrome, Safari, Edge, Firefox
- **Device Testing:** Test on macOS and Windows machines
- **Mobile Testing:** Verify fallback message displays correctly
- **Animation Testing:** Verify 60fps performance across browsers
- **Accessibility Testing:** Keyboard navigation, contrast checker, basic screen reader
- **User Testing:** 5-10 people test demo before cold email launch

### Technical Constraints & Decisions

**What We're NOT Building:**
- Real browser automation (Stagehand) - simulation only
- Backend API for AI processing - client-side mock
- User accounts or authentication - anonymous demo
- Data persistence - no database
- Multiple workflow options - single workflow demo
- Admin dashboard or analytics UI - use external tools

**Technical Debt Acknowledged:**
- Hard-coded simulation logic (will need refactoring for multiple workflows)
- No test coverage (acceptable for demo MVP)
- No CI/CD pipeline (manual deployment via Vercel Git integration)
- Limited error handling (demo doesn't need robust error recovery)

**Success Criteria:**
- Demo loads in <2 seconds
- Animations run at 60fps
- Works across modern browsers
- Keyboard navigable
- Converts cold email recipients to booked calls

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach: Problem-Solving MVP**

We're building a focused demo that solves ONE specific, validated pain point (industry research taking 2-4 hours per industry, repeated across 10+ industries) to validate the broader "AI learns workflows once, runs repeatedly" concept. This is NOT the full Agent School platform - it's a conversation starter designed to:

1. **Test cold email conversion** (10% response rate target)
2. **Generate qualified customer conversations** (2-10 calls in Week 1)
3. **Demonstrate core differentiation** (learn once $2, run repeatedly $0.20 vs. competitors $2 every time)
4. **Validate willingness to pay** for workflow automation
5. **Solve Arman's immediate pain** (finding ops managers across 10+ industries for customer discovery)

**Why Problem-Solving MVP (vs. other approaches):**
- **Not Experience MVP:** We're going deep on ONE workflow rather than shallow across many
- **Not Revenue MVP:** We're optimizing for learning and conversations, not immediate monetization
- **Validated demand:** Companies spend $49-15K/year on Apollo/ZoomInfo/Clay, proving willingness to pay for people research

**Resource Requirements:**
- **Team:** Arman (founder) + Claude Code (AI development assistant)
- **Timeline:** 7-10 days to ship (solo build by Arman)
- **Budget:** Minimal (Next.js/Vercel free tier, no paid APIs for simulation)
- **Skills needed:** React/Next.js, animation (Framer Motion), UX/UI design sensibility

### MVP Feature Set (Phase 1)

**Core User Journey Supported:**
- **Primary:** Arman (Founder) - Discovers WHERE to find operations managers across multiple industries
- **Single workflow:** Industry Research & People Discovery
- **Demo format:** Interactive simulation with dual-run demonstration (learning vs. execution)

**Must-Have Capabilities:**

**1. Landing Page & Entry Flow**
- Clean, professional landing page with value proposition
- Headline: "AI That Learns Once, Runs Repeatedly"
- Subhead comparing cost: Agent School ($2 learning, $0.20 execution) vs. Competitors ($2 every time)
- "Try Demo" CTA prominently displayed
- Mobile fallback message ("Works best on desktop")

**2. Natural Language Input**
- Simple text box: "What are you trying to find? Describe it naturally."
- Example: "Find where operations managers in manufacturing companies hang out"
- No forms, no dropdowns - just free text
- AI parses: target persona + industry + goal

**3. Visual Simulation Engine - RUN 1 (Learning)**
- Split-screen layout: "AI Thinking" panel (left) + "AI Exploring" panel (right)
- **AI Thinking Panel:** Shows reasoning bubbles as AI breaks down the request
- **AI Exploring Panel:** Animated cursor navigating mock websites
  - LinkedIn Sales Navigator search
  - Industry association discovery (e.g., NAM for manufacturing)
  - Industry-specific database discovery (e.g., Thomasnet)
  - Forum/community discovery (e.g., IndustryWeek forums)
- **Workflow Visualization:** Shows the "recipe" AI created as a visual flowchart with 5 steps
- **Timing:** 45 seconds total (20 sec exploration, 10 sec workflow creation, 5 sec output, 10 sec transition)
- **Cost Display:** "$2.00 - Heavy AI reasoning + exploration"

**4. Research Report Output (RUN 1)**
- Professional formatted research report
- **Sections:**
  - Primary Sources (associations, databases with member counts)
  - Secondary Sources (forums, LinkedIn groups with activity levels)
  - Recommended Approach (where to start, how to cross-reference)
- Time comparison: "45 seconds vs 2-4 hours manual"

**5. Visual Simulation Engine - RUN 2 (Execution)**
- Text transition: "Now watch the SAME workflow run for a different industry - no re-reasoning, just execution"
- User inputs new industry (or auto-runs): "Now find where operations managers in real estate hang out"
- **Speed Animation:** Shows same 5 workflow steps running FAST (2-3 sec each)
- **Visual Difference:** Less "thinking," more "executing" - deterministic speed
- **Timing:** 12 seconds total
- **Cost Display:** "$0.20 - Deterministic execution, minimal AI"

**6. Research Report Output (RUN 2)**
- Same format as Run 1, different industry-specific sources
- Real estate associations (NAR), databases (CoStar, LoopNet), forums (BiggerPockets)

**7. Cost Comparison Visualization (The "Aha!" Moment)**
- Split-screen comparison showing:
  - **Competitors:** 10 industries × $2 = $20.00
  - **Agent School:** $2 (learning) + $1.80 (9 executions × $0.20) = $3.80
  - **Savings:** $16.20 (81% cost reduction)
- Text: "Agent School learns once, runs repeatedly. Competitors re-reason every time."

**8. Self-Healing Showcase (Optional)**
- Brief visual: LinkedIn UI change → workflow fails → AI re-learns step → continues
- Text: "Self-healing: AI detects changes, re-learns only what broke, keeps running"

**9. Call-to-Action & Conversion**
- Prominent "Book a Call" button: "See Agent School working on YOUR workflows"
- Clear value prop emphasizing learning advantage
- Low-friction booking (Calendly or simple form)

**10. Analytics & Tracking**
- Track demo starts, Run 1 completion, Run 2 completion, cost comparison view
- Drop-off tracking (where users abandon demo)
- CTA click tracking
- Source tracking (which cold email drove traffic)
- Time spent on each phase

**7. Technical Foundation**
- Next.js 14 SPA architecture
- Framer Motion animations at 60fps
- Responsive to user inputs (personalized simulation)
- Cross-browser compatibility (Chrome, Safari, Edge, Firefox)
- Basic accessibility (keyboard nav, semantic HTML, contrast)
- <2 second load time
- Deployed on Vercel with custom domain

**Out of Scope for MVP:**
- ❌ Real AI processing (simulation only)
- ❌ Real browser automation (Stagehand integration)
- ❌ Multiple workflow options (just industry research)
- ❌ Actual contact extraction (demo shows sources, not contact lists)
- ❌ User accounts or data persistence
- ❌ Backend API or database
- ❌ Admin dashboard
- ❌ Full WCAG 2.1 AA compliance (basic accessibility only)
- ❌ Mobile responsive design (fallback message instead)
- ❌ Integration with CRM systems (Salesforce, HubSpot)
- ❌ Integration with real LinkedIn/association APIs
- ❌ Customizable research depth or source preferences
- ❌ Team collaboration features
- ❌ Usage analytics dashboard for users
- ❌ Actual workflow execution (customers can't run their own queries yet)

### Post-MVP Features

**Phase 2: Expansion Based on Customer Discovery (Week 2-4)**

**IF industry research resonates:**
- Add contact extraction (go from sources → actual contact lists)
- Integrate with real LinkedIn/association APIs
- Add CRM export (Salesforce, HubSpot, Apollo)
- Implement real AI processing (move from simulation to execution)
- Add more industry templates (healthcare, distribution, professional services)

**IF customer discovery reveals different high-value workflows:**
- Build 2nd demo: Meeting Transcript → Business Proposal (if sales teams respond)
- Build 2nd demo: Invoice Processing (if legacy ops managers respond)
- Build 2nd demo: Meeting Booking Automation (if productivity theme emerges)
- Landing page with workflow selector (choose your pain point)

**IF conversion is strong but audience is wrong:**
- Refine targeting (founders vs. sales ops vs. legacy operations)
- A/B test messaging in cold emails (cost savings vs. speed vs. learning advantage)
- Create persona-specific landing pages

**General Phase 2 Enhancements:**
- Full WCAG 2.1 AA accessibility compliance
- Mobile responsive version (not just fallback)
- Backend for user accounts and saved research workflows
- Analytics dashboard showing cost savings and time savings
- Multi-industry batch research (run 10 industries in sequence)
- User customization of research depth and source preferences

**Phase 3: Move Toward Full Agent School Platform (Month 2-6)**

**Real Execution:**
- Stagehand browser automation integration
- Virtual computer instances (serverless execution)
- Move from simulation to actual workflow execution

**Platform Features:**
- Software layer/MCP wrapper generation for legacy systems
- Student/Teacher agent certification system
- Self-healing automation (detect UI changes, adapt)
- Workflow marketplace (users share workflows)
- Multi-workflow orchestration
- White-label capabilities for enterprise

**Monetization:**
- Pricing tiers (Starter, Professional, Enterprise)
- Usage-based billing (credits per workflow run)
- One-time setup fees for custom software layers
- Enterprise consulting for complex legacy integrations

### Risk Mitigation Strategy

**Technical Risks:**

**Risk:** Animation performance degrades on older/slower machines
- **Mitigation:** Target modern browsers only, optimize bundle size, GPU-accelerated animations
- **Fallback:** Detect performance issues, show simplified static version

**Risk:** Simulation feels fake or unrealistic
- **Mitigation:** Use real industry data (actual associations, databases, forums that exist), authentic timing based on manual research experience, show real source examples
- **Validation:** Test with 5-10 people before launch, get feedback on realism

**Risk:** 7-10 day timeline slips
- **Mitigation:** Focus on functional first, polish second; leverage existing components and libraries; pre-scripted simulation reduces complexity
- **Contingency:** Ship with less polish if needed to hit timeline (functional > perfect); can skip optional self-healing showcase if needed

**Market Risks:**

**Risk:** Cold email recipients don't click demo link (conversion <5%)
- **Mitigation:** A/B test email subject lines, personalize messaging, target right personas
- **Validation:** Test 50-100 emails first, iterate on messaging before scaling
- **Fallback:** If email doesn't work, try LinkedIn outreach, warm intros, community posts

**Risk:** Demo viewers don't book calls (demo bounce rate >80%)
- **Mitigation:** 5-10 user tests before launch, optimize for "aha!" moment, clear CTA
- **Validation:** Track drop-off points in analytics, iterate on weak spots
- **Fallback:** Use demo as conversation starter even if they don't book (reach out directly)

**Risk:** Booked calls reveal wrong workflow (people don't care about industry research)
- **Mitigation:** This is actually SUCCESS - we learn what they DO care about through conversations
- **Pivot:** Build different workflow demo based on customer discovery findings (proposals, invoices, meeting booking, etc.)
- **Parallel track:** Already doing customer discovery interviews separate from demo

**Resource Risks:**

**Risk:** Arman gets blocked on technical implementation
- **Mitigation:** Use well-documented libraries (Framer Motion, Next.js), leverage Claude Code for implementation assistance, keep scope tight
- **Contingency:** Simplify animations if complex interactions are too difficult
- **Fallback:** Ship simpler static version showing side-by-side comparison without full animation

**Risk:** Demo ships but generates zero interest
- **Mitigation:** Parallel customer discovery track (not relying solely on demo)
- **Contingency Plan:**
  1. Test different target audiences (sales → ops managers → founders → legacy business execs)
  2. Double down on legacy industry customer discovery (manufacturing, distribution, professional services)
  3. Build different workflow demo based on validated pain from interviews
  4. Use demo failure as data point to inform next iteration

**Risk:** Validated workflow is wrong for long-term vision
- **Mitigation:** Demo is explicitly a learning tool, not product commitment (documented in Strategic Context)
- **Acceptance:** We're optimizing for learning, not being right on first try
- **Benefit:** Any customer conversation advances our understanding of the market

### Success Criteria for Scope Decisions

**MVP is successful if:**
- Ships within 7-10 days
- Generates 2+ qualified customer calls in Week 1
- Demonstrates Agent School's "learn once, run repeatedly" thesis clearly
- Teaches us something about target persona and workflow value
- Builds trust with prospects (they see "something real")
- Solves Arman's immediate pain (research methodology for 10+ industries)

**MVP has failed if:**
- Takes >14 days to ship (opportunity cost too high)
- Zero cold email responses after 100+ emails (messaging problem)
- Demo viewers don't understand the "learning vs. execution" differentiation
- Calls reveal complete misalignment with market needs (wrong workflow entirely)

**Next Steps Based on MVP Results:**
- **Strong conversion (>10% email response):** Add contact extraction, real execution, CRM integrations
- **Weak conversion (<5% email response):** Test different audiences (founders vs. sales ops vs. legacy managers), iterate messaging
- **Wrong workflow identified:** Build new demo for validated workflow (proposals, invoices, etc.), leverage learnings
- **Learning advantage doesn't resonate:** Test messaging around speed or cost savings instead
- **No clear signal:** More customer discovery before building additional demos

