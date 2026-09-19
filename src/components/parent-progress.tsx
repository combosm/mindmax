import { parentProgressSignals } from "@/data/parent-progress";

export function ParentProgress() {
  return (
    <section className="parent-progress" id="parent-progress" aria-labelledby="progress-title">
      <div className="site-container parent-progress-grid">
        <div className="parent-progress-copy">
          <p className="eyebrow">Accountability for every step</p>
          <h2 id="progress-title" className="parent-progress-title">
            Progress tracked. <span>Parents informed.</span>
          </h2>
          <p className="parent-progress-summary">
            Learning is easier to support when progress is visible. Graded work, assessment
            outcomes and teacher feedback give families practical insight into what a student is
            building and where they can improve.
          </p>
        </div>

        <div className="progress-record" aria-label="Ways progress is made visible">
          <div className="progress-record-heading">
            <span>Learning record</span>
            <span aria-hidden="true">MindMax</span>
          </div>
          <ol className="progress-signal-list">
            {parentProgressSignals.map((signal, index) => (
              <li key={signal.label}>
                <span className="progress-signal-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{signal.label}</h3>
                  <p>{signal.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="progress-record-note">Clear evidence. Useful conversations.</p>
        </div>
      </div>
    </section>
  );
}
