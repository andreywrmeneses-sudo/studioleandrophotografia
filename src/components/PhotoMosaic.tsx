import { useState } from "react";
import type { Photo } from "@/data/photos";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

const spans = [
  "sm:col-span-4 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-3 sm:row-span-2",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
];

export function PhotoMosaic({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[42vw] grid-flow-row-dense grid-cols-1 gap-3 sm:auto-rows-[11vw] sm:grid-cols-6 sm:gap-4">
        {photos.map((photo, i) => (
          <Reveal
            key={photo.id}
            delay={(i % 4) * 70}
            className={`${spans[i] ?? "sm:col-span-2"} min-h-0`}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar fotografia: ${photo.alt}`}
              className="group relative block h-full w-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
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
                className="relative h-full w-full object-contain object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-graphite/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-xl ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-primary/45 group-hover:shadow-[0_0_46px_-12px_var(--color-cyan-signature)]" />
              {photo.featured && (
                <span className="glass absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] tracking-[0.22em] text-gold uppercase">
                  Destaque
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-graphite/85 to-transparent p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow block text-primary">{photo.category}</span>
                <span className="text-display mt-1 block text-sm text-foreground">
                  {photo.title}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}