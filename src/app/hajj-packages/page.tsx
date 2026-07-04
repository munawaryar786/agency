import { PackageCard } from "@/components/cards/PackageCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { packages } from "@/data/packages";

export const metadata = { title: "Hajj Packages" };

export default function HajjPackagesPage() {
  return (
    <>
      <PageHero eyebrow="Hajj Packages" title="Hajj Package Guidance with Clear Advisory Notes" text="Prepare early, understand documents and confirm all official package details before publishing or booking." image="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Hajj Support" title="Available Hajj Guidance" text="Final package details depend on official announcements, airline inventory, accommodation allocation and client-confirmed documents." />
        <div className="grid gap-6 lg:grid-cols-2">
          {packages.filter((item) => item.category === "Hajj").map((item) => <PackageCard key={item.slug} item={item} />)}
        </div>
      </SectionContainer>
      <CTASection title="Discuss Hajj Preparation with Our Team" />
    </>
  );
}
