import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { business } from "@/data/business";
import { locations } from "@/data/locations";

const footerLinks = [
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "FAQs", href: "#faqs" },
] as const;

export function SiteFooter() {
  return (
    <>
      <section className="final-cta" id="enquire" aria-labelledby="enquire-title">
        <div className="final-cta-mark" aria-hidden="true" />
        <div className="site-container final-cta-inner">
          <p className="eyebrow final-cta-eyebrow">Start a conversation</p>
          <h2 id="enquire-title">
            Build the skills. <span>Achieve the results.</span>
          </h2>
          <p>
            Talk with MindMax about the learning format and program that best fits your child.
          </p>
          <div className="final-cta-actions">
            <ButtonLink href={business.whatsappHref} size="large" target="_blank" rel="noreferrer">
              Enquire on WhatsApp
            </ButtonLink>
            <ButtonLink href={business.phoneHref} size="large" variant="light">
              Call {business.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div className="site-container footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label="MindMax Tutoring home">
              <Image
                src="/images/mindmax-logo-transparent.png"
                alt="MindMax Tutoring"
                width={1960}
                height={520}
              />
            </a>
            <p>Structured learning and support for students in Grades 3–6.</p>
            <p>Established in Melbourne since {business.establishedYear}.</p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <h2>Explore</h2>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-column">
            <h2>Locations</h2>
            {locations.map((location) => (
              <a key={location.id} href="#locations">
                {location.name}
              </a>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={business.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp MindMax
            </a>
          </div>
        </div>
        <div className="site-container footer-base">
          <p>© {new Date().getFullYear()} MindMax Tutoring</p>
          <p>Melbourne, Australia</p>
        </div>
      </footer>
    </>
  );
}
