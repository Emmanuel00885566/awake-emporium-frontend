// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast"; // ✅ import toast

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item (with quantity support)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        toast.success(`Increased ${item.name} quantity`);
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        toast.success(`${item.name} added to cart`);
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const removedItem = prev.find((item) => item.id === id);
      if (removedItem) {
        toast.error(`${removedItem.name} removed from cart`);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  // Decrease quantity (and remove if it hits 0)
  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (!target) return prev;

      if (target.quantity === 1) {
        toast.error(`${target.name} removed from cart`);
        return prev.filter((item) => item.id !== id);
      } else {
        toast.success(`Decreased ${target.name} quantity`);
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.error("Cart cleared");
  };

  // Cart count (sum of all quantities)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Cart total
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.pricePerMeter * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
