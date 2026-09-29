"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  // 1. Add item or increment quantity if item + size already exists
  const addToCart = (product, size) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
  };

  // 2. Increase quantity (+1)
  const increaseQuantity = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 3. Decrease quantity (-1, and auto-remove if quantity reaches 0)
  const decreaseQuantity = (id, size) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 4. Remove item completely
  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <main>

      <Header cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart} 
        />
      <Hero />


      <section
        id="shop"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-black mb-10">
          Latest Drops
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

      </section>
      <Footer />
    </main>
  );
}


