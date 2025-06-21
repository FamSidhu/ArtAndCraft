import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// ToastContainer ko yahan import karne ki zarurat nahi - ye App.js mein hona chahiye

const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  const roleOptions = [
    { value: "customer", label: "Customer" },
    { value: "artist", label: "Artist" },
    { value: "crafter", label: "Crafter" },
    { value: "admin", label: "Admin" },
  ];

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      currentState === "Sign Up" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="flex mt-8 items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/craft2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-4xl transition-all duration-300"
      >
        <div className="text-center mb-8">
          {/* Fixed: text-white-700 should be text-gray-700 */}
          <h2 className="text-4xl font-bold text-gray-700">{currentState}</h2>
          <p className="text-sm text-gray-500 mt-2">
            {currentState === "Login"
              ? "Welcome back! Sign in to continue"
              : "Create your account to get started"}
          </p>
        </div>

        {/* Sign Up: Horizontal Grid Layout */}
        {currentState === "Sign Up" ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Right Side Inputs */}
            <div className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Create password"
                  required
                />
              </div>
            </div>

            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              {/* Confirm Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Confirm password"
                  required
                />
              </div>

              {/* Role */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  required
                >
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ) : (
          // Login Layout (single column)
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex justify-between text-sm mt-4 text-gray-600">
          {currentState === "Login" && (
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </span>
          )}
          <span
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
            className="cursor-pointer ml-auto hover:underline"
          >
            {currentState === "Login"
              ? "Create new account"
              : "Already have an account? Login"}
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full py-3 bg-gray-900 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-300"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
