import React from 'react'

const Curd = () => {
  return (
    <div>
      
  <div class="container mx-auto mt-10"> 
    <h1 class="text-3xl font-bold text-center mb-6">Read Records</h1> 
    <div class="flex justify-between mb-4"> 
      <div class="relative w-42">
        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Type a Name..." required />
        <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <i class="fa-solid fa-magnifying-glass"></i>
            <span class="sr-only">Search</span>
        </button>
    </div>
      <div>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"> <i class="fa-solid fa-circle-xmark"></i>
          Delete Selected 
      </button> 
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mx-2"><i class="fa-solid fa-download"></i> 
          Export CSV 
      </button> 
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"><i class="fa-solid fa-plus"></i> 
          Create Record 
      </button> 
  </div> 
      </div>
       

    <table class="w-full border border-gray-300"> 
        <thead> 
            <tr class="bg-gray-100"> 
                <th class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </th> 
                <th class="px-4 py-2 text-left border border-gray-300">Name</th> 
                <th class="px-4 py-2 text-left border border-gray-300">Description</th> 
                <th class="px-4 py-2 text-left border border-gray-300">Price</th> 
                <th class="px-4 py-2 text-left border border-gray-300">Category</th> 
                <th class="px-4 py-2 text-left border border-gray-300">Action</th> 
            </tr> 
        </thead> 
        <tbody> 
            <tr class="hover:bg-gray-100"> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </td> 
                <td class="px-4 py-2 text-left border border-gray-300">Pillow</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Sleeping well is important.</td> 
                <td class="px-4 py-2 text-left border border-gray-300">$8.99</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Personal</td> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"> 
                        Edit 
                    </button> 
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"> 
                        Delete 
                    </button> 
                </td> 
            </tr> 
            <tr class="hover:bg-gray-100"> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </td> 
                <td class="px-4 py-2 text-left border border-gray-300">Earphone</td> 
                <td class="px-4 py-2 text-left border border-gray-300">You need this one if you love music.</td> 
                <td class="px-4 py-2 text-left border border-gray-300">$9.00</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Personal</td> 
                <td
cla
ss="px-4 py-2 text-left border border-gray-300"> 
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2 ml-3"> 
                        Edit 
                    </button> 
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  "> 
                        Delete 
                    </button> 
                </td> 
            </tr> 
            <tr class="hover:bg-gray-100"> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </td> 
                <td class="px-4 py-2 text-left border border-gray-300">Mouse</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Very useful if you love your computer.</td> 
                <td class="px-4 py-2 text-left border border-gray-300">$11.35</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Personal</td> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"> 
                        Edit 
                    </button> 
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"> 
                        Delete 
                    </button> 
                </td> 
            </tr> 
            <tr class="hover:bg-gray-100"> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </td> 
                <td class="px-4 py-2 text-left border border-gray-300">Trash Can</td> 
                <td class="px-4 py-2 text-left border border-gray-300">It will help you maintain cleanliness.</td> 
                <td class="px-4 py-2 text-left border border-gray-300">$3.95</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Sports</td> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"> 
                        Edit 
                    </button> 
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"> 
                        Delete 
                    </button> 
                </td> 
            </tr> 
            <tr class="hover:bg-gray-100"> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <input type="checkbox" class="m-1"/> 
                </td> 
                <td class="px-4 py-2 text-left border border-gray-300">Eye Glasses</td> 
                <td class="px-4 py-2 text-left border border-gray-300">It will make you read better.</td> 
                <td class="px-4 py-2 text-left border border-gray-300">$6.00</td> 
                <td class="px-4 py-2 text-left border border-gray-300">Sports</td> 
                <td class="px-4 py-2 text-left border border-gray-300"> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"> 
                        Edit 
                    </button> 
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md "> 
                        Delete 
                    </button> 
                </td> 
            </tr> 
        </tbody> 
    </table> 
<div class="flex justify-between mt-4"> 
        <div class="pagination"> 
            <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md"> 
                1 
            </button> 
            <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md"> 
                2 
            </button> 
            <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md"> 
                &gt; 
            </button> 
        </div> 
        <div class="flex">
          <input type="text" placeholder=" Type Page Number"
        class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
        />
          <button type="submit" class="bg-blue-800 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Go</button>
      </div>
    </div> 
     </div>
     </div>
  )
}

export default Curd