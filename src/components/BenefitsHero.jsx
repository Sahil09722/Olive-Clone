import { motion } from "framer-motion";

export default function BenefitsHero() {
  return (
    <section className="bg-[#3f6f48] text-white py-24 px-6 flex justify-center">
      
      {/* Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center text-center md:text-left">
        
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
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

          {/* CTA Button */}
          <button className="bg-white text-[#3f6f48] px-8 py-4 rounded-full flex items-center justify-center md:justify-start gap-2 w-fit mx-auto md:mx-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className="font-semibold text-lg">Download for iOS</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
