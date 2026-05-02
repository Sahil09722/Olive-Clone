import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ComparisonSection from "./components/ComparisonSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import KeepSafeCTA from "./components/KeepSafeCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full bg-white">
      <div className="mt-4 md:mt-8 mb-10 md:mb-24 max-w-[1400px] px-4 md:px-8 mx-auto">
        <div className="border border-[#A7C957]/40 relative rounded-3xl bg-[#F5FAF6] overflow-hidden">
          <Navbar />
          <Hero />
        </div>
      </div>
      <HowItWorks />
      <Features />
      <Testimonials />
      <ComparisonSection />
      <CTA />
      <Pricing />
      <Benefits />
      <FAQ />
      <KeepSafeCTA />
      <Footer />
    </div>
  );
}

export default App;