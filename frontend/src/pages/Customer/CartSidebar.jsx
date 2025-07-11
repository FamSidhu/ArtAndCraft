import React from "react";
import { useCart } from "../../context/CartContext";

const CartSidebar = ({ isOpen, toggleCart }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-600 text-xl">
          &times;
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image}
                alt="Product"
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">Rs. {item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-lg"
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          onClick={() => alert("entering checkout process")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
