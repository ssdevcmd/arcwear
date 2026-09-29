import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Header cartCount={0}/>
      <Hero />
      <Footer />
    </main>
  );
}
