import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Check } from "lucide-react";

export default function Features() {
  const chips = [
    { text: "Organic Ingredients", top: "10%", left: "70%" },
    { text: "No MSG", top: "40%", left: "50%" },
    { text: "High Fibre", top: "60%", left: "10%" },
    { text: "Gluten-Free", top: "80%", left: "40%" },
    { text: "Non-GMO", top: "70%", left: "80%" },
  ];

  return (
    <section id="features" className="w-full relative z-10">
      {/* Benefits Hero Section */}
      <div className="bg-[#3f6f48] text-white pt-24 pb-48 px-6 flex justify-center w-full">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center text-center md:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[52px] md:text-[68px] leading-[1.1] font-semibold tracking-tight font-sans">
              Health Benefits of Using Olive
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 max-w-md mx-auto md:mx-0"
          >
            <p className="text-lg text-white/90 leading-relaxed font-sans">
              Olive proactively flags harmful ingredients and offers personalized
              recommendations, empowering you to make better choices for your
              family's health.
            </p>

            <button className="bg-white text-[#3f6f48] px-8 py-4 rounded-full flex items-center justify-center md:justify-start gap-2 w-fit mx-auto md:mx-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span className="font-semibold text-lg">Download for iOS</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-white px-6 pb-24 flex justify-center">
        <div className="w-full max-w-[1200px] space-y-8 -mt-32 relative z-20">
        
        {/* Nutritional Clarity Box */}
        <div className="bg-[#E4ECD5] rounded-[40px] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
          <div className="z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] tracking-tight mb-8">
              Achieve Nutritional Clarity
            </h2>
            <ul className="space-y-6">
              {[
                "Olive breaks down every ingredient into clear, actionable information.",
                "Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.",
                "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#386641] rounded-full p-0.5 shrink-0">
                    <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[#2D3436] text-lg font-medium leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[400px] flex items-center justify-center">
            {/* 3 Images mockup */}
            <div className="absolute top-0 flex justify-center w-full z-0">
              <img src="https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=300&q=80" alt="Product 1" className="w-32 h-48 object-cover rounded-2xl transform -rotate-12 translate-x-12 shadow-lg" />
              <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=300&q=80" alt="Product 2" className="w-40 h-56 object-cover rounded-2xl z-10 shadow-xl" />
              <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=300&q=80" alt="Product 3" className="w-32 h-48 object-cover rounded-2xl transform rotate-12 -translate-x-12 shadow-lg" />
            </div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 w-full max-w-sm bg-white/80 backdrop-blur-xl p-4 rounded-[32px] shadow-2xl border border-white/50 z-20"
            >
              <div className="flex items-center gap-4 mb-4 bg-white rounded-[24px] p-3 shadow-sm">
                <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=100&q=80" className="w-16 h-16 rounded-xl object-cover" alt="Straus Ice Cream" />
                <div>
                  <h4 className="font-bold text-xl text-[#2D3436]">Straus Ice Cream</h4>
                  <p className="text-[#386641] font-bold text-lg">96/100 <span className="text-sm font-medium text-gray-500">Excellent</span></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#E4ECD5]/50 p-4 rounded-[24px]">
                  <h5 className="font-bold flex items-center justify-center gap-2 mb-3 text-[#386641]">
                    <CheckCircle2 size={18} /> Positives
                  </h5>
                  <div className="space-y-2">
                    <div className="h-6 bg-white/60 rounded-full w-full"></div>
                    <div className="h-6 bg-white/60 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="bg-[#F8E1E1]/50 p-4 rounded-[24px]">
                  <h5 className="font-bold flex items-center justify-center gap-2 mb-3 text-[#B03E3E]">
                    <XCircle size={18} /> Negatives
                  </h5>
                  <div className="space-y-2">
                    <div className="h-6 bg-white/60 rounded-full w-5/6"></div>
                    <div className="h-6 bg-white/60 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Proactive Ingredient Filtering Box */}
        <div className="bg-[#F6EBEB] rounded-[40px] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative min-h-[400px]">
          <div className="z-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] tracking-tight">
              Proactive Ingredient Filtering
            </h2>
          </div>
          
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full flex items-center justify-center">
             {chips.map((chip, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 animate={{ 
                   y: [0, -10, 0],
                   rotate: [-2, 2, -2]
                 }}
                 style={{ top: chip.top, left: chip.left }}
                 className="absolute bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-lg border border-white flex items-center gap-2 font-bold text-[#2D3436]"
               >
                 <div className="bg-[#2D3436] text-white rounded-full p-0.5">
                   <CheckCircle2 size={14} />
                 </div>
                 {chip.text}
               </motion.div>
             ))}
          </div>
        </div>

        {/* Real Health Outcomes for Your Family Box */}
        <div className="bg-[#e9ece7] rounded-[40px] p-8 md:p-16 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
            <h2 className="text-[32px] md:text-[42px] font-semibold text-[#2f3e2f] leading-tight mb-8 md:mb-10">
              Real Health Outcomes for Your Family
            </h2>

            <div className="space-y-6">
              <HealthFeature text="Empowers parents to feel more in control of their family's health." />
              <HealthFeature text="Delivers personalized suggestions for healthier food choices." />
              <HealthFeature text="Promotes long-term well-being through informed, balanced decisions." />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-[#f3e7c9] rounded-[24px] p-6 md:p-10 flex justify-center items-center order-1 md:order-2 shadow-sm">
            <img
              src="/avocado-family.png"
              alt="Avocado Family"
              className="w-full max-w-[300px] h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}

function HealthFeature({ text }) {
  return (
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="w-7 h-7 bg-[#2f3e2f] rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm">
        <Check className="w-4 h-4 text-white" strokeWidth={3} />
      </div>

      {/* Text */}
      <p className="text-[#2f3e2f] text-lg leading-relaxed max-w-md">
        {text}
      </p>
    </div>
  );
}
