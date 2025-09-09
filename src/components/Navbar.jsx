import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const [animate, setAnimate] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <nav className="sticky top-0 z-20 bg-[#f5f0e8]/90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Awake Emporium
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <Link to="/checkout" className="hover:text-black">Checkout</Link>

            {!user ? (
              <>
                <Link to="/login" className="hover:text-black">Login</Link>
                <Link to="/signup" className="hover:text-black">Sign Up</Link>
              </>
            ) : (
              <>
                <span className="text-gray-800">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
              {cartCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-transform ${
                    animate ? "scale-125 animate-bounce" : ""
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
