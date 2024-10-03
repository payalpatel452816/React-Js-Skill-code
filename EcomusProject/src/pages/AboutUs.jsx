import React from 'react'
import banner from '../assets/about-banner-01.jpg'
const AboutUs = () => {
    return (
        <div>
            <div class="relative h-[100vh] w-full">
                <img src={banner} alt='' />
                <div class="absolute inset-0 "></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 class="text-6xl text-white font-bold">Empowering women to achieve<br />
                        fitness goals with stle</h1>
                </div>
                <section className='text-center mt-20'>
                    <h1 className='text-4xl'>We are Ecomus</h1>
                    <p className='text-thin' >Welcome to our classic women's clothing store, where we believe<br />
                        that timeless style never goes out of fashion. Our collection features classic<br />
                        pieces that are both stylish and versatile, perfect for building a
                        wardrobe that will last for years.</p>
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
                </section>
            </div>
        </div>
    )
}

export default AboutUs