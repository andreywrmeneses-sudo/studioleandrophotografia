import "lenis/dist/lenis.css";
import { useEffect } from "react";

/** Rolagem suave global (inércia sutil), desativada em reduced-motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.6,
        anchors: { offset: -80 },
      });
      lenis = instance;
      document.documentElement.classList.add("lenis-active");
      const raf = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      document.documentElement.classList.remove("lenis-active");
      lenis?.destroy();
    };
  }, []);

  return null;
}