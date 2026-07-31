"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const fn = () => setShow(scrollY > 600); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  return <a href="#home" aria-label="Scroll to top" className={cn("fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy text-white shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold", show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")}><ArrowUp size={18} /></a>;
}
