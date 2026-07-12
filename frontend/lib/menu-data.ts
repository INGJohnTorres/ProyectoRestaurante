import { Categoria, Producto } from "./types";

// Menú real de Oriental Kitchen, tomado de las cartas físicas del restaurante.
// Fotos: las que existen en el catálogo de Rappi son fotos reales de los platos.
// Los ítems marcados con foto genérica de Unsplash no tenían foto disponible
// en Rappi ni en Facebook (la página de Facebook bloquea el acceso automático) —
// reemplázalas en el panel admin cuando tengas las fotos propias.

export const categorias: Categoria[] = [
  { id: "entradas", nombre: "Entradas", orden: 1 },
  { id: "porciones", nombre: "Porciones", orden: 2 },
  { id: "chow-fan-personal", nombre: "Chow Fan Personal", orden: 3 },
  { id: "arroz-2", nombre: "Arroz Chino x2", orden: 4 },
  { id: "arroz-3", nombre: "Arroz Chino x3", orden: 5 },
  { id: "familiar-4", nombre: "Familiar x4", orden: 6 },
  { id: "familiar-6", nombre: "Familiar x6", orden: 7 },
  { id: "especiales", nombre: "Platos Especiales", orden: 8 },
  { id: "a-la-carta", nombre: "A la Carta", orden: 9 },
  { id: "comida-rapida", nombre: "Comida Rápida", orden: 10 },
  { id: "bebidas", nombre: "Bebidas", orden: 11 },
  { id: "cervezas", nombre: "Cervezas y Licores", orden: 12 },
];

const rappi = (id: string) => `https://images.rappi.com/products/${id}`;
// Fallback genérico para platos sin foto propia disponible todavía.
const generico = {
  frito: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
  pollo: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
  camaron: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80",
  papas: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
  hamburguesa: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  perro: "https://images.unsplash.com/photo-1612392062798-2dd8e6a5e2a1?w=600&q=80",
  sopa: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
  arroz: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  gaseosa: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  cerveza: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
};

