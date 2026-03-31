# 🌸 Modern Muse — Premium Beauty Studio Website

A luxurious, editorial beauty salon website built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Designed for a professional beautician offering lash extensions, brow lamination, threading, and epilation services.

---

## ✨ Features

- **Animated Intro** — Custom lotus flower bloom animation on page load
- **Hero Section** — Editorial layout with arched portrait image and staggered text reveal
- **Services Section** — 4 service cards with arch-shaped images and hover interactions
- **About Section** — Staggered image grid with shimmer stat card and animated divider
- **Gallery** — Masonry layout with grayscale-to-color hover effect
- **Booking Form** — WhatsApp-integrated booking with validation and success state
- **EN / FR Language Toggle** — Full bilingual support (English & French)
- **Mobile Menu** — Slide-in panel with animated hamburger icon
- **Scroll Animations** — Intersection Observer-based reveal animations on every section
- **Fully Responsive** — Mobile-first design with floating booking button on mobile

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with `@theme` tokens |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | Optimized font loading |
| WhatsApp API | Booking form submission |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FCF7F5` | Page background |
| `surface` | `#F3E7EA` | Section backgrounds |
| `primary` | `#C98A98` | Accents, labels |
| `primary-deep` | `#8E4B5C` | Hover states |
| `primary-dark` | `#5C2E3A` | Buttons, CTA |
| `text-main` | `#1F1A1B` | Headings, body |
| `text-soft` | `#6E5C61` | Subtext, captions |
| `border` | `#E7D6DA` | Dividers, card borders |
| `highlight` | `#E8BDC7` | Hover tints |

### Typography

- **Headlines** — Noto Serif (italic, editorial feel)
- **Body** — Manrope (clean, modern sans-serif)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/modern-muse.git

# Navigate to the project
cd modern-muse

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles + Tailwind @theme tokens
│   ├── layout.tsx          # Root layout with fonts + providers
│   └── page.tsx            # Main page composition
├── components/
│   ├── Navbar.tsx          # Fixed navbar with language toggle + mobile menu
│   ├── IntroAnimation.tsx  # Lotus bloom intro animation
│   ├── Hero.tsx            # Hero section with image + text reveal
│   ├── Services.tsx        # Service cards grid
│   ├── About.tsx           # About section with staggered images
│   ├── Gallery.tsx         # Masonry gallery
│   ├── BookingForm.tsx     # WhatsApp booking form
│   ├── CTA.tsx             # Call-to-action banner
│   ├── Footer.tsx          # Footer with links and contact
│   ├── ScrollReveal.tsx    # Reusable scroll animation wrapper
│   └── Providers.tsx       # Client-side context providers
└── lib/
    ├── translations.ts     # EN / FR translation strings
    ├── LanguageContext.tsx  # Language state context
    └── scrollTo.ts         # Smooth scroll utility
```

---

## 🌍 Internationalization

The site supports **English** and **French** via a custom context-based i18n system — no external libraries needed.

All strings live in `src/lib/translations.ts`. To add a new language:

1. Add a new key to the `Language` type in `translations.ts`
2. Duplicate the `en` object and translate all strings
3. Add a new button to the language toggle in `Navbar.tsx`

---

## 📲 Booking System

The booking form collects:
- Client name
- Phone number
- Preferred service
- Preferred date
- Preferred time slot

On submission it opens WhatsApp with a pre-filled message sent directly to the beautician's number.

To update the WhatsApp number, edit `WHATSAPP_NUMBER` in `src/components/BookingForm.tsx`:

```ts
const WHATSAPP_NUMBER = "213XXXXXXXXX"; // Country code + number, no + or spaces
```

---

## 📦 Deployment

This project is deployed on **Vercel**.

Every push to `main` triggers an automatic redeployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🖼 Image Credits

Placeholder images sourced from [Pexels](https://pexels.com) and [Pinterest](https://pinterest.com).  
Replace with real client photos for production use.

---

## 📝 License

This project is private and built for a specific client.  
Not licensed for redistribution or reuse without permission.

---

## 👩‍💻 Built By

Developed with care as a premium freelance project.  
Guided step-by-step from design system to deployment.

> *"Soft beauty. Strong confidence."*
