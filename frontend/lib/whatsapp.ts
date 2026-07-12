import { DatosCliente, ItemCarrito } from "./types";

function formatoMoneda(valor: number) {
  return valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}

/** Construye el texto del pedido exactamente en el formato solicitado. */
export function construirMensajePedido(
  cliente: DatosCliente,
  items: ItemCarrito[],
  total: number
) {
  const hora = new Date().toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const lineasPedido = items
    .map((i) => `• ${i.cantidad} ${i.producto.nombre}`)
    .join("\n");

  let mensaje = `Nuevo Pedido\n\n`;
  mensaje += `Mesa: ${cliente.mesa}\n`;
  mensaje += `Cliente: ${cliente.nombre}\n\n`;
  mensaje += `Pedido:\n${lineasPedido}\n\n`;

  if (cliente.observaciones?.trim()) {
    mensaje += `Observaciones:\n${cliente.observaciones.trim()}\n\n`;
  }

  mensaje += `Total:\n${formatoMoneda(total)}\n\n`;
  mensaje += `Hora:\n${hora}`;

  return mensaje;
}

/** Abre WhatsApp (app o web) con el mensaje del pedido ya escrito. */
export function enviarPedidoPorWhatsApp(
  cliente: DatosCliente,
  items: ItemCarrito[],
  total: number
) {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const mensaje = construirMensajePedido(cliente, items, total);
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
