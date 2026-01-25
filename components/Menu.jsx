"use client";

import { useCart } from "@/context/CartContext";

const items = [
  { id: 1, name: "Chicken Mandi", price: 1200 },
  { id: 2, name: "Beef Mandi", price: 1500 },
];

export default function Menu() {
  const { addToCart } = useCart();   // ✅ INSIDE component

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-600">Rs {item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
