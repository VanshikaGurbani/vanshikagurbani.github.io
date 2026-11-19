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
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  figures?: ProjectFigure[];
}

export const projects: Project[] = [
  {
    name: "SourceMD",
    tagline:
      "AI chatbots can sound sure while getting medical facts wrong, so SourceMD checks every claim in an AI answer against real clinical guidelines and gives the answer a trust score from 0 to 100.",
    description:
      "Paste a medical question and an AI's answer. SourceMD splits the answer into single factual claims, looks each one up in four official guideline documents (from NICE, the UK's national health guidance body, and the American Heart Association), and marks it supported, unsupported (the guidelines say nothing about it) or contradicted. It then writes a corrected version of the answer with sources you can click.",
    highlights: [
      "**How it checks:** A 3-step pipeline built with **LangGraph** (a tool for chaining AI steps): pull out each claim, retrieve the closest guideline passages, then have an AI model (Groq's **gpt-oss-120b**) judge each claim against them.",
      "**Searching by meaning:** Retrieval searches **844 guideline passages** by meaning rather than exact words, using **ChromaDB**, a database built for that kind of search.",
      "**Web backup:** When the guidelines have nothing close to a claim, it searches trusted medical sites (NIH, WHO, PubMed and others) through the **Tavily** search API and labels those sources as live web.",
      "**Trust score:** Each verdict is weighted by how confident the AI is and combined into a score from **0 to 100**, shown next to the corrected answer and page-level citations.",
      "**Flagged-claim rate:** The share of claims not marked supported is a warning signal, not an accuracy score.",
      "**Looking things up helped:** On **57 held-out test claims** (claims I did not use while tuning), the verdict was right **83%** of the time when the AI could consult the guidelines.",
      "**Without the guidelines:** When the AI judged from memory alone, the verdict was right **61%** of the time on the same 57 claims.",
      "**Ranking answers:** The trust score put fully supported answers above flawed ones with a score of **0.98** across 20 test answers, on a scale where 1.0 would be a perfect ranking.",
      "**Live web search:** Adding live web search to every claim scored **81%**, lower than guideline lookup alone.",
      "**Hybrid search left off:** Mixing keyword and meaning search found only **65%** of contradicted claims, against 76% for meaning search alone, so I left it off.",
      "**Quote check:** When the AI quotes a guideline, the quote really appears in the passage it cites **95%** of the time.",
      "**Lighter to run:** Swapping the embedding step (the part that turns text into numbers so it can be searched by meaning) from PyTorch to **ONNX**, a leaner way of running the model, via **FastEmbed** cut peak memory **53%**.",
      "**Free hosting:** Memory fell from 526 MB to 247 MB in a Linux container, so the backend runs on Render's free 512 MB tier.",
      "**Automatic checks:** **90 automated tests**, lint (an automatic style check), type checks and a build run on every change in **GitHub Actions**.",
      "**The stack:** **FastAPI**, **Neon PostgreSQL** and a **React + TypeScript** frontend on Vercel.",
      "**Small test set:** The test set is small, so differences of a few percent are noise.",
      "**Claims I wrote:** I wrote the claims from the guideline text itself, so they are cleaner than real chatbot output and the accuracy is probably optimistic.",
      "**Labels:** The labels were cross-checked by AI, not reviewed by a clinician.",
      "**Scope:** It checks against four guidelines only, and pulling claims out of an answer was not part of this test.",
      "**Slow first request:** On the live demo, the first request after idle can take 30 to 60 seconds while the free server wakes up.",
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
    name: "H&M Fashion Recommendation System",
    tagline:
      "The \"you might also like\" row of an online clothing shop: for each shopper it picks the 12 items they are most likely to buy next week out of more than 100,000 H&M products, and explains each pick in plain words.",
    description:
      "An independent project built on H&M purchase data from a Kaggle competition (31.8 million purchases, 105,000 products, 1.37 million customers). A fast first step shortlists items for each shopper, and a learned ranking model then sorts the shortlist. I measured it by replaying real shopping weeks it had never seen: on the score described below it is 22% better than the strongest simple rule, and the gain is unlikely to be luck. It has a live demo app and an API, and it is not made by or affiliated with H&M.",
    highlights: [
      "**Two steps:** First a shortlist, then a ranking. Six quick \"scouts\" build the shortlist, then a learned ranking model sorts it and puts the likeliest 12 first.",
      "**The scouts:** They look at what a shopper bought before, what is trending this week, what people of the same age buy, items often bought together, items liked by shoppers with similar taste (a method called **ALS**), and a small neural network that matches the style of recent purchases.",
      "**Shortlist size:** The scouts propose an average of **163** items per shopper.",
      "**The ranker:** A learned ranking model (**LightGBM**, a fast tree-based model trained to sort lists) reads **44** clues per shopper and item, such as how often the shopper buys this kind of product, how popular the item is and how its price compares with what they usually spend.",
      "**How it was tested:** It is a replay of real life: the system only sees purchases up to a certain day, then its 12 suggestions are compared with what shoppers actually bought in the following 7 days.",
      "**No peeking:** The last 7 days are the test, the 7 days before train the ranking model, older purchases are history, and automated tests check that nothing from the future leaks in.",
      "**Who it was measured on:** **5,726** shoppers from a random 10% sample of customers.",
      "**The score:** It rewards putting the items a shopper really bought near the top of the 12 suggestions, on a scale from 0 to 1. Scores look small because shoppers buy only a few of 100,000+ products in a week, so what matters is the comparison between systems.",
      "**Result:** The full system scored **0.0333** against 0.0273 for the strongest simple rule, \"suggest what they bought before\": **22%** better.",
      "**Not luck:** The gain is statistically reliable: the range it very likely falls in (a 95% confidence range) does not include zero.",
      "**Against a popularity list:** The full system scores **4.1 times** the most-popular list (0.0081).",
      "**Other simple rules:** ALS scored 0.0092, \"popular for your age\" 0.0082 and \"often bought together\" 0.0069, all far lower.",
      "**Item clues matter:** Removing the item clues cost **0.0029** of score, reliably.",
      "**Shopper-and-item clues matter:** Removing them cost **0.0021** of score, reliably.",
      "**Product text added nothing:** A text-understanding model that reads product descriptions changed the score by **0.0003**, well inside the noise.",
      "**The ceiling:** The shortlist finds only **16.47%** of what shoppers go on to buy, which caps what the ranker can do, so better scouts are the biggest opportunity.",
      "**A variety slider:** The demo lets you trade accuracy for variety using a re-ordering method called **MMR**. At the strongest setting I tested, the score drops from 0.0333 to **0.0307**.",
      "**What variety gains:** At that setting, category variety rises from 0.63 to **0.69**.",
      "**Reasons shown:** Every suggestion carries a one-line reason built from the purchase records (for example \"you bought it 2 times, last 14 days ago\"), never invented.",
      "**Fast:** An **API** (a way for other programs to request recommendations) returns one fresh recommendation in **22 milliseconds** (median of single requests on one machine).",
      "**Built as a working product:** A live **Streamlit** demo (a web app), a **Docker** image (a packaged copy that runs anywhere), **48** automated tests and automatic checks on every change.",
      "**Demo data:** H&M's data cannot be shared publicly, so the live demo runs on made-up sample shoppers while its charts and scores come from the real-data measurements.",
      "**Sample only:** Results come from a 10% sample of customers, so they cannot be compared with the public Kaggle leaderboard.",
      "**Past purchases only:** The test replays past purchases, so it shows how well the system predicts what shoppers bought, not what they would have bought if shown something else.",
      "**New shoppers left out:** Shoppers with no earlier purchases are left out of the headline score.",
      "**Light tuning:** The ranking model was lightly tuned on one validation week and trained once.",
    ],
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
    highlights: [
      "**Downloaded and checked:** It downloads **44** CDC files and checks each against a fingerprint (a SHA-256 hash) so a changed file stops the run.",
      "**Cleaned in a database:** The files are loaded into **PostgreSQL** and cleaned and joined with plain SQL, where survey codes for \"refused\" or \"don't know\" become blanks.",
      "**Data checks:** **42** automated data-quality checks run, and any failure stops everything.",
      "**What the app asks:** Age, sex, body measurements such as BMI and waist, blood pressure, cholesterol, blood sugar, smoking, diabetes and drinking.",
      "**What the app returns:** An estimated chance, framed as a statistic about survey respondents who answered like you and not a prediction about you, plus whether a demo screening rule would flag the answers.",
      "**The question:** From those answers, can a model tell who said a doctor had ever told them they had coronary heart disease, angina or a heart attack? Medication questions, heart failure and stroke are kept out so the answer cannot leak in.",
      "**The test group:** In the 2017 to 2018 test group, **8.3%** said yes (457 of 5,534).",
      "**How it was tested:** The models learned from 2011 to 2014, were tuned on 2015 to 2016, and were scored once on 2017 to 2018, survey years they had never seen. All tuning, model choice and the decision cut-off used only the earlier data.",
      "**How good is the ranking?** Pick one person who said yes and one who said no. The model gives the higher risk to the person who said yes in **82.9%** of such pairs (this measure is called ROC-AUC; a coin flip would score 50%).",
      "**Age and sex alone:** A model that knows only age and sex scores **79.5%** on the same test, so the other measurements add a real but modest gain.",
      "**Three models tied:** Logistic regression scored 82.9%, random forest 82.9% and XGBoost 83.0%, which is within the margin of error, so the data cannot show a winner.",
      "**Simplest kept:** The simplest model, logistic regression, is used because it is easiest to explain.",
      "**Catching cases:** The cut-off was set on the earlier data to catch at least 90% of cases. On the latest survey round it caught **91.2%** of the people who reported heart disease.",
      "**The cost:** To do that it flagged **47%** of all adults.",
      "**False alarms:** That is **5.3** false alarms for every case found.",
      "**Who gets flagged:** It gets there mostly by flagging almost every older adult: **94%** of those 60 and over.",
      "**Self-reported labels:** The answers are self-reported by survey respondents, not a measured diagnosis.",
      "**Not for patients:** The data covers the U.S. household population, so nothing transfers to hospital patients.",
      "**Age dominates:** Age carries most of the signal.",
      "**One test round:** There is only one test round with few cases, so the margins of error are wide.",
      "**No re-weighting:** Answers were not re-weighted to match the U.S. population.",
      "**Educational demo:** It is not medical advice, and it collects nothing.",
    ],
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
    highlights: [
      "**Messy records:** Some days appear twice, some rows are reversals of earlier mistakes and some are fees rather than products.",
      "**Cleaning in the open:** Each rule is a **SQL** step (SQL is the standard language for asking databases questions) run in order inside **DuckDB** (a database that runs on a laptop), and each step logs the rows it removed.",
      "**What was kept:** **996,172** of the **1,067,371** lines (93.3%) were kept after cleaning.",
      "**Revenue:** Net revenue (sales minus returns) was **£18.49M** over 24 months.",
      "**Returns:** Returns were **2.9%** of sales.",
      "**Year on year:** The second year was **1.9%** higher than the first (£9.16M to £9.33M).",
      "**What drove the change:** Among customers with an ID, orders per customer fell from 4.29 to **4.11**, the biggest driver.",
      "**Busy season:** September to November brings **37.5%** of the second year's revenue.",
      "**A few customers matter a lot:** The top 10% of customers hold **63.2%** of revenue.",
      "**Bought once:** **28.3%** of customers bought only once.",
      "**Coming back:** **21.0%** of a new cohort (customers grouped by the month of their first purchase) buys again the next month.",
      "**One month left out:** The first month (December 2009) is left out because it mixes new customers with people who were already buying before the data starts.",
      "**Six customer groups:** I sorted customers by how recently, how often and how much they buy (a method called **RFM**).",
      "**Measured, not guessed:** Rather than pick an arbitrary cutoff, I rebuilt the groups at five past dates and measured the share of each that did not buy in the following 3 months.",
      "**Who goes quiet:** In the winter quarter, **65.5%** of \"At risk, high frequency\" customers did not buy again, against 33.5% of Champions.",
      "**The decision:** Target Champions, Loyal and At risk high frequency: **1,941 customers**.",
      "**What is at stake:** They hold **75%** of the £905k of revenue at risk next quarter (an estimate from past patterns).",
      "**A scenario, not a result:** If a campaign lowered their lapse rate by 5% to 20%, it would protect £26k to £136k of revenue. That range is an assumption, because the data has no campaign history.",
      "**Tested:** **88 tests** check that revenue adds up across every layer, that keys are unique and that the cleaning matches an independent version written another way (with the pandas library).",
      "**Tests in CI:** Some tests need the full dataset and are skipped in **GitHub Actions**, which runs on a small synthetic sample.",
      "**Dashboard and exports:** The results appear in a **Streamlit** dashboard, and the tables are exported as CSV for Tableau or Power BI.",
      "**Not profit:** The data has no costs or margins, so revenue is not profit.",
      "**Assumed effect:** The campaign effect is assumed; a hold-out test is how you would measure it.",
      "**One winter:** Winter lapse rates come from one winter.",
      "**Guest checkouts:** Guest checkouts (**13.3%** of revenue) have no customer ID, so they sit outside cohorts and segments.",
      "**Returns not linked:** Returns cannot be linked to the original sale.",
    ],
    figures: [
      {
        src: "/images/retail-sql-dashboard/revenue_trend.png",
        alt: "Net revenue per month with a three-month average; September to November is shaded.",
        caption:
          "Net revenue per month. The shaded September to November stretch is the busy season, 37.5% of the second year's revenue.",
        width: 1485,
        height: 675,
      },
      {
        src: "/images/retail-sql-dashboard/cohort_heatmap.png",
        alt: "Heatmap of the share of each monthly cohort of new customers that buys again, by months since first purchase.",
        caption:
          "Customers grouped by the month of their first purchase, and the share of each group that buys again in later months. 21.0% come back the next month.",
        width: 1392,
        height: 915,
      },
      {
        src: "/images/retail-sql-dashboard/rfm_segments.png",
        alt: "Customer segments by share of customers, share of revenue and winter lapse rate.",
        caption:
          "Six customer groups: how many customers each holds, how much revenue, and how often it went quiet the next quarter. Champions are a small group with two thirds of the revenue.",
        width: 1492,
        height: 699,
      },
    ],
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
    highlights: [
      "**How the labelling works:** Each word gets a tag such as \"start of a chemical\" or \"not an entity\".",
      "**Rare words:** BioBERT splits rare words into smaller pieces, so the code lines the tags up with those pieces.",
      "**Long sentences:** They are split into windows so that no word is cut off.",
      "**Five datasets:** BC2GM (genes), BC4CHEMD (chemicals), BC5CDR (chemicals and diseases), JNLPBA (proteins, DNA, RNA and cell types) and NCBI Disease (diseases).",
      "**How it is scored:** A name counts as correct only if both its type and its exact start and end are right.",
      "**The score:** The score, called F1, rewards finding the right names without flagging wrong ones, and 100 is perfect.",
      "**Fair testing:** The best training round is picked on a separate validation split, the test split is scored once, and every setup was trained 3 times from different random starting points and averaged.",
      "**Average:** With separate models, the average F1 across the five datasets was **85.4**.",
      "**Best dataset:** BC4CHEMD scored **90.3**.",
      "**Hardest dataset:** JNLPBA scored **75.4**, with cell lines the weakest name type.",
      "**One shared model:** One BioBERT with a small output layer per dataset replaces five models, which is **80%** fewer.",
      "**Its scores:** It averaged **85.13** and 85.18 (two ways of choosing which dataset to train on at each step), against 85.38 for separate models.",
      "**The verdict:** So one model can do the work of five at almost no accuracy cost, but it does not do better.",
      "**By dataset:** The shared model was slightly lower on BC2GM, BC4CHEMD and NCBI Disease and level on JNLPBA and BC5CDR.",
      "**Earlier version:** My original thesis notebooks reported per-word scores of 0.71 to 0.93, but their \"multi-task\" run had trained five separate models and the test sets were used to pick the best round, so those numbers are not comparable.",
      "**The rebuild:** A code audit found this and I rebuilt the project with a test suite that runs on a CPU in about 7 seconds.",
      "**Rough spread:** Three runs give a rough spread, not a firm margin of error, so gaps smaller than the run-to-run variation count as ties.",
      "**No tuning:** Every model used the same training settings with no tuning.",
      "**JNLPBA re-joined:** About 20% of JNLPBA sentences were cut in the middle of a name, so I re-joined them, which means its scores differ from papers that use the raw files.",
      "**Overlap:** A few test sentences also appear in training.",
      "**Scope:** I did not test training on one dataset and testing on another, and everything is English research abstracts.",
    ],
    tech: ["PyTorch", "BioBERT", "HuggingFace Transformers", "seqeval", "Multi-task Learning"],
    github: "https://github.com/VanshikaGurbani/Multi-BIONER",
  },
  {
    name: "Experimentation Toolkit",
    tagline:
      "Answers the question every online business asks about a change: did it really work? It checks that a controlled experiment (an A/B test) is trustworthy, measures the true effect and recommends whether to ship.",
    description:
      "An independent project: a tested Python toolkit for A/B tests, run from start to finish on a public Criteo ad experiment with 13,979,592 users, where 85% were shown a campaign and 15% were held back for comparison. The outcome is whether a user visited the advertiser's website. It ends in a one-page decision memo and a live sample-size calculator you can try. It is not affiliated with Criteo.",
    highlights: [
      "**What it does:** The toolkit packages the steps of a careful A/B test: how many users you need, whether the groups were split fairly, how big the effect really is (with a margin of error), a way to get sharper answers from the same data, a ship or do-not-ship rule, and a model that finds which users are worth targeting.",
      "**The split matched the design:** The group sizes matched the plan.",
      "**A hidden mismatch:** Even so, a model could guess which group a user was in slightly better than a coin flip (**51.1%**, where 50% would be a perfectly fair split), so the two groups were slightly mismatched.",
      "**The simple comparison:** It would have said the ad made visits **27.1%** more likely.",
      "**The corrected answer:** After correcting for the mismatch, the ad made visits **18.6%** more likely.",
      "**The range:** The range the true effect very likely falls in is 17.6% to **19.6%** more visits.",
      "**Visit rates:** **4.04%** of users visited the advertiser's site without the ad and 4.78% with it.",
      "**The decision:** Ship.",
      "**The bar is an assumption:** The data has no cost or revenue, so the minimum worthwhile lift is a placeholder of **12.4%** more visits.",
      "**The bar is cleared:** The corrected result, 17.6% to 19.6% more visits, is above the placeholder across its whole range.",
      "**If you need 6.2% more visits:** Ship.",
      "**If you need 12.4% more visits:** Ship.",
      "**If you need 18.6% more visits:** Run longer.",
      "**If you need 24.8% more visits:** Do not ship.",
      "**Less random noise:** Using what is already known about each user before the test (such as past behaviour) removes some random noise.",
      "**The simple version:** The simple version (called CUPED) cut the noise in the result by **25.0%**.",
      "**The machine-learning version:** The machine-learning version (CUPAC) cut it by **30.5%**, so the same precision needs 30.5% fewer users.",
      "**A/A test:** Comparing two random halves of the same group, where there is no real difference, falsely flagged a difference **4.7%** of the time, against 5% expected.",
      "**Sample-size check:** The calculator predicted the test would detect a real effect 80% of the time at its planned size, and it did so **80.45%** of the time on real data.",
      "**Unit tests:** They compare each statistic with a textbook value, a second library or a simulation.",
      "**Targeting:** Showing the ad only to the 10% of users a model picks as most likely to respond would capture **59.4%** of the extra visits.",
      "**Compared with the usual ranking:** Ranking users by how likely they are to visit anyway captures **50.8%**.",
      "**A second design:** A second model design did not beat the simple ranking.",
      "**Not everyone saw the ad:** Only **3.6%** of treated users actually saw it, so this measures the effect of being assigned to the campaign, not of seeing the ad.",
      "**Assumed bar:** The bar for shipping is an assumption.",
      "**One experiment:** It is one experiment over one period, with no checks for the effect wearing off or fading.",
      "**One run:** The notebook outputs come from one run.",
    ],
    figures: [
      {
        src: "/images/experimentation-toolkit/uplift_qini_curves.png",
        alt: "Targeting curves comparing a model that predicts who benefits with a model that predicts who is likely to visit anyway.",
        caption:
          "Treating the highest-ranked users first captures most of the extra visits. The left chart shows how fast the gains build up, and the right chart shows how little the targeting models beat simply ranking by likelihood to visit.",
        width: 1546,
        height: 558,
      },
    ],
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
    highlights: [
      "**One model for every store:** One model (**LightGBM**, a fast tree-based forecasting model) learns from all stores at once instead of fitting one model per store.",
      "**What it learns from:** Each store's sales history (lagged by at least six weeks so nothing from the future leaks in), the planned promotion calendar, holidays and open or closed days, which are known in advance.",
      "**Explaining forecasts:** A tool called **SHAP** explains what drives each forecast.",
      "**How it was tested:** Three rolling tests: fit on everything before a start date, forecast the next 42 days, then repeat at a later start date.",
      "**Fixed in advance:** The start dates (August 2014, December 2014 covering Christmas, and June 2015) were fixed before any model was run.",
      "**The error:** Error is the total miss divided by total sales (called WAPE). The forecast is off by **9.2%**.",
      "**The comparison:** The strongest simple rule, the average of the same weekday over the last four weeks, is off by **18.9%**.",
      "**Half the error:** The forecast cuts the error by **51%** compared with that rule.",
      "**Random Forest:** A Random Forest scored **10.4%**.",
      "**Prophet:** On a 100-store sample, Prophet (a popular forecasting library) fitted separately per store scored **17.9%**, against 9.4% for LightGBM on the same store-days.",
      "**Prophet with extra information:** With promo and holiday information Prophet scored **12.5%**.",
      "**Ranges:** Every forecast comes with a range meant to contain the actual sales 90% of the time.",
      "**Range held:** In the tests, actual sales landed inside it **86.4%** of the time overall, a little under the target.",
      "**Christmas:** In the Christmas window the range held only **76.7%** of the time, because sales behave differently from the period used to set the ranges.",
      "**Where it struggles:** Store-days in the 14 days after a store reopens from a closure of two weeks or more are 1.3% of the data but have **16.4%** error, against 9.2% for the rest.",
      "**Coarser planning is steadier:** One store-day has 9.3% error, one store-week 5.7%, and the whole chain by week **2.8%**.",
      "**One chain, one period:** The data covers one chain and one period (January 2013 to July 2015).",
      "**Few test windows:** Three test windows is a small number.",
      "**Known in advance:** The promo calendar, holidays and opening days are assumed known in advance.",
      "**Settings fixed up front:** Settings were fixed up front rather than tuned.",
      "**Prophet on a sample:** Prophet was run on a random sample of stores, not all of them.",
    ],
    tech: ["Python", "LightGBM", "Random Forest", "Prophet", "SHAP", "Conformal Prediction"],
    github: "https://github.com/VanshikaGurbani/rossmann_forecasting",
  },
  {
    name: "Job Postings Insights",
    tagline:
      "A study of 123,782 LinkedIn job postings that shows which skills employers ask for, what the jobs pay, and which companies have sponsored H-1B work visas before, built to help job seekers decide what to learn and where to apply.",
    description:
      "Job postings are messy free text, so the first step is turning each one into structured facts: skills, pay and whether the job is remote. The project then groups postings with similar skill lists, trains a model to estimate pay, and matches company names to public US government records (USCIS) of approved H-1B petitions, the work visa many employers use for foreign professionals. Everything is explorable in a live web app.",
    highlights: [
      "**Reading the postings:** Rules written for this project pull out skills, pay (converted to a yearly US dollar figure) and remote, hybrid or on-site status.",
      "**Fixing the original bug:** The original version matched skills by simple text search and tagged **100%** of postings with the programming language \"R\"; the new rules do this for **0.5%**.",
      "**One command:** One command rebuilds every result from the raw file.",
      "**Automatic checks:** Automatic checks run in **GitHub Actions**.",
      "**Skill detection 36% better:** On 40 postings with reference answers, the new rules scored **0.64** out of 1 against 0.47 for the original method on the same shortened skill list (the score, called F1, rewards finding real skills without adding false ones).",
      "**On the full skill list:** The new rules scored **0.73**.",
      "**A small free AI model:** Qwen2.5-1.5B running on a laptop processor scored lower, **0.42**.",
      "**Pay estimates 43% closer:** Using the **50,700** postings that state pay, a ridge regression model (a simple, stable way of fitting a line to data) was off by $24,613 on average, against $43,075 for guessing the overall median salary.",
      "**Against a smarter guess:** The model has **30%** less error than the median for the same role and experience level ($35,198).",
      "**Tested on unseen titles:** It was tested on job titles it had never seen.",
      "**A more complex model:** A gradient boosting model did the same.",
      "**20 stable skill groups:** The **75,576** postings with at least two hard skills are grouped by skill overlap into 20 groups (clusters).",
      "**An example group:** One group is led by Python, SQL and Java, and **59%** of its titles are data, software or AI roles.",
      "**Stable groups:** Re-running with five different random starting points gave nearly the same groups (agreement **0.80** out of 1).",
      "**More distinct than before:** The groups are more clearly separated than the original method's, with a standard separation score of **0.27** against 0.10 (the two are not strictly comparable).",
      "**H-1B employer flags:** Company names are matched to public USCIS filings for 2021 to 2023, and **42.6%** of postings matched a company.",
      "**Spot check:** A spot check of 40 matches found the same company every time.",
      "**What a match means:** A match shows a company has sponsored before, not that a particular job will.",
      "**TypeScript:** After adjusting for role, seniority and work arrangement, postings that list TypeScript are associated with **16%** higher pay.",
      "**Other skills:** Generative AI (15%), Machine Learning (13%) and Go (12%) are also associated with higher pay.",
      "**Remote pay:** Remote pay is not clearly different: it is 6.3% higher, but the range runs from 2.7% lower to 21.2% higher.",
      "**Association, not proof:** These findings come from the **3,428** data, AI and software postings that state a salary, and they show association, not proof that learning a skill raises pay.",
      "**Small test set:** The 40-posting test set is small and was labelled in a single pass, so the scores have wide margins of error.",
      "**Sponsorship wording:** The rule that spots sponsorship-friendly wording was right **64%** of the time, so treat it as a rough filter.",
      "**Short window:** The data covers about three weeks of spring 2024, so it says nothing about trends over time.",
      "**Not advice:** It is not legal or immigration advice.",
      "**Slow first load:** The free live app sleeps when idle, so the first load can take a few seconds.",
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
    name: "AI DevOps Agent",
    tagline:
      "A hackathon team project: an AI assistant for the engineers who keep websites running. It watches deployments on Vercel, flags failures, and on request finds the likely cause and opens a draft fix for a person to review.",
    description:
      "A deployment is one release of a website to the internet, and Vercel is the service that hosts it. A daily check records failed deployments and unreachable sites as incidents and alerts the team in Slack. When someone asks, in Slack or the dashboard chat, the agent (powered by Google's Gemini 3 Flash model) works out the likely cause and opens a draft pull request, a proposed code change that a person must approve before it goes live.",
    highlights: [
      "**Team project:** I co-built it with Ronit Gandhi at **Zero to Agent**, the Vercel x Google DeepMind hackathon, in 8 hours.",
      "**My later work:** The safety rules, tests and bug fixes below are work I added afterwards.",
      "**Daily check:** A scheduled job (a task that runs on a timer) runs once a day, finds new failed deployments and websites that stopped responding, records each as an incident and posts one Slack alert per failure.",
      "**Investigating:** Asked to investigate, the agent reads logs and code through the Vercel and GitHub APIs and opens a pull request with a fix.",
      "**No silent changes:** The daily job alone never changes any code.",
      "**Slack commands:** Plain-English **/devops** commands roll a project back to its last working version, list open incidents, check deployment status or compare settings between two projects.",
      "**History:** **Supabase**, a hosted database, keeps the incident history, and a weekly summary posts to Slack every Saturday.",
      "**Drafts only:** Its pull requests open as drafts so a person has to approve them.",
      "**Guardrails on files:** It cannot commit straight to the main branch (the live copy of the code) and cannot edit secret or CI files.",
      "**Password check:** It refuses a change that looks like it contains a password or key (a pattern check, not a guarantee).",
      "**Dry-run mode:** A dry-run mode reports what it would do without doing it.",
      "**Tests:** I added automated tests for the safety rules, the scheduled-job security and the monitor.",
      "**Checks on every change:** A GitHub Actions workflow runs a type check, the tests and a build.",
      "**Bug fixed: rejected incidents:** I fixed uptime incidents that the database was rejecting.",
      "**Bug fixed: open endpoint:** I fixed a scheduled-job web address that accepted requests when its secret key was not set.",
      "**Bug fixed: leaked secrets:** I fixed a deploy script that printed secret values to the terminal.",
      "**No measured accuracy:** The repository has no measured numbers for how often the agent's fixes are correct, so I do not quote any.",
      "**Daily only:** The monitor runs once a day because Vercel's free plan only allows daily scheduled jobs.",
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
    name: "Growth Mindset Causal Analysis",
    tagline:
      "Does a growth mindset program, which teaches students that ability grows with effort, actually improve achievement, or do the students who join just differ to begin with? A study of cause and effect, not just correlation.",
    description:
      "I used several methods that estimate the effect of a program rather than a simple correlation, on 10,391 synthetic (made-up but realistic) student records modeled on the National Study of Learning Mindsets.",
    highlights: [
      "**The data:** **10,391 synthetic student records** from 76 schools, modeled on the National Study of Learning Mindsets, with a continuous achievement score as the outcome.",
      "**Who was in the program:** **32.6%** of the students.",
      "**Seven ways of estimating:** I used seven specifications in four method families.",
      "**Regression:** Regression adjustment accounts for differences between students.",
      "**IPW:** IPW re-weights students so the two groups look alike.",
      "**T-Learner and S-Learner:** These use models that predict achievement with and without the program (Random Forest and XGBoost).",
      "**Causal Forest:** Causal Forest (EconML) is a tree method built to estimate effects.",
      "**The answer:** In every specification the program raised achievement by **0.41 to 0.42** outcome units on average (the average treatment effect, or ATE).",
      "**Regression and IPW range:** Their 95% confidence range, the span the true effect very likely falls in, was **0.39 to 0.44**.",
      "**Causal Forest range:** Causal Forest gave 0.42 with a wider range of **0.20 to 0.63**.",
      "**Why it is reassuring:** That the answer barely depends on the method is a good sign.",
      "**Comparable groups:** I checked that the two groups were comparable using propensity scores (each student's chance of joining the program), overlap checks, and a balance plot.",
      "**Adjustment mattered:** Adjusting moved the raw difference of 0.46 down to **0.41**.",
      "**Poster:** I presented the results on an academic research poster.",
    ],
    tech: ["Python", "Causal Inference", "EconML", "Scikit-learn", "XGBoost"],
    github: "https://github.com/VanshikaGurbani/growth-mindset-intervention",
  },
  {
    name: "True Image Caption Generator",
    tagline:
      "Teaches a computer to describe a photo in a sentence, and compares two designs for doing it on Flickr8k, a public set of photos with human-written captions.",
    description:
      "Undergraduate thesis project that writes a caption for an image. I built two designs in TensorFlow/Keras and compared their captions: a **CNN** (a network that reads images) feeding an **LSTM** (a network that writes text one word at a time), and an InceptionV3 + **Transformer** design (a newer way of writing text that looks at the whole image and sentence at once).",
    highlights: [
      "**Two designs:** A **CNN + LSTM** model (VGG16 / Xception image features) and an **InceptionV3 + Transformer** encoder-decoder.",
      "**Attention:** The Transformer uses multi-head attention, the part that lets it focus on different image regions.",
      "**The data:** Both were trained on **Flickr8k** image-caption pairs in **TensorFlow/Keras**.",
      "**The pipeline:** It covers text preparation, image feature extraction and caption generation.",
      "**The score:** I compared captions with **BLEU**, a 0 to 1 score for how closely a caption matches the human-written ones.",
      "**Strong examples:** Per-image scores were **0.71 to 0.73** on strong examples.",
      "**Failures:** Per-image scores were near **0** on failures.",
      "**The finding:** The Transformer produced more accurate captions.",
      "**Thesis report:** The work is documented in a full undergraduate thesis report.",
      "**Caption tool:** It includes a command-line caption generator.",
    ],
    tech: ["TensorFlow", "Keras", "CNN", "LSTM", "Transformers", "InceptionV3"],
    github: "https://github.com/VanshikaGurbani/Image-Caption",
  },
  {
    name: "Enhancing Airbnb Revenue: Dynamic Price Modeling",
    tagline:
      "Predicts what an Airbnb listing should charge from its features, to help hosts set prices with data.",
    description:
      "Queried and processed 10K+ Airbnb listings with SQL and Python, then built and evaluated regression models (a statistical method that predicts a number, here a price, from other facts about the listing) in R to predict prices, and presented the findings in interactive Tableau dashboards.",
    highlights: [
      "**More accurate prices:** Pricing prediction accuracy improved **25%** over the baseline with regression models built and evaluated in **R**.",
      "**The data:** I queried and processed **10K+ Airbnb listings** using **SQL and Python**.",
      "**Exploring:** Data cleaning, transformation and exploratory analysis (looking for patterns) identified ways to raise revenue.",
      "**Dashboards:** I designed interactive Tableau dashboards to visualize trends in pricing, demand and location-based performance for stakeholders.",
      "**Who it helps:** The insights support data-driven pricing strategies for hosts and property managers.",
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
