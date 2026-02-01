"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    price: 8,
    image: "/foods/burger.jpg",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: 12,
    image: "/foods/pizza.jpg",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 10,
    image: "/foods/pasta.jpg",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: 9,
    image: "/foods/biryani.jpg",
  },
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-3">${item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
