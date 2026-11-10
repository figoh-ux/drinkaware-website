import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DrinkAware | Awareness. Knowledge. Safer Choices.",
    template: "%s | DrinkAware",
  },
  description:
    "Discover DrinkAware, a mobile application dedicated to alcohol safety awareness, education and access to support resources.",
  keywords: [
    "DrinkAware",
    "alcohol awareness",
    "drink safety",
    "health awareness",
    "support resources",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
