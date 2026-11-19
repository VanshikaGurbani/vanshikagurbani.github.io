// ============================================================
// Portfolio Data - Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Vanshika Gurbani",
  initials: "VG",
  title: "Agentic AI/ML Engineer",
  headline: "Messy data in, working intelligence out",
  intro:
    "Hi, I'm Vanshika Gurbani, an Agentic AI/ML Engineer with around 2 years of experience. I build agents, ML models, and full-stack products that take messy data and make sense of it, and I'm always trying out the newest AI tools to see what actually works.",
  url: "https://vanshikagurbani.github.io",
  status: "Open to opportunities",
  workModes: "On-site / Hybrid / Remote",
};

export const socialLinks = {
  github: "https://github.com/VanshikaGurbani",
  linkedin: "https://www.linkedin.com/in/vanshika-gurbani/",
  email: "vanshika.gurbani25@gmail.com",
};

export const aboutData = {
  tagline: "Building with purpose",
  bio: [
    "I'm 24 with an **MS in Statistics - Data Science** from Rutgers, and I'm an **Agentic AI/ML Engineer**. I experiment with new AI tools constantly, and I love building things by taking **messy data** and making sense of it, whether that ends up as an agent, an ML model, or a full product. I most recently worked as an **AI/ML Engineer & Researcher** at the Particulate Systems Lab at Rutgers, and **I'm just getting started**.",
    "I first thought about tech in 8th grade. My **aunt is a Software Engineer**, and one day I asked her what she actually does. She told me how she builds things that quietly make people's lives better, things most people don't even realize are happening behind the scenes. That stuck with me. I didn't know exactly how I'd get there, but I knew I wanted to **use technology to help people**, not in some abstract way, but meaningfully. That curiosity pulled me through **Computer Engineering** in my bachelor's, into **AI and Data Science** for my master's, and into work that spans **research, engineering, and product**. I've gone from fine-tuning **biomedical NLP models** to building **AI health assistants** to teaching **200+ students** foundational computing.",
    "I did my master's in **Data Science** because I realized Data is how you actually make sense of the world. That same instinct, figure out the problem then build something that solves it, is what drives everything I do.",
  ],
  philosophy: [
    "I **learn by doing**. If I don't know how to build something, that's usually the reason I start building it.",
    "I **care about** **clarity**. If I can't explain what a system does in plain language, I don't understand it well enough yet.",
    "I'm early in my career and **I'm learning, constantly**. I ask questions, I experiment, I rebuild things when they don't feel right. I'm looking for the kind of environment where that's not just tolerated but **valued**, where **curiosity and craft** matter more than years on a resume.",
  ],
};

export interface Skill {
  name: string;
  category:
    | "Languages"
    | "AI & LLM Systems"
    | "Backend & Frontend"
    | "ML & Data"
    | "Visualization"
    | "Cloud & DevOps";
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Bash", category: "Languages" },
  { name: "Java", category: "Languages" },

  // AI & LLM Systems
  { name: "PyTorch", category: "AI & LLM Systems" },
  { name: "HuggingFace Transformers", category: "AI & LLM Systems" },
  { name: "BioBERT", category: "AI & LLM Systems" },
  { name: "LangGraph", category: "AI & LLM Systems" },
  { name: "LangChain", category: "AI & LLM Systems" },
  { name: "Model Context Protocol (MCP)", category: "AI & LLM Systems" },
  { name: "RAG Pipelines", category: "AI & LLM Systems" },
  { name: "Agentic AI", category: "AI & LLM Systems" },
  { name: "Vector Search (ChromaDB)", category: "AI & LLM Systems" },
  { name: "Semantic Retrieval", category: "AI & LLM Systems" },
  { name: "Embeddings", category: "AI & LLM Systems" },
  { name: "Prompt Engineering", category: "AI & LLM Systems" },
  { name: "Natural Language Processing", category: "AI & LLM Systems" },
  { name: "LLM Evaluation", category: "AI & LLM Systems" },
  { name: "SentenceTransformers", category: "AI & LLM Systems" },

  // Backend & Frontend
  { name: "FastAPI", category: "Backend & Frontend" },
  { name: "React", category: "Backend & Frontend" },
  { name: "Next.js", category: "Backend & Frontend" },
  { name: "Tailwind CSS", category: "Backend & Frontend" },
  { name: "Streamlit", category: "Backend & Frontend" },
  { name: "PostgreSQL", category: "Backend & Frontend" },
  { name: "Neon", category: "Backend & Frontend" },
  { name: "MongoDB", category: "Backend & Frontend" },
  { name: "MySQL", category: "Backend & Frontend" },

