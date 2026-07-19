"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export default function HowWeWorkSection() {
  const { t, dir } = useLanguage();
  const h = t.howWeWork;

  return (
    <section className="proof-section dark-section" dir={dir}>
      <div className="work-grid">
        <div className="work-copy">
          <div className="pill">{h.pill}</div>
          <h2>{h.title}</h2>
          <p>{h.text}</p>
        </div>
        <div className="steps-list">
          {h.steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
