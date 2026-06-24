import React, { useState, useRef } from 'react';
import logoImg from '../assets/solocart.jpeg';

const Navbar = ({ searchQuery, setSearchQuery, filteredProducts }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchExpanded(true);
    setTimeout(() => {
      searchRef.current?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setSearchQuery('');
    setIsSearchExpanded(false);
    setIsFocused(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    closeSearch();
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
            <div className="search-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                ref={searchRef}
                type="text"
                className="search-input"
                placeholder="Search deals..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value === '') {
                    setIsSearchExpanded(false);
                  }
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              />
              
              {searchQuery && (
                <button 
                  className="clear-search-btn" 
                  onClick={closeSearch}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown */}
            {searchQuery && isFocused && filteredProducts && filteredProducts.length > 0 && (
              <ul className="search-dropdown">
                {filteredProducts.map(product => (
                  <li 
                    key={product.id} 
                    className="search-dropdown-item" 
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleProductSelect(product);
                    }}
                  >
                    <img src={product.image} alt={product.name} className="dropdown-image" />
                    <div className="dropdown-info">
                      <span className="dropdown-name">{product.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {isSearchExpanded && !searchQuery && (
              <button className="mobile-search-close" onClick={closeSearch} aria-label="Close search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-image-container">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            </div>
            <h2 className="modal-product-name">{selectedProduct.name}</h2>
            <div className="product-pricing" style={{ justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
              <span className="offer-price" style={{ fontSize: '1.5rem' }}>₹{selectedProduct.offerPrice.toLocaleString('en-IN')}</span>
              <span className="original-price">₹{selectedProduct.originalPrice.toLocaleString('en-IN')}</span>
              {selectedProduct.discount > 0 && (
                <span className="discount-tag">{selectedProduct.discount}% OFF</span>
              )}
            </div>
            <a
              href={selectedProduct.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-btn"
              style={{ display: 'block', textAlign: 'center' }}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
