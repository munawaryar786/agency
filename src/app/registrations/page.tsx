import { BadgeCheck, FileBadge, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { site } from "@/data/site";

export const metadata = { title: "Registrations & Trust" };

export default function RegistrationsPage() {
  const docs = ["Umrah Contract Attestation", "Travel Agency License", "Ministry Listing", "Business Registration", "Association Badge Placeholder"];
  return (
    <>
      <PageHero eyebrow="Trust" title="Registration, Verification and Trust Information" text="A transparent trust page with editable official details and careful placeholders for documents that require client confirmation." />
      <SectionContainer>
        <SectionHeading eyebrow="Verified Claims" title="Publish Only What Can Be Confirmed" text="For any association or official badge without direct proof, this frontend shows a confirmation note instead of making a final claim." />
        <div className="grid gap-5 md:grid-cols-3">
          {["IATA / Travel Association Badge Placeholder", "TAAP / Travel Agents Association Badge Placeholder", "Asian Group Network Badge"].map((badge) => (
            <article key={badge} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <BadgeCheck className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold">{badge}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">Client confirmation required before publishing this badge.</p>
            </article>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer dark>
        <SectionHeading eyebrow="Official Details" title={site.companyName} text={`${site.address} - ${site.email} - Since ${site.since}`} light />
        <div className="grid gap-4 md:grid-cols-3">
          {site.trustBadges.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/8 p-5 font-bold"><ShieldCheck className="mb-3 h-6 w-6 text-gold" />{item}</div>)}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading eyebrow="Documents" title="Verification Placeholders" />
        <div className="grid gap-5 md:grid-cols-5">
          {docs.map((item) => <article key={item} className="rounded-lg border border-gold/20 bg-white p-5 shadow-sm"><FileBadge className="mb-3 h-7 w-7 text-gold" /><h3 className="font-bold">{item}</h3><p className="mt-2 text-sm text-charcoal/70">Real document can be added later.</p></article>)}
        </div>
      </SectionContainer>
      <CTASection title="Need Verified Travel Support?" />
    </>
  );
}
