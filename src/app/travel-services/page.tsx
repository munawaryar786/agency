import { Plane, Ticket } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Tickets & Travel Services" };

export default function TravelServicesPage() {
  return (
    <>
      <PageHero eyebrow="Tickets & Travel" title="International and Domestic Ticketing Support" text="Plan flight routes, travel dates and family movement with a team that understands package timing and onward support." image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Ticketing" title="Flight Planning Made Clear" />
        <div className="grid gap-5 md:grid-cols-2">
          {["International Tickets", "Domestic Tickets", "Group Ticket Planning", "Umrah Flight Coordination"].map((item, index) => {
            const Icon = index % 2 ? Ticket : Plane;
            return (
              <article key={item} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
                <Icon className="mb-4 h-8 w-8 text-gold" />
                <h3 className="font-display text-2xl font-bold">{item}</h3>
                <p className="mt-3 leading-8 text-charcoal/75">Fare availability changes quickly. Confirm final airline, baggage and timing details before payment.</p>
              </article>
            );
          })}
        </div>
      </SectionContainer>
      <CTASection title="Need Ticket Planning?" />
    </>
  );
}
