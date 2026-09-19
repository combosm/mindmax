import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section className="faq" id="faqs" aria-labelledby="faq-title">
      <div className="site-container faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">Questions from parents</p>
          <h2 id="faq-title">What families usually want to know.</h2>
          <p>Clear answers about programs, support, progress and where learning takes place.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
