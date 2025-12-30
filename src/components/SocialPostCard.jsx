import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SocialPostCard({ post, platform, index = 0 }) {
  const cardRef = useRef();

  useEffect(() => {
    if (platform === 'instagram' && window.instgrm && window.instgrm.Embeds) {
      const timer = setTimeout(() => {
        try {
          window.instgrm.Embeds.process();
        } catch (error) {
          console.log('Instagram embed processing skipped:', error);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [platform]);

  const platformConfig = {
    linkedin: {
      gradient: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      name: 'LinkedIn'
    },
    instagram: {
      gradient: 'linear-gradient(135deg, #E4405F 0%, #833AB4 50%, #C13584 100%)',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      name: 'Instagram'
    }
  };

  const config = platformConfig[platform];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef} 
      className="w-full max-w-[480px] mx-auto"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #202b3a 100%)',
          borderRadius: '16px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
          border: '1px solid rgba(102, 252, 241, 0.1)',
          overflow: 'hidden'
        }}
        variants={hoverVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          style={{
            background: config.gradient,
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (index * 0.15) + 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-5">
            <motion.div
              style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                marginRight: '8px'
              }}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: (index * 0.15) + 0.3, 
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >
              {config.icon}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.15) + 0.4, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3
                style={{
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  margin: 0,
                  letterSpacing: '0.5px'
                }}
              >
                {config.name}
              </h3>
            </motion.div>
          </div>
        </motion.div>

        <div
          style={{
            background: '#f8f9fa',
            padding: '16px 20px 12px 20px',
            minHeight: platform === 'linkedin' ? '580px' : 'auto'
          }}
        >
          {platform === 'linkedin' ? (
            <div
              style={{
                width: '100%',
                height: '540px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)'
              }}
            >
              <iframe
                src={post.embedUrl}
                title={post.title}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowtransparency="true"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: 'white',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
              }}
            >
              <div
                style={{ maxWidth: '440px' }}
                dangerouslySetInnerHTML={{ __html: post.embedHtml }}
              />
            </div>
          )}
        </div>

        <motion.div
          style={{
            background: 'linear-gradient(135deg, #202b3a 0%, #2a3441 100%)',
            padding: '10px 20px',
            borderTop: '1px solid rgba(102, 252, 241, 0.1)'
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (index * 0.15) + 0.6, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <motion.span
              style={{
                color: '#66FCF1',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.15) + 0.7, duration: 0.3 }}
              viewport={{ once: true }}
            >
              SARC BPHC
            </motion.span>
            <motion.div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: config.gradient,
                opacity: 0.8
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                delay: (index * 0.15) + 0.8, 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}