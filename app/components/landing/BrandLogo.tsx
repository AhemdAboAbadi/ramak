type BrandLogoProps = {
  className?: string;
  variant?: "light" | "dark";
  link?: boolean;
};

export default function BrandLogo({
  className = "",
  variant = "dark",
  link = true,
}: BrandLogoProps) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/logo.svg" alt="Ramak" width={100} height={50} />
  );

  const classes = `brand-logo brand-logo--${variant} ${className}`.trim();

  if (!link) {
    return <span className={classes}>{image}</span>;
  }

  return (
    <a href="/" className={classes} aria-label="Ramak home">
      {image}
    </a>
  );
}
