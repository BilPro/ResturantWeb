export default function Hero() {
  return (
    <section className="bg-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-4">Smart Dining Starts Here</h1>
      <p className="text-gray-600 text-lg mb-8">
        Order smarter. Eat better. Powered by AI.
      </p>
      <a
        href="#menu"
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Explore Menu
      </a>
    </section>
  );
}
