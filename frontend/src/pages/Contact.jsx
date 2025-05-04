import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <form className="w-full max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-center mt-10">Contact Us!</h1>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-lg font-semibold w-1/2 text-left">
              First name
            </label>
            <label className="text-lg font-semibold w-1/2 text-left ml-4">
              Last name
            </label>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border rounded px-4 py-2 focus:outline-1 focus:ring-3 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border rounded px-4 py-2 focus:outline-1 focus:ring-3 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label className="text-lg font-semibold mb-2 block">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="text-lg font-semibold mb-2 block">
            Your message
          </label>
          <textarea
            placeholder="Enter your message"
            className="w-full border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
