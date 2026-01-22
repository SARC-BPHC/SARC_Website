import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function EmblaCarousel({ children, title, onSlideChange }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const slides = React.Children.toArray(children);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (onSlideChange) {
      onSlideChange(selectedIndex);
    }
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelectHandler = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelectHandler);
    onSelectHandler();
    
    return () => {
      emblaApi.off('select', onSelectHandler);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-xl font-light text-gray-700 mb-2 tracking-wide">
            {title}
          </h2>
          <div className="w-8 h-px bg-gray-300 mx-auto"></div>
        </div>
      )}
      
      <div className="relative group">
        <div className="overflow-hidden rounded-2xl shadow-sm" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="bg-white">
                  {slide}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="flex justify-center space-x-1.5 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-gray-500 w-4" 
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}