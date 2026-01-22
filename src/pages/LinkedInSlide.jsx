export default function LinkedInSlide({ title, description, embedUrl }) {
  return (
    <div className="carousel-slide linkedin-slide">
      <div className="embed-card">
        <div className="embed-header">
          <h3 className="embed-title">{title}</h3>
          <p className="embed-description">{description}</p>
        </div>
        <div className="embed-container">
          <iframe
            src={embedUrl}
            title={title}
            height="100%"
            width="100%"
            frameBorder="0"
            allowTransparency="true"
            className="social-embed linkedin-embed"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}