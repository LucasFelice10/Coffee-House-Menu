import { Leaf, Sprout, WheatOff } from "lucide-react";
import { useId } from "react";
import { coffeeComposition, type Product } from "@/data/menu";

export function DietaryIndicators() {
  return (
    <div className="flex gap-2" aria-label="Información alimentaria pendiente de confirmar">
      {[{ Icon: WheatOff, label: "Sin gluten / apto celíacos" }, { Icon: Leaf, label: "Vegetariano" }, { Icon: Sprout, label: "Vegano" }].map(({ Icon, label }) => (
        <span key={label} tabIndex={0} className="dietary-indicator group/indicator relative grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground" aria-label={`${label}: por confirmar`}>
          <Icon size={14} strokeWidth={1.5} />
          <span role="tooltip" className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden w-36 rounded-md bg-espresso p-2 text-left text-[10px] leading-relaxed text-primary-foreground group-hover/indicator:block group-focus/indicator:block">{label}: por confirmar</span>
        </span>
      ))}
    </div>
  );
}

export function CoffeeComposition({ product }: { product: Product }) {
  const id = useId().replace(/:/g, "");
  const layers = coffeeComposition(product);
  let bottom = 65;
  return (
    <div className="flex min-w-0 items-center gap-2" title="Composición orientativa; las proporciones pueden variar">
      <svg viewBox="0 0 66 76" className="h-14 w-12 shrink-0" role="img" aria-label={`Composición orientativa: ${layers.map((layer) => `${layer.label} ${layer.proportion}%`).join(", ")}`}>
        <defs><clipPath id={id}><path d="M10 15H51L46 65H15Z" /></clipPath></defs>
        <g clipPath={`url(#${id})`}>
          {layers.map((layer) => {
            const height = layer.proportion / 2;
            bottom -= height;
            return <rect key={layer.ingredient} x="9" y={bottom} width="43" height={height} className={`composition-${layer.ingredient}`} />;
          })}
        </g>
        <path d="M10 15H51L46 65H15ZM51 23H57C65 23 63 44 49 45M8 10H53" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="min-w-0 space-y-1">
        {[...layers].reverse().map((layer) => <div key={layer.ingredient} className="flex items-center gap-1.5 text-[9px] leading-tight text-muted-foreground"><span className={`composition-${layer.ingredient} h-1.5 w-1.5 shrink-0 rounded-full`} />{layer.label}</div>)}
      </div>
    </div>
  );
}