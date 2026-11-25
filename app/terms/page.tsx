import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  BookOpen,
  Gamepad2,
  HeartHandshake,
  FileText,
  Store,
  AlertTriangle,
  Scale,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | DrinkAware",
  description:
    "Read the Terms and Conditions governing the use of the DrinkAware website and mobile application.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link href="/" className="legal-brand">
            <ShieldCheck size={30} />
            <span>DrinkAware</span>
          </Link>

          <Link href="/" className="legal-back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-label">LEGAL INFORMATION</span>
          <h1>Terms and Conditions</h1>
          <p>
            These terms explain the rules and responsibilities that apply when
            using the DrinkAware website and mobile application.
          </p>

          <div className="legal-date">
            <span>Effective Date: 25 November 2026</span>
            <span>Last Updated: 25 November 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content">
        <div className="legal-card">
          <div className="legal-intro">
            <ShieldCheck size={28} />
            <div>
              <h2>Welcome to DrinkAware</h2>
              <p>
                Please read these Terms and Conditions carefully before using
                DrinkAware. By accessing or using our platform, you acknowledge
                that you have read and understood these terms and agree to
                follow them.
              </p>
            </div>
          </div>

          {/* 1 */}
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              DrinkAware is an awareness and educational initiative associated
              with Enactus at Chinhoyi University of Technology (CUT), Zimbabwe.
              The platform aims to educate communities about alcohol-related
              risks, unsafe and illicitly produced alcoholic beverages, and the
              importance of making informed decisions.
            </p>
            <p>
              These Terms and Conditions govern your access to and use of the
              DrinkAware website and mobile application. If you do not agree
              with these terms, you should discontinue using the platform.
            </p>
          </section>

          {/* 2 */}
          <section className="legal-section">
            <h2>2. Eligibility to Use DrinkAware</h2>
            <p>
              DrinkAware is intended for individuals seeking educational
              information, awareness resources and access to support services.
            </p>
            <ul>
              <li>
                Users should provide accurate information whenever information
                is requested.
              </li>
              <li>Users must access and use the platform responsibly.</li>
              <li>
                Individuals under the age of 18 should use the platform with
                appropriate guidance from a parent or guardian.
              </li>
              <li>
                Users must not use DrinkAware for unlawful or harmful
                activities.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="legal-section">
            <h2>3. Purpose of DrinkAware</h2>
            <p>
              DrinkAware aims to promote awareness, education and informed
              decision-making through the following activities:
            </p>
            <ul>
              <li>Educating users about alcohol and substance abuse.</li>
              <li>
                Raising awareness about the dangers of illicit and unsafe
                alcoholic beverages.
              </li>
              <li>Encouraging informed and responsible choices.</li>
              <li>
                Providing information about rehabilitation centres and support
                services.
              </li>
              <li>
                Providing a channel for reporting suspected illegal brewing
                activities.
              </li>
              <li>
                Promoting community awareness through interactive educational
                activities.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section className="legal-section">
            <h2>4. Use of DrinkAware Features</h2>
            <p>
              DrinkAware provides several features designed to support learning,
              awareness and community engagement. Users agree to use these
              features responsibly.
            </p>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <BookOpen size={21} />
                <h3>A. Learning</h3>
              </div>
              <p>
                The Learning section provides educational information about
                alcohol, substance abuse and related health and social risks.
                This information is intended for awareness and educational
                purposes and should not replace professional medical advice.
              </p>
            </div>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <Gamepad2 size={21} />
                <h3>B. BoozeConnect – Quizzes and Games</h3>
              </div>
              <p>
                BoozeConnect provides interactive quizzes and educational games
                intended to reinforce knowledge and encourage learning. Users
                must participate honestly and must not attempt to manipulate or
                misuse the feature.
              </p>
            </div>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <HeartHandshake size={21} />
                <h3>C. Stories</h3>
              </div>
              <p>
                The Stories section shares experiences intended to encourage
                reflection, awareness and informed choices. Users must respect
                the privacy and dignity of individuals whose experiences are
                shared. Stories must not be reproduced or distributed without
                appropriate permission.
              </p>
            </div>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <HeartHandshake size={21} />
                <h3>D. Help and Support</h3>
              </div>
              <p>
                DrinkAware provides information about rehabilitation centres,
                support services and other sources of assistance. Users are
                encouraged to contact qualified professionals when they require
                medical, psychological or rehabilitation support.
              </p>
              <p>
                DrinkAware does not guarantee the availability, quality or
                outcome of services provided by independent organisations.
              </p>
            </div>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <AlertTriangle size={21} />
                <h3>E. Anonymous Reporting</h3>
              </div>
              <p>
                The Anonymous Reporting feature allows users to submit
                information about suspected illegal brewing activities. Reports
                submitted through this feature are sent to the Zimbabwe Republic
                Police (ZRP) for appropriate follow-up.
              </p>
              <ul>
                <li>Users must submit reports honestly and in good faith.</li>
                <li>
                  Reports must contain truthful and relevant information to the
                  best of the user's knowledge.
                </li>
                <li>
                  Users must not submit deliberately false, misleading,
                  malicious or fabricated reports.
                </li>
                <li>
                  Users should avoid including unnecessary personal information
                  in their reports.
                </li>
                <li>
                  Submission of a report does not guarantee an investigation or
                  a particular outcome.
                </li>
              </ul>
              <p>
                Although the feature is designed to support anonymous reporting,
                DrinkAware cannot guarantee absolute anonymity in every
                circumstance. Users should avoid including identifying details
                unless necessary.
              </p>
              <p>
                DrinkAware does not investigate reported cases or determine
                whether an offence has occurred. The ZRP is responsible for
                deciding what action, if any, should follow a report.
              </p>
            </div>

            <div className="legal-feature">
              <div className="legal-feature-heading">
                <Store size={21} />
                <h3>F. Marketplace</h3>
              </div>
              <p>
                Users must use the Marketplace only for its intended purposes
                and follow any instructions provided within the feature.
              </p>
              <ul>
                <li>
                  Users must provide accurate information when using Marketplace
                  functions.
                </li>
                <li>
                  Fraudulent, misleading or unlawful activities are prohibited.
                </li>
                <li>
                  Users must respect the rights and information of other
                  individuals using the feature.
                </li>
                <li>
                  Any applicable transaction or listing requirements displayed
                  within the Marketplace must be followed.
                </li>
              </ul>
            </div>
          </section>

          {/* 5 */}
          <section className="legal-section">
            <h2>5. Acceptable and Prohibited Use</h2>
            <p>
              Users agree not to misuse DrinkAware. The following activities are
              prohibited:
            </p>
            <ul>
              <li>Submitting false or deliberately misleading information.</li>
              <li>Harassing, threatening or intimidating other people.</li>
              <li>Uploading offensive, harmful or unlawful content.</li>
              <li>
                Attempting to hack, damage or interfere with the platform.
              </li>
              <li>Using the platform to promote illegal activities.</li>
              <li>Impersonating another person or organisation.</li>
              <li>Misusing another person's private information.</li>
              <li>
                Attempting to access restricted parts of the platform without
                permission.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section className="legal-section">
            <h2>6. Health and Medical Disclaimer</h2>
            <p>
              DrinkAware provides educational and awareness information relating
              to alcohol, substance abuse and available support services.
            </p>
            <div className="legal-highlight">
              <AlertTriangle size={22} />
              <div>
                <strong>Important Health Notice</strong>
                <p>
                  DrinkAware does not provide medical diagnosis, treatment or
                  professional counselling. Information provided through the
                  platform should not be used as a substitute for advice from
                  qualified healthcare professionals.
                </p>
              </div>
            </div>
            <p>
              Anyone experiencing alcohol-related health problems or requiring
              rehabilitation support should seek assistance from qualified
              healthcare professionals or appropriate support organisations. In
              an emergency, contact the relevant emergency services.
            </p>
          </section>

          {/* 7 */}
          <section className="legal-section">
            <h2>7. Anonymous Reporting and Legal Responsibilities</h2>
            <p>
              The reporting feature is intended to help users share information
              about suspected illegal brewing activities with the relevant
              authorities.
            </p>
            <ul>
              <li>Reports should be submitted honestly and in good faith.</li>
              <li>
                Knowingly submitting false information may have legal
                consequences.
              </li>
              <li>
                Submitted reports are forwarded to the Zimbabwe Republic Police
                (ZRP).
              </li>
              <li>
                The ZRP is responsible for assessing reports and determining any
                appropriate action.
              </li>
              <li>
                DrinkAware does not guarantee arrests, investigations or
                enforcement outcomes.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section className="legal-section">
            <h2>8. Privacy and Data Protection</h2>
            <p>
              DrinkAware respects the privacy of its users. Information
              collected or processed through the platform is handled in
              accordance with the DrinkAware Privacy Policy and applicable data
              protection requirements.
            </p>
            <p>
              Information submitted through the Anonymous Reporting feature is
              sent to the Zimbabwe Republic Police (ZRP) for appropriate
              follow-up.
            </p>
            <p>
              Users are encouraged to read our Privacy Policy to understand how
              information is collected, used, shared and protected.
            </p>
            <Link href="/privacy" className="legal-inline-link">
              Read our Privacy Policy <ExternalLink size={15} />
            </Link>
          </section>

          {/* 9 */}
          <section className="legal-section">
            <h2>9. Third-Party Services and External Links</h2>
            <p>
              DrinkAware may provide links or information relating to
              rehabilitation centres, healthcare providers, support
              organisations and other external services.
            </p>
            <ul>
              <li>
                Third-party organisations operate independently of DrinkAware.
              </li>
              <li>
                DrinkAware does not control the operations or decisions of these
                organisations.
              </li>
              <li>
                Users should verify information before relying on external
                services.
              </li>
              <li>
                DrinkAware cannot guarantee the availability, quality or outcome
                of third-party services.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section className="legal-section">
            <h2>10. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the DrinkAware name, branding, website
              design and original educational materials are protected by
              applicable intellectual property laws.
            </p>
            <ul>
              <li>
                Users may access and use DrinkAware content for personal
                educational purposes.
              </li>
              <li>
                Users must not reproduce, distribute or commercially exploit
                protected content without appropriate permission.
              </li>
              <li>
                Third-party images, stories, logos and materials remain the
                property of their respective owners.
              </li>
            </ul>
          </section>

          {/* 11 */}
          <section className="legal-section">
            <h2>11. Limitation of Liability</h2>
            <p>
              DrinkAware aims to provide useful and accurate educational
              information. However, we do not guarantee that all information
              will always be complete, accurate or up to date.
            </p>
            <p>To the extent permitted by applicable law:</p>
            <ul>
              <li>
                DrinkAware is not responsible for decisions made solely on the
                basis of information provided through the platform.
              </li>
              <li>
                DrinkAware is not responsible for the actions or services of
                independent third-party organisations.
              </li>
              <li>
                DrinkAware does not guarantee uninterrupted or error-free access
                to the website or application.
              </li>
            </ul>
            <p>
              Nothing in these terms excludes liability where such exclusion is
              not permitted by applicable law.
            </p>
          </section>

          {/* 12 */}
          <section className="legal-section">
            <h2>12. Suspension or Termination of Access</h2>
            <p>
              DrinkAware may restrict or suspend access to the platform where
              necessary, including where:
            </p>
            <ul>
              <li>A user violates these Terms and Conditions.</li>
              <li>A user engages in fraudulent or harmful activities.</li>
              <li>
                A user attempts to compromise the security or operation of the
                platform.
              </li>
              <li>
                Access needs to be restricted for maintenance, security or
                technical reasons.
              </li>
            </ul>
          </section>

          {/* 13 */}
          <section className="legal-section">
            <h2>13. Changes to These Terms</h2>
            <p>
              DrinkAware may update these Terms and Conditions from time to time
              to reflect changes to the platform, its features or applicable
              requirements.
            </p>
            <p>
              Updated terms will be published on this page together with a
              revised last updated date. Where required by applicable law, users
              will be notified of significant changes.
            </p>
          </section>

          {/* 14 */}
          <section className="legal-section">
            <h2>14. Applicable Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of Zimbabwe.
              Any disputes relating to the use of DrinkAware will be handled in
              accordance with the applicable laws and legal procedures of
              Zimbabwe.
            </p>
          </section>

          {/* 15 */}
          <section className="legal-section">
            <h2>15. Contact Us</h2>
            <p>
              If you have questions, concerns or requests relating to these
              Terms and Conditions, you can contact the DrinkAware team using
              the details below.
            </p>

            <div className="legal-contact-box">
              <div>
                <span>Project</span>
                <strong>DrinkAware</strong>
              </div>
              <div>
                <span>Organisation</span>
                <strong>
                  Enactus – Chinhoyi University of Technology, Zimbabwe
                </strong>
              </div>
              <div>
                <span>WhatsApp</span>
                <strong>+263 788 710 818</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>Official DrinkAware email address to be added</strong>
              </div>
            </div>

            <a
              href="https://wa.me/263788710818?text=Hello%20DrinkAware%20Team%2C%20I%20have%20a%20question%20about%20your%20Terms%20and%20Conditions."
              target="_blank"
              rel="noopener noreferrer"
              className="legal-contact-button"
            >
              <MessageCircle size={19} />
              Contact Us on WhatsApp
            </a>
          </section>

          {/* Closing */}
          <div className="legal-closing">
            <FileText size={25} />
            <h2>Thank You for Using DrinkAware</h2>
            <p>
              Together, we can promote awareness, encourage informed decisions
              and contribute towards safer communities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="legal-footer">
        <div>
          <Link href="/">DrinkAware</Link>
          <p>Promoting awareness. Encouraging informed choices.</p>
        </div>

        <div className="legal-footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms and Conditions</Link>
        </div>

        <p className="legal-copyright">
          © 2026 DrinkAware | Enactus CUT Zimbabwe. All
          rights reserved. Powered by figoh technologies
        </p>
      </footer>
    </main>
  );
}
