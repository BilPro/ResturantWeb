"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">AI Restaurant</h1>
      <div className="space-x-6 text-gray-700">
        <a href="#menu" className="hover:text-black">Menu</a>
        <a href="/cart" className="hover:text-black">Cart</a>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  );
}
