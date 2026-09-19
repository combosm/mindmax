import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="testimonials" id="stories" aria-labelledby="stories-title">
      <div className="site-container testimonials-layout">
        <div className="testimonials-heading">
          <p className="eyebrow">Family perspectives</p>
          <h2 id="stories-title">Learning experiences, told by the people closest to them.</h2>
        </div>

        {testimonials.length > 0 ? (
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={`${testimonial.attribution}-${testimonial.quote}`}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.attribution}</strong>
                  {testimonial.context ? <span>{testimonial.context}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="testimonial-placeholder" role="note">
            <span className="testimonial-mark" aria-hidden="true">
              “
            </span>
            <div>
              <p className="testimonial-placeholder-label">Verified stories coming soon</p>
              <p>
                Parent and student experiences will appear here once they have been supplied and
                approved for publication.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
