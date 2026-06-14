import { useState } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { Sparkles, ArrowRight, Clock, ShieldCheck } from "lucide-react";

interface ServicesProps {
  onSelectServiceAndBook: (serviceId: string) => void;
}

export default function Services({ onSelectServiceAndBook }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "styling" | "coloring" | "treatment">("all");

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "styling", label: "Cuts & Styling" },
    { id: "coloring", label: "Color Art" },
    { id: "treatment", label: "Hair Treatments" }
  ];

  const filteredServices = activeTab === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-[#fff9f5] border-b border-[#1f1f1f0a]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">Menu of Art</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
            Expert premium hair services tailored for you
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            From precision layers to restorative keratin washes, our master stylists utilize elite bio-formulas to craft beautiful, lasting results.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-10 select-none">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#1f1f1f] text-white shadow-md scale-102"
                  : "bg-white text-gray-500 hover:text-[#1f1f1f] border border-gray-200 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="group bg-white rounded-2xl p-6 border border-[#1f1f1f0a] hover:border-[#1f1f1f14] shadow-sm transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#1f1f1f04] group-hover:bg-[#f59309] transition-all duration-300" />
              
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl font-serif font-bold text-[#1f1f1f] group-hover:text-[#f59309] transition-colors">
                    ${svc.price}
                  </span>
                  
                  <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                    <Clock className="w-3 text-gray-400" />
                    {svc.duration}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1f1f1f] mb-2 leading-snug">
                  {svc.name}
                </h3>
                
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#f59309]/80 font-bold uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3.5 text-emerald-500" />
                  Premium Clean Care
                </span>
                
                <button
                  onClick={() => onSelectServiceAndBook(svc.id)}
                  className="inline-flex items-center gap-1.5 bg-[#1f1f1f]/5 group-hover:bg-[#f59309] text-[#1f1f1f] group-hover:text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Consultation notice */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#1f1f1f0a] max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#f59309]/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#f59309]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#1f1f1f]">Unsure which session matches your hair?</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We offer complimentary initial checkups. Our stylists will diagnose your cuticle structure and sculpt a perfect strategy. 
            </p>
          </div>
          <button
            onClick={() => onSelectServiceAndBook("")}
            className="px-5 py-2.5 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-full uppercase shrink-0 hover:bg-black transition-all"
          >
            Get Free Talk
          </button>
        </div>

      </div>
    </section>
  );
}
