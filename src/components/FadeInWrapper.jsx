import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function FadeInWrapper({ children, duration = 500 }) {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    // Reset opacity to 0 instantly
    if (ref.current) {
      ref.current.style.opacity = 0;
      ref.current.style.transition = "none";
    }
    // Animate to 1 after a short delay
    const t = setTimeout(() => {
      if (ref.current) {
        ref.current.style.transition = `opacity ${duration}ms ease`;
        ref.current.style.opacity = 1;
      }
    }, 30);
    return () => clearTimeout(t);
  }, [location.pathname, duration]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        willChange: "opacity",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInWrapper;
