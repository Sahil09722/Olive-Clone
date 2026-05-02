import { motion } from "framer-motion";
import { ScanLine, DatabaseZap, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ScanLine size={32} className="text-[#386641]" />,
      title: "Scan & Detect",
      desc: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances."
    },
    {
      icon: <DatabaseZap size={32} className="text-[#386641]" />,
      title: "Data Analysis & Validation",
      desc: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Olive filters out potentially dangerous ingredients."
    },
    {
      icon: <ShieldCheck size={32} className="text-[#386641]" />,
      title: "Actionable Insights",
      desc: "Olive provides tailored insights and healthier product suggestions, empowering you to make better choices for your family's health."
    }
  ];

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] tracking-tight mb-4">
            How the Olive Food Scanner App Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Three simple steps to transform your family's grocery shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] p-8 rounded-[32px] border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7C957]/10 rounded-full blur-3xl group-hover:bg-[#A7C957]/20 transition-colors"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 relative z-10">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#2D3436] mb-4 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
