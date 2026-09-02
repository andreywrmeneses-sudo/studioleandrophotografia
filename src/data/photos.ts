import hero from "@/assets/hero.webp";
import run1 from "@/assets/run-1.webp";
import run2 from "@/assets/run-2.webp";
import run3 from "@/assets/run-3.webp";
import run4 from "@/assets/run-4.webp";
import run5 from "@/assets/run-5.webp";
import wed1 from "@/assets/casamento-1.webp";
import wed1hd from "@/assets/casamento-1-4k.webp";
import wed2 from "@/assets/casamento-2.webp";
import wed3 from "@/assets/casamento-3.webp";
import wed4 from "@/assets/casamento-4.webp";
import wed5 from "@/assets/casamento-5.webp";
import heroic from "@/assets/hero-bombeiro.webp";
import mar1 from "@/assets/maratona-1.webp";
import mar2 from "@/assets/maratona-2.webp";
import mar3 from "@/assets/maratona-3.webp";
import mar4 from "@/assets/maratona-4.webp";
import mar5 from "@/assets/maratona-5.webp";
import studio from "@/assets/studio.webp";

/**
 * Sistema de assets fotográficos.
 * Para trocar uma foto: substitua o arquivo em src/assets/ (mesmo nome)
 * ou aponte `src` para a nova imagem importada. Todo o resto continua funcionando.
 */
export type Photo = {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
  description?: string;
  caption?: string;
  featured?: boolean;
  /** "cover" preenche a caixa focando no centro; padrão mostra a foto inteira */
  fit?: "cover" | "contain";
  /** ponto de foco quando fit = "cover" (ex.: "object-top") */
  focus?: string;
};

export const heroPhoto = hero;
export const studioPhoto = studio;
export const editorialPhoto = heroic;
export const weddingHero = wed1hd;

export const sportsPhotos: Photo[] = [
  {
    id: "esp-1",
    src: run2,
    alt: "Corredor sorrindo com os braços erguidos durante a Corrida Corre Raposa",
    category: "Esportes",
    title: "A alegria da chegada",
    caption: "A alegria da chegada.",
  },
  {
    id: "esp-2",
    src: run4,
    alt: "Atleta em ritmo forte na avenida durante prova de rua",
    category: "Esportes",
    title: "Ritmo",
    caption: "Ritmo.",
  },
  {
    id: "esp-3",
    src: run1,
    alt: "Corredor concentrado no esforço final da prova",
    category: "Esportes",
    title: "Esforço",
    caption: "Esforço.",
  },
  {
    id: "esp-4",
    src: run3,
    alt: "Corredora comemorando de braços abertos ao cruzar o percurso",
    category: "Esportes",
    title: "Superação",
    caption: "Superação.",
  },
  {
    id: "esp-5",
    src: run5,
    alt: "Duas participantes abraçadas e sorrindo após a corrida",
    category: "Esportes",
    title: "Celebração",
    caption: "Celebração.",
  },
];

export const eventsPhotos: Photo[] = [
  {
    id: "evt-1",
    src: wed1,
    alt: "Noivos se olhando com carinho durante a cerimônia, cercados pela família",
    category: "Eventos",
    title: "O primeiro abraço",
    caption: "O primeiro abraço.",
    fit: "cover",
  },
  {
    id: "evt-2",
    src: wed2,
    alt: "Noiva sorrindo com o buquê ao lado do noivo durante a recepção",
    category: "Eventos",
    title: "Alegria",
    caption: "Celebração.",
    fit: "cover",
  },
  {
    id: "evt-3",
    src: wed3,
    alt: "Casal mostrando as alianças sorrindo ao ar livre após a cerimônia",
    category: "Eventos",
    title: "As alianças",
    caption: "Detalhes que ficam.",
  },
  {
    id: "evt-4",
    src: wed4,
    alt: "Noiva chegando com o buquê em luz natural",
    category: "Eventos",
    title: "A chegada",
    caption: "Espontaneidade.",
  },
  {
    id: "evt-5",
    src: wed5,
    alt: "Noivos abraçando um familiar emocionado durante a celebração",
    category: "Eventos",
    title: "Família",
    caption: "Conexão.",
    fit: "cover",
    focus: "object-[50%_18%]",
  },
];

export const beyondPhotos: Photo[] = [
  {
    id: "alm-1",
    src: mar3,
    alt: "Três corredoras sorrindo com suas medalhas após a Corrida do Fogo",
    category: "Maratona",
    title: "Medalhas conquistadas",
  },
  {
    id: "alm-2",
    src: mar5,
    alt: "Corredora comemorando com a medalha sob os jatos d'água na chegada",
    category: "Maratona",
    title: "A chegada",
  },
  {
    id: "alm-3",
    src: mar4,
    alt: "Corredor comemorando de braços erguidos ao cruzar o pórtico de chegada",
    category: "Maratona",
    title: "Braços para o alto",
  },
  {
    id: "alm-4",
    src: mar1,
    alt: "Atleta veterana no pódio exibindo a medalha da Corrida do Fogo",
    category: "Maratona",
    title: "Pódio",
  },
  {
    id: "alm-5",
    src: mar2,
    alt: "Casal de corredores abraçados exibindo as medalhas após a prova",
    category: "Maratona",
    title: "Juntos na linha de chegada",
    fit: "cover",
  },
];

const pick = (list: Photo[], i: number, id: string, featured = false): Photo => ({
  ...(list[i] as Photo),
  id,
  featured,
});

export const bestOfMonthPhotos: Photo[] = [
  pick(sportsPhotos, 0, "mes-1", true),
  pick(eventsPhotos, 0, "mes-2"),
  pick(beyondPhotos, 0, "mes-3", true),
  pick(sportsPhotos, 2, "mes-4"),
  pick(eventsPhotos, 2, "mes-5"),
  pick(beyondPhotos, 1, "mes-6"),
  pick(sportsPhotos, 4, "mes-7"),
  pick(eventsPhotos, 4, "mes-8"),
  { ...pick(beyondPhotos, 3, "mes-9", true), fit: "cover", focus: "object-[50%_18%]" },
];

export const CONTACT = {
  whatsappDigits: "5598970173271",
  whatsappLabel: "+55 98 7017-3271",
  email: "Studioleandrophotografia@gmail.com",
  instagram: "https://www.instagram.com/lleandrofotos/",
  instagramLabel: "@lleandrofotos",
  address:
    "Avenida dos Franceses, Bairro Santo Antônio, Nº 4, CEP: 65036284, São Luís, Maranhão",
};