"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, CheckCircle2, Clock, Hotel, Luggage, MapPin, MessageCircle, Plane, ShieldCheck, Sparkles, Star, Ticket, Users } from "lucide-react";
import { PackageCard } from "@/components/cards/PackageCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { packages, facilities } from "@/data/packages";
import { seasonalOffers } from "@/data/seasonalOffers";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { tours } from "@/data/tours";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const cityTabs = ["Lahore", "Multan", "Sialkot", "Seasonal Offers"];

const heroBadges = [
  ["Licensed Brand", BadgeCheck],
  ["UAN Support", Ticket],
  ["24/7 Guidance", Clock],
  ["Family Friendly", Users]
] as const;

const whyCards = [
  ["Office Based", Building2],
  ["Clear Pricing", ShieldCheck],
  ["Multiple Cities", MapPin],
  ["Group Support", Users],
  ["Family Friendly", Sparkles],
  ["Fast WhatsApp", MessageCircle]
] as const;

const process = ["Select Package", "Send Inquiry", "Confirm Details", "Prepare Travel", "Travel with Support"];

export function HomeExperience() {
  const [activeTab, setActiveTab] = useState("Lahore");
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const tabPackages = useMemo(() => {
    if (activeTab === "Seasonal Offers") return seasonalOffers.slice(0, 3);
    return packages.filter((item) => item.departureCity === activeTab).slice(0, 3);
  }, [activeTab]);

  const showcase = packages.slice(0, 6);
  const visibleShowcase = [showcase[showcaseIndex % showcase.length], showcase[(showcaseIndex + 1) % showcase.length], showcase[(showcaseIndex + 2) % showcase.length]].filter(Boolean);

  return (
    <>
      <section className="relative min-h-[820px] overflow-hidden bg-ink text-white">
        <motion.img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1900&q=85"
          alt="Kaaba and Masjid al-Haram"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/20" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(245,197,24,0.45)_1px,transparent_0)] [background-size:34px_34px]" />
        <motion.div className="relative mx-auto grid min-h-[820px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8" initial="hidden" animate="show" variants={stagger}>
          <div>
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-normal text-gold backdrop-blur">{site.tagline}</motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-7xl">Sacred Journeys, Premium Travel Support</motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/82">Plan Umrah packages, group departures, Baku tours and Uzbekistan journeys with a Lahore office team built for fast inquiries.</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button href="/umrah-packages">Explore Umrah Packages</Button>
              <Button href={whatsappUrl("I want Deedar E Makkah package guidance")} variant="dark" className="bg-white text-ink"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
              <Button href="/tours" variant="outline" className="border-white/40 text-white hover:text-ink">View Tours</Button>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
            {heroBadges.map(([label, Icon], index) => (
              <motion.div key={label} animate={{ y: [0, index % 2 ? 10 : -10, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }} className="rounded-lg border border-white/15 bg-white/12 p-5 shadow-glow backdrop-blur">
                <Icon className="mb-4 h-8 w-8 text-gold" />
                <p className="font-display text-2xl font-bold">{label}</p>
                <p className="mt-2 text-sm text-white/70">Premium inquiry flow</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gold py-5 text-ink">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {["Licensed Travel Brand", "Umrah Packages", "International Tours", "UAN Support", "24/7 Assistance"].map((item) => <motion.div variants={fadeUp} key={item} className="rounded-md bg-white/55 px-4 py-3 text-center text-sm font-black uppercase shadow-sm">{item}</motion.div>)}
        </motion.div>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Quick Booking" title="Choose Your Departure" text="Visual tabs keep the package journey fast, clean and inquiry-focused." />
        <div className="mb-7 flex flex-wrap gap-2">
          {cityTabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`focus-ring rounded-full px-4 py-2 text-sm font-black transition ${activeTab === tab ? "bg-ink text-white shadow-glow" : "bg-white text-ink shadow-sm hover:bg-gold/20"}`}>{tab}</button>)}
        </div>
        <motion.div key={activeTab} initial="hidden" animate="show" variants={stagger} className="grid gap-6 lg:grid-cols-3">
          {tabPackages.map((item) => <motion.div variants={fadeUp} key={item.slug}><PackageCard item={item} /></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Package Showcase" title="Animated Umrah Package Carousel" text="Premium cards with hotels, distance badges, price chips and fast WhatsApp action." light />
        <div className="mb-6 flex justify-end gap-2"><button className="focus-ring rounded-md bg-white/10 px-4 py-2 font-bold text-white hover:bg-white/20" onClick={() => setShowcaseIndex((value) => (value + showcase.length - 1) % showcase.length)}>Prev</button><button className="focus-ring rounded-md bg-gold px-4 py-2 font-bold text-ink hover:bg-gold-soft" onClick={() => setShowcaseIndex((value) => (value + 1) % showcase.length)}>Next</button></div>
        <motion.div key={showcaseIndex} initial="hidden" animate="show" variants={stagger} className="grid gap-6 lg:grid-cols-3">
          {visibleShowcase.map((item) => <motion.div variants={fadeUp} key={item.slug}><PackageCard item={item} /></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Facilities" title="Everything Important, Shown Simply" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.slice(0, 10).map((item, index) => {
            const icons = [Ticket, Hotel, Plane, Luggage, MapPin, Users, Clock, ShieldCheck, BriefcaseBusiness, CheckCircle2];
            const Icon = icons[index % icons.length];
            return <motion.div variants={fadeUp} key={item} className="rounded-lg border border-gold/20 bg-white p-5 text-center font-black text-ink shadow-premium transition hover:-translate-y-1 hover:shadow-glow"><Icon className="mx-auto mb-3 h-7 w-7 text-gold" />{item}</motion.div>;
          })}
        </motion.div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Tours" title="Image-Led Destination Tours" />
        <div className="grid gap-6 lg:grid-cols-3">
          {[...tours, { slug: "future", title: "More International Tours", destination: "Coming Soon", duration: "Custom", startingPrice: "On Request", summary: "Future destination cards can be added as new offers become available.", inclusions: ["Visa", "Hotel", "Transport"], highlights: ["Custom Tours"], image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80" }].map((tour) => (
            <motion.article key={tour.slug} whileHover={{ y: -8 }} className="group relative min-h-[430px] overflow-hidden rounded-lg shadow-premium">
              <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute left-5 right-5 top-5 flex justify-between gap-3"><span className="rounded-full bg-gold px-3 py-1 text-xs font-black text-ink">{tour.startingPrice}</span><span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-ink">{tour.duration}</span></div>
              <div className="absolute bottom-5 left-5 right-5"><p className="text-sm font-black uppercase text-gold">{tour.destination}</p><h3 className="font-display text-3xl font-bold text-white">{tour.title}</h3><div className="mt-4 flex flex-wrap gap-2">{tour.inclusions.slice(0, 3).map((item) => <span key={item} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">{item}</span>)}</div><Button href={tour.slug === "future" ? "/contact" : `/tours/${tour.slug}`} className="mt-5">Explore <ArrowRight className="ml-2 h-4 w-4" /></Button></div>
            </motion.article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Why Choose Us" title="Built for Fast, Confident Inquiries" light />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {whyCards.map(([title, Icon]) => <motion.div variants={fadeUp} key={title} className="rounded-lg border border-white/10 bg-white/10 p-5 text-center"><Icon className="mx-auto mb-3 h-7 w-7 text-gold" /><p className="font-bold">{title}</p></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Process" title="Five Simple Steps" />
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((step, index) => <motion.div key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-lg border border-gold/20 bg-white p-5 shadow-premium"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink font-black text-gold">{index + 1}</div><p className="font-display text-xl font-bold text-ink">{step}</p></motion.div>)}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Gallery" title="A Visual Taste of the Journey" />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {gallery.slice(0, 6).map((item, index) => <motion.div key={item.title} whileHover={{ y: -6 }} className={`${index === 0 || index === 3 ? "md:row-span-2" : ""} group relative overflow-hidden rounded-lg shadow-premium`}><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent opacity-80" /><div className="absolute bottom-4 left-4"><p className="text-xs font-black uppercase text-gold">{item.category}</p><p className="font-display text-2xl font-bold text-white">{item.title}</p></div></motion.div>)}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Client Feedback" title="Short, Trust-Building Reviews" />
        <div className="grid gap-5 lg:grid-cols-3">{testimonials.slice(0, 3).map((item) => <motion.div key={item.name} whileHover={{ y: -6 }}><TestimonialCard item={item} /></motion.div>)}</div>
      </SectionContainer>

      <SectionContainer className="pt-0"><SectionHeading eyebrow="FAQ" title="Questions Before You Book" /><FAQAccordion items={faqs.slice(0, 6)} /></SectionContainer>
      <CTASection />
    </>
  );
}
