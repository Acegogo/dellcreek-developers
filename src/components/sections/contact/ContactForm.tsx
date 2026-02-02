"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

function encode(value: string) {
  return encodeURIComponent(value.trim());
}

export function ContactForm({
  toEmail,
}: {
  toEmail: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = `Inquiry — ${name || "Dellcreek website"}`;
    const body =
      `Name: ${name || "-"}\n` +
      `Phone: ${phone || "-"}\n\n` +
      `${
        message ||
        "Hello Dellcreek team, I’d like to learn more about your available land and ongoing projects."
      }`;

    return `mailto:${toEmail}?subject=${encode(subject)}&body=${encode(body)}`;
  }, [name, phone, message, toEmail]);

  return (
    <Card className="p-7">
      <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
        Quick message
      </div>

      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm">
          <span className="text-muted">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl bg-bg px-4 py-3 text-sm text-fg ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-accent/40"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-muted">Phone (optional)</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-2xl bg-bg px-4 py-3 text-sm text-fg ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-accent/40"
            placeholder="+254 ..."
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="text-muted">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full resize-none rounded-2xl bg-bg px-4 py-3 text-sm text-fg ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-accent/40"
            placeholder="Which project or location are you interested in?"
          />
        </label>

        <div className="pt-2">
          <a href={mailto}>
            <Button type="button">Open email draft</Button>
          </a>
          <div className="mt-3 text-xs text-muted">
            This opens your email client — no form data is stored on the website.
          </div>
        </div>
      </div>
    </Card>
  );
}

