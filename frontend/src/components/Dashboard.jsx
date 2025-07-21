import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      // Redirect based on user role
      switch (user.role) {
        case "artist":
          navigate("seller-dashboard");
          break;
        case "crafter":
          navigate("/seller-dashboard");
          break;
        case "customer":
          navigate("/");
          break;
        case "admin":
          navigate("/admin-dashboard");
          break;
        default:
          // Default dashboard
          break;
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Redirecting you to the appropriate dashboard...
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
};

export default Dashboard;
