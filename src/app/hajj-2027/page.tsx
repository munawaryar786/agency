import { CalendarCheck, FileCheck, Megaphone, ShieldAlert } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Hajj 2027 Guide" };

export default function Hajj2027Page() {
  const timeline = [
    ["Early Consultation", "Discuss family needs, documents and expected budget.", FileCheck],
    ["Document Readiness", "Keep passports, family data and photos prepared.", CalendarCheck],
    ["Official Updates", "Wait for verified policy and package announcements.", Megaphone],
    ["Final Confirmation", "Confirm package details only after official and client proof is available.", ShieldAlert]
  ] as const;
  return (
    <>
      <PageHero eyebrow="Hajj 2027 Guide" title="Early Hajj Preparation Without Unverified Claims" text="A premium advisory page for clients who want to prepare responsibly before official package announcements." image="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Timeline" title="Preparation Timeline" text="This guide is advisory. Final packages, prices, quotas and requirements must be updated after official announcement and client confirmation." />
        <div className="grid gap-5 md:grid-cols-4">
          {timeline.map(([title, text, Icon]) => (
            <article key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <Icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-gold/30 bg-gold/12 p-5 font-bold text-ink">
          Official-announcement disclaimer: Hajj 2027 information on this frontend is for early preparation only and must be revised when verified policy details are available.
        </div>
      </SectionContainer>
      <CTASection title="Start Hajj 2027 Preparation" />
    </>
  );
}
