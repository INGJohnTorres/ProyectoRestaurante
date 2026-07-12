"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Producto } from "@/lib/types";
import { useCartStore } from "@/lib/cart-store";
import clsx from "clsx";

const colorEtiqueta: Record<string, string> = {
  Nuevo: "bg-olive text-cream",
  Picante: "bg-ember text-cream",
  Vegetariano: "bg-olive/80 text-cream",
  Promoción: "bg-mustard text-espresso",
};

export default function ProductCard({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(1);
  const agregar = useCartStore((s) => s.agregar);
  const [agregado, setAgregado] = useState(false);

  function handleAgregar() {
    agregar(producto, cantidad);
    setAgregado(true);
    setCantidad(1);
    setTimeout(() => setAgregado(false), 1200);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-espresso/8 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-cream/10 dark:bg-cocoa/50">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          {producto.etiquetas?.map((e) => (
            <span
              key={e}
              className={clsx(
                "rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide",
                colorEtiqueta[e]
              )}
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold leading-tight">
            {producto.nombre}
          </h3>
          <span className="whitespace-nowrap font-mono text-sm text-ember-dark dark:text-mustard">
            {producto.precio.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-espresso/70 dark:text-cream/70">
          {producto.descripcion}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 rounded-full border border-espresso/15 px-1 py-1 dark:border-cream/15">
            <button
              aria-label="Restar"
              onClick={() => setCantidad((c) => Math.max(1, c - 1))}
              className="grid h-7 w-7 place-items-center rounded-full text-espresso/70 transition hover:bg-espresso/10 dark:text-cream/70 dark:hover:bg-cream/10"
            >
              <Minus size={14} />
            </button>
            <span className="w-4 text-center font-mono text-sm">{cantidad}</span>
            <button
              aria-label="Sumar"
              onClick={() => setCantidad((c) => c + 1)}
              className="grid h-7 w-7 place-items-center rounded-full text-espresso/70 transition hover:bg-espresso/10 dark:text-cream/70 dark:hover:bg-cream/10"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={handleAgregar}
            className={clsx(
              "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-cream transition",
              agregado ? "bg-olive" : "bg-ember hover:bg-ember-dark"
            )}
          >
            <ShoppingBag size={15} />
            {agregado ? "¡Agregado!" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}
