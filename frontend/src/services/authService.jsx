import axios from "axios";

// ✅ Correct Base URL
const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1/auth";

// ✅ Register user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "An error occurred during registration",
      }
    );
  }
};

// ✅ Login user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "An error occurred during login",
      }
    );
  }
};

// ✅ Logout user
export const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  try {
    await axios.get(`${API_URL}/logout`);
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// ✅ Get current user from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

// ✅ Get user profile from backend
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch user profile",
      }
    );
  }
};

// ✅ Forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to process forgot password request",
      }
    );
  }
};

// ✅ Reset password
export const resetPassword = async (resetToken, password) => {
  try {
    const response = await axios.put(
      `${API_URL}/reset-password/${resetToken}`,
      { password }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to reset password",
      }
    );
  }
};

// ✅ Setup Axios interceptors to attach token
export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        logout();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
};
