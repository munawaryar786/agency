import { Map, Palmtree } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Tours & Leisure Tours" };

export default function ToursPage() {
  return (
    <>
      <PageHero eyebrow="Tours" title="Leisure, Family and Working Travel Services" text="Premium consultation for families, small groups and work-related travel planning." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Travel" title="Tour Services" />
        <div className="grid gap-5 md:grid-cols-3">
          {["Leisure Tours", "Working Tours", "Family Travel Support"].map((title, index) => {
            const Icon = index === 0 ? Palmtree : Map;
            return <article key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><Icon className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-3 leading-8 text-charcoal/75">Plan destinations, hotels, transport and documents with clear pre-travel guidance.</p></article>;
          })}
        </div>
      </SectionContainer>
      <CTASection title="Plan a Comfortable Family Trip" />
    </>
  );
}
