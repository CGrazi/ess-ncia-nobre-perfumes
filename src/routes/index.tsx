import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-perfume.jpg";
import atelierImage from "@/assets/atelier.jpg";
import { PerfumeCard } from "@/components/site/PerfumeCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { categories, getPerfume, type Perfume } from "@/lib/perfumes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Essência Nobre — Perfumaria de nicho em São Paulo" },
      {
        name: "description",
        content: "Perfumes autorais amadeirados, florais e cítricos, criados em pequenos lotes em São Paulo. Peça online.",
      },
      { property: "og:title", content: "Essência Nobre — Perfumaria de nicho em São Paulo" },
      {
        property: "og:description",
        content: "Perfumes autorais amadeirados, florais e cítricos, criados em pequenos lotes em São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featured = ["oud-imperial", "rosa-negra", "bergamota-real"].map((s) => getPerfume(s)) as Perfume[];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Frasco de perfume Essência Nobre sobre mármore negro"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-veil" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-up" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10">
          <div className="max-w-xl animate-fade-up">
            <p className="eyebrow">Perfumaria de nicho · São Paulo</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              A arte de ser <em className="text-gold">lembrado</em>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Fragrâncias autorais compostas à mão, em pequenos lotes, com as matérias-primas mais raras do mundo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/perfumes">Explorar coleção</Link>
              </Button>
              <Button asChild variant="luxe" size="xl">
                <Link to="/historia">Nossa história</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHeading eyebrow="As famílias olfativas" title="Três caminhos, uma assinatura">
          Cada coleção explora uma faceta da perfumaria com a mesma obsessão por qualidade.
        </SectionHeading>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to="/perfumes"
              search={{ categoria: c.id }}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={c.cover}
                alt={`Coleção ${c.name}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-fade-up" />
              <div className="absolute inset-0 border border-primary/0 transition-luxe group-hover:border-primary/50" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="eyebrow">0{i + 1} · {c.tagline}</p>
                <h3 className="mt-3 text-4xl">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                  Descobrir <ArrowRight className="h-3.5 w-3.5 transition-luxe group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* História */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 lg:px-10">
          <div className="relative">
            <img
              src={atelierImage}
              alt="Ateliê da Essência Nobre com frascos de essências"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-full w-full border border-primary/40 md:block" aria-hidden />
          </div>
          <div>
            <p className="eyebrow">Desde 2012</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Nascida da garoa e da <em className="text-gold">memória</em> de São Paulo.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Em um pequeno ateliê nos Jardins, a Essência Nobre começou como uma paixão: traduzir em aromas as
              emoções de uma cidade que nunca dorme. Hoje, cada frasco ainda é composto, maturado e envasado por nós.
            </p>
            <Button asChild variant="luxe" size="lg" className="mt-10">
              <Link to="/historia">Conheça nossa história</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHeading eyebrow="Assinaturas da casa" title="Os mais desejados" />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PerfumeCard key={p.slug} perfume={p} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="gold" size="xl">
            <Link to="/perfumes">Ver todos os perfumes</Link>
          </Button>
        </div>
      </section>

      {/* Citação */}
      <section className="border-t border-border/60 px-6 py-28">
        <blockquote className="mx-auto max-w-3xl text-center">
          <div className="ornament mx-auto max-w-xs text-xs">✦</div>
          <p className="mt-10 font-display text-3xl leading-snug md:text-4xl">
            “Um perfume é a forma mais intensa de memória. Ele chega antes de você e permanece depois que você parte.”
          </p>
          <footer className="mt-8 eyebrow">Fundadores da Essência Nobre</footer>
        </blockquote>
      </section>
    </>
  );
}
