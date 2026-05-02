import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Scan & Detect",
      desc: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80", // using an abstract product/barcode representation
      particles: true
    },
    {
      title: "Data Analysis & Validation",
      desc: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Olive filters out potentially dangerous ingredients, taking the guesswork out of reading confusing labels.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80", // abstract data/analysis representation
      particles: false
    },
    {
      title: "Actionable Insights",
      desc: "Olive provides tailored insights and healthier product suggestions, empowering you to make better choices for your family's health. We break down the complicated science into simple, actionable steps.",
      image: "https://images.unsplash.com/photo-1611078516081-36ba90ea7223?w=300&q=80", // insights/health representation
      particles: false
    }
  ];

  return (
    <section className="py-20 md:py-28 max-w-[1200px] px-6 md:px-10 mx-auto" id="how-it-works">
      <div className="flex flex-col max-w-6xl mx-auto items-center">
        <div className="flex relative text-[#386641] items-center justify-center gap-4">
          <h2 className="font-bold text-[#386641] max-w-xl text-3xl md:text-[3.2rem] text-center leading-tight">
            How the Olive Food Scanner App Works
          </h2>
          <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-[#A7C957] opacity-60" strokeWidth={1.5} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-24 gap-6 w-full">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full mx-auto p-8 rounded-3xl border border-neutral-200/50 bg-[#F5FAF6] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 py-2 mb-2">
                {step.title}
              </h3>
              
              <div className="h-[200px] rounded-2xl mb-6 bg-white overflow-hidden flex-shrink-0">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Scanner Frame Corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-tl-xl z-10"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-tr-xl z-10"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-bl-xl z-10"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-br-xl z-10"></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center p-6 bg-gray-50/50">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover rounded-xl shadow-sm mix-blend-multiply opacity-90"
                    />
                    
                    {/* Scanner Line Animation */}
                    {i === 0 && (
                      <motion.div 
                        animate={{ top: ["20%", "80%", "20%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-[10%] right-[10%] h-0.5 bg-[#A7C957] shadow-[0_0_8px_2px_rgba(167,201,87,0.6)] z-20"
                      />
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-sm font-medium text-neutral-600 leading-relaxed mt-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
