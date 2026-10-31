const tools = [
  "LangGraph",
  "LangChain",
  "MCP",
  "RAG",
  "Claude API",
  "Gemini",
  "Groq",
  "Vercel AI SDK",
  "ChromaDB",
  "FastEmbed",
  "HuggingFace",
  "PyTorch",
  "scikit-learn",
  "FastAPI",
  "Next.js",
  "Docker",
];

export function ToolMarquee() {
  const row = [...tools, ...tools];

  return (
    <div className="relative border-y border-border/60 bg-card/30 py-5 backdrop-blur-sm">
      <p className="mx-auto mb-4 max-w-7xl px-6 text-xs font-mono uppercase tracking-[0.25em] text-muted md:px-10">
        Always experimenting with
      </p>
      <div
        className="marquee-mask overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track">
          {row.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="mx-2 inline-flex shrink-0 items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2 text-sm font-mono text-foreground/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
