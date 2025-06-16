import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/navlogo.png';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef();

  // Show dropdown on hover
  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  // Hide dropdown after slight delay on mouse leave
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Toggle dropdown on click (for accessibility/mobile)
  const handleDropdownClick = () => {
    setDropdownOpen((open) => !open);
  };

  // Smooth scroll to footer
  const scrollToFooter = (event) => {
    event.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      backgroundColor: '#141D2A',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
    }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.8rem 1rem 0.8rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minHeight: '50px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: '50px', display: 'block' }} />
          </Link>
        </div>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: '100%',
        }}>
          <Link to="/podcast" className="nav-link">
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>Alumni</span>
              <span>Unplugged</span>
            </span>
          </Link>
          <Link to="/events" className="nav-link">Events</Link>
          {/* Dropdown for Pors */}
          <div
            className="nav-link dropdown"
            style={{ position: 'relative', cursor: 'pointer', userSelect: 'none' }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            onClick={handleDropdownClick}
            tabIndex={0}
          >
            PORs
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div
                className="dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#1e293b',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  borderRadius: '0.25rem',
                  minWidth: '120px',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.5rem 0',
                  animation: 'fadeIn 0.2s',
                }}
                onClick={e => e.stopPropagation()}
              >
                <Link to="/curpor" className="dropdown-item">Current</Link>
                <Link to="/prevpor" className="dropdown-item">Previous</Link>
              </div>
            )}
          </div>
          {/* Contact Us scrolls to footer */}
          <a href="#footer" onClick={scrollToFooter} className="nav-link" style={{ cursor: 'pointer' }}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>Contact</span>
              <span>Us</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
