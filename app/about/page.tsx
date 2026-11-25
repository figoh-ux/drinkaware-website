import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Target,
  Eye,
  Lightbulb,
  ShoppingBag,
  Gamepad2,
  GraduationCap,
  CheckCircle2,
  MessageSquareText,
  Headset,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DrinkAware",
  description:
    "Discover the purpose, mission, vision and six application features behind DrinkAware, an awareness-focused mobile application developed through Enactus at Chinhoyi University of Technology.",
};

const objectives = [
  {
    icon: ShieldCheck,
    title: "Promote Awareness",
    description:
      "Encourage awareness of illicit and potentially unsafe alcoholic drinks and the importance of making informed decisions.",
  },
  {
    icon: BookOpen,
    title: "Provide Education",
    description:
      "Make relevant educational information accessible so that people can better understand alcohol-related risks.",
  },
  {
    icon: HeartHandshake,
    title: "Connect People to Support",
    description:
      "Make information about relevant help services, professional assistance and rehabilitation resources easier to discover.",
  },
];

const features = [
  {
    icon: ShoppingBag,
    number: "01",
    title: "Marketplace",
    description:
      "Explore the Marketplace section within the DrinkAware application as part of the wider digital experience.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Learning",
    description:
      "Access educational information about alcohol and substance abuse to improve understanding and encourage informed decisions.",
  },
  {
    icon: Gamepad2,
    number: "03",
    title: "BoozeConnect Gaming",
    description:
      "Engage with interactive games and quizzes designed to test knowledge, reinforce learning and make awareness more engaging.",
  },
  {
    icon: MessageSquareText,
    number: "04",
    title: "Stories",
    description:
      "Explore real-life experiences that encourage reflection, share different perspectives and promote informed choices.",
  },
  {
    icon: Headset,
    number: "05",
    title: "Help & Support",
    description:
      "Discover relevant support contacts, professional assistance and rehabilitation resources for individuals who may need guidance.",
  },
  {
    icon: ShieldAlert,
    number: "06",
    title: "Anonymous Reporting",
    description:
      "Report suspected illegal brewing activities through the anonymous reporting feature. Reports submitted through the application are sent to the Zimbabwe Republic Police (ZRP) for appropriate follow-up.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* NAVIGATION */}

      <header className="about-navbar">
        <div className="about-nav-container">
          <Link href="/" className="about-brand">
            <Image
              src="/drinkaware-logo.png"
              alt="DrinkAware official logo"
              width={180}
              height={110}
              priority
              style={{
                width: "170px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          <nav className="about-nav-links">
            <Link href="/">Home</Link>

            <Link href="/about" className="active">
              About
            </Link>

            <Link href="/features">Features</Link>

            <Link href="/faqs">FAQs</Link>
          </nav>

          <Link href="/download" className="about-nav-button">
            Explore the App <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-glow about-glow-one" />
        <div className="about-hero-glow about-glow-two" />

        <div className="about-container about-hero-content">
          <div className="about-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <span className="about-eyebrow">GET TO KNOW DRINKAWARE</span>

          <h1>
            Awareness Today.
            <br />
            <span>Safer Choices Tomorrow.</span>
          </h1>

          <p>
            DrinkAware is an awareness-focused mobile application designed to
            promote education about illicit and potentially unsafe alcoholic
            drinks while making information, interactive experiences and support
            resources easier to access.
          </p>

          <div className="about-hero-actions">
            <Link href="#our-story" className="about-primary-button">
              Discover Our Story <ArrowRight size={17} />
            </Link>

            <Link href="/features" className="about-outline-button">
              Explore App Features
            </Link>
          </div>

          <div className="about-hero-note">
            <ShieldCheck size={19} />
            <span>Awareness. Knowledge. Informed Decisions.</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}

      <section className="about-story section-padding" id="our-story">
        <div className="about-container about-story-grid">
          <div className="about-story-visual">
            <div className="story-main-card">
              <div className="story-icon">
                <ShieldCheck size={42} />
              </div>

              <span className="story-small-label">
                THE DRINKAWARE INITIATIVE
              </span>

              <h3>
                Knowledge is an important step towards making informed choices.
              </h3>

              <div className="story-decoration">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="story-floating-card">
              <BookOpen size={23} />

              <div>
                <strong>Learn</strong>
                <span>Access educational information</span>
              </div>
            </div>
          </div>

          <div className="about-story-text">
            <span className="about-section-label">OUR STORY</span>

            <h2>
              Why <span>DrinkAware?</span>
            </h2>

            <p>
              Illicit and potentially unsafe alcoholic drinks present important
              awareness and public education challenges. People need access to
              relevant information to better understand these risks and make
              informed decisions.
            </p>

            <p>
              DrinkAware was developed as a mobile application initiative to
              help address this information gap. It brings together educational
              content, interactive learning, real-life stories, access to
              relevant support resources and anonymous reporting in one
              platform.
            </p>

            <p>
              Rather than encouraging alcohol consumption, DrinkAware promotes
              awareness, responsible decision-making and access to information
              that can help individuals and communities.
            </p>

            <Link href="/features" className="about-text-link">
              Discover what the app offers <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}

      <section className="about-purpose">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">OUR PURPOSE</span>

            <h2>
              What Drives <span>Us</span>
            </h2>

            <p>
              Our purpose is built around awareness, accessible knowledge and
              meaningful support.
            </p>
          </div>

          <div className="purpose-grid">
            <article className="purpose-card">
              <div className="purpose-icon">
                <Target size={29} />
              </div>

              <span>OUR MISSION</span>

              <h3>Making Awareness Accessible</h3>

              <p>
                To promote awareness and education about illicit and potentially
                unsafe alcoholic drinks while helping people discover relevant
                support services and resources.
              </p>
            </article>

            <article className="purpose-card purpose-card-gold">
              <div className="purpose-icon">
                <Eye size={29} />
              </div>

              <span>OUR VISION</span>

              <h3>A Better-Informed Community</h3>

              <p>
                To contribute towards communities where people have access to
                relevant information, understand potential risks and are better
                equipped to make informed choices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}

      <section className="about-objectives section-padding">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">WHAT WE AIM TO ACHIEVE</span>

            <h2>
              Our Key <span>Objectives</span>
            </h2>

            <p>
              Three important areas guide the development and purpose of the
              DrinkAware application.
            </p>
          </div>

          <div className="objectives-grid">
            {objectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="objective-card" key={item.title}>
                  <div className="objective-number">0{index + 1}</div>

                  <div className="objective-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION FEATURES */}

      <section className="about-app-features" id="app-features">
        <div className="about-container">
          <div className="about-feature-heading">
            <div>
              <span className="about-section-label">
                THE MOBILE APPLICATION
              </span>

              <h2>
                One Application.
                <br />
                <span>Six Key Features.</span>
              </h2>
            </div>

            <p>
              DrinkAware brings together six features that support education,
              interactive learning, real-life experiences, access to support and
              community awareness.
            </p>
          </div>

          <div className="about-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="about-feature-card" key={feature.number}>
                  <div className="about-feature-top">
                    <span>{feature.number}</span>
                    <Icon size={27} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <Link href="/features">
                    Explore feature <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="about-all-features-link">
            <Link href="/features" className="about-primary-button">
              Discover All Six Features <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ENACTUS CUT */}

      <section className="about-enactus section-padding">
        <div className="about-container enactus-grid">
          <div className="enactus-icon">
            <GraduationCap size={55} />
            <span>STUDENT INNOVATION</span>
          </div>

          <div className="enactus-content">
            <span className="about-section-label">
              THE INITIATIVE BEHIND THE PROJECT
            </span>

            <h2>
              Enactus <span>Chinhoyi University of Technology</span>
            </h2>

            <p>
              DrinkAware is part of the student innovation work associated with
              Enactus at Chinhoyi University of Technology (CUT).
            </p>

            <p>
              Enactus provides a platform for students to apply entrepreneurial
              thinking and innovation to challenges affecting communities.
            </p>

            <p>
              Through DrinkAware, the project focuses on using technology to
              support awareness, education and access to relevant help
              resources.
            </p>

            <Link href="/" className="enactus-link">
              Visit DrinkAware Home <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="about-values">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">WHAT WE STAND FOR</span>

            <h2>
              Our Guiding <span>Values</span>
            </h2>
          </div>

          <div className="values-grid">
            {[
              "Awareness",
              "Education",
              "Accessibility",
              "Community Support",
            ].map((value) => (
              <div className="value-item" key={value}>
                <CheckCircle2 size={21} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="about-cta">
        <div className="about-container about-cta-content">
          <div className="cta-icon">
            <Lightbulb size={33} />
          </div>

          <span>START WITH AWARENESS</span>

          <h2>
            Knowledge Can Make
            <br />A Difference.
          </h2>

          <p>
            Discover the DrinkAware application and explore its educational
            features, interactive experiences, real-life stories and support
            resources.
          </p>

          <Link href="/features" className="about-primary-button">
            Explore DrinkAware <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="about-footer">
        <div className="about-container about-footer-main">
          <div className="about-footer-brand">
            <Link href="/" className="about-footer-logo">
              <Image
                src="/drinkaware-logo.png"
                alt="DrinkAware official logo"
                width={170}
                height={100}
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>

            <p>
              Awareness, education and access to relevant support resources.
            </p>
          </div>

          <div className="about-footer-column">
            <h4>Explore</h4>

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/features">App Features</Link>
          </div>

          <div className="about-footer-column">
            <h4>Discover</h4>

            <Link href="/faqs">FAQs</Link>
            <Link href="/download">Get the App</Link>
            <Link href="/features">Safety Awareness</Link>
          </div>
        </div>

        <div className="about-container about-footer-bottom">
          <p>© 2026 DrinkAware. All rights reserved.</p>

          <p>Powered by Figoh Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
