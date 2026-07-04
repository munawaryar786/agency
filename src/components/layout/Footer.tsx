import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="dark-pattern text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/brand/asian-ravi-logo.jpeg" alt="Asian Ravi logo" className="h-14 w-14 rounded-md object-cover" />
            <div>
              <h2 className="font-display text-2xl font-bold">Asian Ravi Tour Services</h2>
              <p className="text-sm font-bold text-gold">Hajj - Umrah - Tickets - Since 2011</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-8 text-white/72">{site.address}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.presence.map((item) => <span key={item} className="rounded-full border border-gold/30 px-3 py-1 text-sm text-gold">{item}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Explore</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 9).map((item) => <Link key={item.href} href={item.href} className="text-white/72 hover:text-gold">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-white/72">
            <p className="flex gap-2"><Phone className="h-5 w-5 text-gold" />{site.phones.slice(0, 3).join(" / ")}</p>
            <p className="flex gap-2"><Mail className="h-5 w-5 text-gold" />{site.email}</p>
            <p className="flex gap-2"><MapPin className="h-5 w-5 text-gold" />Lahore, Pakistan</p>
          </div>
          <Button href={whatsappUrl("I want to contact Asian Ravi Tour Services")} className="mt-5">WhatsApp Us</Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        Copyright 2026 Asian Ravi Tour Services (Pvt) Ltd. Frontend demo with editable content.
      </div>
    </footer>
  );
}
