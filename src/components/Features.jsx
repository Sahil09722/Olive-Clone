import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Features() {
  const chips = [
    { text: "Organic Ingredients", top: "10%", left: "70%" },
    { text: "No MSG", top: "40%", left: "50%" },
    { text: "High Fibre", top: "60%", left: "10%" },
    { text: "Gluten-Free", top: "80%", left: "40%" },
    { text: "Non-GMO", top: "70%", left: "80%" },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-8">
        
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

      </div>
    </section>
  );
}
