import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { faqs } from "@/data/faqs";

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" text="Answers about booking, documents, room types, hotel distance, transport, group packages, visas and Hajj 2027 preparation." />
      <SectionContainer>
        <SectionHeading eyebrow="Questions" title="Before You Book" />
        <FAQAccordion items={faqs} />
      </SectionContainer>
    </>
  );
}
