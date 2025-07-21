import React, { createContext, useState, useEffect, useContext } from "react";
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  getCurrentUser,
  setupAxiosInterceptors,
} from "../services/authService";

// Create the auth context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state
  useEffect(() => {
    setupAxiosInterceptors();
    const initAuth = async () => {
      try {
        const currentUser = getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (err) {
        console.error("Authentication initialization error:", err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Register a new user
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Registering user with data:", userData); // Debug log
      const response = await registerService(userData);
      console.log("Registration response:", response); // Debug log
      setUser(response.user);
      return response;
    } catch (err) {
      console.error("Registration error:", err); // Debug log
      setError(err.message || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Logging in with email:", email); // Debug log
      const response = await loginService(email, password);
      console.log("Login response:", response); // Debug log
      setUser(response.user);
      return response;
    } catch (err) {
      console.error("Login error:", err); // Debug log
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user && user.role === role;
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    isAuthenticated,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
