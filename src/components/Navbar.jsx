import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/navlogo.png';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef();

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const handleDropdownClick = () => {
    setDropdownOpen((open) => !open);
  };

  const scrollToFooter = (event) => {
    event.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/podcast" className="nav-link">
            <span className="nav-link-stack">
              <span>Alumni</span>
              <span>Unplugged</span>
            </span>
          </Link>
          <Link to="/events" className="nav-link">Events</Link>
          <div
            className="nav-link dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            onClick={handleDropdownClick}
            tabIndex={0}
          >
            PORs
            {dropdownOpen && (
              <div
                className="dropdown-menu"
                onClick={e => e.stopPropagation()}
              >
                <Link to="/curpor" className="dropdown-item">Current</Link>
                <Link to="/prevpor" className="dropdown-item">Previous</Link>
              </div>
            )}
          </div>
          <a href="#footer" onClick={scrollToFooter} className="nav-link" style={{ cursor: 'pointer' }}>
            <span className="nav-link-stack">
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
