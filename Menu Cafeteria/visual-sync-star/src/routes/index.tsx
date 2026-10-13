import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoffeeComposition, DietaryIndicators } from "@/components/menu-indicators";
import logoCutout from "@/assets/logo-cutout.png";
import { categories, formatPrice, GOOGLE_REVIEW_URL, hiRes, type Product } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coffee House Specialty · Carta" },
      { name: "description", content: "La carta de Coffee House Specialty: Cafe, Pasteleria y Bebidas frias, con composiciones de café e información de cada producto." },
      { property: "og:title", content: "Coffee House Specialty · Carta" },
      { property: "og:description", content: "Descubrí Cafe, Pasteleria y Bebidas frias en la carta de Coffee House Specialty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    categories.forEach((c) => { const el = document.getElementById(c.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="hero-beans relative flex flex-col items-center overflow-hidden px-6 pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
        <svg aria-hidden="true" viewBox="0 0 400 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full text-accent/25">
          <g fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round">
            <path className="hero-trail" d="M-10 120 C 60 90, 110 140, 170 105" />
            <path className="hero-trail" d="M-10 128 C 70 100, 120 150, 165 115" />
            <path className="hero-trail" d="M410 70 C 340 50, 290 95, 235 72" />
            <path className="hero-trail" d="M410 78 C 345 60, 295 105, 240 82" />
          </g>
        </svg>
        <div className="relative">
          <img src={logoCutout} alt="Coffee House Specialty" width={1160} height={960}
            className="relative h-auto w-56 object-contain drop-shadow-[0_8px_14px_oklch(0.27_0.05_40/0.22)] sm:w-72" />
          <svg aria-hidden="true" viewBox="0 0 80 120" className="pointer-events-none absolute -top-16 left-1/2 h-36 w-24 -translate-x-1/2 sm:-top-20 sm:h-44 sm:w-28">
            <defs>
              <linearGradient id="steamFade" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="var(--composition-foam)" stopOpacity="0.9" />
                <stop offset="0.6" stopColor="var(--muted)" stopOpacity="0.55" />
                <stop offset="1" stopColor="var(--muted)" stopOpacity="0" />
              </linearGradient>
              <filter id="steamBlur"><feGaussianBlur stdDeviation="0.9" /></filter>
            </defs>
            <g fill="none" stroke="url(#steamFade)" strokeLinecap="round" filter="url(#steamBlur)">
              <path className="hero-steam" strokeWidth="3.2" d="M38 118 C 26 100, 50 88, 38 70 C 28 55, 48 44, 40 26 C 35 14, 44 6, 42 0" />
              <path className="hero-steam [animation-delay:0.8s]" strokeWidth="2" d="M44 118 C 56 102, 34 90, 46 72 C 56 58, 38 46, 48 30 C 54 20, 46 10, 50 2" />
              <path className="hero-steam [animation-delay:1.6s]" strokeWidth="1.4" d="M32 116 C 22 104, 40 94, 30 80 C 22 68, 36 58, 30 44 C 26 34, 32 26, 30 16" />
              <path className="hero-steam [animation-delay:2.3s]" strokeWidth="1" d="M48 116 C 60 100, 44 86, 54 70 C 62 58, 50 48, 56 36" />
            </g>
          </svg>
        </div>
        <h1 className="relative mt-7 font-serif text-4xl font-bold text-espresso sm:text-5xl">COFFEE HOUSE</h1>
        <p className="relative mt-2 text-xs font-semibold tracking-[0.3em] text-accent">SPECIALTY</p>
        <p className="relative mx-auto mt-6 max-w-xs font-serif text-lg italic text-espresso sm:text-2xl sm:max-w-md">
          Una carta para mirar despacio.
        </p>
      </header>

      <div className="mx-auto w-[calc(100%-2rem)] max-w-5xl border-t border-border" role="separator" />
      <nav aria-label="Categorías de la carta" className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-xl grid-cols-3 gap-1 px-4 py-3">
          {categories.map((c) => (
            <Button key={c.id} asChild variant="ghost" className={`h-11 min-w-0 rounded-md px-2 text-xs sm:text-sm ${active === c.id ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
              <a href={`#${c.id}`} aria-current={active === c.id ? "location" : undefined} onClick={() => setActive(c.id)}>{c.name}</a>
            </Button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        {categories.map((c, ci) => (
          <section key={c.id} id={c.id} className="scroll-mt-20 pt-12 sm:pt-16">
            <div className="relative mb-10 px-2">
              <span className="pointer-events-none absolute -top-10 right-0 font-serif text-[8rem] italic leading-none text-muted select-none">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <p className="relative text-[0.65rem] font-semibold text-accent">CAPÍTULO {ci + 1}</p>
              <h2 className="relative mt-2 font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl">{c.name}</h2>
              <p className="relative mt-4 max-w-[28ch] text-sm text-muted-foreground">{c.tagline}</p>
            </div>

            <div className="grid grid-cols-2 items-stretch gap-x-3 gap-y-5 sm:gap-6 lg:grid-cols-3">
              {c.products.map((p, i) => (
                <article key={p.id} className="flex min-w-0 flex-col rounded-lg border border-border bg-card shadow-soft">
                  <Button variant="ghost" onClick={() => setSelected(p)} aria-label={`Ver ${p.name}`}
                    className="group relative block h-auto w-full flex-1 whitespace-normal rounded-none rounded-t-lg p-0 text-left hover:bg-transparent">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-lg sm:aspect-square">
                    <img src={p.image} alt={p.name} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-sm bg-espresso/70 px-2 py-1 text-[0.6rem] font-semibold text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    </div>
                    <div className="px-3 pb-3 pt-4 sm:px-4">
                      <h3 className="min-h-12 break-words font-serif text-base font-bold leading-6 text-espresso sm:text-xl">{p.name}</h3>
                      <p className="mt-1 min-h-10 text-[11px] leading-5 text-muted-foreground sm:text-xs">{p.short}</p>
                    </div>
                  </Button>
                  <div className="mx-3 border-t border-border py-3 sm:mx-4">
                    <DietaryIndicators />
                    <p className="mt-1.5 text-[9px] text-muted-foreground">Por confirmar</p>
                    {c.id === "cafe" && <div className="mt-3 border-t border-border pt-3"><CoffeeComposition product={p} /></div>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-espresso px-6 pb-14 pt-14 text-center text-primary-foreground">
        <img src={logoCutout} alt="Coffee House Specialty" width={1160} height={960} className="mx-auto h-auto w-28 object-contain" />
        <p className="mt-6 font-serif text-2xl italic">¿Te gustó la experiencia?</p>
        <Button asChild variant="ghost" className="mx-auto mt-6 h-auto w-fit flex-col gap-2 rounded-lg border border-accent/40 bg-primary-foreground/5 px-8 py-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
          <span className="text-2xl text-accent">★★★★★</span>
          <span className="text-sm font-medium">Dejanos tu reseña en Google</span>
        </a>
        </Button>
        <p className="mt-12 text-[0.65rem] opacity-60">DESARROLLADO POR GastroQode</p>
      </footer>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [onClose]);

  return (
    <div className="animate-fade fixed inset-0 z-50 overflow-y-auto bg-background" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="relative h-[68vh] w-full">
        <img src={hiRes(product.image)} alt={product.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar"
          className="absolute right-4 top-4 h-11 w-11 rounded-full bg-card/90 text-foreground shadow-soft backdrop-blur"><X /></Button>
        <h3 className="absolute inset-x-0 bottom-10 px-6 font-serif text-4xl font-bold leading-tight text-primary-foreground">{product.name}</h3>
      </div>
      <div className="animate-rise relative -mt-6 rounded-t-[2rem] bg-background px-6 pb-12 pt-8">
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="min-w-0 font-serif text-lg italic text-muted-foreground">{product.short}</p>
            <span className="shrink-0 rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">{formatPrice(product.price)}</span>
          </div>
          <p className="mt-6 leading-relaxed">{product.description}</p>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {product.details.map((d) => (
              <div key={d.label} className="flex justify-between gap-4 py-4 text-sm">
                <dt className="text-[0.7rem] font-semibold text-accent uppercase">{d.label}</dt>
                <dd className="text-right">{d.value}</dd>
              </div>
            ))}
          </dl>
          <Button variant="outline" onClick={onClose} className="mt-10 h-12 w-full rounded-full border-espresso">Volver a la carta</Button>
        </div>
      </div>
    </div>
  );
}
