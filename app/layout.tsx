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
  title: "رَمَك | عقارات",
  description:
    "رَمَك تطوّر مساحات سكنية واستثمارية حيث يَرْمَكُ الاستقرار وتتحدّث الأصالة.",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("elysian-locale");if(l!=="ar"&&l!=="en"){l="ar"}document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr"}catch(e){document.documentElement.lang="ar";document.documentElement.dir="rtl"}})();`,
          }}
        />
      </head>
      <body className={sstArabic.variable}>
        {children}
      </body>
    </html>
  );
}
