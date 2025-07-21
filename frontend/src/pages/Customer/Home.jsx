import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.json";

const Home = () => {
  // Import useRef and useEffect for intersection observer and animation
  const ctaRef = useRef(null);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlink(true);
          setTimeout(() => setBlink(false), 1200); // Animation duration
        }
      },
      { threshold: 0.5 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] px-6 md:px-20 mt-8"
        style={{
          backgroundImage: "url('/craft2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Discover Unique Art & Crafts
          </h1>
          <p className="text-lg mb-8 text-white">
            Support local artists and craftsmen. Shop beautiful, authentic,
            handmade creations from across Pakistan.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/categories">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Shop Arts
                </button>
              </Link>
              <Link to="/crafts">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                  Browse Crafts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      {(() => {
        const categories = [
          { name: "Abstract Art", icon: "🌀", count: 12 },
          { name: "Oil Paintings", icon: "🎨", count: 18 },
          { name: "Acrylic Art", icon: "🖌️", count: 10 },
          { name: "Horse Painting", icon: "🐎", count: 8 },
          { name: "Birds", icon: "🕊️", count: 14 },
          { name: "Pencil Sketches", icon: "✏️", count: 9 },
          { name: "Decorative Crafts", icon: "🧵", count: 11 },
          { name: "Jewellery", icon: "💍", count: 15 },
          { name: "Paper Crafts", icon: "📄", count: 7 },
        ];
        return (
          <div className="min-h-screen bg-gray-50 py-8">
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
                    <div className="text-6xl mb-4 text-center">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">
                      {category.count} items available
                    </p>
                    <Link to={`/categories/${category.name.toLowerCase()}`}>
                      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700 hover:text-white active:bg-gray-200 transition-colors">
                        Explore Category
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      {/* Featured Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl font-semibold mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="border border-black rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-bold text-lg">{item.price}</h3>
              <p className="text-sm">{item.description}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 text-black py-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose ArtLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold text-xl mb-2">Authentic Art</h3>
            <p>Each item is uniquely handmade by skilled artisans.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Secure Shopping</h3>
            <p>Fast, secure checkout with reliable delivery.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Support Local Talent</h3>
            <p>Help artists and craftsmen grow their small businesses.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          What Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black p-6 rounded-lg shadow">
            <p>
              "The quality is amazing! I ordered a painting and it was exactly
              like shown. Love it!"
            </p>
            <p className="mt-4 font-bold"> Ayesha, Lahore</p>
          </div>
          <div className="border border-black p-6 rounded-lg shadow">
            <p>
              "Beautiful craftsmanship. The product arrived on time and very
              well packed."
            </p>
            <p className="mt-4 font-bold"> Ahmad, Karachi</p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section
        className="bg-gray-200 text-black text-center py-16 px-6 md:px-20"
        ref={ctaRef}
      >
        <h2 className="text-3xl font-bold mb-4">
          Join the Art & Craft Revolution
        </h2>
        <p className="mb-6">Sign up now and support local creators!</p>
        <Link to="/login">
          <button
            className={`bg-black text-white px-6 py-3 rounded-full hover:bg-gray-700 hover:text-white transition
                ${blink ? "animate-blink-shake" : ""}`}
            style={{ display: "inline-block" }}
          >
            Get Started
          </button>
        </Link>
      </section>
      {/* Animation style */}
      <style>
        {`
            @keyframes blink-shake {
              0% { transform: translateX(0); }
              10% { transform: translateX(-10px); }
              20% { transform: translateX(10px); }
              30% { transform: translateX(-10px); }
              40% { transform: translateX(10px); }
              50% { transform: translateX(-10px); }
              60% { transform: translateX(10px); }
              70% { transform: translateX(-10px); }
              80% { transform: translateX(10px); }
              90% { transform: translateX(-10px); }
              100% { transform: translateX(0); }
            }
            .animate-blink-shake {
              animation: blink-shake 1.2s cubic-bezier(.36,.07,.19,.97) both;
            }
          `}
      </style>
    </div>
  );
};

export default Home;
