import PrimaryButton from '../components/PrimaryButton' 

function Home() {
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
        <PrimaryButton text="Shop Now" />
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-10 mt-0">

        <div className="shadow-lg shadow-[#f7f1f1] p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Handmade Designs
          </h2>

          <p className="text-gray-600">
            Every outfit is carefully hand-painted with unique artwork.
          </p>
        </div>

        <div className="shadow-lg shadow-[#f7f1f1] p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Baby Safe Colors
          </h2>

          <p className="text-gray-600">
            Soft fabrics and safe colors designed specially for babies.
          </p>
        </div>

        <div className="shadow-lg shadow-[#f7f1f1] p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Custom Orders
          </h2>

          <p className="text-gray-600">
            Personalized names and custom artwork for special moments.
          </p>
        </div>

      </section>

    </main>
  )
}

export default Home