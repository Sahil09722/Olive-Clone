import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80",
    name: "Organic Whole Milk",
    brand: "Horizon Organic",
    score: "85",
    status: "good",
    attributes: [
      { label: "Antibiotics", value: "No", status: "green" },
      { label: "Added Sugar", value: "0g", status: "green" },
      { label: "Preservatives", value: "None", status: "green" },
      { label: "Processing", value: "Pasteurized", status: "neutral" },
      { label: "Hormones", value: "No", status: "green" },
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80",
    name: "San Pellegrino Sparkling Natural Mineral Water",
    brand: "Sanpellegrino",
    score: "52",
    status: "limit",
    attributes: [
      { label: "Contaminants", value: "7", status: "red" },
      { label: "Fluoride", value: "Yes", status: "red" },
      { label: "PFAS", value: "No", status: "green" },
      { label: "Microplastics", value: "Minimal", status: "green" },
      { label: "pH Level", value: "5.7", status: "neutral" },
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80",
    name: "Classic Potato Chips",
    brand: "Lay's",
    score: "24",
    status: "avoid",
    attributes: [
      { label: "Sodium", value: "170mg", status: "red" },
      { label: "Seed Oils", value: "Yes", status: "red" },
      { label: "Processing", value: "Ultra", status: "red" },
      { label: "Acrylamide", value: "High", status: "red" },
      { label: "Preservatives", value: "Yes", status: "red" },
    ]
  }
];

export default function Hero() {
  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  // Auto-play the image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8F9FA] border-b-2 border-[#A7C957]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-center gap-12">
        {/* Top Content */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full max-w-3xl text-center z-10 relative"
        >
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 mb-8">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#F2C94C] text-[#F2C94C]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-700 ml-1">Trusted by 10k+ families</span>
          </div>

          <h1 className="text-5xl lg:text-[72px] leading-[1.1] font-bold text-[#2D3436] tracking-tight mb-6">
            The Safest Way to <br className="hidden md:block" /> Shop for Groceries
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
            from Your Family's Diet and Get Expert-Backed Food Insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button className="bg-[#386641] text-white px-8 py-4 rounded-full text-lg font-medium shadow-[0_8px_20px_rgba(56,102,65,0.3)] hover:shadow-[0_10px_25px_rgba(56,102,65,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download for iOS
            </button>
            <button className="bg-white text-[#386641] border-2 border-[#386641] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F8F9FA] transition-colors flex items-center justify-center">
              View Pricing
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center w-full">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 size={16} className="text-[#A7C957]" /> Free 7-day trial
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 size={16} className="text-[#A7C957]" /> Cancel anytime
            </div>
          </div>
        </motion.div>

        {/* Bottom Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center w-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[600px] h-[120%] bg-gradient-to-tr from-[#A7C957]/30 to-[#F2E8CF]/50 blur-3xl rounded-full -z-10"></div>
          
          {/* Phone Frame */}
          <div className="relative w-[340px] h-[680px] bg-white rounded-[44px] border-[12px] border-gray-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-between -mb-10">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-30"></div>
            
            {/* Top Area (Image Carousel) */}
            <div className="mt-14 px-4 flex-1 relative z-10">
              <div className="flex gap-3 h-[220px] justify-center items-center relative rounded-2xl w-full">
                
                {/* Background Left Image */}
                <motion.img 
                   key={`prev-${currentImgIndex}`}
                   src={carouselItems[(currentImgIndex - 1 + carouselItems.length) % carouselItems.length].image} 
                   className="w-16 h-16 rounded-xl opacity-40 absolute left-[-25%] blur-[2px] z-0 shadow-sm object-cover" 
                   initial={{ x: -80, opacity: 0 }}
                   animate={{ x: 0, opacity: 0.4 }}
                   transition={{ duration: 0.6 }}
                   alt="prev" 
                />
                
                {/* Background Right Image */}
                <motion.img 
                   key={`next-${currentImgIndex}`}
                   src={carouselItems[(currentImgIndex + 1) % carouselItems.length].image} 
                   className="w-16 h-16 rounded-xl opacity-40 absolute right-[-25%] blur-[2px] z-0 shadow-sm object-cover" 
                   initial={{ x: 80, opacity: 0 }}
                   animate={{ x: 0, opacity: 0.4 }}
                   transition={{ duration: 0.6 }}
                   alt="next" 
                />

                <AnimatePresence mode="popLayout">
                   <motion.img 
                      key={currentImgIndex}
                      src={carouselItems[currentImgIndex].image}
                      initial={{ opacity: 0, x: 250, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -250, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-[85%] h-full object-cover absolute mx-auto inset-0 shadow-[0_10px_20px_rgba(0,0,0,0.15)] rounded-[20px] z-10" 
                   />
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Sheet Card */}
            <div className="bg-white rounded-t-[32px] rounded-b-[32px] px-5 py-6 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] relative z-20 border-t border-gray-100">
              
              {/* Product Info */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentImgIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-1">
                      <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
                        {carouselItems[currentImgIndex].name}
                      </h2>
                      <p className="text-xs text-gray-400 mt-1 font-medium">{carouselItems[currentImgIndex].brand}</p>
                      
                      {/* Score */}
                      <div className="flex items-center gap-2 mt-3 bg-gray-50 w-max px-2 py-1 rounded-lg">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          carouselItems[currentImgIndex].status === 'good' ? 'bg-[#A7C957]' :
                          carouselItems[currentImgIndex].status === 'limit' ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}></span>
                        <span className="text-sm font-bold text-gray-800">{carouselItems[currentImgIndex].score}/100</span>
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{carouselItems[currentImgIndex].status}</span>
                      </div>
                    </div>
                    <div className="p-2 border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 cursor-pointer">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-400 transition-colors" />
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="my-5 border-gray-100" />

                  {/* Attributes List */}
                  <div className="space-y-3.5 text-[13px]">
                    {carouselItems[currentImgIndex].attributes.map((attr, idx) => (
                      <Row key={idx} label={attr.label} value={attr.value} status={attr.status} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Row component for the attributes
function Row({ label, value, status }) {
  const color =
    status === "red"
      ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]"
      : status === "green"
      ? "bg-[#A7C957] shadow-[0_0_8px_rgba(167,201,87,0.5)]"
      : "bg-gray-300";

  return (
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">{label}</span>
      <div className="flex items-center gap-2.5">
        <span className="text-gray-800 font-bold">{value}</span>
        <span className={`w-2 h-2 rounded-full ${color}`}></span>
      </div>
    </div>
  );
}
