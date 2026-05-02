import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Olive Health", "Solutions", "Features", "Pricing", "Blog", "Restaurants"];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#386641] flex items-center justify-center text-white font-bold text-xl">
            O
          </div>
          <span className="font-bold text-xl tracking-tight text-[#386641]">olive</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-gray-600 hover:text-[#386641] transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-sm font-medium text-gray-600 hover:text-[#386641] transition-colors">
            Sign In
          </button>
          <button className="bg-[#386641] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2c5234] transition-colors shadow-sm hover:shadow-md hover:scale-105 active:scale-95 duration-200">
            Get Olive
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-base font-medium text-gray-800" onClick={() => setIsOpen(false)}>
              {link}
            </a>
          ))}
          <hr className="my-2" />
          <button className="text-base font-medium text-left text-gray-800">Sign In</button>
          <button className="bg-[#386641] text-white px-6 py-3 rounded-xl text-center font-medium w-full">
            Get Olive
          </button>
        </div>
      )}
    </motion.nav>
  );
}
