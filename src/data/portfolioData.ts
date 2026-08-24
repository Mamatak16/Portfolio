import { Project, ExperienceItem, SkillCategory, AchievementItem, InterestNode } from '../types';

export const PERSONAL_INFO = {
  name: "Mamata Balesh Kamagoudar",
  shortName: "MAMATA",
  initials: "MK",
  role: "Computer Science Engineering Student | AI/ML Enthusiast | Full-Stack Developer",
  badgeText: "COMPUTER SCIENCE ENGINEERING • AI/ML • FULL STACK",
  heroHeading: "Building intelligent systems,",
  heroHeadingGradient: "one project at a time.",
  bio: "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Agentic AI, Quantum Machine Learning, and full-stack development.",
  aboutText: "I'm a Computer Science Engineering student at RV Institute of Technology and Management, Bengaluru, with a strong interest in building practical software and intelligent systems. My interests span AI/ML, Agentic AI, Generative AI, Graph Neural Networks, Quantum Machine Learning, and full-stack web development.",
  education: {
    institution: "RV Institute of Technology and Management, Bengaluru",
    degree: "B.E. Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "8.55 / 10"
  },
  location: "Bengaluru, Karnataka, India",
  email: "kamagoudarmamata@gmail.com",
  phone: "+91 8197581999",
  github: "https://github.com/Mamatak16",
  linkedin: "https://www.linkedin.com/in/mamata-kamagoudar",
  status: "Open to opportunities"
};

