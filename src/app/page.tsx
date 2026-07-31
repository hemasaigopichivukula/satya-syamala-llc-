import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { approach, company, reasons, services, values } from "@/data/company";

export default function Home() {
  return <>
    <Header />
    <main id="main-content">
      <section id="home" className="relative overflow-hidden bg-navy-dark pt-28 text-white sm:pt-32">
        <div className="absolute inset-0 opacity-[.06]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "54px 54px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
        <Container className="relative grid min-h-[700px] items-center gap-8 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.22em] text-gold-light"><span className="h-px w-8 bg-gold" />San Diego, California</p>
            <h1 className="font-serif text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">Practical AI.<br /><span className="text-gold-light">Stronger Operations.</span><br />Smarter Growth.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Satya Syamala LLC helps organizations improve business performance through AI strategy, workflow automation, analytics, operational improvement, and structured execution.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#contact">Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Button><Button href="#services" variant="light">Explore Our Services</Button></div>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.18em] text-slate-400">AI Strategy <span className="mx-2 text-gold">·</span> Business Transformation <span className="mx-2 text-gold">·</span> Technology Consulting</p>
          </div>
          <HeroVisual />
        </Container>
        <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      <section id="about" className="py-20 sm:py-28">
        <Container>
          <Reveal><SectionHeading eyebrow="About Satya Syamala" title="Business Transformation Built Around Practical Execution" description="Satya Syamala LLC is a professional consulting company helping businesses evaluate opportunities, improve processes, adopt practical technology, and move strategic initiatives from idea to execution. Our approach combines business analysis, AI enablement, operational discipline, and hands-on implementation support." /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{values.map(({ title, description, icon: Icon }, i) => <Reveal key={title} delay={i * 90} className="h-full"><article className="h-full rounded-lg border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"><div className="grid h-11 w-11 place-items-center rounded-md bg-navy text-gold-light"><Icon size={21} /></div><h3 className="mt-5 font-serif text-xl font-bold text-navy-dark">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></article></Reveal>)}</div>
        </Container>
      </section>

      <section id="services" className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal><SectionHeading eyebrow="What We Do" title="Consulting Services" description="Focused support that connects business priorities with practical technology, better operating processes, and disciplined execution." /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({ title, description, icon: Icon }, i) => <Reveal key={title} delay={(i % 3) * 80} className="h-full"><article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft"><div className="grid h-12 w-12 place-items-center rounded-md bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-gold-light"><Icon size={23} /></div><h3 className="mt-5 font-serif text-xl font-bold text-navy-dark">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></article></Reveal>)}</div>
        </Container>
      </section>

      <section id="approach" className="bg-navy py-20 sm:py-28">
        <Container>
          <Reveal><SectionHeading eyebrow="Our Approach" title="How We Work" description="A clear, adaptable process that turns business needs into structured action." light /></Reveal>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-5"><div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/20 md:block" />{approach.map(({ title, description, icon: Icon }, i) => <Reveal key={title} delay={i * 100} className="relative"><article className="relative border-l border-white/20 pl-8 md:border-0 md:pl-0"><div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-navy-dark text-gold-light shadow-xl"><Icon size={23} /></div><p className="mt-5 text-xs font-extrabold tracking-[.2em] text-gold-light">0{i + 1}</p><h3 className="mt-2 font-serif text-2xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{description}</p></article></Reveal>)}</div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_.85fr]">
          <Reveal><SectionHeading eyebrow="Why Choose Us" title="Focused, Flexible, and Execution-Oriented" description="We focus on solutions that can be understood, implemented, measured, and improved." /></Reveal>
          <Reveal><div className="grid gap-3 sm:grid-cols-2">{reasons.map(reason => <div key={reason} className="flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-surface p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/20 text-navy"><Check size={17} /></span><span className="font-bold text-navy">{reason}</span></div>)}</div></Reveal>
        </Container>
      </section>

      <section id="leadership" className="bg-surface py-20 sm:py-28">
        <Container><div className="grid items-center gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal><div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-lg bg-navy shadow-soft"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #C79A3B 0, transparent 30%), linear-gradient(135deg, transparent 45%, #fff 46%, transparent 47%)" }} /><div className="absolute inset-0 grid place-items-center"><div className="grid h-36 w-36 place-items-center rounded-full border border-gold/50 bg-navy-dark text-center font-serif text-5xl font-bold text-gold-light">SS</div></div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark p-7 pt-20"><p className="font-serif text-2xl font-bold text-white">Company Leadership</p><p className="mt-1 text-sm text-gold-light">Founder & Managing Director</p></div></div></Reveal>
          <Reveal><SectionHeading eyebrow="Leadership" title="Practical Guidance. Committed Support." /><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Satya Syamala LLC is led with a focus on practical consulting, client support, technology-enabled business improvement, and long-term relationship building.</p><p className="mt-5 max-w-2xl leading-7 text-slate-600">The company’s work is grounded in attentive listening, clear communication, and solutions shaped around each client’s actual operating needs.</p><Button href="#contact" variant="secondary" className="mt-8">Start a Conversation <ArrowRight size={16} className="ml-2" /></Button></Reveal>
        </div></Container>
      </section>

      <section id="contact" className="py-20 sm:py-28">
        <Container><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal><SectionHeading eyebrow="Contact" title="Let’s Discuss Your Business Needs" description="Tell us about your goals, challenges, or project needs. We will review your message and respond with the next best step." /><div className="mt-9 space-y-5">
            <a href={`mailto:${company.email}`} className="flex items-start gap-4 rounded-lg p-2 transition hover:bg-surface"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold-light"><Mail size={19} /></span><span><strong className="block text-sm text-navy">Email</strong><span className="text-sm text-slate-600">{company.email}</span></span></a>
            <a href={`tel:${company.phoneHref}`} className="flex items-start gap-4 rounded-lg p-2 transition hover:bg-surface"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold-light"><Phone size={19} /></span><span><strong className="block text-sm text-navy">Phone</strong><span className="text-sm text-slate-600">{company.phone}</span></span></a>
            <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.formatted)}`} className="flex items-start gap-4 rounded-lg p-2 transition hover:bg-surface"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold-light"><MapPin size={19} /></span><span><strong className="block text-sm text-navy">Address</strong><span className="text-sm leading-6 text-slate-600">{company.address.street}<br />{company.address.city}, {company.address.region} {company.address.postalCode}</span></span></a>
          </div></Reveal>
          <Reveal><ContactForm /></Reveal>
        </div></Container>
      </section>
    </main>
    <Footer /><ScrollTop />
  </>;
}
