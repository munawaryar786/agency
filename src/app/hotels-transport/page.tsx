import { Bus, Hotel } from "lucide-react";
import { HotelDistanceGuide, RoomTypes } from "@/components/sections/InfoBlocks";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Hotels & Transport" };

export default function HotelsTransportPage() {
  return (
    <>
      <PageHero eyebrow="Hotels & Transport" title="Hotel Distance and Transport Choices Explained" text="Choose near Haram, shuttle service, Markazia and private transport options with practical advice before booking." image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Options" title="Hotel and Transport Services" />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><Hotel className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-2xl font-bold">Hotel Booking</h3><p className="mt-3 leading-8 text-charcoal/75">Makkah, Madinah and leisure hotel options with price and distance guidance.</p></article>
          <article id="transport" className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><Bus className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-2xl font-bold">Private Transport</h3><p className="mt-3 leading-8 text-charcoal/75">Airport transfer, Ziarat, family transport and custom route planning.</p></article>
        </div>
      </SectionContainer>
      <HotelDistanceGuide />
      <RoomTypes />
      <CTASection title="Ask About Hotel Distance Before Booking" />
    </>
  );
}
