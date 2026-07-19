"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export default function AddOnsSection() {
  const { t, dir } = useLanguage();
  const a = t.addOns;

  return (
    <section className="addons-section dark-section" dir={dir}>
      <div className="addons-heading">
        <span>{a.label}</span>
        <h2>{a.title}</h2>
        <p>{a.note}</p>
      </div>
      <div className="addons-grid">
        {a.items.map(([code, title, text, price]) => (
          <article key={title}>
            <div>
              <span>{code}</span>
              <b>+</b>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>{price}</strong>
          </article>
        ))}
      </div>
      <div className="fee-grid">
        {a.fees.map((fee) => (
          <article key={fee.label}>
            <strong>{fee.value}</strong>
            <div>
              <span>{fee.label}</span>
              <p>{fee.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
