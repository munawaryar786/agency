import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { offers } from "@/data/offers";

type RouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const offer = offers.find((item) => item.slug === slug);
  return { title: offer?.title ?? "Offer" };
}

export default async function OfferDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const offer = offers.find((item) => item.slug === slug);
  if (!offer) notFound();
  return (
    <>
      <PageHero eyebrow="Featured Offer" title={offer.title} text={offer.subtitle} image={offer.image} />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <SectionHeading eyebrow="Offer Details" title={offer.title} text={offer.subtitle} />
            <p className="rounded-lg bg-gold/12 p-4 font-bold">Validity: {offer.validUntil}. All rates and availability must be confirmed before booking.</p>
          </div>
          <InquiryForm />
        </div>
      </SectionContainer>
      <CTASection title="Ask About This Offer" />
    </>
  );
}
