"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t.lang.switchTo}>
      <button
        type="button"
        className={locale === "ar" ? "is-active" : undefined}
        aria-pressed={locale === "ar"}
        onClick={() => setLocale("ar")}
      >
        {t.lang.ar}
      </button>
      <button
        type="button"
        className={locale === "en" ? "is-active" : undefined}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        {t.lang.en}
      </button>
    </div>
  );
}
