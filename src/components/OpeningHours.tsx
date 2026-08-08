import { Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const HOURS = [
  { days: "Terça a sexta", time: "08:00 às 19:00" },
  { days: "Domingo", time: "10:00 às 19:00" },
];

export function OpeningHours() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {HOURS.map((h, i) => (
        <Reveal key={h.days} delay={i * 100}>
          <div className="glass glass-hover flex items-center gap-5 rounded-2xl p-7">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
              <Clock className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{h.days}</p>
              <p className="text-display mt-2 text-2xl text-foreground">{h.time}</p>
            </div>
            <span
              className="ml-auto h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_var(--color-cyan-signature)]"
              aria-hidden
            />
          </div>
        </Reveal>
      ))}
      <p className="text-xs text-muted-foreground md:col-span-2">
        Horários de atendimento no studio. Para outros dias e coberturas externas, fale conosco pelo
        WhatsApp.
      </p>
    </div>
  );
}