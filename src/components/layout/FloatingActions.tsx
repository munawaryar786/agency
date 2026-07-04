import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={whatsappUrl("I want package details from Asian Ravi")} aria-label="WhatsApp Asian Ravi" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-premium">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href={`tel:${site.phones[0]}`} aria-label="Call Asian Ravi" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-premium md:hidden">
        <Phone className="h-6 w-6" />
      </a>
      <a href="#top" aria-label="Scroll to top" className="focus-ring hidden h-12 w-12 items-center justify-center rounded-full bg-ink text-gold shadow-premium md:flex">
        <ArrowUp className="h-6 w-6" />
      </a>
    </div>
  );
}
