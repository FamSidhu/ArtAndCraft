import React, { useState } from 'react';

const Portfolio = ({ onAddPortfolio }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
          <p className="text-gray-600">Showcase your best works and projects</p>
        </div>
        <button 
          onClick={onAddPortfolio} 
          className="bg-black text-white mt-4 md:mt-0 py-2 px-4 rounded-lg flex items-center hover:bg-gray-800"
        >
          <i className="fas fa-plus mr-2"></i> Add New Project
        </button>
      </div>

      {/* Portfolio Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'all' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('all')}
            >
              All Projects
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'paintings' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('paintings')}
            >
              Paintings
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'sculptures' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('sculptures')}
            >
              Sculptures
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'exhibitions' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('exhibitions')}
            >
              Exhibitions
            </button>
          </nav>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Portfolio Item 1 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2019/12/16/15/03/painting-4699414_960_720.jpg" 
              alt="Abstract Art Exhibition" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Abstract Art Exhibition</h3>
              <p className="text-sm">New York City Gallery, 2024</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_960_720.jpg" 
              alt="Colorful Acrylics Collection" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Colorful Acrylics Collection</h3>
              <p className="text-sm">Summer Series, 2023</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2015/05/31/10/59/pottery-791122_960_720.jpg" 
              alt="Ceramic Pottery Workshop" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Ceramic Pottery Workshop</h3>
              <p className="text-sm">LA Art Center, 2024</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2016/01/02/03/48/sculpture-1117875_960_720.jpg" 
              alt="Wooden Sculpture Series" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Wooden Sculpture Series</h3>
              <p className="text-sm">Nature Inspired, 2023</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
          </div>
        </div>

        {/* Portfolio Item 5 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2017/01/31/23/42/art-2028003_960_720.png" 
              alt="Digital Art Collection" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Digital Art Collection</h3>
              <p className="text-sm">Online Exhibition, 2024</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
          </div>
        </div>

        {/* Portfolio Item 6 */}
        <div className="portfolio-card">
          <div className="image-container relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_960_720.jpg" 
              alt="Contemporary Brushwork" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="image-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Contemporary Brushwork</h3>
              <p className="text-sm">Chicago Art Fair, 2023</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="border border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100">Edit</button>
            <button className="border border-red-500 px-3 py-1 rounded-lg text-sm text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
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
            <i className="fas fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Portfolio;