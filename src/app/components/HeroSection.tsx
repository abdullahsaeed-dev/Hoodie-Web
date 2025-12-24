import Image from 'next/image';
import { Orbitron } from 'next/font/google';

// Loading Orbitron with specific weights
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-orbitron'
});

export default function HeroSection() {
  return (
    <section className={`relative w-full bg-[#f4f1ee] overflow-hidden orbitron `}>
      {/* Header Text */}
      <div className=" pt-12 md:pt-20 flex flex-col items-center z-100">
    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 text-gray-800">
      The best hoodies are only here
    </span>
    <h1 className="font-orbitron text-[16vw] leading-[0.8] font-black tracking-tighter text-black uppercase select-none">
      Hoodie
    </h1>
  </div>

  {/* Image Container - Set to z-10 so it stays BEHIND the text */}
  <div className="relative max-w-[1400px] mx-auto px-1 md:px-8 -mt-[9vw] md:-mt-[9vw] z-10">
    <div className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden">
      <Image
        src="/images/mc-0.png" 
        alt="Models in hoodies"
        fill
        className="object-cover object-top" // Removed z-10 from here
        priority
      />
      
      {/* Swipe UI Box - Isko front mein rakhne ke liye z-30 use kar sakte hain */}
      <div className="absolute bottom-4 left-2 bg-white p-6 md:p-10 min-w-[180px] md:min-w-[300px] z-30">
        <p className="text-xs text-[#3e3e3e] md:text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
          Shop Now
        </p>
        <div className="relative w-full h-[2px] bg-gray-200">
          <div className="absolute top-0 left-0 w-3/4 h-full bg-black"></div>
          <div className="absolute right-0 -top-[4px] w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></div>
        </div>
      </div>
    </div>
  </div>
      {/* Bottom Spacer */}
      <div className="h-24 md:h-40 bg-[#f4f1ee]"></div>
    </section>
  );
}