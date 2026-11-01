"use client";

interface Chip {
  label: string;
  highlight?: boolean;
}

const rings: {
  inset: number;
  dur: number;
  reverse: boolean;
  dot: string;
  chips: Chip[];
}[] = [
  {
    inset: 0,
    dur: 46,
    reverse: false,
    dot: "var(--accent-2)",
    chips: [
      { label: "Agents", highlight: true },
      { label: "LangGraph" },
      { label: "RAG" },
      { label: "MCP" },
      { label: "Claude API" },
      { label: "ChromaDB" },
    ],
  },
  {
    inset: 56,
    dur: 34,
    reverse: true,
    dot: "var(--accent-light)",
    chips: [
      { label: "ML Models", highlight: true },
      { label: "PyTorch" },
      { label: "HuggingFace" },
      { label: "TypeScript" },
      { label: "React.js" },
    ],
  },
  {
    inset: 112,
    dur: 24,
    reverse: false,
    dot: "#67e8f9",
    chips: [
      { label: "Python" },
      { label: "SQL" },
      { label: "FastAPI" },
      { label: "Docker" },
    ],
  },
];

export function OrbitVisual() {
  return (
    <div aria-hidden="true" className="orbit-field relative h-[400px] w-[400px]">
      {rings.map((ring) => (
        <div
          key={ring.inset}
          className="orbit-ring"
          style={{
            inset: ring.inset,
            ["--dur" as string]: `${ring.dur}s`,
            animationName: ring.reverse ? "orbit-rev" : "orbit",
          }}
        >
          <span className="orbit-dot" style={{ ["--dot" as string]: ring.dot }} />

          {ring.chips.map((chip, i) => {
            const angle = 40 + (360 / ring.chips.length) * i;
            return (
              <span
                key={chip.label}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={chip.highlight ? "orbit-chip orbit-chip--hl" : "orbit-chip"}
                    style={{
                      ["--a" as string]: `${angle}deg`,
                      animationName: ring.reverse ? "counter-rev" : "counter",
                    }}
                  >
                    {chip.label}
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      ))}

      <div className="core-orb absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
}
