import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sstArabic = localFont({
  src: [
    {
      path: "./fonts/SSTArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SSTArabic-Bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sst",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramak | Real Estate",
  description:
    "Ramak develops residential and investment spaces where stability settles and authenticity speaks.",
  icons: {
    icon: "/images/icon-web.png",
    apple: "/images/icon-web.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("elysian-locale");if(l!=="ar"&&l!=="en"){l=navigator.language.toLowerCase().indexOf("ar")===0?"ar":"en"}document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr"}catch(e){}})();`,
          }}
        />
      </head>
      <body className={sstArabic.variable}>
        {children}
      </body>
    </html>
  );
}
