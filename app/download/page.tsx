import Link from "next/link";
import Image from "next/image";

import {
  ShieldCheck,
  Smartphone,
  Download,
  BookOpen,
  Gamepad2,
  ShoppingBag,
  MessageSquareText,
  Headset,
  ShieldAlert,
  ArrowRight,
  Info,
  CheckCircle2,
  Menu,
} from "lucide-react";

/* =========================================
   NAVIGATION BAR
========================================= */

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* OFFICIAL DRINKAWARE LOGO */}

        <Link href="/" className="brand">
          <Image
            src="/drinkaware-logo.png"
            alt="DrinkAware official logo"
            width={65}
            height={65}
            priority
            style={{
              width: "65px",
              height: "65px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-nav">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/features" className="nav-link">
            Features
          </Link>

          <Link href="/faqs" className="nav-link">
            FAQs
          </Link>
        </nav>

        <Link href="/download" className="nav-cta">
          Get the App <ArrowRight size={16} />
        </Link>

        {/* MOBILE NAVIGATION */}

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu size={25} />
          </summary>

          <div className="mobile-menu-content">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/download">Get the App</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

/* =========================================
   DOWNLOAD PAGE
========================================= */

export default function DownloadPage() {
  const appFeatures = [
    {
      icon: ShoppingBag,
      title: "Marketplace",
      description: "Explore the DrinkAware Marketplace.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Access educational information and safety awareness.",
    },
    {
      icon: Gamepad2,
      title: "BoozeConnect",
      description: "Test your knowledge through interactive quizzes and games.",
    },
    {
      icon: MessageSquareText,
      title: "Stories",
      description: "Read real-life experiences and shared stories.",
    },
    {
      icon: Headset,
      title: "Help & Support",
      description: "Discover relevant support and assistance resources.",
    },
    {
      icon: ShieldAlert,
      title: "Anonymous Reporting",
      description:
        "Report suspected illegal brewing activities. Reports submitted through the application are sent to the Zimbabwe Republic Police (ZRP).",
    },
  ];

  return (
    <main className="download-page">
      {/* NAVIGATION */}

      <Navbar />

      {/* HERO SECTION */}

      <section className="download-hero">
        <div className="download-container download-hero-grid">
          <div className="download-hero-content">
            <span className="download-eyebrow">
              <Smartphone size={16} />
              THE DRINKAWARE APPLICATION
            </span>

            <h1>
              Awareness starts
              <span> in your hands.</span>
            </h1>

            <p>
              Discover DrinkAware, a mobile application designed to promote
              alcohol safety awareness, provide educational information and
              connect people with relevant support resources.
            </p>

            <div className="download-hero-buttons">
              <a href="#download-status" className="download-primary-btn">
                <Download size={19} />
                Download Information
              </a>

              <Link href="/features" className="download-secondary-btn">
                Explore Features
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="download-trust">
              <ShieldCheck size={21} />

              <span>Learn more. Stay informed. Make informed choices.</span>
            </div>
          </div>

          {/* APPLICATION IMAGE */}

          <div className="download-hero-image">
            <div className="download-image-glow" />

            <div className="download-phone-frame">
              <Image
                src="/drinkaware-app.png"
                alt="DrinkAware mobile application screenshot"
                fill
                priority
                sizes="(max-width: 768px) 75vw, 350px"
              />
            </div>

            <span className="download-image-caption">
              THE DRINKAWARE EXPERIENCE
            </span>
          </div>
        </div>
      </section>

      {/* DOWNLOAD STATUS */}

      <section className="download-status-section" id="download-status">
        <div className="download-container">
          <div className="download-section-heading">
            <span className="download-label">GET STARTED</span>

            <h2>
              Get access to
              <span> DrinkAware.</span>
            </h2>

            <p>
              Find out how to access and install the DrinkAware mobile
              application.
            </p>
          </div>

          <div className="download-availability-card">
            <div className="availability-icon">
              <Smartphone size={34} />
            </div>

            <div className="availability-content">
              <span className="availability-badge">
                <Info size={15} />
                DOWNLOAD INFORMATION
              </span>

              <h3>Official download details coming soon.</h3>

              <p>
                Official installation instructions and the verified application
                download link will be published here once availability has been
                confirmed.
              </p>

              <div className="availability-note">
                <ShieldCheck size={20} />

                <span>Always use official DrinkAware download sources.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}

      <section className="download-benefits-section">
        <div className="download-container">
          <div className="download-section-heading">
            <span className="download-label">EXPLORE THE APPLICATION</span>

            <h2>
              Everything in
              <span> one place.</span>
            </h2>

            <p>
              DrinkAware brings together six application features designed to
              encourage awareness, education and access to relevant support.
            </p>
          </div>

          <div className="download-benefits-grid">
            {appFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="download-benefit-card" key={feature.title}>
                  <div className="download-benefit-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>

          <div className="download-features-link">
            <Link href="/features">
              Discover all application features
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALLATION INFORMATION */}

      <section className="download-install-section">
        <div className="download-container">
          <div className="download-install-card">
            <div className="install-icon">
              <Download size={35} />
            </div>

            <div className="install-content">
              <span className="download-label">INSTALLATION GUIDE</span>

              <h2>Getting started will be simple.</h2>

              <p>
                Once the official application release is available, this section
                will provide step-by-step installation instructions for
                supported devices.
              </p>

              <div className="install-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Official download instructions</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Supported device information</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Installation guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}

      <section className="download-final-section">
        <div className="download-container">
          <div className="download-final-card">
            <ShieldCheck size={43} />

            <h2>
              Knowledge today.
              <br />
              Safer choices tomorrow.
            </h2>

            <p>Take a step towards greater awareness with DrinkAware.</p>

            <Link href="/about" className="download-final-btn">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
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
          {/* BRAND */}

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/drinkaware-logo.png"
                alt="DrinkAware official logo"
                width={95}
                height={95}
                style={{
                  width: "95px",
                  height: "95px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>

            <p>
              Promoting awareness, encouraging informed decisions and connecting
              people to support.
            </p>
          </div>

          {/* EXPLORE */}

          <div className="footer-column">
            <h4>Explore</h4>

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/features">Features</Link>
          </div>

          {/* RESOURCES */}

          <div className="footer-column">
            <h4>Resources</h4>

            <Link href="/download">Get the App</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/features">Safety Awareness</Link>
          </div>

          {/* INFORMATION */}

          <div className="footer-column">
            <h4>Information</h4>

            <Link href="/about">Our Purpose</Link>
            <Link href="/download">Installation Guide</Link>
            <Link href="/faqs">Support Information</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DrinkAware. All rights reserved.</p>

          <span>
            Knowledge. Awareness. Informed Choices. Powered by Figoh
            Technologies.
          </span>
        </div>
      </div>
    </footer>
  );
}
