import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function FadeInWrapper({ children, duration = 400, stagger = false, className = "" }) {
  const ref = useRef();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsVisible(false);
      
      const animatableElements = ref.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      animatableElements.forEach(el => el.classList.remove('animate'));
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (ref.current) {
        const animatableElements = ref.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        
        if (stagger && animatableElements.length > 1) {
          animatableElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * 100);
          });
        } else {
          animatableElements.forEach(el => el.classList.add('animate'));
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, stagger]);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'animate' : ''} ${className}`}
      style={{
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInWrapper;
