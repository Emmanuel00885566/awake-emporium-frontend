// src/pages/public/Cart.jsx
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.pricePerMeter,
    0
  );

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-300 text-center">
            Your cart is currently empty.
          </p>
        ) : (
          <div className="space-y-6">
            {/* Cart items */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 rounded-xl p-4 shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-300">{item.category}</p>
                  <p className="font-bold">${item.pricePerMeter}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart total */}
            <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">${total}</span>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
              >
                Clear Cart
              </button>
              <a
                href="/checkout"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
