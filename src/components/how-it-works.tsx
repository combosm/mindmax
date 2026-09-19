import Image from "next/image";
import { learningJourney } from "@/data/learning-journey";
import { responsiveImageDefaults } from "@/lib/images";

export function HowItWorks() {
  return (
    <section className="journey" id="how-it-works" aria-labelledby="journey-title">
      <div className="site-container">
        <div className="journey-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="journey-title" className="journey-title">
              Learning that continues <span>beyond the lesson.</span>
            </h2>
          </div>
          <div className="journey-image">
            <Image
              {...responsiveImageDefaults}
              src="/images/mindmax-face-to-face-classes.png"
              alt="A teacher helping students with their written work"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
            />
          </div>
        </div>

        <ol className="journey-steps" role="list" aria-label="The learning journey">
          {learningJourney.map((step, index) => (
            <li className="journey-step" key={step.title}>
              <span className="journey-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="journey-closing">Learn. Put it into practice. Keep building.</p>
      </div>
    </section>
  );
}
