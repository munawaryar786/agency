export type Package = {
  slug: string;
  name: string;
  category: "Umrah" | "Hajj" | "Group" | "Shuttle";
  badge: string;
  duration: string;
  travelWindow: string;
  startingPrice: string;
  makkahHotel: string;
  madinahHotel: string;
  roomTypes: string[];
  inclusions: string[];
  facilities: string[];
  notes: string[];
  image: string;
};

export const packages: Package[] = [
  {
    slug: "premium-umrah-14-days",
    name: "Premium Umrah 14 Days",
    category: "Umrah",
    badge: "Most Requested",
    duration: "14 days",
    travelWindow: "Flexible monthly departures",
    startingPrice: "PKR 285,000",
    makkahHotel: "Premium Makkah hotel options near Haram or shuttle zone",
    madinahHotel: "Markazia Madinah hotel options",
    roomTypes: ["Quad", "Triple", "Double"],
    inclusions: ["Umrah visa guidance", "Hotel booking", "Transport support", "Ziarat options"],
    facilities: ["Airport transfer", "Document guidance", "Room sharing options", "WhatsApp support"],
    notes: ["Final price depends on hotel availability, airline fare, exchange rate, season, and booking date."],
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "economy-umrah-shuttle",
    name: "Economy Umrah Shuttle",
    category: "Shuttle",
    badge: "Budget Friendly",
    duration: "21 days",
    travelWindow: "Seasonal group windows",
    startingPrice: "PKR 235,000",
    makkahHotel: "Clean shuttle service hotel in Makkah",
    madinahHotel: "Comfortable Madinah accommodation",
    roomTypes: ["Quint", "Quad", "Triple"],
    inclusions: ["Umrah visa assistance", "Shuttle support", "Shared room options", "Basic guidance"],
    facilities: ["Shuttle service", "Group coordination", "Pre-departure guidance", "Emergency support"],
    notes: ["Shuttle timing and hotel distance must be confirmed before booking."],
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "family-umrah-comfort",
    name: "Family Umrah Comfort",
    category: "Umrah",
    badge: "Family Support",
    duration: "10 to 15 days",
    travelWindow: "Custom family dates",
    startingPrice: "PKR 315,000",
    makkahHotel: "Family suitable Makkah hotel options",
    madinahHotel: "Family suitable Markazia options",
    roomTypes: ["Triple", "Double", "Private family rooms"],
    inclusions: ["Family consultation", "Hotel selection", "Private transport option", "Child guidance"],
    facilities: ["Airport transfer", "Room planning", "Family document guidance", "24/7 assistance"],
    notes: ["Family room availability changes quickly during peak months."],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "group-umrah-lahore",
    name: "Group Umrah from Lahore",
    category: "Group",
    badge: "Group Departure",
    duration: "15 days",
    travelWindow: "Selected group departure dates",
    startingPrice: "PKR 255,000",
    makkahHotel: "Group hotel arrangement in Makkah",
    madinahHotel: "Group hotel arrangement in Madinah",
    roomTypes: ["Quint", "Quad", "Triple"],
    inclusions: ["Group management", "Visa assistance", "Transport coordination", "Ziarat planning"],
    facilities: ["Group briefing", "Travel coordination", "WhatsApp updates", "Hotel distance guidance"],
    notes: ["Seats are limited and rates vary by airline inventory."],
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "hajj-2027-pre-registration",
    name: "Hajj 2027 Preparation Support",
    category: "Hajj",
    badge: "Advisory",
    duration: "Guidance program",
    travelWindow: "Early planning for Hajj 2027",
    startingPrice: "Consultation Based",
    makkahHotel: "Subject to official package allocation",
    madinahHotel: "Subject to official package allocation",
    roomTypes: ["As announced", "Shared options", "Family options"],
    inclusions: ["Document checklist", "Registration guidance", "Package explanation", "Travel readiness"],
    facilities: ["Timeline advice", "Family guidance", "Official announcement monitoring", "Consultation"],
    notes: ["Final Hajj packages depend on official policy and client confirmation before publishing."],
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1400&q=80"
  }
];

export const facilities = [
  "Umrah Visa Assistance",
  "Makkah Hotel Arrangement",
  "Madinah Hotel Arrangement",
  "Complete Transport Support",
  "Private Transport Option",
  "Shuttle Service Option",
  "Ziarat Arrangement",
  "24/7 Assistance",
  "Air Ticket Support",
  "Group Travel Management",
  "Family Package Support",
  "Document Guidance",
  "Pre-Departure Guidance",
  "WhatsApp Support",
  "Package Consultation",
  "Room Sharing Options",
  "Child / Infant Guidance",
  "Hotel Distance Guidance",
  "Airport Transfer Support",
  "Emergency Travel Support"
];
