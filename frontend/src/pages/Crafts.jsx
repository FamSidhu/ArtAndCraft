import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";

const Crafts = () => {
  const categories = ["Paper Craft", "Decorative Crafts", "Jewellery"];
  const [selectedCategory, setSelectedCategory] = useState("Paper Craft");
  const [minPrice, setMinPrice] = useState(0);
  const [availability, setAvailability] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [userRatings, setUserRatings] = useState({});

  const allCrafts = {
    "Paper Craft": [
      {
        image:
          "https://images.unsplash.com/photo-1597566833495-e4ad471783ec?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 800,
        rating: 4.2,
        available: true,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1714618814451-a24fb361aa88?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1588966422307-089a6a1ed789?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1590329915142-5682660e315f?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1739095637824-83da5339b152??auto=compress&cs=tinysrgb&w=400&h=300",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1739642148485-fb45e1dc3f3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1738516333786-39e043d1a9a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1629646621243-4447d9e040c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1739091068107-e7a9ae0d348c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1637679276613-9b0f80d39a40?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.8,
        available: false,
      },
    ],
    "Decorative Crafts": [
      {
        image:
          "https://images.unsplash.com/photo-1734215622177-45046461b28c?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1200,
        rating: 4.5,
        available: true,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661753006398-09e8b3388f2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        rating: 4.0,
        available: true,
      },
      {
        image:
          "https://images.unsplash.com/photo-1734215622177-45046461b28c?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        rating: 4.0,
        available: true,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661511892545-8ad9f81bd28f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        rating: 4.0,
        available: true,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1678752717582-f46bb39890c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        rating: 4.0,
        available: true,
      },
      {
        image: "",
        price: 1000,
        rating: 4.0,
        available: true,
      },
      {
        image: "",
        price: 1000,
        rating: 4.0,
        available: true,
      },
    ],
    Jewellery: [
      {
        image:
          "https://images.unsplash.com/photo-1722510825242-0d8f2064c2e2?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 2000,
        rating: 4.7,
        available: true,
      },
      {
        image:
          "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1725446572865-61e02db0d159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmRtYWRlJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1661009603404-200d20353dac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRtYWRlJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1573227895226-86880bc6ce44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1732706751937-1b8b256814a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1591249368095-e8db3ffd008d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://images.unsplash.com/photo-1740819920986-8462590eccdb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2015/03/12/01/42/apatite-669515_960_720.jpg",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image: "",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image: "",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image: "",
        price: 1500,
        rating: 3.5,
        available: false,
      },
      {
        image: "",
        price: 1500,
        rating: 3.5,
        available: false,
      },
    ],
  };

  const filteredCrafts = allCrafts[selectedCategory]
    .filter((item) => item.image && item.image.trim() !== "")
    .filter((item) => {
      const matchesPrice = item.price >= minPrice;
      const matchesRating = item.rating >= minRating;
      const matchesAvailability =
        availability === "all"
          ? true
          : availability === "available"
          ? item.available
          : !item.available;
      return matchesPrice && matchesRating && matchesAvailability;
    });

  const handleAddToCart = (craft) => {
    toast.success(`${selectedCategory} item added to cart!`);
  };

  const handleStarClick = (craftIndex, rating) => {
    const key = `${selectedCategory}-${craftIndex}`;
    setUserRatings((prev) => ({ ...prev, [key]: rating }));
  };

  return (
    <div className="bg-white text-black px-6  mt-8 md:px-20 py-16">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-10 text-center">
        Explore Our Crafts
      </h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border border-black transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        <div>
          <label className="block font-semibold mb-1">Min Price (PKR)</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            className="border border-black px-3 py-1 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Min Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="border border-black px-3 py-1 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border border-black px-3 py-1 rounded"
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      {/* Grid of Crafts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCrafts.map((craft, index) => {
          const key = `${selectedCategory}-${index}`;
          const userRating = userRatings[key] || 0;

          return (
            <motion.div
              key={index}
              className="border border-black p-4 rounded-lg shadow hover:shadow-lg transition bg-white"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={craft.image}
                alt="Craft"
                className="rounded w-full mb-3 h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Craft+Image";
                }}
              />
              <h3 className="font-bold text-lg mb-1">
                {selectedCategory} #{index + 1}
              </h3>
              <p className="text-sm mb-1">Price: Rs. {craft.price}</p>
              <p className="text-sm mb-1">Rating: ⭐ {craft.rating}</p>
              <p
                className={`text-sm mb-3 font-medium ${
                  craft.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {craft.available ? "In Stock" : "Out of Stock"}
              </p>

              {/* Star Rating (Font Awesome) */}
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-star ${
                      userRating >= star
                        ? "fas text-yellow-500"
                        : "far text-gray-300"
                    } cursor-pointer text-xl`}
                    onClick={() => handleStarClick(index, star)}
                  ></i>
                ))}
                {userRating > 0 && (
                  <span className="ml-2 text-sm text-gray-600">
                    You rated: {userRating}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
                  View Details
                </button>
                <button
                  className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white"
                  onClick={() => handleAddToCart(craft)}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Crafts;
