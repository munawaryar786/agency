import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Speak with Asian Ravi Tour Services" text="Call, WhatsApp or visit the Lahore office for package guidance, ticketing support, visa assistance and consultation." />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Office" title="Contact Details" />
            <div className="space-y-4">
              <p className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><MapPin className="h-6 w-6 shrink-0 text-gold" />{site.address}</p>
              <p className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><Phone className="h-6 w-6 shrink-0 text-gold" />{site.phones.join(" / ")}</p>
              <p className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><Mail className="h-6 w-6 shrink-0 text-gold" />{site.email}</p>
              <p className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><Clock className="h-6 w-6 shrink-0 text-gold" />Office hours placeholder - update with confirmed timing.</p>
            </div>
            <div className="mt-6 rounded-lg bg-ink p-6 text-white shadow-premium">
              <MessageCircle className="mb-3 h-8 w-8 text-gold" />
              <h3 className="font-display text-2xl font-bold">WhatsApp Consultation</h3>
              <p className="mt-3 text-white/72">Fastest for package availability, travel month and room sharing questions.</p>
              <Button href={whatsappUrl("I want travel consultation")} className="mt-5">WhatsApp Box</Button>
            </div>
          </div>
          <div>
            <ContactForm />
            <div className="mt-6 flex h-64 items-center justify-center rounded-lg border border-gold/25 bg-white font-bold text-taupe shadow-premium">
              Map placeholder - embed verified office map later
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
