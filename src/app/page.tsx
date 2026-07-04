import { CheckCircle2, Clock, Hotel, MapPin, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import { PackageCard } from "@/components/cards/PackageCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { packages, facilities } from "@/data/packages";
import { groupUmrahHighlight } from "@/data/groupUmrahPackages";
import { seasonalOffers } from "@/data/seasonalOffers";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { tours } from "@/data/tours";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export default function Home() {
  const trust = ["Licensed Travel Brand", "Umrah & Tours", "Garden Town Lahore", "UAN Support", "24/7 Assistance"];
  const why = [
    ["Trusted Travel Support", ShieldCheck],
    ["Quality Hotels", Hotel],
    ["Comfortable Transport", Plane],
    ["Umrah Visa Assistance", CheckCircle2],
    ["24/7 Guidance", Clock],
    ["Family Friendly Travel", Users],
    ["International Tour Options", MapPin],
    ["Multiple Departure Cities", CheckCircle2]
  ] as const;
  const cityPreviews = ["Lahore", "Multan", "Sialkot"].map((city) => packages.find((item) => item.departureCity === city));

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-ink text-white">
        <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1800&q=80" alt="Masjid al-Haram in Makkah" className="absolute inset-0 h-full w-full object-cover opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-normal text-gold">{site.tagline}</p>
            <h1 className="font-display text-5xl font-bold leading-[1.04] sm:text-7xl">Begin Your Sacred Journey with Deedar E Makkah</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/82">
              Premium Umrah packages, group departures, Baku and Uzbekistan tours, visa support, ticketing, hotels and transport from Garden Town Lahore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/umrah-packages">Explore Packages</Button>
              <Button href={whatsappUrl("I want Deedar E Makkah package guidance")} variant="dark" className="bg-white text-ink"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
              <Button href="/contact" variant="outline" className="border-white/40 text-white hover:text-ink">Get Consultation</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trust.map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white">{item}</span>)}
            </div>
          </div>
          <div className="rounded-lg border border-gold/35 bg-ivory/96 p-4 shadow-glow">
            <InquiryForm compact />
          </div>
        </div>
      </section>

      <div className="bg-gold py-4 text-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-sm font-black uppercase sm:px-6 lg:px-8">
          {trust.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <SectionContainer>
        <SectionHeading eyebrow="Quick Booking" title="Featured Departures by City" text="Browse Lahore, Multan and Sialkot package previews before opening the full pricing tables." />
        <div className="grid gap-5 md:grid-cols-3">
          {cityPreviews.map((item) => item ? (
            <article key={item.slug} className="rounded-lg border border-gold/25 bg-white p-6 shadow-premium">
              <p className="text-sm font-black uppercase text-gold">{item.departureCity}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{item.duration} - {item.airline}</h3>
              <p className="mt-3 text-charcoal/75">{item.flightSummary}</p>
              <p className="mt-4 text-xl font-black text-ink">From {item.startingPrice}</p>
            </article>
          ) : null)}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Why Choose Deedar E Makkah" title="Trusted Support for Sacred and International Journeys" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {why.map(([title, Icon]) => (
            <div key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <Icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-charcoal/75">Clear consultation, structured package data and practical support from inquiry to departure.</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Featured Umrah Packages" title="Clear Package Cards with Room-Sharing Prices" text="Poster data has been converted into premium cards, pricing grids and inquiry actions." light />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.slice(0, 3).map((item) => <PackageCard key={item.slug} item={item} />)}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Group Umrah" title={groupUmrahHighlight.title} text="A dedicated group departure with Emirates schedule, Saudi transport, hotel accommodation and structured traveler support." />
            <div className="grid gap-2 text-sm font-bold text-charcoal/80">
              {groupUmrahHighlight.schedule.map((line) => <p key={line}>- {line}</p>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><Button href="/group-umrah">View Group Umrah</Button><Button href={whatsappUrl("I want Sialkot group Umrah details")} variant="outline">WhatsApp Inquiry</Button></div>
          </div>
          <PackageCard item={packages.find((item) => item.category === "Group Umrah")!} />
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Seasonal Offers" title="Seasonal Umrah Offers 1448H" text="21 and 28 day seasonal Umrah data presented as clean website pricing, not poster graphics." light />
        <div className="grid gap-6 lg:grid-cols-2">{seasonalOffers.map((item) => <PackageCard key={item.slug} item={item} />)}</div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="International Tours" title="Baku and Uzbekistan Tour Spotlight" />
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((tour) => (
            <article key={tour.slug} className="overflow-hidden rounded-lg border border-gold/25 bg-white shadow-premium">
              <img src={tour.image} alt={tour.title} className="h-64 w-full object-cover" />
              <div className="p-6"><p className="text-sm font-black uppercase text-gold">{tour.destination}</p><h3 className="mt-2 font-display text-3xl font-bold text-ink">{tour.title}</h3><p className="mt-3 text-charcoal/75">{tour.summary}</p><p className="mt-4 text-2xl font-black text-ink">{tour.startingPrice}</p><div className="mt-5 flex gap-3"><Button href={`/tours/${tour.slug}`}>Explore Tour</Button><Button href="/contact" variant="outline">Inquire Now</Button></div></div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Services" title="Complete Travel Services" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}</div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Facilities" title="Facilities and Inclusions" light />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{facilities.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/10 p-4 font-bold"><CheckCircle2 className="mb-3 h-5 w-5 text-gold" />{item}</div>)}</div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Travel Process" title="From Inquiry to Departure" />
        <ProcessSteps />
      </SectionContainer>

      <SectionContainer className="pt-0"><SectionHeading eyebrow="Client Feedback" title="Traveler Feedback" /><div className="grid gap-5 lg:grid-cols-3">{testimonials.slice(0, 3).map((item) => <TestimonialCard key={item.name} item={item} />)}</div></SectionContainer>
      <SectionContainer><SectionHeading eyebrow="FAQ" title="Questions Before You Book" /><FAQAccordion items={faqs.slice(0, 6)} /></SectionContainer>
      <CTASection />
    </>
  );
}
