# n-haus.com

Static site for NHAUS MEDIA. No build step: `index.html`, self-hosted fonts in `fonts/`, and a favicon.

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
