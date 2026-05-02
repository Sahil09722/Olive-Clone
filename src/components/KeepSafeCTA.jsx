import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/family.jpg",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
];

export default function KeepSafeCTA() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 md:py-28 px-6 md:px-10 bg-[#f2f2f2]">
      {/* Container */}
      <div className="relative rounded-[28px] overflow-hidden h-[520px] max-w-[1200px] mx-auto">

        {/* Fading Background Images */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex}
            src={heroImages[currentImgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="healthy food"
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-2xl text-white">

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Keep your family <br /> safe with Olive
          </h1>

          {/* Bullet Points */}
          <div className="space-y-4 mb-8">
            <Feature text="Effortless food scanning" />
            <Feature text="Peace of mind for parents" />
            <Feature text="Healthy product recommendations" />
          </div>

          {/* Button */}
          <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 w-fit shadow-md hover:scale-105 transition">
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className="font-medium text-[15px]">Download for iOS</span>
          </button>
        </div>

      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3 text-lg">
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 text-black" />
      </div>
      <span className="text-white/90">{text}</span>
    </div>
  );
}
