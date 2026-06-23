import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="product-card" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
        <div className="product-image-container">
          {product.badge && <span className="badge">{product.badge}</span>}
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        </div>
        <div className="product-content">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-pricing">
            <span className="offer-price">₹{product.offerPrice.toLocaleString('en-IN')}</span>
            <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            {product.discount > 0 && (
              <span className="discount-tag">{product.discount}% OFF</span>
            )}
          </div>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Shop Now
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <div className="modal-image-container">
              <img src={product.image} alt={product.name} className="modal-image" />
            </div>
            <h2 className="modal-product-name">{product.name}</h2>
            <div className="product-pricing" style={{ justifyContent: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
              <span className="offer-price" style={{ fontSize: '1.5rem' }}>₹{product.offerPrice.toLocaleString('en-IN')}</span>
              <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              {product.discount > 0 && (
                <span className="discount-tag">{product.discount}% OFF</span>
              )}
            </div>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-btn"
              style={{ display: 'block' }}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
