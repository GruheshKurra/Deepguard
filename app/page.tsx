"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Privacy from "./components/Privacy";
import Detection from "./components/Detection";
import Footer from "./components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Features />
      <Privacy />
      <Detection />
      <Footer />
    </main>
  );
}
