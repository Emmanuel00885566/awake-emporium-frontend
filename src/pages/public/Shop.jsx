// src/pages/public/Shop.jsx
import { useState } from "react";
import fabrics from "../../data/fabrics";
import bgImage from "../../assets/fabrics/background.png";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast"; // ✅ toast

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();

  const filteredFabrics = fabrics.filter((fabric) => {
    const matchesCategory =
      category === "all" || fabric.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = fabric.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ✅ Add with toast
  const handleAddToCart = (fabric) => {
    addToCart(fabric);
    toast.success(`${fabric.name} added to cart!`);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#f5f0e8]/85" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#0a1a4a]/90 to-[#1e3a8a]/90 text-white py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">Shop Fabrics</h1>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">
            Browse our full collection of premium fabrics
          </p>
        </section>

        {/* Search + Filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Search fabrics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a4a]"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-1/2 md:w-1/4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1a4a]"
          >
            <option value="all">All Categories</option>
            <option value="Cotton">Cotton</option>
            <option value="Vintage">Vintage</option>
          </select>
        </div>

        {/* Fabric Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredFabrics.length > 0 ? (
            filteredFabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={fabric.imageUrl}
                  alt={fabric.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-[#0a1a4a]">
                    {fabric.name}
                  </h3>
                  <p className="text-sm text-gray-600">{fabric.category}</p>
                  <p className="mt-2 font-bold text-[#1e3a8a]">
                    ${fabric.pricePerMeter} / meter
                  </p>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => handleAddToCart(fabric)}
                    className="mt-auto w-full bg-[#0a1a4a] text-white py-2 px-4 rounded-xl hover:bg-[#1e3a8a] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No fabrics found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