export const productos: Producto[] = [
  // ── Entradas ──────────────────────────────────────────────
  {
    id: "e1", categoriaId: "entradas", nombre: "Lumpias",
    descripcion: "Rollo frito con exquisito interior de pollo, jamón y vegetales (unidad).",
    precio: 3800, imagen: rappi("50bf607b-bb21-4f7f-9ed7-61add9586d8f.jpeg"), activo: true,
  },
  {
    id: "e2", categoriaId: "entradas", nombre: "Aros de Cebolla",
    descripcion: "Exquisitos aros de cebolla crujientes. 8 unidades.",
    precio: 12000, imagen: rappi("495a47e6-bc0e-4016-8f89-a45010b42fce.jpeg"), activo: true,
  },
  {
    id: "e3", categoriaId: "entradas", nombre: "Wonton Frito",
    descripcion: "Bocados crujientes de cerdo fusionados con especias chinas. 7 unidades.",
    precio: 13000, imagen: rappi("865c92b2-cfe8-4a62-aeed-81e99218a72e.jpeg"), etiquetas: ["Nuevo"], activo: true,
  },
  {
    id: "e4", categoriaId: "entradas", nombre: "Camarones O.K.",
    descripcion: "120 gr de camarón salteado en soya y aceite de sésamo con raíz y cebollino.",
    precio: 15000, imagen: generico.camaron, etiquetas: ["Picante"], activo: true,
  },

  // ── Porciones ─────────────────────────────────────────────
  {
    id: "po1", categoriaId: "porciones", nombre: "Papa Francesa x240 gr",
    descripcion: "Porción de papa a la francesa, 240 gr.",
    precio: 7500, imagen: generico.papas, activo: true,
  },
  {
    id: "po2", categoriaId: "porciones", nombre: "Papa Francesa x360 gr",
    descripcion: "Porción de papa a la francesa, 360 gr.",
    precio: 11000, imagen: generico.papas, activo: true,
  },
  {
    id: "po3", categoriaId: "porciones", nombre: "Costillas de Cerdo x250 gr",
    descripcion: "Costillas de cerdo 250 gr + papas x120 gr.",
    precio: 16500, imagen: generico.pollo, activo: true,
  },
  {
    id: "po4", categoriaId: "porciones", nombre: "Alitas con BBQ",
    descripcion: "4 alas bañadas en salsa BBQ + papas x120 gr.",
    precio: 13500, imagen: generico.pollo, etiquetas: ["Picante"], activo: true,
  },
  {
    id: "po5", categoriaId: "porciones", nombre: "Huevos de Codorniz x5",
    descripcion: "5 unidades.",
    precio: 4000, imagen: generico.arroz, activo: true,
  },
  {
    id: "po6", categoriaId: "porciones", nombre: "Palillos Chinos",
    descripcion: "Sachet x2 palillos.",
    precio: 2000, imagen: generico.arroz, activo: true,
  },
  {
    id: "po7", categoriaId: "porciones", nombre: "1/4 de Pollo Frito",
    descripcion: "1 pierna pernil + papas 60 gr.",
    precio: 13000, imagen: generico.frito, activo: true,
  },
  {
    id: "po8", categoriaId: "porciones", nombre: "1/2 Pollo Frito",
    descripcion: "2 piernas pernil + papas 120 gr.",
    precio: 20000, imagen: generico.frito, activo: true,
  },
  {
    id: "po9", categoriaId: "porciones", nombre: "1 Pollo Frito",
    descripcion: "4 piernas pernil + papas x240 gr.",
    precio: 33000, imagen: generico.frito, etiquetas: ["Promoción"], activo: true,
  },

  // ── Chow Fan Personal (arroz chino 350 gr + pollo, carne, jamón, vegetales, papas x60gr, 1 huevo codorniz) ──
  {
    id: "cf1", categoriaId: "chow-fan-personal", nombre: "Chow Fan Personal",
    descripcion: "Arroz chino 350 gr + pollo desmenuzado + carne picada + jamón + vegetales + papas x60 gr + 1 huevo de codorniz.",
    precio: 11000, imagen: rappi("033a2132-fd87-4ef9-b727-6cd5fb555293.jpeg"), masVendido: true, activo: true,
  },
  {
    id: "cf2", categoriaId: "chow-fan-personal", nombre: "Personal + Lomo de Cerdo",
    descripcion: "Chow Fan personal con lomo de cerdo.",
    precio: 15500, imagen: rappi("8a005711-e53a-46a4-8fae-39a4c60687c4.jpeg"), activo: true,
  },
  {
    id: "cf3", categoriaId: "chow-fan-personal", nombre: "Personal + Pechuga",
    descripcion: "Chow Fan personal con pechuga a la plancha.",
    precio: 15500, imagen: rappi("752292f8-c833-4237-b7ad-dcb73beb7e55.jpeg"), activo: true,
  },
  {
    id: "cf4", categoriaId: "chow-fan-personal", nombre: "Personal + 1/4 de Pollo",
    descripcion: "Chow Fan personal con 1/4 de pollo (pierna pernil).",
    precio: 18000, imagen: generico.frito, activo: true,
  },
  {
    id: "cf5", categoriaId: "chow-fan-personal", nombre: "Personal + 3 Alitas BBQ",
    descripcion: "Chow Fan personal con 3 alitas bañadas en BBQ.",
    precio: 18000, imagen: rappi("6cca0e87-652d-41f5-83b7-42b10555b43e.jpeg"), etiquetas: ["Picante"], activo: true,
  },
  {
    id: "cf6", categoriaId: "chow-fan-personal", nombre: "Personal + 130 gr de Costilla",
    descripcion: "Chow Fan personal con costilla de cerdo 130 gr.",
    precio: 18000, imagen: rappi("a3491526-5686-4138-b4be-e5c3b94caada.jpeg"), activo: true,
  },
  {
    id: "cf7", categoriaId: "chow-fan-personal", nombre: "Personal + Camarón y Palmitos",
    descripcion: "Chow Fan personal con camarón y palmitos de cangrejo.",
    precio: 18000, imagen: rappi("c04484e4-512b-42d2-8717-6eb29ac019c8.jpeg"), activo: true,
  },
  {
    id: "cf8", categoriaId: "chow-fan-personal", nombre: "Vegetariano",
    descripcion: "Zucchini, brócoli, apio, pimentón, raíz, zanahoria, maíz y cebollino + papas x60 gr.",
    precio: 12000, imagen: generico.arroz, etiquetas: ["Vegetariano"], activo: true,
  },

  // ── Arroz Chino para 2 (700 gr, papas x120gr, 2 huevos codorniz) ──
  {
    id: "a2-0", categoriaId: "arroz-2", nombre: "Arroz Chino para Dos",
    descripcion: "Arroz chino 700 gr + pollo desmenuzado + carne picada + jamón + vegetales + papas x120 gr + 2 huevos de codorniz.",
    precio: 20000, imagen: rappi("b8d6da7d-011a-4a6b-a369-bbbb8b055f12.jpeg"), masVendido: true, activo: true,
  },
  {
    id: "a2-1", categoriaId: "arroz-2", nombre: "x2 + Lomo de Cerdo",
    descripcion: "2 porciones de lomo de cerdo.",
    precio: 27000, imagen: rappi("8a005711-e53a-46a4-8fae-39a4c60687c4.jpeg"), activo: true,
  },
  {
    id: "a2-2", categoriaId: "arroz-2", nombre: "x2 + Pechuga",
    descripcion: "2 porciones de pechuga a la plancha.",
    precio: 27000, imagen: rappi("752292f8-c833-4237-b7ad-dcb73beb7e55.jpeg"), activo: true,
  },
  {
    id: "a2-3", categoriaId: "arroz-2", nombre: "x2 + 1/4 de Pollo",
    descripcion: "Pierna pernil y 1 alita.",
    precio: 29000, imagen: generico.frito, activo: true,
  },
  {
    id: "a2-4", categoriaId: "arroz-2", nombre: "x2 + 4 Alitas BBQ",
    descripcion: "4 alitas bañadas en BBQ.",
    precio: 29000, imagen: rappi("6cca0e87-652d-41f5-83b7-42b10555b43e.jpeg"), etiquetas: ["Picante"], activo: true,
  },
  {
    id: "a2-5", categoriaId: "arroz-2", nombre: "x2 + Costilla de Cerdo 250 gr",
    descripcion: "Costilla de cerdo 250 gr.",
    precio: 29000, imagen: rappi("a3491526-5686-4138-b4be-e5c3b94caada.jpeg"), activo: true,
  },
  {
    id: "a2-6", categoriaId: "arroz-2", nombre: "x2 + Camarón y Palmitos",
    descripcion: "Camarón y palmitos de cangrejo.",
    precio: 29000, imagen: rappi("c04484e4-512b-42d2-8717-6eb29ac019c8.jpeg"), activo: true,
  },

  // ── Arroz Chino para 3 (1050 gr, papas x180gr, 3 huevos codorniz) ──
  {
    id: "a3-1", categoriaId: "arroz-3", nombre: "x3 + Lomo de Cerdo",
    descripcion: "Arroz chino 1050 gr + 3 porciones de lomo de cerdo, huevos de codorniz y papas fritas.",
    precio: 32000, imagen: rappi("003f36cc-faef-4589-bbc8-c36fb1cf2e42.jpeg"), activo: true,
  },
  {
    id: "a3-2", categoriaId: "arroz-3", nombre: "x3 + Pechuga",
    descripcion: "3 porciones de pechuga a la plancha.",
    precio: 32000, imagen: rappi("22c00fe3-29c6-4f1d-a9a6-2c5daa0c4a4d.jpeg"), activo: true,
  },
  {
    id: "a3-3", categoriaId: "arroz-3", nombre: "x3 + 6 Alitas BBQ",
    descripcion: "6 alitas bañadas en BBQ.",
    precio: 34000, imagen: rappi("dc1325f6-437c-4f24-81e6-b406e543f20a.jpeg"), etiquetas: ["Picante"], activo: true,
  },
  {
    id: "a3-4", categoriaId: "arroz-3", nombre: "x3 + Costilla de Cerdo 380 gr",
    descripcion: "Costilla de cerdo 380 gr.",
    precio: 34000, imagen: rappi("0c094bd5-ec5f-4c4b-9fdf-ae6eeba8c337.jpeg"), activo: true,
  },
  {
    id: "a3-5", categoriaId: "arroz-3", nombre: "x3 + Camarón y Palmitos 160 gr",
    descripcion: "Camarón y palmitos de cangrejo 160 gr.",
    precio: 34000, imagen: rappi("d19a36ed-735d-47f3-9e69-9afad662081c.jpeg"), activo: true,
  },

  // ── Familiar para 4 (1400 gr, papas x240gr, 4 huevos codorniz) ──
  {
    id: "f4-0", categoriaId: "familiar-4", nombre: "Familiar para 4",
    descripcion: "Arroz chino 1400 gr + pollo desmenuzado + carne picada + jamón + vegetales + papas x240 gr + 4 huevos de codorniz.",
    precio: 31000, imagen: rappi("77be2ac4-0fe8-4acf-9387-b7fbb4e881c3.jpeg"), destacado: true, activo: true,
  },
  {
    id: "f4-1", categoriaId: "familiar-4", nombre: "Valenciano Tradicional x4",
    descripcion: "1/2 pollo frito (2 piernas pernil) + arroz chino 1400 gr con todos sus acompañantes.",
    precio: 39000, imagen: generico.frito, activo: true,
  },
  {
    id: "f4-2", categoriaId: "familiar-4", nombre: "Valenciano + Camarón y Palmitos x4",
    descripcion: "1/2 pollo frito + arroz chino 1400 gr + camarón y palmitos x120 gr.",
    precio: 46000, imagen: rappi("6b449a49-db09-45e8-ab83-39a61a24a01a.jpeg"), activo: true,
  },
  {
    id: "f4-3", categoriaId: "familiar-4", nombre: "Especial x4",
    descripcion: "Arroz chino 1400 gr + camarones y palmitos x240 gr con todos sus acompañantes.",
    precio: 42000, imagen: rappi("d19a36ed-735d-47f3-9e69-9afad662081c.jpeg"), destacado: true, activo: true,
  },
  {
    id: "f4-4", categoriaId: "familiar-4", nombre: "Super x4",
    descripcion: "Costillitas x500 gr + arroz chino 1400 gr con todos sus acompañantes.",
    precio: 42000, imagen: rappi("a3491526-5686-4138-b4be-e5c3b94caada.jpeg"), activo: true,
  },
  {
    id: "f4-5", categoriaId: "familiar-4", nombre: "Alitas con BBQ x4",
    descripcion: "8 alitas con BBQ + arroz chino 1400 gr con todos sus acompañantes.",
    precio: 42000, imagen: rappi("dc1325f6-437c-4f24-81e6-b406e543f20a.jpeg"), etiquetas: ["Picante"], activo: true,
  },
  {
    id: "f4-6", categoriaId: "familiar-4", nombre: "Carnes Ahumadas O.K. x4",
    descripcion: "Pollo desmenuzado + cerdo picado + res + chorizo y jamón ahumados en un delicioso arroz tradicional con vegetales.",
    precio: 42000, imagen: rappi("fcc7a294-44c3-42bc-9d21-bae154feadf3.jpeg"), activo: true,
  },
  {
    id: "f4-7", categoriaId: "familiar-4", nombre: "Frutos del Mar x4",
    descripcion: "Arroz salteado con pescado, calamar, pulpo baby, palmitos de cangrejo, camarones + 4 conchitas + papas x240 gr.",
    precio: 53000, imagen: rappi("26595204-d586-4cd6-afb4-873955e704fc.jpeg"), etiquetas: ["Nuevo"], destacado: true, activo: true,
  },
  {
    id: "f4-8", categoriaId: "familiar-4", nombre: "Super Paisa x4",
    descripcion: "Arroz con vegetales, plátano dulce, maíz tierno, chorizo + pollo desmenuzado + cerdo picado + costilla ahumada + chicharroncitos + jamón.",
    precio: 54000, imagen: generico.arroz, activo: true,
  },

  // ── Familiar para 6 (2100 gr, papas x360gr, 6 huevos codorniz) ──
  {
    id: "f6-0", categoriaId: "familiar-6", nombre: "Familiar para 6",
    descripcion: "Arroz chino 2100 gr + pollo desmenuzado + carne picada + jamón + vegetales + papas x360 gr + 6 huevos de codorniz.",
    precio: 50000, imagen: rappi("77be2ac4-0fe8-4acf-9387-b7fbb4e881c3.jpeg"), destacado: true, activo: true,
  },
  {
    id: "f6-1", categoriaId: "familiar-6", nombre: "Valenciano Tradicional x6",
    descripcion: "3/4 pollo frito (3 piernas pernil) + arroz chino 2100 gr con todos sus acompañantes.",
    precio: 65000, imagen: generico.frito, activo: true,
  },
  {
    id: "f6-2", categoriaId: "familiar-6", nombre: "Valenciano + Camarón y Palmitos x6",
    descripcion: "3/4 pollo frito + arroz chino 2100 gr + camarón y palmitos x160 gr.",
    precio: 79000, imagen: rappi("6b449a49-db09-45e8-ab83-39a61a24a01a.jpeg"), etiquetas: ["Promoción"], activo: true,
  },
  {
    id: "f6-3", categoriaId: "familiar-6", nombre: "Super x6",
    descripcion: "Costillitas x750 gr + arroz chino 2100 gr con todos sus acompañantes.",
    precio: 70000, imagen: rappi("a3491526-5686-4138-b4be-e5c3b94caada.jpeg"), activo: true,
  },
  {
    id: "f6-4", categoriaId: "familiar-6", nombre: "Especial x6",
    descripcion: "Arroz chino 2100 gr + camarones y palmitos x320 gr con todos sus acompañantes.",
    precio: 70000, imagen: rappi("d19a36ed-735d-47f3-9e69-9afad662081c.jpeg"), activo: true,
  },
  {
    id: "f6-5", categoriaId: "familiar-6", nombre: "Alitas con BBQ x6",
    descripcion: "12 alitas con BBQ + arroz chino 2100 gr con todos sus acompañantes.",
    precio: 70000, imagen: rappi("dc1325f6-437c-4f24-81e6-b406e543f20a.jpeg"), etiquetas: ["Picante"], activo: true,
  },
  {
    id: "f6-6", categoriaId: "familiar-6", nombre: "Super + Camarón y Palmitos x6",
    descripcion: "Costillitas x750 gr + arroz chino 2100 gr + camarón y palmitos x160 gr.",
    precio: 84000, imagen: rappi("26595204-d586-4cd6-afb4-873955e704fc.jpeg"), destacado: true, activo: true,
  },

  // ── Platos Especiales ─────────────────────────────────────
  {
    id: "sp1", categoriaId: "especiales", nombre: "Chow Suey Sencillo",
    descripcion: "Verduras orientales + pollo desmenuzado + carne picada + papas x60 gr (opcional con arroz). Adición de camarón +$6.000.",
    precio: 22000, imagen: rappi("0c36e36b-4248-4aa8-99c3-1d48b16e826c.jpeg"), activo: true,
  },
  {
    id: "sp2", categoriaId: "especiales", nombre: "Chow Suey Duo",
    descripcion: "Verduras orientales + pollo desmenuzado + carne picada + papas x120 gr (opcional con arroz). Adición de camarón +$4.000.",
    precio: 29000, imagen: rappi("0c36e36b-4248-4aa8-99c3-1d48b16e826c.jpeg"), activo: true,
  },
  {
    id: "sp3", categoriaId: "especiales", nombre: "Chow Mein",
    descripcion: "Pasta ramen, verduras orientales, pollo desmenuzado, carne picada, papas x60 gr. Adición de camarón +$5.000.",
    precio: 21000, imagen: generico.arroz, etiquetas: ["Nuevo"], activo: true,
  },
  {
    id: "sp4", categoriaId: "especiales", nombre: "Mazorcada Oriental",
    descripcion: "Maíz tierno, verduras orientales, pollo desmenuzado, jamón, carne picada, queso, papa chip.",
    precio: 20000, imagen: generico.papas, activo: true,
  },
  {
    id: "sp5", categoriaId: "especiales", nombre: "Pollo Agridulce O.K.",
    descripcion: "Trozos de pechuga en tempura bañados en salsa agridulce con piña + papas x60 gr. Con adición de arroz +$4.000.",
    precio: 20000, imagen: rappi("141f0b47-c669-44bc-9718-fd3dd798b6f6.jpeg"), masVendido: true, activo: true,
  },

  // ── A la Carta ────────────────────────────────────────────
  {
    id: "ac1", categoriaId: "a-la-carta", nombre: "Chuleta de Cerdo",
    descripcion: "Porción 240 gr + papa francesa x120 gr + ensalada del día y salsa BBQ.",
    precio: 25000, imagen: rappi("9e2a5cae-f68c-4569-a62b-bd53f50327cd.png"), activo: true,
  },
  {
    id: "ac2", categoriaId: "a-la-carta", nombre: "Churrasco",
    descripcion: "Porción 240 gr + papa francesa x120 gr + ensalada del día y chimichurri.",
    precio: 27000, imagen: rappi("232f5083-df67-4062-8d39-a691735e2b75.jpeg"), destacado: true, activo: true,
  },
  {
    id: "ac3", categoriaId: "a-la-carta", nombre: "Pechuga a la Plancha",
    descripcion: "Porción 240 gr + papa francesa x120 gr + ensalada del día y salsa BBQ.",
    precio: 25000, imagen: rappi("e6b0ed7f-779d-4423-a308-a1cdb4fc7524.jpeg"), activo: true,
  },
  {
    id: "ac4", categoriaId: "a-la-carta", nombre: "Crema de Pollo o Champiñón",
    descripcion: "Delicada y cremosa, acompañada de crujientes papas fosforito.",
    precio: 7500, imagen: generico.sopa, etiquetas: ["Vegetariano"], activo: true,
  },

  // ── Comida Rápida ─────────────────────────────────────────
  {
    id: "cr1", categoriaId: "comida-rapida", nombre: "Hamburguesa",
    descripcion: "Res 1/4 de libra + cebolla grilled con pollo desmenuzado + jamón + tomate + queso + huevo de codorniz + salsas + papas x60 gr.",
    precio: 17000, imagen: generico.hamburguesa, masVendido: true, activo: true,
  },
  {
    id: "cr2", categoriaId: "comida-rapida", nombre: "Combo Duo Hamburguesa",
    descripcion: "2 hamburguesas completas + papas a la francesa (x60 gr c/u) + 2 gaseosas 250 ml.",
    precio: 38000, imagen: generico.hamburguesa, etiquetas: ["Promoción"], activo: true,
  },
  {
    id: "cr3", categoriaId: "comida-rapida", nombre: "Combo Amigos",
    descripcion: "3 hamburguesas completas + 3 papas a la francesa (x60 gr c/u) + 1 gaseosa 1.5 L.",
    precio: 55000, imagen: generico.hamburguesa, etiquetas: ["Promoción"], activo: true,
  },
  {
    id: "cr4", categoriaId: "comida-rapida", nombre: "Perro Caliente",
    descripcion: "Salchicha americana, cebolla grilled con pollo desmenuzado, queso, huevo de codorniz, papa chip y salsas.",
    precio: 14000, imagen: generico.perro, activo: true,
  },
  {
    id: "cr5", categoriaId: "comida-rapida", nombre: "Combo Perro",
    descripcion: "2 perros calientes + 2 bebidas 250 ml.",
    precio: 32000, imagen: generico.perro, activo: true,
  },
  {
    id: "cr6", categoriaId: "comida-rapida", nombre: "Salchipapa",
    descripcion: "Papas a la francesa, salchicha americana, pollo desmenuzado, queso, huevo de codorniz, salsas.",
    precio: 17000, imagen: generico.papas, activo: true,
  },

  // ── Bebidas ───────────────────────────────────────────────
  {
    id: "b1", categoriaId: "bebidas", nombre: "Postobón Manzana 250 ml",
    descripcion: "Gaseosa bien fría.",
    precio: 4500, imagen: rappi("5225ca8e-02e5-4274-8d65-ed65f653e225.png"), activo: true,
  },
  {
    id: "b2", categoriaId: "bebidas", nombre: "Colombiana 250 ml",
    descripcion: "Gaseosa bien fría.",
    precio: 4500, imagen: rappi("9b723e41-0cfe-4485-acf9-0563204164b4.png"), activo: true,
  },
  {
    id: "b3", categoriaId: "bebidas", nombre: "Pepsi 250 ml",
    descripcion: "Gaseosa bien fría.",
    precio: 4500, imagen: rappi("49858a16-ca7e-43ca-9fe2-79f01e8c06c1.png"), activo: true,
  },
  {
    id: "b4", categoriaId: "bebidas", nombre: "Hit Mango 500 ml",
    descripcion: "Jugo de mango.",
    precio: 5550, imagen: rappi("d0b17ffe-898f-41f7-87ae-abad4a4384f6.jpeg"), activo: true,
  },
  {
    id: "b5", categoriaId: "bebidas", nombre: "Hit Mora 500 ml",
    descripcion: "Jugo de mora.",
    precio: 5550, imagen: rappi("c8460841-d0af-4805-a6fc-e5e0b5fc54cf.jpeg"), activo: true,
  },
  {
    id: "b6", categoriaId: "bebidas", nombre: "Hit Lulo 500 ml",
    descripcion: "Jugo de lulo.",
    precio: 5550, imagen: rappi("214ef4ec-4538-46b0-938c-65e1e17c4142.jpeg"), activo: true,
  },
  {
    id: "b7", categoriaId: "bebidas", nombre: "Hit Tropical 500 ml",
    descripcion: "Jugo tropical.",
    precio: 5550, imagen: rappi("dae5e14d-e7df-4cfd-8792-93c148b1f770.jpeg"), activo: true,
  },

  // ── Cervezas y Licores ────────────────────────────────────
  {
    id: "c1", categoriaId: "cervezas", nombre: "Águila 355 ml",
    descripcion: "Cerveza lager, Colombia.",
    precio: 5500, imagen: rappi("441e4cdb-8e8a-47b8-b967-e0fd3d2be5cc.png"), activo: true,
  },
  {
    id: "c2", categoriaId: "cervezas", nombre: "Águila Light 355 ml",
    descripcion: "Cerveza lager light.",
    precio: 5800, imagen: rappi("5ad35206-2558-4fd0-b85b-4ac972fa7133.png"), activo: true,
  },
  {
    id: "c3", categoriaId: "cervezas", nombre: "Águila Cero 355 ml",
    descripcion: "Cerveza sin alcohol.",
    precio: 5500, imagen: rappi("ee6ac4a3-109b-48c0-a972-afe28a2e115d.png"), activo: true,
  },
  {
    id: "c4", categoriaId: "cervezas", nombre: "Poker Lata 330 ml",
    descripcion: "Cerveza lager, 4.0% alc., Colombia.",
    precio: 6200, imagen: rappi("32317ce5-7cd4-41a4-82c1-13c0f9e008b6.jpeg"), activo: true,
  },
  {
    id: "c5", categoriaId: "cervezas", nombre: "Club Colombia Dorada Lata 330 ml",
    descripcion: "Cerveza lager, 4.7% alc., Colombia.",
    precio: 6500, imagen: rappi("7c4e9ccc-de81-4dfa-bb6a-142417ed5fc2.jpg"), activo: true,
  },
  {
    id: "c6", categoriaId: "cervezas", nombre: "Budweiser 330 ml",
    descripcion: "Cerveza lager.",
    precio: 5500, imagen: rappi("8e536494-5185-4cc1-b5a7-204e05134309.png"), activo: true,
  },
  {
    id: "c7", categoriaId: "cervezas", nombre: "Heineken 350 ml",
    descripcion: "Cerveza lager.",
    precio: 5500, imagen: rappi("0fe5e970-989e-4b36-8f17-897032ca58a3.png"), activo: true,
  },
  {
    id: "c8", categoriaId: "cervezas", nombre: "Beck's Lata 330 ml",
    descripcion: "Cerveza lager, 5.0% alc., Alemania.",
    precio: 5800, imagen: rappi("d4e5784f-f1da-40e0-8cf1-7ac448e47de3.png"), activo: true,
  },
  {
    id: "c9", categoriaId: "cervezas", nombre: "Corona 355 ml",
    descripcion: "Cerveza lager, 4.5% alc., México.",
    precio: 11600, imagen: rappi("30ba3f5d-b272-4f85-9687-921768416012.png"), activo: true,
  },
  {
    id: "c10", categoriaId: "cervezas", nombre: "Coronita 210 ml",
    descripcion: "Cerveza lager, 4.5% alc., México.",
    precio: 8400, imagen: rappi("c15d552c-5efe-4297-aa09-dbb65b582509.png"), activo: true,
  },
  {
    id: "c11", categoriaId: "cervezas", nombre: "Stella Artois 350 ml",
    descripcion: "Cerveza lager belga.",
    precio: 12900, imagen: rappi("02c5c04a-93de-4ac7-a09c-529310898bfc.jpeg"), activo: true,
  },
  {
    id: "c12", categoriaId: "cervezas", nombre: "Smirnoff Red 330 ml",
    descripcion: "Bebida saborizada.",
    precio: 15500, imagen: rappi("d1cb9a17-16c4-41af-bc56-a7435514a9b0.png"), activo: true,
  },
];
