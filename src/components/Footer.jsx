import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Footer.css';

function Footer() {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupEmail, setPopupEmail] = useState('');
  const [popupContact, setPopupContact] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendClick = () => {
    setPopupMessage(message);
    setPopupEmail('');
    setPopupContact('');
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  const handlePopupSend = async () => {
    setSending(true);
    const templateParams = {
      user_email: popupEmail,
      message: popupMessage,
      contact: popupContact,
    };

    try {
      await emailjs.send(
        'service_in074m9',
        'template_064vdu3',
        templateParams,
        'mk4Z2nnQZ9Ld32l-k'
      );
      alert('Message sent!');
      setShowPopup(false);
      setMessage('');
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error(error);
    }
    setSending(false);
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };


  return (
    <>
      <motion.footer 
        id="footer" 
        className="footer-main"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="footer-inner">
          <motion.div variants={sectionVariants}>
            <motion.div 
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              SARC BPHC
            </motion.div>
            <motion.div 
              className="footer-brand-subtitle"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Student Alumni Relations Cell<br />
              BITS Pilani, Hyderabad Campus
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <motion.div 
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Useful Links
            </motion.div>
            <div className="footer-section-links">
              <motion.div variants={linkVariants}>
                <Link to="/home" className="footer-link">Home</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to="/events" className="footer-link">Events</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to="/podcast" className="footer-link">Alumni Unplugged</Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <motion.div 
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Contacts
            </motion.div>
            <motion.div 
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.5rem' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span style={{ marginTop: '2px' }}>
                <svg width="18" height="18" fill="#d1cfff" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
              </span>
              <a
                href="https://maps.app.goo.gl/Z4JAb8HqnNSu6dXX7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: '1rem', color: '#e0e0f0' }}>
                  BITS Pilani, Hyderabad Campus<br />
                  Hyderabad, Telangana 500078, IN
                </span>
              </a>
            </motion.div>
            <motion.div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" fill="#d1cfff" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#d1cfff" strokeWidth="2" fill="none"/><polyline points="22,6 12,13 2,6" stroke="#d1cfff" strokeWidth="2" fill="none"/></svg>
              </span>
              <a href="mailto:sarc@hyderabad.bits-pilani.ac.in">
                <span style={{ fontSize: '1rem', color: '#e0e0f0' }}>
                  sarc@hyderabad.bits-pilani.ac.in
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <motion.div 
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Social Media
            </motion.div>
            <ul className="animated-social-buttons">
              <motion.li 
                style={{
                  '--i': '#0077B5',
                  '--j': '#005885'
                }}
                variants={socialVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://in.linkedin.com/company/sarcbphc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-social-link"
                >
                  <span className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span className="social-title">LinkedIn</span>
                </a>
              </motion.li>
              <motion.li 
                style={{
                  '--i': '#E4405F',
                  '--j': '#833AB4'
                }}
                variants={socialVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.instagram.com/sarc.bphc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-social-link"
                >
                  <span className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zm5.5-.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                    </svg>
                  </span>
                  <span className="social-title">Instagram</span>
                </a>
              </motion.li>
            </ul>
            <motion.div 
              className="footer-message-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Contact Us"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="footer-message-input"
              />
              <motion.button
                onClick={handleSendClick}
                className="footer-message-send button-press"
                disabled={!message.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <motion.hr 
          className="footer-hr"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        />
        <div className="footer-bottom">
          Made with <span style={{ color: '#FF4A4A', fontSize: '1.1em', verticalAlign: 'middle' }}>♥</span> by the SARC Tech Team
        </div>
      </motion.footer>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="footer-modal-overlay modal-backdrop show"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="footer-modal modal-content show"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <motion.button
                onClick={handleClosePopup}
                className="footer-modal-close"
                aria-label="Close"
                title="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                &times;
              </motion.button>
              <motion.div 
                style={{ marginBottom: '1.2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="footer-modal-label">
                  Your Message
                </label>
                <textarea
                  value={popupMessage}
                  onChange={e => setPopupMessage(e.target.value)}
                  rows={3}
                  className="footer-modal-textarea"
                />
              </motion.div>
              <motion.div 
                style={{ marginBottom: '1.2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label className="footer-modal-label">
                  Your Name
                </label>
                <input
                  type="email"
                  value={popupEmail}
                  onChange={e => setPopupEmail(e.target.value)}
                  placeholder="Lionel Ronaldo"
                  className="footer-modal-email"
                />
              </motion.div>
              <motion.div 
                style={{ marginBottom: '1.2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label className="footer-modal-label">
                  How Can We Contact You
                </label>
                <input
                  type="Contact"
                  value={popupContact}
                  onChange={e => setPopupContact(e.target.value)}
                  placeholder="Email/PhoneNumber"
                  className="footer-modal-email"
                />
              </motion.div>
              <motion.button
                onClick={handlePopupSend}
                className="footer-modal-send button-press"
                disabled={!popupMessage.trim() || !popupEmail.trim() || !popupContact.trim() || sending}
                style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                whileHover={{ scale: sending ? 1 : 1.05 }}
                whileTap={{ scale: sending ? 1 : 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {sending ? (
                  <>
                    <span className="loading-spinner" style={{ marginRight: '8px' }}></span>
                    Sending...
                  </>
                ) : 'Send'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Footer;
