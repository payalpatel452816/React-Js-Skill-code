import React, { useState } from 'react';
import './page.css';
import img1 from '../pages/img/Espressoso.gif';
import img2 from '../pages/img/cafe-americano.jpeg';
import img3 from '../pages/img/Cafe Latte.jpg';
import img4 from '../pages/img/Cappuccino.jpg';
import img5 from '../pages/img/mocha-coffee.webp';
import img6 from '../pages/img/flat-white.avif';
import img7 from '../pages/img/macchiato.avif';
import img8 from '../pages/img/affogato.webp';
import img9 from '../pages/img/Cold Brew.jpg';
import img10 from '../pages/img/nitro-cold-brew.webp';
import img11 from '../pages/img/ChaiLatte.jpg';
import img12 from '../pages/img/Chai-Matcha-Latte.jpg';
import img13 from '../pages/img/Masala-Iced-Tea.avif';
import img14 from '../pages/img/Croissants.webp';
import img15 from '../pages/img/Blueberry-Muffins.jpg';
import img16 from '../pages/img/ChocolateChipCookies.jpg';
import img17 from '../pages/img/cheese-scones.jpg';
import img18 from '../pages/img/avocado-toast.jpg';
import img19 from '../pages/img/granola-bars.jpg';
import img20 from '../pages/img/cheese-toast.webp';

const coffeeData = [
  { id: 1, name: 'Espresso', description: 'Strong and bold coffee', price: '$3.00', image: img1 },
  { id: 2, name: 'Americano', description: 'Espresso with hot water', price: '$3.50', image: img2 },
  { id: 3, name: 'Latte', description: 'Creamy coffee with steamed milk', price: '$4.00', image: img3 },
  { id: 4, name: 'Cappuccino', description: 'Coffee with steamed milk and foam', price: '$4.50', image: img4 },
  { id: 5, name: 'Mocha', description: 'Chocolate and coffee blend', price: '$4.75', image: img5 },
  { id: 6, name: 'Flat White', description: 'Rich coffee with velvety microfoam', price: '$4.50', image: img6 },
  { id: 7, name: 'Macchiato', description: 'Espresso with a dash of milk', price: '$3.25', image: img7 },
  { id: 8, name: 'Affogato', description: 'Espresso poured over vanilla ice cream', price: '$5.00', image: img8 },
  { id: 9, name: 'Cold Brew', description: 'Smooth and refreshing cold coffee', price: '$4.00', image: img9 },
  { id: 10, name: 'Nitro Cold Brew', description: 'Cold brew infused with nitrogen', price: '$4.50', image: img10 },
  { id: 11, name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '$4.00', image: img11 },
  { id: 12, name: 'Matcha Latte', description: 'Green tea powder with steamed milk', price: '$4.50', image: img12 },
  { id: 13, name: 'Iced Tea', description: 'Refreshing iced herbal or black tea', price: '$3.00', image: img13 },
  { id: 14, name: 'Croissant', description: 'Flaky butter croissant', price: '$2.50', image: img14 },
  { id: 15, name: 'Blueberry Muffin', description: 'Moist muffin with blueberries', price: '$3.00', image: img15 },
  { id: 16, name: 'Chocolate Chip Cookie', description: 'Classic cookie with chocolate chips', price: '$2.00', image: img16 },
  { id: 17, name: 'Scone', description: 'Delicious scone with clotted cream', price: '$3.50', image: img17 },
  { id: 18, name: 'Avocado Toast', description: 'Smashed avocado on toasted bread', price: '$5.50', image: img18 },
  { id: 19, name: 'Granola Bar', description: 'Nutty and chewy granola bar', price: '$2.00', image: img19 },
  { id: 20, name: 'Cheese Toastie', description: 'Melted cheese in toasted bread', price: '$4.00', image: img20 },
];

const OurMenu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (coffee) => {
    setCart((prevCart) => [...prevCart, coffee]);
    alert(`${coffee.name} has been added to your cart!`);
  };

  return (
    <div>
      <h1 className='heading'>Our Coffee Menu</h1>
      <ul className='menu-list'>
        {coffeeData.map(coffee => (
          <li key={coffee.id} className='menu-item'>
            <img src={coffee.image} alt={coffee.name} className='menu-image' />
            <div className='menu-details'>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
              <span>{coffee.price}</span>
              <button onClick={() => addToCart(coffee)} className='add-to-cart-button'>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
     
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default OurMenu;
