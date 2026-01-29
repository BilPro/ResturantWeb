"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">
          Total: ${totalPrice}
        </h2>

        <button className="mt-4 bg-black text-white px-6 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}
