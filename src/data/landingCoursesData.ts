export interface LandingCourse {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  duration: string;
  mode: string;
  salaryRange: string;
  targetRoles: string[];
  keyModules: string[];
  technologies: string[];
  popular?: boolean;
}

export const LANDING_COURSES: LandingCourse[] = [
  {
    id: "ai-java-fullstack",
    name: "AI Java Full Stack Development",
    badge: "Most Demanded",
    shortDescription: "Master enterprise application development with modern Core Java, Spring Boot microservices, React, and AI-accelerated workflows.",
    duration: "6 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹3.8 - ₹7.5 LPA",
    popular: true,
    targetRoles: [
      "Java Full Stack Developer",
      "Spring Boot Engineer",
      "Backend Developer",
      "Software Associate",
    ],
    keyModules: [
      "Core & Advanced Java (Java 17/21)",
      "Spring Boot 3 & RESTful Microservices",
      "Spring Data JPA & Hibernate with MySQL",
      "Modern React.js, Tailwind & State Management",
      "Docker, Git & CI/CD Deployment",
      "Building 4 Real-World Enterprise Capstones",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "React", "MySQL", "Docker", "Git"],
  },
  {
    id: "ai-python-fullstack",
    name: "AI Python Full Stack Development",
    badge: "Trending in 2026",
    shortDescription: "Build modern, fast, AI-integrated web applications using Python, Django, FastAPI, modern frontend, and OpenAI/Gemini APIs.",
    duration: "6 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹3.6 - ₹7.0 LPA",
    popular: true,
    targetRoles: [
      "Python Full Stack Developer",
      "FastAPI / Django Backend Engineer",
      "Full Stack Engineer",
      "AI Web App Developer",
    ],
    keyModules: [
      "Python 3 OOP & Data Structures",
      "Django Framework & Django REST Framework",
      "FastAPI & Asynchronous Web Services",
      "PostgreSQL Database Design & ORM",
      "Modern Frontend with React & Tailwind",
      "Integrating Generative AI & LangChain into Web Apps",
    ],
    technologies: ["Python", "Django", "FastAPI", "React", "PostgreSQL", "LangChain", "REST APIs"],
  },
  {
    id: "ai-mern-fullstack",
    name: "AI Full Stack Web Development",
    badge: "High Growth",
    shortDescription: "Create interactive, scalable SaaS products and web platforms using the complete JavaScript/TypeScript ecosystem with Next.js and AI APIs.",
    duration: "6 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹3.8 - ₹7.2 LPA",
    targetRoles: [
      "Full Stack Web Developer",
      "Frontend Developer (React/Next.js)",
      "Node.js Backend Engineer",
      "MERN Stack Specialist",
    ],
    keyModules: [
      "Modern JavaScript (ES6+) & TypeScript",
      "React 19 & Next.js App Router Architecture",
      "Node.js & Express.js REST / GraphQL APIs",
      "MongoDB & Mongoose Database Modeling",
      "Authentication (JWT/OAuth) & Payment Gateways",
      "Deploying Full-Stack Apps on Cloud & Vercel",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Business Intelligence",
    badge: "All Degrees Eligible",
    shortDescription: "Turn raw business data into actionable executive insights, dashboards, and automated reports using Excel, SQL, Python, and Power BI.",
    duration: "5 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹3.2 - ₹6.2 LPA",
    targetRoles: [
      "Data Analyst",
      "Business Intelligence (BI) Analyst",
      "SQL Data Associate",
      "Reporting & Visualization Specialist",
    ],
    keyModules: [
      "Advanced Microsoft Excel & Financial Modeling",
      "Complex SQL (Joins, CTEs, Window Functions)",
      "Python for Data Wrangling (Pandas, NumPy)",
      "Interactive Power BI & Tableau Dashboards",
      "Business Metrics (KPIs, Cohort & Churn Analysis)",
      "Live Industry Capstone with Corporate Datasets",
    ],
    technologies: ["Power BI", "SQL", "Excel", "Python", "Tableau", "Pandas", "ETL"],
  },
  {
    id: "data-science-ai",
    name: "Data Science & Artificial Intelligence",
    badge: "Highest CTC Potential",
    shortDescription: "Master predictive machine learning, deep neural networks, natural language processing, and modern Generative AI workflows.",
    duration: "7 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹4.5 - ₹8.5 LPA",
    popular: true,
    targetRoles: [
      "Junior Data Scientist",
      "Machine Learning Engineer",
      "AI Solutions Associate",
      "Data Engineer",
    ],
    keyModules: [
      "Python Data Science Stack (NumPy, Scipy, Seaborn)",
      "Applied Statistics & Probability for ML",
      "Supervised & Unsupervised Machine Learning",
      "Deep Learning with TensorFlow & PyTorch",
      "Natural Language Processing & LLM Prompting",
      "Deploying ML Models via Flask & FastAPI Endpoints",
    ],
    technologies: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Scikit-Learn", "GenAI", "NLP"],
  },
  {
    id: "cyber-security",
    name: "Cyber Security & Ethical Hacking",
    badge: "Global Career Track",
    shortDescription: "Learn to defend enterprise networks, identify critical vulnerabilities, conduct penetration tests, and secure cloud infrastructures.",
    duration: "6 Months",
    mode: "Classroom / Lab (Sivakasi, Sattur, Srivilliputtur)",
    salaryRange: "₹3.8 - ₹7.5 LPA",
    targetRoles: [
      "SOC Analyst (L1)",
      "Junior Penetration Tester",
      "Cyber Security Associate",
      "Network Security Engineer",
    ],
    keyModules: [
      "Computer Networking & Protocol Analysis (Wireshark)",
      "Linux System Administration & Command Line Mastery",
      "Ethical Hacking & Kali Linux Toolsets",
      "Web Application Security & OWASP Top 10 Exploits",
      "Vulnerability Assessment & Metasploit Framework",
      "SOC Operations, Incident Response & SIEM Fundamentals",
    ],
    technologies: ["Kali Linux", "Wireshark", "OWASP", "Metasploit", "Nmap", "Burp Suite", "SIEM"],
  },
];

