import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [coffeeMenu, setCoffeeMenu] = useState([]); // Define state for coffee menu
  const [loading, setLoading] = useState(true); // Optional: for loading state

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');
        const data = await response.json();
        setCoffeeMenu(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state if fetching
  }

  return (
    <div>
      <h1>Coffee Menu</h1>
      {coffeeMenu.length > 0 ? (
        coffeeMenu.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default Menu;
