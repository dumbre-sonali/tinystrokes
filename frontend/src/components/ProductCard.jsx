import { ShoppingCart } from 'lucide-react'

function ProductCard({ product }) {

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* Images */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory">

        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.name}
            className="w-full h-72 object-cover min-w-full snap-center"
          />
        ))}

      </div>

      {/* Product Details */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-[#770844] font-bold text-xl mt-2">
          {product.price}
        </p>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href={`/product/${product.id}`}
            className="border border-[#770844] text-[#770844] px-4 py-2 rounded-lg hover:bg-pink-50 transition"
          >
            View Product
          </a>

          <button
            className="cursor-pointer flex items-center gap-2 bg-[#770844] text-white px-4 py-2 rounded-lg hover:bg-[#f091a1] transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProductCard