// src/pages/public/Checkout.jsx
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext"; // ✅ import auth

// helper to save per-user order in localStorage
function saveUserOrder(email, order) {
  const allOrders = JSON.parse(localStorage.getItem("userOrders")) || {};
  if (!allOrders[email]) {
    allOrders[email] = [];
  }
  allOrders[email].push(order);
  localStorage.setItem("userOrders", JSON.stringify(allOrders));
}

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth(); // ✅ get logged-in user
  const [form, setForm] = useState({
    name: "",
    address: "",
    card: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Calculate total with quantity
  const total = cartItems.reduce(
    (sum, item) => sum + item.pricePerMeter * item.quantity,
    0
  );

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.card) {
      toast.error("Please fill in all fields!");
      return;
    }
    if (!user) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    setLoading(true);

    // Simulate placing order
    setTimeout(() => {
      const newOrder = {
        id: Date.now(),
        customer: form,
        items: cartItems,
        total,
        date: new Date().toLocaleString(),
      };

      // ✅ save order per logged-in user
      saveUserOrder(user.email, newOrder);

      clearCart();
      setLoading(false);
      toast.success("Order placed successfully!");
      navigate("/thank-you");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            {/* Order Summary */}
            <div className="mb-6 bg-white/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-gray-300"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.pricePerMeter * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="card"
                value={form.card}
                onChange={handleChange}
                placeholder="Card Details"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full p-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
