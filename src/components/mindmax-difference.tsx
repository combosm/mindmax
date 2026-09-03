import { supportFeatures } from "@/data/support";

export function MindMaxDifference() {
  return (
    <section className="difference" id="how-it-works" aria-labelledby="difference-title">
      <div className="difference-accent" aria-hidden="true" />
      <div className="site-container difference-grid">
        <div className="difference-intro">
          <p className="eyebrow difference-eyebrow">Support beyond the lesson</p>
          <h2 id="difference-title" className="difference-title">
            The class ends.
            <span>Our support doesn&apos;t.</span>
          </h2>
          <p className="difference-summary">
            A connected support system keeps students accountable between classes and gives
            families a clearer view of their progress.
          </p>
        </div>

        <div className="support-loop" aria-label="MindMax support model">
          <div className="support-line" aria-hidden="true" />
          <ol className="support-list">
            {supportFeatures.map((feature, index) => (
              <li className="support-step" key={feature}>
                <span className="support-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{feature}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="difference-closing">
          <p>Progress tracked.</p>
          <p>Parents informed.</p>
        </div>
      </div>
    </section>
  );
}
