import Image from "next/image";
import type { CSSProperties } from "react";

import { offerDestinationSchools } from "@/data/schools";

function SchoolLogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="school-logo-group" aria-hidden={duplicate || undefined}>
      {offerDestinationSchools.map((school) => (
        <li
          className="school-logo-item"
          key={`${duplicate ? "copy-" : ""}${school.name}`}
          style={{ "--logo-scale": school.opticalScale } as CSSProperties}
        >
          <Image
            src={school.logo}
            alt={duplicate ? "" : `${school.name} logo`}
            width={school.width}
            height={school.height}
            sizes="(max-width: 767px) 9rem, 12rem"
          />
          {!duplicate && <span className="sr-only">{school.name}</span>}
        </li>
      ))}
    </ul>
  );
}

export function SchoolCarousel() {
  return (
    <div className="school-carousel">
      <div className="school-carousel-header">
        <div>
          <p>Offer destinations include</p>
          <p>Schools shown reflect historical MindMax student outcomes.</p>
        </div>
      </div>

      <div
        className="school-carousel-viewport"
        aria-label="Schools where MindMax students have received offers"
      >
        <div className="school-carousel-track">
          <SchoolLogoGroup />
          <SchoolLogoGroup duplicate />
        </div>
      </div>
    </div>
  );
}
