// ============================================================
// Portfolio Data - Edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Vanshika Gurbani",
  initials: "VG",
  title: "AI & Software Engineer",
  headline: "Engineering intelligence, from research to production",
  intro:
    "Hi, I'm Vanshika Gurbani! AI & Software Engineer, MS from Rutgers. I most recently built physics-informed ML systems and digital twins for pharmaceutical manufacturing at Rutgers' Particulate Systems Lab.",
  url: "https://vanshikagurbani.github.io",
  status: "Open to Opportunities",
  focusAreas: ["AI/ML", "Data Science", "Full-Stack"],
};

export const socialLinks = {
  github: "https://github.com/VanshikaGurbani",
  linkedin: "https://www.linkedin.com/in/vanshika-gurbani/",
  email: "vanshika.gurbani25@gmail.com",
};

export const aboutData = {
  tagline: "Building with purpose",
  bio: [
    "I'm 24 with an **MS in Statistics - Data Science** from Rutgers, and I most recently worked as an **AI/ML Engineer & Researcher** at the Particulate Systems Lab at Rutgers. I'm here to build intelligent systems that solve real problems, and **I'm just getting started**.",
    "I first thought about tech in 8th grade. My **aunt is a Software Engineer**, and one day I asked her what she actually does. She told me how she builds things that quietly make people's lives better, things most people don't even realize are happening behind the scenes. That stuck with me. I didn't know exactly how I'd get there, but I knew I wanted to **use technology to help people**, not in some abstract way, but meaningfully. That curiosity pulled me through **Computer Science** in my bachelor's, into **AI and Data Science** for my master's, and into work that spans **research, engineering, and product**. I've gone from fine-tuning **biomedical NLP models** to building **AI health assistants** to teaching **200+ students** foundational computing.",
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
      "Deployed **NutriPulse**, a production nutrition app with **dual-API food search** (CalorieNinjas + USDA, **380K+ foods**), **custom 5-dimensional relevance scoring** reducing match errors by **75%**, and Plotly analytics dashboards.",
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
      "AI-powered medical fact-checker that scores every claim in an AI answer against real clinical guidelines.",
    description:
      "AI-powered medical fact-checker that breaks any AI-generated answer into atomic claims, verifies each against real clinical guidelines (NICE, AHA), and returns a trust score, hallucination rate, and corrected source-backed rewrite.",
    highlights: [
      "**3-node LangGraph pipeline** (Claim Extractor, Retriever, Scorer) over **~844 guideline chunks** from NICE NG28, NG136, CG181, and AHA 2025 CPR; embeddings via **all-MiniLM-L6-v2** with cosine similarity search in **ChromaDB**.",
      "**Live web augmentation** via Tavily API fires when corpus similarity falls below 0.35, pulling from NIH, WHO, PubMed, Mayo Clinic, and NICE; results shown with a live web badge alongside guideline citations.",
      "Per-claim **SUPPORTED / UNSUPPORTED / CONTRADICTED verdicts** with rationale and page-level citations; aggregated into a **trust score (0-100)**, **hallucination rate %**, and **source coverage %**, all computed directly from pipeline output.",
      "**Corrected answer** rewrite grounded in retrieved passages with clickable citations; **multi-turn follow-up chat** persisted per evaluation and shareable by URL with no account required.",
      "Cut peak memory by **45%** by replacing PyTorch-based SentenceTransformers with **ONNX-quantized FastEmbed** embeddings (same all-MiniLM-L6-v2 model), so the backend fits Render's **512 MB** free tier.",
      "Full-stack: **FastAPI + SQLAlchemy** backend deployed across **Render** and **Neon serverless PostgreSQL**, **React 18 + TypeScript + Tailwind** frontend on **Vercel**, with health checks, automatic restarts, and push-to-deploy continuous deployment; evaluation history sidebar with rename and delete.",
    ],
    tech: [
      "LangGraph",
      "LLaMA 3.3 70B (Groq)",
      "Claude API (fallback)",
      "ChromaDB",
      "FastEmbed (ONNX)",
      "Tavily",
      "FastAPI",
      "Neon PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/VanshikaGurbani/SourceMD",
    live: "https://source-md.vercel.app",
  },
  {
    name: "AI DevOps Agent",
    tagline:
      "Autonomous DevOps agent that monitors live Vercel deployments, detects failures, and opens GitHub PRs with fixes. Built at Zero to Agent, a Cerebral Valley, Vercel, and Google DeepMind hackathon.",
    description:
      "Built an AI-powered DevOps agent that monitors production deployments in real time, scans for failures and security issues, and autonomously generates and opens GitHub pull requests with fixes. Integrated with Slack for operator-facing slash commands.",
    highlights: [
      "**Recursive detect-diagnose-fix loop** over live deployments: Vercel webhooks surface build failures, runtime errors, and security vulnerabilities in real time and trigger the fix pipeline without human intervention.",
      "**Autonomous PR generation** using the GitHub API: the agent diagnoses the root cause, writes a patch, and opens a pull request with a structured description ready for review.",
      "**Slack integration** with slash commands for rollbacks, incident queries, and system status checks, giving teams a natural language interface to the agent.",
      "Powered by **Gemini 3 Flash** via the Vercel AI SDK for diagnosis and code generation; **Supabase** for persisting incident history and deployment state.",
    ],
    tech: ["Next.js", "Vercel AI SDK", "Gemini 3 Flash", "Supabase", "GitHub API", "Slack"],
    github: "https://github.com/VanshikaGurbani/aidevopsagent",
  },
  {
    name: "BioNER: Multi-task Biomedical NER",
    tagline:
      "NLP system that tags genes, diseases, and chemicals in biomedical text, comparing single-task and multi-task BioBERT.",
    description:
      "M.S. thesis project. Fine-tuned BioBERT v1.1 as a token-level tagger on 5 biomedical benchmark corpora and compared single-task learning against a multi-task model with a shared encoder and per-dataset heads.",
    highlights: [
      "Benchmarked across **5 corpora** (BC2GM, BC4CHEMD, BC5CDR, JNLPBA, NCBI Disease) using **IOBES tagging**; fine-tuned for 3 epochs (learning rate 5e-5, batch size 8).",
      "Single-task **token-level macro-F1 across IOBES tags** (including the non-entity class): **0.93** BC4CHEMD, **0.91** NCBI Disease, **0.88** BC2GM, **0.86** BC5CDR, **0.71** JNLPBA; overall token accuracy of 0.93 to 0.99 is inflated by the majority non-entity class.",
      "The **multi-task model matched or slightly trailed** single-task (for example BC2GM macro-F1 0.86 vs 0.88, a gap of 0.00 to 0.02 across datasets), at higher GPU and training cost.",
      "Engineered preprocessing with **word-piece token alignment** to IOBES labels and **dynamic batching**, and handled heavy class imbalance (most tokens are non-entity).",
    ],
    tech: ["PyTorch", "BioBERT", "HuggingFace", "Multi-task Learning"],
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
      "NLP pipeline that turns messy job postings into structured skills, salary, and remote-work insights.",
    description:
      "Extracted skills, salary ranges, and remote availability from real-world job postings, then clustered jobs by skill similarity with sentence embeddings and visualized the results.",
    highlights: [
      "Worked from a **123,849-record** US job postings dataset, prototyping the pipeline on a **200-row sample**.",
      "**Sentence embeddings (all-MiniLM-L6-v2)** with **KMeans** clustering and **UMAP** projections to group jobs by skill profile.",
      "Surfaced top in-demand skills, locations, and remote vs. on-site splits; **higher salaries aligned with cloud and AI skill clusters**.",
      "Organized as five notebooks from **EDA and cleaning** through **embedding, clustering, and visualization**.",
    ],
    tech: ["Python", "Sentence-Transformers", "scikit-learn", "UMAP", "NLP", "pandas"],
    github: "https://github.com/VanshikaGurbani/Job_Postings_Insights",
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
    degree: "B.E. in Computer Science",
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
