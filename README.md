# jafsal.dev

Personal portfolio of Jafsal M A: web scraping, data engineering and technical leadership.

- Next.js 15 static export (`output: 'export'`), Tailwind, deployed to Firebase Hosting.
- All content lives in `src/lib/portfolio-data.json`.

```bash
npm install
npm run dev        # http://localhost:9002
npm run build      # static site in out/
firebase deploy --only hosting
```
