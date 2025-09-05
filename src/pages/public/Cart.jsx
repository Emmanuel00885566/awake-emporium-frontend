export default function Cart() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-300">Your cart is currently empty.</p>
      </div>
    </div>
  );
}
