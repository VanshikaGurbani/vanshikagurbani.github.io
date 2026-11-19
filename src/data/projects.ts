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
      { value: "About 844", label: "Guideline passages searched" },
      { value: "0-100", label: "Trust score per answer" },
    ],
  },
  "H&M Fashion Recommendation System": {
    slug: "hm-fashion-recommender",
    shortName: "H&M Fashion Recommendation System",
    category: "Machine Learning",
    metric: "22% better than the best simple rule · 4.1 times a most-popular list · 5,726 shoppers · live demo",
    flow: ["HISTORY", "SHORTLIST", "RANKER", "TOP 12"],
    active: 2,
    stats: [
      { value: "22%", label: "Better score than the best simple rule (suggest what they bought before), on 5,726 shoppers and weeks it had never seen" },
      { value: "4.1x", label: "Better score than a most-popular list" },
      { value: "About 160", label: "Items shortlisted per shopper (finds about 16% of what they buy)" },
      { value: "22 ms", label: "Median time for one single recommendation request" },
    ],
  },
  "Heart Risk Prediction System": {
    slug: "heart-risk-prediction-system",
    shortName: "Heart Risk Prediction System",
    category: "Machine Learning",
    metric: "22,512 adults · caught 91.2% of people reporting heart disease on a later survey year, flagging 47% of adults · self-reported data, educational demo",
    flow: ["SURVEY", "POSTGRES", "MODELS", "RISK"],
    active: 2,
    stats: [
      { value: "22,512", label: "U.S. adults in four CDC survey rounds" },
      { value: "83 of 100", label: "Random yes/no pairs where the model rated the person with heart disease as higher risk (three models tied)" },
      { value: "91.2%", label: "Of people who reported heart disease caught on a survey year the model had never seen" },
      { value: "47%", label: "Of all adults flagged to catch them (5.3 false alarms per case)" },
    ],
  },
  "Retail SQL Dashboard": {
    slug: "retail-sql-dashboard",
    shortName: "Retail SQL Dashboard",
    category: "Data & Analytics",
    metric: "996,172 sales records after cleaning · £18.49M net revenue · 1,941 customers to target, 75% of £905k at risk",
    flow: ["SALES", "SQL CLEAN", "SEGMENTS", "TARGETS"],
    active: 2,
    stats: [
      { value: "£18.49M", label: "Net revenue over 24 months, year 2 up 1.9%" },
      { value: "63.2%", label: "Of revenue from the top 10% of customers" },
      { value: "28.3%", label: "Of customers bought only once" },
      { value: "1,941", label: "Customers to target, holding 75% of the £905k of revenue at risk next quarter (an estimate from past patterns)" },
    ],
  },
  "BioNER: Multi-task Biomedical NER": {
    slug: "bioner",
    shortName: "BioNER",
    category: "Machine Learning",
    metric: "5 datasets · 85.4 average F1 (out of 100) with separate models · one shared model replaces five, within 0.25 points",
    flow: ["TEXT", "BIOBERT", ["SINGLE", "MULTI"], "ENTITIES"],
    active: 2,
    stats: [
      { value: "5", label: "Biomedical datasets" },
      { value: "85.4", label: "Average F1 across the five datasets (F1: right names found and exactly right, out of 100; 3 runs)" },
      { value: "75.4", label: "Lowest F1 (JNLPBA, the hardest dataset)" },
      { value: "1 for 5", label: "One shared model in place of five separate ones (80% fewer), averaging 0.20 to 0.25 points lower" },
    ],
  },
  "Experimentation Toolkit": {
    slug: "experimentation-toolkit",
    shortName: "Experimentation Toolkit",
    category: "Causal Inference",
    metric: "14M users · 18.6% more visits with the ad (a simple comparison said 27.1%) · decision: ship",
    flow: ["USERS", "CHECKS", "EFFECT", "DECISION"],
    active: 2,
    stats: [
      { value: "14M", label: "Real ad-experiment users (13,979,592)" },
      { value: "18.6%", label: "More visits with the ad (4.04% visited without it, 4.78% with), after correcting for mismatched groups; a simple comparison said 27.1%" },
      { value: "30.5%", label: "Random noise cut by the correction method, so the same precision needs fewer users" },
      { value: "59%", label: "Of the extra visits captured by showing the ad only to the 10% most likely to respond (vs 51% for the usual ranking)" },
    ],
  },
  "Rossmann Sales Forecasting": {
    slug: "rossmann-forecasting",
    shortName: "Rossmann Forecasting",
    category: "Machine Learning",
    metric: "Forecast error 9.2% vs 18.9% for the best simple rule (51% lower) · 3 rolling tests · 1,115 stores",
    flow: ["SALES", "FEATURES", "LIGHTGBM", "42 DAYS"],
    active: 2,
    stats: [
      { value: "1,115", label: "Stores forecast, 42 days (six weeks) ahead" },
      { value: "9.2%", label: "Forecast error, vs 18.9% for the best simple rule" },
      { value: "51%", label: "Less error than that rule (the average of the same weekday over the last four weeks)" },
      { value: "86.4%", label: "Of actual sales landed inside the 90% range (a little under target)" },
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
    metric: "Hackathon team project · built in 8 hours · fixes open as drafts for a person to approve · Slack rollbacks",
    flow: ["DEPLOYS", "DETECT", "DIAGNOSE", "DRAFT FIX"],
    active: 2,
    stats: [
      { value: "8 hrs", label: "Hackathon build time, team project" },
      { value: "Draft", label: "Every fix opens as a draft pull request (a proposed code change) that a person must approve" },
      { value: "Daily", label: "Failure and uptime checks, with Slack alerts" },
      { value: "Auto", label: "Tests, type check and build run on every change" },
    ],
  },
  "Growth Mindset Causal Analysis": {
    slug: "growth-mindset",
    shortName: "Growth Mindset Study",
    category: "Causal Inference",
    metric: "10,391 records · 7 estimates · program effect of about 0.41",
    flow: ["STUDENTS", "PROPENSITY", ["IPW", "FOREST"], "ATE"],
    active: 3,
    stats: [
      { value: "10,391", label: "Synthetic student records" },
      { value: "7", label: "Ways of estimating the effect, in 4 method families" },
      { value: "≈ 0.41", label: "Average effect of the program, about the same across methods" },
      { value: "76", label: "Schools in the data" },
    ],
  },
  "True Image Caption Generator": {
    slug: "image-captioning",
    shortName: "Image Captioning",
    category: "Machine Learning",
    metric: "Two caption-writing designs compared on Flickr8k · best per-image score 0.73 out of 1",
    flow: ["IMAGE", "CNN", ["LSTM", "TRANSF"], "CAPTION"],
    active: 3,
    stats: [
      { value: "2", label: "Captioning pipelines built" },
      { value: "0.73", label: "Top per-image score (BLEU, 0 to 1) on strong examples" },
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
