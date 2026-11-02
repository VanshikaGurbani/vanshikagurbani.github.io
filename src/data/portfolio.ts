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

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
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
    highlights: [
      "**How it checks.** A 3-step pipeline built with **LangGraph** (a tool for chaining AI steps): pull out each claim, retrieve the closest guideline passages, then have an AI model (Groq's **gpt-oss-120b**) judge each claim against them. Retrieval means searching about **844 guideline passages** by meaning rather than exact words, using **ChromaDB**, a database built for that kind of search.",
      "**Web backup.** When the guidelines have nothing close to a claim, it searches trusted medical sites (NIH, WHO, PubMed and others) through the **Tavily** search API and labels those sources as live web.",
      "**Trust score.** Each verdict is weighted by how confident the AI is and combined into a **0 to 100 score**, shown next to the corrected answer and page-level citations. A flagged-claim rate (the share of claims not marked supported) is a warning signal, not an accuracy score.",
      "**Result: looking things up helped.** On **57 held-out test claims** (claims I did not use while tuning), the verdict was right **83%** of the time when the AI could consult the guidelines, against **61%** when it judged from memory alone. The trust score ranked fully supported answers above flawed ones with an AUROC of **0.98** across 20 test answers (1.0 would be a perfect ranking).",
      "**Tested, not assumed.** Adding live web search scored 81%, and a hybrid of keyword and meaning search scored 86% but found fewer contradicted claims (65% against 76%), so I left it off. When the AI quotes a guideline, the quote really appears in the passage it cites **95%** of the time.",
      "**Lighter to run.** Swapping the embedding step (the part that turns text into numbers so it can be searched by meaning) from PyTorch to **ONNX**, a leaner runtime, via **FastEmbed** cut peak memory **53%** (526 MB to 247 MB in a Linux container), so the backend runs on Render's free 512 MB tier. **90 automated tests**, lint, type checks and a build run on every change in **GitHub Actions**; the stack is **FastAPI**, **Neon PostgreSQL** and a **React + TypeScript** frontend on Vercel.",
      "**Honest limits.** The test set is small, so differences of a few points are noise. I wrote the claims from the guideline text itself, so they are cleaner than real chatbot output and the accuracy is probably optimistic; the labels were cross-checked by AI, not reviewed by a clinician. It checks against four guidelines only, and pulling claims out of an answer was not part of this test. On the live demo, the first request after idle can take 30 to 60 seconds while the free server wakes up.",
    ],
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
    name: "AI DevOps Agent",
    tagline:
      "A hackathon team project: an AI assistant for the engineers who keep websites running. It watches deployments on Vercel, flags failures, and on request finds the likely cause and opens a draft fix for a person to review.",
    description:
      "A deployment is one release of a website to the internet, and Vercel is the service that hosts it. A daily check records failed deployments and unreachable sites as incidents and alerts the team in Slack. When someone asks, in Slack or the dashboard chat, the agent (powered by Google's Gemini 3 Flash model) works out the likely cause and opens a draft pull request, a proposed code change that a person must approve before it goes live.",
    highlights: [
      "**Team project, built in 8 hours.** I co-built it with Ronit Gandhi at **Zero to Agent**, the Vercel x Google DeepMind hackathon. The safety rules, tests and bug fixes below are work I added afterwards.",
      "**Detect, diagnose, fix.** A scheduled job (a task that runs on a timer) runs once a day, finds new failed deployments and websites that stopped responding, records each as an incident and posts one Slack alert per failure. Asked to investigate, the agent reads logs and code through the Vercel and GitHub APIs and opens a pull request with a fix. The daily job alone never changes any code.",
      "**Slack control.** Plain-English **/devops** commands roll a project back to its last working version, list open incidents, check deployment status or compare settings between two projects. **Supabase**, a hosted database, keeps the incident history, and a weekly summary posts to Slack every Saturday.",
      "**Safety first, because it acts on real systems.** Its pull requests open as drafts so a person has to approve them. It cannot commit straight to the main branch, cannot edit secret or CI files, refuses a change that looks like it contains a password or key (a pattern check, not a guarantee), and has a dry-run mode that reports what it would do without doing it.",
      "**Checked on every change.** I added automated tests for the safety rules, the cron security and the monitor, plus a GitHub Actions workflow that runs a type check, the tests and a build. Along the way I fixed uptime incidents the database was rejecting, a cron endpoint that accepted requests when its secret was not set, and a deploy script that printed secret values to the terminal.",
      "**Honest limits.** The repository has no measured numbers for how often the agent's fixes are correct, so I do not quote any. The monitor runs once a day because Vercel's free plan only allows daily scheduled jobs.",
    ],
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
    name: "BioNER: Multi-task Biomedical NER",
    tagline:
      "A model that reads medical research text and highlights the genes, diseases and chemicals it mentions, the first step in organising what thousands of papers say (a task called named entity recognition, or NER).",
    description:
      "M.S. thesis project, since rebuilt with stricter testing. I fine-tuned BioBERT, an AI language model already trained on biomedical papers, to find gene, chemical, disease and other biological names in sentences. I trained it on five public benchmark datasets and compared two setups: a separate model for each dataset (single-task) and one shared model trained on all five at once (multi-task), which is meant to let the datasets help each other.",
    highlights: [
      "**How the labelling works.** Each word gets a tag such as \"start of a chemical\" or \"not an entity\" (the **IOBES** scheme). BioBERT splits rare words into smaller pieces, so the code lines the tags up with those pieces, and long sentences are split into windows so that no word is cut off.",
      "**Five datasets:** BC2GM (genes), BC4CHEMD (chemicals), BC5CDR (chemicals and diseases), JNLPBA (proteins, DNA, RNA and cell types) and NCBI Disease (diseases).",
      "**How it is scored.** A name counts as correct only if both its type and its exact start and end are right (**entity-level F1**, where F1 is one score balancing missed names against false alarms, and 100 is perfect). The best training round is picked on a separate validation split, the test split is scored once, and every setup was trained with 3 random seeds and averaged.",
      "**Results with separate models.** F1 was **90.3** on BC4CHEMD, **89.0** on BC5CDR, **88.8** on NCBI Disease, **83.5** on BC2GM and **75.4** on JNLPBA, the hardest dataset (its weakest name type is cell lines, at 64.1). The average across the five datasets was **85.4**.",
      "**One shared model did not beat separate models.** The shared model has one BioBERT with a small output layer per dataset. It averaged **85.1 to 85.2** (two ways of choosing which dataset to train on at each step), about 0.2 points below 85.4. It was slightly lower on BC2GM, BC4CHEMD and NCBI Disease (by 0.3 to 0.6 points) and about level on JNLPBA and BC5CDR, where one version was 0.35 points ahead. So one model can do the work of five at almost no accuracy cost, but it does not do better.",
      "**Earlier version.** My original thesis notebooks reported per-word scores of 0.71 to 0.93, but their \"multi-task\" run had trained five separate models and the test sets were used to pick the best round, so those numbers are not comparable. A code audit found this and I rebuilt the project with a test suite that runs on a CPU in about 7 seconds.",
      "**Honest limits.** Three seeds give a rough spread, not a confidence interval, so gaps smaller than about one standard deviation count as ties. Every model used the same training settings with no tuning. About 20% of JNLPBA sentences were cut in the middle of a name, so I re-joined them, which means its scores differ from papers that use the raw files. A few test sentences also appear in training. I did not test training on one dataset and testing on another, and everything is English research abstracts.",
    ],
    tech: ["PyTorch", "BioBERT", "HuggingFace Transformers", "seqeval", "Multi-task Learning"],
    github: "https://github.com/VanshikaGurbani/Multi-BIONER",
  },
  {
    name: "True Image Caption Generator",
    tagline:
      "Image captioning with CNN + LSTM and CNN + Transformer models, compared on the Flickr8k dataset.",
    description:
      "Undergraduate thesis project that generates natural-language captions for images. Implemented a CNN + LSTM baseline and an InceptionV3 + Transformer encoder-decoder in TensorFlow/Keras and compared their captions.",
    highlights: [
      "Built **two captioning pipelines**: a **CNN + LSTM** model (VGG16 / Xception image features) and an **InceptionV3 + Transformer** encoder-decoder with multi-head attention.",
      "Trained on **Flickr8k** image-caption pairs with tokenization, feature extraction, and caption decoding in **TensorFlow/Keras**.",
      "Compared **LSTM vs. Transformer** captions with **BLEU**: per-image scores of **0.71 to 0.73** on strong examples and near **0** on failures, which showed the Transformer producing more accurate captions.",
      "Documented the work in a full undergraduate thesis report and a command-line caption generator.",
    ],
    tech: ["TensorFlow", "Keras", "CNN", "LSTM", "Transformers", "InceptionV3"],
    github: "https://github.com/VanshikaGurbani/Image-Caption",
  },
  {
    name: "Growth Mindset Causal Analysis",
    tagline:
      "Causal inference study measuring whether growth mindset interventions actually improve student achievement.",
    description:
      "Used multiple causal estimators on 10,391 synthetic student records modeled on the National Study of Learning Mindsets to estimate the treatment effect of a growth mindset program, not just correlation.",
    highlights: [
      "Analyzed **10,391 synthetic student records** (76 schools, 32.6% treated) modeled on the National Study of Learning Mindsets, with a continuous achievement outcome.",
      "Applied **seven specifications across four method families**: regression adjustment, **IPW**, **T-Learner** and **S-Learner** (Random Forest and XGBoost), and **Causal Forest** (EconML).",
      "Estimated an **ATE of about 0.41 to 0.42** outcome units in every specification (95% CI roughly **0.39 to 0.44** for regression and IPW; Causal Forest **0.42**, CI 0.20 to 0.63), showing **estimator-agnostic robustness**.",
      "Used **propensity score models**, overlap checks, and **covariate balance (Love plot, SMD)**; adjustment moved the naive difference of 0.46 to about 0.41. Presented results on an academic research poster.",
    ],
    tech: ["Python", "Causal Inference", "EconML", "Scikit-learn", "XGBoost"],
    github: "https://github.com/VanshikaGurbani/growth-mindset-intervention",
  },
  {
    name: "Gold Trading Strategy",
    tagline:
      "Backtested Google Trends and technical-indicator strategies for gold against a Buy & Hold benchmark.",
    description:
      "Built and compared three rule-based gold trading strategies (Google Trends only, Trends plus technical indicators, and a Buy & Hold/Trends hybrid) on a $10,000 portfolio for Algorithmic Trading & Portfolio Management at Rutgers.",
    highlights: [
      "The **hybrid strategy** reached a **Sharpe ratio of 1.28** vs. **0.70** for Buy & Hold, with a **72.9% cumulative return**.",
      "Adding **RSI, MACD, Bollinger Bands, and SMA/EMA** to Google Trends signals lifted returns from **38.6% to 57.8%** while cutting trades from **27 to 11**.",
      "Buy & Hold still led on raw return (**101.3%**), so the finding is a **risk-adjusted improvement**, not outperformance.",
      "Ran a **Random Forest** price model and a **Trends vs. gold ETF correlation study**; data sourced via **pytrends** and **yfinance**.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "pytrends", "yfinance", "Backtesting"],
    github: "https://github.com/VanshikaGurbani/GoldTradingStratergy",
  },
  {
    name: "Coffee Trading with Weather Data",
    tagline:
      "Commodity trading strategies that use Brazilian weather as an alternative data source for coffee futures.",
    description:
      "Combined Visual Crossing weather data for Brazil with technical indicators to build and evaluate three coffee trading strategies, including weather-based position sizing.",
    highlights: [
      "Engineered **weather indicators** (frost events, drought conditions, extreme rainfall) alongside **Bollinger Bands, MACD, RSI, ATR, Keltner Channels, CCI, and VWAP**.",
      "Built three strategies: **technical indicators**, **weather-integrated signal selection**, and **weather-based position sizing**, with leverage, stop-loss, and take-profit rules.",
      "Evaluated with **Sharpe, Sortino, and Calmar ratios**, drawdowns, and win rates on a held-out test period (**Sep 2023 to Aug 2024**).",
      "Aligned hourly weather and market data across time zones and aggregated to **daily features** with rolling and lagged variables.",
    ],
    tech: ["Python", "pandas", "Alternative Data", "Technical Analysis", "Backtesting"],
    github:
      "https://github.com/VanshikaGurbani/Commodity-Trading-based-on-alternate-Data-Sources-Weather-Data",
  },
  {
    name: "Multi-Factor Alpha Research Pipeline",
    tagline:
      "Quant research pipeline that builds, backtests, and risk-models multi-factor long-short equity portfolios.",
    description:
      "End-to-end alpha research framework with live Yahoo Finance data, a seven-factor engine, constrained portfolio construction, cost-aware backtesting, and a Streamlit dashboard.",
    highlights: [
      "**Seven factors** (momentum, reversal, volatility, value, quality, liquidity, size) with vectorized computation, **winsorization, and z-scoring**.",
      "**Long-short portfolios** with **sector-neutral and beta-neutral** constraints and leverage limits.",
      "Backtests with **transaction costs and turnover penalties**, reporting Sharpe, drawdown, Calmar, and win rate; **Barra-style risk model** for exposure decomposition.",
      "**IC-based and ML-based (Ridge/Lasso/ElasticNet) factor weighting** with rolling retraining; shipped with a **CLI, Docker, and Plotly/Streamlit dashboard**.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "Plotly", "Streamlit", "Docker"],
    github: "https://github.com/VanshikaGurbani/alpha-research",
  },
  {
    name: "Banking GenAI Assistant",
    tagline:
      "Conversational banking assistant that pairs Rasa with Gemini for grounded answers and spending insights.",
    description:
      "Built a banking chatbot on Rasa 3.x with Google Gemini fallback, covering balances, transaction history, transfers, fraud reporting, and AI-powered spending analysis.",
    highlights: [
      "**Rasa 3.x** NLU with a **DIET classifier**, entity recognition, and synonym mapping; secure **multi-step forms** for transfers and sensitive operations.",
      "**Gemini-powered fallback** answers unhandled queries with banking context and keeps conversation history for natural dialogue.",
      "**Spending analysis** that categorizes transactions and generates insights with Gemini via custom Rasa actions.",
      "Served through a **FastAPI `/chat` endpoint** and a **Streamlit** interface, containerized with **Docker**.",
    ],
    tech: ["Rasa", "Google Gemini", "FastAPI", "Streamlit", "Docker", "Python"],
    github: "https://github.com/VanshikaGurbani/banking-genai-assistant",
  },
  {
    name: "AI Job Application Automation",
    tagline:
      "Gemini-powered tool that scrapes jobs, tailors resumes, writes cover letters, and scores job fit.",
    description:
      "Automation app that scrapes LinkedIn listings, tailors a LaTeX resume to each job for ATS match, generates custom cover letters, rates job compatibility, and files documents to Google Drive.",
    highlights: [
      "**LinkedIn scraper** (Selenium) that saves listings to CSV, with duplicate prevention through smart file naming.",
      "**LaTeX resume tailoring** that preserves formatting and rewrites only the skills section, compiled to **PDF** automatically.",
      "**Cover letter generation and job match scoring** using **Gemini 2.5 Flash**, optimized for keyword and ATS alignment.",
      "**Google Drive integration** for storing generated documents, wrapped in a **Streamlit** interface.",
    ],
    tech: ["Python", "Gemini 2.5 Flash", "Selenium", "Streamlit", "LaTeX", "Google Drive API"],
    github: "https://github.com/VanshikaGurbani/job-automation-agent-app",
  },
  {
    name: "Personalized Movie Recommender",
    tagline:
      "Movie recommender that adapts to your personality, mood, and viewing history, with LLM-powered search.",
    description:
      "Streamlit recommender built on the MovieLens dataset that scores movies on genre, mood, personality, and history, and explains each recommendation with Cohere.",
    highlights: [
      "**Multi-factor scoring** combining genre match, mood filter, personality filter, history bonus, and controlled randomness for diverse results.",
      "**Six-question personality assessment** and persistent user profile and history that improve recommendations over time.",
      "**Natural language search** and **AI explanations** for each pick using **Cohere**.",
      "Built on **MovieLens** data with a dark-themed interactive **Streamlit** UI.",
    ],
    tech: ["Python", "Streamlit", "Cohere", "pandas", "MovieLens"],
    github: "https://github.com/VanshikaGurbani/recommender-system",
  },
  {
    name: "Job Postings Insights",
    tagline:
      "A study of about 124,000 LinkedIn job postings that shows which skills employers ask for, what the jobs pay, and which companies have sponsored H-1B work visas before, built to help job seekers decide what to learn and where to apply.",
    description:
      "Job postings are messy free text, so the first step is turning each one into structured facts: skills, pay and whether the job is remote. The project then groups postings with similar skill lists, trains a model to estimate pay, and matches company names to public US government records (USCIS) of approved H-1B petitions, the work visa many employers use for foreign professionals. Everything is explorable in a live web app.",
    highlights: [
      "**Reading the postings.** Rules written for this project pull out skills (from a list of about 100), pay (converted to a yearly US dollar figure) and remote, hybrid or on-site status. The original version matched skills by simple text search and tagged **100%** of postings with the programming language \"R\"; the new rules do this for **0.5%**. One command rebuilds every result from the raw file, and tests and lint run in **GitHub Actions**.",
      "**Skill detection about 36% better.** On 40 postings with reference answers, the new rules scored an F1 of **0.64** against **0.47** for the original method on the same 18-skill list (F1 balances finding real skills against adding false ones), and **0.73** on the full skill list. A small free AI model (Qwen2.5-1.5B) running on a laptop processor scored lower, 0.42.",
      "**Pay estimates 43% closer.** Using the **50,700** postings that state pay, a ridge regression model (a simple, stable way of fitting a line to data) was off by **$24,613** on average, against **$43,075** for guessing the overall median salary: 43% less error. Against a smarter baseline, the median for the same role and experience level ($35,198), it is 30% less. It was tested on job titles it had never seen, and a gradient boosting model did about the same.",
      "**20 stable skill groups.** The **75,576** postings with at least two hard skills are grouped by skill overlap into 20 clusters, for example one led by Python, SQL and Java where 59% of titles are data, software or AI roles. Re-running with five different random starting points gave nearly the same groups (agreement 0.80 out of 1), and the groups are more distinct than the original method's (0.27 against 0.10 on a standard separation measure, though the two scores are not strictly comparable).",
      "**H-1B employer flags.** Company names are matched to public USCIS filings for 2021 to 2023: **42.6%** of postings matched a company, and a spot check of 40 matches found the same company every time. A match shows a company has sponsored before, not that a particular job will.",
      "**What it found.** After adjusting for role, seniority and work arrangement, postings that list TypeScript (+16%), Generative AI (+15%), Machine Learning (+13%) or Go (+12%) are associated with higher pay. Remote pay is not clearly different (+6.3%, with a range from -2.7% to +21.2%). These come from the 3,428 data, AI and software postings that state a salary and show association, not proof that learning a skill raises pay.",
      "**Honest limits.** The 40-posting test set is small and was labelled in a single pass, so the scores have wide margins of error. The rule that spots sponsorship-friendly wording was right 64% of the time, so treat it as a rough filter. The data covers about three weeks of spring 2024, so it says nothing about trends over time, and it is not legal or immigration advice. The free live app sleeps when idle, so the first load can take a few seconds.",
    ],
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
    name: "Rossmann Sales Forecasting",
    tagline:
      "Retail sales forecasting with causal promotion analysis and SHAP explainability.",
    description:
      "Forecast daily sales for 1,115 Rossmann stores, quantified the real lift from promotions, and explained model decisions with SHAP and partial dependence plots.",
    highlights: [
      "**Random Forest (RMSE 357)** and **XGBoost (RMSE 368)** cut error by about **50%** against the **Prophet (~780)** and **SARIMAX (~1285)** baselines.",
      "**Counterfactual causal analysis** estimated an average promo lift of **$39.96 per day (+0.90%)**, a positive but moderate effect.",
      "Engineered **lag, rolling-mean, promo-duration, and competition-age features** on roughly **1M rows** of daily sales (2013-2015).",
      "Explained predictions with **SHAP** and **partial dependence plots** so results are usable by business stakeholders.",
    ],
    tech: ["Python", "XGBoost", "Random Forest", "Prophet", "SHAP", "Causal Inference"],
    github: "https://github.com/VanshikaGurbani/rossmann_forecasting",
  },
  {
    name: "Enhancing Airbnb Revenue: Dynamic Price Modeling",
    tagline:
      "Pricing analytics pipeline that models Airbnb listing prices with regression to support data-driven pricing strategies for hosts.",
    description:
      "Queried and processed 10K+ Airbnb listings with SQL and Python, then built and evaluated regression models in R to predict prices, and presented the findings in interactive Tableau dashboards.",
    highlights: [
      "Improved **pricing prediction accuracy by 25%** over the baseline with regression models built and evaluated in **R**.",
      "Queried and processed **10K+ Airbnb listings** using **SQL and Python** for data cleaning, transformation, and exploratory analysis to identify revenue optimization strategies.",
      "Designed **interactive Tableau dashboards** to visualize trends in pricing, demand, and location-based performance for stakeholders.",
      "Delivered insights enabling **data-driven pricing strategies** for hosts and property managers.",
    ],
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
  { label: "Best NER Macro-F1", value: "0.93" },
  { label: "Students Taught", value: "200+" },
  { label: "Medical Sources", value: "6+" },
];

export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/experience/" },
];
