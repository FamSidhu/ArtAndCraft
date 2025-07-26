import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { gsap } from 'gsap';

const Dashboard = () => {
  const salesChartRef = useRef(null);
  const ratingsChartRef = useRef(null);
  const salesChartInstance = useRef(null);
  const ratingsChartInstance = useRef(null);

  // Initialize charts
  useEffect(() => {
    // Sales chart
    if (salesChartRef.current) {
      const ctx = salesChartRef.current.getContext('2d');
      
      // Destroy existing chart if it exists
      if (salesChartInstance.current) {
        salesChartInstance.current.destroy();
      }
      
      salesChartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales ($)',
            data: [1200, 1900, 1500, 2800, 2200, 3000],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Ratings chart
    if (ratingsChartRef.current) {
      const ctx = ratingsChartRef.current.getContext('2d');
      
      // Destroy existing chart if it exists
      if (ratingsChartInstance.current) {
        ratingsChartInstance.current.destroy();
      }
      
      ratingsChartInstance.current = new ChartJS(ctx, {
        type: 'pie',
        data: {
          labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
          datasets: [{
            label: 'Rating Distribution',
            data: [75, 20, 3, 1, 1],
            backgroundColor: [
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
              'rgb(255, 159, 64)',
              'rgb(255, 99, 132)'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Cleanup
    return () => {
      if (salesChartInstance.current) {
        salesChartInstance.current.destroy();
      }
      if (ratingsChartInstance.current) {
        ratingsChartInstance.current.destroy();
      }
    };
  }, []);

  // Animations
  useEffect(() => {
    // Dashboard cards animation
    gsap.from('.dashboard-card', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });

    // Fade in elements
    gsap.from('.fade-in', { 
      opacity: 0, 
      y: 20, 
      duration: 0.5, 
      stagger: 0.1,
      ease: "power2.out"
    });

    // Simulate live updates
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
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Clara!</h1>
        <p className="text-gray-600">Here's what's happening with your shop today.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm mb-1">Total Sales</h3>
              <p className="text-2xl font-bold">$14,580</p>
              <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>12% vs last month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-dollar-sign text-blue-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm mb-1">New Orders</h3>
              <p className="text-2xl font-bold">8</p>
              <p className="text-green-500 text-sm mt-1"><i className="fas fa-arrow-up mr-1"></i>3 since yesterday</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-shopping-cart text-green-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm mb-1">Average Rating</h3>
              <p className="text-2xl font-bold">4.8/5</p>
              <div className="flex items-center mt-1">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half-alt text-yellow-400"></i>
              </div>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-star text-yellow-500 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm mb-1">Total Items</h3>
              <p className="text-2xl font-bold">42</p>
              <p className="text-purple-500 text-sm mt-1"><i className="fas fa-plus mr-1"></i>5 new this month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-palette text-purple-500 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
          <div className="h-64">
            <canvas ref={salesChartRef}></canvas>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Rating Distribution</h3>
          <div className="h-64">
            <canvas ref={ratingsChartRef}></canvas>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50">
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-shopping-bag text-green-500"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium">New order received</p>
              <p className="text-gray-500">Order #12345 for Handcrafted Pottery Set</p>
              <p className="text-sm text-gray-400 mt-1">30 minutes ago</p>
            </div>
            <button className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">View</button>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50">
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium">New review</p>
              <p className="text-gray-500">5 star review on Wooden Sculpture</p>
              <p className="text-sm text-gray-400 mt-1">2 hours ago</p>
            </div>
            <button className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">View</button>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-dollar-sign text-blue-500"></i>
            </div>
            <div className="flex-1">
              <p className="font-medium">Payment received</p>
              <p className="text-gray-500">$250 from order #12340</p>
              <p className="text-sm text-gray-400 mt-1">Yesterday</p>
            </div>
            <button className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">View</button>
          </div>
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

export default Dashboard;