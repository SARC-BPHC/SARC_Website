import { useEffect, useState } from 'react';
import EmblaCarousel from '../components/ui/EmblaCarousel';
import SocialPostCard from '../components/SocialPostCard';
import instagramPosts from './data/instagramPosts';
import linkedinPosts from './data/linkedinPosts';
import './SocialFeed.css';

export default function SocialFeed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const combinedPosts = [];
  const maxLength = Math.max(linkedinPosts.length, instagramPosts.length);

  for (let i = 0; i < maxLength; i++) {
    if (linkedinPosts[i]) {
      combinedPosts.push({ ...linkedinPosts[i], platform: 'linkedin' });
    }
    if (instagramPosts[i]) {
      combinedPosts.push({ ...instagramPosts[i], platform: 'instagram' });
    }
  }

  return (
    <div className="min-h-screen">
      <header
        style={{
          padding: '6rem 0 3rem 0',
          background: 'linear-gradient(135deg, #202833 0%, #2a3441 50%, #1a222e 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        className="px-6"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 40%, rgba(102, 252, 241, 0.06) 0%, transparent 40%)',
            pointerEvents: 'none'
          }}
        ></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              background: 'linear-gradient(135deg, #ffffff 0%, #66FCF1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2
            }}
          >
            Social Updates
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#b0b0b0',
              margin: 0,
              lineHeight: 1.5
            }}
          >
            Latest updates from our LinkedIn and Instagram channels
          </p>
        </div>
      </header>

      <div style={{ background: '#f8f9fa', padding: '4rem 0' }} className="px-6">
        {isMobile ? (
          // Mobile: Single swipeable carousel
          <div className="max-w-lg mx-auto">
            <EmblaCarousel>
              {combinedPosts.map((post) => (
                <SocialPostCard
                  key={`${post.platform}-${post.id}`}
                  post={post}
                  platform={post.platform}
                />
              ))}
            </EmblaCarousel>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(1rem, 4vw, 3rem)',
                alignItems: 'start'
              }}
            >
              {combinedPosts.map((post, index) => (
                <div
                  key={`${post.platform}-${post.id}`}
                  style={{
                    breakInside: 'avoid',
                    marginBottom: index % 3 === 0 ? '1rem' : index % 3 === 1 ? '2rem' : '0.5rem'
                  }}
                >
                  <SocialPostCard
                    post={post}
                    platform={post.platform}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}