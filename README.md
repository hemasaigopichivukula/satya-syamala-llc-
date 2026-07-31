# Satya Syamala LLC Website

A polished, responsive business website for Satya Syamala LLC, a San Diego consulting company focused on practical AI adoption, business transformation, workflow automation, analytics, project support, and operational improvement.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- Deployment-ready for Vercel

All editable business content is centralized in `src/data/company.ts`.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Quality and production commands:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`: final canonical URL, such as `https://satyasyamala.com` (no trailing slash).
- `NEXT_PUBLIC_FORM_ENDPOINT`: full HTTPS POST endpoint supplied by Formspree or another FormData-compatible service.
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: optional future Google Analytics measurement ID. Analytics is intentionally not loaded yet; see below.

No secrets should be committed. These values are public by design because they are used by the browser.

## Configure the contact form

1. Create a form at Formspree (or choose a comparable hosted form provider).
2. Set the verified recipient to `satyasyamalainc@gmail.com`.
3. Copy the provider's full form endpoint into `NEXT_PUBLIC_FORM_ENDPOINT`.
4. Configure the provider's allowed domain after deployment.
5. Enable the provider's spam filtering, submission limits, and email verification.
6. Test both successful and failed submissions from the production domain.

The form includes required-field validation, email validation, consent, accessible status messages, and a honeypot field. When no endpoint is configured, it safely directs visitors to email or call instead of pretending a message was sent.

## Content and assets

- Update services, navigation, company details, and leadership copy in `src/data/company.ts`.
- Replace `public/logo.svg` with the final logo while keeping the same filename, or update its references in the header and footer. Preserve a wide aspect ratio and accessible logo text.
- The initials-based leadership image is in `src/app/page.tsx`. To add a real photo, save an optimized WebP/AVIF in `public/images/`, use `next/image`, provide descriptive alt text, and retain explicit dimensions.
- Update page metadata and structured data in `src/app/layout.tsx`.
- Update legal text in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`.

## Deploy to Vercel

1. Create a Git repository and commit the project: `git init`, `git add .`, `git commit -m "Build Satya Syamala website"`.
2. Create a private or public GitHub repository and push the code.
3. In Vercel, choose **Add New → Project**, import the GitHub repository, and keep the detected Next.js defaults.
4. Add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORM_ENDPOINT` under **Project Settings → Environment Variables** for Production, Preview, and Development as appropriate.
5. Deploy. Vercel will run `npm run build` automatically.
6. Test the generated `vercel.app` URL, then set `NEXT_PUBLIC_SITE_URL` to the final custom-domain URL and redeploy.

## Connect a purchased custom domain

1. In Vercel, open the project and select **Settings → Domains**.
2. Enter the purchased apex domain (for example, `satyasyamala.com`) and click **Add**.
3. Add `www` as well and choose which hostname should redirect to the other.
4. At the domain registrar, add exactly the DNS records Vercel displays. Typically this is an A record for the apex and a CNAME for `www`, but follow Vercel's live instructions because values can change.
5. Remove conflicting A, AAAA, or CNAME records for the same hostname only after confirming they are not used by another service. Do not change MX records used for email.
6. Wait for Vercel to show **Valid Configuration** and provision HTTPS.
7. Set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com`, redeploy, and confirm canonical tags, sitemap, form provider allowed domains, and redirects.

## Add Google Analytics later

Obtain consent/legal guidance first. Then add the Google tag via `next/script` in `src/app/layout.tsx`, loading it only when `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` is set. Update the privacy policy to identify Google Analytics, the data collected, retention choices, and opt-out/consent behavior. For applicable visitors, add a consent manager before analytics loads.

## SEO

Global metadata, Open Graph, Twitter cards, canonical URL, robots directives, ProfessionalService structured data, sitemap, and robots routes are already configured. Before launch, replace the placeholder site URL, add a purpose-designed 1200×630 Open Graph image, verify the business details, and submit `/sitemap.xml` to Google Search Console.

## Pre-launch checklist

- Replace the temporary SVG logo with the supplied official logo.
- Add an approved professional leadership photo, if desired.
- Set the final `NEXT_PUBLIC_SITE_URL`.
- Configure and test `NEXT_PUBLIC_FORM_ENDPOINT`; enable provider spam controls.
- Obtain legal review of the privacy policy and terms before publishing final policies.
- Confirm phone, email, mailing address, founder name, service language, and capitalization.
- Add a custom Open Graph image and final favicon package.
- Test keyboard navigation, screen-reader labels, contrast, and reduced-motion behavior.
- Test current Chrome, Safari, Firefox, Edge, iOS, and Android devices.
- Verify email delivery and reply workflow.
- Check all external links and production console logs.
- Confirm DNS, HTTPS, canonical URL, redirects, robots.txt, sitemap.xml, and Search Console.
- Decide whether analytics/cookie consent is needed before adding tracking.

## Known launch dependencies

The repository did not contain the referenced official logo or a leadership photo, so local, polished placeholders are used. The hosted form cannot accept submissions until an endpoint is configured. The canonical URL defaults to `https://example.com` until the site URL environment variable is set. Legal pages are clear starter policies, not legal advice, and should receive legal review before launch.
