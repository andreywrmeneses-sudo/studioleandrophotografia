import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export type TestimonialItem = {
  quote: string;
  name: string;
  context: string;
};

export function Testimonials({
  items,
  note = "Conteúdo demonstrativo e editável — substitua pelos depoimentos reais dos seus clientes.",
}: {
  items: TestimonialItem[];
  note?: string;
}) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.quote} delay={i * 90}>
            <figure className="glass glass-hover relative h-full rounded-2xl p-7">
              <Quote className="h-8 w-8 text-primary/70" aria-hidden />
              <blockquote className="text-display mt-5 text-lg leading-snug text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                <span className="text-sm text-foreground/85">{t.name}</span>
                <span className="eyebrow ml-auto">{t.context}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}