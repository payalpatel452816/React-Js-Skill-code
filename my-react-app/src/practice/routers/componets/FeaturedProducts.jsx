import React from 'react';
import img1 from '../pages/img/Ethiopian-Coffee-Beans.jpg';
import img2 from '../pages/img/French-Press.jpg';
import img3 from '../pages/img/Best_Coffee_Subscriptions_In_The_UK.webp';
import img4 from '../pages/img/Colombian-coffee-beans.jpg';

const products = [
  {
    img: img1,
    title: 'Ethiopian Coffee Beans',
  },
  {
    img: img2,
    title: 'French Press',
  },
  {
    img: img3,
    title: 'Best Coffee Subscriptions',
  },
  {
    img: img4,
    title: 'Colombian Coffee Beans',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">{product.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <button className="bg-[#36261b] text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
