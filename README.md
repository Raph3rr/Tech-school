# Tech School Website

A responsive public-facing website for a small online tech school offering three learning tracks:

- Web development
- Data analysis
- Cybersecurity

## Stack

- React
- Vite
- JavaScript and JSX
- Tailwind CSS 4
- Wouter for client-side routing
- Lucide React for functional interface icons

This version is intentionally client-only. The sign-up flow can send visitors to Google Forms, so this first launch does not need a separate Express server, database, or server-side package. Vercel can host the generated `dist` folder directly.

## Visual direction

The site uses a warm paper background, charcoal structure, forest green, ochre, and rust accents. It intentionally avoids purple or blue tech gradients, pill-shaped buttons, stock or AI-generated photos, fake reviews, fake metrics, cursor effects, and overdone scroll animation.

## Pages

- `/` home
- `/about` about the school
- `/courses` course index and questions
- `/courses/web-development` web development detail
- `/courses/data-analysis` data analysis detail
- `/courses/cybersecurity` cybersecurity detail
- `/tutors` teaching team
- `/signup` interest form and enrolment guidance
- `/community` general WhatsApp community flow
- `/privacy` privacy policy
- `/terms` terms and conditions

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Before launch

Update the editable values in `client/src/data/site.js`:

- Official school name and short mark
- WhatsApp community URL
- Official admin WhatsApp number
- School email address
- Social links
- Real tutor names, biographies, and profile photos if you decide to use photos
- Confirmed course dates, prices, and payment instructions

The sign-up page is intentionally safe while those details are not configured. Once the official admin WhatsApp number is added, a completed form opens a prefilled WhatsApp conversation. A production launch should connect the form to a real submission service or backend, then test the full enrolment and payment flow.

## Launch checklist

- [ ] Replace the working school name and editable contact values
- [ ] Add the real WhatsApp community link
- [ ] Connect the sign-up form to the chosen submission or CRM workflow
- [ ] Confirm course dates, prices, and payment process
- [ ] Review the privacy policy and terms with the school's local requirements
- [ ] Connect the custom domain
- [ ] Verify the favicon on the live domain
- [ ] Check all links and mobile layouts on the live domain
- [ ] Confirm no platform watermark or AI branding is visible
