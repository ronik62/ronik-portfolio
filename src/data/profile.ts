export const profile = {
  name: "Ronik Kumbhar",
  title: "Java Backend Developer",
  location: "Pune, India",
  phone: "+91 7058127952",
  availability: "Open to Java Backend & Software Engineer roles",
  email: "ronikkumbhar009@gmail.com",
  github: "https://github.com/ronik62",
  linkedin: "https://www.linkedin.com/in/ronik-kumbhar-95236218a",
  portfolio: "https://ronik62.github.io/ronik-portfolio",
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const professionalSummary = [
  "Java Backend Developer with 1.8 years of experience at Tata Consultancy Services developing and supporting backend applications.",
  "Skilled in Java, Spring Boot, Spring Data JPA, Hibernate, Spring Security, JWT, REST APIs, PostgreSQL and Oracle—covering API design, database access, unit testing with JUnit and Mockito, and production debugging on a large-scale Oracle Retail RMS system. Strong foundation in Core Java, OOP, Collections, Multithreading and SQL.",
];

export const highlights = [
  { label: "Experience", value: "1.8 years", detail: "TCS · backend development & RMS support" },
  { label: "Focus", value: "Backend", detail: "Spring Boot · REST · JWT · JPA" },
  { label: "Stack", value: "Data & AI", detail: "PostgreSQL · Oracle · Spring AI" },
];

export const skillGroups = [
  {
    name: "Languages",
    skills: ["Java", "SQL", "PL/SQL", "JavaScript"],
  },
  {
    name: "Frameworks",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "JWT",
      "Spring AI",
    ],
  },
  {
    name: "APIs",
    skills: ["REST APIs", "Swagger/OpenAPI", "Bean Validation", "DTOs", "Exception handling"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Oracle", "MySQL", "Redis", "JPA Specifications"],
  },
  {
    name: "Testing",
    skills: ["JUnit 5", "Mockito", "Postman"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "GitHub Actions", "Maven", "Docker", "VS Code"],
  },
  {
    name: "Fundamentals",
    skills: [
      "OOP",
      "Collections",
      "Multithreading",
      "Design patterns",
      "Microservices",
      "DSA",
    ],
  },
];

export const projects = [
  {
    id: "tickets",
    title: "Ticket Management System",
    badge: "Spring Security · JWT",
    summary:
      "RESTful ticket lifecycle APIs with security, filtering, and priority-based email alerts.",
    bullets: [
      "Built REST APIs for creation, updates, status tracking, pagination, dynamic sorting and multi-field filtering with JPA Specifications.",
      "Secured APIs with Spring Security and JWT: registration, BCrypt hashing, login, token validation and protected endpoints.",
      "Implemented P1/P2-only email notifications via Spring Mail; DTOs, validation, global exception handling and OpenAPI docs.",
      "Covered service and auth logic with JUnit 5 and Mockito.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "PostgreSQL",
      "Swagger",
      "JUnit 5",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ronik62/ticket-management-system",
        external: true,
      },
    ],
  },
  {
    id: "ai-learning",
    title: "AI-Powered Learning and Assessment Platform",
    badge: "Spring AI · Ollama",
    summary:
      "Backend that generates assessments and personalized study guidance using a local LLM.",
    bullets: [
      "Generates topic-specific questions and assessments via Spring AI and Ollama.",
      "Produces explanations and personalized feedback from each user's answers.",
      "REST APIs with Spring Boot and PostgreSQL for users, topics, questions, assessments and results.",
      "Performance analysis identifies weak topics and recommends what to study next.",
    ],
    tags: ["Java", "Spring Boot", "Spring AI", "Ollama", "PostgreSQL", "REST APIs"],
    links: [{ label: "GitHub", href: "https://github.com/ronik62", external: true }],
  },
];

export const experience = {
  role: "Assistant System Engineer",
  company: "Tata Consultancy Services",
  location: "Pune",
  period: "Feb 2025 — Present",
  bullets: [
    "Developed RESTful APIs in Java and Spring Boot using a layered controller-service-repository architecture with input validation and centralized business logic.",
    "Implemented data access with Spring Data JPA and Hibernate on PostgreSQL and Oracle; wrote and tuned SQL and PL/SQL queries for correctness and performance.",
    "Wrote unit tests with JUnit 5 and Mockito and implemented global exception handling to catch edge cases and reduce defects before deployment.",
    "Debugged backend and integration failures in a large-scale Oracle Retail RMS system by tracing application logs and writing targeted SQL/PL-SQL queries to find root causes.",
    "Resolved production transaction and integration issues within SLA, working with backend and database teams.",
    "Used Git for version control, Maven for builds, and Postman for API testing across the development cycle.",
  ],
};

export const education = {
  degree: "B.E. Computer Engineering",
  school: "Smt. Kashibai Navale College of Engineering, Pune",
  period: "2020 — 2024",
  detail: "CGPA: 8.31",
};

export const recruiterGlance = [
  "Spring Boot REST APIs · JPA · PostgreSQL & Oracle · JWT & Spring Security",
  "JUnit 5 / Mockito · OpenAPI · production RMS debugging & SLA incident work",
  "Spring AI + Ollama · Docker · GitHub Actions CI/CD",
  "B.E. Computer Engineering (CGPA 8.31), 2024",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const terminalLines = [
  { prompt: "whoami", output: "Ronik Kumbhar" },
  { prompt: "role", output: "Java Backend Developer @ TCS" },
  { prompt: "stack --primary", output: "Java · Spring Boot · PostgreSQL · Oracle" },
  { prompt: "contact", output: "ronikkumbhar009@gmail.com" },
  { prompt: "open_to", output: "Java Backend / Software Engineer roles" },
];
