import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tutoring for Grades 3–6</p>
            <h1 id="hero-title" className="hero-title">
              Strong foundations.
              <span>Bigger possibilities.</span>
            </h1>
            <p className="hero-intro">
              Structured Maths, English and reasoning tutoring that helps students build
              academic skills, confidence and independence.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#enquire" size="large">
                Enquire Now
              </ButtonLink>
              <a className="text-link" href="#programs">
                Explore Programs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A tutor supporting primary school students">
            <div className="hero-geometry" aria-hidden="true" />
            <div className="hero-image-primary">
              <Image
                src="/images/mindmax-hero-tutoring.png"
                alt="A tutor helping two primary school students work through a learning activity"
                fill
                priority
                quality={88}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 54vw, 48vw"
              />
            </div>
            <div className="hero-image-detail" aria-hidden="true">
              <Image
                src="/images/mindmax-hero-tutoring.png"
                alt=""
                fill
                priority
                quality={82}
                sizes="(max-width: 767px) 35vw, 13rem"
              />
            </div>
            <p className="hero-note">
              Support that stays with them
            </p>
          </div>
        </div>

    </section>
  );
}
