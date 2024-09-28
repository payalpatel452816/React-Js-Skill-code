import React from 'react'
import review1 from '../project/assets/electronic-16.jpg'
import review2 from '../project/assets/electronic-8.png'
import review3 from '../project/assets/electronic-10.png'
import review4 from '../project/assets/electronic-12.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Review = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      };
    return (
        <div>
            <div className='bg-gray-200 w-full h-[100vh]'>
                <div className='py-20'>
                    <h2 className='text-xl flex items-center justify-center text-gray-800'>Happy Client</h2>
                    <p className='flex items-center justify-center'>See what our satisfied customers have to say about our electronic accessories.</p>
                    {/* <div class="flex  justify-center mt-10"> */}
                    <Slider {...settings}>
                        {/* CARD REVIEW */}
                        <div class="p-4 max-w-sm">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                                <div class="flex items-center mt-1">
                                    <svg class="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                                <h2 class="text-black dark:text-black text-lg font-medium">Best Online Fashion Site</h2>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                        " I always find  something  stylish and  affordable on this  web  fashion  site."
                                    </p>
                                   <h6>Robert smith</h6>
                                   <p>Customer  from USA</p>
                                   <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                                   <div className='flex'>
                                    <div>
                                        <img src={review1} alt='' className='w-16'/>
                                    </div>
                                    <p>3-in-1 Wireless Charger with Official MagSafe Charging 15G</p>
                                   </div>
                                    <p className='ml-10'>$105.95</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 max-w-sm">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                                <div class="flex items-center mt-1">
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                                <h2 class="text-black dark:text-black text-lg font-medium">Best Online Fashion Site</h2>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                        " I love this variety of  styles and  the high-quality clothing on this  web fashion site."
                                    </p>
                                   <h6>Allen Lyn</h6>
                                   <p>Customer   from France</p>
                                   <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                                   <div className='flex'>
                                    <div>
                                        <img src={review2} alt='' className='w-16'/>
                                    </div>
                                    <p>SoundForm Rise</p>
                                   </div>
                                    <p className='ml-10'>$7.95</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 max-w-sm">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                                <div class="flex items-center mt-1">
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                                <h2 class="text-black dark:text-black text-lg font-medium">Best Costomer Service</h2>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                        " I finally found a web  fashion  site with stylish  and flatteringoptions im my size."
                                    </p>
                                   <h6>Peter Rope</h6>
                                   <p>Customer  from USA</p>
                                   <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                                   <div className='flex'>
                                    <div>
                                        <img src={review3} alt='' className='w-16'/>
                                    </div>
                                    <p>UltraGlass 2  Treated  Screen  protector for Iphone 15 pro</p>
                                   </div>
                                    <p className='ml-10'>$18.95</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 max-w-sm">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                                <div class="flex items-center mt-1">
                                    <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg class="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                                <h2 class="text-black dark:text-black text-lg font-medium">Great Selection and Quality</h2>
                                <div class="flex flex-col justify-between flex-grow">
                                    <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                        "I love this variety of  styles and  the high-quality clothing on this  web fashion site ."
                                    </p>
                                   <h6>Robert smith</h6>
                                   <p>Customer  from USA</p>
                                   <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                                   <div className='flex'>
                                    <div>
                                        <img src={review4} alt='' className='w-16'/>
                                    </div>
                                    <p>3-in-1 Wireless Charger with Official MagSafe Charging 15W</p>
                                   </div>
                                    <p className='ml-10'>$16.95</p>
                                </div>
                            </div>
                        </div>
                        </Slider>
                        </div>
                </div>
            </div>
        // </div>
    )
}

export default Review