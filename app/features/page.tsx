import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

import {
  ArrowRight,
  ShoppingBag,
  Gamepad2,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Smartphone,
  MessageSquareText,
  Headset,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DrinkAware Features | Learning, Support and Awareness",

  description:
    "Explore DrinkAware's six features: Marketplace, Learning, BoozeConnect interactive quizzes, real-life Stories, Help and Support, and Anonymous Reporting. Discover tools that promote awareness and informed choices.",

  alternates: {
    canonical: "/features",
  },

  openGraph: {
    title: "DrinkAware Features | Learning, Support and Awareness",
    description:
      "Discover the six DrinkAware features bringing together education, interactive quizzes, real-life stories, support resources and anonymous reporting.",
    url: "/features",
    siteName: "DrinkAware",
    locale: "en_ZW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DrinkAware Features",
    description:
      "Explore the six features of DrinkAware and discover an awareness-focused digital experience.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================
   APPLICATION FEATURES
========================================= */

const features = [
  {
    number: "01",
    title: "Marketplace",
    subtitle: "Explore the marketplace experience",

    description:
      "The DrinkAware Marketplace is one of the core sections of the application. It provides users with a dedicated space to explore the marketplace experience.",

    image: "/marketplace.png",
    imageAlt: "DrinkAware marketplace application screen",

    icon: ShoppingBag,

    points: [
      "Dedicated marketplace section",
      "Simple and accessible interface",
      "Part of the wider DrinkAware experience",
    ],
  },

  {
    number: "02",
    title: "Learning",
    subtitle: "Knowledge that encourages informed decisions",

    description:
      "DrinkAware provides educational information on alcohol and substance abuse. Users can explore useful learning materials to improve their understanding of associated risks and make more informed decisions.",

    icon: BookOpen,

    points: [
      "Educational information on alcohol",
      "Awareness of substance abuse",
      "Encourages informed decisions",
    ],
  },

  {
    number: "03",
    title: "BoozeConnect Quiz",
    subtitle: "Test your knowledge through interactive quizzes",

    description:
      "BoozeConnect provides an interactive quiz experience that allows users to test and reinforce their knowledge. It makes learning more engaging while encouraging users to reflect on what they know.",

    image: "/boozeconnect-quiz.png",
    imageAlt: "DrinkAware BoozeConnect quiz application screen",

    icon: Gamepad2,

    points: [
      "Interactive quiz activities",
      "Tests existing knowledge",
      "Reinforces educational information",
    ],
  },

  {
    number: "04",
    title: "Stories",
    subtitle: "Real experiences. Meaningful awareness.",

    description:
      "The Stories feature shares real-life experiences that encourage reflection and informed choices. Through personal experiences, users can gain different perspectives and develop a better understanding of alcohol-related challenges.",

    icon: MessageSquareText,

    points: [
      "Sharing real-life experiences",
      "Encourages reflection",
      "Promotes informed choices",
    ],
  },

  {
    number: "05",
    title: "Help & Support",
    subtitle: "Connecting people to relevant assistance",

    description:
      "DrinkAware helps connect users to relevant support contacts and professional assistance. The feature aims to make useful support information easier to discover for individuals who may need guidance.",

    icon: Headset,

    points: [
      "Access to relevant support contacts",
      "Information about professional assistance",
      "Connection to appropriate support resources",
    ],
  },

  {
    number: "06",
    title: "Anonymous Reporting",
    subtitle: "Supporting awareness and community safety",

    description:
      "The anonymous reporting feature enables users to report suspected illegal brewing activities. Reports can be made without publicly identifying the person submitting them, allowing relevant authorities to receive information for appropriate follow-up.",

    icon: ShieldAlert,

    points: [
      "Anonymous reporting facility",
      "Report suspected illegal brewing activities",
      "Information for appropriate authority follow-up",
    ],
  },
];

/* =========================================
   FEATURE VISUAL
========================================= */

function FeatureVisual({ feature }: { feature: (typeof features)[number] }) {
  const Icon = feature.icon;

  return (
    <div className="feature-detail-image">
      <div className="feature-image-decoration" />

      {feature.image ? (
        <div className="feature-phone">
          <div className="feature-phone-notch" />

          <Image
            src={feature.image}
            alt={feature.imageAlt || feature.title}
            width={420}
            height={850}
            sizes="(max-width: 768px) 75vw, 350px"
          />
        </div>
      ) : (
        <div className="feature-illustration">
          <div className="feature-illustration-circle">
            <div className="feature-illustration-icon">
              <Icon size={75} strokeWidth={1.5} />
            </div>
          </div>

          <div className="feature-illustration-badge">
            <ShieldCheck size={21} />
          </div>

          <span className="feature-illustration-caption">
            DRINKAWARE APPLICATION
          </span>
        </div>
      )}
    </div>
  );
}

/* =========================================
   FEATURES PAGE
========================================= */

export default function FeaturesPage() {
  return (
    <main className="features-page">
      {/* =====================================
          NAVIGATION
      ===================================== */}

      <nav className="features-nav">
        <Link href="/" className="features-brand">
          <span className="features-brand-icon">
            <ShieldCheck size={24} />
          </span>

          <span>
            Drink<span>Aware</span>
            <small>Awareness. Knowledge. Safer Choices.</small>
          </span>
        </Link>

        <div className="features-nav-links">
          <Link href="/">Home</Link>

          <Link href="/about">About Us</Link>

          <Link href="/features" className="active">
            Features
          </Link>

          <Link href="/faqs">FAQs</Link>
        </div>

        <Link href="/download" className="features-nav-button">
          Get Started <ArrowRight size={16} />
        </Link>
      </nav>

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="features-hero">
        <div className="features-hero-content">
          <span className="features-eyebrow">
            <Smartphone size={15} />
            THE DRINKAWARE EXPERIENCE
          </span>

          <h1>
            Discover what makes
            <span> DrinkAware different.</span>
          </h1>

          <p>
            Explore six key features designed to bring together awareness,
            interactive learning, real-life experiences, educational information
            and access to support resources.
          </p>

          <div className="features-hero-actions">
            <Link href="/about" className="features-secondary-btn">
              Learn About Us
            </Link>
          </div>

          <div className="features-hero-note">
            <CheckCircle2 size={17} />
            Six key features. One awareness-focused experience.
          </div>
        </div>

        <div className="features-hero-visual">
          <div className="features-visual-glow" />

          <div className="features-hero-image">
            <Image
              src="/drinkaware-app.png"
              alt="DrinkAware mobile application preview"
              width={420}
              height={650}
              priority
            />
          </div>

          <div className="features-floating-card">
            <ShieldCheck size={22} />

            <div>
              <strong>Awareness First</strong>
              <span>Knowledge for informed decisions</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="features-intro" id="explore-features">
        <span className="features-section-label">WHAT YOU CAN EXPLORE</span>

        <h2>Six features. One purpose.</h2>

        <p>
          Each part of DrinkAware contributes to an experience centred on
          education, awareness, informed decisions and access to useful
          resources.
        </p>
      </section>

      {/* =====================================
          FEATURE DETAILS
      ===================================== */}

      <section className="features-list">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article
              className={`feature-detail ${
                index % 2 !== 0 ? "feature-reverse" : ""
              }`}
              key={feature.number}
            >
              {/* FEATURE IMAGE OR ILLUSTRATION */}

              <FeatureVisual feature={feature} />

              {/* FEATURE INFORMATION */}

              <div className="feature-detail-content">
                <span className="feature-number">{feature.number}</span>

                <div className="feature-title-row">
                  <span className="feature-icon">
                    <Icon size={25} />
                  </span>

                  <span className="features-section-label">
                    DRINKAWARE FEATURE
                  </span>
                </div>

                <h2>{feature.title}</h2>

                <h3>{feature.subtitle}</h3>

                <p>{feature.description}</p>

                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* =====================================
          PURPOSE SECTION
      ===================================== */}

      <section className="features-purpose">
        <div className="features-purpose-icon">
          <BookOpen size={30} />
        </div>

        <span className="features-section-label">THE BIGGER PICTURE</span>

        <h2>Technology with a purpose.</h2>

        <p>
          DrinkAware brings together different digital experiences to encourage
          awareness, support learning, share meaningful experiences and make
          useful resources more accessible.
        </p>

        <Link href="/about" className="features-purpose-link">
          Discover our story <ArrowRight size={17} />
        </Link>
      </section>

      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <section className="features-cta">
        <div>
          <span className="features-section-label">EXPLORE DRINKAWARE</span>

          <h2>Awareness starts with knowledge.</h2>

          <p>
            Discover the DrinkAware initiative and explore everything the
            application has to offer.
          </p>
        </div>

        <Link href="/download" className="features-primary-btn">
          Get Started <ArrowRight size={17} />
        </Link>
      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="features-footer">
        <Link href="/" className="features-footer-brand">
          Drink<span>Aware</span>
        </Link>

        <p>Awareness. Knowledge. Safer Choices.</p>

        <div className="features-footer-links">
          <Link href="/">Home</Link>

          <Link href="/about">About Us</Link>

          <Link href="/features">Features</Link>

          <Link href="/faqs">FAQs</Link>
        </div>

        <div className="features-footer-bottom">
          <span>© 2026 DrinkAware. All rights reserved.</span>

          <span>
            Powered by <strong>Figoh Technologies Inc</strong>
          </span>
        </div>
      </footer>
    </main>
  );
}
