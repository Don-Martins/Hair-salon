import { useState } from "react";
import { Sparkles, ArrowRight, ClipboardList, Scissors, Sparkle } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Detailed Consultation",
      description: "Our experts take the time to completely analyze your hair fibers, scalp profile, styling history, and the exact signature look you aspire to achieve.",
      details: [
        "Digital magnification structure diagnosis",
        "Face-shape geometry alignment consultation",
        "Mineral wash chemical history checkup"
      ],
      icon: <ClipboardList className="w-6 h-6 text-[#f59309]" />
    },
    {
      num: "02",
      title: "Custom Treatment",
      description: "Whether it’s a precision haircut, dimensional color, or restorative keratin wash, we customize each product formulation to preserve hair health.",
      details: [
        "Sulfate-free premium product mixes",
        "Heat shielding lipid barriers applied",
        "Micro-steamed cuticle therapy sessions"
      ],
      icon: <Scissors className="w-6 h-6 text-[#ff6a00]" />
    },
    {
      num: "03",
      title: "The Final Touch",
      description: "We finalize your signature look with master blowout styles and expert finishing arrays, making sure your hair feels completely fresh & flawless.",
      details: [
        "Anti-humidity lock sprays misted",
        "Hydrating peptide gloss droplets",
        "At-home maintenance chart formulated"
      ],
      icon: <Sparkle className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fff9f5] border-b border-[#1f1f1f0a]" id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">The Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
            How it works
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Witness the three cohesive stages of master treatment we formulate to unlock your hair's absolute power and beauty.
          </p>
        </div>

        {/* Modular Stepped layout with active state controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel step selection */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer text-left flex gap-5 ${
                  activeStep === idx
                    ? "bg-white border-[#f59309] shadow-md"
                    : "bg-transparent border-[#1f1f1f06] hover:bg-white/40"
                }`}
              >
                <div className="font-mono text-xl sm:text-2xl font-bold text-gray-350 shrink-0">
                  <span className={activeStep === idx ? "text-[#f59309]" : "text-gray-300"}>
                    {st.num}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#1f1f1f]">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel detailed display of selected step */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1f1f1f0a] shadow-lg text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f59309]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  {steps[activeStep].icon}
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest">CURRENT PHASE</p>
                  <p className="font-serif text-lg font-semibold text-[#f59309]">{steps[activeStep].num} of 03</p>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1f1f1f] mb-3">
                {steps[activeStep].title} Details
              </h3>
              
              <p className="text-xs text-gray-500 leading-relaxed mb-6 border-b border-gray-100 pb-4">
                We design this phase around uncompromising cleanliness. Witness these micro-actions:
              </p>

              <div className="space-y-3">
                {steps[activeStep].details.map((act, i) => (
                  <div key={i} className="flex gap-2.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f59309]" />
                    <span className="text-xs text-gray-700 font-medium">{act}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-300">
                <span className="tracking-wider text-gray-400 font-mono uppercase text-[9px]">Velvera Luxury Protocol</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Active Step
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
