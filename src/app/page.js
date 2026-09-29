import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Header cartCount={0} />
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
              addToCart={() => { }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
