"use client";

import { FormEvent, useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "../../i18n/LanguageProvider";
import SectionHeader from "./SectionHeader";

type Status = "idle" | "success" | "error";

export default function ContactSection() {
  const { t, dir } = useLanguage();
  const c = t.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || c.error);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage(c.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="contact-section dark-section !px-0 !pt-0"
      dir={dir}
    >
      <SectionHeader
        title={
          <>
            {c.titleBefore}
            <span className="text-[var(--brown)]">{c.titleEm}</span>
          </>
        }
      />
      <div className="mx-auto max-w-7xl px-4 pb-[clamp(80px,10vw,140px)] md:px-8 lg:px-10">
        <ContactCard
          title={c.cardTitle}
          description={c.cardDescription}
          className="border-border text-card-foreground overflow-visible rounded-none"
          formSectionClassName="border-border p-5 md:p-6 lg:p-8"
          contactInfo={[
            {
              icon: MailIcon,
              label: c.infoEmailLabel,
              value: c.infoEmailValue,
            },
            {
              icon: PhoneIcon,
              label: c.infoPhoneLabel,
              value: c.infoPhoneValue,
            },
            {
              icon: MapPinIcon,
              label: c.infoAddressLabel,
              value: c.infoAddressValue,
              className: "md:col-span-2 lg:col-span-1",
            },
          ]}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4 md:space-y-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">{c.name}</Label>
              <Input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={c.namePlaceholder}
                className="h-11 md:h-12"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">{c.email}</Label>
              <Input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                dir="ltr"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={c.emailPlaceholder}
                className="h-11 text-left md:h-12"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-phone">{c.phone}</Label>
              <Input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                dir="ltr"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={c.phonePlaceholder}
                className="h-11 text-left md:h-12"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">{c.message}</Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={c.messagePlaceholder}
                className="min-h-[120px]"
              />
            </div>
            <Button
              className="h-11 w-full md:h-12"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? c.sending : c.submit}
            </Button>
            <div
              className="min-h-5 text-sm"
              role="status"
              aria-live="polite"
              data-state={status}
            >
              {status === "success" ? (
                <span className="text-primary">{c.success}</span>
              ) : null}
              {status === "error" ? (
                <span className="text-destructive">
                  {errorMessage || c.error}
                </span>
              ) : null}
            </div>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}
