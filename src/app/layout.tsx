import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import localFont from "next/font/local";
import { CookieConsentBanner } from "@/components/cookies/cookie-consent-banner";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartProvider } from "@/components/cart/cart-provider";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../../public/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "400 500 600 700 800",
  style: "normal",
  display: "swap",
});
const clashDisplay = localFont({
  src: "../../public/font/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "400 500 600 700 800",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title: {
    default: "ByteSpace | Learn practical skills",
    template: "%s | ByteSpace",
  },
  description:
    "Discover practical online courses and independent educators on ByteSpace. Build creative, business, and technical skills at your own pace.",
  applicationName: "ByteSpace",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ByteSpace",
    title: "ByteSpace | Learn practical skills",
    description:
      "Discover practical online courses and independent educators on ByteSpace. Build creative, business, and technical skills at your own pace.",
  },
  twitter: {
    card: "summary",
    title: "ByteSpace | Learn practical skills",
    description:
      "Discover practical online courses and independent educators on ByteSpace. Build creative, business, and technical skills at your own pace.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} font-satoshi h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        {/* <CookieConsentBanner /> */}
      </body>
    </html>
  );
}
