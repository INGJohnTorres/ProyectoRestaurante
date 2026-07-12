export type Etiqueta = "Nuevo" | "Picante" | "Vegetariano" | "Promoción";

export interface Producto {
  id: string;
  categoriaId: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  etiquetas?: Etiqueta[];
  destacado?: boolean;
  masVendido?: boolean;
  activo: boolean;
}

export interface Categoria {
  id: string;
  nombre: string;
  orden: number;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export interface DatosCliente {
  nombre: string;
  mesa: string;
  observaciones: string;
  telefono?: string;
}

export type EstadoPedido =
  | "nuevo"
  | "aceptado"
  | "preparando"
  | "listo"
  | "entregado"
  | "cancelado";

export interface Pedido {
  id: string;
  numero: number;
  mesa: string;
  cliente: string;
  telefono?: string;
  observaciones: string;
  items: ItemCarrito[];
  total: number;
  estado: EstadoPedido;
  creadoEn: string;
}
