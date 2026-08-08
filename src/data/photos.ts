import hero from "@/assets/hero.jpg";
import run1 from "@/assets/run-1.webp.asset.json";
import run2 from "@/assets/run-2.webp.asset.json";
import run3 from "@/assets/run-3.webp.asset.json";
import run4 from "@/assets/run-4.webp.asset.json";
import run5 from "@/assets/run-5.webp.asset.json";
import wed1 from "@/assets/casamento-1.jpg.asset.json";
import wed2 from "@/assets/casamento-2.jpg.asset.json";
import wed3 from "@/assets/casamento-3.jpg.asset.json";
import wed4 from "@/assets/casamento-4.jpg.asset.json";
import wed5 from "@/assets/casamento-5.webp.asset.json";
import heroic from "@/assets/hero-bombeiro.jpg.asset.json";
import mar1 from "@/assets/maratona-1.webp.asset.json";
import mar2 from "@/assets/maratona-2.webp.asset.json";
import mar3 from "@/assets/maratona-3.webp.asset.json";
import mar4 from "@/assets/maratona-4.webp.asset.json";
import mar5 from "@/assets/maratona-5.webp.asset.json";
import studio from "@/assets/studio.jpg";

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
};

export const heroPhoto = hero;
export const studioPhoto = studio;
export const editorialPhoto = heroic.url;
export const weddingHero = wed1.url;

export const sportsPhotos: Photo[] = [
  {
    id: "esp-1",
    src: run2.url,
    alt: "Corredor sorrindo com os braços erguidos durante a Corrida Corre Raposa",
    category: "Esportes",
    title: "A alegria da chegada",
    caption: "A alegria da chegada.",
  },
  {
    id: "esp-2",
    src: run4.url,
    alt: "Atleta em ritmo forte na avenida durante prova de rua",
    category: "Esportes",
    title: "Ritmo",
    caption: "Ritmo.",
  },
  {
    id: "esp-3",
    src: run1.url,
    alt: "Corredor concentrado no esforço final da prova",
    category: "Esportes",
    title: "Esforço",
    caption: "Esforço.",
  },
  {
    id: "esp-4",
    src: run3.url,
    alt: "Corredora comemorando de braços abertos ao cruzar o percurso",
    category: "Esportes",
    title: "Superação",
    caption: "Superação.",
  },
  {
    id: "esp-5",
    src: run5.url,
    alt: "Duas participantes abraçadas e sorrindo após a corrida",
    category: "Esportes",
    title: "Celebração",
    caption: "Celebração.",
  },
];

export const eventsPhotos: Photo[] = [
  {
    id: "evt-1",
    src: wed1.url,
    alt: "Noivos se olhando com carinho durante a cerimônia, cercados pela família",
    category: "Eventos",
    title: "O primeiro abraço",
    caption: "O primeiro abraço.",
    fit: "cover",
  },
  {
    id: "evt-2",
    src: wed2.url,
    alt: "Noiva sorrindo com o buquê ao lado do noivo durante a recepção",
    category: "Eventos",
    title: "Alegria",
    caption: "Celebração.",
    fit: "cover",
  },
  {
    id: "evt-3",
    src: wed3.url,
    alt: "Casal mostrando as alianças sorrindo ao ar livre após a cerimônia",
    category: "Eventos",
    title: "As alianças",
    caption: "Detalhes que ficam.",
  },
  {
    id: "evt-4",
    src: wed4.url,
    alt: "Noiva chegando com o buquê em luz natural",
    category: "Eventos",
    title: "A chegada",
    caption: "Espontaneidade.",
  },
  {
    id: "evt-5",
    src: wed5.url,
    alt: "Noivos abraçando um familiar emocionado durante a celebração",
    category: "Eventos",
    title: "Família",
    caption: "Conexão.",
  },
];

export const beyondPhotos: Photo[] = [
  {
    id: "alm-1",
    src: mar3.url,
    alt: "Três corredoras sorrindo com suas medalhas após a Corrida do Fogo",
    category: "Maratona",
    title: "Medalhas conquistadas",
  },
  {
    id: "alm-2",
    src: mar5.url,
    alt: "Corredora comemorando com a medalha sob os jatos d'água na chegada",
    category: "Maratona",
    title: "A chegada",
  },
  {
    id: "alm-3",
    src: mar4.url,
    alt: "Corredor comemorando de braços erguidos ao cruzar o pórtico de chegada",
    category: "Maratona",
    title: "Braços para o alto",
  },
  {
    id: "alm-4",
    src: mar1.url,
    alt: "Atleta veterana no pódio exibindo a medalha da Corrida do Fogo",
    category: "Maratona",
    title: "Pódio",
  },
  {
    id: "alm-5",
    src: mar2.url,
    alt: "Casal de corredores abraçados exibindo as medalhas após a prova",
    category: "Maratona",
    title: "Juntos na linha de chegada",
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
  pick(beyondPhotos, 3, "mes-9", true),
];

export const CONTACT = {
  whatsappDigits: "5598970173271",
  whatsappLabel: "+55 98 7017-3271",
  email: "Studioleandrophotografia@gmail.com",
  instagram: "https://www.instagram.com/lleandrofotos/",
  instagramLabel: "@lleandrofotos",
  address: "Avenida dos Franceses, Bairro Santo Antônio, Nº 4",
};