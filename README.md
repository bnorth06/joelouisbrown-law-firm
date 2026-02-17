# Joe Louis Brown - Law Firm Website

A modern, responsive, and animated website for Joe Louis Brown's law practice. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Professional animations using Framer Motion
  - Hero section fade-in and slide-up effects
  - Service cards stagger animation on scroll
  - Hover effects on interactive elements
- **Sections**:
  - Hero section with call-to-action
  - Practice areas (Criminal Defense, Family Law, Juvenile Cases)
  - About section with credentials
  - CTA section for consultations
  - Contact information
  - Footer

## Tech Stack

- **Framework**: Next.js 16+
- **Styling**: Tailwind CSS 4+
- **Animations**: Framer Motion 12+
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/bnorth06/joelouisbrown-law-firm.git
cd joelouisbrown-law-firm
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── layout.tsx        # Root layout
  ├── page.tsx          # Main page component
  └── globals.css       # Global styles

public/
  └── images/           # Static images

tailwind.config.js      # Tailwind configuration
next.config.js          # Next.js configuration
```

## Key Components

### Hero Section
- Eye-catching background with gradient and blur effects
- Animated text and CTA button
- Hero image placeholder

### Services Grid
- Three practice areas with hover effects
- Animated entrance on scroll
- Icon-based visual hierarchy

### Contact Section
- Contact information cards
- Staggered animation on view
- Icons for each contact method

## Customization

To customize colors and branding:
1. Edit `tailwind.config.js` for color schemes
2. Update text and images in `app/page.tsx`
3. Modify animation timings in component definitions

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for smaller bundle size
- Smooth animations that don't impact performance

## Deployment

Deployed on Vercel. Any push to the main branch will automatically trigger a production build and deployment.

## License

All rights reserved. © 2024 Joe Louis Brown Law Firm.

## Contact

For inquiries about the legal services, visit the website or contact directly.
