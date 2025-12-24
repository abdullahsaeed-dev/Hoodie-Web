import React from 'react';

const Footer = () => {
  const links = ["MEN", "WOMEN", "CHILDREN", "POPULAR"];

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 w-full overflow-hidden">
      {/* Top Credits Line */}
      <div className="flex justify-between items-center text-[10px] md:text-xs tracking-widest uppercase mb-12 opacity-80 font-medium">
        <p>© HOODIE. ALL RIGHTS RESERVED</p>
        <p>DESIGN BY <span className="font-bold">ABDULLAH</span></p>
      </div>

      {/* Main Footer Logo & Links Section */}
      <div className="relative flex items-center justify-center py-10">
        
        {/* Big Background Text (HOODIE) */}
        <h2 className="text-[18vw] font-black leading-none tracking-tighter text-[#E5E1DA] select-none">
          HOODIE
        </h2>

        {/* Floating Pills (Navigation) */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-4 flex-wrap px-4">
          {links.map((link, index) => (
            <div 
              key={link}
              // Is transform se hum pills ko thoda tilt kar rahe hain "chain" look dene ke liye
              className={`
                bg-[#222] border border-gray-600 rounded-full 
                px-6 py-2 md:px-10 md:py-3 
                text-[10px] md:text-sm font-bold tracking-widest 
                hover:bg-white hover:text-black transition-all cursor-pointer shadow-xl
                ${index % 2 === 0 ? '-rotate-6 mt-4' : 'rotate-6 -mt-4'}
              `}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;