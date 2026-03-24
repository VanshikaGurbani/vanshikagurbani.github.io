// ============================================================
// Portfolio Data — Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Vanshika Gurbani",
  title: "AI Engineer & Data Scientist",
  description:
    "Engineer building intelligent systems at the intersection of LLMs, full-stack software, and real-world data.",
  url: "https://vanshikagurbani.github.io",
  location: "New Brunswick, NJ",
  status: "Open to Opportunities",
};

export const socialLinks = {
  github: "https://github.com/VanshikaGurbani",
  linkedin: "https://www.linkedin.com/in/vanshika-gurbani/",
  email: "vanshika.gurbani25@gmail.com",
};

export const aboutData = {
  bio: [
    "Engineer building intelligent systems at the intersection of LLMs, full-stack software, and real-world data — integrating insights, infrastructure, and interaction.",
    "Currently working as an AI Engineer & Research Assistant at Rutgers, rebuilding MATLAB models into physics-informed ML systems and building digital-twin stacks for pharmaceutical manufacturing.",
    "Previously built RAG-based health assistants with LangGraph and Claude API, and taught 200+ students foundational computing as a Teaching Assistant at Rutgers.",
  ],
};

export interface Skill {
  name: string;
  category:
    | "Languages & Libraries"
    | "AI/ML & NLP"
    | "Cloud & MLOps"
    | "Data Engineering"
    | "Visualization & Tools";
}

