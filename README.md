# North Arrow Research Website

This repository contains the official North Arrow Research marketing website, built with Docusaurus.

The site is a static React-based web app that presents:

- North Arrow Research branding and messaging
- Product overviews and links
- Client logo ribbons
- Team biographies on the People page
- Contact information and contact page

## What This Repo Represents

This is the source code for https://northarrowresearch.com.

It includes:

- Site configuration and theme settings
- Custom page implementations and styling
- Static media assets (logos, backgrounds, people headshots, product images)
- Build output generation for static hosting

## Key Project Areas

- `docusaurus.config.ts`: site metadata, navbar/footer config, theme config
- `src/pages/`: page implementations (`index`, `people`, `contact-us`)
- `src/css/custom.css`: global styles and theme overrides
- `static/img/`: images used by the site

## Tech Stack

- Docusaurus 3
- React 19
- TypeScript

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

The local server supports hot reload for page and style changes.

## Build

Create a production static build:

```bash
npm run build
```

Build artifacts are written to `build/`.

## Optional Scripts

- `npm run serve`: serve the production build locally
- `npm run typecheck`: run TypeScript checks
- `npm run clear`: clear Docusaurus cache
