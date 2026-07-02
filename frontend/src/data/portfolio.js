// All personal/resume content for Bhavya N Jain's portfolio
export const PROFILE = {
  name: "BHAVYA N JAIN",
  tagline: "Software Development | Java | Full Stack | Backend",
  location: "India",
  phone: "+91 6350229976",
  email: "bhavyajain3004@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhavya-jain-2424b0250/",
  github: "https://github.com/bhavyanjain3004",
  about: [
    "B.Tech in Computer Science Engg at Vellore Institute of Technology (Graduating May 2026).",
    "I build performance-critical backend systems, design distributed services, and obsess over latency, throughput, and trade-offs.",
    "Competitive Programming: maintained a 145+ day consecutive coding streak and solved 200+ problems across LeetCode and GeeksforGeeks.",
  ],
};

export const EDUCATION = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science Engg",
    spec: "",
    period: "Graduating May 2026",
    gpa: "GPA: 8.70 / 10",
  },
];

export const EXPERIENCE = [
  {
    role: "CTDP Trainee — Salesforce Development",
    company: "PwC India",
    period: "Jul '25 – Aug '25",
    bullets: [
      "Mastered CRM configuration across Object Management, App Builder, Security, and Sales & Service Applications.",
      "Built end-to-end workflow automation skills using Flows, Approval Processes, Data & Analytics, and Salesforce AI.",
      "Built CRM platform foundation, directly complementing hands-on backend systems engineering in scalable, distributed apps.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "2026 – Present",
    bullets: [
      "Ranked Top 1% among 43,000+ contributors, collaborating with maintainers across 18+ open-source repositories to resolve production-grade issues including XSS vulnerability patches, CI/CD pipeline failures, and DB transaction consistency bugs.",
      "Consistently shipped security-hardening PRs and automated test suites across varied stacks including React, Node.js, and Python projects, demonstrating collaborative engineering rigour and reliable cross-team delivery at open-source scale.",
    ],
  },
];

export const SKILLS = {
  "Languages & Frameworks": ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "React", "Spring Boot", "Node.js", "Express"],
  "Tools & Cloud": ["AWS", "Docker", "GitHub Actions", "Redis", "PostgreSQL", "MongoDB", "Salesforce", "JWT", "Git", "Agile Methodology"],
  "Concepts": ["Scalable Distributed Systems", "Test Automation Frameworks", "OOP", "Data Structures & Algorithms", "WebSockets", "REST APIs", "CI/CD", "Auth"],
};

export const PROJECTS = [
  {
    title: "ByteCache",
    subtitle: "Redis-like In-Memory Cache Engine",
    stack: ["Core Java 17", "OOP", "Concurrency", "JUnit 5", "JMH", "Docker", "AWS EC2", "GitHub Actions"],
    bullets: [
      "Achieved 2.18M ops/sec (LRU) and 1.07M ops/sec (LFU) under a 1M-op quad-threaded load, benchmarked end-to-end via JMH.",
      "Eliminated lock contention via ReentrantReadWriteLock, enabling fully parallel reads with serialized writes across 90/10 r/w.",
      "Engineered a custom TCP server with Redis-compatible commands (SET/GET/EXPIRE), dual-strategy TTL expiry, and pub/sub.",
      "Deployed live on AWS EC2 inside Docker, publicly accessible via Telnet/NC for real-world stress testing against a production.",
      "Built an automated test framework using JUnit 5 and JMH, instrumenting throughput/latency metrics to validate performance under concurrent load.",
    ],
    link: "#",
  },
  {
    title: "Pathfinder Duel",
    subtitle: "Real-Time 2-Player Strategy Game",
    stack: ["Java 21", "Spring Boot 3", "WebSockets", "Redis", "PostgreSQL", "React 18", "TypeScript"],
    bullets: [
      "Built a real-time 2-player strategy game on a shrinking 11×11 grid with sub-50ms move latency via STOMP WebSockets.",
      "Implemented a BFS wall-validation engine that rejects any wall isolating a player in O(n) time, guaranteeing 100% game-state.",
      "Designed dual-storage architecture: Redis for hot game state + PostgreSQL for persistent match history, decoupling low-latency.",
      "Engineered an automated test framework (JUnit 5 + GitHub Actions CI) gating every push with backend test coverage, TypeScript checks, and build validation.",
    ],
    link: "#",
  },
  {
    title: "DriveEasy",
    subtitle: "Full-Stack Car Rental Platform",
    stack: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt", "ImageKit CDN", "Vercel"],
    bullets: [
      "Shipped a production full-stack marketplace with dual owner/customer roles, real-time availability, and a responsive dashboard.",
      "Prevented double-bookings via server-side date-conflict validation at the DB layer, protecting booking integrity.",
      "Integrated ImageKit CDN to improve render performance across all vehicle listing pages without backend code changes.",
      "Secured all routes with JWT + bcrypt and Role-based Access Control, achieving zero plaintext credential exposure and auth for admin CRUD operations.",
    ],
    link: "#",
  },
];

export const CERTIFICATIONS = [
  { name: "AWS Academy Graduate Cloud Architecting & Cloud Foundations: high-availability system design, IAM policy management, scalable multi-tier deployments, and cloud security fundamentals.", date: "AWS" },
  { name: "IBM – GEN AI Using Watsonx: prompt engineering and hands-on AI solution building on the Watsonx platform.", date: "IBM" },
];

export const ADDITIONAL = [
  "Competitive Programming: maintained a 145+ day consecutive coding streak and solved 200+ problems across LeetCode and GeeksforGeeks, consistently reinforcing strong Data Structures, Algorithms, and problem-solving fundamentals.",
  "Actively participated in multiple hackathons, demonstrating collaborative problem-solving and rapid prototyping skills.",
];
