"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  z: number; // depth 0.2 (far) to 1 (near)
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface Shooter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const DARK_COLORS = ["255,255,255", "255,255,255", "196,181,253", "244,114,182", "165,243,252"];
const LIGHT_COLORS = ["109,40,217", "139,92,246", "219,39,119"];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dark = resolvedTheme !== "light";
    const palette = dark ? DARK_COLORS : LIGHT_COLORS;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let shooter: Shooter | null = null;
    let nextShooter = performance.now() + 4000;
    let mouseX = 0;
    let mouseY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let scrollY = window.scrollY;
    let raf = 0;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(230, (w * h) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.2 + Math.random() * 0.8,
        twinkleSpeed: 0.0006 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, w, h);
      smoothX += (mouseX - smoothX) * 0.05;
      smoothY += (mouseY - smoothY) * 0.05;

      const positions: { x: number; y: number; z: number }[] = [];

      for (const s of stars) {
        if (!reduceMotion) {
          s.x -= 0.03 + s.z * 0.08;
          s.y -= 0.01 + s.z * 0.03;
          if (s.x < -4) s.x = w + 4;
          if (s.y < -4) s.y = h + 4;
        }

        const px = s.x + smoothX * s.z * 22;
        const py = (((s.y - scrollY * s.z * 0.12 + smoothY * s.z * 22) % h) + h) % h;

        const twinkle = 0.55 + 0.45 * Math.sin(now * s.twinkleSpeed + s.phase);
        const base = dark ? 0.35 + s.z * 0.65 : 0.12 + s.z * 0.3;
        const alpha = base * twinkle;
        const r = 0.35 + s.z * 1.25;

        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${s.color},${alpha})`;
        ctx!.arc(px, py, r, 0, Math.PI * 2);
        ctx!.fill();

        if (s.z > 0.78) {
          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${s.color},${alpha * 0.18})`;
          ctx!.arc(px, py, r * 3.2, 0, Math.PI * 2);
          ctx!.fill();
          positions.push({ x: px, y: py, z: s.z });
        }
      }

      // Faint constellation lines between nearby bright stars
      const maxDist = 120;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx!.strokeStyle = dark
              ? `rgba(196,181,253,${0.14 * (1 - d / maxDist)})`
              : `rgba(109,40,217,${0.1 * (1 - d / maxDist)})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(positions[i].x, positions[i].y);
            ctx!.lineTo(positions[j].x, positions[j].y);
            ctx!.stroke();
          }
        }
      }

      // Shooting star (dark mode only)
      if (dark && !reduceMotion) {
        if (!shooter && now > nextShooter) {
          shooter = {
            x: w * (0.35 + Math.random() * 0.6),
            y: Math.random() * h * 0.35,
            vx: -(7 + Math.random() * 4),
            vy: 3.5 + Math.random() * 2,
            life: 1,
          };
        }
        if (shooter) {
          const tail = 14;
          const grad = ctx!.createLinearGradient(
            shooter.x,
            shooter.y,
            shooter.x - shooter.vx * tail,
            shooter.y - shooter.vy * tail
          );
          grad.addColorStop(0, `rgba(255,255,255,${shooter.life})`);
          grad.addColorStop(1, "rgba(244,114,182,0)");
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 1.6;
          ctx!.beginPath();
          ctx!.moveTo(shooter.x, shooter.y);
          ctx!.lineTo(shooter.x - shooter.vx * tail, shooter.y - shooter.vy * tail);
          ctx!.stroke();

          shooter.x += shooter.vx;
          shooter.y += shooter.vy;
          shooter.life -= 0.016;
          if (shooter.life <= 0) {
            shooter = null;
            nextShooter = now + 6000 + Math.random() * 7000;
          }
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    function onMouse(e: MouseEvent) {
      mouseX = e.clientX / w - 0.5;
      mouseY = e.clientY / h - 0.5;
    }
    function onScroll() {
      scrollY = window.scrollY;
    }
    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
