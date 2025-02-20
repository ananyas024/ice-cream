import React, { useState } from 'react';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="quantity-control">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;