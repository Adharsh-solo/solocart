import React, { useState, useMemo } from 'react';
import './App.css';
import productsData from './products';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const categories = ['all', 'Beauty', "Men's wear", "Women's wear", 'Sneakers'];

  // Filter for grid (only by category)
  const gridProducts = useMemo(() => {
    return productsData.filter(product => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'Sneakers') return product.category === "Men's Sneakers" || product.category === "Women's Sneakers";
      return product.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Filter for search (only by search query)
  const searchProducts = useMemo(() => {
    if (!searchQuery) return [];
    return productsData.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredProducts={searchProducts} />
      <Hero />
      <div className="container">
        <div className="filter-bar">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {selectedCategory === 'Sneakers' ? (
        <>
          <div className="container">
            <h2 className="section-heading">Men's Sneakers</h2>
          </div>
          <ProductGrid products={gridProducts.filter(p => p.category === "Men's Sneakers")} />
          
          <div className="container">
            <h2 className="section-heading">Women's Sneakers</h2>
          </div>
          <ProductGrid products={gridProducts.filter(p => p.category === "Women's Sneakers")} />
        </>
      ) : (
        <ProductGrid products={gridProducts} />
      )}
      <Footer />

      {isOffline && (
        <div className="offline-overlay">
          <div className="offline-modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="offline-icon">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
              <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
            <div className="offline-text">
              <strong>No Internet Connection</strong>
              <p>Please check your network settings.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
