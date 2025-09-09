// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import bgImage from "./assets/fabrics/background.png"
import { Toaster } from "react-hot-toast"   // ✅ import Toaster

// Public pages
import Home from "./pages/public/Home.jsx"
import Shop from "./pages/public/Shop.jsx"
import Cart from "./pages/public/Cart.jsx"
import Checkout from "./pages/public/Checkout.jsx"
import Login from "./pages/public/Login.jsx"
import Signup from "./pages/public/Signup.jsx"
import ThankYou from "./pages/public/ThankYou"

function App() {
  return (
    <Router>
      {/* Global Background */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-[#f5f0e8]/85" />

        {/* Content wrapper */}
        <div className="relative z-10">
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>

        {/* ✅ Toast notifications portal */}
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
