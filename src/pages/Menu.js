import React, { useState } from 'react';
import './Menu.css';

function IceCreamMenu() {
  const categories = {
    "Party Pack 1 Ltr": [
      { name: "Mango", price: 180, discount: "10% Off", img: "1ltr-mango.jpg" },
      { name: "Pista", price: 180, img: "1ltr-pista.jpg" },
      { name: "Chocolate", price: 180, discount: "15% Off", img: "1ltr-chocolate.jpg" },
      { name: "Butterscotch", price: 180, img: "1ltr-butterscotch.jpg" },
      { name: "Strawberry", price: 140, img: "1ltr-strawberry-box.jpg" },
      { name: "Black Current", price: 210, discount: "5% Off", img: "1ltr-blackcurrant.jpg" },
      { name: "Vanilla", price: 140, img: "1ltr-vanilla.jpg" },
      { name: "Chikku", price: 200, discount: "10% Off", img: "1ltr-chikku.jpg" }
    ],
    "Small Cups": [
      { name: "Butterscotch", price: 8, img: "butterscotch.png" },
      { name: "Vanilla", price: 8, discount: "10% Off", img: "vanilla.png" },
      { name: "Strawberry", price: 8, img: "strawberry.png" },
      { name: "Chocolate", price: 8, discount: "5% Off", img: "chocolate.png" }
    ],
    "Large Cups": [
      { name: "Vanilla", price: 12, img: "vanilla.png" },
      { name: "Butterscotch", price: 15, discount: "10% Off", img: "butterscotch.png" },
      { name: "Strawberry", price: 15, img: "strawberry.png" },
      { name: "Mango", price: 15, discount: "5% Off", img: "mango.png" }
    ],
    "Bulk 4Ltr": [
      { name: "Strawberry", price: 550, discount: "Save ₹50", img: "4ltr-strawberry-box.jpg" },
      { name: "Mango", price: 600, img: "4ltr-mango.jpg" },
      { name: "Chocolate", price: 650, discount: "Save ₹100", img: "4ltr-chocolate.jpg" }
    ],
    "Cones": [
      { name: "Vanilla", price: 30, img: "cone-vanilla.jpg" },
      { name: "Chocolate", price: 35, discount: "5% Off", img: "cone-chocolate.jpg" }
    ],
    "Candies & Bars": [
      { name: "Candy", price: 5, discount: "10% Off", img: "candy.png" },
      { name: "Chocobar - Big", price: 20, img: "chocobar_big.png" },
      { name: "Mawa Kulfi", price: 30, discount: "10% Off", img: "matka.jpg" }
    ]
  };

  const [cart, setCart] = useState({});

  const handleQuantityChange = (item, quantity) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: { ...item, quantity: Number(quantity) }
    }));
  };

  const getTotal = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);
  };

  return (
    <section className="menu-container">
      <h2 className="menu-title">Our Ice Cream Menu</h2>

      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="menu-category">
          <h3 className="category-title">{category}</h3>
          <div className="menu-grid">
            {items.map((item, idx) => (
              <div key={idx} className="menu-card">
                {item.discount && <div className="discount-badge">{item.discount}</div>}
                <img src={`/images/${item.img}`} alt={item.name} className="menu-img" />
                <h4>{item.name}</h4>
                <p className="price">₹ {item.price.toFixed(2)}</p>
                <input
                  type="number"
                  min="0"
                  className="quantity-input"
                  value={cart[item.name]?.quantity || 0}
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total: ₹{getTotal().toFixed(2)}</p>
        <button className="place-order">Place Order</button>
      </div>
    </section>
  );
}

export default IceCreamMenu;
