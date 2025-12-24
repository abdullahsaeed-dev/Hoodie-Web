"use client";

import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added Motion

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b text-black bg-white orbitron">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top Navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: Menu + Search */}
          <div className="flex items-center gap-3">
            <button className="md:hidden z-[101]" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>

            <div className="flex items-center justify-center cursor-pointer border border-[#bdbaba] rounded-full px-2 py-1 md:px-4 md:py-2 hover:bg-gray-50 transition-colors">
              <span className="px-1 md:px-2 text-[#3e3e3e] font-semibold text-sm md:text-sm uppercase tracking-tight">
                Search
              </span>
              <span className="pl-1 flex items-center">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-[#3e3e3e]" />
              </span>
            </div>
          </div>

          {/* Center: Logo */}
          <h1 className="text-2xl font-semibold tracking-wide">HOODIE</h1>

          {/* Right: Icons */}
          <div className="flex items-center gap-1 sm:gap-2 ">
            <div className="border-0 md:border md:border-[#bdbaba] rounded-full p-2 md:px-3 flex items-center justify-center transition-all hover:bg-gray-100">
              <User className="w-5 md:w-5 cursor-pointer" />
            </div>
            <div className="border-0 md:border md:border-[#bdbaba] rounded-full p-2 md:px-3 flex items-center justify-center transition-all hover:bg-gray-100">
              <ShoppingCart className="w-5 md:w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* nav second line (Desktop) */}
        <div className="hidden md:flex justify-between pb-2 pt-1 ">
          <div className="flex items-center gap-3">
            <a href="#" className="border border-[#bdbaba] text-sm font-bold rounded-full px-5 py-2 hover:bg-black hover:text-white transition-all tracking-wider">
              CATEGORIES
            </a>
            <a href="#" className="border border-[#bdbaba] text-sm font-bold rounded-full px-5 py-2 hover:bg-black hover:text-white transition-all tracking-wider">
              SEARCH
            </a>
          </div>

          <nav className="flex items-center justify-center gap-2 text-sm font-medium">
            {["Men", "Women", "Children", "Popular"].map((item) => (
              <a key={item} href="#" className="border border-[#bdbaba] hover:bg-black hover:text-white transition-all font-semibold rounded-full px-6 py-2">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] md:hidden"
            />
            
            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] bg-white z-[100] md:hidden shadow-2xl flex flex-col pt-20 px-6"
            >
              <nav className="flex flex-col gap-8 text-3xl font-bold">
                {["Men", "Women", "Children", "Popular"].map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="hover:text-gray-500 transition-colors uppercase"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
              
              <div className="mt-auto mb-10 border-t pt-6 flex gap-6">
                <User className="w-6 h-6" />
                <ShoppingCart className="w-6 h-6" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}