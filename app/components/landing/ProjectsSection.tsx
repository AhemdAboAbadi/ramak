"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "../../i18n/LanguageProvider";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  const { t, dir } = useLanguage();
  const p = t.projects;

  return (
    <section
      id="projects"
      className="dark-section flex flex-col overflow-hidden w-full"
      dir={dir}
    >
      <SectionHeader title={p.title} className="mb-0 pb-4 md:mb-0 md:pb-6" />

      {p.items.map((item) => (
        <div key={item.image} className="w-full">
          <ContainerScroll
            animationEnd={0.45}
            titleComponent={
              <h3 className="text-4xl font-semibold text-[var(--brown)]">
                {item.titleBefore}
                <br />
                <span className="mt-1 inline-block text-4xl font-bold leading-none md:text-[6rem]">
                  {item.titleEm}
                </span>
              </h3>
            }
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              height={1080}
              width={1920}
              className="mx-auto h-full w-full rounded-2xl object-cover object-center md:object-left-top"
              draggable={false}
              sizes="(max-width: 768px) 100vw, 1400px"
              priority={false}
            />
          </ContainerScroll>
          <div className="mx-auto mb-6 mt-2 flex max-w-6xl flex-col items-start gap-4 px-4 md:mb-10 md:mt-4 md:flex-row md:gap-10 lg:gap-14">
            <h4 className="shrink-0 text-2xl font-bold leading-tight text-white md:max-w-[16rem] md:text-3xl lg:text-4xl">
              {item.name}
            </h4>
            <p className="flex-1 text-start text-xl leading-relaxed text-[#ffffff] md:text-2xl">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
