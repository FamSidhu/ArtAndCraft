import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Customer/Contact.jsx";
import AboutUs from "../pages/Customer/AboutUs.jsx";
import Crafts from "../pages/Customer/Crafts.jsx";
import Search from "../pages/Customer/search.jsx";
import Categories from "../pages/Customer/Categories.jsx";
import Login from "../pages/Auth/Login.jsx";
import Home from "../pages/Customer/Home.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword.jsx";
import CartSidebar from "../pages/Customer/CartSidebar.jsx";
import "../index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "crafts",
        element: <Crafts />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "CartSidebar",
        element: <CartSidebar />,
      },
    ],
  },
]);

export default router;
