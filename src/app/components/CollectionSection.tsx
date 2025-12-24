"use client"

import React from 'react';

const CollectionSection = () => {
  const categories = [
    {
      id: 1,
      title: "MEN'S BLACK NUMB THE PAIN GRAPHIC PRINTED OVERSIZED HOODIES",
      image: "/images/p1.png", // Replace with your image path
      buttonText: "EXPLORE",
    },
    {
      id: 2,
      title: "PREMIUM CAPS COLLECTION", // Placeholder title
      image: "/images/p2.png",
      buttonText: "EXPLORE",
    },
    {
      id: 3,
      title: "PROPER PEACE OF MIND. BUILT BY YOU FOR YOU.",
      image: "/images/p3.png",
      buttonText: "EXPLORE",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      {/* Top Ticker Tape (Scrolling Text) */}
      <div className="border-t border-b border-gray-300 py-2 overflow-hidden mb-12">
        <div className="whitespace-nowrap animate-marquee font-bold text-xs uppercase tracking-widest text-gray-600">
          BEST HOODIES CLOTHING 2024 THE BEST HOODIES CLOTHING 2024 THE BEST HOODIES CLOTHING 2024
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((item) => (
          <div key={item.id} className="relative cursor-pointer group overflow-hidden bg-[#e4e1d9] aspect-[3/4]">
            {/* Image Placeholder - Aap yahan Next.js ka <Image /> component use karein */}
            <div 
              className="w-full h-full bg-contain bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute bg-black/5 group-hover:bg-black/40 transition-colors" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
              <h3 className="text-white font-bold text-lg md:text-xl mb-6 tracking-tight leading-tight">
                {item.title}
              </h3>
              <button className="px-8 py-2 border border-white cursor-pointer text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Heading */}
      <div className="mt-16 text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-black">
          OUR COLLECTION
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest">
           It seems like you're referring to "Hoodie Allen," a rapper and singer-songwriter... (Your Text Here)
        </p>
      </div>

      {/* Simple Marquee CSS in Tailwind (Add to globals.css) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CollectionSection;