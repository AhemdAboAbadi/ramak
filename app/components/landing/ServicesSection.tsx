"use client";

import {
  Building2,
  CheckCircle,
  Handshake,
  LandPlot,
  Layers,
  Ruler,
  Sparkles,
  Star,
  Store,
  Briefcase,
} from "lucide-react";
import AboutUsSection, {
  type AboutUsServiceItem,
} from "@/components/ui/about-us-section";
import { useLanguage } from "../../i18n/LanguageProvider";

const SERVICE_ICONS = [
  {
    icon: <LandPlot className="w-6 h-6" />,
    secondaryIcon: (
      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
  {
    icon: <Store className="w-6 h-6" />,
    secondaryIcon: (
      <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
  {
    icon: <Layers className="w-6 h-6" />,
    secondaryIcon: (
      <Star className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    secondaryIcon: (
      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    secondaryIcon: (
      <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    secondaryIcon: (
      <Building2 className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
  },
] as const;

export default function ServicesSection() {
  const { t, dir, locale } = useLanguage();
  const s = t.services;
  const isAr = locale === "ar";

  const services: AboutUsServiceItem[] = s.items.map((service, index) => ({
    icon: SERVICE_ICONS[index]?.icon ?? <Building2 className="w-6 h-6" />,
    secondaryIcon: SERVICE_ICONS[index]?.secondaryIcon,
    title: service.title,
    description: service.text,
    position: index < 3 ? "left" : "right",
  }));

  return (
    <AboutUsSection
      id="services"
      className="z-10"
      dir={dir}
      eyebrow={s.pill}
      title={s.titleBefore}
      titleEm={s.titleEm}
      description={s.text}
      services={services}
      imageSrc="/images/about/img1.webp"
      imageAlt={isAr ? "مشروع عقاري مميز" : "Featured real estate project"}
      portfolioLabel={isAr ? "مشاريعنا" : "Our Portfolio"}
      portfolioHref="#projects"
      ctaTitle={
        isAr
          ? "جاهزون لتحويل فكرتك إلى مشروع؟"
          : "Ready to transform your space?"
      }
      ctaText={
        isAr
          ? "لنصنع معاً شيئاً جميلاً وذا قيمة."
          : "Let's create something beautiful together."
      }
      ctaLabel={isAr ? "ابدأ معنا" : "Get Started"}
      ctaHref="#contact"
      showHeader
      showStats={false}
      showCta={false}
    />
  );
}
