import React from 'react';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-disclaimer">
        <h4>Disclaimer</h4>
        <ul>
          <li>This website contains affiliate links. We may earn a small commission when you make a purchase through our links, at no extra cost to you.</li>
          <li>Prices and discounts shown on this website is from official websites but it may change time to time.</li>
          <li>Product prices are subject to change daily without notice. Please verify the latest price on the official website before making a purchase.</li>
          <li>We are not responsible for any price differences between this website and the official site.</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          Solo<span>Cart</span>
        </div>
        <p className="footer-tagline">Deals curated for you.</p>
      </div>
    </footer>
  );
};

export default Footer;
