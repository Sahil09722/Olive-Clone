import { motion } from "framer-motion";
import { Star, CheckCircle2, X } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
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

          <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-bold text-[#2D3436] tracking-tight mb-6">
            The Safest Way to <br className="hidden lg:block" /> Shop for Groceries
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
            from Your Family's Diet and Get Expert-Backed Food Insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 size={16} className="text-[#A7C957]" /> Free 7-day trial
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 size={16} className="text-[#A7C957]" /> Cancel anytime
            </div>
          </div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#A7C957]/20 to-[#F2E8CF]/40 blur-3xl rounded-full -z-10"></div>
          
          {/* Phone Frame */}
          <div className="relative w-[320px] sm:w-[360px] h-[680px] bg-white rounded-[50px] border-[12px] border-gray-900 shadow-2xl overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-full z-20"></div>
            
            {/* App Screen Content Placeholder */}
            <div className="w-full h-full bg-[#F8F9FA] relative flex flex-col pt-16 px-4">
               <div className="w-full bg-white rounded-3xl p-4 shadow-sm mb-4">
                 <div className="w-full h-48 bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80" className="w-full h-full object-cover" alt="Organic product" />
                 </div>
                 <h3 className="font-bold text-lg mb-1">Organic Strawberry</h3>
                 <div className="flex justify-between items-center">
                   <p className="text-gray-500 text-sm">Straus Family</p>
                   <div className="bg-[#A7C957]/20 text-[#386641] px-3 py-1 rounded-full text-sm font-bold">96/100</div>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-center">
                    <div className="text-[#386641] mb-1"><CheckCircle2 size={24} className="mx-auto" /></div>
                    <p className="text-xs font-medium">No Additives</p>
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-center">
                    <div className="text-[#386641] mb-1"><CheckCircle2 size={24} className="mx-auto" /></div>
                    <p className="text-xs font-medium">Organic</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-10 top-20 bg-white p-4 rounded-2xl shadow-xl z-10 hidden sm:block border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <X className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold">Red 40 Detected</p>
                <p className="text-xs text-gray-500">Harmful additive</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -right-8 bottom-32 bg-white p-4 rounded-2xl shadow-xl z-10 hidden sm:block border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="text-[#386641]" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold">100% Safe</p>
                <p className="text-xs text-gray-500">Verified by experts</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
