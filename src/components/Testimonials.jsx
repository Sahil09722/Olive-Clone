import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "After just a week of using Olive, I feel more in control of my family's nutrition. It's empowering to make informed choices so quickly.",
      author: "Lila M.",
      role: "Mother of 2",
      img: "https://i.pravatar.cc/150?img=47"
    },
    {
      text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating.",
      author: "Tina B.",
      role: "Health Coach",
      img: "https://i.pravatar.cc/150?img=44"
    },
    {
      text: "The ingredient breakdowns are a game-changer. I finally understand what all those complex chemical names mean.",
      author: "Sarah J.",
      role: "Fitness Enthusiast",
      img: "https://i.pravatar.cc/150?img=43"
    },
    {
      text: "Olive has saved us so much time at the grocery store. No more standing in the aisle reading fine print for 10 minutes.",
      author: "Emily R.",
      role: "Busy Parent",
      img: "https://i.pravatar.cc/150?img=45"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F9FA]" id="blog">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] tracking-tight mb-4">
            Real Mothers <br className="md:hidden" /> Real Results
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See how Olive is transforming the way families shop for groceries and manage their health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} className="fill-[#F2C94C] text-[#F2C94C]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.author} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#2D3436]">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
