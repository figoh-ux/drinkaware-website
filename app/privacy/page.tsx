import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  LockKeyhole,
  FileText,
  ShieldAlert,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DrinkAware",
  description:
    "Read the DrinkAware Privacy Policy to understand how information is collected, used, protected and shared, including anonymous reports sent to ZRP.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      {/* HEADER */}
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link href="/" className="brand">
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

          <Link href="/" className="legal-back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* PAGE HERO */}
      <section className="legal-hero">
        <div className="legal-hero-icon">
          <LockKeyhole size={34} />
        </div>

        <span className="section-label">YOUR PRIVACY MATTERS</span>

        <h1>
          Privacy <span>Policy</span>
        </h1>

        <p>
          Your privacy matters to us. Learn how DrinkAware handles and protects
          information when you use our website and mobile application.
        </p>

        <div className="legal-date">
          <span>Effective Date: 25 November 2026</span>
          <span>Last Updated: 25 November 2026</span>
        </div>
      </section>

      {/* PRIVACY CONTENT */}
      <section className="legal-content-section">
        <div className="legal-container">
          {/* INTRODUCTION */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <FileText size={23} />
              <h2>1. Introduction</h2>
            </div>

            <p>Welcome to DrinkAware.</p>

            <p>
              DrinkAware is a digital awareness platform developed to promote
              education, responsible decision-making and awareness about illicit
              and potentially unsafe alcoholic drinks.
            </p>

            <p>
              Our mission is to empower individuals with knowledge, encourage
              informed choices and connect people to relevant support services.
            </p>

            <p>
              We respect your privacy and are committed to protecting the
              personal information you share when using our website and mobile
              application.
            </p>

            <p>
              This Privacy Policy explains what information may be collected,
              how it is used, how it is protected and under what circumstances
              it may be shared.
            </p>
          </article>

          {/* INFORMATION COLLECTED */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <LockKeyhole size={23} />
              <h2>2. Information We Collect</h2>
            </div>

            <p>
              Depending on the features you use, DrinkAware may collect
              different types of information.
            </p>

            <h3>2.1 Personal Information</h3>

            <p>Information voluntarily provided by users may include:</p>

            <ul>
              <li>Full name or username.</li>
              <li>Email address.</li>
              <li>Phone number.</li>
              <li>Information submitted through contact and enquiry forms.</li>
              <li>Information provided when requesting assistance.</li>
            </ul>

            <p>
              We encourage users to provide only the information necessary to
              access the services they require.
            </p>

            <h3>2.2 Technical and Usage Information</h3>

            <p>
              Depending on the application's configuration, certain technical
              information may be collected, including:
            </p>

            <ul>
              <li>Device type and operating system.</li>
              <li>Application usage information.</li>
              <li>Technical error reports.</li>
              <li>Diagnostic information.</li>
              <li>Information relating to application performance.</li>
            </ul>

            <p>
              This information may be used to maintain, improve and secure the
              platform.
            </p>

            <h3>2.3 Anonymous Reporting Information</h3>

            <p>
              DrinkAware includes an Anonymous Reporting feature that allows
              users to report suspected illegal brewing activities.
            </p>

            <p>Information submitted through this feature may include:</p>

            <ul>
              <li>Details of suspected illegal brewing activities.</li>
              <li>
                Location or area where the suspected activity is taking place.
              </li>
              <li>Descriptions of reported incidents.</li>
              <li>Supporting information or evidence voluntarily submitted.</li>
            </ul>

            <div className="legal-highlight">
              <ShieldAlert size={25} />

              <div>
                <strong>Important: Anonymous Reporting</strong>

                <p>
                  Reports submitted through DrinkAware's Anonymous Reporting
                  feature are sent to the Zimbabwe Republic Police (ZRP) for
                  appropriate attention and follow-up.
                </p>
              </div>
            </div>

            <p>
              The feature is designed to support anonymous reporting. However,
              users should avoid including personally identifying information in
              their reports if they wish to remain anonymous.
            </p>

            <p>
              Complete anonymity cannot be guaranteed if identifying details are
              voluntarily provided or if technical information capable of
              identifying a user is collected by the application or its service
              providers.
            </p>
          </article>

          {/* HOW INFORMATION IS USED */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <FileText size={23} />
              <h2>3. How We Use Your Information</h2>
            </div>

            <p>Information collected through DrinkAware may be used to:</p>

            <ul>
              <li>Provide and maintain application services.</li>
              <li>Improve the user experience.</li>
              <li>Respond to enquiries and requests for assistance.</li>
              <li>Provide educational and awareness information.</li>
              <li>Support the operation of application features.</li>
              <li>Facilitate the submission of anonymous reports to ZRP.</li>
              <li>Improve application performance and security.</li>
              <li>Identify and resolve technical problems.</li>
              <li>Protect the integrity of the platform.</li>
            </ul>

            <p>
              We aim to use personal information only for appropriate purposes
              and in accordance with applicable data protection requirements.
            </p>
          </article>

          {/* FEATURE PRIVACY */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <ShieldCheck size={23} />
              <h2>4. Privacy Across DrinkAware Features</h2>
            </div>

            <p>
              DrinkAware offers six key features designed to promote awareness,
              education and access to support.
            </p>

            <h3>4.1 Learning</h3>

            <p>
              The Learning section provides educational information about
              alcohol and substance abuse. Users can access educational
              materials to improve their understanding of alcohol-related risks
              and make more informed decisions.
            </p>

            <p>
              Accessing educational content does not necessarily require users
              to provide personal information.
            </p>

            <h3>4.2 BoozeConnect – Quizzes and Games</h3>

            <p>
              BoozeConnect provides interactive quizzes and games designed to
              reinforce learning and promote awareness.
            </p>

            <p>
              Where quiz participation information is stored, it may be used to
              support the functionality of the feature and improve the learning
              experience.
            </p>

            <h3>4.3 Stories</h3>

            <p>
              The Stories section provides real-life experiences that encourage
              reflection, awareness and informed decision-making.
            </p>

            <p>
              Users should avoid sharing sensitive personal information or
              identifying details about other individuals without their
              permission.
            </p>

            <h3>4.4 Help and Support</h3>

            <p>
              The Help and Support section provides information about relevant
              assistance services, rehabilitation centres and professional
              support resources.
            </p>

            <p>
              Where users contact external rehabilitation centres or support
              organisations directly, those organisations are responsible for
              handling the information shared with them in accordance with their
              own privacy policies.
            </p>

            <h3>4.5 Anonymous Reporting</h3>

            <div className="legal-highlight">
              <ShieldAlert size={25} />

              <div>
                <strong>Reports are sent to ZRP</strong>

                <p>
                  Reports submitted through the Anonymous Reporting feature are
                  sent to the Zimbabwe Republic Police (ZRP) for appropriate
                  attention and follow-up.
                </p>
              </div>
            </div>

            <p>
              The purpose of this feature is to encourage public participation
              in raising awareness about suspected illegal brewing activities
              and to support appropriate action by relevant authorities.
            </p>

            <p>
              Users are encouraged to provide accurate and truthful information
              when submitting reports.
            </p>

            <p>
              DrinkAware facilitates the submission of reports but does not
              independently investigate reported incidents, conduct law
              enforcement activities or determine legal outcomes.
            </p>

            <h3>4.6 Marketplace</h3>

            <p>
              The Marketplace is one of the core features of DrinkAware. Any
              personal information provided when using Marketplace services will
              be handled according to the purpose for which it is collected and
              applicable privacy requirements.
            </p>

            <p>
              Users should review any additional privacy information presented
              when submitting personal information through this feature.
            </p>
          </article>

          {/* SHARING INFORMATION */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <ShieldCheck size={23} />
              <h2>5. Sharing of Information</h2>
            </div>

            <p>
              DrinkAware respects the privacy of its users and does not intend
              to sell their personal information.
            </p>

            <p>Information may be shared in certain circumstances:</p>

            <h3>5.1 Zimbabwe Republic Police (ZRP)</h3>

            <p>
              Information submitted through the Anonymous Reporting feature is
              sent to the Zimbabwe Republic Police (ZRP) for appropriate
              attention and follow-up concerning suspected illegal brewing
              activities.
            </p>

            <h3>5.2 Service Providers</h3>

            <p>
              Information may be shared with authorised third-party service
              providers who assist in operating, maintaining or securing the
              DrinkAware platform.
            </p>

            <h3>5.3 Legal Requirements</h3>

            <p>
              Information may be disclosed where required or permitted by
              applicable laws, regulations or lawful requests from relevant
              authorities.
            </p>

            <h3>5.4 User Consent</h3>

            <p>
              Information may be shared with other parties where the user has
              provided appropriate consent.
            </p>
          </article>

          {/* DATA SECURITY */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <LockKeyhole size={23} />
              <h2>6. Data Security</h2>
            </div>

            <p>
              We take reasonable technical and organisational measures to
              protect information against:
            </p>

            <ul>
              <li>Unauthorised access.</li>
              <li>Unauthorised disclosure.</li>
              <li>Loss or destruction.</li>
              <li>Unauthorised alteration.</li>
              <li>Misuse of personal information.</li>
            </ul>

            <p>
              We aim to maintain appropriate security measures to protect the
              confidentiality and integrity of information handled through
              DrinkAware.
            </p>

            <p>
              However, no electronic system or internet-based platform can
              guarantee absolute security.
            </p>

            <p>
              Users are encouraged to protect their devices and avoid sharing
              sensitive personal information unnecessarily.
            </p>
          </article>

          {/* DATA RETENTION */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <FileText size={23} />
              <h2>7. Data Retention</h2>
            </div>

            <p>
              Personal information will only be retained for as long as
              reasonably necessary to fulfil the purpose for which it was
              collected, meet applicable legal obligations or address legitimate
              operational requirements.
            </p>

            <p>
              Information submitted through Anonymous Reporting may be retained
              or processed as necessary for its intended submission and
              follow-up, subject to applicable requirements.
            </p>

            <p>
              Where information is no longer required, appropriate steps should
              be taken to securely delete, destroy or anonymise it, subject to
              applicable legal obligations.
            </p>
          </article>

          {/* USER RIGHTS */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <ShieldCheck size={23} />
              <h2>8. Your Privacy Rights</h2>
            </div>

            <p>Subject to applicable laws, users may have the right to:</p>

            <ul>
              <li>
                Request information about how their personal information is
                used.
              </li>
              <li>Request access to personal information held about them.</li>
              <li>
                Request correction of inaccurate or incomplete information.
              </li>
              <li>Object to certain forms of processing.</li>
              <li>
                Request deletion of personal information where legally
                applicable.
              </li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>

            <p>
              Users who wish to exercise these rights may contact the DrinkAware
              team using the contact details provided in this policy.
            </p>

            <p>
              Certain information may need to be retained where required by law
              or where another lawful basis for retention applies.
            </p>
          </article>

          {/* THIRD PARTY */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <FileText size={23} />
              <h2>9. Third-Party Services and External Links</h2>
            </div>

            <p>
              The DrinkAware website and mobile application may contain links to
              external websites, organisations and services.
            </p>

            <p>These may include:</p>

            <ul>
              <li>Rehabilitation centres.</li>
              <li>Professional support organisations.</li>
              <li>Government institutions.</li>
              <li>Communication platforms.</li>
              <li>Other relevant external resources.</li>
            </ul>

            <p>
              External organisations operate independently and may have their
              own privacy policies and data-handling practices.
            </p>

            <p>
              DrinkAware is not automatically responsible for the privacy
              practices of external websites or organisations.
            </p>

            <p>
              We encourage users to review the privacy policies of external
              services before sharing personal information with them.
            </p>
          </article>

          {/* CHILDREN */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <HeartHandshake size={23} />
              <h2>10. Children's Privacy</h2>
            </div>

            <p>
              DrinkAware recognises the importance of protecting children's
              personal information.
            </p>

            <p>
              The platform is intended to promote awareness and education. We do
              not knowingly collect personal information from children under the
              age of 18 without appropriate consent or other lawful
              authorisation.
            </p>

            <p>
              Where information is collected from a child in circumstances
              requiring parental or guardian consent, appropriate measures must
              be followed in accordance with applicable laws.
            </p>
          </article>

          {/* POLICY CHANGES */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <FileText size={23} />
              <h2>11. Changes to This Privacy Policy</h2>
            </div>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in:
            </p>

            <ul>
              <li>Application features and functionality.</li>
              <li>Information collection and processing practices.</li>
              <li>Security measures.</li>
              <li>Applicable laws and regulations.</li>
            </ul>

            <p>
              Any updated version will be published on the DrinkAware website
              with a revised Last Updated date.
            </p>

            <p>Users are encouraged to review this page periodically.</p>
          </article>

          {/* CONTACT */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <MessageCircle size={23} />
              <h2>12. Contact Us</h2>
            </div>

            <p>
              If you have questions about this Privacy Policy, wish to request
              access to your personal information or have a privacy-related
              concern, please contact the DrinkAware team.
            </p>

            <div className="contact-information">
              <p>
                <strong>Project Name:</strong> DrinkAware
              </p>

              <p>
                <strong>Organisation:</strong> Enactus – Chinhoyi University of
                Technology, Zimbabwe
              </p>

              <p>
                <strong>WhatsApp:</strong> +263 788 710 818
              </p>

              <p>
                <strong>Email:</strong> [Insert official DrinkAware email
                address]
              </p>
            </div>

            <p>
              We are committed to treating privacy concerns seriously and
              handling personal information responsibly.
            </p>

            <a
              href="https://wa.me/263788710818?text=Hello%20DrinkAware%20Team%2C%20I%20have%20a%20privacy-related%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="legal-contact-button"
            >
              <MessageCircle size={19} />
              Contact DrinkAware
            </a>
          </article>

          {/* APPLICABLE LAW */}
          <article className="legal-card">
            <div className="legal-section-heading">
              <ShieldCheck size={23} />
              <h2>13. Applicable Law</h2>
            </div>

            <p>
              This Privacy Policy is intended to operate in accordance with the
              applicable laws and regulations of Zimbabwe, including the Cyber
              and Data Protection Act [Chapter 12:07], as amended.
            </p>

            <p>
              Where any provision of this Privacy Policy conflicts with
              applicable law, the applicable legal requirements shall take
              precedence.
            </p>
          </article>

          {/* CLOSING */}
          <div className="legal-closing">
            <ShieldCheck size={34} />

            <h2>DrinkAware</h2>

            <p>Knowledge. Awareness. Informed Choices.</p>

            <span>
              Promoting awareness, encouraging informed decisions and supporting
              safer communities.
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <Link href="/" aria-label="DrinkAware Home">
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
            © 2026 DrinkAware. All rights reserved.Powered by Figoh technologies
          </p>

          <div>
            <Link href="/">Home</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
