"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { useLanguage } from "../../i18n/LanguageProvider";

const TIMELINE_IMAGES = [
  {
    src: "/images/about/img1.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoQAAgABUB8JagCdAD0S0ly4AD8j5YjD3pqukquu4WWS5XlKtEwtdguO/LBlaKyjQAAAA==",
  },
  {
    src: "/images/about/img2.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAAAQAgCdASoQAAgABUB8JYgCdAEQ/ZctHoYAAMtNqOJ+UeYVe37u4B4dFAmOQAAA",
  },
  {
    src: "/images/about/img3.webp",
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQAAgABUB8JZACdAEUo8b/PsAA/VOWEx+FhTTWQDCGW5JBYLIcAtQhMYaAAA==",
  },
] as const;

const imageClassName =
  "rounded-lg object-cover h-44 md:h-72 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export default function AboutSection() {
  const { t, dir } = useLanguage();
  const timeline = t.about.timeline;

  const data = timeline.entries.map((entry, entryIndex) => {
    const image = TIMELINE_IMAGES[entryIndex];

    return {
      title: entry.title,
      content: (
        <div>
          <Image
            src={image.src}
            alt={entry.imageAlt}
            width={1200}
            height={630}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 55vw, 640px"
            quality={75}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className={imageClassName}
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-[26px] font-normal pt-8" >
            {entry.text}
          </p>
        </div>
      ),
    };
  });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#1f3d34]"
      dir={dir}
    >
      <Timeline
        data={data}
        title={timeline.title}
        description={timeline.description}
      />
    </section>
  );
}
