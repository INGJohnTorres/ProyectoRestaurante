"use client";

import clsx from "clsx";
import { Categoria } from "@/lib/types";

export default function CategoryNav({
  categorias,
  activa,
  onSelect,
}: {
  categorias: Categoria[];
  activa: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="sticky top-[64px] z-30 -mx-4 border-b border-espresso/10 bg-cream/90 px-4 py-3 backdrop-blur dark:border-cream/10 dark:bg-espresso/90">
      <div className="flex gap-2 overflow-x-auto">
        {categorias.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={clsx(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
              activa === c.id
                ? "border-ember bg-ember text-cream shadow-sm"
                : "border-espresso/15 text-espresso/70 hover:border-ember/50 dark:border-cream/15 dark:text-cream/70"
            )}
          >
            {c.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
