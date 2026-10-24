import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { SITE_METADATA } from "@/constants/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.defaultTitle,
    template: `%s | ${SITE_METADATA.siteName}`,
  },
  description: SITE_METADATA.defaultDescription,
  metadataBase: new URL(SITE_METADATA.siteUrl),
  openGraph: {
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.siteName,
    images: [
      {
        url: "/skillcampus-hero.png",
        width: 1200,
        height: 630,
        alt: SITE_METADATA.siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.defaultTitle,
    description: SITE_METADATA.defaultDescription,
    creator: SITE_METADATA.twitterHandle,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3B8F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F6F8FC] text-[#3B4A66] font-poppins antialiased selection:bg-[#F7820E] selection:text-white"
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
