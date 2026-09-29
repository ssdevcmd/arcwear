import React from 'react';
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Header = ({cartCount}) => {
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

          <button className="relative p-2 border border-slate-700 rounded-lg">
            <ShoppingBag className="w-5 h-5"/>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

      </div>
    </header>
    );
};

export default Header;