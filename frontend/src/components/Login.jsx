import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Form submitted", formData); // Debug log

    // Validate form
    if (currentState === "Sign Up") {
      if (!formData.name) {
        toast.error("Name is required");
        return;
      }
      if (!formData.role) {
        toast.error("Please select a role");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
    } else {
      // Login validation
      if (!formData.email) {
        toast.error("Email is required");
        return;
      }
      if (!formData.password) {
        toast.error("Password is required");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      if (currentState === "Login") {
        console.log("Attempting login with:", formData.email); // Debug log
        await login(formData.email, formData.password);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        // Register
        console.log("Attempting registration with:", formData); // Debug log
        const { name, email, password, role } = formData;
        await register({ name, email, password, role });
        toast.success("Registration successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication error:", error); // Debug log
      toast.error(error.message || "Authentication failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const CustomDropdown = ({ selectedRole, setSelectedRole }) => {
    const [isOpen, setIsOpen] = useState(false);

    const roleOptions = [
      { value: "customer", label: "Customer" },
      { value: "artist", label: "Artist" },
      { value: "crafter", label: "Crafter" },
      // { value: "admin", label: "Admin" },
    ];

    const handleSelect = (value) => {
      setSelectedRole(value);
      setIsOpen(false);
    };

    return (
      <div className="relative">
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Role
        </label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
        >
          {selectedRole ? (
            roleOptions.find((r) => r.value === selectedRole)?.label
          ) : (
            <span className="text-gray-400">Select role</span>
          )}
        </div>
        {isOpen && (
          <ul className="absolute z-10 w-full border border-gray-300 bg-white mt-1 rounded-md shadow-md">
            {roleOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="px-4 py-2 hover:bg-gray-800 hover:text-white cursor-pointer transition"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
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
          <h2 className="text-4xl font-bold text-gray-700">{currentState}</h2>
          <p className="text-sm text-gray-500 mt-2">
            {currentState === "Login"
              ? "Welcome back! Sign in to continue"
              : "Create your account to get started"}
          </p>
        </div>

        {currentState === "Sign Up" ? (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
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

            <div className="flex flex-col gap-4">
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

              <div>
                <CustomDropdown
                  selectedRole={formData.role}
                  setSelectedRole={(role) =>
                    setFormData((prev) => ({ ...prev, role }))
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 w-full py-3 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-600"
          } text-white font-semibold rounded-lg transition duration-300`}
        >
          {isSubmitting
            ? "Processing..."
            : currentState === "Login"
            ? "Sign In"
            : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
