"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function PricingSection() {
  const { t, dir } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="tiers-section dark-section" dir={dir}>
      <div className="portfolio-strip">
        <p>
          <span>{p.stripLabel}</span> {p.stripText}
        </p>
        <a href="#contact">{p.stripCta}</a>
      </div>
      <div className="pill">{p.pill}</div>
      <div className="split-heading">
        <h2>
          {p.titleLine1}
          <br />
          {p.titleBefore}
          <em>{p.titleEm}</em>
        </h2>
        <p>{p.text}</p>
      </div>
      <div className="tier-grid">
        {p.tiers.map((tier) => {
          const light = "light" in tier && tier.light;
          const badge = "badge" in tier ? tier.badge : undefined;
          return (
            <article
              className={`tier-card${light ? " tier-card-light" : ""}`}
              key={tier.title}
            >
              <div className="tier-image">
                <Image src={tier.image} alt={tier.title} fill sizes="33vw" />
                <span>{tier.label}</span>
                {badge ? <b>{badge}</b> : null}
              </div>
              <div className="tier-body">
                <h3>{tier.title}</h3>
                <p>{tier.text}</p>
                <strong>{tier.price}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
