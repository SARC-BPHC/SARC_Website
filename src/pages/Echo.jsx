import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogPosts from './data/blogPosts';
import './Echo.css';

const Echo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };


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
          <motion.div 
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                className="blog-card"
                variants={itemVariants}
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
              </motion.article>
            ))}
          </motion.div>

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