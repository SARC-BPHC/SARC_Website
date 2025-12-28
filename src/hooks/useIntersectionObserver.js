import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const ref = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
        ...options,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

export function useStaggeredIntersection(itemCount, delay = 100) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timeouts = [];
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => new Set(prev).add(i));
      }, i * delay);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isInView, itemCount, delay]);

  const triggerAnimation = () => {
    setIsInView(true);
  };

  return [visibleItems, triggerAnimation];
}