import { useEffect } from 'react';

export default function InstagramSlide({ embedHtml }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="carousel-slide instagram-slide">
      <div className="instagram-wrapper">
        <div
          dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
      </div>
    </div>
  );
}