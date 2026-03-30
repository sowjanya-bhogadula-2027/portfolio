// Mock data for Lakshmi Sowjanya Bhogadula's Portfolio
import erisa from './images/erisa.png'; 
import pdfqa from './images/pdfqa.png'; 
import llmapp from './images/llmapp.png'; 
import clgms from './images/clgms.png'; 
import newsletter from './images/newsletter.png'; 
import portfolio from './images/portfolio.jpeg'; 


export const profileData = {
  name: "Lakshmi Sowjanya Bhogadula",
  title: "AI & Machine Learning Engineer | Generative AI Specialist",
  tagline: "Building intelligent systems that transform complex problems into elegant AI-powered solutions",
  intro: "With over 5 years of experience in AI/ML and 3+ years specializing in Generative AI and LLM-powered solutions, I design and deploy enterprise-grade AI systems that drive real-world impact.",
  profileImage: portfolio,
  email: "lakshmisowjanya275@gmail.com",
  phone: "+1 520-543-2992",
  linkedin: "https://www.linkedin.com/in/lakshmi-bhogadula/",
  github: "https://github.com/sowjanya-bhogadula-2027"
};

export const aboutData = {
  bio: "I am an AI & Machine Learning Engineer with deep expertise in multi-agent workflows, RAG (Retrieval-Augmented Generation), LLM fine-tuning using LoRA and PEFT, and prompt engineering. My work focuses on building scalable AI microservices and implementing cloud-based MLOps pipelines that bring cutting-edge AI research into production environments. I specialize in creating domain-specific AI solutions that are not just technically robust, but also user-centric and enterprise-ready.",
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Texas Tech University",
      year: "2022-2024"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Dhanekula Institute of Engineering and Technology",
      year: "2016-2020"
    }
  ],
  interests: "When I'm not building AI systems, I explore the latest developments in generative AI, experiment with novel LLM architectures, and contribute to open-source AI projects."
};

export const experienceData = [
  {
    id: 1,
    title: "GenAI Engineer",
    company: "US Bank",
    period: "July 2024 – Present",
    description: "Leading the design and implementation of agentic AI systems for enterprise applications.",
    responsibilities: [
      "Designing multi-agent AI systems with advanced orchestration and tool-calling capabilities",
      "Building intelligent chatbots using GPT-4o and Gemini 2.5 with context-aware conversation flows",
      "Implementing production-grade RAG pipelines with vector databases (Pinecone, FAISS, OpenSearch)",
      "Fine-tuning LLMs using LoRA and PEFT for domain-specific applications",
      "Developing MLOps workflows for model versioning, monitoring, and continuous deployment"
    ]
  },
  {
    id: 2,
    title: "Research Engineer",
    company: "Texas Tech University",
    period: "Sep 2022 – May 2024",
    description: "Developed end-to-end AI/ML pipelines for research and academic projects.",
    responsibilities: [
      "Built comprehensive NLP pipelines for conversational analytics and text processing",
      "Developed predictive modeling solutions using advanced machine learning algorithms",
      "Designed cloud-native AI microservices with FastAPI and containerized deployments",
      "Implemented real-time data processing systems for large-scale datasets",
      "Collaborated with research teams to translate academic concepts into practical applications"
    ]
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "TCS (Tata Consultancy Services)",
    period: "Jan 2020 – Aug 2022",
    description: "Delivered AI/ML solutions across computer vision, NLP, and recommendation systems.",
    responsibilities: [
      "Developed computer vision models for image recognition and object detection tasks",
      "Built recommendation systems using collaborative filtering and deep learning",
      "Implemented regression models for business forecasting and predictive analytics",
      "Designed scalable AI microservices with real-time event processing capabilities",
      "Led responsible AI initiatives focusing on model fairness and bias mitigation"
    ]
  }
];

export const skillsData = {
  core: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Large Language Models (LLMs)",
    "Deep Learning"
  ],
  technical: [
    "LLM Fine-tuning (LoRA, PEFT, QLoRA)",
    "Prompt Engineering & Optimization",
    "RAG Pipelines & Vector Databases",
    "Multi-Agent AI Systems",
    "Natural Language Processing",
    "Computer Vision",
    "MLOps & Model Deployment"
  ],
  tools: [
    "Python, PyTorch, TensorFlow",
    "LangChain, LlamaIndex",
    "OpenAI GPT-4, Gemini, Claude",
    "BERT, RoBERTa, spaCy",
    "Vector DBs: Pinecone, FAISS, OpenSearch",
    "FastAPI, Flask, Docker, Kubernetes",
    "Azure, AWS, GCP",
    "Git, CI/CD, Model Monitoring"
  ]
};

