import cedroNoturno from "@/assets/p-cedro-noturno.jpg";
import oudImperial from "@/assets/p-oud-imperial.jpg";
import vetiverPaulista from "@/assets/p-vetiver-paulista.jpg";
import rosaNegra from "@/assets/p-rosa-negra.jpg";
import jasmimNoite from "@/assets/p-jasmim-noite.jpg";
import orquideaAmbar from "@/assets/p-orquidea-ambar.jpg";
import bergamotaReal from "@/assets/p-bergamota-real.jpg";
import neroliSolar from "@/assets/p-neroli-solar.jpg";
import limaVerde from "@/assets/p-lima-verde.jpg";

export type CategoryId = "amadeirados" | "florais" | "citricos";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  cover: string;
}

export interface Perfume {
  slug: string;
  name: string;
  category: CategoryId;
  concentration: string;
  volumeMl: number;
  price: number;
  short: string;
  description: string;
  notes: { topo: string[]; coracao: string[]; fundo: string[] };
  image: string;
}

export const categories: Category[] = [
  {
    id: "amadeirados",
    name: "Amadeirados",
    tagline: "Profundidade e mistério",
    description: "Cedro, oud, vetiver e sândalo. Composições quentes que permanecem na pele como uma lembrança.",
    cover: oudImperial,
  },
  {
    id: "florais",
    name: "Florais",
    tagline: "Sensualidade lapidada",
    description: "Rosas escuras, jasmim noturno e orquídeas raras, em buquês opulentos e contemporâneos.",
    cover: rosaNegra,
  },
  {
    id: "citricos",
    name: "Cítricos",
    tagline: "Luz e frescor",
    description: "Bergamota, neroli e lima. Aberturas luminosas com fundos elegantes e duradouros.",
    cover: bergamotaReal,
  },
];

