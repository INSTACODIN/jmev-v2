# JMEV Website Clone

A modern, responsive website clone of the JMEV electric vehicle dealer site, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚗 Modern, responsive design matching the original JMEV Bangladesh site
- 🎨 Smooth animations using Framer Motion
- 📝 Contact and booking forms with validation
- 🔔 Slack integration for form submissions (no backend required)
- ⚡ Fast performance with Next.js static generation
- 📱 Fully responsive mobile-first design
- ♿ Accessible components

## Technology Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Slack Webhook** - Form notifications

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jmev-v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Slack webhook URL:
```env
NEXT_PUBLIC_SLACK_WEBHOOK_URL=your_slack_webhook_url_here
```

   To get a Slack webhook URL:
   1. Go to https://api.slack.com/apps
   2. Create a new app or select an existing one
   3. Go to "Incoming Webhooks" and activate it
   4. Create a new webhook and copy the URL

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jmev-v2/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Homepage
│   ├── about-us/           # About Us page
│   ├── contact-us/         # Contact Us page
│   └── api/
│       └── slack/          # Slack webhook API route
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section with specs
│   ├── ColorOptions.tsx   # Car color selector
│   ├── FeatureSection.tsx  # Product features
│   ├── SpecsCard.tsx       # Specification card
│   ├── ContactForm.tsx     # Contact form
│   └── BookingForm.tsx     # Test drive booking form
├── lib/
│   └── slack.ts            # Slack webhook utility
└── public/                 # Static assets
```

## Pages

- **Homepage** (`/`) - Hero section, color options, features, and booking form
- **About Us** (`/about-us`) - Company information and quality standards
- **Contact Us** (`/contact-us`) - Contact form and company details

## Form Submissions

Both contact and booking forms send notifications to a Slack channel via webhook. No backend database is required - all submissions are sent directly to Slack.

## Building for Production

```bash
npm run build
npm start
```

## License

This project is for demonstration purposes.
