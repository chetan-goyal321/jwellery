import React from 'react';
import './Footer.css'; // Ensure you create this CSS file as well

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h1 className="footer-logo">Brand</h1>
        </div>
        <ul className="footer-menu">
          <li><a href="#about" className="footer-link">About Us</a></li>
          <li><a href="#services" className="footer-link">Services</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
          <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-link">Facebook</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
