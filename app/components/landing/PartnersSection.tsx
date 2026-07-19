"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export default function PartnersSection() {
  const { t, dir } = useLanguage();
  const p = t.partners;

  return (
    <section id="partners" className="placeholder-section dark-section" dir={dir}>
      <div className="pill">{p.pill}</div>
      <h2>{p.title}</h2>
      <p>{p.text}</p>
    </section>
  );
}
