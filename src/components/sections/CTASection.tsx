import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function CTASection({
  title = "Ready to Begin Your Journey?",
  text = "Speak with Asian Ravi Tour Services for clear package guidance, hotel distance advice and travel support."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="dark-pattern py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-gold">Consultation</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-white/72">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/umrah-packages">Explore Packages</Button>
          <Button href={`tel:${site.phones[0]}`} variant="outline" className="border-white/40 text-white hover:text-ink"><Phone className="mr-2 h-4 w-4" />Call Now</Button>
          <Button href={whatsappUrl("I am ready to begin my journey")} variant="dark" className="bg-white text-ink"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</Button>
        </div>
      </div>
    </section>
  );
}
