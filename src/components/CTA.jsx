import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ctaImages = [
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
];

export default function CTA() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % ctaImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 md:py-28 px-6 md:px-10 flex justify-center w-full bg-[#f2f2f2]">
      
      {/* Main Card */}
      <div className="bg-[#3f6f48] w-full max-w-[700px] rounded-[40px] overflow-hidden flex flex-col items-center shadow-2xl relative">
        
        {/* Top Image Section */}
        <div className="w-full h-[450px] relative">
          
          {/* Animated Image Carousel */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImgIndex}
              src={ctaImages[currentImgIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Healthy food"
            />
          </AnimatePresence>

          {/* Dark Overlay for better image contrast */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          {/* SVG Curve Mask */}
          <div className="absolute bottom-[-1px] left-0 w-full z-20 leading-none">
            <svg 
              viewBox="0 0 100 25" 
              preserveAspectRatio="none" 
              className="w-full h-[120px] text-[#3f6f48]"
            >
              <path 
                fill="currentColor" 
                d="M0,0 Q50,25 100,0 L100,25 L0,25 Z"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="px-10 pb-16 pt-4 text-center text-white w-full relative z-30">
          <h2 className="text-[40px] md:text-[44px] font-bold leading-[1.1] mb-8 tracking-tight">
            Protect Your Family <br /> From Hidden Toxins
          </h2>
          
          <button className="bg-white text-[#3f6f48] px-10 py-4 rounded-full font-semibold text-[17px] hover:scale-105 transition-transform duration-300 shadow-lg">
            Sign up for Olive today
          </button>
        </div>

      </div>
    </div>
  );
}
