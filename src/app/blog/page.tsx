import Link from "next/link";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { blogPosts } from "@/data/blogPosts";

export const metadata = { title: "Blog & Travel Guides" };

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Travel Guides" title="Helpful Guides for Pilgrims and Families" text="Editorial-style content for Umrah preparation, Hajj 2027 planning, hotel distance, room sharing and family travel." />
      <SectionContainer>
        <SectionHeading eyebrow="Latest Guides" title="Blog and Travel Guides" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-lg border border-gold/20 bg-white p-6 shadow-premium transition hover:-translate-y-1">
              <BookOpen className="mb-5 h-8 w-8 text-gold" />
              <p className="text-xs font-black uppercase text-gold">{post.category} - {post.readTime}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink group-hover:text-gold">{post.title}</h2>
              <p className="mt-4 leading-7 text-charcoal/75">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
