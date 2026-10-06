# Senadem Bees

A responsive, bilingual Arabic/French static storefront designed for Algerian customers. It uses plain HTML, CSS and JavaScript, with WhatsApp order handoff and no backend or external runtime dependencies. Product illustrations are explicitly temporary CSS artwork, not brand photography.

## Preview

Open `index.html` in a browser, or run a local static server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.

## Safe edits

Edit `js/config.js` to change the products, names, weights, descriptions, prices, WhatsApp number, social profile URLs, currency, delivery details, payment setting, FAQs, and testimonial placeholders. Add authentic product photos under `assets/images/`, then set each product's `image` and `imageAlt` in the config. Do not leave the placeholder WhatsApp string if you want customers to complete orders.

Before deploying, set `SITE_URL` in `js/config.js` and update the canonical domain in `robots.txt` and `sitemap.xml`. Instagram and Facebook URLs should also be replaced with the official profile URLs. Test the WhatsApp link with the configured number.

The WhatsApp form creates a prefilled message in the visitor's browser; it does not store or send customer data to a server. Delivery fee, timing, and payment details remain unconfirmed until the brand owner configures them.

## Deploy

Upload this folder to GitHub Pages or Cloudflare Pages as a static site. No build step is required. Keep `index.html` at the published site root.

