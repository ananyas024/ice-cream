import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data (replace with API call)
    const mockProducts = [
      { id: 1, name: 'Vanilla Ice Cream', price: 5, image: 'vanilla.jpg' },
      { id: 2, name: 'Chocolate Ice Cream', price: 6, image: 'chocolate.jpg' },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-list">
      <h2>Our Ice Creams</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;