import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is the Food Scanner App and how does it work?", a: "Olive is an app that allows you to scan any food barcode to instantly see a breakdown of its ingredients, their safety, and an overall health score out of 100." },
  { q: "How does Olive ensure accuracy?", a: "We partner with registered dietitians, holistic health experts, and utilize peer-reviewed clinical studies to evaluate every ingredient." },
  { q: "Which products can I scan?", a: "You can scan almost any packaged food item. Our database contains millions of products and is updated daily." },
  { q: "Can I customize dietary needs?", a: "Yes, you can set preferences for allergies, dietary restrictions (like vegan or gluten-free), and specific ingredients you want to avoid." },
  { q: "Is my data secure?", a: "We take your privacy seriously. We never sell your personal information or scan history to third parties." },
  { q: "When will Android version be available?", a: "We are actively developing the Android version, and it is expected to launch late next year. Join our waitlist to be notified." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2D3436] tracking-tight mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[#2D3436] hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                {openIndex === index ? <Minus className="text-[#386641] shrink-0" size={20} /> : <Plus className="text-gray-400 shrink-0" size={20} />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
