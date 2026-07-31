import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui";
import { company } from "@/data/company";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return <><header className="border-b border-slate-200 bg-white"><Container className="flex min-h-20 items-center justify-between"><Link href="/"><Image src="/logo.svg" alt="Satya Syamala LLC home" width={200} height={46} /></Link><Link href="/#contact" className="text-sm font-bold text-navy hover:text-gold">Contact us</Link></Container></header><main id="main-content"><Container className="max-w-4xl py-16 sm:py-24"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-gold">Legal information</p><h1 className="mt-4 font-serif text-4xl font-bold text-navy-dark sm:text-5xl">{title}</h1><p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p><div className="prose-legal mt-10 space-y-8 text-base leading-7 text-slate-600">{children}</div><div className="mt-12 border-t border-slate-200 pt-6 text-sm"><Link href="/" className="font-bold text-navy hover:text-gold">← Return to home</Link></div></Container></main><footer className="bg-navy-dark py-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} {company.name}</footer></>;
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) { return <section><h2 className="font-serif text-2xl font-bold text-navy">{title}</h2><div className="mt-3 space-y-3">{children}</div></section>; }
