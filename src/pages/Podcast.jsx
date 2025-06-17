import React, { useEffect, useState } from 'react';
import podcastImg from '../assets/Podcast.png';
import './Podcast.css';

function PodcastImage() {
  return (
    <div>
      <img
        loading="lazy"
        src={podcastImg}
        alt="Alumni Unplugged Podcast"
        className="podcast-image"
      />
    </div>
  );
}

function PodcastInfo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
        <span style={{ fontWeight: 700, fontSize: 28, color: '#fff' }}>
          🎙️ Alumni Unplugged: A Podcast by SARC BPHC
        </span>
      </div>
      <div style={{ color: '#e0e0e0', fontSize: 18, marginBottom: '2.2rem', lineHeight: 1.6 }}>
        Alumni Unplugged is SARC BPHC's official podcast, sharing inspiring stories and career journeys of BPHC alumni.
        Each episode features insights, advice, and experiences across diverse industries. Guests like Shivaank Agarwal (Apple, Amazon) and Vaibhav Balloli (AI & startups) offer valuable lessons and inspiration. Tune in for real stories from those who once walked your path.
      </div>
      <button
        style={{
          background: isHovered ? '#fff' : '#141D2A',
          color: isHovered ? '#141D2A' : '#fff',
          border: '1.5px solid #141D2A',
          borderRadius: '2rem',
          fontWeight: 700,
          fontSize: 20,
          padding: '1rem 2.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(32,40,51,0.15)',
          letterSpacing: '1px',
          transition: 'background 0.2s, color 0.2s',
          margin: '0 auto',
        }}
        onClick={() => window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi', '_blank', 'noopener,noreferrer')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        LISTEN NOW!!
      </button>
    </div>
  );
}

function Podcast() {
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevOverflow = document.body.style.overflowX;
    document.body.style.background = '#202833';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.background = prevBg;
      document.body.style.overflowX = prevOverflow;
    };
  }, []);

  return (
    <>
      <div className="podcast-main-wrapper">
        <div className="podcast-content">
          <PodcastImage />
          <PodcastInfo />
        </div>
      </div>
      <div style={{ height: '3rem', background: '#202833' }} />
      <div style={{
        padding: '0 2rem',
        background: '#202833',
        paddingTop: '2.5rem',
        paddingBottom: '0',
        boxSizing: 'border-box',
        maxWidth: '100vw',
      }}>
        <iframe
          style={{
            borderRadius: '12px',
            display: 'block',
            margin: '0 auto',
            background: '#202833'
          }}
          src="https://open.spotify.com/embed/episode/6BHvqE9er6fxoiwpJKah85?utm_source=generator"
          width="100%"
          height="240"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </>
  );
}

export default Podcast;
