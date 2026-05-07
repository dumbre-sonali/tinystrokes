import products from "../data/products"
import ProductCard from '../components/ProductCard'

function Products() {

  return (
    <section className="mt-16">

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mb-12">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  )
}

export default Products