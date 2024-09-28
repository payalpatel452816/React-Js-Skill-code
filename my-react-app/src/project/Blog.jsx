import React from "react"
import img1 from "../project/assets/blog-2.jpg";
import img2 from "../project/assets/blog-3.jpg";
import img3 from "../project/assets/blog-4.jpg";
import img4 from "../project/assets/blog-5.jpg";
import img5 from "../project/assets/blog-6.jpg";
import img6 from "../project/assets/blog-7.jpg";
import img7 from "../project/assets/blog-8.jpg";
import img8 from "../project/assets/blog-9.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="my-12 px-4">
        <h1 className=" banner text-3xlfont-bold text-center mb-8">BLOG GRID</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img1}
              alt="Blog Image 1"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
            <div >
              <p>The next generation of leather alternatives</p>
            </div>
            
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img2}
              alt="Blog Image 2"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img3}
              alt="Blog Image 3"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img4}
              alt="Blog Image 4"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img5}
              alt="Blog Image 5"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img6}
              alt="Blog Image 6"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img7}
              alt="Blog Image 7"
              className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={img8}
              alt="Blog Image 8"
              className="w-full  transition-transform duration-300 ease-in-out transform hover:scale-110 h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-white transition duration-300">
              ACCESSORIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
