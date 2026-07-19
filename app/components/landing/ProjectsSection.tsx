"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function ProjectsSection() {
  const { t, dir } = useLanguage();
  const p = t.projects;

  return (
    <section
      id="projects"
      className="dark-section flex flex-col overflow-hidden w-full"
      dir={dir}
    >
      {p.items.map((item, index) => (
        <div key={item.image}>
          <ContainerScroll
            titleComponent={
              <>
                {index === 0 ? (
                  <div className="pill mx-auto mb-6">{p.pill}</div>
                ) : null}
                <h2 className="text-4xl font-semibold text-[var(--brown)]">
                  {item.titleBefore}
                  <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none inline-block">
                    {item.titleEm}
                  </span>
                </h2>
              </>
            }
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              height={1080}
              width={1920}
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              draggable={false}
              sizes="(max-width: 768px) 100vw, 1400px"
              priority={false}
            />
          </ContainerScroll>
          <p className="mx-auto mt-6 mb-10 max-w-xl px-4 text-center text-base md:text-lg text-[rgba(247,247,244,0.72)]">
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
}
