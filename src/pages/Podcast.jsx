import { useEffect } from 'react';
import podcastImg from '../assets/Podcast.png';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Podcast.css';

function PodcastHero() {
  const handleImageHover = (e) => {
    const container = e.currentTarget;
    container.classList.add('cursor-following');
  };

  const handleImageMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    
    container.style.setProperty('--tilt-x', `${tiltX}deg`);
    container.style.setProperty('--tilt-y', `${tiltY}deg`);
  };

  const handleImageLeave = (e) => {
    const container = e.currentTarget;
    container.classList.remove('cursor-following');
    container.style.setProperty('--tilt-x', '0deg');
    container.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <section className="podcast-hero">
      <div className="podcast-hero-content">
        <div className="podcast-hero-text fade-in animate">
          <div className="podcast-badge scale-in animate">
            <span>Official SARC Podcast</span>
          </div>
          <h1 className="podcast-title text-reveal animate">
            Alumni Unplugged
          </h1>
          <p className="podcast-subtitle fade-in animate">
            Real Stories. Real Journeys. Real Inspiration.
          </p>
          <p className="podcast-description fade-in animate">
            Dive into the inspiring stories and career journeys of BITS Pilani Hyderabad alumni. 
            Each episode features insights, advice, and experiences across diverse industries from 
            those who once walked your path.
          </p>
          <div className="podcast-stats fade-in animate">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Episodes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Listeners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Industries</span>
            </div>
          </div>
          <div className="podcast-buttons">
            <button 
              className="podcast-btn primary button-press hover-lift"
              onClick={() => window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi', '_blank', 'noopener,noreferrer')}
            >
              <span className="btn-icon">▶</span>
              Listen on Spotify
            </button>
            <button 
              className="podcast-btn secondary button-press hover-scale"
              onClick={() => window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi', '_blank', 'noopener,noreferrer')}
            >
              Follow
            </button>
          </div>
        </div>
        <div className="podcast-hero-image fade-in animate">
          <div 
            className="podcast-image-container"
            onMouseEnter={handleImageHover}
            onMouseMove={handleImageMove}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={podcastImg}
              alt="Alumni Unplugged Podcast"
              className="podcast-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedEpisodes() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  const episodes = [
    {
      title: "From BITS to Apple: Shivaank's Journey",
      guest: "Shivaank Agarwal",
      company: "Apple, Samsung",
      duration: "58 min",
      embedId: "6BHvqE9er6fxoiwpJKah85",
      description: "Shivaank shares his journey through top tech institutions like IIT Bombay, Samsung, and UCSD, offering insights from his impactful internships and roles.",
      tags: ["Tech", "FAANG"],
      publishDate: "Jul 2024",
      featured: true
    },
    {
      title: "Academic Roots to Consulting Heights",
      guest: "Soham Dutta", 
      company: "Bain & Company",
      duration: "67 min",
      embedId: "5cVSoNPsCToNbuiv58ffpR",
      description: "Join us for an engaging conversation with Soham Dutta, a consultant at Bain & Company and alumnus of BITS Pilani and IIM Ahmedabad. Soham shares his college memories, his shift to consulting, and his enriching experiences at IIM Ahmedabad.",
      tags: ["Consulting"],
      publishDate: "Jul 2024",
      featured: true
    },
    {
      title: "Sustainable Savor with Keerthi Priya",
      guest: "Keerthi Priya",
      company: "Nurture Fields",
      duration: "47 min", 
      embedId: "3vjCCcG3SrVGtpbPmSmhFg",
      description: "Gather insights from the journey of Keerthi Priya in making of \"Nurture Fields\" and \"koh! foods\" from scratch and her experiences in making of natural products with the catch of technology.",
      tags: ["Product", "Technology"],
      publishDate: "May 2024",
      featured: true
    }
  ];

  return (
    <section className="featured-episodes" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isIntersecting ? 'animate' : ''}`}>
          Featured Episodes
        </h2>
        <div className="episodes-grid">
          {episodes.map((episode, index) => (
            <div 
              key={index}
              className={`episode-card intersection-observer ${isIntersecting ? 'in-view' : ''} ${episode.featured ? 'featured' : ''} hover-lift`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="episode-header">
                <div className="episode-meta">
                  <div className="episode-number">#{index + 1}</div>
                  {episode.featured && <div className="featured-badge">Featured</div>}
                </div>
                <div className="episode-info">
                  <div className="episode-duration">{episode.duration}</div>
                  <div className="episode-date">{episode.publishDate}</div>
                </div>
              </div>
              
              <h3 className="episode-title">{episode.title}</h3>
              
              <div className="episode-guest">
                <div className="guest-avatar">
                  <span>{episode.guest.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="guest-details">
                  <span className="guest-name">{episode.guest}</span>
                  <span className="guest-company">{episode.company}</span>
                </div>
              </div>
              
              <p className="episode-description">{episode.description}</p>
              
              <div className="episode-tags">
                {episode.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="episode-tag">{tag}</span>
                ))}
              </div>
              
              <div className="episode-actions">
                <button 
                  className="play-btn button-press"
                  onClick={() => window.open(`https://open.spotify.com/episode/${episode.embedId}`, '_blank')}
                >
                  <span>▶</span>
                  Play Episode
                </button>
                <button className="share-btn hover-scale" title="Share">
                  <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastEmbed() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="podcast-embed" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isIntersecting ? 'animate' : ''}`}>
          Latest Episode
        </h2>
        <div className={`embed-container scale-in ${isIntersecting ? 'animate' : ''}`}>
          <iframe
            className="spotify-embed"
            src="https://open.spotify.com/embed/episode/6BHvqE9er6fxoiwpJKah85?utm_source=generator"
            width="100%"
            height="352"
            style={{ border: 0 }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Podcast() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = prevOverflow;
    };
  }, []);

  return (
    <div className="podcast-page">
      <PodcastHero />
      <FeaturedEpisodes />
      <PodcastEmbed />
    </div>
  );
}

export default Podcast;