export const STATS = [
  { label: "CGPA", value: "8.55", sub: "/ 10" },
  { label: "Internships", value: "3+", sub: "Industry Roles" },
  { label: "Major Projects", value: "6+", sub: "Full Stack & AI" },
  { label: "Graduation Year", value: "2027", sub: "RVITM Bengaluru" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "capabl",
    company: "Capabl",
    role: "AI/ML Intern (Agentic AI)",
    period: "Sep 2025 – Jan 2026",
    location: "Remote",
    description: [
      "Developed an intelligent schedule management assistant leveraging LangChain and LLMs, integrating autonomous agents, tool calling, and conversational memory."
    ],
    technologies: ["Python", "LangChain", "LLMs", "Agentic AI"]
  },
  {
    id: "eisystems",
    company: "EISystems Services",
    role: "Machine Learning Intern",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    description: [
      "Engineered an end-to-end real estate price prediction system, performing exploratory data analysis, data preprocessing, and feature engineering.",
      "Built and evaluated predictive models using Pandas, NumPy, and Scikit-learn, comparing Linear Regression, Random Forest, and XGBoost performance."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"]
  },
  {
    id: "elevanceskills",
    company: "ElevanceSkills",
    role: "Data Science Intern (Generative AI)",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Built a real-time text-to-image generator using Python, PyTorch, and generative AI libraries, converting textual prompts into high-quality images.",
      "Designed end-to-end inference pipelines and applied prompt engineering to improve model latency and visual output quality."
    ],
    technologies: ["Python", "PyTorch", "Generative AI", "Prompt Engineering"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bookbridge",
    title: "BOOKBRIDGE",
    subtitle: "MERN-Based Community Book Marketplace",
    description: "A full-stack community platform that enables users to buy, sell, exchange, and donate books seamlessly.",
    features: [
      "Book listings management with rich media",
      "Category-based intuitive search & multi-filters",
      "Authenticated user profiles & activity logs",
      "Real-time book request & exchange workflow",
      "Real-time communication & notifications",
      "Cloudinary cloud storage & REST API architecture"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "REST APIs"],
    github: "https://github.com/Mamatak16/BookBridge",
    featured: true,
    category: "fullstack",
    metrics: "MERN Stack Platform"
  },
  {
    id: "rank2college",
    title: "RANK2COLLEGE",
    subtitle: "KCET Rank Predictor & College Recommendation System",
    description: "Machine learning application that analyzes historical KCET cutoff data to generate personalized college recommendations.",
    features: [
      "Predictive ranking algorithm based on historical cutoffs",
      "Automated EDA pipeline for engineering college placement trends",
      "Customized college list generation based on branch & caste metrics"
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/Mamatak16/KCET_Rank_Predictor_CollegeList_Generator",
    featured: false,
    category: "aiml",
    metrics: "ML Predictive Model"
  },
  {
    id: "smart-timetable",
    title: "SMART TIMETABLE ASSISTANT",
    subtitle: "Agentic AI Schedule Management Assistant",
    description: "Intelligent timetable assistant designed to help users organize and manage academic schedules using AI-based scheduling concepts.",
    features: [
      "Autonomous agent execution with LangChain agent loop",
      "Conversational memory & multi-turn tool calling",
      "Dynamic academic conflict resolution logic"
    ],
    tech: ["Python", "LangChain", "Agentic AI", "LLMs"],
    github: "https://github.com/Mamatak16/Smart-Time-Table-Assistant",
    featured: false,
    category: "agentic",
    metrics: "Agentic AI Pipeline"
  },
  {
    id: "gnn-recommendation",
    title: "GNN + KNOWLEDGE GRAPH RECOMMENDATION SYSTEM",
    subtitle: "Agricultural Recommendation System",
    description: "Recommendation system combining Graph Neural Networks and Knowledge Graphs for agricultural applications.",
    features: [
      "Knowledge Graph construction for agricultural entity relations",
      "GNN node embeddings for enhanced crop & soil recommendations",
      "Hybrid graph learning architecture"
    ],
    tech: ["Python", "GNN", "Knowledge Graphs", "Machine Learning"],
    github: "https://github.com/Mamatak16",
    featured: false,
    category: "research",
    metrics: "Graph Neural Network"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Python", level: "Advanced", featured: true },
      { name: "Java", level: "Intermediate", featured: true },
      { name: "JavaScript", level: "Proficient", featured: true },
      { name: "C", level: "Core", featured: false }
    ]
  },
  {
    category: "WEB & FRAMEWORKS",
    skills: [
      { name: "MERN Stack", level: "Full Stack", featured: true },
      { name: "React.js", level: "Advanced", featured: true },
      { name: "Node.js", level: "Proficient", featured: true },
      { name: "Express.js", level: "Proficient", featured: false },
      { name: "MongoDB", level: "Proficient", featured: false }
    ]
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Machine Learning", level: "Advanced", featured: true },
      { name: "Artificial Intelligence", level: "Core Focus", featured: true },
      { name: "Deep Learning", level: "Intermediate", featured: true },
      { name: "Generative AI", level: "Proficient", featured: true },
      { name: "RAG", level: "Practitioner", featured: false },
      { name: "Graph Neural Networks", level: "Research Focus", featured: true },
      { name: "Knowledge Graphs", level: "Intermediate", featured: false },
      { name: "LangChain", level: "Proficient", featured: true },
      { name: "LangGraph", level: "Exploring", featured: false },
      { name: "PyTorch", level: "Proficient", featured: true },
      { name: "Scikit-learn", level: "Advanced", featured: true }
    ]
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: [
      { name: "Git", level: "Proficient", featured: true },
      { name: "GitHub", level: "Proficient", featured: true },
      { name: "VS Code", level: "Primary IDE", featured: false },
      { name: "Jupyter Notebook", level: "Data Science", featured: false },
      { name: "MATLAB", level: "Academic", featured: false }
    ]
  },
  {
    category: "CORE CS CONCEPTS",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core Foundation", featured: true },
      { name: "OOP", level: "Solid", featured: true },
      { name: "DBMS", level: "Solid", featured: false },
      { name: "Operating Systems", level: "Academic Core", featured: false }
    ]
  }
];

