import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Smartphone,
  CheckCircle2,
  Download,
  Search,
  Info,
  Menu,
  MessageCircle,
  Heart,
  ShieldAlert,
  ChevronDown,
  ShoppingBag,
  Gamepad2,
} from "lucide-react";

/* =========================================
   NAVIGATION BAR
========================================= */

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="brand">
          <div className="brand-icon">
            <ShieldCheck size={25} />
          </div>

          <span>
            Drink<span className="brand-highlight">Aware</span>
          </span>
        </Link>

        <nav className="desktop-nav">
          <Link href="#home" className="nav-link active">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="#why-drinkaware" className="nav-link">
            Why DrinkAware
          </Link>

          <Link href="/features" className="nav-link">
            Features
          </Link>

          <Link href="#how-it-works" className="nav-link">
            How It Works
          </Link>

          <Link href="#faq" className="nav-link">
            FAQs
          </Link>
        </nav>

        <Link href="#download" className="nav-cta">
          Get the App <ArrowRight size={16} />
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu size={25} />
          </summary>

          <div className="mobile-menu-content">
            <Link href="#home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="#why-drinkaware">Why DrinkAware</Link>
            <Link href="/features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#faq">FAQs</Link>
            <Link href="#download">Get the App</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

/* =========================================
   HERO SECTION
========================================= */

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background-shape shape-one" />
      <div className="hero-background-shape shape-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            KNOW MORE. STAY AWARE.
          </div>

          <h1>
            Knowledge today.
            <br />
            <span>Safer choices</span>
            <br />
            tomorrow.
          </h1>

          <p className="hero-description">
            Discover DrinkAware, your companion for alcohol safety awareness,
            reliable information and access to support resources. Make informed
            decisions through knowledge and awareness.
          </p>

          <div className="hero-buttons">
            <Link href="/features" className="primary-button">
              Explore the App
              <ArrowRight size={19} />
            </Link>

            <Link href="/about" className="secondary-button">
              Discover DrinkAware
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <strong>Awareness. Education. Support.</strong>
              <span>Information for more informed decisions.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="hero-circle circle-one" />
          <div className="hero-circle circle-two" />

          <div className="phone-frame">
            {/* Traditional iPhone-style notch */}
            <div className="phone-notch" aria-hidden="true" />

            <div className="phone-screen">
              <Image
                src="/drinkaware-app.png"
                alt="DrinkAware mobile application homepage"
                fill
                priority
                sizes="(max-width: 768px) 75vw, 320px"
                className="app-screenshot"
              />
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <div className="floating-icon">
              <BookOpen size={20} />
            </div>

            <div>
              <strong>Knowledge</strong>
              <span>Learn and understand</span>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <div className="floating-icon support-icon">
              <HeartHandshake size={20} />
            </div>

            <div>
              <strong>Support matters</strong>
              <span>Help is available</span>
            </div>
          </div>

          <span className="visual-caption">
            The actual DrinkAware application
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>
    </section>
  );
}

/* =========================================
   ABOUT SECTION
========================================= */

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-heading">
            <span className="section-label">ABOUT DRINKAWARE</span>

            <h2>
              More than an app.
              <span>A step towards awareness.</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              DrinkAware is a mobile application developed to promote awareness
              about illicit and potentially unsafe alcoholic drinks.
            </p>

            <p>
              Through educational information, safety guidance and access to
              support resources, the application aims to empower individuals to
              make more informed decisions.
            </p>

            <Link href="/features" className="text-link">
              Explore what DrinkAware offers
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mission-card">
          <div className="mission-icon">
            <Heart size={28} />
          </div>

          <div>
            <span>OUR PURPOSE</span>

            <h3>
              Promoting awareness. Encouraging informed decisions. Connecting
              people to support.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   WHY DRINKAWARE MATTERS
========================================= */

function WhyDrinkAware() {
  const reasons = [
    {
      icon: ShieldAlert,
      number: "01",
      title: "Awareness of Unsafe Drinks",
      description:
        "Illicit and improperly labelled alcoholic drinks can expose consumers to serious health risks. Understanding these risks is an important step towards protecting yourself.",
    },
    {
      icon: BookOpen,
      number: "02",
      title: "Access to Reliable Information",
      description:
        "People need accessible educational information to understand alcohol-related risks and make more informed decisions.",
    },
    {
      icon: HeartHandshake,
      number: "03",
      title: "Connecting People to Support",
      description:
        "Finding appropriate support can be difficult. DrinkAware aims to make information about relevant support and rehabilitation resources easier to discover.",
    },
  ];

  return (
    <section className="why-section section-padding" id="why-drinkaware">
      <div className="section-container">
        <div className="why-header">
          <div className="why-heading">
            <span className="section-label">WHY DRINKAWARE MATTERS</span>

            <h2>
              Making awareness
              <span> part of everyday choices.</span>
            </h2>
          </div>

          <p>
            Illicit and potentially unsafe alcoholic drinks are a serious
            concern. DrinkAware aims to address the information gap by
            encouraging awareness, sharing educational resources and helping
            people discover appropriate support.
          </p>
        </div>

        <div className="why-highlight">
          <div className="why-highlight-icon">
            <Info size={27} />
          </div>

          <div>
            <strong>Knowledge can make a difference.</strong>

            <p>
              Understanding the risks associated with unsafe alcoholic drinks
              can help people make more informed choices.
            </p>
          </div>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-card" key={reason.number}>
                <div className="why-card-top">
                  <div className="why-icon">
                    <Icon size={26} />
                  </div>

                  <span>{reason.number}</span>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   REUSABLE IPHONE-STYLE PHONE FRAME
========================================= */

function AppPhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="phone-frame feature-phone-frame">
      {/* Small traditional notch - no Dynamic Island */}
      <div className="phone-notch" aria-hidden="true" />

      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 70vw, 280px"
          className="app-screenshot"
        />
      </div>
    </div>
  );
}

