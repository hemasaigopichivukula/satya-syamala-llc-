import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation } from "@/data/company";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.25fr]">
        <div><Image src="/logo.svg" alt="Satya Syamala LLC" width={210} height={48} className="rounded bg-white p-1" /><p className="mt-5 max-w-sm text-sm leading-6">Satya Syamala LLC provides business and technology consulting services tailored to client needs.</p></div>
        <div><h2 className="text-xs font-extrabold uppercase tracking-[.2em] text-gold-light">Navigate</h2><ul className="mt-4 grid grid-cols-2 gap-3 text-sm">{navigation.map(item => <li key={item.label}><Link className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><h2 className="text-xs font-extrabold uppercase tracking-[.2em] text-gold-light">Contact</h2><ul className="mt-4 space-y-3 text-sm"><li><a className="flex gap-3 hover:text-white" href={`mailto:${company.email}`}><Mail size={16} className="mt-0.5 shrink-0 text-gold" />{company.email}</a></li><li><a className="flex gap-3 hover:text-white" href={`tel:${company.phoneHref}`}><Phone size={16} className="mt-0.5 shrink-0 text-gold" />{company.phone}</a></li><li><a className="flex gap-3 hover:text-white" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.formatted)}`}><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{company.address.formatted}</a></li></ul></div>
      </Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Satya Syamala LLC. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms of Use</Link></div></Container></div>
    </footer>
  );
}