export const INTEREST_NODES: InterestNode[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Architecting autonomous systems, reasoning frameworks, and intelligent decision engines.",
    tags: ["Autonomous Systems", "Cognitive Computing", "Algorithmic Logic"],
    category: "Core AI",
    connections: ["ml", "genai", "agentic"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Predictive analytics, feature engineering, statistical modeling, and tree-based ensembles.",
    tags: ["Scikit-learn", "XGBoost", "Feature Pipelines"],
    category: "Core AI",
    connections: ["ai", "gnn", "qml"]
  },
  {
    id: "genai",
    title: "Generative AI",
    description: "Diffusion models, multimodal text-to-image synthesis, prompt optimization, and latent spaces.",
    tags: ["PyTorch", "Text-to-Image", "Latent Diffusion"],
    category: "Modern AI",
    connections: ["ai", "agentic"]
  },
  {
    id: "agentic",
    title: "Agentic AI",
    description: "Multi-agent systems, tool calling, autonomous execution loops, and conversational memory.",
    tags: ["LangChain", "LLM Tool Calling", "Autonomous Agents"],
    category: "Modern AI",
    connections: ["ai", "genai", "kg"]
  },
  {
    id: "gnn",
    title: "Graph Neural Networks",
    description: "Deep learning on non-Euclidean graph domains, node classification, and link prediction.",
    tags: ["Graph Embeddings", "PyG", "Network Topology"],
    category: "Advanced Research",
    connections: ["ml", "kg"]
  },
  {
    id: "kg",
    title: "Knowledge Graphs",
    description: "Structured domain knowledge bases, entity-relationship triples, and semantic reasoning.",
    tags: ["Ontologies", "Semantic Web", "Graph Search"],
    category: "Advanced Research",
    connections: ["gnn", "agentic"]
  },
  {
    id: "qml",
    title: "Quantum Machine Learning",
    description: "Variational quantum circuits, quantum kernels, and hybrid quantum-classical algorithms.",
    tags: ["VQC", "Quantum Circuits", "Hybrid Computing"],
    category: "Frontier Tech",
    connections: ["ml", "cyber"]
  },
  {
    id: "cyber",
    title: "Cyber Security",
    description: "Ethical hacking, network security fundamentals, vulnerability assessment, and defensive posture.",
    tags: ["Ethical Hacking", "Cisco Networks", "Threat Prevention"],
    category: "Frontier Tech",
    connections: ["qml", "fullstack"]
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Modern MERN architecture, responsive UX/UI engineering, and scalable backend REST microservices.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
    category: "Software Engineering",
    connections: ["cyber"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ncc-c",
    title: "National Cadet Corps (NCC) 'C' Certificate",
    issuer: "National Cadet Corps, India",
    type: "achievement",
    description: "Awarded 'A' Grade in the prestigious NCC C Certificate Examination. Demonstrates high leadership discipline, physical endurance, drill precision, and team organization.",
    badge: "Grade 'A' Awarded"
  },
  {
    id: "hackathon",
    title: "Hacker-ring Hackathon Participation",
    issuer: "Hacker-ring",
    type: "achievement",
    description: "Certificate of Active Participation in intense coding hackathon event focused on rapid problem solving and team collaboration.",
    badge: "Hackathon Competitor"
  }
];

export const CERTIFICATIONS: AchievementItem[] = [
  {
    id: "cert-ml",
    title: "Machine Learning with Python",
    issuer: "EISystems Services",
    type: "certification",
    description: "Comprehensive hands-on training covering regression, classification, clustering, data preprocessing, and Scikit-learn deployment.",
    badge: "Certified ML Practitioner"
  },
  {
    id: "cert-agentic",
    title: "Agentic AI Specialization",
    issuer: "Capabl",
    type: "certification",
    description: "Practical engineering of LLM agents, LangChain tool integration, memory stores, and autonomous task execution.",
    badge: "Agentic AI Specialist"
  },
  {
    id: "cert-cisco",
    title: "Cisco Networking Basics",
    issuer: "Cisco Networking Academy",
    type: "certification",
    description: "Foundational networking, IP addressing, OSI layer architecture, routing, and network protocol security.",
    badge: "Cisco Certified"
  },
  {
    id: "cert-genai-iisc",
    title: "Generative AI Workshop",
    issuer: "IISc Bengaluru (Indian Institute of Science)",
    type: "certification",
    description: "Advanced technical workshop at IISc on generative deep learning architectures, prompt design, and foundational models.",
    badge: "IISc Workshop"
  },
  {
    id: "cert-cyber",
    title: "Cyber Security and Ethical Hacking",
    issuer: "RVITM Bengaluru",
    type: "certification",
    description: "Hands-on vulnerability scanning, network traffic analysis, encryption standards, and web application security.",
    badge: "Security Specialist"
  }
];

export const LEADERSHIP = {
  title: "Vikrama Kannada Sangha",
  role: "Hospitality Head",
  organization: "Cultural Club • RVITM",
  period: "2024 – Present",
  description: "Led the core organizing committee for 'Samyama', a flagship Kannada Rajyotsava grand celebration at RVITM. Managed hospitality protocols, VIP guest receptions, budget coordination, and event execution for 1000+ attendees."
};
