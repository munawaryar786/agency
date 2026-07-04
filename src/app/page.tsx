import { CalendarDays, CheckCircle2, Clock, Hotel, MapPin, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import { PackageCard } from "@/components/cards/PackageCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HotelDistanceGuide, RoomTypes } from "@/components/sections/InfoBlocks";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { packages, facilities } from "@/data/packages";
import { groupPackages } from "@/data/groupPackages";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export default function Home() {
  const trust = ["Trusted Since 2011", "Hajj & Umrah Experts", "Hotel & Transport Support", "Visit Visa Guidance", "24/7 Assistance"];
  const why = [
    ["Trusted Since 2011", ShieldCheck],
    ["Premium Hotel Options", Hotel],
    ["Private Transport Support", Plane],
    ["Visit Visa Assistance", CheckCircle2],
    ["Group Travel Expertise", Users],
    ["24/7 Support", Clock]
  ] as const;

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-ink text-white">
        <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1800&q=80" alt="Masjid al-Haram in Makkah" className="absolute inset-0 h-full w-full object-cover opacity-48" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/30" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-normal text-gold">{site.tagline} - Your Travel Partner</p>
            <h1 className="font-display text-5xl font-bold leading-[1.04] sm:text-7xl">Sacred Journeys Planned with Care and Confidence</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/78">
              Premium Hajj, Umrah, ticketing, hotel and travel consultation support from Lahore, serving families, groups and private travelers since 2011.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/umrah-packages">Explore Packages</Button>
              <Button href="/contact" variant="outline" className="border-white/35 text-white hover:text-ink">Get Free Consultation</Button>
              <Button href={whatsappUrl("I want Umrah or Hajj package guidance")} variant="dark" className="bg-white text-ink"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trust.map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white">{item}</span>)}
            </div>
          </div>
          <div className="rounded-lg border border-gold/25 bg-ivory/95 p-4 shadow-glow">
            <InquiryForm compact />
          </div>
        </div>
      </section>

      <div className="bg-gold py-4 text-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-sm font-black uppercase sm:px-6 lg:px-8">
          {["Since 2011", "Hajj - Umrah - Tickets", "Lahore Based", "Group Packages", "24/7 Assistance"].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <section className="bg-ink py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="font-bold text-white/82"><span className="text-gold">Featured:</span> Latest Umrah package consultation, group departures and Hajj 2027 guidance.</p>
          <Button href="/offers/ramadan-umrah-consultation">View Featured Offer</Button>
        </div>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Why Choose Asian Ravi" title="Premium Travel Support with Transparent Guidance" text="The right travel partner explains options clearly before booking, including hotel distance, transport, room sharing and changing rates." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {why.map(([title, Icon]) => (
            <div key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <Icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-charcoal/72">Careful consultation, refined package presentation and practical support for families, groups and individual travelers.</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Featured Umrah Packages" title="Modern Package Cards Built for Clear Decisions" text="Compare hotels, room types, duration, inclusions and starting prices without relying on poster graphics." light />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.filter((item) => item.category !== "Hajj").slice(0, 3).map((item) => <PackageCard key={item.slug} item={item} />)}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Hajj Packages" title="Hajj Guidance with a Respectful, Advisory Tone" text="We help clients understand preparation, documents, expected timelines and booking considerations before final official package details are published." />
            <div className="flex flex-wrap gap-3">
              <Button href="/hajj-packages">View Hajj Packages</Button>
              <Button href="/hajj-2027" variant="outline">Hajj 2027 Guide</Button>
            </div>
          </div>
          <PackageCard item={packages.find((item) => item.category === "Hajj")!} />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Hajj 2027" title="Early Preparation Timeline" text="Final Hajj packages depend on official announcements. This section is advisory and should be updated when confirmed client material is available." />
        <div className="grid gap-4 md:grid-cols-4">
          {["Document readiness", "Budget planning", "Family consultation", "Official announcement follow-up"].map((item) => (
            <div key={item} className="rounded-lg border border-gold/20 bg-white p-6 shadow-sm">
              <CalendarDays className="mb-4 h-7 w-7 text-gold" />
              <h3 className="font-bold text-ink">{item}</h3>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Group Packages" title="Clear Group Travel Options" text="Group packages are easier to sell when dates, rooms, hotels, inclusions and support are shown in a clean comparison format." light />
        <div className="grid gap-5 md:grid-cols-3">
          {groupPackages.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/8 p-6">
              <h3 className="font-display text-2xl font-bold text-gold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.duration}</p>
              <p className="mt-4 text-2xl font-black">{item.price}</p>
              <p className="mt-3 text-sm text-white/70">Best for: {item.bestFor}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/75">
                {item.highlights.map((line) => <li key={line}>- {line}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/group-packages">View Group Packages</Button>
          <Button href={`tel:${site.phones[0]}`} variant="outline" className="border-white/35 text-white hover:text-ink">Call Now</Button>
          <Button href={whatsappUrl("I want group package details")} variant="dark" className="bg-white text-ink">WhatsApp Inquiry</Button>
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Facilities During Umrah" title="Everything You Need for a Comfortable Umrah Journey" text="From visa to Ziarat, Asian Ravi can guide you at every step with clear options and careful coordination." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div key={item} className="rounded-lg border border-gold/20 bg-white p-4 font-bold text-ink shadow-sm">
              <CheckCircle2 className="mb-3 h-5 w-5 text-gold" />{item}
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Services Overview" title="Hajj, Umrah, Tickets, Visas, Hotels and More" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 12).map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
        </div>
      </SectionContainer>

      <HotelDistanceGuide />
      <RoomTypes />

      <SectionContainer>
        <SectionHeading eyebrow="Travel Process" title="A Clear Path from Inquiry to Departure" />
        <ProcessSteps />
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Latest Package Highlights" title="Selected Offers and Package Windows" light />
        <div className="grid gap-6 lg:grid-cols-2">
          {packages.slice(0, 4).map((item) => <PackageCard key={item.slug} item={item} />)}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Gallery Preview" title="Premium Visual Direction, Easy to Replace Later" />
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.slice(0, 4).map((item) => (
            <div key={item.title} className="group relative h-64 overflow-hidden rounded-lg shadow-premium">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 to-transparent" />
              <p className="absolute bottom-4 left-4 font-bold text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Client Feedback" title="Warm Words from Travelers" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => <TestimonialCard key={item.name} item={item} />)}
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <Stats />
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="FAQ" title="Questions Before You Book" />
        <FAQAccordion items={faqs.slice(0, 6)} />
        <div className="mt-8 rounded-lg border border-gold/25 bg-gold/12 p-5 font-bold text-ink">
          Package rates may change based on hotel availability, airline fares, exchange rates, season, and booking dates. Please confirm final pricing before booking.
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
