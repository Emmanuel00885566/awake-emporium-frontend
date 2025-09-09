// src/pages/public/Cart.jsx
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-300 text-center">
            Your cart is currently empty.{" "}
            <Link to="/shop" className="text-blue-400 underline ml-1">
              Shop Now
            </Link>
          </p>
        ) : (
          <div className="space-y-6">
            {/* Cart items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
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

                  {/* Subtotal */}
                  <p className="text-sm text-gray-300">
                    Subtotal: ${(item.pricePerMeter * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded-lg"
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove completely */}
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
              <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
