"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";

export const dynamic = "force-dynamic";   // 🔥 THIS LINE FIXES PRERENDER BUG

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
    </>
  );
}
