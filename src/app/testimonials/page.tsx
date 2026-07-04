import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Client Feedback" title="Client Feedback" text="Believable sample testimonials for the frontend. These are not presented as verified Google reviews." />
      <SectionContainer>
        <SectionHeading eyebrow="Reviews" title="Premium Review Cards" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}
        </div>
      </SectionContainer>
      <SectionContainer dark>
        <SectionHeading eyebrow="Video Testimonials" title="Video Testimonial Placeholders" text="Client video review slots can be added here after real media is approved." light />
        <div className="grid gap-5 md:grid-cols-3">
          {["Family Umrah Story", "Group Travel Feedback", "Ticketing Support"].map((item) => <div key={item} className="flex aspect-video items-center justify-center rounded-lg border border-white/10 bg-white/8 font-bold">{item}</div>)}
        </div>
      </SectionContainer>
      <CTASection />
    </>
  );
}
