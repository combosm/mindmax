import { business } from "@/data/business";
import { historicalResults, resultsDisclaimer } from "@/data/results";
import { SchoolCarousel } from "@/components/school-carousel";

export function Results() {
  return (
    <section className="results-section" id="results" aria-labelledby="results-title">
      <div className="results-geometry" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="site-container results-inner">
        <header className="results-heading">
          <p className="eyebrow results-eyebrow">Student results</p>
          <h2 id="results-title" className="results-title">
            Where focused work
            <span>can lead.</span>
          </h2>
          <div className="results-context">
            <p>
              MindMax students have achieved strong outcomes through structured programs
              and focused preparation.
            </p>
          </div>
        </header>

        <dl className="results-record" id="results-record">
          {historicalResults.map((result, index) => (
            <div className="result-outcome" key={result.label}>
              <dt>{result.label}</dt>
              <dd>{result.value}</dd>
              <span aria-hidden="true">0{index + 1}</span>
            </div>
          ))}

          <div className="result-established">
            <dt>Established in Melbourne</dt>
            <dd>{business.establishedYear}</dd>
            <span aria-hidden="true">03</span>
          </div>
        </dl>

        <SchoolCarousel />

        <footer className="results-note">
          <p>{resultsDisclaimer}</p>
          <p>School logos identify offer destinations and do not imply endorsement.</p>
        </footer>
      </div>
    </section>
  );
}
