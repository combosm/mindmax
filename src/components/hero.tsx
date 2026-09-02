import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { business } from "@/data/business";
import { historicalResults, resultsDisclaimer } from "@/data/results";

export function Hero() {
  return (
    <main id="main-content">
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
              <span aria-hidden="true">01</span>
              Support that stays with them
            </p>
          </div>
        </div>

        <div className="site-container proof-wrap" id="results">
          <p className="proof-kicker">A proven record</p>
          <dl className="proof-list">
            {historicalResults.map((result) => (
              <div className="proof-item" key={result.label}>
                <dt>{result.label}</dt>
                <dd>{result.value}</dd>
              </div>
            ))}
            <div className="proof-item proof-since">
              <dt>Established in Melbourne</dt>
              <dd>
                <span>Since</span> {business.establishedYear}
              </dd>
            </div>
          </dl>
          <p className="sr-only">{resultsDisclaimer}</p>
        </div>
      </section>
    </main>
  );
}
