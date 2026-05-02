import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Wheat, Droplets, Pizza, Cookie, IceCream, Baby } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, 150); // 150ms delay prevents flicker
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute top-0 left-0 right-0 z-50 glass-effect border-b border-[#A7C957]/30 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <div className="w-8 h-8 rounded-full bg-[#386641] flex items-center justify-center text-white font-bold text-xl">
            O
          </div>
          <span className="font-bold text-xl tracking-tight text-[#386641]">olive</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center h-full">
          
          {/* SOLUTIONS DROPDOWN */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors h-full">
              Solutions <ChevronDown size={16} className={`transition-transform duration-200 ${open === "solutions" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open === "solutions" && <SolutionsDropdown />}
            </AnimatePresence>
          </div>

          {/* SIMPLE LINKS */}
          {["Features", "Pricing"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors">
              {link}
            </a>
          ))}

          {/* BLOG DROPDOWN */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors h-full">
              Blog <ChevronDown size={16} className={`transition-transform duration-200 ${open === "blog" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open === "blog" && <BlogDropdown />}
            </AnimatePresence>
          </div>

          <a href="#restaurants" className="text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors">
            Restaurants
          </a>

          {/* FOOD DROPDOWN */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("food")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors h-full">
              Food <ChevronDown size={16} className={`transition-transform duration-200 ${open === "food" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open === "food" && <FoodDropdown />}
            </AnimatePresence>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <button className="text-[15px] font-medium text-gray-700 hover:text-[#386641] transition-colors">
            Sign in
          </button>
          <button className="bg-[#386641] text-white px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#2c5234] transition-colors shadow-sm hover:shadow-md hover:scale-105 active:scale-95 duration-200 flex items-center gap-2">
            Get Olive <span className="text-lg leading-none">→</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-800 z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b-2 border-[#A7C957] p-6 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-gray-800">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Solutions</span>
              <div className="pl-4 flex flex-col gap-3">
                <a href="#allergy">Allergy Scanning</a>
                <a href="#gluten-free">Gluten Free Scanning</a>
                <a href="#dairy">Dairy & Lactose</a>
                <a href="#ingredients">Ingredient Checking</a>
              </div>
              <hr className="border-gray-100 my-2" />
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#restaurants">Restaurants</a>
              <hr className="border-gray-100 my-2" />
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Food</span>
              <div className="pl-4 flex flex-col gap-3">
                <a href="#explore">Explore Foods</a>
                <a href="#categories">Categories</a>
                <a href="#top-rated">Top Rated</a>
              </div>
            </div>
            <hr className="my-2 border-gray-100" />
            <button className="text-base font-medium text-left text-gray-800">Sign in</button>
            <button className="bg-[#386641] text-white px-6 py-3 rounded-xl text-center font-medium w-full flex items-center justify-center gap-2">
              Get Olive <span>→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function SolutionsDropdown() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[700px] z-50 cursor-default"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 grid grid-cols-2 gap-8 relative overflow-hidden">
        
        <Item
          title="Allergy Scanning"
          desc="Scan groceries and bottled water to reveal hidden ingredients"
          icon={<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">🥜</div>}
        />

        <Item
          title="Gluten Free Scanning"
          desc="Flags gluten-containing ingredients instantly"
          icon={<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">🌾</div>}
        />

        <Item
          title="Dairy & Lactose"
          desc="Detect casein, whey, lactose and more"
          icon={<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">🥛</div>}
        />

        <Item
          title="Ingredient Checking"
          desc="Decode complex labels in seconds"
          icon={<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🥬</div>}
        />

        {/* Right Image Card */}
        <div className="col-span-2 mt-4 group cursor-pointer">
          <div className="rounded-2xl overflow-hidden relative h-48 shadow-inner">
            <img
              src="/farm.jpg"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Farm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white font-semibold text-lg tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
              Modern-Day Miracle in <br /> Salinas, California <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Item({ title, desc, icon }) {
  return (
    <div className="flex gap-4 cursor-pointer group">
      <div className="shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 group-hover:text-[#386641] transition-colors">{title}</h4>
        <p className="text-sm text-gray-500 leading-snug mt-1 group-hover:text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function FoodDropdown() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[600px] z-50 cursor-default"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-7">
        
        <div className="grid grid-cols-2 gap-y-6 gap-x-12">
          
          <FoodItem icon={<Wheat className="w-6 h-6 text-amber-600" />} label="Breakfast Cereals" bgColor="bg-amber-100" />
          <FoodItem icon={<Droplets className="w-6 h-6 text-red-500" />} label="Sauces And Condiments" bgColor="bg-red-100" />
          
          <FoodItem icon={<Pizza className="w-6 h-6 text-orange-500" />} label="Snacks Salty" bgColor="bg-orange-100" />
          <FoodItem icon={<Cookie className="w-6 h-6 text-yellow-600" />} label="Snacks Sweet" bgColor="bg-yellow-100" />
          
          <FoodItem icon={<IceCream className="w-6 h-6 text-pink-500" />} label="Ice Cream And Frozen Dairy" bgColor="bg-pink-100" />
          <FoodItem icon={<Baby className="w-6 h-6 text-blue-500" />} label="Baby And Infant Food" bgColor="bg-blue-100" />

        </div>
      </div>
    </motion.div>
  );
}

function FoodItem({ icon, label, bgColor }) {
  return (
    <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200 group">
      
      {/* Icon */}
      <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
        {icon}
      </div>

      {/* Label */}
      <span className="text-gray-800 font-medium group-hover:text-[#386641] transition-colors duration-200">
        {label}
      </span>
    </div>
  );
}

function BlogDropdown() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[750px] z-50 cursor-default"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6">
        
        <div className="grid grid-cols-2 gap-6">
          
          {/* Blog Card 1 */}
          <BlogCard
            image="/farm.jpg"
            title="Modern-Day Miracle in Salinas, California"
            desc="One author's journey from faith-based organic advocacy to witnessing a..."
          />

          {/* Blog Card 2 */}
          <BlogCard
            image="/eggs.jpg"
            title="We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free', 'Free-Range', and 'Cage-Free' Will SHOCK You!"
            desc="Not all eggs are created equal. We decoded the confusing labels on egg..."
          />
        </div>
      </div>
    </motion.div>
  );
}

function BlogCard({ image, title, desc }) {
  return (
    <div className="flex gap-4 items-start cursor-pointer group hover:bg-gray-50 p-2 rounded-xl transition-colors duration-200">
      
      {/* Image */}
      <div className="shrink-0 overflow-hidden rounded-xl w-28 h-28">
        <img
          src={image}
          alt="blog"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center h-full">
        <h4 className="font-semibold text-gray-800 leading-snug group-hover:text-[#386641] transition-colors line-clamp-3">
          {title}
        </h4>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2 group-hover:text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
}
