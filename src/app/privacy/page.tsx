import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/data/company";
export const metadata: Metadata = { title: "Privacy Policy | Satya Syamala LLC", description: "Privacy policy for Satya Syamala LLC website inquiries.", alternates: { canonical: "/privacy" } };
export default function Privacy() { return <LegalPage title="Privacy Policy" updated="July 30, 2026">
  <p>This policy explains how Satya Syamala LLC handles information submitted through this website.</p>
  <LegalSection title="Information we collect"><p>When you contact us, we may collect your name, work email, phone number, company name, service interest, message, and any other information you choose to provide.</p></LegalSection>
  <LegalSection title="How we use information"><p>We use submitted information to review and respond to inquiries, communicate about potential services, maintain appropriate business records, and improve our inquiry process.</p></LegalSection>
  <LegalSection title="Sharing and selling"><p>We do not sell personal information. Information may be processed by service providers used to operate this website or receive form submissions, subject to their applicable terms and privacy practices. Once configured, the contact form may use a third-party provider such as Formspree or Web3Forms.</p></LegalSection>
  <LegalSection title="Data choices and security"><p>You may ask us to correct or delete information you submitted, subject to legal or operational recordkeeping needs. No online transmission method is completely secure, so please do not send confidential or sensitive information through the contact form.</p></LegalSection>
  <LegalSection title="Contact"><p>For privacy questions or requests, email <a className="font-semibold text-navy underline" href={`mailto:${company.email}`}>{company.email}</a>.</p></LegalSection>
  <LegalSection title="Updates"><p>We may update this policy as our website or practices change. The date above indicates the latest revision.</p></LegalSection>
</LegalPage>; }
