import { createFileRoute, Link } from "@tanstack/react-router";

import atelierImage from "@/assets/atelier.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Essência Nobre" },
      {
        name: "description",
        content: "Como um pequeno ateliê nos Jardins, em São Paulo, se tornou a Essência Nobre, perfumaria de nicho autoral.",
      },
      { property: "og:title", content: "Nossa História — Essência Nobre" },
      {
        property: "og:description",
        content: "De um pequeno ateliê nos Jardins a uma perfumaria de nicho autoral em São Paulo.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoriaPage,
});

const timeline = [
  {
    year: "2012",
    title: "O primeiro frasco",
    text: "Em um apartamento nos Jardins, nasce a primeira fórmula: um vetiver que lembrava a garoa paulistana.",
  },
  {
    year: "2016",
    title: "O ateliê",
    text: "Abrimos nosso ateliê, onde cada fragrância é composta, maturada por semanas e envasada à mão.",
  },
  {
    year: "2020",
    title: "Matérias-primas raras",
    text: "Firmamos parcerias diretas com produtores de oud, rosa damascena e bergamota da Calábria.",
  },
  {
    year: "Hoje",
    title: "Uma assinatura paulistana",
    text: "Nove criações autorais, produzidas em pequenos lotes para quem busca algo verdadeiramente único.",
  },
];

const values = [
  { title: "Pequenos lotes", text: "Produção limitada para garantir frescor e cuidado em cada frasco." },
  { title: "Alta concentração", text: "Fórmulas ricas em essências, com fixação e projeção marcantes." },
  { title: "Autoria", text: "Cada fragrância é criada do zero, sem cópias ou inspirações de terceiros." },
];

function HistoriaPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-44 text-center">
        <p className="eyebrow">Nossa história</p>
        <h1 className="mt-6 text-5xl leading-[1.1] md:text-7xl">
          Perfumes que contam a <em className="text-gold">alma</em> de uma cidade.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A Essência Nobre nasceu em São Paulo do desejo de criar perfumes com personalidade, longe da produção em massa.
          Cada fragrância é uma narrativa, composta com paciência e matérias-primas escolhidas uma a uma.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <img
          src={atelierImage}
          alt="Mãos de perfumista no ateliê da Essência Nobre"
          width={1280}
          height={1600}
          className="aspect-[21/9] w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28">
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2" aria-hidden />
          <ol className="space-y-16">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative grid gap-4 pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                <span className="absolute left-2.5 top-2 h-3 w-3 rotate-45 bg-primary md:left-1/2 md:-ml-1.5" aria-hidden />
                <div className={i % 2 === 0 ? "md:text-right" : "md:order-2"}>
                  <p className="font-display text-5xl text-gold">{item.year}</p>
                </div>
                <div className={i % 2 === 0 ? "" : "md:order-1 md:text-right"}>
                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3 lg:px-10">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="ornament mx-auto max-w-[8rem] text-xs">✦</div>
              <h3 className="mt-6 text-3xl">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <h2 className="text-4xl md:text-5xl">Encontre sua assinatura.</h2>
        <Button asChild variant="gold" size="xl" className="mt-10">
          <Link to="/perfumes">Explorar perfumes</Link>
        </Button>
      </section>
    </>
  );
}
