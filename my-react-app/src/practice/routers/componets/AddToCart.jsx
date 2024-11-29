// src/Cart.js
import React, { useState } from 'react';
import './contact.css';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Espresso', price: 3.00, quantity: 1 },
    { id: 2, name: 'Cappuccino', price: 4.50, quantity: 1 },
    { id: 3, name: 'Latte', price: 4.00, quantity: 1 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Prevent negative quantities
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  />
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
