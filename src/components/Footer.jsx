"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () =>  {
  return (
    <footer className="relative bg-black text-white font-mono border-t border-zinc-900 pt-16 pb-12 overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[180px] md:text-[260px] font-black uppercase tracking-tighter text-white">
          ARCWEAR
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 z-10">
        
        {/* Brand & Lore Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-black text-xl italic tracking-tighter">
            AW
          </div>

          <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
          </p>

          <div className="space-y-2">
            <span className="text-[10px] uppercase text-zinc-500 tracking-widest block font-bold">
              FOLLOW THE LORE
            </span>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black font-sans font-bold text-xs px-4 py-2.5 rounded-sm flex items-center gap-2 hover:bg-zinc-200 transition"
              >
                <span className="font-black text-sm">♪</span> TikTok
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-sans font-bold text-xs px-4 py-2.5 rounded-sm flex items-center gap-2 hover:opacity-90 transition"
              >
                <FaInstagram className="w-3.5 h-3.5" /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white font-sans font-bold text-xs px-4 py-2.5 rounded-sm flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <FaFacebook className="w-3.5 h-3.5" /> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Directory Column 1: SHOP */}
        <div>
          <h4 className="text-xs uppercase text-zinc-400 tracking-widest font-bold mb-5">
            SHOP
          </h4>
          <ul className="space-y-3 text-xs font-semibold text-zinc-300">
            <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
            <li><Link href="#shop" className="hover:text-emerald-400 transition">Drop</Link></li>
            <li><Link href="#collection" className="hover:text-emerald-400 transition">Collection</Link></li>
          </ul>
        </div>

        {/* Directory Column 2: HELP */}
        <div>
          <h4 className="text-xs uppercase text-zinc-400 tracking-widest font-bold mb-5">
            HELP
          </h4>
          <ul className="space-y-3 text-xs font-semibold text-zinc-300">
            <li><Link href="#faq" className="hover:text-emerald-400 transition">FAQ</Link></li>
            <li><Link href="#returns" className="hover:text-emerald-400 transition">Return Policy</Link></li>
            <li><Link href="#contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Directory Column 3: ABOUT */}
        <div>
          <h4 className="text-xs uppercase text-zinc-400 tracking-widest font-bold mb-5">
            ABOUT
          </h4>
          <ul className="space-y-3 text-xs font-semibold text-zinc-300">
            <li><Link href="#story" className="hover:text-emerald-400 transition">Our Story</Link></li>
            <li><Link href="#lookbook" className="hover:text-emerald-400 transition">Lookbook</Link></li>
            <li><Link href="#review" className="hover:text-emerald-400 transition">Review</Link></li>
            <li><Link href="#collaboration" className="hover:text-emerald-400 transition">Collaboration</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;