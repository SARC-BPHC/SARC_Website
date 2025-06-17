import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

import img1 from '../assets/Hero1.png';
import img2 from '../assets/new1.png';
import img3 from '../assets/Hero3.png';
import img4 from '../assets/Hero4.png';
import leftButton from '../assets/leftButton.png';
import rightButton from '../assets/rightButton.png';

const slides = [
  {
    image: img1,
    pretext: "We Are",
    text: "SARC",
    subtext: "We at SARC connects alumni with current students to foster mentorship, networking, and collaboration...",
    button: "Light"
  },
  {
    image: img2,
    pretext: "Our Voice",
    text: "ECHO",
    subtext: "BITS Pilani’s official monthly alumni newsletter...",
    button: "READ NOW"
  },
  {
    image: img3,
    pretext: "Engaging",
    text: "EVENTS",
    subtext: "On campus events: Hosting events that help students connect...",
    button: "VIEW EVENTS"
  },
  {
    image: img4,
    pretext: "Unplugged",
    text: "PODCAST",
    subtext: "Alumni Unplugged is BITS Pilani's official Spotify podcast...",
    button: "LISTEN NOW"
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const navigate = useNavigate();

  const timeouts = useRef([]);
  const autoAdvanceRef = useRef();
  const lastInteraction = useRef(Date.now());

  useEffect(() => {
    setShow(false);
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    timeouts.current.push(setTimeout(() => setShow(true), 100));
    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, [current, animationKey]);

  useEffect(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    autoAdvanceRef.current = setTimeout(() => {
      if (Date.now() - lastInteraction.current >= 10000) {
        goToNext();
      }
    }, 10000);
    return () => clearTimeout(autoAdvanceRef.current);
  }, [current]);

  const goToPrev = () => {
    lastInteraction.current = Date.now();
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    setAnimationKey(prev => prev + 1);
  };

  const goToNext = () => {
    lastInteraction.current = Date.now();
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    setAnimationKey(prev => prev + 1);
  };

  const handleButtonClick = () => {
    lastInteraction.current = Date.now();
    if (current === 1) {
      window.open('https://www.bits-pilani.ac.in/alumni/bits-echo-newsletter/', '_blank');
    } else if (current === 2) {
      navigate('/events');
    } else if (current === 3) {
      window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi', '_blank');
    }
  };

  return (
    <div className="carousel-root">
      <div className="carousel-aspect-wrapper">
        <img
          loading="lazy"
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          <div className="carousel-overlay-spacer"></div>
          <div className="carousel-overlay-content" key={animationKey}>
            <div className={`carousel-pretext${show ? ' show' : ''}`}>
              {slides[current].pretext}
            </div>
            <div className={`carousel-maintext${show ? ' show' : ''}`}>
              {slides[current].text}
            </div>
            <div className={`carousel-subtext${show ? ' show' : ''}`}>
              {slides[current].subtext}
            </div>
            {current !== 0 && (
              <div className="carousel-button-row">
                <button
                  className={`carousel-button${show ? ' show' : ''}`}
                  onClick={handleButtonClick}
                  disabled={!show}
                >
                  {slides[current].button}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="carousel-nav carousel-nav-left"
        aria-label="Previous"
      >
        <img src={leftButton} alt="Previous" className="carousel-nav-img" />
      </button>

      <button
        onClick={goToNext}
        className="carousel-nav carousel-nav-right"
        aria-label="Next"
      >
        <img src={rightButton} alt="Next" className="carousel-nav-img" />
      </button>
    </div>
  );
}

export default Carousel;
