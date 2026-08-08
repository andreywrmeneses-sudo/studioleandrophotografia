import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export type TestimonialItem = {
  quote: string;
  name?: string;
  context: string;
};

export function Testimonials({
  items,
}: {
  items: TestimonialItem[];
}) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.quote} delay={i * 90}>
            <figure className="glass glass-hover relative flex h-full flex-col items-center rounded-2xl p-7 text-center">
              <Quote className="h-8 w-8 text-primary/70" aria-hidden />
              <blockquote className="text-display mt-5 text-lg leading-snug text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex w-full flex-col items-center gap-2 pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                <span className="eyebrow">{t.context}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}