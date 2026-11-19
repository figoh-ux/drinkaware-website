import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | DrinkAware Zimbabwe",

  description:
    "Find answers to frequently asked questions about DrinkAware, alcohol safety, illicit alcohol awareness, application features, educational resources and support services.",

  alternates: {
    canonical: "/faqs",
  },

  openGraph: {
    title: "Frequently Asked Questions | DrinkAware",
    description:
      "Learn more about DrinkAware, its features, alcohol safety awareness and available support resources. Find answers to common questions.",
    url: "/faqs",
    siteName: "DrinkAware",
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DrinkAware FAQs",
    description:
      "Find answers about DrinkAware, alcohol awareness, application features and support services.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
