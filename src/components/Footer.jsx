import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <footer id="footer" className="footer-main">
        <div className="footer-inner">
          <div>
            <div className="footer-section-title">Useful Links</div>
            <div className="footer-section-links">
              <Link to="/home" className="footer-link">Home</Link>
              <Link to="/events" className="footer-link">Events</Link>
              <Link to="/podcast" className="footer-link">Alumni Unplugged</Link>
            </div>
          </div>

          <div>
            <div className="footer-section-title">Contacts</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ marginTop: '2px' }}>
                <svg width="18" height="18" fill="#d1cfff" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
              </span>
              <span style={{ fontSize: '1rem', color: '#e0e0f0' }}>
                BITS Pilani, Hyderabad Campus<br />
                Hyderabad, Telangana 500078, IN
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>
                <svg width="18" height="18" fill="#d1cfff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
              </span>
              <span style={{ fontSize: '1rem', color: '#e0e0f0' }}>
                sarc@hyderabad(.)bits-pilani.ac.in
              </span>
            </div>
          </div>

          <div>
            <div className="footer-section-title">Social Media</div>
            <div className="footer-social-row">
              <a
                href="https://in.linkedin.com/company/sarcbphc"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <svg width="20" height="20" fill="#d1cfff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.17c.59-.53 1.36-.92 2.22-.92 1.66 0 3 1.34 3 3v5.75z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/sarc.bphc/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <svg width="20" height="20" fill="#d1cfff" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zm5.5-.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
              </a>
            </div>
            <div className="footer-message-row">
              <input
                type="text"
                placeholder="Contact Us"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="footer-message-input"
              />
              <button
                onClick={handleSendClick}
                className="footer-message-send"
                disabled={!message.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-bottom">
          Made with <span style={{ color: '#FF4A4A', fontSize: '1.1em', verticalAlign: 'middle' }}>♥</span> by SARC Tech Team
        </div>
      </footer>

      {showPopup && (
        <div className="footer-modal-overlay">
          <div className="footer-modal">
            <button
              onClick={handleClosePopup}
              className="footer-modal-close"
              aria-label="Close"
              title="Close"
            >
              &times;
            </button>
            <div style={{ marginBottom: '1.2rem' }}>
              <label className="footer-modal-label">
                Your Message
              </label>
              <textarea
                value={popupMessage}
                onChange={e => setPopupMessage(e.target.value)}
                rows={3}
                className="footer-modal-textarea"
              />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
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
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
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
            </div>
            <button
              onClick={handlePopupSend}
              className="footer-modal-send"
              disabled={!popupMessage.trim() || !popupEmail.trim() ||!popupContact.trim()|| sending}
              style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
            >
              {sending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