export const skills: Skill[] = [
  // Languages & Libraries
  { name: "Python", category: "Languages & Libraries" },
  { name: "JavaScript", category: "Languages & Libraries" },
  { name: "R", category: "Languages & Libraries" },
  { name: "SQL", category: "Languages & Libraries" },
  { name: "C / C++", category: "Languages & Libraries" },
  { name: "Java", category: "Languages & Libraries" },
  { name: "Bash", category: "Languages & Libraries" },
  { name: "Snowflake", category: "Languages & Libraries" },

  // AI/ML & NLP
  { name: "Supervised / Unsupervised ML", category: "AI/ML & NLP" },
  { name: "LLM Prompting", category: "AI/ML & NLP" },
  { name: "RAG", category: "AI/ML & NLP" },
  { name: "LangChain", category: "AI/ML & NLP" },
  { name: "LangGraph", category: "AI/ML & NLP" },
  { name: "Transformers", category: "AI/ML & NLP" },
  { name: "BERT / GPT / T5", category: "AI/ML & NLP" },
  { name: "PyTorch", category: "AI/ML & NLP" },
  { name: "HuggingFace", category: "AI/ML & NLP" },
  { name: "Scikit-learn", category: "AI/ML & NLP" },

  // Cloud & MLOps
  { name: "AWS (S3, EC2, SageMaker, Bedrock)", category: "Cloud & MLOps" },
  { name: "GCP (BigQuery, Cloud Functions)", category: "Cloud & MLOps" },
  { name: "Docker", category: "Cloud & MLOps" },

  // Data Engineering
  { name: "Apache Spark", category: "Data Engineering" },
  { name: "PostgreSQL", category: "Data Engineering" },
  { name: "MongoDB", category: "Data Engineering" },
  { name: "Apache Kafka", category: "Data Engineering" },

  // Visualization & Tools
  { name: "Tableau", category: "Visualization & Tools" },
  { name: "Power BI", category: "Visualization & Tools" },
  { name: "Streamlit", category: "Visualization & Tools" },
  { name: "Plotly", category: "Visualization & Tools" },
  { name: "Matplotlib", category: "Visualization & Tools" },
  { name: "Git", category: "Visualization & Tools" },
  { name: "Weights & Biases", category: "Visualization & Tools" },
];

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  bullets?: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI Engineer & Research Assistant",
    company: "Particulate Systems Lab (PSL), Rutgers University",
    date: "Sep 2025 — Present",
    description:
      "Rebuilding MATLAB-based models into modular Python components and building digital-twin ML stacks for pharmaceutical manufacturing.",
    bullets: [
      "Rebuilding population balance and MPC models into physics-informed ML baselines, achieving ~40% faster inference on large-scale simulations",
      "Developing automated ML evaluation pipelines to benchmark Python models against MATLAB ground truth, reducing validation time by 60%",
      "Integrating physics models into a digital-twin ML stack (Streamlit + surrogate models) for real-time inference and parameter optimization",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ContinuumCare.ai",
    date: "Oct 2025 — Nov 2025",
    description:
      "Built an AI-powered RAG-based health assistant using Python, LangGraph, and the Claude API.",
    bullets: [
      "Developed a RAG health assistant integrating 6+ medical guideline sources (AHA, SSATHI, NICE, PRANA) with 2-3 citations per response",
      "Designed a 3-node LangGraph RAG pipeline that dynamically selects guidelines based on patient demographics and query intent",
      "Built and deployed a Streamlit web app with multi-profile management, structured health data uploads, and PDF report generation",
    ],
  },
  {
    role: "Teaching Assistant — Part Time Lecturer & Grader",
    company: "Rutgers University",
    date: "Sep 2023 — May 2025",
    description:
      "Delivered CS110/CS170 lab sessions and academic support for 200+ undergraduate students in foundational computing.",
    bullets: [
      "Taught Scratch, HTML/CSS/JavaScript, Excel, and SQL queries through live coding and interactive labs",
      "Supported an accessibility-focused learning environment by adapting coding instruction for a visually impaired student",
      "Collaborated with faculty and provided feedback to improve learning outcomes",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "BioNER — Multi-task NLP",
    description:
      "Built a multi-task learning model using BioBERT from HuggingFace Transformers to extract biomedical entities (genes, diseases, chemicals) from 5 benchmark datasets. Achieved 90%+ macro F1-score across tasks with IOBES tagging and cross-dataset evaluation.",
    tech: ["PyTorch", "BioBERT", "HuggingFace", "Multi-task Learning"],
    github: "https://github.com/VanshikaGurbani/Multi-BIONER",
  },
  {
    name: "True Image Caption Generator",
    description:
      "Built a hybrid image captioning system using InceptionV3 + dual-mode Transformer. Trained on MS-COCO, Flickr8k, and Flickr30k (120K+ images), achieving BLEU score of 0.80. Deployed on Streamlit for real-time captioning.",
    tech: ["CNN", "Transformers", "InceptionV3", "Streamlit"],
    github: "https://github.com/VanshikaGurbani/Image-Caption",
  },
  {
    name: "Growth Mindset Causal Analysis",
    description:
      "Estimated Average Treatment Effect using Causal Forests, IPW, and meta-learners on 10K+ observational education records to analyze growth mindset interventions.",
    tech: ["Python", "Causal Inference", "Statistical Modeling", "R"],
    github: "https://github.com/VanshikaGurbani/growth-mindset-intervention",
  },
  {
    name: "Airbnb Revenue Analytics",
    description:
      "Built a multimodal model using Python, R, SQL, and Tableau to predict and boost Airbnb revenue by 25% through data-driven pricing and listing optimization.",
    tech: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
  },
];

export interface Education {
  school: string;
  degree: string;
  duration: string;
  gpa: string;
  coursework?: string;
}

export const education: Education[] = [
  {
    school: "Rutgers University",
    degree: "M.S. in Statistics — Data Science",
    duration: "Sep 2023 — May 2025",
    gpa: "3.45 / 4.0",
    coursework:
      "Probability & Inference, Data Mining, Regression, Statistical Learning, DBMS",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. in Computer Science",
    duration: "Aug 2019 — May 2023",
    gpa: "8.5 / 10.0",
    coursework:
      "DSA, OOPs, Software Engineering, AI, ML, NLP, Deep Learning, Big Data Analytics",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
  },
  {
    name: "30 Days of Google Cloud",
    issuer: "Google Cloud",
    date: "Oct 2021",
  },
  {
    name: "Data Structures & Algorithms (C++)",
    issuer: "Shape AI",
    date: "May 2021",
  },
];

export const contactData = {
  heading: "Let's Connect",
  subheading:
    "I'm always open to discussing AI, data science, NLP, or exciting collaboration opportunities.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
