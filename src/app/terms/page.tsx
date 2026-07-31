import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/data/company";
export const metadata: Metadata = { title: "Terms of Use | Satya Syamala LLC", description: "Terms governing use of the Satya Syamala LLC website.", alternates: { canonical: "/terms" } };
export default function Terms() { return <LegalPage title="Terms of Use" updated="July 30, 2026">
  <p>By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
  <LegalSection title="Website purpose"><p>This site provides general information about Satya Syamala LLC and its business and technology consulting services. Website content is informational and does not create a client relationship, engagement, or obligation to provide services.</p></LegalSection>
  <LegalSection title="No specialized professional advice"><p>Content on this site is not legal, financial, immigration, tax, or accounting advice. You should consult an appropriately qualified professional for advice in those areas.</p></LegalSection>
  <LegalSection title="Acceptable use"><p>You may not misuse this site, interfere with its operation, attempt unauthorized access, submit unlawful material, or use its content in a misleading way.</p></LegalSection>
  <LegalSection title="Content and availability"><p>We aim to keep information useful and current, but we do not guarantee that all content is complete, error-free, or continuously available. Services and site content may change without notice.</p></LegalSection>
  <LegalSection title="Intellectual property"><p>Unless otherwise stated, the site design, text, branding, and original content belong to Satya Syamala LLC and may not be reproduced for commercial use without permission.</p></LegalSection>
  <LegalSection title="External services"><p>This site may link to third-party websites or use third-party form processing. We are not responsible for third-party content, availability, or privacy practices.</p></LegalSection>
  <LegalSection title="Contact"><p>Questions about these terms may be sent to <a className="font-semibold text-navy underline" href={`mailto:${company.email}`}>{company.email}</a>.</p></LegalSection>
</LegalPage>; }
