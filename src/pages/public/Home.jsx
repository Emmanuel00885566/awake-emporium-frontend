// src/pages/public/Home.jsx
import React from "react";
import fabrics from "../../data/fabrics";
import bgImage from "../../assets/fabrics/background.png";

export default function Home() {
  // Show first 3 fabrics as "Featured"
  const featuredFabrics = fabrics.slice(0, 3);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#f5f0e8]/80" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1a4a]/90 to-[#1e3a8a]/90 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Awake Emporium
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">
            Discover premium fabrics for your next masterpiece
          </p>
          <a
            href="/shop"
            className="inline-block mt-6 px-6 py-3 bg-[#f5f0e8] text-[#0a1a4a] font-semibold rounded-2xl shadow hover:bg-[#e6dbcc] transition"
          >
            Shop Now
          </a>
        </section>

        {/* Featured Fabrics */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#0a1a4a] mb-10 text-center">
            Featured Fabrics
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Image wrapper */}
                <div className="w-full h-60 overflow-hidden">
                  <img
                    src={fabric.imageUrl}
                    alt={fabric.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#0a1a4a]">
                    {fabric.name}
                  </h3>
                  <p className="text-sm text-gray-600">{fabric.category}</p>
                  <p className="mt-2 font-bold text-[#1e3a8a]">
                    ${fabric.pricePerMeter} / meter
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
