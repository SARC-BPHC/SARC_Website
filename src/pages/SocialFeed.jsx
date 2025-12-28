import { useEffect, useState } from 'react';
import EmblaCarousel from '../components/ui/EmblaCarousel';
import SocialPostCard from '../components/SocialPostCard';
import instagramPosts from './data/instagramPosts';
import linkedinPosts from './data/linkedinPosts';
import './SocialFeed.css';

export default function SocialFeed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Load Instagram embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Combine and interleave posts for mobile
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
          // Desktop: Two-column feed
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-12 items-start">
              {/* LinkedIn Column */}
              <div className="flex flex-col gap-16">
                <div className="text-left pl-4">
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      margin: '0 0 1rem 0',
                      color: '#202833'
                    }}
                  >
                    LinkedIn Updates
                  </h2>
                  <div
                    style={{
                      width: '60px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #0077B5 0%, #005885 100%)',
                      marginBottom: '1rem'
                    }}
                  ></div>
                </div>
                {linkedinPosts.map(post => (
                  <div
                    key={post.id}
                    className="flex justify-center"
                    style={{ marginBottom: '2rem' }}
                  >
                    <SocialPostCard
                      post={post}
                      platform="linkedin"
                    />
                  </div>
                ))}
              </div>

              {/* Instagram Column */}
              <div className="flex flex-col gap-16">
                <div className="text-left pl-4">
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      margin: '0 0 1rem 0',
                      color: '#202833'
                    }}
                  >
                    Instagram Highlights
                  </h2>
                  <div
                    style={{
                      width: '60px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #E4405F 0%, #833AB4 50%, #C13584 100%)',
                      marginBottom: '1rem'
                    }}
                  ></div>
                </div>
                {instagramPosts.map(post => (
                  <div
                    key={post.id}
                    className="flex justify-center"
                    style={{ marginBottom: '2rem' }}
                  >
                    <SocialPostCard
                      post={post}
                      platform="instagram"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}