"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import SectionHeader from "./SectionHeader";

const CLIENT_LOGOS = [
  { id: 1, src: "/images/partner/RamakPartner1.svg", alt: "Partner 1" },
  { id: 2, src: "/images/partner/RamakPartner2.svg", alt: "Partner 2" },
  { id: 3, src: "/images/partner/RamakPartner3.svg", alt: "Partner 3" },
  { id: 4, src: "/images/partner/RamakPartner4.svg", alt: "Partner 4" },
  { id: 5, src: "/images/partner/RamakPartner5.svg", alt: "Partner 5" },
] as const;

export default function PartnersSection() {
  const { t, dir } = useLanguage();
  const p = t.partners;

  return (
    <section
      id="partners"
      className="dark-section relative overflow-hidden !px-0 !pt-0 !pt-50"
      dir={dir}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute bottom-0 end-0 h-96 w-96 rounded-full bg-[var(--gold)]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 pb-[clamp(100px,12vw,160px)] pt-4 md:px-8 lg:px-10">
        <div className="rounded-2xl border-2 border-[#1f3d34] bg-gradient-to-r from-[var(--gold)]/10 via-[var(--gold)]/5 to-[var(--gold)]/10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <SectionHeader
            title={
              <>
                {p.titleBefore}
                <span className="text-[var(--green)]">{p.titleEm}</span>
              </>
            }
            subtitle={p.text}
            align="center"
            subtitleColor="rgba(247,247,244,0.72)"
            subtitleWeight={400}
            className="!mb-10 !px-0 !pb-4 !pt-0 md:!mb-14 md:!pb-6"
            subtitleClassName="!text-base !font-normal md:!text-lg lg:!text-lg max-w-3xl"
          />

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-14 lg:grid-cols-5 lg:gap-16">
            {CLIENT_LOGOS.map((client, index) => (
              <motion.div
                key={client.id}
                className="group flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="relative flex h-32 w-32 items-center justify-center transition-transform duration-700 group-hover:scale-[1.25] md:h-40 md:w-40 lg:h-44 lg:w-44">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={176}
                    height={176}
                    className="h-full w-full object-contain opacity-60 grayscale transition-opacity duration-700 group-hover:opacity-0"
                  />
                  <Image
                    src={client.src}
                    alt=""
                    aria-hidden
                    width={176}
                    height={176}
                    className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-700 sm:opacity-0 sm:group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
