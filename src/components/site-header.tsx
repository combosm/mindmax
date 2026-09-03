"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button";

const navigation = [
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand-link" href="#top" aria-label="MindMax Tutoring home">
            <Image
              className="brand-logo"
              src="/images/mindmax-logo-transparent.png"
              alt="MindMax Tutoring"
              width={1960}
              height={520}
              priority
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-enquire">
            <ButtonLink href="#enquire">Enquire Now</ButtonLink>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          data-open={isOpen}
        >
          <div className="site-container mobile-nav-inner">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <ButtonLink href="#enquire" size="large" onClick={() => setIsOpen(false)}>
              Enquire Now
            </ButtonLink>
          </div>
        </nav>
      </header>
    </>
  );
}
