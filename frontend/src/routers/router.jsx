// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Customer Pages
import Home from "../pages/Customer/Home";
import Contact from "../pages/Customer/Contact";
import AboutUs from "../pages/Customer/AboutUs";
import Crafts from "../pages/Customer/Crafts";
import Categories from "../pages/Customer/Categories";
import Search from "../pages/Customer/search";
import CartSidebar from "../pages/Customer/CartSidebar";

// Auth Pages
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import Unauthorized from "../components/Unauthorized";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default route
      { path: "contact", element: <Contact /> },
      { path: "about", element: <AboutUs /> },
      { path: "categories", element: <Categories /> },
      { path: "crafts", element: <Crafts /> },
      { path: "search", element: <Search /> },
      { path: "cart", element: <CartSidebar /> },

      // Auth
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password/:resettoken", element: <ResetPassword /> },
      { path: "unauthorized", element: <Unauthorized /> },

      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [{ path: "dashboard", element: <Dashboard /> }],
      },
    ],
  },
]);

export default router;
