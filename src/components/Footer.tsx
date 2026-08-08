import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { CONTACT } from "@/data/photos";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Esportes", href: "#esportes" },
  { label: "Eventos", href: "#eventos" },
  { label: "Maratona", href: "#portfolio" },
  { label: "Studio", href: "#studio" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-midnight">
      <div className="hairline" aria-hidden />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <img
            src={logo.url}
            alt="Studio Leandro Photografia"
            className="h-20 w-auto"
            loading="lazy"
          />
          <p className="text-display mt-6 max-w-sm text-2xl leading-snug text-foreground/90">
            Fotografia que transforma momentos em memória.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 break-all text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{CONTACT.whatsappLabel}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {CONTACT.instagramLabel}
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <p className="mx-auto max-w-[1400px] px-4 py-6 text-xs text-muted-foreground sm:px-8">
          © 2026 Studio Leandro Photografia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}