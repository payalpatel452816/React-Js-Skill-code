import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../project/assets/electronic-1.jpg";
import blog2 from "../project/assets/electronic-2.jpg";
import blog3 from "../project/assets/electronic-3.jpg";
import blog4 from "../project/assets/electronic-4.jpg";
import blog5 from "../project/assets/electronic-5.jpg";
import blog6 from "../project/assets/electronic-6.jpg";


const BlogPost = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Blog Post</h1>
      </div>
      <div className="blog mt-10">
        <Slider {...settings}>
          {[
            { img: blog1, title: 'pop-punk is back in fashion' },
            { img: blog2, title: 'The next generation of leather alternatives' },
            { img: blog3, title: 'An Exclusive Clothing Collaboration' },
            { img: blog4, title: 'The next generation of leather alternatives' },
            { img: blog5, title: 'The next generation of leather alternatives' },
            { img: blog6, title: 'The next generation of leather alternatives' },
          ].map((blog, index) => (
            <div key={index} className="blog-item p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-[50%] object-cover transition-all duration-300 hover:scale-125" src={blog.img} alt={blog.title} />
              </div>
                <div className="p-4">
                  <p className="text-sm font-semibold">{blog.title}</p>
                  <button className="mt-2  text-black px-4 py-2 underline  hover:text-green-600 " >
                    Read More
                  </button>
                  
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogPost;

// const BlogPost = () => {
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     infinite: true,
//   };

//   return (
//     <div>
//       <div>
//         <h1>Blog Post</h1>
//       </div>
//       <div className="blog mt-10 ">
//         <Slider {...settings}>
//           <div className="blog-item">
//             <div>
//               <img src={blog1} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div>
//               <img src={blog2} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div>
//               <img src={blog3} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div>
//               <img src={blog4} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div>
//               <img src={blog5} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//           <div className="blog-item">
//             <div>
//               <img src={blog6} alt="" />
//               <p>pop-punk is back in fashion</p>
//               <button>read more</button>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
