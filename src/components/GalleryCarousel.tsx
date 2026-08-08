import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import type { Photo } from "@/data/photos";
import { Lightbox } from "./Lightbox";

type Variant = "wide" | "portrait" | "offset";

const ratio: Record<Variant, string> = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  offset: "aspect-[3/2]",
};

export function GalleryCarousel({
  photos,
  variant = "wide",
  autoplay = false,
  variantArrows = "default",
  label,
}: {
  photos: Photo[];
  variant?: Variant;
  autoplay?: boolean;
  variantArrows?: "default" | "prominent";
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const total = photos.length;

  const scrollTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const index = ((i % total) + total) % total;
      const child = track.children[index] as HTMLElement | undefined;
      if (!child) return;
      const left = child.offsetLeft - track.offsetLeft;
      track.scrollTo({ left, behavior: "smooth" });
      setActive(index);
    },
    [total],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const items = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestD = Infinity;
      items.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft - track.offsetLeft + el.clientWidth / 2 - center);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!autoplay || paused || lightbox !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => scrollTo((active + 1) % photos.length), 5200);
    return () => clearInterval(t);
  }, [autoplay, paused, active, photos.length, scrollTo, lightbox]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <figure
            key={photo.id}
            className={`group relative shrink-0 snap-center ${
              variant === "portrait"
                ? "w-[78%] sm:w-[46%] lg:w-[30%]"
                : variant === "offset"
                  ? `w-[86%] sm:w-[62%] lg:w-[48%] ${i % 2 ? "lg:mt-14" : ""}`
                  : "w-[88%] sm:w-[70%] lg:w-[58%]"
            }`}
          >
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Ampliar fotografia: ${photo.alt}`}
              className={`relative block w-full overflow-hidden rounded-2xl ${ratio[variant]} focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none`}
            >
              <img
                src={photo.src}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-2xl"
              />
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="relative h-full w-full object-contain object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
              <span className="glass absolute right-3 bottom-3 grid h-9 w-9 place-items-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-4 w-4 text-primary" />
              </span>
            </button>
            {photo.caption && (
              <figcaption className="mt-3 flex items-baseline gap-3">
                <span className="h-px w-6 bg-primary/70" aria-hidden />
                <span className="text-display text-sm text-foreground/90">{photo.caption}</span>
                <span className="eyebrow ml-auto">{photo.category}</span>
              </figcaption>
            )}
            {!photo.caption && photo.title && (
              <figcaption className="mt-3 flex items-baseline gap-3">
                <span className="eyebrow text-primary">{photo.category}</span>
                <span className="text-sm text-muted-foreground">{photo.title}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {variantArrows === "prominent" && (
        <>
          <button
            type="button"
            aria-label="Fotografia anterior"
            onClick={() => scrollTo(active - 1)}
            className="glass glass-hover absolute top-1/2 left-3 z-10 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-primary/40 text-foreground shadow-[0_0_36px_-10px_var(--color-cyan-signature)] sm:grid"
          >
            <ArrowLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            type="button"
            aria-label="Próxima fotografia"
            onClick={() => scrollTo(active + 1)}
            className="glass glass-hover absolute top-1/2 right-6 z-10 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-primary/40 text-foreground shadow-[0_0_36px_-10px_var(--color-cyan-signature)] sm:grid"
          >
            <ArrowRight className="h-6 w-6 text-primary" />
          </button>
        </>
      )}

      <div className="mt-7 flex items-center gap-4">
        <button
          type="button"
          aria-label="Fotografia anterior"
          onClick={() => scrollTo(active - 1)}
          className={`glass glass-hover grid place-items-center rounded-full text-foreground ${variantArrows === "prominent" ? "h-14 w-14 border border-primary/40" : "h-11 w-11"}`}
        >
          <ArrowLeft className={variantArrows === "prominent" ? "h-5 w-5 text-primary" : "h-4 w-4"} />
        </button>
        <button
          type="button"
          aria-label="Próxima fotografia"
          onClick={() => scrollTo(active + 1)}
          className={`glass glass-hover grid place-items-center rounded-full text-foreground ${variantArrows === "prominent" ? "h-14 w-14 border border-primary/40" : "h-11 w-11"}`}
        >
          <ArrowRight className={variantArrows === "prominent" ? "h-5 w-5 text-primary" : "h-4 w-4"} />
        </button>

        <div className="ml-2 flex flex-1 items-center gap-2">
          {photos.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`Ir para a fotografia ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollTo(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-primary" : "w-5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <span className="eyebrow hidden sm:block">
          {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </span>
      </div>

      <Lightbox
        photos={photos}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </div>
  );
}