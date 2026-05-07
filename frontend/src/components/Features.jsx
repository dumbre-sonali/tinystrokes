function Features() {

    return(<>
    {/* Features */}
<section className="grid md:grid-cols-3 gap-8 mt-0">

  <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-pink-200 hover:-translate-y-2 transition duration-300 text-center border border-pink-100">
    
    <div className="text-5xl mb-5">🎨</div>

    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Handmade Designs
    </h2>

    <p className="text-gray-600 leading-7">
      Every outfit is lovingly hand-painted with creative,
      one-of-a-kind artwork made specially for your little one.
    </p>

  </div>

  <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-purple-200 hover:-translate-y-2 transition duration-300 text-center border border-purple-100">

    <div className="text-5xl mb-5">🧸</div>

    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Baby Safe Colors
    </h2>

    <p className="text-gray-600 leading-7">
      Crafted using ultra-soft fabrics and non-toxic,
      baby-friendly colors that are gentle on delicate skin.
    </p>

  </div>

  <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-yellow-200 hover:-translate-y-2 transition duration-300 text-center border border-yellow-100">

    <div className="text-5xl mb-5">✨</div>

    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Custom Orders
    </h2>

    <p className="text-gray-600 leading-7">
      Add personalized names, themes, and artwork
      to create unforgettable baby outfits for special moments.
    </p>

  </div>

</section>
    </>);

}
export default Features;
