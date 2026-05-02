import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#386641] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A7C957] rounded-full blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 relative z-10 leading-[1.1]">
            Protect Your Family <br /> From Hidden Toxins
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of families making smarter, healthier choices every day with Olive.
          </p>

          <button className="bg-[#A7C957] text-[#2D3436] px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors shadow-xl relative z-10">
            Sign up for Olive today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
