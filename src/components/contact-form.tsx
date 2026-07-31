"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { services, company } from "@/data/company";
import { Button } from "./ui";

type Status = { type: "idle" | "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus({ type: "error", message: `Online submission is being configured. Please email ${company.email} or call ${company.phone}.` });
      return;
    }
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus({ type: "success", message: "Thank you. Your message has been sent, and we will follow up with the next best step." });
    } catch {
      setStatus({ type: "error", message: `We could not send your message. Please try again or email ${company.email}.` });
    } finally { setSubmitting(false); }
  }

  const field = "mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20";
  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-navy">Full name <span aria-hidden="true" className="text-gold">*</span><input className={field} name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
        <label className="text-sm font-bold text-navy">Work email <span aria-hidden="true" className="text-gold">*</span><input className={field} name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
        <label className="text-sm font-bold text-navy">Phone number<input className={field} name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" /></label>
        <label className="text-sm font-bold text-navy">Company name<input className={field} name="company" type="text" autoComplete="organization" placeholder="Company or organization" /></label>
        <label className="text-sm font-bold text-navy sm:col-span-2">Service interest <span aria-hidden="true" className="text-gold">*</span>
          <select className={field} name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(({ title }) => <option key={title}>{title}</option>)}<option>Other</option></select>
        </label>
        <label className="text-sm font-bold text-navy sm:col-span-2">Message <span aria-hidden="true" className="text-gold">*</span><textarea className={field} name="message" required minLength={10} rows={5} placeholder="Tell us about your goals, challenges, or project needs." /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-navy" /><span>I consent to Satya Syamala LLC using this information to respond to my inquiry. <span aria-hidden="true" className="text-gold">*</span></span></label>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status.type !== "idle" && <div role="status" className={`mt-5 rounded-md px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}>{status.message}</div>}
      <Button type="submit" disabled={submitting} className="mt-6 w-full sm:w-auto">{submitting ? "Sending…" : <>Send Message <Send size={16} className="ml-2" /></>}</Button>
      <p className="mt-4 text-xs leading-5 text-slate-500">Please do not submit confidential or sensitive information through this form.</p>
    </form>
  );
}
