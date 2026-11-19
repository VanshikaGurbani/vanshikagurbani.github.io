import Image from "next/image";
import { Rich } from "@/components/ui/Rich";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectChart } from "@/components/projects/ProjectChart";
import { cn } from "@/lib/utils";
import type { ProjectSection } from "@/data/projectContent";

function Header({ s }: { s: ProjectSection }) {
  return (
    <>
      {s.kicker && (
        <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-2">
          {s.kicker}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
        {s.heading}
      </h2>
    </>
  );
}

function Stats({ s, compact }: { s: ProjectSection; compact?: boolean }) {
  if (!s.stats?.length) return null;
  return (
    <dl
      className={cn(
        "mt-6 grid gap-x-6 gap-y-5",
        compact ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4",
      )}
    >
      {s.stats.map((st) => (
        <div key={st.label} className="border-l-2 border-accent pl-3">
          <dt className="font-mono text-xl font-semibold md:text-2xl">{st.value}</dt>
          <dd className="mt-0.5 text-xs leading-snug text-muted md:text-sm">{st.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function Tiles({ s }: { s: ProjectSection }) {
  if (!s.tiles?.length) return null;
  const limits = s.tileTone === "limits";
  return (
    <div
      className={cn(
        "mt-8 grid gap-4",
        limits
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : s.tiles.length >= 5
            ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            : s.tiles.length === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : s.tiles.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2",
      )}
    >
      {s.tiles.map((t, i) => (
        <div
          key={t.title}
          className={cn(
            "rounded-xl border bg-card/60 p-4 backdrop-blur-sm",
            limits ? "border-border border-l-2 border-l-amber-500/70" : "border-border",
          )}
        >
          {!limits && s.tileTone === "steps" && (
            <span className="font-mono text-xs font-semibold text-accent-2">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          <p className={cn("text-sm font-semibold", !limits && "mt-1")}>{t.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.text}</p>
        </div>
      ))}
    </div>
  );
}

function Visuals({ s }: { s: ProjectSection }) {
  return (
    <div className="space-y-6">
      {s.charts?.map((c) => <ProjectChart key={c.title} spec={c} />)}
      {s.figures?.map((f) => (
        <figure
          key={f.src}
          className="overflow-hidden rounded-2xl border border-border bg-card/60"
        >
          <div className="bg-white p-3 md:p-4">
            <Image src={f.src} alt={f.alt} width={f.width} height={f.height} className="h-auto w-full" />
          </div>
          <figcaption className="px-5 py-4 text-sm leading-relaxed text-muted">{f.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectSections({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-6 md:space-y-24 md:px-10">
      {sections.map((s, i) => {
        const hasVisuals = Boolean(s.charts?.length || s.figures?.length);
        const flip = i % 2 === 1;
        const body = s.body?.map((p, n) => (
          <p key={n} className="text-base leading-relaxed text-muted md:text-lg">
            <Rich text={p} />
          </p>
        ));
        return (
          <SectionWrapper key={s.heading} className="py-0 md:py-0">
            <div className="border-t border-border pt-10 md:pt-14">
              {hasVisuals ? (
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={cn("lg:sticky lg:top-24 lg:col-span-5", flip && "lg:order-2")}>
                    <Header s={s} />
                    <div className="mt-5 space-y-4">{body}</div>
                    <Stats s={s} compact />
                  </div>
                  <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
                    <Visuals s={s} />
                  </div>
                </div>
              ) : (
                <>
                  <Header s={s} />
                  {body && (
                    <div className="mt-5 grid gap-x-12 gap-y-4 lg:grid-cols-2">{body}</div>
                  )}
                  <Stats s={s} />
                </>
              )}
              <Tiles s={s} />
            </div>
          </SectionWrapper>
        );
      })}
    </div>
  );
}
