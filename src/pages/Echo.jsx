import React from 'react';
import { Link } from 'react-router-dom';
import { useStaggeredIntersection } from '../hooks/useIntersectionObserver';
import blogPosts from './data/blogPosts';
import './Echo.css';

const Echo = () => {
  const [visibleItems, triggerAnimation] = useStaggeredIntersection(blogPosts.length, 100);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      triggerAnimation();
    }, 200);
    return () => clearTimeout(timer);
  }, [triggerAnimation]);


  return (
    <div className="echo-page">
      <div className="echo-hero">
        <div className="echo-hero-content">
          <h1 className="echo-title fade-in animate">Echo</h1>
          <p className="echo-subtitle fade-in animate">
            Where Student Stories Come to Life
          </p>
          <p className="echo-description fade-in animate">
            Discover insights, experiences, and perspectives from the SARC community. 
            From academic journeys to personal growth, our students share their stories 
            that inspire, educate, and connect.
          </p>
          <div className="echo-actions fade-in animate">
            <button 
              className="echo-btn primary"
              onClick={() => window.open('https://www.bits-pilani.ac.in/alumni/bits-echo-newsletter/', '_blank', 'noopener,noreferrer')}
            >
              READ OFFICIAL NEWSLETTER
            </button>
          </div>
        </div>
      </div>

      <div className="echo-content">
        <div className="echo-container">
          <div className="blog-grid">
            {blogPosts.map((post, idx) => (
              <article
                key={post.id}
                className={`blog-card scale-in ${visibleItems.has(idx) ? 'animate' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Link to={`/echo/${post.slug}`} className="blog-card-link">
                  <div className="blog-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-description">{post.description}</p>
                    
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h3>No stories yet</h3>
              <p>Check back soon for inspiring stories from our student community.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Echo;