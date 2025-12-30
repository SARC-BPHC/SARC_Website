import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
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
    text: "We are SARC",
    subtext: "We at SARC connects alumni with current students to foster mentorship, networking, and collaboration. We bridge generations of BITSians through initiatives that share knowledge and experiences. SARC aims to strengthen the BITSian legacy and support student growth through active alumni engagement."
  },
  {
    image: img2,
    pretext: "Our Voice",
    text: "ECHO",
    subtext: "BITS Pilani's official monthly alumni newsletter, BITS ECHO connects the global BITSian community through campus stories, updates, and milestones.It commemorates success and builds lasting bonds among alumni, students, and faculty.",
    button: "READ NOW"
  },
  {
    image: img3,
    pretext: "Engaging",
    text: "EVENTS",
    subtext: "On campus events: Hosting events that help students connect, celebrate and make lasting memories.",
    button: "VIEW EVENTS"
  },
  {
    image: img4,
    pretext: "Unplugged",
    text: "PODCAST",
    subtext: "Alumni Unplugged is BITS Pilani's official Spotify podcast where alumni open up about their journeys.They share stories about their careers, challenges, and growth — giving students useful and inspiring insights.",
    button: "LISTEN NOW"
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const navigate = useNavigate();

  const autoAdvanceRef = useRef();
  const lastInteraction = useRef(Date.now());


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
    if (current === 0) {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (current === 1) {
      navigate('/echo');
    } else if (current === 2) {
      navigate('/events');
    } else if (current === 3) {
      navigate('/podcast');
    }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.02 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="carousel-root">
      <AnimatePresence>
        <motion.img
          key={current}
          loading="lazy"
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </AnimatePresence>
      
      <div className="carousel-overlay">
        <div className="carousel-overlay-gradient"></div>
        <div className="carousel-content-wrapper">
          <motion.div 
            className="carousel-content-card" 
            key={animationKey}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="carousel-title"
              variants={itemVariants}
            >
              {slides[current].text}
            </motion.h1>
            
            <motion.p 
              className="carousel-description"
              variants={itemVariants}
            >
              {slides[current].subtext}
            </motion.p>
            
            {slides[current].button && (
              <motion.div 
                className="carousel-action-section"
                variants={itemVariants}
              >
                <AnimatedButton
                  className="carousel-cta-animated"
                  onClick={handleButtonClick}
                >
                  {slides[current].button}
                </AnimatedButton>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={goToPrev}
        className="carousel-nav carousel-nav-left"
        aria-label="Previous"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
      >
        <img
          loading = "lazy"
          src={leftButton}
          alt="Previous"
          className="carousel-nav-img"
        />
      </motion.button>

      <motion.button
        onClick={goToNext}
        className="carousel-nav carousel-nav-right"
        aria-label="Next"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
      >
        <img
          loading = "lazy"
          src={rightButton}
          alt="Next"
          className="carousel-nav-img"
        />
      </motion.button>

      <motion.div 
        className="carousel-indicators"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 10
        }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              lastInteraction.current = Date.now();
              setCurrent(index);
              setAnimationKey(prev => prev + 1);
            }}
            className="carousel-indicator"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: current === index ? '2rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '0.25rem',
              border: 'none',
              background: current === index 
                ? 'linear-gradient(135deg, #66FCF1 0%, #4ecdc4 100%)' 
                : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: current === index 
                ? '0 4px 12px rgba(102, 252, 241, 0.4)' 
                : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;