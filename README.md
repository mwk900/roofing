# Northcrest Roofing Nottingham (Demo) — Static Next.js Demo Site

A production-ready demo website for a Nottingham roofing business concept, built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static export via `output: "export"`

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build static export
```bash
npm run build
```

This generates a static `out/` folder ready for deployment.

## Deploying to Netlify
This repository includes `netlify.toml` configured as:
- Build command: `npm run build`
- Publish directory: `out`

You can connect the repo in Netlify and deploy directly with those settings.

## Notes
- This is a demo-only website project.
- No backend runtime, no API routes, and no database are required.
