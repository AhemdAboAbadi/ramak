"use client";

import type React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  type Variants,
} from "framer-motion";

export type AboutUsServiceItem = {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
};

export type AboutUsStat = {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
};

type AboutUsSectionProps = {
  id?: string;
  dir?: "ltr" | "rtl";
  eyebrow?: string;
  title?: string;
  titleEm?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  portfolioLabel?: string;
  portfolioHref?: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaLabel?: string;
  ctaHref?: string;
  services?: AboutUsServiceItem[];
  stats?: AboutUsStat[];
  showHeader?: boolean;
  showStats?: boolean;
  showCta?: boolean;
  className?: string;
};

const DEFAULT_SERVICES: AboutUsServiceItem[] = [
  {
    icon: <Pen className="w-6 h-6" />,
    secondaryIcon: (
      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Interior",
    description:
      "Transform your living spaces with our expert interior design services. We blend functionality and aesthetics to create spaces that reflect your unique style and personality.",
    position: "left",
  },
  {
    icon: <Home className="w-6 h-6" />,
    secondaryIcon: (
      <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Exterior",
    description:
      "Make a lasting impression with stunning exterior designs that enhance curb appeal and create harmonious connections between architecture and landscape.",
    position: "left",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    secondaryIcon: (
      <Star className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Design",
    description:
      "Our innovative design process combines creativity with practicality, resulting in spaces that are both beautiful and functional for everyday living.",
    position: "left",
  },
  {
    icon: <PaintBucket className="w-6 h-6" />,
    secondaryIcon: (
      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Decoration",
    description:
      "Elevate your space with our curated decoration services. From color schemes to textiles and accessories, we perfect every detail to bring your vision to life.",
    position: "right",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    secondaryIcon: (
      <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Planning",
    description:
      "Our meticulous planning process ensures every project runs smoothly from concept to completion, with careful attention to timelines, budgets, and requirements.",
    position: "right",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    secondaryIcon: (
      <Star className="w-4 h-4 absolute -top-1 -right-1 text-[var(--gold)]" />
    ),
    title: "Execution",
    description:
      "Watch your dream space come to life through our flawless execution. Our skilled team handles every aspect of implementation with precision and care.",
    position: "right",
  },
];

const DEFAULT_STATS: AboutUsStat[] = [
  { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
  { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
  { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
  { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
];

export default function AboutUsSection({
  id,
  dir = "ltr",
  eyebrow = "DISCOVER OUR STORY",
  title = "About Us",
  titleEm,
  description = "We are a passionate team of designers and architects dedicated to creating beautiful, functional spaces that inspire and elevate everyday living. With attention to detail and commitment to excellence, we transform visions into reality.",
  imageSrc = "/images/about/img1.webp",
  imageAlt = "Modern House",
  portfolioLabel = "Our Portfolio",
  portfolioHref = "#projects",
  ctaTitle = "Ready to transform your space?",
  ctaText = "Let's create something beautiful together.",
  ctaLabel = "Get Started",
  ctaHref = "#contact",
  services = DEFAULT_SERVICES,
  stats = DEFAULT_STATS,
  showHeader = true,
  showStats = true,
  showCta = true,
  className = "",
}: AboutUsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      dir={dir}
      className={`w-full py-24 px-4 bg-[var(--brown)] text-[#f7f7f4] overflow-hidden relative ${className}`.trim()}
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--green)]/20 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[var(--gold)]/15 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[var(--green)]/40"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[var(--gold)]/40"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {showHeader ? (
          <>
            <motion.div
              className="flex flex-col items-center mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="text-[var(--green)] font-medium mb-2 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Zap className="w-4 h-4" />
                {eyebrow}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-center text-[#f7f7f4]">
                {title}
                {titleEm ? (
                  <em className="not-italic font-medium text-[var(--green)]">
                    {" "}
                    {titleEm}
                  </em>
                ) : null}
              </h2>
              <motion.div
                className="w-24 h-1 bg-[var(--green)]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <motion.p
              className="text-center max-w-2xl mx-auto mb-16 text-white/70"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${service.title}-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-0 mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl relative aspect-3/4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                  priority={false}
                />
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-[var(--green)]/60 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.a
                    href={portfolioHref}
                    className="bg-[var(--paper)] !text-[var(--green)] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {portfolioLabel}{" "}
                    <ArrowRight className="w-4 h-4 text-[var(--green)]" />
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-white/35 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[var(--green)]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[var(--gold)]/25"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />

              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--green)]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--gold)]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${service.title}-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {showStats ? (
          <motion.div
            ref={statsRef}
            className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={`${stat.label}-${index}`}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        ) : (
          <div ref={statsRef} className="mt-8" aria-hidden />
        )}

        {showCta ? (
          <motion.div
            className="mt-20 bg-[var(--green)] text-[#f7f7f4] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex-1">
              {/* <h3 className="text-2xl font-medium mb-2">{ctaTitle}</h3> */}
              <p className="text-white/80">{ctaText}</p>
            </div>
            <motion.a
              href={ctaHref}
              className="bg-[var(--brown)] hover:bg-[var(--brown)]/90 text-[#f7f7f4] px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[var(--green)] bg-[var(--green)]/15 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[var(--green)]/25 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[var(--green)] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[var(--green)] leading-relaxed ps-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 ps-12 flex items-center text-[var(--green)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/15 transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[var(--green)]/20 flex items-center justify-center mb-4 text-[var(--green)] group-hover:bg-[var(--green)]/30 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-[#f7f7f4] flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-white/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[var(--green)] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
