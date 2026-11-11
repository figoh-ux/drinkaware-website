
import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShoppingBag,
  Gamepad2,
  HeartHandshake,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Smartphone,
} from "lucide-react";



export const metadata: Metadata = {
  title: "Our Features",
  description:
    "Explore DrinkAware's marketplace, BoozeConnect interactive learning experience, and access to educational and support resources.",
};

const features = [
  {
    number: "01",
    title: "Marketplace",
    subtitle: "Explore the marketplace experience",
    description:
      "The DrinkAware marketplace is one of the core sections of the application. It provides users with a dedicated space to explore the marketplace interface.",
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
    title: "BoozeConnect",
    subtitle: "Learning through interactive experiences",
    description:
      "BoozeConnect brings an interactive gaming experience into DrinkAware. Its quiz-based activities help users engage with educational information in an enjoyable way.",
    image: "/boozeconnect-quiz.png",
    imageAlt: "DrinkAware BoozeConnect quiz screen",
    icon: Gamepad2,
    points: [
      "Interactive quiz activities",
      "Educational gaming experience",
      "Encourages active learning",
    ],
  },
  {
    number: "03",
    title: "Help & Educational Resources",
    subtitle: "Knowledge, awareness and access to support",
    description:
      "DrinkAware provides access to educational content and reliable help services, helping users find useful information and explore available support resources.",
    image: "/drinkaware-app.png",
    imageAlt: "DrinkAware mobile application screen",
    icon: HeartHandshake,
    points: [
      "Educational information",
      "Access to reliable help services",
      "Encourages informed decisions",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="features-page">
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
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#faq">FAQs</Link>
        </div>

        <Link href="/#download" className="features-nav-button">
          Get Started <ArrowRight size={16} />
        </Link>
      </nav>

      <section className="features-hero">
        <div className="features-hero-content">
          <span className="features-eyebrow">
            <Smartphone size={15} /> THE DRINKAWARE EXPERIENCE
          </span>

          <h1>
            Discover what makes
            <span> DrinkAware different.</span>
          </h1>

          <p>
            Explore the features designed to bring together awareness,
            interactive learning, educational information and access to support
            resources.
          </p>

          <div className="features-hero-actions">
            <Link href="#explore-features" className="features-primary-btn">
              Explore Features <ArrowRight size={17} />
            </Link>
            <Link href="/about" className="features-secondary-btn">
              Learn About Us
            </Link>
          </div>

          <div className="features-hero-note">
            <CheckCircle2 size={17} />
            Three core features. One awareness-focused experience.
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

      <section className="features-intro" id="explore-features">
        <span className="features-section-label">WHAT YOU CAN EXPLORE</span>
        <h2>Three features. One purpose.</h2>
        <p>
          Each part of DrinkAware contributes to an experience centred on
          education, awareness and access to useful resources.
        </p>
      </section>

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
              <div className="feature-detail-image">
                <div className="feature-image-decoration" />
                <div className="feature-phone">
                  <div className="feature-phone-notch" />
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={420}
                    height={850}
                  />
                </div>
              </div>

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

      <section className="features-purpose">
        <div className="features-purpose-icon">
          <BookOpen size={30} />
        </div>
        <span className="features-section-label">THE BIGGER PICTURE</span>
        <h2>Technology with a purpose.</h2>
        <p>
          DrinkAware brings together different digital experiences to encourage
          awareness, support learning and make useful resources more accessible.
        </p>
        <Link href="/about" className="features-purpose-link">
          Discover our story <ArrowRight size={17} />
        </Link>
      </section>

      <section className="features-cta">
        <div>
          <span className="features-section-label">EXPLORE DRINKAWARE</span>
          <h2>Awareness starts with knowledge.</h2>
          <p>
            Discover the DrinkAware initiative and explore what the application
            has to offer.
          </p>
        </div>

        <Link href="/#download" className="features-primary-btn">
          Get Started <ArrowRight size={17} />
        </Link>
      </section>

      <footer className="features-footer">
        <Link href="/" className="features-footer-brand">
          Drink<span>Aware</span>
        </Link>

        <p>Awareness. Knowledge. Safer Choices.</p>

        <div className="features-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/features">Features</Link>
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
