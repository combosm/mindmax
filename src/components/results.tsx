import { business } from "@/data/business";
import { historicalResults, resultsDisclaimer } from "@/data/results";

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
            A track record built
            <span>over more than a decade.</span>
          </h2>
          <div className="results-context">
            <p>
              MindMax has supported students working towards selective school entry and
              scholarship opportunities since {business.establishedYear}.
            </p>
            <a href="#results-record">
              See our results <span aria-hidden="true">↓</span>
            </a>
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
            <dd>
              <span>Since</span>
              {business.establishedYear}
            </dd>
          </div>
        </dl>

        <footer className="results-note">
          <p>{resultsDisclaimer}</p>
          <p>Results earned over time. Foundations built for what comes next.</p>
        </footer>
      </div>
    </section>
  );
}