export const perfumes: Perfume[] = [
  {
    slug: "cedro-noturno",
    name: "Cedro Noturno",
    category: "amadeirados",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 690,
    short: "Cedro do Atlas envolto em couro e fumaça.",
    description:
      "Uma caminhada pela floresta depois da chuva, ao cair da noite. O cedro seco encontra o couro macio e um fio de incenso, criando uma assinatura serena e magnética.",
    notes: { topo: ["Cardamomo", "Pimenta-rosa"], coracao: ["Cedro do Atlas", "Couro"], fundo: ["Sândalo", "Incenso", "Âmbar"] },
    image: cedroNoturno,
  },
  {
    slug: "oud-imperial",
    name: "Oud Imperial",
    category: "amadeirados",
    concentration: "Extrait de Parfum",
    volumeMl: 100,
    price: 1290,
    short: "Oud raro, açafrão e resinas preciosas.",
    description:
      "Nossa criação mais intensa. O oud envelhecido revela facetas balsâmicas e animálicas, suavizadas por açafrão e rosa turca. Para noites que merecem ser lembradas.",
    notes: { topo: ["Açafrão", "Bergamota"], coracao: ["Oud", "Rosa turca"], fundo: ["Benjoim", "Patchouli", "Labdanum"] },
    image: oudImperial,
  },
  {
    slug: "vetiver-paulista",
    name: "Vetiver Paulista",
    category: "amadeirados",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 740,
    short: "Vetiver terroso com pimenta-do-reino.",
    description:
      "Uma homenagem à garoa de São Paulo. Raízes de vetiver úmidas, pimenta-do-reino e um toque de café torrado, sobre uma base de couro e musgo.",
    notes: { topo: ["Pimenta-do-reino", "Grapefruit"], coracao: ["Vetiver", "Café"], fundo: ["Couro", "Musgo de carvalho"] },
    image: vetiverPaulista,
  },
  {
    slug: "rosa-negra",
    name: "Rosa Negra",
    category: "florais",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 820,
    short: "Rosa damascena aveludada sobre patchouli.",
    description:
      "A rosa em sua forma mais sombria. Pétalas aveludadas, frutas vermelhas maduras e um fundo de patchouli e baunilha negra que se revela lentamente.",
    notes: { topo: ["Framboesa", "Lichia"], coracao: ["Rosa damascena", "Peônia"], fundo: ["Patchouli", "Baunilha negra"] },
    image: rosaNegra,
  },
  {
    slug: "jasmim-da-noite",
    name: "Jasmim da Noite",
    category: "florais",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 760,
    short: "Jasmim sambac e tuberosa em pleno florescer.",
    description:
      "Inspirado nos jardins que só perfumam após o pôr do sol. Jasmim sambac e tuberosa cremosa, aquecidos por almíscar branco e um traço de mel.",
    notes: { topo: ["Néroli", "Mandarina"], coracao: ["Jasmim sambac", "Tuberosa"], fundo: ["Almíscar branco", "Mel", "Sândalo"] },
    image: jasmimNoite,
  },
  {
    slug: "orquidea-ambar",
    name: "Orquídea Âmbar",
    category: "florais",
    concentration: "Extrait de Parfum",
    volumeMl: 100,
    price: 880,
    short: "Orquídea, íris pó-de-arroz e âmbar.",
    description:
      "Elegância empoada e envolvente. A orquídea rara encontra a íris pó-de-arroz e repousa em um âmbar dourado e suave, como seda na pele.",
    notes: { topo: ["Violeta", "Pera"], coracao: ["Orquídea", "Íris"], fundo: ["Âmbar", "Fava tonka"] },
    image: orquideaAmbar,
  },
  {
    slug: "bergamota-real",
    name: "Bergamota Real",
    category: "citricos",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 590,
    short: "Bergamota da Calábria e limão siciliano.",
    description:
      "Um raio de sol mediterrâneo. Bergamota vibrante e limão siciliano repousam sobre chá branco e madeiras claras, para dias que pedem leveza com sofisticação.",
    notes: { topo: ["Bergamota", "Limão siciliano"], coracao: ["Chá branco", "Petitgrain"], fundo: ["Cedro branco", "Almíscar"] },
    image: bergamotaReal,
  },
  {
    slug: "neroli-solar",
    name: "Néroli Solar",
    category: "citricos",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 640,
    short: "Laranja sanguínea, néroli e pimenta-rosa.",
    description:
      "Luminoso e levemente picante. Laranja sanguínea suculenta, flor de laranjeira e pimenta-rosa, com um fundo ambarado que aquece o frescor.",
    notes: { topo: ["Laranja sanguínea", "Pimenta-rosa"], coracao: ["Néroli", "Flor de laranjeira"], fundo: ["Âmbar", "Vetiver"] },
    image: neroliSolar,
  },
  {
    slug: "lima-verde",
    name: "Lima Verde",
    category: "citricos",
    concentration: "Eau de Toilette",
    volumeMl: 100,
    price: 560,
    short: "Lima, hortelã e chá verde.",
    description:
      "Frescor verde e revigorante. Lima espremida na hora, folhas de hortelã e chá verde, sobre um fundo limpo de musgo e almíscar.",
    notes: { topo: ["Lima", "Hortelã"], coracao: ["Chá verde", "Manjericão"], fundo: ["Musgo", "Almíscar"] },
    image: limaVerde,
  },
];

export const categoryIds: CategoryId[] = categories.map((c) => c.id);

export function isCategoryId(value: unknown): value is CategoryId {
  return typeof value === "string" && (categoryIds as string[]).includes(value);
}

export function getCategory(id: CategoryId): Category {
  return categories.find((c) => c.id === id)!;
}

export function getPerfume(slug: string): Perfume | undefined {
  return perfumes.find((p) => p.slug === slug);
}

export function perfumesByCategory(id?: CategoryId): Perfume[] {
  return id ? perfumes.filter((p) => p.category === id) : perfumes;
}

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export function formatPrice(value: number): string {
  return brl.format(value);
}
