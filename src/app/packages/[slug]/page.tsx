import { notFound } from "next/navigation";
import { PackageCard } from "@/components/cards/PackageCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { whatsappUrl } from "@/lib/utils";

type RouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return packages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const item = packages.find((pkg) => pkg.slug === slug);
  return { title: item?.name ?? "Package Detail" };
}

export default async function PackageDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const item = packages.find((pkg) => pkg.slug === slug);
  if (!item) notFound();
  const related = packages.filter((pkg) => pkg.slug !== item.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={item.category} title={item.name} text={`${item.duration} - ${item.travelWindow} - Starting from ${item.startingPrice}`} image={item.image} />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <SectionHeading eyebrow="Package Summary" title={item.name} text={item.notes.join(" ")} />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Travel Window", item.travelWindow],
                ["Duration", item.duration],
                ["Makkah Hotel", item.makkahHotel],
                ["Madinah Hotel", item.madinahHotel],
                ["Starting Price", item.startingPrice],
                ["Room Types", item.roomTypes.join(", ")]
              ].map(([label, value]) => <div key={label} className="rounded-lg bg-ivory p-4"><p className="text-xs font-black uppercase text-gold">{label}</p><p className="mt-2 font-bold text-ink">{value}</p></div>)}
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold">Inclusions</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.inclusions.map((line) => <span key={line} className="rounded-full bg-gold/15 px-3 py-1 text-sm font-bold">{line}</span>)}
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold">Facilities</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {item.facilities.map((line) => <div key={line} className="rounded-md border border-gold/20 p-3 font-bold">{line}</div>)}
            </div>
            <div className="mt-8 rounded-lg bg-gold/12 p-5 font-bold">Rates may change based on hotel availability, airline fares, exchange rates, season and booking date. Please confirm final pricing before booking.</div>
            <Button href={whatsappUrl(`I want to book ${item.name}`)} className="mt-6">WhatsApp CTA</Button>
          </div>
          <InquiryForm compact />
        </div>
      </SectionContainer>
      <SectionContainer dark>
        <SectionHeading eyebrow="Related Packages" title="You May Also Compare" light />
        <div className="grid gap-6 lg:grid-cols-2">
          {related.map((pkg) => <PackageCard key={pkg.slug} item={pkg} />)}
        </div>
      </SectionContainer>
      <CTASection />
    </>
  );
}
