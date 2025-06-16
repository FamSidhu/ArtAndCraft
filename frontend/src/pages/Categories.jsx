import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Abstract Art", icon: "🌀", count: 12 },
    { name: "Oil Paintings", icon: "🎨", count: 18 },
    { name: "Acrylic Art", icon: "🖌️", count: 10 },
    { name: "Horse Painting", icon: "🐎", count: 8 },
    { name: "Birds", icon: "🕊️", count: 14 },
    { name: "Pencil Sketches", icon: "✏️", count: 9 },
  ];
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          All Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-6xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {category.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {category.count} items available
              </p>
              <Link to={`/categories/${category.name.toLowerCase()}`}>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 hover:text-white active:bg-gray-200 transition-colors">
                  Explore Category
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
