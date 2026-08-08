import { useEffect, useState } from "react";
import { Menu, X, Camera } from "lucide-react";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Fotografia Esportiva", href: "#esportes" },
  { label: "Eventos", href: "#eventos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Studio", href: "#studio" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-70 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr] items-center gap-4 px-4 sm:px-8">
        <a
          href="#inicio"
          className="group flex min-w-0 items-center gap-2 text-primary"
          aria-label="Studio Leandro Photografia — ir para o início"
        >
          <Camera className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-6" />
          <span className="text-display truncate text-sm font-bold tracking-tight sm:text-base lg:hidden">
            Studio Leandro
          </span>
        </a>

        <div className="flex items-center justify-end gap-3">
          <nav
            className={`glass hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex ${
              scrolled ? "shadow-lg" : ""
            }`}
            aria-label="Navegação principal"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[13px] text-foreground/75 transition-colors duration-300 hover:bg-white/8 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#inicio"
            className="text-display hidden shrink-0 text-right text-base leading-tight font-bold text-foreground lg:block"
          >
            Studio Leandro
            <span className="block text-[11px] font-medium tracking-[0.3em] text-primary uppercase">
              Photografia
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="glass glass-hover grid h-11 w-11 shrink-0 place-items-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 z-[-1] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-graphite/70 backdrop-blur-md transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Navegação mobile"
          className={`glass absolute inset-x-3 top-20 rounded-3xl p-4 transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-display flex items-center gap-3 border-b border-white/8 px-3 py-4 text-lg text-foreground last:border-0"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}