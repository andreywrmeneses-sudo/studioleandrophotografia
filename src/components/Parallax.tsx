import { useEffect, useRef, useState, type ReactNode } from "react";

/** Deslocamento vertical sutil conforme o elemento cruza a viewport. */
export function Parallax({
  children,
  strength = 40,
  className = "",
}: {
  children: ReactNode;
  /** amplitude do deslocamento em px */
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const target = inner.current;
    if (!el || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let current = 0;
    let goal = 0;

    const loop = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (abaixo da tela) .. 1 (acima da tela)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      goal = Math.max(-1, Math.min(1, progress)) * strength;
      // interpolação (lerp) para um movimento contínuo e sem trancos
      current += (goal - current) * 0.08;
      target.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      <div ref={inner} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
