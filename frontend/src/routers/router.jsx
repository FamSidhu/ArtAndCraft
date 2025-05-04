import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import "../index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
