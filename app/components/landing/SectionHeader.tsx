"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  showBullet?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
  align?: "start" | "center" | "end";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  bulletClassName?: string;
  /** Title font family (CSS font-family value) */
  titleFont?: string;
  /** Title font size — any CSS size, e.g. "clamp(2rem, 8vw, 6rem)" */
  titleSize?: string;
  titleWeight?: CSSProperties["fontWeight"];
  titleColor?: string;
  titleLineHeight?: string;
  titleLetterSpacing?: string;
  /** Subtitle font family */
  subtitleFont?: string;
  subtitleSize?: string;
  subtitleWeight?: CSSProperties["fontWeight"];
  subtitleColor?: string;
  subtitleLineHeight?: string;
  bulletColor?: string;
  /** Bullet diameter, e.g. "1rem" */
  bulletSize?: string;
  gap?: string;
};

const alignClass = {
  start: "items-start text-start",
  center: "items-center text-center",
  end: "items-end text-end",
} as const;

export default function SectionHeader({
  title,
  subtitle,
  showBullet = false,
  as: TitleTag = "h2",
  align = "start",
  className,
  titleClassName,
  subtitleClassName,
  bulletClassName,
  titleFont,
  titleSize,
  titleWeight,
  titleColor = "#ffffff",
  titleLineHeight,
  titleLetterSpacing,
  subtitleFont,
  subtitleSize,
  subtitleWeight = 700,
  subtitleColor = "#c29c7f",
  subtitleLineHeight,
  bulletColor = "#ffffff",
  bulletSize = "1rem",
  gap = "1.5rem",
}: SectionHeaderProps) {
  const titleStyle: CSSProperties = {
    color: titleColor,
    ...(titleFont ? { fontFamily: titleFont } : null),
    ...(titleSize ? { fontSize: titleSize } : null),
    ...(titleWeight != null ? { fontWeight: titleWeight } : null),
    ...(titleLineHeight ? { lineHeight: titleLineHeight } : null),
    ...(titleLetterSpacing ? { letterSpacing: titleLetterSpacing } : null),
  };

  const subtitleStyle: CSSProperties = {
    color: subtitleColor,
    ...(subtitleFont ? { fontFamily: subtitleFont } : null),
    ...(subtitleSize ? { fontSize: subtitleSize } : null),
    ...(subtitleWeight != null ? { fontWeight: subtitleWeight } : null),
    ...(subtitleLineHeight ? { lineHeight: subtitleLineHeight } : null),
  };

  const bulletStyle: CSSProperties = {
    backgroundColor: bulletColor,
    width: bulletSize,
    height: bulletSize,
  };

  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col",
        "px-4 pt-10 pb-8 md:px-8 md:pt-16 md:pb-10 lg:px-10",
        "mb-8 md:mb-12",
        alignClass[align],
        className,
      )}
      style={{ gap }}
    >
      <TitleTag
        className={cn(
          "m-0 max-w-4xl text-4xl font-bold leading-none text-white md:text-7xl lg:text-8xl",
          titleClassName,
        )}
        style={titleStyle}
      >
        {title}
      </TitleTag>

      {subtitle ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
            align === "end" && "justify-end",
          )}
        >
          {showBullet ? (
            <span
              className={cn(
                "inline-block shrink-0 rounded-full",
                bulletClassName,
              )}
              style={bulletStyle}
              aria-hidden
            />
          ) : null}
          <p
            className={cn(
              "m-0 text-xl font-bold md:text-4xl lg:text-5xl",
              subtitleClassName,
            )}
            style={subtitleStyle}
          >
            {subtitle}
          </p>
        </div>
      ) : null}
    </header>
  );
}
