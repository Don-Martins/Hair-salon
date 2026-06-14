import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, Sparkle } from "lucide-react";

export default function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fffcfa] border-b border-[#1f1f1f0a]" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">Knowledge Desk</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
            Answers to your most common questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Everything you need to digest about scheduling cycles, formula choices, product toxicity, and custom services at our salon.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <Sparkle className="w-4 h-4 text-[#f59309] shrink-0" />
                    <span className="font-serif text-base font-bold text-[#1f1f1f] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`p-1.5 rounded-full bg-gray-50 text-gray-400 hover:text-[#1f1f1f] transition-transform duration-300 ${isExpanded ? "transform rotate-180 bg-[#f59309]/10 text-[#f59309]" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-current" />
                  </div>
                </button>

                {/* Animated content expansion */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[200px] border-t border-gray-100" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 bg-gray-50/50">
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
