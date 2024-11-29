import React from 'react';
import './compo.css'; // Optional: For styling
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Our Coffee Cafe</h3>
        <p>Delicious coffee and toast made with love!</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/OurMenu">OurMenu</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? "underline" : ""}>ContactUs</NavLink></li>

        </ul>
      </div>
      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <hr className="small-hr" />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Our Coffee Cafe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
