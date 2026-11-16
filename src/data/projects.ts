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
  "H&M Fashion Recommendation System": {
    slug: "hm-fashion-recommender",
    shortName: "H&M Fashion Recommendation System",
    category: "Machine Learning",
    metric: "Score 0.033 vs 0.027 for the best simple rule · 5,726 shoppers · live demo",
    flow: ["HISTORY", "SHORTLIST", "RANKER", "TOP 12"],
    active: 2,
    stats: [
      { value: "0.033", label: "Score (MAP@12) vs 0.027 for \"suggest what they bought before\"" },
      { value: "+0.006", label: "Gain over that rule, 95% range +0.004 to +0.008" },
      { value: "~160", label: "Items shortlisted per shopper (finds 16% of what they buy)" },
      { value: "22 ms", label: "Median time for one fresh recommendation" },
    ],
  },
  "Heart Risk Prediction System": {
    slug: "heart-risk-prediction-system",
    shortName: "Heart Risk Prediction System",
    category: "Machine Learning",
    metric: "22,512 adults · three models tie at about 83% ROC-AUC · 91.2% of cases caught, 47% flagged",
    flow: ["SURVEY", "POSTGRES", "MODELS", "RISK"],
    active: 2,
    stats: [
      { value: "22,512", label: "U.S. adults, four CDC survey rounds" },
      { value: "83%", label: "ROC-AUC of three tied models (XGBoost did not win)" },
      { value: "91.2%", label: "Of cases caught on the latest round, cut-off set on earlier data" },
      { value: "47%", label: "Of all adults flagged to catch them" },
    ],
  },
  "Retail SQL Dashboard": {
    slug: "retail-sql-dashboard",
    shortName: "Retail SQL Dashboard",
    category: "Data & Analytics",
    metric: "996,172 cleaned lines · £18.49M net revenue · 1,941 customers to target, 75% of £905k at risk",
    flow: ["SALES", "SQL CLEAN", "SEGMENTS", "TARGETS"],
    active: 2,
    stats: [
      { value: "£18.49M", label: "Net revenue over 24 months, year 2 up 1.9%" },
      { value: "63.2%", label: "Of revenue from the top 10% of customers" },
      { value: "28.3%", label: "Of customers bought only once" },
      { value: "1,941", label: "Customers to target, holding 75% of the £905k at risk next quarter" },
    ],
  },
  "BioNER: Multi-task Biomedical NER": {
    slug: "bioner",
    shortName: "BioNER",
    category: "Machine Learning",
    metric: "5 datasets · 85.4 average F1 with separate models · one shared model within 0.2 points",
    flow: ["TEXT", "BIOBERT", ["SINGLE", "MULTI"], "ENTITIES"],
    active: 2,
    stats: [
      { value: "5", label: "Biomedical datasets" },
      { value: "85.4", label: "Average whole-name F1 across the five datasets (3 seeds)" },
      { value: "75.4", label: "Lowest F1 (JNLPBA, the hardest dataset)" },
      { value: "0.2 pts", label: "Average F1 given up by one shared model instead of five" },
    ],
  },
  "Experimentation Toolkit": {
    slug: "experimentation-toolkit",
    shortName: "Experimentation Toolkit",
    category: "Causal Inference",
    metric: "14M users · ad lift +0.75 points after adjustment (raw +1.03) · decision: ship",
    flow: ["USERS", "CHECKS", "EFFECT", "DECISION"],
    active: 2,
    stats: [
      { value: "14M", label: "Real ad-experiment users (13,979,592)" },
      { value: "+0.75", label: "Points of visit-rate lift after adjustment, 95% range +0.71 to +0.78" },
      { value: "30.5%", label: "Variance cut by CUPAC, so the same precision needs fewer users" },
      { value: "4.7%", label: "False alarms in an A/A test, vs 5% expected" },
    ],
  },
  "Rossmann Sales Forecasting": {
    slug: "rossmann-forecasting",
    shortName: "Rossmann Forecasting",
    category: "Machine Learning",
    metric: "Error 9.2% vs 18.9% for the best simple baseline · 3 rolling tests · 1,115 stores",
    flow: ["SALES", "FEATURES", "LIGHTGBM", "42 DAYS"],
    active: 2,
    stats: [
      { value: "1,115", label: "Stores forecast, 42 days ahead" },
      { value: "9.2%", label: "Forecast error, vs 18.9% for the best simple baseline" },
      { value: "86.4%", label: "Of actual sales inside the 90% range (a little under target)" },
      { value: "+39%", label: "Sales on promo days (an association, not proven cause)" },
    ],
  },
  "Job Postings Insights": {
    slug: "job-postings-insights",
    shortName: "Job Postings Insights",
    category: "Data & Analytics",
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
  "True Image Caption Generator": {
    slug: "image-captioning",
    shortName: "Image Captioning",
    category: "Machine Learning",
    metric: "Flickr8k · CNN + LSTM vs CNN + Transformer · BLEU compared",
    flow: ["IMAGE", "CNN", ["LSTM", "TRANSF"], "CAPTION"],
    active: 3,
    stats: [
      { value: "2", label: "Captioning pipelines built" },
      { value: "0.73", label: "Top per-image BLEU on strong examples" },
      { value: "Flickr8k", label: "Training dataset" },
    ],
  },
  "Enhancing Airbnb Revenue: Dynamic Price Modeling": {
    slug: "airbnb-pricing",
    shortName: "Airbnb Pricing Model",
    category: "Data & Analytics",
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
