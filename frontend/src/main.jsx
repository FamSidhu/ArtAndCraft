import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import "remixicon/fonts/remixicon.css";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/Search";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <CartProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </CartProvider>
  </StrictMode>
);
