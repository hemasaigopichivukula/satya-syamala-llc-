"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/company";
import { Button, Container } from "./ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur" : "border-transparent bg-white/90 py-4 backdrop-blur-sm")}>
      <Container className="flex items-center justify-between gap-6">
        <Link href="/#home" aria-label="Satya Syamala LLC home" className="relative z-50 shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
          <Image src="/logo.svg" alt="Satya Syamala LLC" width={210} height={48} priority className={cn("h-auto transition-all", scrolled ? "w-44 sm:w-48" : "w-48 sm:w-52")} />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const id = item.href.split("#")[1];
            return <Link key={item.label} href={item.href} className={cn("rounded px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold", active === id ? "text-gold" : "text-slate-700 hover:text-navy")}>{item.label}</Link>;
          })}
          <Button href="/#contact" className="ml-3 min-h-10 px-4 py-2">Schedule a Consultation</Button>
        </nav>
        <button type="button" className="relative z-50 rounded-md p-2 text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>{open ? <X /> : <Menu />}</button>
      </Container>
      <div id="mobile-menu" className={cn("fixed inset-0 z-40 bg-white px-6 pt-28 transition duration-300 lg:hidden", open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0")}>
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col">
          {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-4 text-lg font-bold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">{item.label}</Link>)}
          <Button href="/#contact" onClick={() => setOpen(false)} className="mt-7">Schedule a Consultation</Button>
        </nav>
      </div>
    </header>
  );
}
