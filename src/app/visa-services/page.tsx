import { FileText, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Visa Services" };

export default function VisaServicesPage() {
  return (
    <>
      <PageHero eyebrow="Visa Services" title="Visit Visa Assistance and Document Guidance" text="Frontend-only service page for visit visa assistance with careful wording and no guaranteed approval claims." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Guidance" title="Document Led Visa Support" />
        <div className="grid gap-5 md:grid-cols-2">
          {["Document checklist and review", "Application guidance", "Travel date planning", "Family visit consultation"].map((item) => (
            <div key={item} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <FileText className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold">{item}</h3>
              <p className="mt-3 leading-7 text-charcoal/75">Requirements and outcomes depend on relevant authorities and must be confirmed before submission.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-ink p-5 font-bold text-white"><ShieldCheck className="mr-2 inline h-5 w-5 text-gold" />No guaranteed visa approval claim is made on this page.</div>
      </SectionContainer>
      <SectionContainer className="pt-0"><InquiryForm /></SectionContainer>
    </>
  );
}
