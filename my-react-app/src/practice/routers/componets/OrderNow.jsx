import React, { useState } from 'react';
import Menu from './Menu'; // Ensure this points to your menu data

const OrderNow = () => {
  const [orders, setOrders] = useState({});
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (id, quantity) => {
    const parsedQuantity = parseInt(quantity, 10) || 0; // Ensure it's a number
    setOrders(prev => ({
      ...prev,
      [id]: parsedQuantity,
    }));
  };

  const handleAddToCart = (coffee) => {
    const quantity = orders[coffee.id] || 0;
    if (quantity > 0) {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === coffee.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === coffee.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        } else {
          return [...prevCart, { ...coffee, quantity }];
        }
      });
      setOrders(prev => ({ ...prev, [coffee.id]: 0 }));
    }
  };

  const handleOrderSubmit = () => {
    alert('Your order has been placed!');
    console.log(cart);
    setCart([]); // Clear the cart after submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Order Now</h1>
      <ul className="space-y-4">
        {Menu.map(coffee => (
          <li key={coffee.id} className="flex justify-between items-center border p-4 rounded shadow">
            <div>
              <h2 className="text-xl">{coffee.name}</h2>
              <p>{coffee.description}</p>
              <span className="font-bold text-red-500">{coffee.price}</span>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                min="0"
                value={orders[coffee.id] || 0}
                onChange={(e) => handleQuantityChange(coffee.id, e.target.value)}
                className="border rounded px-2 w-16"
              />
              <button
                onClick={() => handleAddToCart(coffee)}
                className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleOrderSubmit}
        className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderNow;
