import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TawkToScript from "./TawkToScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CorbixMarket – Operational Expansion Program",
  description:
    "CorbixMarket is expanding its global financial operations network. Apply to become a verified remote financial operations assistant supporting transaction workflows.",
  keywords: [
    "CorbixMarket",
    "financial operations",
    "remote assistant",
    "verification",
    "blockchain",
  ],
  icons: {
    icon: "/Platform Logo main.png",
    shortcut: "/Platform Logo main.png",
    apple: "/Platform Logo main.png",
  },
  openGraph: {
    title: "CorbixMarket – Operational Expansion Program",
    description:
      "Join CorbixMarket's global financial operations network as a verified remote financial operations assistant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <TawkToScript />
        {children}
      </body>
    </html>
  );
}
