import { Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { groupPackages } from "@/data/groupPackages";
import { whatsappUrl } from "@/lib/utils";

export const metadata = { title: "Group Packages" };

export default function GroupPackagesPage() {
  return (
    <>
      <PageHero eyebrow="Group Packages" title="Organized Group Umrah and Travel Packages" text="Structured group options for pilgrims who want clear dates, room sharing, transport coordination and team support." />
      <SectionContainer>
        <SectionHeading eyebrow="Compare" title="Group Package Comparison" />
        <div className="grid gap-5 md:grid-cols-3">
          {groupPackages.map((item) => (
            <article key={item.title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
              <Users className="mb-4 h-8 w-8 text-gold" />
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-taupe">{item.duration}</p>
              <p className="mt-4 text-2xl font-black text-gold">{item.price}</p>
              <p className="mt-3 text-sm font-bold">Best for: {item.bestFor}</p>
              <ul className="mt-5 space-y-2 text-sm text-charcoal/75">
                {item.highlights.map((line) => <li key={line}>- {line}</li>)}
              </ul>
              <Button href={whatsappUrl(`I want ${item.title} details`)} className="mt-6 w-full">WhatsApp Inquiry</Button>
            </article>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
