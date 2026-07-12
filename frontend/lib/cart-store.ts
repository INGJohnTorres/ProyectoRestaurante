"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemCarrito, Producto } from "./types";

interface CartState {
  items: ItemCarrito[];
  mesa: string;
  setMesa: (mesa: string) => void;
  agregar: (producto: Producto, cantidad?: number) => void;
  quitar: (productoId: string) => void;
  cambiarCantidad: (productoId: string, cantidad: number) => void;
  vaciar: () => void;
  total: () => number;
  cantidadTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      mesa: "",
      setMesa: (mesa) => set({ mesa }),
      agregar: (producto, cantidad = 1) => {
        const items = [...get().items];
        const idx = items.findIndex((i) => i.producto.id === producto.id);
        if (idx >= 0) {
          items[idx] = { ...items[idx], cantidad: items[idx].cantidad + cantidad };
        } else {
          items.push({ producto, cantidad });
        }
        set({ items });
      },
      quitar: (productoId) =>
        set({ items: get().items.filter((i) => i.producto.id !== productoId) }),
      cambiarCantidad: (productoId, cantidad) => {
        if (cantidad <= 0) {
          get().quitar(productoId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.producto.id === productoId ? { ...i, cantidad } : i
          ),
        });
      },
      vaciar: () => set({ items: [] }),
      total: () =>
        get().items.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0),
      cantidadTotal: () => get().items.reduce((acc, i) => acc + i.cantidad, 0),
    }),
    { name: "carrito-restaurante" }
  )
);
