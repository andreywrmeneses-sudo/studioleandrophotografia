import hero from "@/assets/hero.jpg";
import sport1 from "@/assets/sport-1.jpg";
import sport2 from "@/assets/sport-2.jpg";
import sport3 from "@/assets/sport-3.jpg";
import sport4 from "@/assets/sport-4.jpg";
import sport5 from "@/assets/sport-5.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import other1 from "@/assets/other-1.jpg";
import other2 from "@/assets/other-2.jpg";
import other3 from "@/assets/other-3.jpg";
import other4 from "@/assets/other-4.jpg";
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
};

export const heroPhoto = hero;
export const studioPhoto = studio;
export const editorialPhoto = other4;

export const sportsPhotos: Photo[] = [
  {
    id: "esp-1",
    src: sport1,
    alt: "Jogador de futebol no ar chutando a bola sob refletores",
    category: "Esportes",
    title: "O instante decisivo",
    caption: "O instante decisivo.",
  },
  {
    id: "esp-2",
    src: sport2,
    alt: "Atleta de atletismo disparando dos blocos de largada",
    category: "Esportes",
    title: "Velocidade",
    caption: "Velocidade.",
  },
  {
    id: "esp-3",
    src: sport3,
    alt: "Jogador de basquete enterrando a bola em quadra escura",
    category: "Esportes",
    title: "Precisão",
    caption: "Precisão.",
  },
  {
    id: "esp-4",
    src: sport4,
    alt: "Retrato emocionado de atleta após a vitória",
    category: "Esportes",
    title: "Emoção",
    caption: "Emoção.",
  },
  {
    id: "esp-5",
    src: sport5,
    alt: "Ciclista em alta velocidade em pista molhada à noite",
    category: "Esportes",
    title: "Superação",
    caption: "Superação.",
  },
];

export const eventsPhotos: Photo[] = [
  {
    id: "evt-1",
    src: event1,
    alt: "Noivos abraçados em luz dourada durante a celebração",
    category: "Eventos",
    title: "O primeiro abraço",
    caption: "O primeiro abraço.",
  },
  {
    id: "evt-2",
    src: event2,
    alt: "Convidados brindando e sorrindo em festa noturna",
    category: "Eventos",
    title: "Brinde",
    caption: "Celebração.",
  },
  {
    id: "evt-3",
    src: event3,
    alt: "Noiva segurando buquê em luz suave de janela",
    category: "Eventos",
    title: "Detalhes",
    caption: "Detalhes.",
  },
  {
    id: "evt-4",
    src: event4,
    alt: "Criança soprando velas de aniversário",
    category: "Eventos",
    title: "Aniversários",
    caption: "Espontaneidade.",
  },
  {
    id: "evt-5",
    src: event5,
    alt: "Casal dançando em salão de festas iluminado",
    category: "Eventos",
    title: "A primeira dança",
    caption: "Conexão.",
  },
];

export const beyondPhotos: Photo[] = [
  {
    id: "alm-1",
    src: other1,
    alt: "Retrato de estúdio com meia luz e sombra marcada",
    category: "Retratos",
    title: "Retrato em contraluz",
  },
  {
    id: "alm-2",
    src: other2,
    alt: "Fotografia urbana noturna com reflexos de neon na chuva",
    category: "Urbano",
    title: "Cidade molhada",
  },
  {
    id: "alm-3",
    src: other3,
    alt: "Casal sorrindo em terraço durante o pôr do sol",
    category: "Lifestyle",
    title: "Golden hour",
  },
  {
    id: "alm-4",
    src: other4,
    alt: "Mãos segurando câmera analógica em preto e branco",
    category: "Ensaios",
    title: "Ofício",
  },
  {
    id: "alm-5",
    src: studio,
    alt: "Interior do estúdio fotográfico com iluminação profissional",
    category: "Projetos especiais",
    title: "Bastidores",
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