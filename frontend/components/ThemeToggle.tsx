"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tema");
    const oscuro = saved === null ? true : saved === "oscuro";
    setDark(oscuro);
    document.documentElement.classList.toggle("dark", oscuro);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("tema", next ? "oscuro" : "claro");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="grid h-10 w-10 place-items-center rounded-full border border-espresso/10 bg-white/70 text-espresso transition hover:scale-105 dark:border-cream/10 dark:bg-cocoa/70 dark:text-cream"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
