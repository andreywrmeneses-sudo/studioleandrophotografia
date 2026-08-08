import { MessageCircle, Instagram } from "lucide-react";
import { CONTACT } from "@/data/photos";

export function FloatingButtons() {
  const base =
    "glass glass-hover group relative grid h-13 w-13 place-items-center rounded-full text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none";

  return (
    <div className="fixed right-4 bottom-4 z-80 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={CONTACT.instagram}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir o perfil do Studio Leandro Photografia no Instagram"
        className={`${base} sm:-mr-3`}
        style={{ animation: "float-soft 5s ease-in-out infinite" }}
      >
        <Instagram className="h-5 w-5 text-primary" />
        <span className="glass pointer-events-none absolute right-full mr-3 hidden rounded-full px-3 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Instagram
        </span>
      </a>

      <a
        href={`https://wa.me/${CONTACT.whatsappDigits}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Conversar no WhatsApp ${CONTACT.whatsappLabel}`}
        className={base}
        style={{
          animation: "float-soft 4.2s ease-in-out infinite, pulse-ring 3.4s ease-out infinite",
        }}
      >
        <MessageCircle className="h-5 w-5 text-primary" />
        <span className="glass pointer-events-none absolute right-full mr-3 hidden rounded-full px-3 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}