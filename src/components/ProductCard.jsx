"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
    const [size, setSize] = useState("M");
    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/30 transition">

            <div className="relative aspect-[4/5] w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>

            <div className="p-5 space-y-3">

                <h3 className="font-bold text-lg">{product.name}</h3>

                <p className="text-emerald-400 font-semibold">
                    A${product.price}
                </p>

                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-slate-800 rounded-lg p-2 border border-slate-700"
                >
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>

                <button
                    onClick={() => addToCart(product, size)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 rounded-xl py-2 font-semibold transition"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
};

export default ProductCard;