"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ChartSpec, Tone } from "@/data/projectContent";

const toneBar: Record<Tone, string> = {
  good: "bg-emerald-500",
  accent: "bg-accent",
  muted: "bg-foreground/30",
  warn: "bg-amber-500",
};

const seriesBar = ["bg-emerald-500", "bg-accent", "bg-accent-2"];

function format(value: number, unit = "", decimals?: number) {
  const d = decimals ?? (Number.isInteger(value) ? 0 : 1);
  return `${value.toFixed(d)}${unit}`;
}

function pctOf(value: number, min: number, max: number) {
  return Math.max(1.5, Math.min(100, ((value - min) / (max - min)) * 100));
}

function Bar({ pct, className }: { pct: number; className: string }) {
  return (
    <div className="h-6 flex-1 overflow-hidden rounded-md bg-foreground/5">
      <motion.div
        className={cn("h-full rounded-md", className)}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

function Bars({ spec }: { spec: Extract<ChartSpec, { type: "bars" }> }) {
  const min = spec.min ?? 0;
  const max = spec.max ?? Math.max(...spec.items.map((i) => i.value));
  return (
    <div className="space-y-3.5">
      {spec.items.map((it) => (
        <div
          key={it.label}
          className="grid items-center gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,12rem)_1fr]"
        >
          <span className="text-sm leading-snug text-muted">{it.label}</span>
          <div className="flex items-center gap-3">
            <Bar pct={pctOf(it.value, min, max)} className={toneBar[it.tone ?? "accent"]} />
            <span className="w-[4.75rem] shrink-0 text-right font-mono text-sm font-semibold">
              {it.display ?? format(it.value, spec.unit, spec.decimals)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Grouped({ spec }: { spec: Extract<ChartSpec, { type: "grouped" }> }) {
  const min = spec.min ?? 0;
  const max =
    spec.max ?? Math.max(...spec.categories.flatMap((c) => c.values));
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1.5">
        {spec.series.map((s, i) => (
          <span key={s} className="inline-flex items-center gap-2 text-xs text-muted">
            <span className={cn("h-2.5 w-2.5 rounded-sm", seriesBar[i % seriesBar.length])} />
            {s}
          </span>
        ))}
      </div>
      <div className="space-y-5">
        {spec.categories.map((c) => (
          <div key={c.label}>
            <p className="mb-1.5 text-sm font-semibold">{c.label}</p>
            <div className="space-y-1.5">
              {c.values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-3.5 flex-1 overflow-hidden rounded bg-foreground/5">
                    <motion.div
                      className={cn("h-full rounded", seriesBar[i % seriesBar.length])}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pctOf(v, min, max)}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right font-mono text-xs font-semibold">
                    {format(v, spec.unit, spec.decimals)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Range({ spec }: { spec: Extract<ChartSpec, { type: "range" }> }) {
  const span = spec.max - spec.min;
  const at = (v: number) => `${((v - spec.min) / span) * 100}%`;
  const ticks = [spec.min, spec.min + span / 2, spec.max];
  return (
    <div>
      <div className="space-y-3">
        {spec.items.map((it) => (
          <div
            key={it.label}
            className="grid items-center gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,12rem)_1fr]"
          >
            <span className="text-sm leading-snug text-muted">{it.label}</span>
            <div className="flex items-center gap-3">
              <div className="relative h-5 flex-1 rounded bg-foreground/5">
                {it.low !== undefined && it.high !== undefined && (
                  <motion.div
                    className={cn("absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full opacity-60", toneBar[it.tone ?? "good"])}
                    style={{ left: at(it.low) }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${((it.high - it.low) / span) * 100}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
                <span
                  className={cn(
                    "absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background",
                    toneBar[it.tone ?? "good"],
                  )}
                  style={{ left: at(it.point) }}
                />
              </div>
              <span className="w-12 shrink-0 text-right font-mono text-sm font-semibold">
                {it.point.toFixed(3)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid items-center gap-x-4 sm:grid-cols-[minmax(0,12rem)_1fr]">
        <span />
        <div className="flex items-center gap-3">
          <div className="relative h-4 flex-1 border-t border-border font-mono text-[11px] text-muted">
            {ticks.map((t, i) => (
              <span
                key={i}
                className="absolute top-1"
                style={{ left: `${(i / 2) * 100}%`, transform: i === 0 ? "none" : i === 2 ? "translateX(-100%)" : "translateX(-50%)" }}
              >
                {t.toFixed(2)}
              </span>
            ))}
          </div>
          <span className="w-12 shrink-0" />
        </div>
      </div>
    </div>
  );
}

const ladderStyle = {
  ship: { word: "Ship", cls: "border-emerald-500/60 bg-emerald-500/15 text-emerald-600 dark:text-emerald-300" },
  run: { word: "Run longer", cls: "border-amber-500/60 bg-amber-500/15 text-amber-600 dark:text-amber-300" },
  stop: { word: "Do not ship", cls: "border-rose-500/60 bg-rose-500/15 text-rose-600 dark:text-rose-300" },
};

function Ladder({ spec }: { spec: Extract<ChartSpec, { type: "ladder" }> }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {spec.items.map((it, i) => {
        const s = ladderStyle[it.outcome];
        return (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn("rounded-xl border p-4 text-center", s.cls)}
          >
            <p className="text-sm leading-snug text-foreground/80">{it.label}</p>
            <p className="mt-2 font-mono text-sm font-bold uppercase tracking-wider">{s.word}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ProjectChart({ spec }: { spec: ChartSpec }) {
  return (
    <figure className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm md:p-6">
      <figcaption className="mb-5 text-sm font-semibold">{spec.title}</figcaption>
      {spec.type === "bars" && <Bars spec={spec} />}
      {spec.type === "grouped" && <Grouped spec={spec} />}
      {spec.type === "range" && <Range spec={spec} />}
      {spec.type === "ladder" && <Ladder spec={spec} />}
      {spec.note && <p className="mt-4 text-xs leading-relaxed text-muted">{spec.note}</p>}
    </figure>
  );
}
