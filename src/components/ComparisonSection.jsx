import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <div className="bg-white py-20 md:py-28 flex justify-center px-6 md:px-10">
      <div className="bg-[#3f6f48] text-white rounded-[32px] w-full max-w-[1200px] px-10 py-14 shadow-sm">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold leading-snug">
            Olive Food Scanner App <br /> vs. The Rest
          </h2>

          {/* Button */}
          <button className="mt-6 bg-white text-[#3f6f48] px-6 py-3 rounded-full flex items-center gap-2 mx-auto shadow-md hover:scale-105 transition-transform">
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span className="font-medium">Download for iOS</span>
          </button>
        </div>

        {/* Icons Row */}
        <div className="grid grid-cols-4 items-center mt-14 mb-6">
          <div></div>

          {/* Olive */}
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-[#a3ea3f] rounded-full flex items-center justify-center text-black text-lg shadow-sm">
              🫒
            </div>
          </div>

          {/* Competitor 1 */}
          <div className="flex justify-center text-2xl drop-shadow-sm">🥕</div>

          {/* Competitor 2 */}
          <div className="flex justify-center text-xl drop-shadow-sm">🅱️</div>
        </div>

        {/* Table */}
        <div className="space-y-6">
          <Row
            label="Detailed Product Breakdown"
            values={["check", "check", "check"]}
          />
          <Row
            label="Comprehensive Water Data"
            values={["check", "cross", "cross"]}
          />
          <Row
            label="Seed Oil Free Dining Map"
            values={["check", "cross", "cross"]}
          />
          <Row
            label="Seed Oil Flagging"
            values={["check", "cross", "check"]}
          />
          <Row
            label="Certified Lab-Testing Data"
            values={["check", "cross", "cross"]}
          />
        </div>
      </div>
    </div>
  );
}

function Row({ label, values }) {
  return (
    <div>
      <div className="grid grid-cols-4 items-center py-4">
        
        {/* Label */}
        <div className="text-sm font-medium text-white/90">{label}</div>

        {/* Values */}
        {values.map((val, i) => (
          <div key={i} className="flex justify-center">
            {val === "check" ? (
              <div className="w-7 h-7 bg-[#a3ea3f] rounded-full flex items-center justify-center shadow-sm">
                <Check className="w-4 h-4 text-[#3f6f48] font-bold" strokeWidth={3} />
              </div>
            ) : (
              <X className="text-red-400 w-6 h-6" strokeWidth={2.5} />
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>
    </div>
  );
}
