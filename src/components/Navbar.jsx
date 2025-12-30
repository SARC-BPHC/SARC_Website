import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/navlogo.png';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-links desktop-only">
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
          <Link to="/echo" className="nav-link">Echo</Link>
          <Link to="/social" className="nav-link">Social</Link>
          <a href="#footer" onClick={scrollToFooter} className="nav-link" style={{ cursor: 'pointer' }}>
            <span className="nav-link-stack">
              <span>Contact</span>
              <span>Us</span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="mobile-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMobileMenu}
              />
              <motion.div
                className="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.3
                }}
              >
                <div className="mobile-menu-content">
                  <Link 
                    to="/podcast" 
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-nav-text">
                      <span>Alumni</span>
                      <span>Unplugged</span>
                    </span>
                  </Link>
                  
                  <Link 
                    to="/events" 
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    Events
                  </Link>
                  
                  <div className="mobile-dropdown">
                    <button 
                      className="mobile-dropdown-button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      PORs
                      <svg 
                        className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`}
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="mobile-dropdown-menu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link 
                            to="/curpor" 
                            className="mobile-dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            Current
                          </Link>
                          <Link 
                            to="/prevpor" 
                            className="mobile-dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            Previous
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link 
                    to="/echo" 
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    Echo
                  </Link>
                  
                  <Link 
                    to="/social" 
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    Social
                  </Link>
                  
                  <button 
                    onClick={(e) => {
                      scrollToFooter(e);
                      closeMobileMenu();
                    }} 
                    className="mobile-nav-link contact-button"
                  >
                    <span className="mobile-nav-text">
                      <span>Contact</span>
                      <span>Us</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
