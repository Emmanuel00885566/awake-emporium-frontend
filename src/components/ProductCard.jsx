function ProductCard({ fabric }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <img 
        src={fabric.imageUrl} 
        alt={fabric.name} 
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-2 text-lg font-semibold">{fabric.name}</h3>
      <p className="text-gray-600">{fabric.category}</p>
      <p className="text-blue-600 font-bold">${fabric.pricePerMeter}/meter</p>
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        View Details
      </button>
    </div>
  )
}

export default ProductCard
