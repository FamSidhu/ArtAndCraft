import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { forgotPassword } from "../services/authService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Forgot password form submitted with email:", email); // Debug log

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      setIsLoading(true);

      // Use the authService to handle the forgot password request
      const response = await forgotPassword(email);
      console.log("Forgot password response:", response); // Debug log

      toast.success(response.message || "Reset link sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Forgot password error:", error); // Debug log
      toast.error(error.message || "Failed to send reset link.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
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
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-md transition-all duration-300"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-700">
            {submitted ? "Check Your Email" : "Forgot Password"}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {submitted
              ? "If an account with that email exists, a reset link has been sent."
              : "Enter your email to reset your password"}
          </p>
        </div>

        {!submitted ? (
          <>
            {/* Email Input */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-6 w-full py-3 font-semibold rounded-lg transition duration-300 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-gray-900 hover:bg-gray-600 text-white"
              }`}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </>
        ) : (
          // Success Message Layout
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✉️</div>
            <p className="text-gray-600 mb-6">
              Please check your email inbox and spam folder for the reset link.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition duration-300 mb-3"
            >
              Send Another Link
            </button>
          </div>
        )}

        {/* Back to Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer text-gray-700 hover:underline font-semibold"
            >
              Back to Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
