import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { services } from "@/data/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Complete Travel Services for Pilgrims, Families and Groups" text="Hajj, Umrah, group packages, shuttle packages, tickets, visas, hotels, transport, Ziarat, consultation and leisure travel." />
      <SectionContainer>
        <SectionHeading eyebrow="All Services" title="Premium Service Cards" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
        </div>
      </SectionContainer>
      <CTASection />
    </>
  );
}
