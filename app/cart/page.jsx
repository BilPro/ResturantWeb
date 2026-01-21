"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-white shadow p-4 mb-4 rounded"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.price}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => updateQty(item.name, item.qty - 1)}
              className="px-2 bg-gray-200 rounded"
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              onClick={() => updateQty(item.name, item.qty + 1)}
              className="px-2 bg-gray-200 rounded"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.name)}
              className="text-red-500 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold">Total: ₨ {total}</h2>

          <a
            href={`https://wa.me/923001234567?text=My%20order%20total%20is%20Rs%20${total}`}
            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
