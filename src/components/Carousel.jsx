import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

// Import your images and button icons
import img1 from '../assets/Hero1.png';
import img2 from '../assets/new1.png';
import img3 from '../assets/Hero3.png';
import img4 from '../assets/Hero4.png';
import leftButton from '../assets/leftButton.png';
import rightButton from '../assets/rightButton.png';

// Slides data
const slides = [
  {
    image: img1,
    pretext: "We Are",
    text: "SARC",
    subtext: "We at SARC connects alumni with current students to foster mentorship, networking, and collaboration. We bridge generations of BITSians through initiatives that share knowledge and experiences. SARC aims to strengthen the BITSian legacy and support student growth through active alumni engagement.",
    button: "Light"
  },
  {
    image: img2,
    pretext: "Our Voice",
    text: "ECHO",
    subtext: "BITS Echo is the official student-run news and media body of BITS Pilani, Hyderabad Campus. It covers campus events, initiatives, and opinions through articles, reports, and multimedia content. Echo serves as a platform for students to voice perspectives and document the pulse of campus life.",
    button: "READ NOW"
  },
  {
    image: img3,
    pretext: "Engaging",
    text: "EVENTS",
    subtext: "At SARC, we regularly organize a range of events that cater to both students and alumni. These events are designed to foster meaningful connections, promote collaboration, and create opportunities for knowledge-sharing across batches.",
    button: "VIEW EVENTS"
  },
  {
    image: img4,
    pretext: "Unplugged",
    text: "PODCAST",
    subtext: "Unplugged is BITS Pilani’s official Spotify podcast that features engaging conversations with its alumni. It explores their journeys beyond campus, covering career choices, challenges, and personal growth. The podcast offers valuable insights and inspiration for students and listeners alike.",
    button: "LISTEN NOW"
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [showPretext, setShowPretext] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Animation timings (ms)
  const PRETEXT_DELAY = 0;
  const TEXT_DELAY = 300;
  const SUBTEXT_DELAY = 300;
  const BUTTON_DELAY = 300;

  const timeouts = useRef([]);
  const autoAdvanceRef = useRef();
  const lastInteraction = useRef(Date.now());

  // Animation effect
  useEffect(() => {
    setShowPretext(false);
    setShowText(false);
    setShowSubtext(false);
    setShowButton(false);

    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    timeouts.current.push(setTimeout(() => setShowPretext(true), PRETEXT_DELAY));
    timeouts.current.push(setTimeout(() => setShowText(true), PRETEXT_DELAY + TEXT_DELAY));
    timeouts.current.push(setTimeout(() => setShowSubtext(true), PRETEXT_DELAY + TEXT_DELAY + SUBTEXT_DELAY));
    timeouts.current.push(setTimeout(() => setShowButton(true), PRETEXT_DELAY + TEXT_DELAY + SUBTEXT_DELAY + BUTTON_DELAY));

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [current]);

  // Auto-advance logic
  useEffect(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);

    autoAdvanceRef.current = setTimeout(() => {
      if (Date.now() - lastInteraction.current >= 10000) {
        goToNext();
      }
    }, 10000);

    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, [current]);

  // Navigation handlers with timer reset
  const goToPrev = () => {
    lastInteraction.current = Date.now();
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToNext = () => {
    lastInteraction.current = Date.now();
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleButtonClick = () => {
    lastInteraction.current = Date.now();
    if (current === 1) {
      window.open('https://www.bits-pilani.ac.in/alumni/bits-echo-newsletter/', '_blank', 'noopener,noreferrer');
    } else if (current === 2) {
      navigate('/events');
    } else if (current === 3) {
      window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi');
    }
  };

  return (
    <div className="carousel-root">
      {/* Carousel Image */}
      <img
        src={slides[current].image}
        alt={`Slide ${current + 1}`}
        className="carousel-image"
      />
      {/* Overlay Content */}
      <div className="carousel-overlay">
        <div className="carousel-overlay-spacer"></div>
        <div className="carousel-overlay-content">
          {/* Pretext */}
          <div
            className={`carousel-pretext${showPretext ? ' show' : ''}`}
          >
            {slides[current].pretext}
          </div>
          {/* Main Text */}
          <div
            className={`carousel-maintext${showText ? ' show' : ''}`}
          >
            {slides[current].text}
          </div>
          {/* Subtext */}
          <div
            className={`carousel-subtext${showSubtext ? ' show' : ''}`}
          >
            {slides[current].subtext}
          </div>
          {/* Button (not for first slide) */}
          {current !== 0 && (
            <div className="carousel-button-row">
              <button
                className={`carousel-button${showButton ? ' show' : ''}`}
                onClick={handleButtonClick}
                disabled={!showButton}
              >
                {slides[current].button}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={goToPrev}
        className="carousel-nav carousel-nav-left"
        aria-label="Previous"
      >
        <img
          src={leftButton}
          alt="Previous"
          className="carousel-nav-img"
        />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={goToNext}
        className="carousel-nav carousel-nav-right"
        aria-label="Next"
      >
        <img
          src={rightButton}
          alt="Next"
          className="carousel-nav-img"
        />
      </button>
    </div>
  );
}

export default Carousel;
