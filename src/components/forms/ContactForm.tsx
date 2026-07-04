"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="rounded-lg border border-gold/25 bg-white p-6 shadow-premium"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {["Full Name", "Phone Number", "Email", "Service Interested In", "Travel Month"].map((label) => (
          <label key={label} className="text-sm font-bold text-ink">
            {label}
            <input className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" required={label !== "Email"} />
          </label>
        ))}
        <label className="text-sm font-bold text-ink md:col-span-2">
          Message
          <textarea rows={5} className="focus-ring mt-2 w-full rounded-md border border-ink/10 bg-ivory px-4 py-3" />
        </label>
      </div>
      {sent ? <p className="mt-4 rounded-md bg-gold/15 px-4 py-3 text-sm font-bold">Message received on this frontend demo. Please use WhatsApp or phone for live booking confirmation.</p> : null}
      <Button type="submit" className="mt-5">Send Message</Button>
    </form>
  );
}
