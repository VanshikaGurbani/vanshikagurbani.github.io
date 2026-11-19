import { projects, type Project } from "./portfolio";
import { sectionsByName, type ProjectSection } from "./projectContent";

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

export type ProjectView = Project & ProjectMeta & { sections: ProjectSection[] };

const metaByName: Record<string, ProjectMeta> = {
  SourceMD: {
    slug: "sourcemd",
    shortName: "SourceMD",
    category: "Agentic AI",
    metric: "83% of verdicts right when it can look things up in the guidelines",
    flow: ["ANSWER", "CLAIMS", ["GUIDELINES", "WEB"], "TRUST"],
    active: 2,
    stats: [
      { value: "83%", label: "Verdicts right when the AI can look things up in the guidelines" },
      { value: "61%", label: "Verdicts right when the AI judges from memory alone" },
      { value: "53%", label: "Lower peak memory" },
      { value: "844", label: "Guideline passages searched" },
    ],
  },
  "H&M Fashion Recommendation System": {
    slug: "hm-fashion-recommender",
    shortName: "H&M Fashion Recommendation System",
    category: "Machine Learning",
    metric: "22% better than the best simple rule at predicting what shoppers buy next",
    flow: ["HISTORY", "SHORTLIST", "RANKER", "TOP 12"],
    active: 2,
    stats: [
      { value: "22%", label: "Better score than the best simple rule (suggest what they bought before)" },
      { value: "4.1x", label: "Better score than a most-popular list" },
      { value: "163", label: "Items shortlisted per shopper, on average" },
      { value: "22 ms", label: "Median time for one single recommendation request" },
    ],
  },
  "Heart Risk Prediction System": {
    slug: "heart-risk-prediction-system",
    shortName: "Heart Risk Prediction System",
    category: "Machine Learning",
    metric: "Caught 91.2% of people who reported heart disease on a survey year the model had never seen",
    flow: ["SURVEY", "POSTGRES", "MODELS", "RISK"],
    active: 2,
    stats: [
      { value: "22,512", label: "U.S. adults in four CDC survey rounds" },
      { value: "82.9%", label: "Random yes/no pairs the model ranked correctly (three models tied)" },
      { value: "91.2%", label: "Of people who reported heart disease caught on a later survey year" },
      { value: "47%", label: "Of all adults flagged to catch them" },
    ],
  },
  "Retail SQL Dashboard": {
    slug: "retail-sql-dashboard",
    shortName: "Retail SQL Dashboard",
    category: "Data & Analytics",
    metric: "The top 10% of customers bring in 63.2% of revenue",
    flow: ["SALES", "SQL CLEAN", "SEGMENTS", "TARGETS"],
    active: 2,
    stats: [
      { value: "£18.49M", label: "Net revenue over 24 months" },
      { value: "63.2%", label: "Of revenue from the top 10% of customers" },
      { value: "28.3%", label: "Of customers bought only once" },
      { value: "1,941", label: "Customers to target next quarter" },
    ],
  },
  "BioNER: Multi-task Biomedical NER": {
    slug: "bioner",
    shortName: "BioNER",
    category: "Machine Learning",
    metric: "85.4 average F1 across five datasets (F1: right names found and exactly right, out of 100)",
    flow: ["TEXT", "BIOBERT", ["SINGLE", "MULTI"], "ENTITIES"],
    active: 2,
    stats: [
      { value: "5", label: "Biomedical datasets" },
      { value: "85.4", label: "Average F1 with separate models (3 runs)" },
      { value: "75.4", label: "Lowest F1 (JNLPBA, the hardest dataset)" },
      { value: "80%", label: "Fewer models: one shared model replaces five" },
    ],
  },
  "Experimentation Toolkit": {
    slug: "experimentation-toolkit",
    shortName: "Experimentation Toolkit",
    category: "Causal Inference",
    metric: "18.6% more visits with the ad, after correcting for mismatched test groups",
    flow: ["USERS", "CHECKS", "EFFECT", "DECISION"],
    active: 2,
    stats: [
      { value: "14M", label: "Real ad-experiment users" },
      { value: "18.6%", label: "More visits with the ad, after correcting for mismatched groups" },
      { value: "30.5%", label: "Random noise cut by the correction method" },
      { value: "59.4%", label: "Of the extra visits captured by showing the ad to the 10% most likely to respond" },
    ],
  },
  "Rossmann Sales Forecasting": {
    slug: "rossmann-forecasting",
    shortName: "Rossmann Forecasting",
    category: "Machine Learning",
    metric: "Forecast error of 9.2%, against 18.9% for the best simple rule",
    flow: ["SALES", "FEATURES", "LIGHTGBM", "42 DAYS"],
    active: 2,
    stats: [
      { value: "1,115", label: "Stores forecast, six weeks ahead" },
      { value: "9.2%", label: "Forecast error" },
      { value: "51%", label: "Less error than the best simple rule" },
      { value: "86.4%", label: "Of actual sales landed inside the 90% range" },
    ],
  },
  "Job Postings Insights": {
    slug: "job-postings-insights",
    shortName: "Job Postings Insights",
    category: "Data & Analytics",
    metric: "Skill detection 36% better than the original method",
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
    metric: "Every fix opens as a draft for a person to approve",
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
    metric: "Every method found the program raised achievement by 0.41 to 0.42 units",
    flow: ["STUDENTS", "PROPENSITY", ["IPW", "FOREST"], "ATE"],
    active: 3,
    stats: [
      { value: "10,391", label: "Synthetic student records" },
      { value: "7", label: "Ways of estimating the effect" },
      { value: "0.41", label: "Average effect of the program, in achievement units" },
      { value: "76", label: "Schools in the data" },
    ],
  },
  "True Image Caption Generator": {
    slug: "image-captioning",
    shortName: "Image Captioning",
    category: "Machine Learning",
    metric: "Best per-image score of 0.73 out of 1 on strong examples",
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
    metric: "25% better pricing accuracy than the baseline",
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
  const sections = sectionsByName[p.name];
  if (!sections) throw new Error(`Missing sections for "${p.name}"`);
  return { ...p, ...meta, sections };
});

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];
