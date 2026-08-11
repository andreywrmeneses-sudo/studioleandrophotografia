import { MapPin, Navigation } from "lucide-react";
import { CONTACT, studioPhoto } from "@/data/photos";
import { Reveal } from "./Reveal";

const COORDS = "-2.5605744,-44.2582188";
const QUERY = encodeURIComponent(COORDS);

export function StudioLocation() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Mapa da localização do Studio Leandro Photografia"
            src={`https://www.google.com/maps?q=${QUERY}&z=19&t=m&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full sm:h-[460px]"
            style={{ border: 0, filter: "grayscale(0.5) contrast(1.05) brightness(0.85)" }}
          />
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="relative -translate-y-4">
              <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-primary/25" aria-hidden />
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_var(--color-cyan-signature)]">
                <MapPin className="h-5 w-5" />
              </span>
            </span>
          </div>
          <span className="glass pointer-events-none absolute bottom-4 left-4 rounded-full px-4 py-2 text-xs text-foreground">
            Studio Leandro Photografia · {CONTACT.address}
          </span>
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