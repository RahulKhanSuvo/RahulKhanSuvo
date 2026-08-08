export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alignment: "left" | "right";
}

export const servicesData: Service[] = [
  {
    id: "full-stack-development",
    title: "FULL STACK DEVELOPMENT",
    description:
      "End-to-end web applications engineered with Next.js, Node.js, and modern databases — seamlessly connecting robust backend logic with slick frontend interfaces.",
    tags: [
      "NEXT.JS & REACT",
      "NODE.JS & EXPRESS",
      "DATABASE ARCHITECTURE",
      "FULL LIFECYCLE DEPLOYMENT",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop",
    alignment: "left",
  },
  {
    id: "frontend-engineering",
    title: "FRONTEND ENGINEERING",
    description:
      "Pixel-perfect, lightning-fast interfaces built with TypeScript, TailwindCSS, and Framer Motion for high-impact visual aesthetics and fluid interactions.",
    tags: [
      "TYPESCRIPT",
      "TAILWINDCSS",
      "MOTION & INTERACTIONS",
      "PERFORMANCE & ACCESSIBILITY",
    ],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
    alignment: "right",
  },
  {
    id: "saas-platform-development",
    title: "SAAS PLATFORM DEVELOPMENT",
    description:
      "Scalable multi-tenant SaaS products complete with user authentication, subscription billing, role-based access control, and intuitive dashboards.",
    tags: [
      "MULTI-TENANT ARCHITECTURE",
      "AUTH & SECURITY",
      "BILLING & PAYMENTS",
      "DASHBOARDS & ANALYTICS",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
    alignment: "left",
  },
  {
    id: "api-system-architecture",
    title: "API & SYSTEM ARCHITECTURE",
    description:
      "Resilient REST & GraphQL APIs, microservices, database schemas, and cloud deployment pipelines optimized for reliability, speed, and scale.",
    tags: [
      "REST & GRAPHQL APIS",
      "SYSTEM DESIGN",
      "DATABASE SCHEMAS",
      "CI/CD & CLOUD DEPLOYMENT",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    alignment: "right",
  },
];
