"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Header = ({cart}) => {
   const [open, setOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div>
          <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            ARCWEAR
          </h1>
          <p className="text-xs text-slate-500 uppercase">
            Wear Your Arc
          </p>
        </div>

        <nav className="flex gap-6 items-center">
          <Link href="/shop" className="hover:text-emerald-400">
            Shop
          </Link>

          {/* cart button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative p-2 border border-slate-700 rounded-lg hover:border-emerald-500 transition"
          >
            <ShoppingBag className="w-5 h-5"/>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>

           {/* Cart Dropdown */}
          {open && (
            <div className="absolute right-0 top-14 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4">
              <h3 className="font-bold mb-3">Your Cart</h3>

              {cart.length === 0 ? (
                <p className="text-slate-400 text-sm">Your cart is empty.</p>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex items-center gap-3 border-b border-slate-800 pb-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                          <h4 className="text-sm font-semibold">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-400">
                            Size: {item.size}
                          </p>
                          <p className="text-xs text-slate-400">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <span className="text-emerald-400 font-semibold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-800">
                    <span className="font-semibold">Subtotal</span>
                    <span className="text-emerald-400 font-bold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </nav>

      </div>
    </header>
    );
};

export default Header;