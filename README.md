# FungiFinders - CSS Practice Project

A Next.js application for discovering and learning about mushroom foraging. This project was created as part of the **Frontend Masters** course: **Professional CSS: Build a Website from Scratch**.

**Course taken:** January 2026  
**Purpose:** Practicing CSS by following mockup designs

## About This Project

This project is a practice exercise focused on CSS fundamentals and modern styling techniques. The goal is to recreate the provided mockup designs using professional CSS practices, including:

- SCSS modules for component-scoped styling
- CSS variables and SCSS variables for design tokens
- Reusable mixins for common patterns
- Responsive design principles
- Modern CSS features

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and layout
  - `page.tsx` - Home page
  - `mushroom-guide/page.tsx` - Mushroom guide page
  - `layout.tsx` - Root layout with Header and Footer
  - `globals.scss` - Global styles with SCSS variables
  - `_variables.scss` - SCSS variables (colors, fonts, spacing)
  - `_mixins.scss` - Reusable SCSS mixins
  - `*.module.scss` - Component-scoped SCSS modules
- `components/` - Reusable React components
  - `Header.tsx` - Site header with navigation
  - `Footer.tsx` - Site footer
  - `Card.tsx` - Card component for content sections
  - `*.module.scss` - Component-specific styles
- `public/assets/` - Static assets (images, SVGs)
- `designs/` - Mockup design files for reference

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **SCSS/SCSS Modules** - Component-scoped styling
- **CSS Variables** - Design tokens for runtime use

## Features

- Responsive design following mockup specifications
- SCSS modules for maintainable, scoped styles
- Design system with variables and mixins
- Optimized images with Next.js Image component
- TypeScript for type safety
- SEO-friendly with Next.js metadata

## Build for Production

```bash
npm run build
npm start
```

## Course Information

- **Course:** Professional CSS: Build a Website from Scratch
- **Platform:** Frontend Masters
- **Date:** January 2026
- **Focus:** CSS fundamentals, modern styling techniques, and following design mockups
