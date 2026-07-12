import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-espresso text-cream">
      <div className="absolute inset-0 grain-bg opacity-30" />
      <Image
        src="https://images.rappi.com/products/26595204-d586-4cd6-afb4-873955e704fc.jpeg"
        alt=""
        fill
        priority
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/85 to-espresso" />

      <div className="relative z-10 flex w-full justify-between p-5">
        <div className="flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 backdrop-blur">
          <span className="text-xs font-medium tracking-wide">Oriental Kitchen</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="relative h-28 w-28">
          <Image src="/logo-ok.png" alt="Oriental Kitchen" fill className="object-contain drop-shadow-lg" />
        </div>
        <h1 className="mt-6 font-display text-3xl leading-tight tracking-tight text-ember drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] sm:text-4xl">
          ORIENTAL KITCHEN
        </h1>
        <p className="mt-2 font-display text-sm text-mustard">Los expertos en arroz...</p>
        <p className="mt-4 max-w-sm text-cream/70">
          Sabores orientales con un toque colombiano. Escanea, escoge tu mesa y arma tu pedido.
        </p>
        <Link
          href="/menu"
          className="mt-8 rounded-full bg-ember px-8 py-3.5 font-semibold shadow-lg shadow-ember/30 transition hover:scale-105 hover:bg-ember-dark"
        >
          Ver Menú
        </Link>

        <div className="pointer-events-none absolute -right-2 bottom-0 h-32 w-32 opacity-90 sm:h-40 sm:w-40">
          <Image src="/panda-mascot.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <p className="relative z-10 pb-6 text-xs text-cream/40">
        Escanea el código QR de tu mesa para pedir sin esperar
      </p>
    </main>
  );
}
