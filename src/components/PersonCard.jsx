import React from "react";
import "./PersonCard.css";

const PersonCard = ({ person }) => (
    <div className="person-card">
      <img loading="lazy" src={person.image} alt={`${person.firstname} ${person.lastname}`} className="person-image" />
      <div className="person-info">
        <div className="person-designation">{person.designation}</div>
        <div className="person-name">
          <span className="firstname">{person.firstname}</span>
          <span className="lastname">{person.lastname}</span>
        </div>
        <div className="person-year">{person.year}</div>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon-btn"
          aria-label="LinkedIn"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="linkedin-logo"
          >
            <circle cx="16" cy="16" r="16" fill="white"/>
            <path
              d="M12.3 13.5H9.7V22.5H12.3V13.5ZM11 12.3C11.8 12.3 12.5 11.6 12.5 10.8C12.5 10 11.8 9.3 11 9.3C10.2 9.3 9.5 10 9.5 10.8C9.5 11.6 10.2 12.3 11 12.3ZM22.5 17.1C22.5 15 21.6 13.5 19.4 13.5C18.2 13.5 17.5 14.2 17.2 14.7H17.1V13.5H14.5V22.5H17.1V17.9C17.1 16.7 17.7 16.1 18.6 16.1C19.4 16.1 19.7 16.7 19.7 17.9V22.5H22.3V17.1H22.5Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
);

export default PersonCard;
