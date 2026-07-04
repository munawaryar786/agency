# Asian Ravi Frontend Checklist and Architecture

## Checklist

- [x] Multi-page Next.js App Router frontend
- [x] Premium black, gold and cream design system
- [x] Sticky header, top bar, dropdown navigation and mobile drawer
- [x] Footer, floating WhatsApp, floating call and scroll-to-top actions
- [x] Home page with hero, trust strip, promo, inquiry form, why choose, featured packages, Hajj preview, Hajj 2027 highlight, group packages, facilities, services, hotel guidance, room types, process, gallery, testimonials, stats, FAQ, rate note and CTA
- [x] About, services, visa, ticketing, hotels, transport, tours, trust, gallery, testimonials, FAQ, blog and contact pages
- [x] Umrah, Hajj and group package listing pages
- [x] Package detail, blog detail and offer detail templates
- [x] Local mock data files for site, navigation, packages, shuttle packages, group packages, services, testimonials, FAQs, blog, gallery and offers
- [x] Frontend-only forms with success messages
- [x] Trust page with client confirmation notes for unverified badges
- [x] Asset folder structure under public/assets

## Architecture

The app uses Next.js, React, TypeScript and Tailwind CSS. Reusable data lives in `src/data`, route pages live in `src/app`, layout and repeated UI live in `src/components`, and helpers live in `src/lib`.

## Component Structure

- `layout`: header, footer and floating actions
- `shared`: section wrappers and page hero
- `cards`: package, service and testimonial cards
- `forms`: inquiry and contact forms
- `sections`: CTA, FAQ accordion, process, stats, hotel guidance and room type content
- `ui`: reusable button styles

## Page Plan

Every required page is implemented as a route. Detail templates are data-driven through package slugs, blog slugs and offer slugs.
