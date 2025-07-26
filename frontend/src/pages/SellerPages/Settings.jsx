import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'profile' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'shop' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('shop')}
            >
              Shop
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'payments' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('payments')}
            >
              Payments
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'notifications' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button 
              className={`py-4 px-2 border-b-2 ${activeTab === 'security' ? 'border-black font-medium text-black' : 'border-transparent font-medium text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
          </nav>
        </div>
      </div>

      {/* Profile Settings */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Profile Information</h3>

            <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-8">
              <div className="mb-4 md:mb-0">
                <div className="relative">
                  <img 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                    className="w-32 h-32 rounded-full object-cover" 
                    alt="Profile" 
                  />
                  <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full">
                    <i className="fas fa-camera"></i>
                  </button>
                </div>
              </div>

              <div className="w-full max-w-md">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        defaultValue="Clara" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        defaultValue="Artisan" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      defaultValue="clara@example.com" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      defaultValue="(123) 456-7890" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Artist Bio</label>
                    <textarea 
                      id="bio" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      defaultValue="Clara is a contemporary artist specializing in pottery and abstract paintings. With over 10 years of experience, her work has been featured in several galleries across the country. Her style combines traditional techniques with modern aesthetics to create unique and captivating pieces."
                    ></textarea>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-6">Social Media Links</h3>
            <div className="max-w-md">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    <i className="fas fa-globe mr-2"></i>Website
                  </label>
                  <input 
                    type="url" 
                    id="website" 
                    defaultValue="https://clarartisan.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                    <i className="fab fa-instagram mr-2"></i>Instagram
                  </label>
                  <input 
                    type="text" 
                    id="instagram" 
                    defaultValue="@clara_artisan" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                    <i className="fab fa-facebook mr-2"></i>Facebook
                  </label>
                  <input 
                    type="text" 
                    id="facebook" 
                    defaultValue="ClaraArtisanCreations" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="pinterest" className="block text-sm font-medium text-gray-700 mb-1">
                    <i className="fab fa-pinterest mr-2"></i>Pinterest
                  </label>
                  <input 
                    type="text" 
                    id="pinterest" 
                    defaultValue="clara_artisan" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Shop Settings */}
      {activeTab === 'shop' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Shop Information</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="shop-name" className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                <input 
                  type="text" 
                  id="shop-name" 
                  defaultValue="Clara's Artisan Creations" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="shop-description" className="block text-sm font-medium text-gray-700 mb-1">Shop Description</label>
                <textarea 
                  id="shop-description" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  defaultValue="Handcrafted pottery, sculptures, and paintings created with passion and attention to detail. Each piece is unique and made with the finest materials."
                ></textarea>
              </div>

              <div>
                <label htmlFor="shop-policies" className="block text-sm font-medium text-gray-700 mb-1">Shop Policies</label>
                <textarea 
                  id="shop-policies" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  defaultValue="Returns accepted within 14 days. Custom orders are non-refundable. Please allow 1-2 weeks for shipping on made-to-order items."
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Other tabs would be implemented similarly */}
      {activeTab === 'payments' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Payment Settings</h3>
            <p className="text-gray-600">Manage your payment methods and payout preferences.</p>
            {/* Payment settings form would go here */}
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Notification Preferences</h3>
            <p className="text-gray-600">Control how and when you receive notifications.</p>
            {/* Notification settings form would go here */}
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Security Settings</h3>
            <p className="text-gray-600">Manage your password and account security options.</p>
            {/* Security settings form would go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;