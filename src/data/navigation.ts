export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Packages",
    href: "/umrah-packages",
    children: [
      { label: "Umrah Packages", href: "/umrah-packages" },
      { label: "Hajj Packages", href: "/hajj-packages" },
      { label: "Group Packages", href: "/group-packages" },
      { label: "Shuttle Packages", href: "/umrah-packages#shuttle" },
      { label: "Featured Offers", href: "/offers/ramadan-umrah-consultation" }
    ]
  },
  { label: "Hajj 2027", href: "/hajj-2027" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tickets", href: "/travel-services" },
      { label: "Visit Visa Assistance", href: "/visa-services" },
      { label: "Hotels", href: "/hotels-transport" },
      { label: "Private Transport", href: "/hotels-transport#transport" },
      { label: "Ziarat", href: "/services#ziarat" },
      { label: "24/7 Assistance", href: "/contact" }
    ]
  },
  { label: "Trust", href: "/registrations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
