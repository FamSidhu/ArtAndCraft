import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Feedback = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  // Simulate live updates
  useEffect(() => {
    const timer = setTimeout(() => {
      const liveFeedback = document.getElementById('live-feedback');
      if (liveFeedback) {
        const newFeedback = document.createElement('div');
        newFeedback.className = 'p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg';
        newFeedback.innerHTML = `
          <p class="font-medium">New customer just viewed your portfolio</p>
          <p class="text-sm text-gray-500">Just now</p>
        `;
        liveFeedback.prepend(newFeedback);
        gsap.from(newFeedback, { 
          opacity: 0, 
          y: 20, 
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Customer Feedback</h1>
        <p className="text-gray-600">Monitor and respond to customer reviews and ratings</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm mb-1">Average Rating</h3>
          <div className="flex items-center">
            <p className="text-3xl font-bold mr-2">4.8</p>
            <div className="flex">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Based on 128 reviews</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm mb-1">Review Distribution</h3>
          <div className="space-y-2 mt-2">
            <div className="flex items-center">
              <span className="text-sm w-6">5★</span>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm w-8">75%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm w-6">4★</span>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-sm w-8">20%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm w-6">3★</span>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: '3%' }}></div>
              </div>
              <span className="text-sm w-8">3%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm w-6">2★</span>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
              </div>
              <span className="text-sm w-8">1%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm w-6">1★</span>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
              </div>
              <span className="text-sm w-8">1%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm mb-1">Recent Reviews</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>8% this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm mb-1">Pending Responses</h3>
          <p className="text-3xl font-bold">5</p>
          <button className="text-blue-500 text-sm mt-1 inline-block">View all</button>
        </div>
      </div>

      {/* Reviews Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search reviews..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex space-x-2">
            <select 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <select 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6 mb-8" id="reviews-container">
        {/* Review 1 */}
        <div className="feedback-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              className="w-12 h-12 rounded-full object-cover mr-4" 
              alt="Reviewer" 
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="font-semibold">John Doe</h4>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <span className="text-sm text-gray-500">Apr 20, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Absolutely in love with the ceramic vase I purchased! The craftsmanship is extraordinary and it has become the centerpiece of my living room. The attention to detail is impressive, and the colors are even more vibrant in person than in the photos.</p>
              <div className="flex space-x-3">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/09/08/09/49/clay-2728442_960_720.jpg" 
                  className="w-16 h-16 rounded object-cover" 
                  alt="Review Photo" 
                />
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-start">
                  <i className="fas fa-reply text-gray-400 mt-1 mr-2"></i>
                  <div>
                    <p className="font-semibold text-sm">Your response:</p>
                    <p className="text-sm text-gray-600">Thank you so much for your kind words, John! I'm thrilled that you love the vase and that it has found a special place in your home. I put a lot of care into each piece, so it means a lot to hear such positive feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="feedback-card bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              className="w-12 h-12 rounded-full object-cover mr-4" 
              alt="Reviewer" 
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="font-semibold">Emma Wilson</h4>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <span className="text-sm text-gray-500">Apr 19, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">The abstract painting is even more stunning in person! The colors are vibrant and it brings so much energy to my office. Shipping was fast and the packaging ensured it arrived in perfect condition. I'll definitely be purchasing more pieces in the future!</p>
              <div className="flex space-x-3">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg" 
                  className="w-16 h-16 rounded object-cover" 
                  alt="Review Photo" 
                />
              </div>
              <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Reply to this review</button>
              </div>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="feedback-card bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              className="w-12 h-12 rounded-full object-cover mr-4" 
              alt="Reviewer" 
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="font-semibold">Michael Brown</h4>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="far fa-star text-yellow-400"></i>
                  </div>
                  <span className="text-sm text-gray-500">Apr 18, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">The wooden sculpture is beautifully crafted. I'm taking off one star only because it was slightly smaller than I expected based on the description, but the quality is exceptional. The natural grain of the wood is gorgeous, and it's obvious that a lot of skill went into making this piece.</p>
              <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Reply to this review</button>
              </div>
            </div>
          </div>
        </div>

        {/* Review 4 */}
        <div className="feedback-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              className="w-12 h-12 rounded-full object-cover mr-4" 
              alt="Reviewer" 
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="font-semibold">Sarah Johnson</h4>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                  <span className="text-sm text-gray-500">Apr 15, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">I commissioned a custom piece and the artist exceeded all my expectations. The communication throughout the process was excellent, and the final result is absolutely perfect. It captures exactly what I was hoping for, but with artistic touches that make it even better than I imagined.</p>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-start">
                  <i className="fas fa-reply text-gray-400 mt-1 mr-2"></i>
                  <div>
                    <p className="font-semibold text-sm">Your response:</p>
                    <p className="text-sm text-gray-600">Thank you so much, Sarah! It was a pleasure working with you on this custom piece. I'm so happy that you love the final result and that it exceeded your expectations. I really appreciated your clear vision and the freedom you gave me to add my own artistic interpretation.</p>
                  </div>
                </div>
              </div>
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

      {/* Live Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Live Feedback Updates</h3>
        <div id="live-feedback" className="space-y-4 max-h-64 overflow-y-auto">
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg fade-in">
            <p className="font-medium">New 5-star review from Emma Wilson</p>
            <p className="text-sm text-gray-500">10 minutes ago</p>
          </div>
          <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg fade-in">
            <p className="font-medium">Your reply to John's review was liked</p>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;