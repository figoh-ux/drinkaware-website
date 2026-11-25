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
  MessageCircle,
  Wifi,
  HardDrive,
  RefreshCw,
  Smartphone as PhoneIcon,
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

  const installationSteps = [
    {
      number: "01",
      title: "Open Google Play Store",
      description:
        "Unlock your Android smartphone and open the Google Play Store application.",
    },
    {
      number: "02",
      title: "Search for DrinkAware",
      description:
        "Tap the search bar and type DrinkAware to find the official application.",
    },
    {
      number: "03",
      title: "Select the official application",
      description:
        "Check the application name and developer information to make sure you have selected the official DrinkAware app.",
    },
    {
      number: "04",
      title: "Tap Install",
      description:
        "Select the Install button and wait for Google Play Store to download and install the application.",
    },
    {
      number: "05",
      title: "Open DrinkAware",
      description:
        "Once installation is complete, tap Open or locate the DrinkAware icon on your phone.",
    },
    {
      number: "06",
      title: "Start exploring",
      description:
        "Follow the introductory instructions and explore the available DrinkAware features.",
    },
  ];

  const troubleshooting = [
    {
      icon: Wifi,
      title: "Download problems",
      description:
        "Check your internet connection and try downloading the application again.",
    },
    {
      icon: RefreshCw,
      title: "Slow downloads",
      description:
        "Switch to a more stable internet connection and retry the download.",
    },
    {
      icon: HardDrive,
      title: "Insufficient storage",
      description:
        "Check your phone's available storage and free up space if necessary.",
    },
    {
      icon: PhoneIcon,
      title: "Installation problems",
      description:
        "Check whether your Android device meets the application's requirements.",
    },
    {
      icon: Smartphone,
      title: "Application won't open",
      description:
        "Restart your phone and try opening DrinkAware again. Check whether an application update is available.",
    },
    {
      icon: Info,
      title: "Application errors",
      description:
        "Check your internet connection. If the problem continues, contact our development team.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello Enactus Development Team. I need assistance with the DrinkAware application. My enquiry is:",
  );

  const whatsappLink = `https://wa.me/263788710818?text=${whatsappMessage}`;

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
              DrinkAware will be available through Google Play Store once the
              application has completed the approval process.
            </p>
          </div>

          <div className="download-availability-card">
            <div className="availability-icon">
              <Smartphone size={34} />
            </div>

            <div className="availability-content">
              <span className="availability-badge">
                <Info size={15} />
                GOOGLE PLAY APPROVAL PENDING
              </span>

              <h3>Coming soon to Google Play Store.</h3>

              <p>
                DrinkAware is being prepared for release on Google Play Store.
                The official download link will be published on this page once
                the application has been approved and made publicly available.
              </p>

              <div className="availability-note">
                <ShieldCheck size={20} />

                <span>
                  Always download DrinkAware from its official distribution
                  source.
                </span>
              </div>

              <p style={{ marginTop: "18px", fontWeight: 600 }}>
                Platform: Android
              </p>

              <p style={{ marginTop: "6px" }}>iOS availability: Coming soon.</p>
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

      {/* ANDROID INSTALLATION GUIDE */}

      <section className="download-install-section">
        <div className="download-container">
          <div className="download-section-heading">
            <span className="download-label">ANDROID INSTALLATION GUIDE</span>

            <h2>
              How to install
              <span> DrinkAware.</span>
            </h2>

            <p>
              Follow these simple steps to download and install DrinkAware
              directly from Google Play Store once the application is publicly
              available.
            </p>
          </div>

          <div className="download-install-card">
            <div className="install-icon">
              <Download size={35} />
            </div>

            <div className="install-content">
              <span className="download-label">STEP-BY-STEP GUIDE</span>

              <h2>Getting started is simple.</h2>

              <p>
                You will be able to install DrinkAware on your Android
                smartphone by following these steps:
              </p>

              <div
                className="install-points"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gap: "22px",
                  marginTop: "25px",
                }}
              >
                {installationSteps.map((step) => (
                  <div
                    key={step.number}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3 style={{ marginBottom: "7px" }}>{step.title}</h3>

                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="availability-note" style={{ marginTop: "25px" }}>
                <Info size={20} />

                <span>
                  These instructions will become applicable once DrinkAware is
                  approved and publicly available on Google Play Store.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVICE REQUIREMENTS */}

      <section className="download-benefits-section">
        <div className="download-container">
          <div className="download-section-heading">
            <span className="download-label">DEVICE INFORMATION</span>

            <h2>
              What you need
              <span> to get started.</span>
            </h2>

            <p>
              Make sure your device is ready before installing the DrinkAware
              application.
            </p>
          </div>

          <div className="download-benefits-grid">
            <article className="download-benefit-card">
              <div className="download-benefit-icon">
                <Smartphone size={25} />
              </div>

              <h3>Android Smartphone</h3>

              <p>
                DrinkAware currently supports Android smartphones. The minimum
                supported Android version will be confirmed before release.
              </p>
            </article>

            <article className="download-benefit-card">
              <div className="download-benefit-icon">
                <Download size={25} />
              </div>

              <h3>Google Play Store</h3>

              <p>
                A Google account and access to Google Play Store are required to
                download the application through the official store.
              </p>
            </article>

            <article className="download-benefit-card">
              <div className="download-benefit-icon">
                <Info size={25} />
              </div>

              <h3>Internet Connection</h3>

              <p>
                An internet connection is required for online application
                features and access to online resources.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING AND TECHNICAL SUPPORT */}

      <section className="download-install-section">
        <div className="download-container">
          <div className="download-section-heading">
            <span className="download-label">TECHNICAL SUPPORT</span>

            <h2>
              Need help with
              <span> DrinkAware?</span>
            </h2>

            <p>
              Find solutions to common installation and application problems. If
              you still need assistance, our Enactus Development Team is
              available to help.
            </p>
          </div>

          {/* COMMON PROBLEMS */}

          <div className="download-install-card">
            <div className="install-icon">
              <Info size={35} />
            </div>

            <div className="install-content">
              <span className="download-label">
                COMMON PROBLEMS & SOLUTIONS
              </span>

              <h2>Quick troubleshooting guide.</h2>

              <p>
                If you experience difficulties while downloading, installing or
                using DrinkAware, try the following solutions.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gap: "25px",
                  marginTop: "28px",
                }}
              >
                {troubleshooting.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                      }}
                    >
                      <div className="download-benefit-icon">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* WHATSAPP DEVELOPMENT TEAM SUPPORT */}

          <div className="download-install-card" style={{ marginTop: "30px" }}>
            <div className="install-icon">
              <Headset size={35} />
            </div>

            <div className="install-content">
              <span className="download-label">ENACTUS DEVELOPMENT TEAM</span>

              <h2>Still need assistance?</h2>

              <p>
                Our Enactus Development Team is available to assist with
                DrinkAware-related enquiries. Whether you are experiencing
                installation difficulties, technical problems, application
                errors or need clarification about any of the features, we would
                be happy to hear from you.
              </p>

              <div className="install-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Application installation assistance</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Technical problems and application errors</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Questions about application features</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Bug reports and suggestions</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>General DrinkAware enquiries</span>
                </div>
              </div>

              <div style={{ marginTop: "28px" }}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-primary-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <MessageCircle size={20} />
                  Contact the Development Team on WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>

              <p style={{ marginTop: "16px" }}>WhatsApp: +263 788 710 818</p>

              <p style={{ marginTop: "8px" }}>
                When you tap the button, WhatsApp will open with a prepared
                enquiry message. You can add details about your problem before
                sending it to our team.
              </p>
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
