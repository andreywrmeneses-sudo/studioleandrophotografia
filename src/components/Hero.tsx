import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { heroPhoto } from "@/data/photos";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let current = 0;
    const loop = () => {
      const goal = window.scrollY;
      current += (goal - current) * 0.1;
      const img = imgRef.current;
      const content = contentRef.current;
      if (img) {
        img.style.transform = `translate3d(0, ${(current * 0.18).toFixed(2)}px, 0) scale(${(1.02 + Math.min(current, 800) * 0.00006).toFixed(4)})`;
      }
      if (content) {
        const fade = Math.max(0, 1 - current / 620);
        content.style.transform = `translate3d(0, ${(current * 0.06).toFixed(2)}px, 0)`;
        content.style.opacity = fade.toFixed(3);
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <img
        ref={imgRef}
        src={heroPhoto}
        alt="Fotógrafo em silhueta captando um jogo noturno sob os refletores do estádio"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-[118%] w-full object-cover"
        style={{ transform: "translate3d(0,0,0) scale(1.02)", willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/45 to-graphite" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--color-graphite)_70%,transparent))]" />

      <div
        ref={contentRef}
        className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-20 sm:px-8 sm:pb-24"
        style={{ willChange: "transform, opacity" }}
      >
        <h1
          className="text-display max-w-4xl text-[clamp(2rem,6vw,4.4rem)] font-bold text-foreground"
          style={{ animation: "rise-in .95s cubic-bezier(.16,1,.3,1) .1s both" }}
        >
          Momentos que merecem ser eternizados.
        </h1>
        <p
          className="mt-6 max-w-xl text-base text-ash sm:text-lg"
          style={{ animation: "rise-in .95s cubic-bezier(.16,1,.3,1) .26s both" }}
        >
          Fotografia profissional para esportes, eventos e histórias que merecem ser lembradas.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-3"
          style={{ animation: "rise-in .95s cubic-bezier(.16,1,.3,1) .42s both" }}
        >
          <a
            href="#contato"
            className="rounded-full bg-highlight px-7 py-3.5 text-sm font-semibold text-highlight-foreground shadow-[0_18px_50px_-18px_var(--color-highlight)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-graphite focus-visible:outline-none"
          >
            Solicitar orçamento
          </a>
          <a
            href="#esportes"
            className="glass glass-hover rounded-full px-7 py-3.5 text-sm font-medium text-foreground"
          >
            Explorar portfólio
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3 text-ash">
          <ArrowDown
            className="h-4 w-4 text-primary"
            style={{ animation: "float-soft 2.6s ease-in-out infinite" }}
          />
          <span className="eyebrow">Role para explorar</span>
          <span className="hairline hidden flex-1 sm:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}