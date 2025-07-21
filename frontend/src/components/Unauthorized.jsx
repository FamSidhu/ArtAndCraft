import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page. This area is
          restricted to users with specific roles.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Your current role:{" "}
          <span className="font-semibold">{user?.role || "Unknown"}</span>
        </p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
