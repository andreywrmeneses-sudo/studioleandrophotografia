import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/data/photos";

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = useCallback(
    () => index !== null && onIndexChange((index + 1) % photos.length),
    [index, onIndexChange, photos.length],
  );
  const prev = useCallback(
    () => index !== null && onIndexChange((index - 1 + photos.length) % photos.length),
    [index, onIndexChange, photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, onClose]);

  if (!mounted || !open) return null;
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title ?? photo.alt}
      className="fixed inset-0 z-100 flex items-center justify-center bg-graphite/95 p-4 backdrop-blur-xl"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="glass glass-hover absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full text-foreground"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Foto anterior"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="glass glass-hover absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full text-foreground sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próxima foto"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="glass glass-hover absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full text-foreground sm:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure
        className="max-h-[88vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "blur-in .3s ease both" }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="eyebrow text-primary">{photo.category}</span>
          <span className="text-sm text-muted-foreground">{photo.title ?? photo.alt}</span>
          <span className="text-xs text-muted-foreground">
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}