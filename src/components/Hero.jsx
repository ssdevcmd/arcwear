import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';


const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

            <div>

                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    LIMITED DROP
                </span>

                <h2 className="text-5xl md:text-6xl font-black leading-tight mt-5">
                    WEAR YOUR ARC.
                </h2>

                <p className="text-slate-400 mt-6 leading-7">
                    Premium oversized anime streetwear inspired by samurai discipline and modern street culture.
                </p>

                <Link
                    href="/shop"
                    className="mt-8 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold transition"
                >
                    Shop Now
                    <ArrowRight size={18} />
                </Link>

            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                    src="/hero.png"
                    alt="ARCWEAR anime streetwear hero"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

        </section>
    );
};

export default Hero;