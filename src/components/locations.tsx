import { locations } from "@/data/locations";

export function Locations() {
  return (
    <section className="locations" id="locations" aria-labelledby="locations-title">
      <div className="site-container locations-grid">
        <div className="locations-intro">
          <p className="eyebrow locations-eyebrow">Where students learn</p>
          <h2 id="locations-title">Choose the setting that works for your family.</h2>
          <p>
            Join MindMax in person at one of our Melbourne locations or learn from home in a live
            online class.
          </p>
        </div>

        <ul className="location-list">
          {locations.map((location, index) => (
            <li key={location.id}>
              <span className="location-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{location.name}</h3>
                <p>{location.kind === "online" ? "Live online learning" : "Face-to-face classes"}</p>
              </div>
              <span className="location-arrow" aria-hidden="true">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
