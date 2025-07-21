// main.jsx or index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import "remixicon/fonts/remixicon.css";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/Search";
import { AuthProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
