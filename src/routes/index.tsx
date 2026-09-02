import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { Testimonials } from "@/components/Testimonials";
import { PhotoMosaic } from "@/components/PhotoMosaic";
import { StudioLocation } from "@/components/StudioLocation";
import { OpeningHours } from "@/components/OpeningHours";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import leandroPhoto from "@/assets/leandro.webp";
import {
  CONTACT,
  bestOfMonthPhotos,
  beyondPhotos,
  editorialPhoto,
  eventsPhotos,
  sportsPhotos,
  weddingHero,
} from "@/data/photos";

const TITLE = "Studio Leandro Photografia | Fotografia Profissional";
const DESCRIPTION =
  "Studio Leandro Photografia — fotografia profissional para esportes, eventos, casamentos e momentos que merecem ser eternizados.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          additionalType: "https://schema.org/ProfessionalService",
          name: "Studio Leandro Photografia",
          description: DESCRIPTION,
          telephone: "+5598970173271",
          email: CONTACT.email,
          sameAs: [CONTACT.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida dos Franceses, Nº 4, Bairro Santo Antônio",
            addressLocality: "São Luís",
            addressRegion: "MA",
            postalCode: "65036-284",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Sunday"],
              opens: "10:00",
              closes: "19:00",
            },
          ],
        }),
      },
    ],
  }),
});

function Divider() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
      <div className="hairline" aria-hidden />
    </div>
  );
}

