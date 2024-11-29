// src/OurMenu.js
import React from 'react';
import img1 from '../pages/img/Espressoso.gif';
import img2 from '../pages/img/cafe-americano.jpeg';
import img3 from '../pages/img/Caramel-Latte.jpg';
import img4 from '../pages/img/Cappuccino.jpg';
import img5 from '../pages/img/mocha.jpg';
import img6 from '../pages/img/macchiato.avif';
import img7 from '../pages/img/flat-white.avif';
import img8 from '../pages/img/affogato.webp';

import './compo.css'; // Ensure you have a CSS file for styling

const coffeeData = [
  { id: 1, name: 'Espresso', description: 'Strong and bold coffee', price: '$3.00', topCoffee: true, image: img1 },
  { id: 2, name: 'Americano', description: 'Espresso with hot water', price: '$3.50', topCoffee: true, image: img2 },
  { id: 3, name: 'Latte', description: 'Creamy coffee with steamed milk', price: '$4.00', topCoffee: true, image: img3 },
  { id: 4, name: 'Cappuccino', description: 'Coffee with steamed milk and foam', price: '$4.50', topCoffee: true, image: img4 },
  { id: 5, name: 'Mocha', description: 'Chocolate and coffee blend', price: '$4.75', topCoffee: true, image: img5 },
  { id: 6, name: 'Macchiato', description: 'Espresso with a dash of milk', price: '$3.25',topCoffee:true, image: img6},
  { id: 7, name: 'Flat White', description: 'Rich coffee with velvety microfoam', price: '$4.50',topCoffee:true, image: img7 },
  { id: 8, name: 'Affogato', description: 'Espresso poured over vanilla ice cream', price: '$5.00',topCoffee:true, image: img8 },



  // Add more coffee items as needed...
];

const TopCoffee = () => {
  return (
    <div className="container">
      <h2 className='heading'>Top Coffees</h2>
      <ul className='top'>
        {coffeeData.filter(coffee => coffee.topCoffee).map(coffee => (
          <li key={coffee.id} className='top-coffee'>
            <img src={coffee.image} alt={coffee.name} className="coffee-image" />
            <h2>{coffee.name}</h2>
            <p>{coffee.description}</p>
            <span>{coffee.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCoffee;
