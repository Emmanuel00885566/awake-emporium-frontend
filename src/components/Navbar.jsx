import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react" // added cart icon
import { useCart } from "../context/CartContext"     // import our cart context

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount } = useCart() // get number of items in cart

  return (
    <nav className="sticky top-0 z-20 bg-[#f5f0e8]/90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Awake Emporium
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <Link to="/login" className="hover:text-black">Login</Link>
            <Link to="/checkout" className="hover:text-black">Checkout</Link>
            <Link to="/signup" className="hover:text-black">Sign Up</Link>

            {/* Cart icon with badge */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f0e8]/95 px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="block hover:text-black" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/login" className="block hover:text-black" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="block hover:text-black" onClick={() => setIsOpen(false)}>Sign Up</Link>

          {/* Cart icon for mobile */}
          <Link to="/cart" className="relative inline-block" onClick={() => setIsOpen(false)}>
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  )
}
