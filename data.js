/* Content extracted from Rathijit Adhikary's portfolio PDF.
   Exposed on window for the Babel-transpiled component scripts. */
window.PORTFOLIO_DATA = {
  person: {
    name: "Rathijit Adhikary",
    role: "Associate Manager — UX / UI Designer",
    tagline: "I build design teams, systems, and cultures that ship products people trust.",
    epithet: "A Design Unicorn",
    years: "10+",
    email: "rathiadhikary@gmail.com",
    phone: "+91 9738893655",
  },

  intro: {
    lead: "Over 10+ years, I've led cross-functional design teams delivering enterprise products across financial services, healthcare, e-commerce, and technology — balancing hands-on design leadership with people management and strategic UX.",
    body: "At Wongdoody Infosys, I manage multiple concurrent engagements end-to-end, coach designers to grow in craft and ownership, and have built design processes that reduced delivery friction, contributed to RFP wins, and established accessibility and design system standards adopted across global client organizations.",
  },

  brings: [
    { k: "Team leadership", v: "Mentored teams of 6+ designers across distributed environments — creating clarity, removing blockers, and growing people." },
    { k: "End-to-end ownership", v: "Led engagements from discovery to handoff — research, journey mapping, prototyping, usability testing, and dev support." },
    { k: "Design systems", v: "Architected Finacle's banking design system unifying multiple product tracks — with full documentation, accessibility compliance, and engineering integration." },
    { k: "Stakeholder alignment", v: "Translate ambiguous problems into design direction with PMs, engineers, and executives — and back decisions with data." },
    { k: "AI-informed practice", v: "Integrating AI tools (Topaz Fabric, Cursor, Claude AI) into design workflows and teaching teams to use them effectively." },
    { k: "Full-stack sensibility", v: "Production-ready HTML/CSS experience that bridges design intent and engineering reality." },
  ],

  experience: [
    {
      title: "Associate Manager — Experience Design",
      org: "Wongdoody Infosys",
      period: "2019 — Present",
      body: "Led cross-functional design teams across multiple enterprise engagements simultaneously — managing end-to-end delivery, mentoring designers, contributing to RFP wins, and establishing design system and accessibility standards adopted across global client organizations.",
    },
    {
      title: "Senior Creative Developer",
      org: "Mad About Digital",
      period: "2016 — 2019",
      body: "Collaborated with clients to understand requirements and brainstormed with the design team to develop inspiring solutions. Finalised design concepts and implemented them through development to deliver a top-notch, accessible web experience.",
    },
  ],

  projects: [
    {
      id: "omniverse",
      num: "01",
      title: "Marketing Transformation through Customer-Centric Data Strategy",
      short: "Omniverse Dashboard",
      client: "Haleon",
      meta: "Enterprise Analytics · Solo Design Partner",
      year: "2024",
      cover: "Omniverse Dashboard — Executive Summary view",
      about: "Haleon needed a smarter way to understand how their marketing was performing across channels. We designed the Omniverse Dashboard — a unified, insight-led analytics experience that turned fragmented data into clear, actionable decisions for marketing and leadership teams.",
      tags: ["UX AI Design", "Accessibility", "Figma", "Vibe Coding", "PowerBI", "Aster · Topaz Fabric"],
      goals: {
        line: "Marketing teams were working with fragmented dashboards that couldn't answer one critical question: Is our channel strategy actually working?",
        points: [
          "No unified view of HCP engagement across channels",
          "KPIs existed in silos — no journey-level context",
          "Stakeholders couldn't connect marketing activity to business outcomes",
        ],
      },
      solution: "A curated Power BI–based Omniverse Dashboard that gives stakeholders a clear, at-a-glance view of market performance and channel effectiveness — a unified understanding of how marketing channels engage HCPs, supported by customer data, trends, and KPI-driven insights. By surfacing performance gaps, whitespace opportunities, and market headroom, it shifts teams from reactive analysis to data-led strategy.",
      role: {
        line: "Solo Design Partner embedded within a cross-functional analytics and technology team.",
        points: [
          "Owned end-to-end UX — from discovery to final handoff",
          "Conducted user interviews, stakeholder workshops, and journey mapping",
          "Collaborated with Power BI developers on feasibility and constraints",
          "Synthesised insights into design principles, KPI frameworks, and dashboard structures",
        ],
      },
      research: [
        { k: "Problem", v: "Stakeholders lacked a unified, actionable view of market performance, HCP engagement, and cross-channel effectiveness — making it hard to identify gaps and decide." },
        { k: "Insight", v: "Interviews and workshops uncovered the need for journey-based views, clearer success metrics, and alignment between brand, channel, and behavioural data." },
        { k: "Direction", v: "A hypothesis-driven dashboard focused on meaningful KPIs, journey-level tracking, and clear measures of success — the foundation for an insight-led experience." },
      ],
      persona: {
        name: "Omnichannel Activation Lead",
        bio: "Responsible for designing and executing data-driven campaigns that optimise user journeys across channels. Focused on audience segmentation and channel effectiveness, planning and tracking campaign performance against KPIs.",
        goals: ["Optimised campaign planning across audience segments", "Informed, data-led channel investment", "Actionable insights blending internal + external data", "Connect omnichannel activity to business outcomes"],
        frustrations: ["Fragmented data gathered manually across tools", "Missing digital & social channel data", "No campaign-level analysis", "Hard to link activity to business impact"],
      },
      strategy: {
        line: "A structured end-to-end funnel view — each stage mapped with objectives, metrics, and decision levers — letting teams pinpoint leakage, identify whitespace, and act with confidence.",
        funnel: ["Awareness", "Consideration", "Intent", "Conversion", "Retention"],
        views: [
          { k: "Executive Summary", v: "Overall market health and HCP engagement." },
          { k: "Channel Performance", v: "Direct vs. digital channel effectiveness." },
          { k: "Suggestion Dashboard", v: "AI-driven recommendations shifting teams from reactive to proactive." },
        ],
      },
      vibeCoding: "Used AI-assisted vibe coding in Infosys Topaz Fabric Studio to rapidly prototype dashboard interactions — enabling faster stakeholder feedback loops, cutting iteration time, and validating complex data views before Power BI development began.",
      metrics: [
        { k: "Stakeholder adoption", v: "Accepted across MEA leadership and activation teams" },
        { k: "Decision speed", v: "Reduced time-to-insight for campaign reviews" },
        { k: "Sources consolidated", v: "3+ fragmented reports replaced by 1 unified view" },
        { k: "UAT pass rate", v: "KPI accuracy validated through structured A/B testing" },
        { k: "Accessibility", v: "WCAG 2.1 AA met across all dashboard views" },
        { k: "Handoff", v: "Zero rework post-handoff via early feasibility collaboration" },
      ],
      gallery: ["Funnel strategy — Awareness to Retention", "Channel performance comparison", "AI suggestion dashboard"],
    },

    {
      id: "support",
      num: "02",
      title: "Customer Support Application",
      short: "Customer Support App",
      client: "Insurance Service Provider",
      meta: "Web Application · Senior Lead Design Partner",
      year: "2022",
      cover: "Agent console — unified call, chat & video support",
      about: "A service-provider web application where customers can call, chat, and video-call customer care for help on their policies, claims, and other products. We rebuilt the agent experience from a complex, unintuitive console into a streamlined, task-first journey.",
      tags: ["Full-stack Design", "Accessibility", "Figma", "HTML/CSS", "Usability Testing", "Miro"],
      goals: {
        line: "The call-centre application was complex and unintuitive, requiring significant time for agents to navigate.",
        points: [
          "Unclear flow of tasks made claims management difficult",
          "Upselling policies efficiently was nearly impossible",
          "High navigation overhead slowed every interaction",
        ],
      },
      solution: "We addressed the pain points of the existing application by creating a streamlined flow for the agent journey. We not only designed the new interface but also developed the clickable HTML design and shared a working prototype with the client.",
      role: {
        line: "Senior Lead Design Partner overseeing a team of 4 designers.",
        points: [
          "Built strategies, gathered requirements, and analysed research outcomes",
          "Created mid- to high-fidelity wireframes and conducted usability testing",
          "Mentored the team to align on the brief and collaborate effectively",
          "Delivered production-ready design and code",
        ],
      },
      research: [
        { k: "Scenarios", v: "Collected multiple real scenarios of a caller agent and prioritised their tasks accordingly." },
        { k: "Ideate", v: "Used digital whiteboarding to facilitate team onboarding, encourage discussion, and understand thought processes." },
        { k: "Collaborate", v: "Regular communication to address blockers; retrospective calls to improve future planning." },
      ],
      persona: {
        name: "Support Agent",
        bio: "Handles inbound calls, chats, and video sessions across policies and claims — needs to locate customers fast and resolve or upsell within a single, focused flow.",
        goals: ["Locate an existing customer quickly", "Manage claims without context-switching", "Surface relevant upsell at the right moment", "Resolve enquiries with fewer clicks"],
        frustrations: ["Complex, unintuitive navigation", "Unclear task flow", "Slow customer search", "Hard to act on enquiry patterns"],
      },
      strategy: {
        line: "We mentored full-stack designers to write clean, reusable code — pairing design intent with indication-driven, production-ready front-end.",
        funnel: ["Identify", "Search", "Enquiry", "Resolve", "Upsell"],
        views: [
          { k: "Customer Journey", v: "Mapping how an agent locates and verifies an existing customer." },
          { k: "Enquiry Pattern", v: "Structured enquiry use-cases and prioritised tasks." },
          { k: "Search Result", v: "Streamlined search to determine customer status fast." },
        ],
      },
      vibeCoding: "Bridged design and engineering by delivering a clickable HTML prototype — design with indication on one side, clean reusable code on the other — so the client could feel the flow before build.",
      metrics: [
        { k: "Agent efficiency", v: "Streamlined task flow reduced navigation overhead" },
        { k: "Prototype", v: "Working clickable HTML shared directly with the client" },
        { k: "Team", v: "4 designers mentored to a shared, accessible standard" },
        { k: "Quality", v: "Production-ready design and code delivered" },
      ],
      gallery: ["Enquiry use-case research", "Customer journey map", "Search result interface"],
    },

    {
      id: "banking",
      num: "03",
      title: "Banking Design System",
      short: "Banking Design System",
      client: "Finacle",
      meta: "Design System · Design Partner",
      year: "2021",
      cover: "Unified banking design system — component library",
      about: "A cutting-edge, cloud-based online banking solution that helps banks improve onboarding, sales, service, and engagement. Its comprehensive functionality and tailored UI cater to the needs of retail, SME, and corporate customers — unified under one cohesive design language.",
      tags: ["Design System", "Accessibility", "Adobe XD", "Atomic Design", "Documentation", "Teams"],
      goals: {
        line: "The bank's multiple product tracks each had a different design language, resulting in a poor, inconsistent user experience.",
        points: [
          "How can all tracks be unified under one language?",
          "How do we improve usability across products?",
          "How do we bake in recommended accessibility features?",
        ],
      },
      solution: "Our team created a design system that unified all of the bank's tracks under a single, cohesive design language. By adding a robust accessibility layer, we ensured a seamless and user-friendly experience for every user — retail, SME, and corporate alike.",
      role: {
        line: "Design Partner driving strategy, workshops, and execution.",
        points: [
          "Built the system strategy and conducted user research & analysis",
          "Delivered production-ready components and code to engineering",
          "Established maintenance strategies with regular updates",
          "Led design reviews and mentored design + development teams",
        ],
      },
      research: [
        { k: "Atoms → Molecules", v: "Executed the system atomically — from base tokens and atoms up to composed molecules and patterns." },
        { k: "Brainstorming", v: "Used digital whiteboarding for onboarding, discussion, and deeper understanding of thought processes." },
        { k: "Usability Testing", v: "Engaged users over Microsoft Teams, testing timing, functionality, and comprehension of the workflow." },
      ],
      persona: {
        name: "Product & Engineering Teams",
        bio: "Distributed product tracks and engineering teams that need a single source of truth — consistent components, clear documentation, and accessible patterns to build on confidently.",
        goals: ["One cohesive language across all tracks", "Production-ready, accessible components", "Clear documentation to build from", "Cross-platform consistency"],
        frustrations: ["Divergent design languages per track", "Inconsistent, hard-to-maintain UI", "No shared accessibility standard", "Friction between design and engineering"],
      },
      strategy: {
        line: "An atomic system — tokens, atoms, molecules — fully documented and integrated with engineering, with a maintenance plan to keep it evolving with user needs.",
        funnel: ["Tokens", "Atoms", "Molecules", "Components", "Patterns"],
        views: [
          { k: "Component Library", v: "Unified, accessible components across retail, SME & corporate." },
          { k: "Documentation", v: "A glance at a component and its full usage documentation." },
          { k: "Governance", v: "Maintenance strategy with regular, structured updates." },
        ],
      },
      vibeCoding: "Provided production-ready assets and code to engineering and framework teams, guaranteeing cross-platform consistency and a clean design-to-dev handoff.",
      metrics: [
        { k: "Unification", v: "Multiple product tracks unified under one language" },
        { k: "Accessibility", v: "Recommended accessibility features built into the system" },
        { k: "Handoff", v: "Production-ready components + code to engineering" },
        { k: "Longevity", v: "Maintenance strategy for ongoing, structured updates" },
      ],
      gallery: ["Atomic design — atoms to molecules", "Component + documentation", "Accessibility patterns"],
    },

    {
      id: "employee",
      num: "04",
      title: "Employee Experience",
      short: "Employee Experience",
      client: "Enterprise HR",
      meta: "Mobile-first Product · Lead Designer",
      year: "2019",
      cover: "Gamified feedback flow — character-led survey",
      about: "The organisation's existing feedback process was lengthy and cumbersome, leading to low participation. We transformed it into an engaging, gamified experience — breaking down long questions, adding character animations tied to answers, and a badge system to celebrate progress.",
      tags: ["Creative Direction", "Interactivity", "Mobile-first", "Motion", "User Journey", "Asana"],
      goals: {
        line: "How might we streamline the feedback process — making it less time-consuming so employees actively provide input?",
        points: [
          "Low participation due to a long, tedious form",
          "Limited insight into real workplace experience",
          "Data-driven decisions needed honest, complete feedback",
        ],
      },
      solution: "We transformed feedback into an engaging experience grounded in user behaviour. We broke down lengthy questions and added character animations linked to answer choices — relatable characters that helped employees connect and respond more meaningfully. A badge system celebrated the completion of small question sets, further incentivising participation.",
      role: {
        line: "Lead Designer — creative direction and mobile-first product design.",
        points: [
          "Pioneered a mobile-first approach (in 2017), scaling seamlessly to desktop",
          "Collaborated with an illustrator and animator on an energetic interface",
          "Designed a categorised, four-type answer system for nuanced insight",
          "Built transparent progress indicators and a badge reward loop",
        ],
      },
      research: [
        { k: "Selection of Answer", v: "Each question offered four distinct answer types — a structured approach to analyse responses and identify sentiment trends." },
        { k: "Motivating Participation", v: "Badges awarded for completing question sets — a gamified loop that motivated employees to progress." },
        { k: "Transparency", v: "Visible progress indicators and accessible badges built trust and encouraged honest feedback." },
      ],
      persona: {
        name: "The Employee",
        bio: "Time-poor and survey-fatigued — needs feedback to feel quick, relatable, and rewarding rather than like a tedious drill-down, on whatever device they have to hand.",
        goals: ["Give feedback quickly", "Feel heard and understood", "See progress as they go", "Be recognised for participating"],
        frustrations: ["16 questions × 4 options felt daunting", "Feedback fatigue", "Tedious drill-down sub-options", "Cramped mobile experience"],
      },
      strategy: {
        line: "Three fundamental factors drove the design: structured answer selection, motivating participation through badges, and transparency that built trust.",
        funnel: ["Question", "Character", "Answer", "Badge", "Progress"],
        views: [
          { k: "Intuitive Visual", v: "Interactive characters tied to answer choices, made with an illustrator + animator." },
          { k: "Badge System", v: "Small wins celebrated to sustain momentum to completion." },
          { k: "Progress", v: "Transparent indicators so employees can see how far they've come." },
        ],
      },
      vibeCoding: "Adapted the experience for mobile with creative time-selection behaviour for phones — ensuring a smooth, intuitive feedback experience across every platform.",
      metrics: [
        { k: "Participation", v: "Engaging, gamified flow lifted feedback participation" },
        { k: "Fatigue", v: "16-question form reframed into fun, bite-sized sets" },
        { k: "Reach", v: "Mobile-first, scaling seamlessly to desktop" },
        { k: "Insight", v: "Four-type answers enabled nuanced sentiment analysis" },
      ],
      gallery: ["Mobile-first feedback flow", "Character + answer interaction", "Badge & progress system"],
    },
  ],

  testimonials: {
    intro: "Shoutouts for my collaboration — a few words from the people I've built, shipped, and grown alongside.",
    items: [
      {
        quote: "Rathi has been very committed toward delivering quality output on time. We've had situations with very short notice, yet even then Rathi could deliver our requirement — which in turn helped us with our demos and deliverables. I'm pleased with his determination to finish the task. This attitude shows that he is ready to take on new challenges and grow with the company.",
        name: "Anuya Sadadekar",
        role: "Senior Principal — Experience Design",
        company: "Finacle",
      },
      {
        quote: "Delivered prompt support for BOFA's Enterprise Payment solution (FDS). Mentored junior designers and devs on UI/accessibility while ensuring on-time FDS releases. I appreciate his ability to understand the problem statement and provide suggestions accordingly — over the last few months it helped the development team a lot, fixing major issues raised by internal/external teams. He understands client expectations and the urgency of each request.",
        name: "Anupam K Mathur",
        role: "Sr. Principal — Experience Design",
        company: "Finacle",
      },
      {
        quote: "Rathijit and his team have consistently demonstrated exceptional reliability and dedication. Their hard work and attention to detail have been instrumental in ensuring projects are completed on time and to a high standard — always willing to go above and beyond. Colleagues highly regard them for their professionalism, positive attitude, and collaborative approach; they consistently demonstrate excellent teamwork and are always willing to support others and share their expertise.",
        name: "Persephone Thorn Hauswirth",
        role: "Director of CX",
        company: "WongDoody",
      },
    ],
  },
};
