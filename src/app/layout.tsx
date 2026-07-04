import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

export const metadata: Metadata = {
  title: {
    default: "Asian Ravi Tour Services | Hajj, Umrah, Tickets",
    template: "%s | Asian Ravi Tour Services"
  },
  description: "Premium Hajj, Umrah, visa, ticketing, hotel and travel consultation services from Lahore since 2011.",
  openGraph: {
    title: "Asian Ravi Tour Services",
    description: "Hajj, Umrah, tickets and travel support from Lahore.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
