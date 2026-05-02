export default function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16">
      <footer className="bg-[#3f6f48] rounded-[40px] text-white px-8 md:px-16 py-14 font-sans">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Left Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Explore More Olive Tools
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="cursor-pointer hover:text-white transition-colors">Explore Foods</li>
              <li className="cursor-pointer hover:text-white transition-colors">Allergy Scanner App</li>
              <li className="cursor-pointer hover:text-white transition-colors">Gluten Free Scanner</li>
              <li className="cursor-pointer hover:text-white transition-colors">Dairy Free App</li>
              <li className="cursor-pointer hover:text-white transition-colors">Food Ingredient Checker</li>
              <li className="cursor-pointer hover:text-white transition-colors">Olive Health</li>
            </ul>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-4 text-white/80">
              <li className="cursor-pointer hover:text-white transition-colors">Blog</li>
              <li className="cursor-pointer hover:text-white transition-colors">Email us</li>
              <li className="cursor-pointer hover:text-white transition-colors">Contact us</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start">
            
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black text-sm">
                🍃
              </div>
              <span className="text-2xl font-bold text-lime-400">Olive</span>
            </div>

            <p className="text-white/80 max-w-sm mb-6 leading-relaxed">
              Get the latest lab testing data sent directly to your inbox.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Email address"
                className="bg-[#517f5c] placeholder-white/70 text-white px-5 py-3 rounded-full w-full sm:w-[240px] outline-none border border-transparent focus:border-lime-400 transition-colors"
              />
              <button className="bg-white text-[#3f6f48] px-6 py-3 rounded-full font-medium hover:bg-lime-50 transition-colors w-full sm:w-auto shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm gap-6">
          
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Refund Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Medical Consent</span>
            <span className="cursor-pointer hover:text-white transition-colors">Sign in</span>
          </div>

          {/* Copyright */}
          <div>© 2026 Olive Inc.</div>
        </div>
      </footer>
    </div>
  );
}
