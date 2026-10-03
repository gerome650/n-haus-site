# n-haus.com

Static site for NHAUS MEDIA. No build step: plain HTML pages, one shared `site.css` and `site.js`, self-hosted fonts in `fonts/`, and a favicon.

## Pages

| Route | File | What it holds |
|---|---|---|
| `/` | `index.html` | Business CMA as the lead offer, with a Production Studio section |
| `/business-cma/` | `business-cma/index.html` | What the CMA is, the nine report sections, review, and the purchase journey |
| `/production-studio/` | `production-studio/index.html` | Capabilities, process, agencies and rates |
| `/work/` | `work/index.html` | Production case studies |
| `/contact/` | `contact/index.html` | Email, with separate CMA and production inquiry links |

The site was one page before. `site.js` sends the old fragment links (`/#capabilities`, `/#process`, `/#agencies`, `/#rates`, `/#work`, `/#contact`) to the page that now holds each section.

The Business CMA is not sold online yet. Its page uses an email inquiry and carries no price or checkout.

Preview locally with `python3 -m http.server` from the repo root.

## Deploy (GitHub Pages)

1. Repo Settings > Pages > Build and deployment: deploy from branch `main`, folder `/ (root)`.
2. Custom domain: `www.n-haus.com` (the `CNAME` file already declares it). Do this before changing DNS.
3. DNS at GoDaddy, web records only:
   - `A` record for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www`: `<github-user>.github.io`
   - Leave the `MX` and `TXT` records alone. They carry Google Workspace email.
4. Once the certificate is issued, tick Enforce HTTPS.

## Fonts

Archivo, Instrument Sans and IBM Plex Mono, all under the SIL Open Font License.
