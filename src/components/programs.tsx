import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { locations } from "@/data/locations";
import { programs } from "@/data/programs";

const inPersonLocations = locations.filter((location) => location.kind === "in-person");

export function Programs() {
  return (
    <section className="programs" id="programs" aria-labelledby="programs-title">
      <div className="site-container programs-heading">
        <p className="eyebrow">Choose how they learn</p>
        <h2 id="programs-title" className="programs-title">
          Two ways to learn.
          <span>One standard of support.</span>
        </h2>
        <p className="programs-intro">
          Choose the setting that works for your family. Both formats provide structured
          teaching and support that continues beyond class.
        </p>
      </div>

      <div className="site-container program-list">
        {programs.map((program) => (
          <article className="program" key={program.id}>
            <div className="program-image-wrap">
              <div className="program-image">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  quality={88}
                  sizes="(max-width: 767px) 100vw, 52vw"
                />
              </div>
            </div>

            <div className="program-content">
              <p className="program-format">
                {program.format === "online" ? "Learn from home" : "Learn in person"}
              </p>
              <h3>{program.name}</h3>
              <p className="program-description">{program.description}</p>

              <ul className="program-details" aria-label={`${program.name} features`}>
                {program.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              {program.format === "in-person" && (
                <p className="program-locations">
                  <span>Locations</span>
                  {inPersonLocations.map((location) => location.name).join(" · ")}
                </p>
              )}

              <ButtonLink href="#enquire" variant="secondary" size="large">
                {program.ctaLabel} <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
