import React from "react";
import PersonCard from "../components/PersonCard";
import { useStaggeredIntersection } from "../hooks/useIntersectionObserver";
import "./CurPor.css";

import ShreyaS from "../PORsImgs/Sakshi.png";
import ArnavB from "../PORsImgs/ArnavB.jpg";
import Rachit from "../PORsImgs/Shourya.png";
import VedantB from "../PORsImgs/Divya.png";
import Antariksha from "../PORsImgs/Akash.png";
import AryanD from "../PORsImgs/Vipul.png";
import AnshitaP from "../PORsImgs/Vedant.png";
import AreeshaS from "../PORsImgs/SakshiB.png";
import RibhavT from "../PORsImgs/Romil.png";
import AnkitM from "../PORsImgs/Prathemesh.png";

const peopleData = [
  {
    firstname: "Arnav",
    lastname: "Bansal",
    designation: "Coordinator",
    year: "2025-2026",
    image: ArnavB,
    linkedin: "https://www.linkedin.com/in/likith-salla-413a2b25a/"
  },
  {
    firstname: "Shreya",
    lastname: "Singh",
    designation: "Coordinator",
    year: "2025-2026",
    image: ShreyaS,
    linkedin: "https://www.linkedin.com/in/sakshi-hingane-494633267"
  },
  {
    firstname: "Vedant",
    lastname: "Barve",
    designation: "Outreach Head",
    year: "2025-2026",
    image: VedantB,
    linkedin: "https://www.linkedin.com/in/divya-daga-180542258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    firstname: "Antariksha",
    lastname: "Deb",
    designation: "Events Head",
    year: "2025-2026",
    image: Antariksha,
    linkedin: "https://www.linkedin.com/in/akash-reddy-sangati-15679a212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    firstname: "Rachit",
    lastname: "Pandey",
    designation: "Events Head",
    year: "2025-2026",
    image: Rachit,
    linkedin: "https://www.linkedin.com/in/shourya-khubber-6b6321265/"
  },
  {
    firstname: "Areesha",
    lastname: "Shahid",
    designation: "Content & Social Media Head",
    year: "2025-2026",
    image: AreeshaS,
    linkedin: "https://www.linkedin.com/in/sakshi-bharadwaj-887749257/"
  },
  {
    firstname: "Ribhav",
    lastname: "Tiwari",
    designation: "Content & Social Media Head",
    year: "2025-2026",
    image: RibhavT,
    linkedin: "https://www.linkedin.com/in/romil-goswami-9838aa24b/"
  },
  {
    firstname: "Ankit",
    lastname: "Mishra",
    designation: "Media & Publicity Head",
    year: "2025-2026",
    image: AnkitM,
    linkedin: "https://www.linkedin.com/in/vedant-bhatia-/"
  },
  {
    firstname: "Anshita",
    lastname: "Pandey",
    designation: "Media & Publicity Head",
    year: "2025-2026",
    image: AnshitaP,
    linkedin: "https://www.linkedin.com/in/prathamesh-deshmane-667310258/"
  },
  {
    firstname: "Aryan",
    lastname: "Dalmia",
    designation: "Tech Lead",
    year: "2025-2026",
    image: AryanD,
    linkedin: "https://www.linkedin.com/in/vipul-alampally-971566264/"
  }
];

const CurPor = () => {
  const [visibleItems, triggerAnimation] = useStaggeredIntersection(peopleData.length, 100);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      triggerAnimation();
    }, 200);
    return () => clearTimeout(timer);
  }, [triggerAnimation]);

  return (
    <div className="curpor-page">
      <div className="curpor-hero">
        <div className="curpor-hero-content">
          <h1 className="curpor-title fade-in animate">Leadership Team</h1>
          <p className="curpor-subtitle fade-in animate">
            Meet the dedicated team driving SARC BPHC forward
          </p>
        </div>
      </div>

      <div className="people-section">
        <div className="people-grid">
          {peopleData.map((person, idx) => (
            <div
              key={idx}
              className={`person-item scale-in ${visibleItems.has(idx) ? 'animate' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <PersonCard person={person} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurPor;
