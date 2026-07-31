import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleGauge,
  ClipboardCheck,
  Cog,
  Handshake,
  Lightbulb,
  MessagesSquare,
  Route,
  Workflow,
} from "lucide-react";

export const company = {
  name: "Satya Syamala LLC",
  tagline: "AI · Business Strategy · Technology Consulting",
  description:
    "Satya Syamala LLC helps businesses improve operations, adopt practical AI solutions, automate workflows, strengthen decision-making, and execute strategic initiatives.",
  email: "satyasyamalainc@gmail.com",
  phone: "619-995-4789",
  phoneHref: "+16199954789",
  address: {
    street: "7850 Stalmer St D22",
    city: "San Diego",
    region: "CA",
    postalCode: "92111",
    country: "US",
    formatted: "7850 Stalmer St D22, San Diego, CA 92111",
  },
  founder: { name: "Srikanth Kuppa", title: "Founder & Managing Director" },
  website: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  socialLinks: [] as { label: string; href: string }[],
};

export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

export const values = [
  { title: "Practical Solutions", description: "Recommendations grounded in real business needs, constraints, and clear next steps.", icon: Lightbulb },
  { title: "Measurable Improvement", description: "Work structured around useful outcomes, visibility, and continuous refinement.", icon: ChartNoAxesCombined },
  { title: "Collaborative Execution", description: "Close partnership from early analysis through implementation and adoption.", icon: Handshake },
];

export const services = [
  { title: "AI Strategy & Adoption", description: "Evaluate AI opportunities, define practical use cases, prioritize initiatives, and create an implementation roadmap aligned with business goals.", icon: Bot },
  { title: "Workflow Automation", description: "Identify repetitive work, streamline processes, and design automation solutions that reduce manual effort and improve consistency.", icon: Workflow },
  { title: "Business Process Improvement", description: "Analyze current operations, identify inefficiencies, define better workflows, and support implementation of improved processes.", icon: Cog },
  { title: "Data Analytics & Reporting", description: "Build clear reporting structures, KPI frameworks, dashboards, and decision-support tools that improve visibility and accountability.", icon: BarChart3 },
  { title: "Program & Project Support", description: "Support planning, coordination, documentation, stakeholder communication, execution tracking, and delivery governance.", icon: ClipboardCheck },
  { title: "Business Strategy & Growth Support", description: "Assist with market research, service design, operating models, business planning, client acquisition processes, and growth initiatives.", icon: BriefcaseBusiness },
];

export const approach = [
  { title: "Understand", description: "We learn the business goals, current challenges, processes, and operating environment.", icon: MessagesSquare },
  { title: "Assess", description: "We evaluate opportunities, risks, inefficiencies, data, and technology needs.", icon: CircleGauge },
  { title: "Design", description: "We create a practical roadmap, operating solution, or implementation plan.", icon: Route },
  { title: "Execute", description: "We support rollout, tracking, documentation, adoption, and continuous improvement.", icon: ClipboardCheck },
];

export const reasons = ["Business-first approach", "Practical AI implementation", "Clear communication", "Hands-on execution support"];
