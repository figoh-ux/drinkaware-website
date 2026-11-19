import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drinkaware-website-ia18.vercel.app"),

  title: {
    default: "DrinkAware | Awareness, Knowledge and Safer Choices",
    template: "%s | DrinkAware",
  },

  description:
    "DrinkAware promotes alcohol safety awareness, education and informed choices. Explore educational resources, interactive quizzes, real-life stories, support services and anonymous reporting.",

  keywords: [
    "DrinkAware",
    "alcohol awareness",
    "alcohol safety",
    "alcohol education",
    "substance abuse awareness",
    "BoozeConnect",
    "alcohol support services",
    "anonymous reporting",
    "Learning",
    "health awareness",
    "Zimbabwe",
  ],

  applicationName: "DrinkAware",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "DrinkAware | Awareness, Knowledge and Safer Choices",
    description:
      "Discover DrinkAware, an awareness platform promoting education, informed choices and access to support services.",
    url: "https://drinkaware-website-ia18.vercel.app",
    siteName: "DrinkAware",
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DrinkAware | Awareness, Knowledge and Safer Choices",
    description:
      "Promoting awareness, education and safer choices through DrinkAware.",
  },
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
