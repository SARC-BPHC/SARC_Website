export function PodcastInfo() {
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
          background: '#141D2A',
          color: '#fff',
          border: 'none',
          borderRadius: '2rem',
          fontWeight: 700,
          fontSize: 20,
          padding: '1rem 2.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(32,40,51,0.15)',
          letterSpacing: '1px',
          transition: 'background 0.2s',
          margin: '0 auto',
        }}
        onClick={() => window.open('https://open.spotify.com/show/22sn2XUuxN5y5gVt7BitDi', '_blank', 'noopener,noreferrer')}
      >
        LISTEN NOW!!
      </button>
    </div>
  );
}
