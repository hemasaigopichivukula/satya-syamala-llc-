import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { company } from "@/data/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Satya Syamala LLC | AI, Business Strategy & Technology Consulting",
  description: "Satya Syamala LLC helps businesses improve operations through AI strategy, workflow automation, analytics, process improvement, and technology consulting.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: "/", siteName: company.name, title: "Satya Syamala LLC | Practical AI & Business Consulting", description: company.description, locale: "en_US" },
  twitter: { card: "summary", title: "Satya Syamala LLC | Practical AI & Business Consulting", description: company.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#082B50" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: company.name, url: siteUrl, email: company.email, telephone: company.phoneHref, description: company.description, founder: { "@type": "Person", name: company.founder.name }, address: { "@type": "PostalAddress", streetAddress: company.address.street, addressLocality: company.address.city, addressRegion: company.address.region, postalCode: company.address.postalCode, addressCountry: company.address.country }, areaServed: { "@type": "City", name: "San Diego" } };
  return <html lang="en"><body><a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-white px-4 py-2 font-bold text-navy shadow focus:translate-y-0">Skip to main content</a>{children}<Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
