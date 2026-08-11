import { MapPin } from "lucide-react";
import { CONTACT, studioPhoto } from "@/data/photos";
import { Reveal } from "./Reveal";

export function StudioLocation() {
  return (
    <Reveal>
      <div className="glass grid overflow-hidden rounded-3xl md:grid-cols-2">
        <img
          src={studioPhoto}
          alt="Interior do Studio Leandro Photografia com iluminação profissional"
          loading="lazy"
          className="h-56 w-full object-cover md:h-full md:min-h-[320px]"
        />
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
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
        </div>
      </div>
    </Reveal>
  );
}