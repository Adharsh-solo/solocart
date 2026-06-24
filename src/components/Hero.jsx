import React from 'react';
import ProductCard from './ProductCard';

const Hero = () => {
  return (
    <section className="container">
      <div className="hero">
        <h1>Top Deals & Best Offers</h1>
        <p>Discover trending products, exclusive discounts, and the best online deals from trusted brands(Flipkart,Myntra,etc.).</p>
        <button 
          className="shop-btn" 
          style={{ display: 'inline-block', width: 'auto', padding: '1rem 2rem', fontSize: '1.125rem' }}
          onClick={() => {
            const productsSection = document.getElementById('products');
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Browse Deals
        </button>
      </div>
    </section>
  );
};

export default Hero;
