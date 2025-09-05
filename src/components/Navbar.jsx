// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a1a4a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Awake Emporium
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-[#f5f0e8] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#f5f0e8] transition">Shop</Link>
          <Link to="/cart" className="hover:text-[#f5f0e8] transition">Cart</Link>
          <Link to="/checkout" className="hover:text-[#f5f0e8] transition">Checkout</Link>
          <Link to="/login" className="hover:text-[#f5f0e8] transition">Login</Link>
          <Link
            to="/signup"
            className="bg-[#f5f0e8] text-[#0a1a4a] px-4 py-2 rounded-xl shadow hover:bg-[#e6dbcc] transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1a4a] px-6 pb-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#f5f0e8]">Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="block hover:text-[#f5f0e8]">Shop</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="block hover:text-[#f5f0e8]">Cart</Link>
          <Link to="/checkout" onClick={() => setIsOpen(false)} className="block hover:text-[#f5f0e8]">Checkout</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-[#f5f0e8]">Login</Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block bg-[#f5f0e8] text-[#0a1a4a] px-4 py-2 rounded-xl shadow hover:bg-[#e6dbcc] transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
