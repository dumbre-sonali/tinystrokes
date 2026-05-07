import PrimaryButton from '../components/PrimaryButton'
import { Link } from "react-router-dom"

import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Home() {

  const featuredProducts = products.slice(0, 3)

  return (
    <main className="p-10">

      {/* Hero Section */}
      <section className="text-center py-16">

        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to TinyStrokes
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Unique hand-painted baby clothes made with love,
          creativity, and tiny artistic strokes.
        </p>

        <div className="mt-6">
          <Link to="/products">
            <PrimaryButton text="Shop Now" />
          </Link>
        </div>

      </section>

      {/* Featured Products */}
      <section>

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Home