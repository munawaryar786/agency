"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fields = [
  ["name", "Full Name"],
  ["phone", "Phone Number"],
  ["service", "Interested Service"],
  ["month", "Departure Month"],
  ["travelers", "Number of Travelers"]
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-lg border border-gold/25 bg-white p-6 shadow-premium"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        {fields.map(([name, label]) => (
          <label key={name} className="text-sm font-bold text-ink">
            {label}
            <input
              name={name}
              required={name === "name" || name === "phone"}
              className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4 text-sm"
              placeholder={label}
            />
          </label>
        ))}
        <label className={compact ? "text-sm font-bold text-ink" : "text-sm font-bold text-ink md:col-span-2"}>
          Message
          <textarea name="message" rows={4} className="focus-ring mt-2 w-full rounded-md border border-ink/10 bg-ivory px-4 py-3 text-sm" placeholder="Tell us your travel dates, hotel preference, or questions." />
        </label>
      </div>
      {sent ? <p className="mt-4 rounded-md bg-gold/15 px-4 py-3 text-sm font-bold text-ink">Thank you. Your inquiry is ready for follow-up. Please call or WhatsApp for fastest confirmation.</p> : null}
      <Button type="submit" className="mt-5 w-full sm:w-auto"><Send className="mr-2 h-4 w-4" />Submit Inquiry</Button>
    </form>
  );
}
