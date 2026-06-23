import React, { useState, useRef } from 'react';
import logoImg from '../assets/solocart.jpeg';

const Navbar = ({ searchQuery, setSearchQuery, filteredProducts }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchExpanded(true);
    setTimeout(() => {
      searchRef.current?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setIsSearchExpanded(false);
    setIsFocused(false);
  };

  const handleProductSelect = (productName) => {
    setSearchQuery(productName);
    closeSearch();
    // Scroll to products
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="container">
      <nav className="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="SoloCart Logo" className="nav-logo" />
          <span>Solo</span><span className="cart-text">Cart</span>
        </div>
        
        <div className="nav-search-container">
          {/* Mobile Search Icon */}
          <button className="mobile-search-toggle" onClick={toggleSearch} aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Search Input Area */}
          <div className={`nav-search ${isSearchExpanded ? 'expanded' : ''}`}>
            
            <input
              ref={searchRef}
              type="text"
              className="search-input"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />

            {isSearchExpanded && (
              <button className="mobile-search-close" onClick={closeSearch} aria-label="Close search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}

            {/* Autocomplete Dropdown */}
            {searchQuery && isFocused && filteredProducts && filteredProducts.length > 0 && (
              <ul className="search-dropdown">
                {filteredProducts.map(product => (
                  <li key={product.id} className="search-dropdown-item" onClick={() => handleProductSelect(product.name)}>
                    <img src={product.image} alt={product.name} className="dropdown-image" />
                    <div className="dropdown-info">
                      <span className="dropdown-name">{product.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
