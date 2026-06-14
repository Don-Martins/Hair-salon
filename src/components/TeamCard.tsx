import { STYLISTS } from "../data";
import { Stylist } from "../types";
import { Star, Calendar, Sparkles } from "lucide-react";

interface TeamCardProps {
  onSelectStylistAndBook: (stylistId: string) => void;
}

export default function TeamCard({ onSelectStylistAndBook }: TeamCardProps) {
  return (
    <section className="py-20 md:py-28 bg-[#fffcfa] border-b border-[#1f1f1f0a]" id="team">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">Artistry Masterminds</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
            Meet the experts behind your perfect hair
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Our luxury hair salon is staffed by champion specialists who treat every strand like a fine canvas of high couture.
          </p>
        </div>

        {/* Mastermind Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STYLISTS.map((sty) => (
            <div 
              key={sty.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1f1f1f0a] hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-y-[-4px]"
            >
              {/* Photo box relative container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={sty.image} 
                  alt={sty.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Micro Rating badge inside */}
                <div className="absolute top-3 right-3 bg-[#1f1f1f]/85 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 font-bold">
                  <Star className="w-3 text-[#f59309] fill-[#f59309]" />
                  <span>{sty.rating.toFixed(1)}</span>
                </div>

                {/* Specialty overlay */}
                <div className="absolute inset-x-3 bottom-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl border border-[#1f1f1f06] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                  <p className="text-[9px] font-mono uppercase tracking-wider text-[#f59309] font-bold mb-0.5">Focus Signature</p>
                  <p className="text-[10px] text-gray-700 font-semibold leading-tight line-clamp-1">{sty.specialty}</p>
                </div>
              </div>

              {/* Informational area */}
              <div className="p-4 text-center space-y-1">
                <h3 className="font-serif text-base font-bold text-[#1f1f1f]">{sty.name}</h3>
                <p className="text-xs text-gray-400 font-medium">{sty.role}</p>
                
                <div className="pt-3 border-t border-gray-50 mt-2">
                  <button
                    onClick={() => onSelectStylistAndBook(sty.id)}
                    className="w-full py-2 bg-gray-50 hover:bg-[#1f1f1f] hover:text-white text-gray-600 text-[11px] font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3" />
                    <span>Book with {sty.name.split(" ")[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
