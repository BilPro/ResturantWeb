"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="text-xl font-bold">Restaurant</h1>

      <div className="relative">
        <Link href="/cart" aria-label="View cart" className="inline-block">
          <span className="align-middle">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
