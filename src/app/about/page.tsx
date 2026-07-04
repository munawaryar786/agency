import { Award, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/data/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const values = [
    ["Clear Guidance", "We explain packages, room sharing, hotel distance and changing rates before booking.", ShieldCheck],
    ["Respectful Service", "Spiritual travel deserves warm communication, careful planning and a dignified tone.", HeartHandshake],
    ["Lahore Office", "Clients can connect with a real office team for consultation and follow-up.", MapPinned],
    ["Since 2011", "The brand is positioned around long-term trust and practical travel support.", Award]
  ] as const;
  return (
    <>
      <PageHero eyebrow="About Asian Ravi" title="A Lahore Based Travel Team for Sacred and Family Journeys" text="Asian Ravi Tour Services supports Hajj, Umrah, ticketing, visas, hotels, transport and travel consultation with a premium, transparent and respectful service approach." />
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Our Story" title="Trusted Travel Support Since 2011" text="Asian Ravi Tour Services is part of the Asian Group brand family and focuses on helping clients understand their journey before they commit. The service philosophy is simple: explain clearly, plan carefully and stay reachable." />
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <h3 className="font-display text-2xl font-bold text-ink">Office Consultation</h3>
            <p className="mt-4 leading-8 text-charcoal/75">{site.address}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {site.presence.map((item) => <span key={item} className="rounded-full bg-gold/15 px-3 py-1 text-sm font-bold text-ink">{item}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text, Icon]) => (
            <article key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <Icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">{text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
      <CTASection title="Visit or Call for a Clear Travel Consultation" />
    </>
  );
}
