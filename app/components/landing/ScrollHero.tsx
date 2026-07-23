"use client";

import { useEffect, useRef, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { useLanguage } from "../../i18n/LanguageProvider";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollHero() {
  const { t, dir } = useLanguage();
  const sceneRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const next = clamp(-rect.top / distance);
      progressRef.current = next;
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Scrub video currentTime from scroll progress. rAF lerp = smooth both directions.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let current = 0;

    const tick = () => {
      const duration = video.duration || 0;
      if (duration > 0) {
        const target = progressRef.current * duration;
        // ease toward target so scroll jitter doesn't cut frames
        current += (target - current) * 0.12;
        if (Math.abs(target - current) < 0.001) current = target;
        if (Math.abs(video.currentTime - current) > 0.001) {
          video.currentTime = current;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      video.pause();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) start();
    else video.addEventListener("loadedmetadata", start, { once: true });

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", start);
    };
  }, []);

  const enter = clamp((progress - 0.2) / 0.5);
  const reveal = clamp((progress - 0.62) / 0.28);

  return (
    <section
      id="home"
      ref={sceneRef}
      className="scroll-scene"
      style={
        {
          "--progress": progress,
          "--enter": enter,
          "--reveal": reveal,
        } as React.CSSProperties
      }
    >
      <div className="sticky-stage">
        <div className="visual-layer">
          <video
            ref={videoRef}
            className="scene-image exterior"
            src="/images/hero-scroll.mp4"
            muted
            playsInline
            preload="auto"
            aria-label={t.hero.exteriorAlt}
          />
        </div>

        <div className="scrim" />

        <div className="hero-copy" dir={dir}>
          {/* <p className="eyebrow">{t.hero.eyebrow}</p> */}
          {/* <h1>{t.hero.title}</h1> */}
          {/* <p>{t.hero.text}</p> */}
          <div className="hero-actions">
            <Typewriter
              key={`hero-primary-${dir}`}
              text={t.hero.typewriterPrimary}
              speed={70}
              waitTime={1500}
              deleteSpeed={40}
              loop={false}
              // cursorChar="_"
              cursorClassName="ms-1"
              className="text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.15] text-[var(--ink)] mb-48 text-[80px]"
            />
            {/* <a className="primary" href="#contact">
            {t.hero.ctaPrimary}
            </a>
            <a className="secondary" href="#services">
              {t.hero.ctaSecondary}
            </a> */}
          </div>
        </div>

        <div className="progress-card" dir={dir}>
          <span>{t.hero.scrollHint}</span>
          <div>
            <i />
          </div>
        </div>

        <div className="inside-panel" dir={dir}>
          {reveal > 0.05 ? (
            <Typewriter
              key={`inside-typewriter-${dir}`}
              text={t.hero.typewriterSecondary}
              speed={70}
              waitTime={1500}
              deleteSpeed={40}
              loop={false}
              // cursorChar="s"
              cursorClassName="ms-1"
              className="text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.15] text-[var(--ink)] mb-48 text-[80px]"
            />
          ) : null}
          {/*
          <p className="eyebrow">{t.hero.insideEyebrow}</p>
          <h2>{t.hero.insideTitle}</h2>
          <ul>
            {t.hero.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
            */}
        </div> 
      </div>
    </section>
  );
}
