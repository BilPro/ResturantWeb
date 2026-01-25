"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
    </>
  );
}
