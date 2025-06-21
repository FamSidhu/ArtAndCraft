import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Crafts from "../pages/Crafts.jsx";
import Search from "../pages/search.jsx";
import Categories from "../pages/Categories.jsx";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import CartSidebar from "../pages/CartSidebar.jsx";
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
