import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Simulate live updates
  useEffect(() => {
    const timer = setTimeout(() => {
      const liveOrders = document.getElementById('live-orders');
      if (liveOrders) {
        const newUpdate = document.createElement('div');
        newUpdate.className = 'p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg';
        newUpdate.innerHTML = `
          <p class="font-medium">Order #ORD-2025043 status changed to Processing</p>
          <p class="text-sm text-gray-500">Just now</p>
        `;
        liveOrders.prepend(newUpdate);
        gsap.from(newUpdate, { 
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
        <h1 className="text-3xl font-bold mb-2">Orders</h1>
        <p className="text-gray-600">Manage and track your customer orders</p>
      </div>

      {/* Order Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'all' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('all')}
            >
              All Orders
            </button>
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'new' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('new')}
            >
              New <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
            </button>
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'processing' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('processing')}
            >
              Processing
            </button>
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'shipped' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('shipped')}
            >
              Shipped
            </button>
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'delivered' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('delivered')}
            >
              Delivered
            </button>
            <button 
              className={`whitespace-nowrap py-4 px-2 border-b-2 ${activeTab === 'cancelled' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('cancelled')}
            >
              Cancelled
            </button>
          </nav>
        </div>
      </div>

      {/* Order Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by order ID or customer name..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
              <option>All Time</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Last 3 Months</option>
            </select>
            <button className="border border-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-100">
              <i className="fas fa-filter mr-2"></i> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Order Row 1 */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">#ORD-2025042</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                      className="h-8 w-8 rounded-full mr-2" 
                      alt="Customer" 
                    />
                    <span>Michael Johnson</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 20, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">3 items</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">$320.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Invoice</button>
                </td>
              </tr>

              {/* Order Row 2 */}
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">#ORD-2025041</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                      className="h-8 w-8 rounded-full mr-2" 
                      alt="Customer" 
                    />
                    <span>Emily Wilson</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 18, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">1 item</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">$149.99</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Shipped</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Invoice</button>
                </td>
              </tr>

              {/* Order Row 3 */}
              <tr className="hover:bg-gray-50 bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">#ORD-2025040</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                      className="h-8 w-8 rounded-full mr-2" 
                      alt="Customer" 
                    />
                    <span>Alex Martinez</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 17, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2 items</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">$225.50</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Processing</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Invoice</button>
                </td>
              </tr>

              {/* Order Row 4 */}
              <tr className="hover:bg-gray-50 bg-red-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">#ORD-2025039</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                      className="h-8 w-8 rounded-full mr-2" 
                      alt="Customer" 
                    />
                    <span>Sarah Thompson</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 16, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">1 item</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">$89.99</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">New</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Invoice</button>
                </td>
              </tr>

              {/* Order Row 5 */}
              <tr className="hover:bg-gray-50 bg-red-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">#ORD-2025038</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                      className="h-8 w-8 rounded-full mr-2" 
                      alt="Customer" 
                    />
                    <span>David Brown</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 16, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2 items</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">$175.98</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">New</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Invoice</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Live Orders Notifications */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Live Order Updates</h3>
        <div id="live-orders" className="space-y-4 max-h-64 overflow-y-auto">
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg fade-in">
            <p className="font-medium">Order #ORD-2025042 was delivered successfully</p>
            <p className="text-sm text-gray-500">2 minutes ago</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg fade-in">
            <p className="font-medium">Order #ORD-2025041 status changed to Shipped</p>
            <p className="text-sm text-gray-500">15 minutes ago</p>
          </div>
          <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg fade-in">
            <p className="font-medium">New order #ORD-2025039 received from Sarah Thompson</p>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;