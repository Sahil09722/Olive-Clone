import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] tracking-tight mb-4">
            Healthy Choices <br className="md:hidden" /> Honest Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Start your journey to nutritional clarity today. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8F9FA] p-8 md:p-10 rounded-[40px] border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Monthly</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-[#2D3436]">$14.99</span>
              <span className="text-gray-500">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited Product Scans",
                "Unlimited Database Searches",
                "Comprehensive Lab-Testing Data",
                "Expert-Backed Alternatives",
                "Cancel Anytime"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="bg-[#A7C957]/20 p-1 rounded-full">
                    <Check size={16} className="text-[#386641]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-[#2D3436] border-2 border-gray-200 py-4 rounded-full text-lg font-bold hover:border-[#386641] hover:text-[#386641] transition-colors">
              Start Free Trial
            </button>
          </motion.div>

          {/* Yearly */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#386641] p-8 md:p-10 rounded-[40px] shadow-2xl relative flex flex-col text-white transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#F2C94C] text-[#2D3436] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              BEST VALUE
            </div>
            
            <h3 className="text-xl font-bold text-[#A7C957] mb-2">Yearly</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">$69.99</span>
              <span className="text-white/70">/yr</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Everything in Monthly plan",
                "Get 7 months FREE",
                "60% Savings",
                "Priority Customer Support",
                "Early Access to New Features"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="bg-[#A7C957] p-1 rounded-full text-[#386641]">
                    <Check size={16} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#A7C957] text-[#2D3436] py-4 rounded-full text-lg font-bold hover:bg-[#bce363] transition-colors shadow-lg">
              Start Free Trial
            </button>
            <p className="text-center text-sm text-white/70 mt-4">Just $5.83 per month</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