  // ML & Data
  { name: "Statistical Modeling", category: "ML & Data" },
  { name: "Regression", category: "ML & Data" },
  { name: "Time Series Analysis", category: "ML & Data" },
  { name: "Surrogate Modeling", category: "ML & Data" },
  { name: "Clustering", category: "ML & Data" },
  { name: "A/B Testing", category: "ML & Data" },
  { name: "Gradient Boosting", category: "ML & Data" },
  { name: "Random Forests", category: "ML & Data" },
  { name: "PuLP", category: "ML & Data" },
  { name: "scikit-learn", category: "ML & Data" },
  { name: "TensorFlow", category: "ML & Data" },
  { name: "Pandas", category: "ML & Data" },
  { name: "ETL & Data Pipelines", category: "ML & Data" },

  // Visualization
  { name: "Plotly", category: "Visualization" },
  { name: "Tableau", category: "Visualization" },
  { name: "Power BI", category: "Visualization" },
  { name: "Excel Dashboards", category: "Visualization" },

  // Cloud & DevOps
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "Git", category: "Cloud & DevOps" },
  { name: "GitHub Actions", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },
  { name: "Render", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "GCP", category: "Cloud & DevOps" },
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
    role: "AI/ML Engineer & Researcher",
    company: "Particulate Systems Lab (PSL), Rutgers University",
    date: "Sep 2025 - Sep 2026",
    description:
      "Built **physics-informed machine learning systems** and AI tools for pharmaceutical manufacturing research across simulation, optimization, NLP, and full-stack deployment.",
    bullets: [
      "Ported a **legacy MATLAB granulation codebase** into **Python ML pipelines**, cutting simulation runtime by **35%** and validation time by **60%**, with automated benchmarking that verifies numerical parity against the original models.",
      "Trained **Gradient Boosting and Random Forest surrogate models** on **150 simulation cases**, iteratively expanded through targeted data generation, achieving **98% accuracy** against held-out data and replacing multi-hour physics simulations with **sub-second predictions** of manufacturing outcomes.",
      "Diagnosed a **systematic model error** through controlled variable-isolation testing, cutting worst-case prediction error from **47% to 8.6%** by fine-tuning against validated reference cases.",
      "Owned **CI/CD**, environment setup, and deployment for shared research tools across **GitHub Codespaces**, **JupyterHub**, and **SLURM**-based university HPC systems, used daily by NSF program managers and lab researchers.",
      "Automated reviewer assignment with conflict-of-interest checks for NSF grant panels using **PuLP optimization** and **SentenceTransformer + TF-IDF** semantic matching, replacing a **days-long manual process** with an 8-app Streamlit platform.",
      "Built an AI tool grouping and summarizing NSF proposals by topic using **KeyBERT + fuzzy c-means clustering** and a **4-model HuggingFace summarization pipeline** (BART, Pegasus, T5), removing manual review across **30+ proposals per cycle**.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ContinuumCare.ai",
    date: "Oct 2025 - Nov 2025",
    description:
      "Built an **AI-powered RAG-based health assistant** using **Python**, **LangGraph**, and the **Claude API**.",
    bullets: [
      "Developed a **RAG health assistant** integrating **6+ medical guideline sources** (AHA, SSATHI, NICE, PRANA) to generate evidence-based insights with **2-3 citations per response**.",
      "Raised answer accuracy from **74% to 88%** on a **150-question evaluation set** by building **dynamic, demographic-based guideline retrieval** across **6+ sources** with Python and the **Claude API**, and cut response time by **62.5% (2 minutes to 45 seconds)** with response caching.",
      "As the **sole engineer**, built the company's patient-facing health assistant **MVP** in **Streamlit** on a **3-node LangGraph pipeline** (profile loading, guideline retrieval, response generation), with multi-profile management, medical record uploads, real-time AI summaries, and exportable **PDF reports**.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Dept. of Computer Science, Rutgers University",
    date: "Sep 2023 - May 2025",
    description:
      "Delivered **CS110/CS170** lab sessions and academic support for **200+ undergraduate students** across 4 semesters of foundational computing.",
    bullets: [
      "Taught **Scratch, HTML/CSS/JavaScript, Excel, and SQL** queries through live coding demos and interactive labs, earning **95% positive feedback** on end-of-term evaluations.",
      "Rebuilt lab materials and assessments to be **screen-reader accessible** for a visually impaired student, restructuring visual code walkthroughs and diagram-based exercises into non-visual equivalents, contributing to strong course performance relative to cohort benchmarks.",
    ],
  },
  {
    role: "Web Development Intern, GRIP",
    company: "The Sparks Foundation",
    date: "Jul 2021",
    description:
      "Built a **full-stack Basic Banking System** using **HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL** as part of a competitive batch internship program.",
    bullets: [
      "Built a **full-stack Basic Banking System** with an **HTML/CSS/JavaScript/Bootstrap** frontend and a **PHP + MySQL** backend, implementing core transaction logic for **10+ user accounts**.",
      "Designed and shipped a **clean tabular dashboard UI** for real-time account management, demonstrating end-to-end ownership from database schema to frontend rendering.",
      "Completed the internship as part of a **competitive batch program**, receiving peer evaluation and delivering all milestones on time.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Exposys Data Labs",
    date: "Jun 2021 - Jul 2021",
    description:
      "Architected and built **Nostalgia**, a memory-sharing platform, using **JavaScript**, **Node.js**, and **MongoDB**.",
    bullets: [
      "Architected and built **Nostalgia**, a memory-sharing platform, applying an **MVC design pattern** and optimizing queries to improve performance and scalability.",
      "Drove higher user engagement by shipping features like commenting and memory-saving, strengthening interaction and content sharing across the platform.",
      "Built and shipped **9+ RESTful APIs** in **Node.js** with **Passport-based authentication** and **Multer file uploads**, enabling secure, efficient data handling.",
    ],
  },
  {
    role: "Software Development Fellow",
    company: "Crio.Do",
    date: "Dec 2020 - Feb 2021",
    description:
      "Built and deployed full-stack web applications using **HTML, CSS, JavaScript, Heroku, and Netlify**, with hands-on exposure to HTTP protocols, cloud hosting, and distributed systems concepts.",
    bullets: [
      "Built and deployed a **full-stack portfolio website** and a **RESTful web application** using **HTML, CSS, JavaScript, Heroku, and Netlify**, with hands-on exposure to HTTP protocols and cloud hosting workflows.",
      "Debugged and extended a **prototype food-delivery application**, developing practical skills in real-world codebase navigation and iterative development.",
      "Explored **Apache Kafka** for stream processing, building foundational knowledge in **event-driven architectures** that later informed work with distributed systems.",
    ],
  },
  {
    role: "Internet of Things Trainee",
    company: "Enovate Skill",
    date: "Jun 2020 - Jul 2020",
    description:
      "Simulated **IoT device behavior** virtually using **Tinkercad**, validating designs before any physical build-out.",
    bullets: [
      "Simulated **IoT device behavior** virtually using **Tinkercad**, validating designs before any physical build-out.",
      "Built multiple **Tinkercad-based simulations** exploring practical IoT applications, including a fire alarm system and a temperature sensor setup.",
    ],
  },
];

export interface ProjectFigure {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "SourceMD",
    tagline:
      "AI chatbots can sound sure while getting medical facts wrong, so SourceMD checks every claim in an AI answer against real clinical guidelines and gives the answer a trust score from 0 to 100.",
    description:
      "Paste a medical question and an AI's answer. SourceMD splits the answer into single factual claims, looks each one up in four official guideline documents (from NICE, the UK's national health guidance body, and the American Heart Association), and marks it supported, unsupported (the guidelines say nothing about it) or contradicted. It then writes a corrected version of the answer with sources you can click.",
    tech: [
      "LangGraph",
      "Groq gpt-oss-120b",
      "Claude API (optional failover)",
      "ChromaDB",
      "FastEmbed (ONNX)",
      "Tavily",
      "FastAPI",
      "Neon PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    github: "https://github.com/VanshikaGurbani/SourceMD",
    live: "https://source-md.vercel.app",
  },
  {
    name: "H&M Fashion Recommendation System",
    tagline:
      "The \"you might also like\" row of an online clothing shop: for each shopper it picks the 12 items they are most likely to buy next week out of more than 100,000 H&M products, and explains each pick in plain words.",
    description:
      "An independent project built on H&M purchase data from a Kaggle competition (31.8 million purchases, 105,000 products, 1.37 million customers). A fast first step shortlists items for each shopper, and a learned ranking model then sorts the shortlist. I measured it by replaying real shopping weeks it had never seen: on the score described below it is 22% better than the strongest simple rule, and the gain is unlikely to be luck. It has a live demo app and an API, and it is not made by or affiliated with H&M.",
    tech: ["Python", "LightGBM", "FAISS", "PyTorch", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    github: "https://github.com/VanshikaGurbani/hm-two-stage-recommender",
    live: "https://fashion-recommendersystem.streamlit.app/",
  },
  {
    name: "Heart Risk Prediction System",
    tagline:
      "Type in a few routine health measurements and it returns an estimated chance, based on how U.S. adults who answered the same way described their own health in four rounds of a public CDC survey. An educational demo, not medical advice.",
    description:
      "An independent project that takes public CDC health survey files (called NHANES) from download to a working web app. The app asks for age, sex, body measurements, blood pressure, cholesterol, blood sugar, smoking, diabetes and drinking, and returns an estimated chance plus whether a demo screening rule would flag the answers. It covers 22,512 U.S. adults from four survey rounds, 1,637 of whom reported heart disease. The outcome is self-reported by survey respondents, so this is not a diagnosis. It is an educational demo, not medical advice, and it is not affiliated with the CDC.",
    tech: ["Python", "PostgreSQL", "SQL", "scikit-learn", "XGBoost", "SHAP", "Streamlit", "Docker", "GitHub Actions"],
    github: "https://github.com/VanshikaGurbani/nhanes-heart-risk",
    live: "https://heartrisk-prediction-system.streamlit.app/",
  },
  {
    name: "Retail SQL Dashboard",
    tagline:
      "Which customers should next quarter's retention budget go to? A SQL-first analysis of two years of sales from a UK online gift shop that ends in a short list of customer groups and an estimate of the revenue at stake.",
    description:
      "An independent project built on a public dataset of 1,067,371 transaction lines from a UK online gift-ware retailer (December 2009 to November 2011). The records are messy, so every cleaning decision is written as plain SQL and counted. Three questions lead to one decision: how revenue is trending, how well customers come back, and which customers hold the most revenue and are most likely to go quiet. It has a live dashboard and is not affiliated with the retailer.",
    tech: ["Python", "SQL", "DuckDB", "pandas", "Streamlit", "pytest", "GitHub Actions"],
    github: "https://github.com/VanshikaGurbani/retail-sql-dashboard",
    live: "https://retail-sql-dashboard.streamlit.app/",
  },
  {
    name: "BioNER: Multi-task Biomedical NER",
    tagline:
      "A model that reads medical research text and highlights the genes, diseases and chemicals it mentions, the first step in organising what thousands of papers say (a task called named entity recognition, or NER).",
    description:
      "M.S. thesis project, since rebuilt with stricter testing. I fine-tuned BioBERT, an AI language model already trained on biomedical papers, to find gene, chemical, disease and other biological names in sentences. I trained it on five public benchmark datasets and compared two setups: a separate model for each dataset (single-task) and one shared model trained on all five at once (multi-task), which is meant to let the datasets help each other.",
    tech: ["PyTorch", "BioBERT", "HuggingFace Transformers", "seqeval", "Multi-task Learning"],
    github: "https://github.com/VanshikaGurbani/Multi-BIONER",
  },
  {
    name: "Experimentation Toolkit",
    tagline:
      "Answers the question every online business asks about a change: did it really work? It checks that a controlled experiment (an A/B test) is trustworthy, measures the true effect and recommends whether to ship.",
    description:
      "An independent project: a tested Python toolkit for A/B tests, run from start to finish on a public Criteo ad experiment with 13,979,592 users, where 85% were shown a campaign and 15% were held back for comparison. The outcome is whether a user visited the advertiser's website. It ends in a one-page decision memo and a live sample-size calculator you can try. It is not affiliated with Criteo.",
    tech: ["Python", "DuckDB", "pandas", "scikit-learn", "LightGBM", "EconML", "Streamlit", "pytest", "GitHub Actions"],
    github: "https://github.com/VanshikaGurbani/experimentation-toolkit",
    live: "https://experimentation-toolkit.streamlit.app/",
  },
  {
    name: "Rossmann Sales Forecasting",
    tagline:
      "A six-week sales forecast for every store in a 1,115-store drugstore chain, so managers can plan staff and stock, tested the way a planner would really use it, with a stated margin of error.",
    description:
      "A forecasting project on the public Kaggle Rossmann drugstore data. For every open store it predicts daily sales 42 days (six weeks) ahead. One shared LightGBM model covers all 1,115 stores, and it is scored on three later time windows it never saw, with no sales from the forecast period leaking in.",
    tech: ["Python", "LightGBM", "Random Forest", "Prophet", "SHAP", "Conformal Prediction"],
    github: "https://github.com/VanshikaGurbani/rossmann_forecasting",
  },
  {
    name: "Job Postings Insights",
    tagline:
      "A study of 123,782 LinkedIn job postings that shows which skills employers ask for, what the jobs pay, and which companies have sponsored H-1B work visas before, built to help job seekers decide what to learn and where to apply.",
    description:
      "Job postings are messy free text, so the first step is turning each one into structured facts: skills, pay and whether the job is remote. The project then groups postings with similar skill lists, trains a model to estimate pay, and matches company names to public US government records (USCIS) of approved H-1B petitions, the work visa many employers use for foreign professionals. Everything is explorable in a live web app.",
    tech: [
      "Python",
      "pandas",
      "scikit-learn",
      "Ridge & Gradient Boosting",
      "Hugging Face Transformers",
      "Streamlit",
      "Plotly",
      "GitHub Actions",
    ],
    github: "https://github.com/VanshikaGurbani/Job_Postings_Insights",
    live: "https://jobpostingsinsights.streamlit.app/",
  },
  {
    name: "AI DevOps Agent",
    tagline:
      "A hackathon team project: an AI assistant for the engineers who keep websites running. It watches deployments on Vercel, flags failures, and on request finds the likely cause and opens a draft fix for a person to review.",
    description:
      "A deployment is one release of a website to the internet, and Vercel is the service that hosts it. A daily check records failed deployments and unreachable sites as incidents and alerts the team in Slack. When someone asks, in Slack or the dashboard chat, the agent (powered by Google's Gemini 3 Flash model) works out the likely cause and opens a draft pull request, a proposed code change that a person must approve before it goes live.",
    tech: [
      "Next.js",
      "Vercel AI SDK",
      "Gemini 3 Flash",
      "Supabase",
      "GitHub API",
      "Slack",
      "Vitest",
      "GitHub Actions",
    ],
    github: "https://github.com/VanshikaGurbani/aidevopsagent",
  },
  {
    name: "Growth Mindset Causal Analysis",
    tagline:
      "Does a growth mindset program, which teaches students that ability grows with effort, actually improve achievement, or do the students who join just differ to begin with? A study of cause and effect, not just correlation.",
    description:
      "I used several methods that estimate the effect of a program rather than a simple correlation, on 10,391 synthetic (made-up but realistic) student records modeled on the National Study of Learning Mindsets.",
    tech: ["Python", "Causal Inference", "EconML", "Scikit-learn", "XGBoost"],
    github: "https://github.com/VanshikaGurbani/growth-mindset-intervention",
  },
  {
    name: "True Image Caption Generator",
    tagline:
      "Teaches a computer to describe a photo in a sentence, and compares two designs for doing it on Flickr8k, a public set of photos with human-written captions.",
    description:
      "Undergraduate thesis project that writes a caption for an image. I built two designs in TensorFlow/Keras and compared their captions: a **CNN** (a network that reads images) feeding an **LSTM** (a network that writes text one word at a time), and an InceptionV3 + **Transformer** design (a newer way of writing text that looks at the whole image and sentence at once).",
    tech: ["TensorFlow", "Keras", "CNN", "LSTM", "Transformers", "InceptionV3"],
    github: "https://github.com/VanshikaGurbani/Image-Caption",
  },
  {
    name: "Enhancing Airbnb Revenue: Dynamic Price Modeling",
    tagline:
      "Predicts what an Airbnb listing should charge from its features, to help hosts set prices with data.",
    description:
      "Queried and processed 10K+ Airbnb listings with SQL and Python, then built and evaluated regression models (a statistical method that predicts a number, here a price, from other facts about the listing) in R to predict prices, and presented the findings in interactive Tableau dashboards.",
    tech: ["R", "Python", "SQL", "Tableau", "Regression"],
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
    degree: "M.S. in Statistics, Data Science",
    duration: "Sep 2023 - May 2025",
    gpa: "3.5 / 4.0",
    coursework:
      "Probability & Inference, Data Mining, Regression, Statistical Learning, DBMS",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. in Computer Engineering",
    duration: "Aug 2019 - May 2023",
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

export interface Publication {
  title: string;
  status: string;
}

export const publications: Publication[] = [
  {
    title:
      "Clustering and Visualization of Research Proposals Using Sentence Embeddings and Unsupervised Learning",
    status: "Ongoing Research Project (NSF-funded program)",
  },
  {
    title:
      "Data-Driven Acceleration of PBM-DEM Granulation Model via ML-Based Prediction",
    status: "Ongoing Research Project",
  },
];

export const contactData = {
  heading: "Let's Connect",
  subheading:
    "I'm always open to discussing AI, data science, NLP, or exciting collaboration opportunities.",
};

export const metrics = [
  { label: "Simulation Runtime Cut", value: "35%" },
  { label: "Best NER Entity F1", value: "90.3" },
  { label: "Students Taught", value: "200+" },
  { label: "Medical Sources", value: "6+" },
];

export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];
