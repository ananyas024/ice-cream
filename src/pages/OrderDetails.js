import React from 'react';

function OrderDetails() {
  const order = {
    id: 1,
    customerName: 'John Doe',
    items: [
      { name: 'Vanilla Ice Cream', quantity: 2, price: 5 },
      { name: 'Chocolate Ice Cream', quantity: 1, price: 6 },
    ],
    total: 16,
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p>Customer: {order.customerName}</p>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
}

export default OrderDetails;