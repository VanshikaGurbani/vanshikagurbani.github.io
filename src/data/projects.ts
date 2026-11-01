import { projects, type Project } from "./portfolio";

// A column in a pipeline diagram: one node, or two stacked (branching) nodes.
export type FlowNode = string | [string, string];

export interface ProjectMeta {
  slug: string;
  shortName: string;
  category: string;
  metric: string;
  flow: FlowNode[];
  active: number;
  stats: { value: string; label: string }[];
}

export type ProjectView = Project & ProjectMeta;

const metaByName: Record<string, ProjectMeta> = {
  SourceMD: {
    slug: "sourcemd",
    shortName: "SourceMD",
    category: "Agentic AI",
    metric: "83% verdicts right with guideline lookup (61% without) · 53% lower memory · 90 tests",
    flow: ["ANSWER", "CLAIMS", ["GUIDELINES", "WEB"], "TRUST"],
    active: 2,
    stats: [
      { value: "83%", label: "Verdicts right with guideline lookup, vs 61% from memory (57 test claims)" },
      { value: "53%", label: "Lower peak memory (526 to 247 MB)" },
      { value: "~844", label: "Guideline passages searched" },
      { value: "0-100", label: "Trust score per answer" },
    ],
  },
  "AI DevOps Agent": {
    slug: "ai-devops-agent",
    shortName: "AI DevOps Agent",
    category: "Agentic AI",
    metric: "Hackathon team project · built in 8 hours · draft PRs only · Slack rollbacks",
    flow: ["DEPLOYS", "DETECT", "DIAGNOSE", "DRAFT FIX"],
    active: 2,
    stats: [
      { value: "8 hrs", label: "Hackathon build time, team project" },
      { value: "Draft", label: "Every fix opens as a draft PR a person must approve" },
      { value: "Daily", label: "Failure and uptime checks, with Slack alerts" },
      { value: "CI", label: "Tests, type check and build on every change" },
    ],
  },
  "BioNER: Multi-task Biomedical NER": {
    slug: "bioner",
    shortName: "BioNER",
    category: "AI Research",
    metric: "5 datasets · per-word macro-F1 0.71 to 0.93 · rebuilt with a real shared-encoder model",
    flow: ["TEXT", "BIOBERT", ["SINGLE", "MULTI"], "ENTITIES"],
    active: 2,
    stats: [
      { value: "5", label: "Biomedical datasets" },
      { value: "0.93", label: "Best macro-F1 (BC4CHEMD, chemicals)" },
      { value: "0.71", label: "Lowest macro-F1 (JNLPBA, hardest dataset)" },
      { value: "1 encoder", label: "Shared by all five datasets in the rebuild (the original run used five separate models)" },
    ],
  },
  "True Image Caption Generator": {
    slug: "image-captioning",
    shortName: "Image Captioning",
    category: "Computer Vision",
    metric: "Flickr8k · CNN + LSTM vs CNN + Transformer · BLEU compared",
    flow: ["IMAGE", "CNN", ["LSTM", "TRANSF"], "CAPTION"],
    active: 3,
    stats: [
      { value: "2", label: "Captioning pipelines built" },
      { value: "0.73", label: "Top per-image BLEU on strong examples" },
      { value: "Flickr8k", label: "Training dataset" },
    ],
  },
  "Growth Mindset Causal Analysis": {
    slug: "growth-mindset",
    shortName: "Growth Mindset Study",
    category: "Causal Inference",
    metric: "10,391 records · 7 specifications · ATE of about 0.41",
    flow: ["STUDENTS", "PROPENSITY", ["IPW", "FOREST"], "ATE"],
    active: 3,
    stats: [
      { value: "10,391", label: "Synthetic student records" },
      { value: "7", label: "Specifications, 4 method families" },
      { value: "≈ 0.41", label: "ATE across specifications" },
      { value: "76", label: "Schools in the data" },
    ],
  },
  "Gold Trading Strategy": {
    slug: "gold-trading",
    shortName: "Gold Trading Strategy",
    category: "Quant Research",
    metric: "Sharpe 1.28 vs 0.70 · risk-adjusted gain, not raw-return win",
    flow: ["TRENDS", "SIGNALS", "BACKTEST", "SHARPE"],
    active: 3,
    stats: [
      { value: "1.28", label: "Hybrid Sharpe ratio" },
      { value: "0.70", label: "Buy & Hold Sharpe ratio" },
      { value: "72.9%", label: "Hybrid cumulative return" },
      { value: "27 → 11", label: "Trades after adding indicators" },
    ],
  },
  "Coffee Trading with Weather Data": {
    slug: "coffee-weather-trading",
    shortName: "Coffee + Weather Trading",
    category: "Quant Research",
    metric: "3 strategies · held-out test Sep 2023 to Aug 2024",
    flow: ["WEATHER", "INDICATORS", ["SIGNAL", "SIZING"], "RISK"],
    active: 2,
    stats: [
      { value: "3", label: "Strategies compared" },
      { value: "7", label: "Technical indicators engineered" },
      { value: "12 mo", label: "Held-out test window" },
    ],
  },
  "Multi-Factor Alpha Research Pipeline": {
    slug: "alpha-research",
    shortName: "Alpha Research Pipeline",
    category: "Quant Research",
    metric: "7 factors · sector- and beta-neutral · cost-aware backtests",
    flow: ["YAHOO", "FACTORS", "PORTFOLIO", "BACKTEST"],
    active: 2,
    stats: [
      { value: "7", label: "Alpha factors" },
      { value: "3", label: "Ridge, Lasso, ElasticNet weighting" },
    ],
  },
  "Banking GenAI Assistant": {
    slug: "banking-genai-assistant",
    shortName: "Banking GenAI Assistant",
    category: "Applied AI",
    metric: "Rasa 3.x + Gemini fallback · FastAPI + Streamlit",
    flow: ["USER", "RASA NLU", ["ACTIONS", "GEMINI"], "REPLY"],
    active: 2,
    stats: [
      { value: "Rasa 3.x", label: "NLU and multi-step forms" },
      { value: "DIET", label: "Intent classifier" },
      { value: "Gemini", label: "Fallback and spending insights" },
    ],
  },
  "AI Job Application Automation": {
    slug: "job-automation",
    shortName: "Job Application Automation",
    category: "AI Automation",
    metric: "Scrape · tailor resume · write cover letter · score fit",
    flow: ["SCRAPE", "TAILOR", "LETTER", "DRIVE"],
    active: 1,
    stats: [
      { value: "LaTeX", label: "Resume tailored, compiled to PDF" },
      { value: "Gemini", label: "Cover letters and match scoring" },
    ],
  },
  "Personalized Movie Recommender": {
    slug: "movie-recommender",
    shortName: "Movie Recommender",
    category: "Applied AI",
    metric: "MovieLens · mood + personality scoring · Cohere explanations",
    flow: ["PROFILE", "SCORING", "COHERE", "PICKS"],
    active: 1,
    stats: [
      { value: "6", label: "Question personality quiz" },
      { value: "MovieLens", label: "Dataset" },
    ],
  },
  "Job Postings Insights": {
    slug: "job-postings-insights",
    shortName: "Job Postings Insights",
    category: "NLP & Messy Data",
    metric: "123,782 postings · skill detection 36% better · pay error 43% lower · 20 stable skill groups",
    flow: ["POSTINGS", "EXTRACT", ["SKILLS", "PAY"], "INSIGHTS"],
    active: 2,
    stats: [
      { value: "123,782", label: "Job postings analysed" },
      { value: "36%", label: "Better skill detection than the original method" },
      { value: "43%", label: "Smaller pay-estimate error than guessing the median" },
      { value: "20", label: "Stable skill groups" },
    ],
  },
  "Rossmann Sales Forecasting": {
    slug: "rossmann-forecasting",
    shortName: "Rossmann Forecasting",
    category: "ML Forecasting",
    metric: "RMSE 357 vs ~780 Prophet · SHAP explanations · 1,115 stores",
    flow: ["SALES", "FEATURES", ["FOREST", "XGBOOST"], "SHAP"],
    active: 3,
    stats: [
      { value: "1,115", label: "Stores forecast" },
      { value: "~50%", label: "Lower error than baselines" },
      { value: "$39.96", label: "Average daily promo lift" },
      { value: "357", label: "Random Forest RMSE" },
    ],
  },
  "Enhancing Airbnb Revenue: Dynamic Price Modeling": {
    slug: "airbnb-pricing",
    shortName: "Airbnb Pricing Model",
    category: "Analytics",
    metric: "10K+ listings · 25% better pricing accuracy",
    flow: ["LISTINGS", "SQL", "R MODEL", "TABLEAU"],
    active: 2,
    stats: [
      { value: "25%", label: "Pricing accuracy improvement" },
      { value: "10K+", label: "Listings analyzed" },
    ],
  },
};

export const allProjects: ProjectView[] = projects.map((p) => {
  const meta = metaByName[p.name];
  if (!meta) throw new Error(`Missing project metadata for "${p.name}"`);
  return { ...p, ...meta };
});

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];
