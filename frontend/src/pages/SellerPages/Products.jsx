import React from 'react';

const Products = ({ onAddProduct }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Products</h1>
          <p className="text-gray-600">Manage your art and craft inventory</p>
        </div>
        <button 
          onClick={onAddProduct} 
          className="bg-black text-white mt-4 md:mt-0 py-2 px-4 rounded-lg flex items-center hover:bg-gray-800"
        >
          <i className="fas fa-plus mr-2"></i> Add New Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
              <option>All Categories</option>
              <option>Paintings</option>
              <option>Sculptures</option>
              <option>Pottery</option>
              <option>Jewelry</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Sort By: Latest</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {/* Product Card 1 */}
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg" 
              className="w-full h-full object-cover" 
              alt="Abstract Painting" 
            />
            <div className="absolute top-3 right-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">In Stock</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Abstract Painting</h3>
            <p className="text-gray-600 mb-2 text-sm line-clamp-2">A beautiful abstract painting with vibrant colors and textures.</p>
            <p className="font-bold text-lg mb-3">$199.99</p>
            <div className="flex justify-between">
              <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
              <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://cdn.pixabay.com/photo/2017/09/08/09/49/clay-2728442_960_720.jpg" 
              className="w-full h-full object-cover" 
              alt="Ceramic Vase" 
            />
            <div className="absolute top-3 right-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">In Stock</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Ceramic Vase</h3>
            <p className="text-gray-600 mb-2 text-sm line-clamp-2">Hand-crafted ceramic vase with intricate patterns.</p>
            <p className="font-bold text-lg mb-3">$89.99</p>
            <div className="flex justify-between">
              <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
              <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg" 
              className="w-full h-full object-cover" 
              alt="Wooden Sculpture" 
            />
            <div className="absolute top-3 right-3">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Low Stock</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Wooden Sculpture</h3>
            <p className="text-gray-600 mb-2 text-sm line-clamp-2">Handcrafted wooden sculpture depicting nature's beauty.</p>
            <p className="font-bold text-lg mb-3">$149.99</p>
            <div className="flex justify-between">
              <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
              <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://cdn.pixabay.com/photo/2021/01/04/06/07/bronze-jewelry-5886588_960_720.jpg" 
              className="w-full h-full object-cover" 
              alt="Handmade Jewelry" 
            />
            <div className="absolute top-3 right-3">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Out of Stock</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Handmade Jewelry</h3>
            <p className="text-gray-600 mb-2 text-sm line-clamp-2">Elegant handcrafted jewelry made with natural stones.</p>
            <p className="font-bold text-lg mb-3">$59.99</p>
            <div className="flex justify-between">
              <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
              <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        <nav className="flex items-center space-x-2">
          <a 
            href="#" 
            className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-chevron-left"></i>
          </a>
          <a 
            href="#" 
            className="px-3 py-1 rounded-lg border border-gray-300 bg-black text-white"
            onClick={(e) => e.preventDefault()}
          >
            1
          </a>
          <a 
            href="#" 
            className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition"
            onClick={(e) => e.preventDefault()}
          >
            2
          </a>
          <a 
            href="#" 
            className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition"
            onClick={(e) => e.preventDefault()}
          >
            3
          </a>
          <a 
            href="#" 
            className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Products;