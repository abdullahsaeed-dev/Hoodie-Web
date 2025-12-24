import React from 'react';
import Image from 'next/image';

const ProductSection = () => {
  const categories = ["HOODIE", "CAPS & BAGS", "OUTWEARS", "SHOES", "POPULAR"];
  
  const products = [
    { id: 1, price: "$ 14.99", img: "/images/p1.png", size: "col-span-1" },
    { id: 2, price: "$ 14.99", img: "/images/p2.png", size: "col-span-1" },
    { id: 3, price: "$ 18.99", img: "/images/p3.png", size: "col-span-1" },
    { id: 4, price: "$ 20.99", img: "/images/p4.png", size: "col-span-1" },
    { id: 5, price: "$ 14.99", img: "/images/p1.png", size: "md:col-span-2 col-span-1" }, // Badi image ke liye
    { id: 6, price: "$ 14.99", img: "/images/p2.png", size: "md:col-span-2 col-span-1" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* 1. Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button 
            key={cat}
            className="px-6 py-2 border border-black rounded-full text-xs text-black cursor-pointer font-bold hover:bg-black hover:text-white transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Product Grid */}
      <div className="grid text-black cursor-pointer grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="relative group aspect-[3/4] bg-[#F3F3F1] overflow-hidden">
            <p className="absolute top-3 left-3 z-10 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold rounded-md">
              {product.price}
            </p>
            <button className="absolute cursor-pointer top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="rotate-45">↑</span>
            </button>
            {/* Image placeholder */}

            <Image
        src={product.img} 
        alt="Models in hoodies"
        fill
        className="object-cover object-top" // Removed z-10 from here
        priority
      />

            <div className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105 bg-gray-200" />
          </div>
        ))}
      </div>

      {/* 3. Bottom Large Features */}
      <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-10 border-t border-gray-200 pt-10">
        <div className="flex gap-6">
          <span className="text-6xl font-black leading-none">01</span>
          <div>
            <h4 className="text-2xl font-black uppercase mb-2 italic">SWEATSHIRT</h4>
            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">
              Sweatshirt they're particularly favoured for styles, colors, and designs.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span className="text-6xl font-black leading-none">02</span>
          <div>
            <h4 className="text-2xl font-black uppercase mb-2 italic">ATHLETIC</h4>
            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">
              An "Athletic Hoodie" to a specific type of hoodie designed with features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;