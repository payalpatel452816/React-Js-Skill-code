import React from 'react'

const Product = () => {
  return (
    <div>
     <h1>
     <nav aria-label="breadcrumb" class="w-full p-4 text-gray-800">
	<ol class="flex h-8 space-x-2 text-gray-800">
		<li class="flex items-center">
			<a rel="noopener noreferrer" href="#" title="Back to homepage" class="flex items-center hover:underline">Home</a>
		</li>
		<li class="flex items-center space-x-1">
			<span class="text-gray-600">/</span>
			<a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Women</a>
		</li>
		<li class="flex items-center space-x-1">
			<span class="text-gray-600">/</span>
			<a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Cotton jersey top</a>
		</li>
	
	</ol>
</nav>
     </h1>
    </div>
  )
}

export default Product