"use client";

import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function PropertiesSection() {
  const { t, dir } = useLanguage();
  const p = t.properties;

  return (
    <section id="properties" className="portfolio-section dark-section" dir={dir}>
      <div className="pill">{p.pill}</div>
      <div className="split-heading">
        <h2>
          {p.titleBefore}
          <em>{p.titleEm}</em>
        </h2>
        <div>
          <p>{p.text}</p>
          <a href="#contact">{p.viewAll}</a>
        </div>
      </div>
      <div className="property-grid">
        {p.items.map((property, index) => (
          <article className="property-card" key={property.title}>
            <div className="property-image">
              <Image
                src={property.image}
                alt={`${property.title} ${property.type}`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={index % 2 ? "crop-right" : "crop-left"}
              />
              <span>{property.no}</span>
            </div>
            <div className="property-meta">
              <h3>
                {property.title} <em>- {property.type}</em>
              </h3>
              <strong>{property.price}</strong>
            </div>
            <p>{property.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