function Index() {
  return (
    <div className="bg-graphite">
      <ScrollProgress />
      <Header />
      <FloatingButtons />

      <main>
        <Hero />

        {/* 01 — Apresentação do Studio */}
        <section className="mx-auto max-w-[1400px] px-4 py-28 sm:px-8 sm:py-36">
          <SectionHeader
            index="01"
            eyebrow="A Mente por detrás do Studio"
            title="Mais do que fotografar. Contar histórias."
            text="O trabalho do Studio Leandro Photografia nasce da atenção ao que acontece entre um quadro e outro: a emoção, o movimento, a personalidade de quem está diante da lente, os detalhes que passam despercebidos e os momentos espontâneos que ninguém planeja."
          />

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <blockquote className="glass rounded-3xl p-8 sm:p-10">
                <Parallax strength={14}>
                <span className="eyebrow text-primary">Leandro</span>
                <p className="text-display mt-5 text-2xl leading-snug text-foreground sm:text-3xl">
                  “Sou um fotógrafo com muito amor e dedicação ao meu trabalho. Sempre estou
                  registrando tudo e guardando as maiores e inesquecíveis lembranças!”
                </p>
                </Parallax>
              </blockquote>
            </Reveal>

            <Reveal delay={140}>
              <Parallax strength={34}>
                <figure className="overflow-hidden rounded-[2rem] bg-[var(--color-cyan-signature)]">
                  <img
                    src={leandroPhoto}
                    alt="Leandro, fotógrafo do Studio Leandro Photografia, sorrindo com a câmera no colo"
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              </Parallax>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="glass mt-10 flex flex-col gap-4 rounded-3xl p-8 sm:flex-row sm:items-center sm:gap-8">
              <span className="eyebrow text-primary shrink-0">Nossa premissa</span>
              <p className="text-display text-2xl leading-snug text-foreground sm:text-3xl">
                “Cada clique é pensado para contar uma história.”
              </p>
            </div>
          </Reveal>
        </section>

        <Divider />

        {/* 02 — Fotografia esportiva */}
        <section id="esportes" className="bg-graphite py-28 sm:py-36">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <SectionHeader
              index="02"
              eyebrow="Fotografia esportiva"
              title="Esporte em movimento."
              text="Cada segundo importa. Cada movimento conta. Registramos a intensidade do esporte em imagens que preservam a emoção de cada momento."
            />
          </div>
          <div className="mt-16 pl-4 sm:pl-8 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]">
            <GalleryCarousel
              photos={sportsPhotos}
              variant="wide"
              autoplay
              label="Galeria de fotografia esportiva"
            />
          </div>
        </section>

        {/* Depoimentos — esporte */}
        <section className="mx-auto max-w-[1400px] px-4 pb-28 sm:px-8 sm:pb-36">
          <Testimonials
            items={[
              {
                quote: "Fotos que realmente conseguiram transmitir a energia daquele momento.",
                context: "Cobertura esportiva",
              },
              {
                quote: "Cada detalhe ficou incrível. O resultado superou minhas expectativas.",
                context: "Campeonato",
              },
              {
                quote: "Profissionalismo do início ao fim.",
                context: "Equipe esportiva",
              },
            ]}
          />
        </section>

        {/* Imagem editorial de transição */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl">
                <img
                  src={editorialPhoto}
                  alt="Bombeira militar sendo resfriada com água após uma prova de resistência"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className="eyebrow text-primary">Coragem em cada quadro</span>
                <p className="text-display mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Uma ação de humanidade, registrada eternamente no tempo.
                </p>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  Existem gestos que duram segundos e significam uma vida inteira. A fotografia é o
                  que impede que eles se percam: o esforço até o limite, o socorro que chega, a mão
                  estendida a quem precisa. Registrar atos heroicos é transformar coragem em memória
                  — imagens que honram quem age quando ninguém está olhando.
                </p>
                <a
                  href="#contato"
                  className="glass glass-hover mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-foreground"
                >
                  Solicitar orçamento
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 — Eventos */}
        <section id="eventos" className="bg-midnight py-28 sm:py-36">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <SectionHeader
              index="03"
              eyebrow="Eventos e celebrações"
              title="Histórias que acontecem uma vez. Memórias para sempre."
              text="Casamentos, aniversários, celebrações e eventos sociais registrados com elegância, intimidade e respeito pelo que acontece de verdade."
              align="center"
            />

            <Reveal delay={120}>
              <figure className="mt-16 overflow-hidden rounded-3xl">
                <img
                  src={weddingHero}
                  alt="Noivos se olhando com carinho durante a cerimônia, cercados pela família"
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={1080}
                  className="aspect-[21/9] w-full object-cover"
                />
              </figure>
            </Reveal>

            <div className="mt-16">
              <GalleryCarousel
                photos={eventsPhotos}
                variant="portrait"
                label="Galeria de fotografia de eventos"
              />
            </div>

            <div className="mt-20">
              <Testimonials
                items={[
                  {
                    quote: "Sentimos que o dia foi contado exatamente como ele aconteceu.",
                    context: "Casamento",
                  },
                  {
                    quote: "As fotos guardaram detalhes que a gente nem percebeu na hora.",
                    context: "Aniversário",
                  },
                  {
                    quote: "Discrição total durante a festa e um resultado impecável.",
                    context: "Evento social",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* 04 — Além do momento */}
        <section id="portfolio" className="py-28 sm:py-36">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <SectionHeader
                index="04"
                eyebrow="Fotos de Maratonas"
                title="Cada esforço valeu a pena."
                text="Na maratona, a fotografia é o troféu que fica. É ela que guarda o suor do percurso, o alívio da linha de chegada e a medalha erguida — a prova visível de que cada treino, cada quilômetro e cada superação tiveram sentido."
              />
            </div>
          </div>

          <div className="mt-16 pl-4 sm:pl-8 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]">
            <GalleryCarousel
              photos={beyondPhotos}
              variant="offset"
              variantArrows="prominent"
              label="Galeria de fotografias de maratonas"
            />
          </div>
        </section>

        <Divider />

        {/* 05 — Melhores fotos do mês */}
        <section className="mx-auto max-w-[1400px] px-4 py-28 sm:px-8 sm:py-36">
          <SectionHeader
            index="05"
            eyebrow="Curadoria"
            title="Melhores fotos do mês"
            text="Uma seleção editorial das imagens que mais se destacaram na última temporada de trabalhos."
          />
          <div className="mt-16">
            <PhotoMosaic photos={bestOfMonthPhotos} />
          </div>
        </section>

        {/* Studio + mapa */}
        <section id="studio" className="bg-midnight py-28 sm:py-36">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <SectionHeader
              eyebrow="Localização"
              title="Visite o Studio Leandro Photografia"
            />
            <div className="mt-14">
              <StudioLocation />
            </div>

            <div className="mt-24">
              <SectionHeader eyebrow="Atendimento" title="Horários de atendimento" />
              <div className="mt-12">
                <OpeningHours />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto max-w-[1400px] px-4 py-28 sm:px-8 sm:py-36">
          <SectionHeader
            eyebrow="Contato"
            title="Vamos transformar seu momento em imagem?"
            text="Conte o que você tem em mente. Respondemos com as possibilidades de cobertura e o orçamento."
            align="center"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <ContactForm />

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="glass glass-hover flex items-start gap-4 rounded-2xl p-6"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="eyebrow block">E-mail</span>
                  <span className="mt-2 block break-all text-sm text-foreground">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsappDigits}`}
                target="_blank"
                rel="noreferrer noopener"
                className="glass glass-hover flex items-start gap-4 rounded-2xl p-6"
              >
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="eyebrow block">WhatsApp</span>
                  <span className="mt-2 block text-sm text-foreground">{CONTACT.whatsappLabel}</span>
                </span>
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="glass glass-hover flex items-start gap-4 rounded-2xl p-6"
              >
                <Instagram className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="eyebrow block">Instagram</span>
                  <span className="mt-2 block text-sm text-foreground">
                    {CONTACT.instagramLabel}
                  </span>
                </span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="glass glass-hover flex items-start gap-4 rounded-2xl p-6"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="eyebrow block">Endereço</span>
                  <span className="mt-2 block text-sm text-foreground">{CONTACT.address}</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
