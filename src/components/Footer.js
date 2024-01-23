import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 id="contact-us">Contact Us</h3>
          <p>Phone: (919) 482 0611</p>
          <p>Address: 108 Curly Dr,<br /> Charlotte, NC, 27705</p>
        </div>
        <div className="footer-social">
          <ul>
            <img src="/images/facebook icon.png" alt="Facebook" className="social-icon" width="60px" height="60px" />
            <img src="/images/twitter icon.png" alt="Twitter" className="social-icon" width="60px" height="60px" />
            <img src="/images/instagram icon.png" alt="Instagram" className="social-icon" width="60px" height="60px" />
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Curly Girl Hair Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;