"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink text-xs font-bold text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <div className="flex flex-wrap gap-4">
            {site.topBar.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="flex gap-4">
            <a href={`tel:${site.phones[0]}`} className="hover:text-gold">{site.phones[0]}</a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
          </div>
        </div>
      </div>
      <div className={cn("border-b border-gold/15 bg-ivory/95 backdrop-blur transition", scrolled && "shadow-premium")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-8">
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <img src="/assets/brand/asian-ravi-logo.jpeg" alt="Asian Ravi Tour Services logo" className="h-12 w-12 rounded-md object-cover" />
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-black leading-5 text-ink">Asian Ravi</span>
              <span className="block whitespace-nowrap text-xs font-bold uppercase text-gold">Tour Services</span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex flex-shrink-0 items-center">
                <Link
                  href={item.href}
                  className="focus-ring inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-md px-2 text-[12px] font-extrabold text-ink transition hover:bg-gold/15 xl:px-2.5 xl:text-[13px] 2xl:px-3"
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.children ? (
                    <ChevronDown className="h-3.5 w-3.5 shrink-0 transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-[80] w-64 translate-y-2 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-lg border border-gold/20 bg-white p-2 shadow-premium" role="menu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="focus-ring block whitespace-nowrap rounded-md px-3 py-2 text-sm font-bold text-charcoal transition hover:bg-gold/15" role="menuitem">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden flex-shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            <Button href="/umrah-packages" variant="outline" className="hidden h-10 min-h-10 whitespace-nowrap px-4 py-2 text-xs 2xl:inline-flex">View Packages</Button>
            <Button href="/contact" className="h-10 min-h-10 whitespace-nowrap px-4 py-2 text-xs">Book Now</Button>
            <Button href={whatsappUrl("I want travel consultation from Asian Ravi")} variant="dark" className="h-10 min-h-10 whitespace-nowrap px-4 py-2 text-xs">
              <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
            </Button>
          </div>

          <button className="focus-ring flex-shrink-0 rounded-md p-2 lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-ink/60 lg:hidden">
          <div className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-ivory p-5 shadow-premium">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-bold">Menu</span>
              <button className="focus-ring rounded-md p-2" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="mt-6 grid gap-2">
              {navItems.map((item) => (
                <div key={item.href} className="rounded-md border border-gold/15 bg-white/45">
                  {item.children ? (
                    <>
                      <button
                        className="focus-ring flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-bold text-ink"
                        aria-haspopup="menu"
                        aria-expanded={mobileDropdown === item.label}
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <ChevronDown className={cn("h-4 w-4 shrink-0 transition", mobileDropdown === item.label && "rotate-180")} />
                      </button>
                      {mobileDropdown === item.label ? (
                        <div className="border-t border-gold/15 p-2" role="menu">
                          <Link href={item.href} onClick={() => setOpen(false)} className="focus-ring block rounded-md px-3 py-2 text-sm font-bold text-charcoal hover:bg-gold/15" role="menuitem">
                            All {item.label}
                          </Link>
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="focus-ring block rounded-md px-3 py-2 text-sm font-bold text-charcoal hover:bg-gold/15" role="menuitem">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setOpen(false)} className="focus-ring block whitespace-nowrap px-4 py-3 font-bold text-ink">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <Button href={whatsappUrl("I want to inquire about packages")}><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
              <Button href={`tel:${site.phones[0]}`} variant="dark"><Phone className="mr-2 h-4 w-4" />Call Now</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
