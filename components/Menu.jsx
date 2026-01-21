import { useCart } from "@/context/CartContext";

const { addToCart } = useCart();


const items = [
  { name: "Grilled Mandi", desc: "Traditional mandi flavor", price: "₨1200" },
  { name: "Chicken BBQ", desc: "Smoky & juicy", price: "₨850" },
  { name: "Zinger Burger", desc: "Crispy delight", price: "₨550" },
];

export default function Menu() {
  return (
    <section id="menu" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Menu</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-500 mt-2">{item.desc}</p>
            <p className="mt-4 font-bold">{item.price}</p>

            <button
            onClick={() => addToCart(item)}
            className="mt-5 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}
