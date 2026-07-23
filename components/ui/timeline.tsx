"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "@/app/components/landing/SectionHeader";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  subtitle,
}: {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  subtitle?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#1f3d34] font-sans"
      ref={containerRef}
    >
      {title ? <SectionHeader title={title} subtitle={subtitle} /> : null}

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 pb-20 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start md:gap-10 ${
              index === 0 ? "pt-10 md:pt-16" : "pt-10 md:pt-40"
            }`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute start-3 md:start-3 w-10 rounded-full bg-[#1f3d34] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#ffffff] border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:ps-20 md:text-5xl font-bold text-[#c29c7f] ">
                {item.title}
              </h3>
            </div>

            <div className="relative ps-20 pe-4 md:ps-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-start font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:start-8 start-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#c29c7f]/40 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#c29c7f] via-[#c29c7f] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
