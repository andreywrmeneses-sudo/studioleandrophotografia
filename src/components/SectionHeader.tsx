import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  total = "05",
  eyebrow,
  title,
  text,
  align = "left",
}: {
  index?: string;
  total?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {index && (
          <span className="eyebrow text-primary">
            {index} / {total}
          </span>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      </div>
      <h2 className="text-display mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}