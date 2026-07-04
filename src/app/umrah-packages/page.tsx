import { PackageCard } from "@/components/cards/PackageCard";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { packages, facilities } from "@/data/packages";
import { shuttlePackages } from "@/data/shuttlePackages";

export const metadata = { title: "Umrah Packages" };

export default function UmrahPackagesPage() {
  const umrah = packages.filter((item) => item.category === "Umrah" || item.category === "Shuttle");
  return (
    <>
      <PageHero eyebrow="Umrah Packages" title="Premium Umrah Packages with Hotel, Visa and Transport Guidance" text="Explore custom, family, group and shuttle options with clear room sharing, hotel distance and inclusion details." />
      <SectionContainer>
        <SectionHeading eyebrow="Package Options" title="Compare Umrah Packages" />
        <div className="grid gap-6 lg:grid-cols-2">
          {umrah.map((item) => <PackageCard key={item.slug} item={item} />)}
        </div>
      </SectionContainer>
      <SectionContainer id="shuttle" dark>
        <SectionHeading eyebrow="Shuttle Packages" title="Value Focused Shuttle Hotel Options" text="Shuttle packages can reduce cost, but pickup points, timing and distance should be confirmed before booking." light />
        <div className="grid gap-5 md:grid-cols-3">
          {shuttlePackages.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/8 p-6">
              <h3 className="font-display text-2xl font-bold text-gold">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.distance}</p>
              <p className="mt-4 text-xl font-black">{item.price}</p>
              <p className="mt-3 leading-7 text-white/72">{item.note}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading eyebrow="Facilities" title="Facilities Included in Your Umrah Planning" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => <div key={item} className="rounded-lg border border-gold/20 bg-white p-4 font-bold shadow-sm">{item}</div>)}
        </div>
      </SectionContainer>
      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Inquiry" title="Ask for Current Availability" />
        <InquiryForm />
      </SectionContainer>
    </>
  );
}
