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
          <p className="eyebrow results-eyebrow">Historical student outcomes</p>
          <h2 id="results-title" className="results-title">
            Where focused work
            <span>can lead.</span>
          </h2>
          <div className="results-context">
            <p>
              MindMax students have received offers from selective entry and independent
              schools across Melbourne.
            </p>
            <a href="#results-record">
              See our results <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>

        <SchoolCarousel />

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
            <dd>
              <span>Since</span>
              {business.establishedYear}
            </dd>
          </div>
        </dl>

        <footer className="results-note">
          <p>{resultsDisclaimer}</p>
          <p>School logos identify offer destinations and do not imply endorsement.</p>
        </footer>
      </div>
    </section>
  );
}
