import { MapPin, Navigation } from "lucide-react";
import { CONTACT, studioPhoto } from "@/data/photos";
import { Reveal } from "./Reveal";

const QUERY = encodeURIComponent(
  "Avenida dos Franceses, Bairro Santo Antônio, 4, São Luís - MA",
);

export function StudioLocation() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Mapa da localização do Studio Leandro Photografia"
            src={`https://www.google.com/maps?q=${QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full sm:h-[460px]"
            style={{ border: 0, filter: "grayscale(0.5) contrast(1.05) brightness(0.85)" }}
          />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass flex h-full flex-col overflow-hidden rounded-3xl">
          <img
            src={studioPhoto}
            alt="Interior do Studio Leandro Photografia com iluminação profissional"
            loading="lazy"
            className="h-44 w-full object-cover sm:h-56"
          />
          <div className="flex flex-1 flex-col gap-5 p-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">Endereço</p>
                <p className="mt-2 text-display text-xl leading-snug text-foreground">
                  {CONTACT.address}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Um espaço pensado para ensaios, retratos e reuniões de projeto — com controle total de
              luz e um ambiente reservado para você.
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${QUERY}`}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}