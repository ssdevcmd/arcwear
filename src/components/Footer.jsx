import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-black text-emerald-400">
            ARCWEAR
          </h3>

          <p className="text-sm text-slate-500 mt-3">
            Anime-inspired premium streetwear with limited drops.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>

          <div className="flex flex-col gap-2 text-slate-400 hover:text-emerald-400">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Limited Drop</h4>

          <p className="text-sm text-slate-500">
            Designed for dreamers, fighters and creators.
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-slate-600 pb-6">
        © {new Date().getFullYear()} ARCWEAR
      </div>
    </footer>
    );
};

export default Footer;