export const servicesData = [
  {
    id: 1,
    title: "AI Solution Design & Development",
    description: "End-to-end development of custom AI solutions tailored to your business needs, from concept to deployment.",
    features: [
      "Domain-specific chatbots and conversational AI",
      "Intelligent knowledge assistants with RAG",
      "Custom LLM fine-tuning for specialized tasks",
      "AI-powered dashboards and analytics"
    ]
  },
  {
    id: 2,
    title: "Scalable AI Microservices",
    description: "Building production-ready, cloud-native AI microservices that scale with your business.",
    features: [
      "RESTful APIs with FastAPI/Flask",
      "Containerized deployments (Docker, Kubernetes)",
      "Real-time processing and event-driven architectures",
      "Comprehensive monitoring and logging"
    ]
  },
  {
    id: 3,
    title: "MLOps & Model Deployment",
    description: "Implementing robust MLOps pipelines for continuous model training, versioning, and deployment.",
    features: [
      "CI/CD pipelines for ML models",
      "Model versioning and experiment tracking",
      "Performance monitoring and alerting",
      "A/B testing and gradual rollouts"
    ]
  },
  {
    id: 4,
    title: "UI/UX for AI Applications",
    description: "Creating intuitive, user-friendly interfaces that make complex AI systems accessible to end-users.",
    features: [
      "Interactive chat interfaces",
      "Real-time visualization dashboards",
      "Responsive web and mobile designs",
      "User-centric design principles"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Workup Agent: ERISA Denial Analysis System",
    description: "An advanced LLM-powered system that analyzes ERISA denial cases using multi-agent workflows and structured tool-calling.",
    technologies: ["GPT-4", "LangChain", "Multi-Agent", "RAG", "FastAPI", "React"],
    features: [
      "Multi-agent orchestration for complex legal analysis",
      "Structured tool-calling for precise information retrieval",
      "Persistent chat sessions with conversation memory",
      "Context-aware responses with citation tracking"
    ],
    image: erisa,
    githubUrl: "https://github.com/sowjanya-bhogadula-2027"
  },
  {
    id: 2,
    title: "PDF-Q-A-With-Chat-History",
    description: "A RAG-based application that enables intelligent interactions with multiple PDF documents while maintaining conversation context.",
    technologies: ["LangChain", "OpenAI", "FAISS", "Streamlit", "Python"],
    features: [
      "Multi-document processing and indexing",
      "Context-aware question answering",
      "Persistent conversation history",
      "Source attribution and citation"
    ],
    image: pdfqa,
    githubUrl: "https://github.com/sowjanya-bhogadula-2027"
  },
  {
    id: 3,
    title: "Simple LLM Application",
    description: "A multi-interface language translation system showcasing various deployment strategies for LLM applications.",
    technologies: ["LangChain", "FastAPI", "LangServe", "Streamlit", "OpenAI"],
    features: [
      "Multiple interface options (API, CLI, Web)",
      "RESTful API with LangServe",
      "Interactive Streamlit dashboard",
      "Modular architecture for easy extension"
    ],
    image: llmapp,
    githubUrl: "https://github.com/sowjanya-bhogadula-2027"
  },
  {
    id: 4,
    title: "College Management System",
    description: "A comprehensive web application that digitizes and streamlines college administrative processes.",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "Bootstrap"],
    features: [
      "Student admissions and enrollment management",
      "Fee payment and financial tracking",
      "Examination and grading system",
      "Alumni network management"
    ],
    image: clgms,
    githubUrl: "https://github.com/sowjanya-bhogadula-2027"
  },
  {
    id: 5,
    title: "Publishing Newsletter Portal",
    description: "A student-focused newsletter platform with automated distribution and document management.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "PDF.js"],
    features: [
      "Newsletter creation and editing tools",
      "Automated email distribution system",
      "PDF conversion and download functionality",
      "Subscription management"
    ],
    image: newsletter,
    githubUrl: "https://github.com/sowjanya-bhogadula-2027"
  }
];

export const statsData = [
  { label: "Years of Experience", value: "5+" },
  { label: "Years in GenAI/LLM", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies Mastered", value: "30+" }
];
