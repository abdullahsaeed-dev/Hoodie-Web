import React from 'react';
import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className="relative w-full bg-[#f3f1ee] py-20 overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. Background Big Text */}
      <div className="relative w-full max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter text-black select-none">
          SUBSCRIBE OUR <br /> NEWSLETTER
        </h2>

        {/* 2. Overlapping Model Image */}
        {/* Note: Is image ka background transparent hona chahiye taake text piche nazar aaye */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] mt-20">
            <img
              src="/images/footimg.png"// Aapki upload ki hui image ka path
              alt="Model wearing hoodie"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* 3. Subscription Input Field */}
      <div className="relative z-10 mt-10 md:-mt-10 w-full max-w-md px-6">
        <div className="relative group">
          <input
            type="email"
            placeholder="ENTER YOUR MAIL"
            className="w-full py-4 px-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-xs font-bold tracking-widest uppercase transition-all shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
};

export default NewsletterSection;