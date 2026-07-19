"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import BrandLogo from "./BrandLogo";
import LanguageToggle from "./LanguageToggle";

export default function SiteNav() {
  const { t, dir } = useLanguage();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const services = document.querySelector("#services");
      if (!services) {
        setPastHero(window.scrollY > window.innerHeight);
        return;
      }
      setPastHero(services.getBoundingClientRect().top <= 64);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={`nav${pastHero ? " is-past-hero" : ""}`}
      aria-label="Primary"
    >
      <BrandLogo className="brand" variant="light" />
      <div className="nav-actions">
      <LanguageToggle />

        <div className="nav-links" dir={dir}>
          <a href="#home">{t.nav.home}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#partners">{t.nav.partners}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
      </div>
    </nav>
  );
}
