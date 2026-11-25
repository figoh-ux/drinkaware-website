"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqCategories = [
  {
    title: "General Questions",
    icon: "ℹ️",
    questions: [
      {
        question: "What is DrinkAware?",
        answer:
          "DrinkAware is an educational and awareness platform developed by Enactus CUT Zimbabwe. It promotes informed decisions about alcohol consumption, raises awareness about illicit and unsafe alcoholic drinks, and connects people with reliable information and support services.",
      },
      {
        question: "What is the main purpose of DrinkAware?",
        answer:
          "Our main purpose is to educate communities about the dangers associated with illicit and unsafe alcoholic beverages, encourage responsible decision-making, and make reliable educational and support resources more accessible.",
      },
      {
        question: "Who can use DrinkAware?",
        answer:
          "DrinkAware is designed for individuals seeking information about alcohol safety, awareness and available support resources. Some application features may have age restrictions.",
      },
      {
        question: "Is DrinkAware a rehabilitation centre?",
        answer:
          "No. DrinkAware is an awareness and information platform. It helps users access educational information and discover available support services. It does not replace professional medical care or rehabilitation services.",
      },
      {
        question: "Who developed DrinkAware?",
        answer:
          "DrinkAware is an Enactus project associated with Chinhoyi University of Technology (CUT), Zimbabwe. It aims to use innovation and community engagement to promote alcohol awareness and safer communities.",
      },
    ],
  },

  {
    title: "Application Features",
    icon: "📱",
    questions: [
      {
        question: "What features are available in DrinkAware?",
        answer:
          "DrinkAware has six key features: Marketplace, Learning, BoozeConnect Quiz, Stories, Help & Support, and Anonymous Reporting. Together, these features promote awareness, education, informed decisions and access to useful support resources.",
      },
      {
        question: "What is the Marketplace?",
        answer:
          "The Marketplace is a dedicated section within the DrinkAware application. Users can explore the available marketplace interface and its features.",
      },
      {
        question: "What is the Learning feature?",
        answer:
          "The Learning feature provides educational information about alcohol and substance abuse. It helps users improve their understanding of associated risks and make informed decisions.",
      },
      {
        question: "What is BoozeConnect?",
        answer:
          "BoozeConnect is the interactive gaming and quiz section of DrinkAware. It provides an engaging way for users to participate in quizzes while learning about alcohol awareness and safety.",
      },
      {
        question: "What is the Stories feature?",
        answer:
          "The Stories feature shares real-life experiences that encourage reflection, awareness and informed choices.",
      },
      {
        question: "Can I access help through DrinkAware?",
        answer:
          "Yes. The Help & Support feature provides access to information about reliable help services, professional assistance and available rehabilitation resources.",
      },
      {
        question: "Can I report suspected illegal brewing?",
        answer:
          "Yes. DrinkAware has an Anonymous Reporting feature that allows users to report suspected illegal brewing activities. Reports submitted through the application are sent to the Zimbabwe Republic Police (ZRP) for appropriate follow-up.",
      },
    ],
  },

  {
    title: "Alcohol Safety & Awareness",
    icon: "🛡️",
    questions: [
      {
        question: "What is illicit alcohol?",
        answer:
          "Illicit alcohol refers to alcoholic beverages that are illegally produced, distributed, sold or otherwise do not comply with applicable laws and regulations.",
      },
      {
        question: "Why is consuming illicit alcohol dangerous?",
        answer:
          "Illicit alcoholic beverages may contain harmful substances, including toxic chemicals, or may be produced under unsafe conditions. Consumption can cause serious illness, permanent injury or even death.",
      },
      {
        question: "How can I identify potentially unsafe alcohol?",
        answer:
          "Warning signs may include missing or suspicious labels, broken seals, unusual packaging, unverified sources and products that do not comply with applicable requirements. However, appearance alone cannot establish whether a drink is safe.",
      },
      {
        question: "What should I do if I suspect a drink is unsafe?",
        answer:
          "Do not consume it. Avoid tasting or testing the drink yourself. If someone has consumed a potentially contaminated alcoholic beverage, seek urgent medical attention, even if symptoms have not yet appeared.",
      },
      {
        question: "Can I determine whether alcohol is safe by looking at it?",
        answer:
          "No. Appearance, smell or packaging alone cannot guarantee that an alcoholic beverage is safe. If you are uncertain about its source or legality, the safest option is not to drink it.",
      },
    ],
  },

  {
    title: "Support & Assistance",
    icon: "🤝",
    questions: [
      {
        question: "Where can I get additional assistance?",
        answer:
          "You can explore the Help & Support section within DrinkAware to find information about available support services and rehabilitation resources. You can also contact our team through WhatsApp for general enquiries about the platform.",
      },
      {
        question: "Can I contact the DrinkAware team directly?",
        answer:
          "Yes! You can contact our team through the WhatsApp button on this page. We welcome questions, suggestions, feedback and enquiries about DrinkAware.",
      },
      {
        question: "Can I report a problem with the application?",
        answer:
          "Yes. Contact our team through WhatsApp and explain the problem you are experiencing. Providing details about the issue will help us understand your concern.",
      },
      {
        question: "Does DrinkAware provide medical treatment?",
        answer:
          "No. DrinkAware provides educational information and helps users discover support resources. It does not diagnose medical conditions, provide emergency treatment or replace qualified healthcare professionals.",
      },
    ],
  },

  {
    title: "Anonymous Reporting",
    icon: "📢",
    questions: [
      {
        question: "How does Anonymous Reporting work?",
        answer:
          "The Anonymous Reporting feature allows users to submit reports about suspected illegal brewing activities through the DrinkAware application.",
      },
      {
        question: "Who receives the reports?",
        answer:
          "Reports submitted through the DrinkAware application's Anonymous Reporting feature are sent to the Zimbabwe Republic Police (ZRP) for appropriate follow-up.",
      },
      {
        question: "Does DrinkAware investigate reported activities?",
        answer:
          "No. DrinkAware provides a reporting channel, but it does not conduct police investigations. The relevant authorities are responsible for assessing reports and deciding on any appropriate action.",
      },
      {
        question: "Is my report completely anonymous?",
        answer:
          "The feature is designed to support anonymous reporting. However, users should review the DrinkAware Privacy Policy for information about how submitted information is handled. Avoid including personal identifying information if you do not wish to disclose it.",
      },
      {
        question: "What should I include in a report?",
        answer:
          "Provide clear and truthful information about the suspected activity. Do not make false accusations, attempt to investigate suspected illegal activities yourself or put your safety at risk.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("General Questions");

  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "263788710818";

  const whatsappMessage =
    "Hello DrinkAware Team! I visited your website and would like to make an enquiry.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const selectedCategory = faqCategories.find(
    (category) => category.title === activeCategory,
  );

  return (
    <>
      {/* NAVIGATION BAR */}

      <header className="faq-navbar">
        <div className="faq-nav-container">
          <Link href="/" className="faq-logo" aria-label="DrinkAware homepage">
            <Image
              src="/drinkaware-logo.png"
              alt="DrinkAware Logo"
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

          <nav className="faq-nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>

            <Link href="/faqs" className="active">
              FAQs
            </Link>

            <Link href="/download" className="faq-nav-contact">
              Get App
            </Link>
          </nav>

          <button
            className="faq-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="faq-mobile-menu">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>

            <Link href="/features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>

            <Link href="/faqs" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </Link>

            <Link href="/download" onClick={() => setMobileMenuOpen(false)}>
              Get App
            </Link>
          </nav>
        )}
      </header>

      <main className="faq-page">
        {/* HERO SECTION */}

        <section className="faq-hero">
          <div className="faq-hero-content">
            <span className="hero-label">HELP CENTRE</span>

            <h1>
              Frequently Asked
              <span> Questions</span>
            </h1>

            <p>
              Everything you need to know about DrinkAware, our features,
              alcohol awareness and how to access support.
            </p>

            <a href="#faq-content" className="hero-button">
              Explore FAQs <span>↓</span>
            </a>
          </div>

          <div className="hero-decoration">
            <div className="decoration-circle circle-one"></div>
            <div className="decoration-circle circle-two"></div>

            <div className="hero-icon">
              <span>?</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="faq-intro">
          <span className="section-label">WE ARE HERE TO HELP</span>

          <h2>Got Questions? We've Got Answers.</h2>

          <p>
            Explore our frequently asked questions to understand how DrinkAware
            works and how we can help you make informed decisions.
          </p>
        </section>

        {/* FAQ CONTENT */}

        <section className="faq-content" id="faq-content">
          <div className="faq-container">
            {/* CATEGORY SIDEBAR */}

            <aside className="faq-sidebar">
              <h3>Browse Topics</h3>

              <div className="category-list">
                {faqCategories.map((category) => (
                  <button
                    key={category.title}
                    type="button"
                    className={`category-button ${
                      activeCategory === category.title ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(category.title);
                      setOpenQuestion(0);
                    }}
                    aria-pressed={activeCategory === category.title}
                  >
                    <span className="category-icon">{category.icon}</span>

                    <span>{category.title}</span>

                    <span className="category-arrow">›</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* QUESTIONS */}

            <div className="faq-questions">
              <div className="questions-heading">
                <span className="questions-icon">{selectedCategory?.icon}</span>

                <div>
                  <h3>{selectedCategory?.title}</h3>

                  <p>Find answers to common questions about this topic.</p>
                </div>
              </div>

              <div className="questions-list">
                {selectedCategory?.questions.map((item, index) => (
                  <div
                    className={`faq-item ${
                      openQuestion === index ? "expanded" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        setOpenQuestion(openQuestion === index ? null : index)
                      }
                      aria-expanded={openQuestion === index}
                    >
                      <span>{item.question}</span>

                      <span className="faq-toggle" aria-hidden="true">
                        {openQuestion === index ? "−" : "+"}
                      </span>
                    </button>

                    {openQuestion === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY MESSAGE */}

        <section className="safety-section">
          <div className="safety-content">
            <div className="safety-icon">🛡️</div>

            <div>
              <span>YOUR SAFETY MATTERS</span>

              <h2>Make Informed Choices. Stay Safe.</h2>

              <p>
                If a drink is not legally produced or properly labelled, the
                safest option is not to drink it. Your health and safety should
                always come first.
              </p>
            </div>
          </div>
        </section>

        {/* WHATSAPP CONTACT */}

        <section className="contact-section">
          <div className="contact-card">
            <div className="contact-icon">💬</div>

            <span className="contact-label">NEED MORE HELP?</span>

            <h2>Still Have Questions?</h2>

            <p>
              Couldn't find the answer you were looking for? Our team would love
              to hear from you. Send us a message on WhatsApp and we'll be happy
              to assist with your enquiry.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L.05 24l6.28-1.65a11.94 11.94 0 005.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43zM12.07 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 01-1.51-5.28c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 017 2.9 9.83 9.83 0 012.9 7c-.01 5.45-4.45 9.89-9.91 9.89zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
              Chat with Us on WhatsApp
            </a>

            <span className="contact-note">
              We welcome your questions, feedback and suggestions.
            </span>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="drinkaware-footer">
        <div className="footer-container">
          {/* BRAND */}

          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
              aria-label="DrinkAware homepage"
            >
              <Image
                src="/drinkaware-logo.png"
                alt="DrinkAware Logo"
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
              Promoting alcohol awareness, encouraging informed decisions and
              connecting communities with reliable information and support.
            </p>
          </div>

          {/* NAVIGATION */}

          <div className="footer-column">
            <h3>Explore</h3>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/download">Get App</Link>
          </div>

          {/* LEGAL */}

          <div className="footer-column">
            <h3>Legal</h3>

            <Link href="/privacy">Privacy Policy</Link>

            <Link href="/terms">Terms & Conditions</Link>
          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <p>Have questions, feedback or suggestions?</p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <p>© 2026 DrinkAware. All rights reserved.</p>

          <p>
            Making informed choices for a safer community. Powered by Figoh
            Technologies.
          </p>
        </div>
      </footer>
    </>
  );
}
