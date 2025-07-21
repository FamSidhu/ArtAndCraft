import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../services/authService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resettoken } = useParams(); // Make sure this matches the route parameter name
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Reset password form submitted"); // Debug log

    // Validate passwords
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Attempting to reset password with token:", resettoken); // Debug log

      // Use the authService to handle the reset password request
      await resetPassword(resettoken, password);

      toast.success("Password has been reset successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Reset password error:", error); // Debug log
      toast.error(
        error.message ||
          "Failed to reset password. The link may be invalid or expired."
      );
    } finally {
      setIsLoading(false);
    }
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
          <h2 className="text-4xl font-bold text-gray-700">Reset Password</h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter your new password below
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter new password"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Confirm new password"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-6 w-full py-3 font-semibold rounded-lg transition duration-300 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-gray-900 hover:bg-gray-600 text-white"
          }`}
        >
          {isLoading ? "Processing..." : "Reset Password"}
        </button>

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

export default ResetPassword;
