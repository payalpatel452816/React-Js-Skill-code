import React from 'react'

const Demo = () => {
    return (
        <div>
            <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                <section
                    class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                    <section class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={img9} alt="" />
                        <h1 class="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                        <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
                        <h2 class="font-semibold mb-5">$29.99</h2>
                        <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
                    </section>

                    <section class="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img src={img10} alt="" />
                        <div class="space-x-1 flex justify-center mt-10">

                            <h1 class="text-3xl my-5">Comfortable Wooden Chair</h1>
                            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
                            <h2 class="font-semibold mb-5">$39.99</h2>
                            <button class="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">Add To Cart</button>
                   </div>
                    </section>


                </section>
            </section>
        </div>
    )
}

export default Demo