import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white" id="benefits">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FDF4F4] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative blur elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2C94C]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F4A8A8]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <h2 className="text-5xl md:text-7xl font-bold text-[#D47979] tracking-tight mb-8 leading-[1.1] relative z-10">
            100% Independent.<br />Always.
          </h2>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#2D3436] font-medium leading-relaxed relative z-10">
            We never monetize through brand deals, affiliate links, or ads —
            so you can trust our recommendations are always aligned with our users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
