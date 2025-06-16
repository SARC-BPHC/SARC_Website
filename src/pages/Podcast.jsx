import React, { useEffect } from 'react';
import podcastImg from '../assets/Podcast.png';
import { useState } from 'react';

function PodcastImage() {
  return (
    <div>
      <img
        loading="lazy"
        src={podcastImg}
        alt="Alumni Unplugged Podcast"
        style={{
          width: 389,
          height: 492,
          borderRadius: '16px',
          objectFit: 'cover',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          background: '#19212B',
        }}
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
          background: isHovered?'#fff':'#141D2A',
          color: isHovered ? '#141D2A' : '#fff',
          border: isHovered? '1.5px solid #141D2A':'1.5px solid #141D2A',
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
      <div
        style={{
          minHeight: '100vh',
          background: '#202833',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "'Montserrat', sans-serif",
          padding: '4rem 0 4rem 0',
          margin: '0',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: '#202833',
            boxShadow: '0 4px 32px rgba(0, 0, 0, 0.15)',
            maxWidth: '900px',
            width: '100%',
            alignItems: 'center',
            gap: '6rem',
            padding: '2rem 0.625rem',
            boxSizing: 'border-box',
          }}
        >
          <PodcastImage />
          <PodcastInfo />
        </div>
      </div>
      {/* Padding ONLY between main content and Spotify frame */}
      <div style={{ height: '3rem', background: '#202833' }} />
      {/* Spotify Embed with increased left/right padding */}
      <div style={{
        padding: '0 2rem', // Increased left and right padding
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
