import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { heroPhoto } from "@/data/photos";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <img
        src={heroPhoto}
        alt="Fotógrafo em silhueta captando um jogo noturno sob os refletores do estádio"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-[118%] w-full object-cover"
        style={{ transform: `translate3d(0, ${y * 0.18}px, 0) scale(1.02)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/45 to-graphite" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--color-graphite)_70%,transparent))]" />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-20 sm:px-8 sm:pb-24">
        <h1
          className="text-display max-w-4xl text-[clamp(2.4rem,7.5vw,5.6rem)] font-bold text-foreground"
          style={{ animation: "blur-in 1.1s cubic-bezier(.2,.7,.2,1) .25s both" }}
        >
          Momentos que merecem ser eternizados.
        </h1>
        <p
          className="mt-6 max-w-xl text-base text-ash sm:text-lg"
          style={{ animation: "blur-in 1.1s cubic-bezier(.2,.7,.2,1) .45s both" }}
        >
          Fotografia profissional para esportes, eventos e histórias que merecem ser lembradas.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-3"
          style={{ animation: "blur-in 1.1s cubic-bezier(.2,.7,.2,1) .6s both" }}
        >
          <a
            href="#contato"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_50px_-18px_var(--color-cyan-signature)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-graphite focus-visible:outline-none"
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