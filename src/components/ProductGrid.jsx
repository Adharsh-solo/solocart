import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  if (!products || products.length === 0) {
    return (
      <div className="container" id="products">
        <div className="empty-state">
          <h3>No deals found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" id="products">
      <div className={`product-grid ${showAll ? 'show-all' : ''}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length > 6 && !showAll && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={() => setShowAll(true)}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