/* =========================================
   APPLICATION FEATURES
========================================= */

function Features() {
  return (
    <section className="features-section section-padding" id="features">
      <div className="section-container">
        <div className="section-heading centered">
          <span className="section-label">EXPLORE THE APPLICATION</span>

          <h2>
            Discover what
            <span> DrinkAware offers.</span>
          </h2>

          <p>
            Three core areas bring together marketplace access, interactive
            learning and reliable support information.
          </p>
        </div>

        <div className="app-features-grid">
          {/* FEATURE 1: MARKETPLACE */}

          <article className="app-feature-card">
            <div className="app-feature-image">
              <AppPhoneFrame
                src="/marketplace.png"
                alt="DrinkAware Marketplace application screen"
              />
            </div>

            <div className="app-feature-info">
              <span className="feature-number">FEATURE 01</span>

              <div className="app-feature-title">
                <div className="app-feature-mini-icon">
                  <ShoppingBag size={20} />
                </div>

                <h3>Marketplace</h3>
              </div>

              <p>
                Explore the DrinkAware Marketplace, one of the application's
                core features, designed to provide users with access to its
                marketplace experience.
              </p>

              <div className="app-feature-line" />
            </div>
          </article>

          {/* FEATURE 2: BOOZECONNECT GAMING */}

          <article className="app-feature-card">
            <div className="app-feature-image">
              <AppPhoneFrame
                src="/boozeconnect-quiz.png"
                alt="DrinkAware BoozeConnect quiz application screen"
              />
            </div>

            <div className="app-feature-info">
              <span className="feature-number">FEATURE 02</span>

              <div className="app-feature-title">
                <div className="app-feature-mini-icon">
                  <Gamepad2 size={20} />
                </div>

                <h3>BoozeConnect Gaming</h3>
              </div>

              <p>
                Learn through interactive quizzes and engaging gaming activities
                that encourage awareness and improve understanding of
                alcohol-related risks.
              </p>

              <div className="app-feature-line" />
            </div>
          </article>

          {/* FEATURE 3: HELP AND EDUCATION */}

          <article className="app-feature-card support-feature-card">
            <div className="support-feature-visual">
              <div className="support-decoration decoration-one" />
              <div className="support-decoration decoration-two" />

              <div className="support-feature-icon">
                <HeartHandshake size={58} />
              </div>

              <div className="support-feature-small-icon">
                <BookOpen size={27} />
              </div>

              <div className="support-feature-small-icon second">
                <ShieldCheck size={27} />
              </div>

              <span className="support-visual-caption">
                INFORMATION. EDUCATION. SUPPORT.
              </span>
            </div>

            <div className="app-feature-info">
              <span className="feature-number">FEATURE 03</span>

              <div className="app-feature-title">
                <div className="app-feature-mini-icon">
                  <HeartHandshake size={20} />
                </div>

                <h3>Help & Educational Resources</h3>
              </div>

              <p>
                Access educational information and discover reliable help
                services and relevant support resources.
              </p>

              <div className="app-feature-line" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   HOW IT WORKS
========================================= */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Get DrinkAware",
      description:
        "Find out where the application is available and follow the official installation instructions.",
      icon: Download,
    },
    {
      number: "02",
      title: "Open the Application",
      description:
        "Launch DrinkAware and explore the available application sections.",
      icon: Smartphone,
    },
    {
      number: "03",
      title: "Explore Information",
      description:
        "Discover educational materials, safety guidance and awareness resources.",
      icon: Search,
    },
    {
      number: "04",
      title: "Find Support",
      description:
        "Explore available support information and identify appropriate services when needed.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="how-section section-padding" id="how-it-works">
      <div className="section-container">
        <div className="section-heading centered">
          <span className="section-label">SIMPLE TO EXPLORE</span>

          <h2>
            Getting started with
            <span> DrinkAware.</span>
          </h2>

          <p>
            A simple introduction to accessing and exploring the DrinkAware
            application.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>

                <div className="step-icon">
                  <Icon size={25} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SAFETY SECTION
========================================= */

function SafetySection() {
  return (
    <section className="safety-section section-padding">
      <div className="section-container">
        <div className="safety-card">
          <div className="safety-content">
            <span className="safety-label">YOUR SAFETY MATTERS</span>

            <h2>
              When it comes to drink safety,
              <span> knowledge is important.</span>
            </h2>

            <p>
              Alcoholic drinks from unregulated or unknown sources may contain
              harmful substances. A drink that is not legally produced or
              properly labelled should be treated with caution.
            </p>

            <div className="safety-message">
              <ShieldAlert size={23} />

              <span>
                If you are unsure about the source or safety of a drink, the
                safest choice is not to consume it.
              </span>
            </div>

            <Link href="#about" className="safety-link">
              Learn about DrinkAware
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="safety-visual">
            <div className="safety-circle">
              <div className="safety-inner">
                <ShieldCheck size={85} strokeWidth={1.3} />
              </div>
            </div>

            <span className="safety-visual-text">AWARENESS IS PROTECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   DOWNLOAD SECTION
========================================= */

function DownloadSection() {
  return (
    <section className="download-section section-padding" id="download">
      <div className="section-container">
        <div className="download-card">
          <div className="download-content">
            <span className="download-label">GET STARTED</span>

            <h2>
              Take the first step towards
              <span> greater awareness.</span>
            </h2>

            <p>
              Discover how to access DrinkAware, install the application and
              begin exploring its features.
            </p>

            <div className="download-status">
              <Info size={19} />

              <span>
                Official application download information will be provided here.
              </span>
            </div>
          </div>

          <div className="download-visual">
            <div className="download-phone-icon">
              <Smartphone size={66} strokeWidth={1.2} />

              <div className="download-phone-check">
                <CheckCircle2 size={24} />
              </div>
            </div>

            <span>DRINKAWARE APPLICATION</span>

            <p>Awareness starts with one step.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FREQUENTLY ASKED QUESTIONS
========================================= */

function FAQ() {
  const questions = [
    {
      question: "What is DrinkAware?",
      answer:
        "DrinkAware is a mobile application designed to promote awareness about illicit and potentially unsafe alcoholic drinks, provide educational information and connect users with support resources.",
    },
    {
      question: "Who can use DrinkAware?",
      answer:
        "The application is intended for individuals who want to improve their understanding of alcohol-related safety risks and access relevant awareness information.",
    },
    {
      question: "How do I download DrinkAware?",
      answer:
        "Visit the Download section of this website for official installation instructions and supported platform information. Download availability will be confirmed there.",
    },
    {
      question: "Does DrinkAware provide rehabilitation support?",
      answer:
        "DrinkAware aims to provide information about relevant support organisations and rehabilitation resources. Contact the listed organisations directly to establish their available services.",
    },
    {
      question: "Can DrinkAware guarantee that a drink is safe?",
      answer:
        "No. The application provides awareness and educational information. It cannot chemically test drinks or guarantee that any alcoholic drink is safe to consume.",
    },
  ];

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="section-container">
        <div className="faq-grid">
          <div className="faq-heading">
            <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>

            <h2>
              Got questions?
              <span> We have answers.</span>
            </h2>

            <p>
              Find helpful information about DrinkAware, its purpose and how to
              get started.
            </p>

            <div className="faq-help">
              <MessageCircle size={22} />

              <span>Still have questions? Contact our team.</span>
            </div>
          </div>

          <div className="faq-list">
            {questions.map((item, index) => (
              <details className="faq-item" key={index}>
                <summary>
                  {item.question}
                  <ChevronDown size={20} />
                </summary>

                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FOOTER
========================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand footer-logo">
              <div className="brand-icon">
                <ShieldCheck size={24} />
              </div>

              <span>
                Drink<span className="brand-highlight">Aware</span>
              </span>
            </Link>

            <p>
              Promoting awareness, encouraging informed decisions and connecting
              people to support.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="#home">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="#why-drinkaware">Why DrinkAware</Link>
            <Link href="/features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <Link href="#download">Get the App</Link>
            <Link href="#faq">FAQs</Link>
            <Link href="/features">Safety Awareness</Link>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <Link href="/about">Our Purpose</Link>
            <Link href="#download">Installation Guide</Link>
            <Link href="#faq">Support Information</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DrinkAware. All rights reserved.</p>

          <span>
            Knowledge. Awareness. Informed Choices. Powered by Figoh
            Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================
   MAIN HOMEPAGE
========================================= */

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <WhyDrinkAware />

      <Features />

      <HowItWorks />

      <SafetySection />

      <DownloadSection />

      <FAQ />

      <Footer />
    </main>
  );
}
