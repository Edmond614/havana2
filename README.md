# Havana Super

Marketing site for Havana Super — specialist SMSF establishment & administration.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Create a free account at [github.com](https://github.com) (skip if you have one).
2. Create a new repository — name it `havana-super` (or anything).
3. Upload the contents of this folder to the repo (drag-and-drop on github.com works fine, or use git from the terminal).
4. Sign up at [vercel.com](https://vercel.com) using your GitHub account.
5. Click **New Project**, select the `havana-super` repo, hit **Deploy**.
6. In Vercel, go to **Settings → Domains** and add `havana.com.au`. Vercel will give you DNS records to set with your domain registrar; once they propagate (usually under an hour) the site is live.

No environment variables are required. The contact form is currently a stub — wire it up to your CRM or a service like Resend / Formspree when you're ready.

## Structure

```
app/
  layout.js          fonts, metadata, html shell
  page.js            home page (composes all sections)
  globals.css        full design system
components/
  UtilBar.jsx        top compliance/contact bar
  Nav.jsx            sticky primary nav
  Hero.jsx           hero with stats
  TrustStrip.jsx     regulator badges
  ValueProps.jsx     three-column value props
  EligibilityCalc.jsx live calculator (client component)
  Process.jsx        4-step timeline
  Pricing.jsx        flat-fee table
  Compare.jsx        side-by-side capability matrix
  Testimonials.jsx   member quotes
  FAQ.jsx            accordion (client component)
  FinalCTA.jsx       contact form (client component)
  Footer.jsx         disclaimers, navigation, regulatory IDs
```

## Editing copy

Each component is plain JSX. Change copy directly in the relevant file under `components/` — no CMS, no build steps beyond `npm run dev`.
