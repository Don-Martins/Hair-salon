import { useState } from "react";
import { GALLERY_IMAGES } from "../data";
import { Scissors, Shield, Sparkles, ChevronRight, Play } from "lucide-react";

interface AboutUsProps {
  onOpenBooking: () => void;
}

export default function AboutUs({ onOpenBooking }: AboutUsProps) {
  const [activeValue, setActiveValue] = useState<number>(0);
  const [showVideo, setShowVideo] = useState(false);

  const values = [
    {
      title: "Precision Expertise",
      intro: "Precision styling by skilled professionals",
      details: "Our certified designers update their skills quarterly under industry leads. We master geometric sectioning, customized styling gradients, and micro-trim structural care.",
      icon: <Scissors className="w-5 h-5 text-[#f59309]" />
    },
    {
      title: "Bio-Pure Quality",
      intro: "Top-tier products for lasting results",
      details: "We exclusively formulate with sulfate-free, botanical-rich, micro-emulsion locks that penetrate the cortex without stripping your hair's native minerals.",
      icon: <Shield className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Authentic Personalization",
      intro: "Tailored care for your unique hair",
      details: "No two scalps are identical. Every treatment session initiates with digital cuticle assessments, mapping target custom formulas directly for your hair's density.",
      icon: <Sparkles className="w-5 h-5 text-[#ff6a00]" />
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fffcfa] border-b border-[#1f1f1f0a]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">About Velvéra</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f1f1f] tracking-tight leading-tight">
                Hair salon where style & care come together
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Introduction</p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1f1f1f] leading-snug">
                Welcome to Velvéra, your ultimate destination for high-tier hair care
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                We combine modern expert styling techniques with organic, premium hair preparations to give your hair the exact nourishment it deserves. From precision styling to rejuvenating therapy, we ensure every visit leaves you feeling confident, refreshed, and flawless.
              </p>
              
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-full tracking-wider hover:bg-black uppercase shadow-sm transition"
              >
                <span>Get Expert Care</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 border-t border-[#1f1f1f0a] space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Why choose us</p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1f1f1f] leading-snug">
                Why Velvera is the right choice for your hair
              </h3>

              {/* Interactive Values Accordion list */}
              <div className="space-y-3">
                {values.map((val, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveValue(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      activeValue === idx
                        ? "border-[#f59309] bg-[#f59309]/5"
                        : "border-[#1f1f1f06] hover:border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${activeValue === idx ? 'bg-white shadow' : 'bg-gray-50'}`}>
                          {val.icon}
                        </div>
                        <div>
                          <p className={`text-xs font-mono uppercase tracking-wider font-bold ${activeValue === idx ? 'text-[#f59309]' : 'text-[#1f1f1f]'}`}>
                            {val.title}
                          </p>
                          <p className="text-[11px] text-gray-400 font-medium">
                            {val.intro}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 text-gray-400 transition-transform ${activeValue === idx ? 'transform rotate-90 text-[#f59309]' : ''}`} />
                    </div>
                    
                    {activeValue === idx && (
                      <div className="mt-3 pl-12 pt-2 border-t border-[#f59309]/10 animate-fade-in">
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {val.details}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image/Model Column Layout (Bento Grid Style) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1 - Large vertical portrait with play video simulation */}
              <div 
                className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-[#1f1f1f0b] relative group cursor-pointer"
                onClick={() => setShowVideo(!showVideo)}
              >
                {!showVideo ? (
                  <>
                    <img 
                      src="https://framerusercontent.com/images/aKWr7Jsb6awIHzNIYHZov7G64M.jpg" 
                      alt="Upscale salon chair interior"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 text-[#1f1f1f] rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 inset-x-3 text-center bg-[#1f1f1f]/80 text-[#fffcfa] text-[9px] uppercase tracking-widest py-1.5 rounded-lg">
                      WATCH OUR HERITAGE
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-[#1f1f1f] flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-xs text-[#f59309] font-mono mb-2">Simulated Video Stream...</p>
                    <p className="text-[11px] text-gray-400 max-w-[124px] mb-4">Masterclass styling process tour active.</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-[10px] rounded"
                    >
                      Close Player
                    </button>
                  </div>
                )}
              </div>

              {/* Grid 2 Column (Two horizontal square images stacked) */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg border border-[#1f1f1f0b]">
                  <img 
                    src="https://framerusercontent.com/images/dZEpcnHnY1537g0DHOfvzdOx4.webp" 
                    alt="Premium organic shampoo and oil products"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg border border-[#1f1f1f0b]">
                  <img 
                    src="https://framerusercontent.com/images/WBUsZbdIaQQO0T0IRFLBzmYKZIM.jpg" 
                    alt="Stylist tailoring haircut"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

            </div>

            {/* Gallery Slider Strip */}
            <div className="bg-[#fff9f5] border border-[#1f1f1f0a] rounded-2xl p-4">
              <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase text-center mb-3">Our Luxury Studio & Showcase</p>
              <div className="grid grid-cols-3 gap-3">
                {GALLERY_IMAGES.slice(0, 3).map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <img 
                      src={img} 
                      alt="Salon showcase layout" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:rotate-1 hover:scale-105 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
