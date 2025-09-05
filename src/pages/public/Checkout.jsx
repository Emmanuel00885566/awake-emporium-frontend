export default function Checkout() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Card Details"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
