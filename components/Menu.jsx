"use client";

import { useCart } from "@/context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  const items = [
    { id: 1, name: "Burger", price: 8 },
    { id: 2, name: "Pizza", price: 12 },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>${item.price}</p>

          <button
            onClick={() => addToCart(item)}
            className="mt-3 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
