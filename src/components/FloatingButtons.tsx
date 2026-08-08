import { Instagram } from "lucide-react";
import { CONTACT } from "@/data/photos";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.72c0 4.46-3.63 8.08-8.09 8.08a8.2 8.2 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.02 8.02 0 0 1-1.23-4.29c0-4.45 3.63-8.08 8.09-8.08Zm-4.6 4.29c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.53 0 1.49 1.09 2.93 1.24 3.13.15.2 2.11 3.22 5.11 4.39 2.5.98 3.01.78 3.55.73.54-.05 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.62-.92-2.22-.24-.57-.49-.5-.67-.51h-.57Z" />
    </svg>
  );
}

export function FloatingButtons() {
  const base =
    "glass glass-hover group relative grid h-16 w-16 place-items-center rounded-full text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none";

  return (
    <div className="fixed right-4 bottom-4 z-80 flex flex-col items-center gap-4 sm:right-6 sm:bottom-6">
      <a
        href={CONTACT.instagram}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir o perfil do Studio Leandro Photografia no Instagram"
        className={base}
        style={{
          animation: "float-soft 5s ease-in-out infinite, pulse-ring 3.4s ease-out infinite",
        }}
      >
        <Instagram className="h-7 w-7 text-primary" />
        <span className="glass pointer-events-none absolute right-full mr-3 hidden rounded-full px-3 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Instagram
        </span>
      </a>

      <a
        href={`https://wa.me/${CONTACT.whatsappDigits}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Conversar no WhatsApp"
        className={base}
        style={{
          animation: "float-soft 4.2s ease-in-out infinite, pulse-ring 3.4s ease-out infinite",
        }}
      >
        <WhatsAppIcon className="h-8 w-8 text-primary" />
        <span className="glass pointer-events-none absolute right-full mr-3 hidden rounded-full px-3 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}