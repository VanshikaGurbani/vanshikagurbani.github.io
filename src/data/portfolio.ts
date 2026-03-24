// ============================================================
// Portfolio Data — Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Vanshika Gurbani",
  title: "Data Scientist & ML Engineer",
  description:
    "Graduate Data Scientist passionate about solving problems using Machine Learning, NLP, and intelligent systems.",
  url: "https://vanshikagurbani.github.io",
};

export const socialLinks = {
  github: "https://github.com/VanshikaGurbani",
  linkedin: "https://www.linkedin.com/in/vanshika-gurbani/",
  email: "vanshika.gurbani25@gmail.com",
};

export const aboutData = {
  bio: [
    "I'm a graduate Data Scientist passionate about solving real-world problems using Machine Learning, NLP, and intelligent systems.",
    "Experienced in statistical modeling, full-stack data projects, and research-focused AI applications. I love building scalable data solutions and exploring the latest advancements in AI.",
    "Currently completing my M.S. in Data Science at Rutgers University, where I also serve as a Teaching Assistant helping students discover the power of computing.",
  ],
};

export interface Skill {
  name: string;
  category: "Languages" | "ML & AI" | "Tools & Cloud";
}

export const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "PyTorch", category: "ML & AI" },
  { name: "HuggingFace", category: "ML & AI" },
  { name: "Scikit-learn", category: "ML & AI" },
  { name: "NLP", category: "ML & AI" },
  { name: "AWS", category: "Tools & Cloud" },
  { name: "GCP", category: "Tools & Cloud" },
  { name: "Docker", category: "Tools & Cloud" },
  { name: "Git", category: "Tools & Cloud" },
  { name: "Tableau", category: "Tools & Cloud" },
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
    role: "Teaching Assistant — CS110/170",
    company: "Rutgers University",
    date: "2023 — 2025",
    description:
      "Taught introductory computing (Scratch, HTML, JS, Excel, SQL); mentored 100+ students, led labs, and enhanced tech-based learning.",
    bullets: [
      "Guided students through programming fundamentals and data literacy",
      "Led weekly lab sessions and office hours",
      "Developed supplementary learning materials",
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
      "Built a BioBERT-based multi-task learning model for biomedical named entity recognition across 5 datasets.",
    tech: ["PyTorch", "BioBERT", "NLP", "Multi-task Learning"],
    github: "https://github.com/VanshikaGurbani/Multi-BIONER",
  },
  {
    name: "Growth Mindset Causal Analysis",
    description:
      "Estimated ATE using Causal Forests, IPW, and meta-learners on 10K+ observational education records.",
    tech: ["Python", "Causal Inference", "Statistical Modeling"],
    github: "https://github.com/VanshikaGurbani/growth-mindset-intervention",
  },
  {
    name: "Airbnb Revenue Analytics",
    description:
      "Used Python, R, SQL, and Tableau to build a multimodal model and boost revenue prediction by 25%.",
    tech: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
  },
  {
    name: "Image Feature Detection & Captioning",
    description:
      "Developed CNN + LSTM/Transformer pipeline with BLEU scoring; deployed on Streamlit.",
    tech: ["CNN", "LSTM", "Transformers", "Streamlit"],
    github: "https://github.com/VanshikaGurbani/Image-Caption",
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
    degree: "M.S. in Data Science",
    duration: "2023 — 2025",
    gpa: "3.45 / 4.0",
    coursework:
      "ML, NLP, Big Data, Statistical Modeling, Quantitative Analysis",
  },
  {
    school: "Thadomal Shahani Engineering College",
    degree: "B.E. in Computer Engineering",
    duration: "2019 — 2023",
    gpa: "8.5 / 10",
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
