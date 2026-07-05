# Chogan Webshop 🛍️

Modern webbshop för Chogan-produkter med multilingual support och flera betalningsmetoder.

## Features ✨

- ✅ **Flerspråk:** Arabiska, Svenska, Engelska
- ✅ **Betalningar:** Visa, Mastercard, Klarna, PayPal
- ✅ **Responsiv Design:** Mobile-first approach
- ✅ **Produktkatalog:** Modern UI för produktvisning
- ✅ **Shopping Cart:** Persistent cart med Zustand
- ✅ **Admin Panel:** För produkthantering

## Installation & Konfigurering

```bash
# Installera dependencies
npm install

# Skapa .env.local fil
cp .env.example .env.local

# Starta development server
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000)

## Miljövariabler

Skapa `.env.local`:

```
# Stripe
NEXT_PUBLIC_STRIPE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_CLIENT_ID
PAYPAL_SECRET=YOUR_SECRET

# Klarna
KLARNA_API_KEY=YOUR_API_KEY
KLARNA_MERCHANT_ID=YOUR_MERCHANT_ID
```

## Språkstöd

- 🇸🇪 **Svenska** (sv)
- 🇬🇧 **Engelska** (en)  
- 🇸🇦 **Arabiska** (ar)

## Betalningsmetoder

1. **Stripe** - Visa, Mastercard
2. **PayPal** - Digitala plånböcker
3. **Klarna** - Köp nu, betala senare

## Deploy

Deploy på Vercel:

```bash
npm i -g vercel
vercel
```

---

**Status:** 🚀 Under utveckling
