import { Calendar, Hotel, MessageCircle, Users } from "lucide-react";
import { Package } from "@/data/packages";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function PackageCard({ item }: { item: Package }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gold/20 bg-white shadow-premium transition duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase text-ink">{item.badge}</span>
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink">{item.category}</span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-ink">{item.name}</h3>
          <div className="text-right">
            <p className="text-xs uppercase text-taupe">Starting</p>
            <p className="text-lg font-black text-gold">{item.startingPrice}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 text-sm text-charcoal/75">
          <p className="flex gap-2"><Calendar className="h-5 w-5 shrink-0 text-gold" />{item.travelWindow} - {item.duration}</p>
          <p className="flex gap-2"><Hotel className="h-5 w-5 shrink-0 text-gold" />{item.makkahHotel}</p>
          <p className="flex gap-2"><Users className="h-5 w-5 shrink-0 text-gold" />{item.roomTypes.join(", ")}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.inclusions.slice(0, 4).map((chip) => (
            <span key={chip} className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-bold text-ink">{chip}</span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Button href={`/packages/${item.slug}`} variant="dark" className="px-3">View Details</Button>
          <Button href="/contact" variant="outline" className="px-3">Inquire</Button>
          <Button href={whatsappUrl(`I want details for ${item.name}`)} className="px-3"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</Button>
        </div>
      </div>
    </article>
  );
}
