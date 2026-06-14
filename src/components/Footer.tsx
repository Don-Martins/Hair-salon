import React, { useState } from "react";
import { Sparkles, Mail, Phone, MapPin, Check } from "lucide-react";

export default function Footer() {
  const [emailValue, setEmailValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) return;
    setIsSubscribed(true);
    setEmailValue("");
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#1f1f1f] text-[#fffcfa] pt-16 pb-8 border-t border-black select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top block layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & coordinates */}
          <div className="md:col-span-5 space-y-6 text-left">
            <h2 className="font-serif text-3xl tracking-widest text-white">Velvéra</h2>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Premium modern hair salon. Experience professional precise cuts, dimensional eco-coloring, and organic hydration therapies that elevate your natural features.
            </p>
            
            <div className="space-y-3.5 text-xs text-gray-300 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#f59309] shrink-0" />
                <span>32 Keizersgracht, Asterdem, NL</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f59309] shrink-0" />
                <a href="tel:+31612345678" className="hover:text-white transition">+31 6 12345678</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f59309] shrink-0" />
                <a href="mailto:info@velvera.com" className="hover:text-white transition">info@velvera.com</a>
              </div>
            </div>
          </div>

          {/* Quick navigations */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#f59309] uppercase">Salon Directory</h4>
            <div className="flex flex-col gap-3 text-xs text-gray-400 font-semibold font-sans">
              <button onClick={() => handleScrollTo("problem-solution")} className="hover:text-white text-left transition">Our Focus Case</button>
              <button onClick={() => handleScrollTo("services")} className="hover:text-white text-left transition">Premium Services</button>
              <button onClick={() => handleScrollTo("about")} className="hover:text-white text-left transition">Heritage & About</button>
              <button onClick={() => handleScrollTo("process")} className="hover:text-white text-left transition">Treatment Works</button>
              <button onClick={() => handleScrollTo("reviews")} className="hover:text-white text-left transition">Review Reports</button>
              <button onClick={() => handleScrollTo("team")} className="hover:text-white text-left transition">Certified Staff</button>
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#f59309] uppercase">Newsletter Club</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to unlock quarterly hair care blueprints, luxury product launches, and seasonal members-only booking discount tokens.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="name@email.com"
                  className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#f59309] flex-1 font-sans"
                />
                
                <button
                  type="submit"
                  className="bg-[#f59309] text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#e08605] active:scale-95 transition tracking-wider uppercase font-sans shrink-0"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Subscribed! Check your inbox for gift tokens.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-gray-500 font-medium font-mono">
          <p>© 2026 Velvéra. All Rights Reserved. Tailored with care.</p>
          
          <div className="flex gap-6 mt-4 sm:mt-0 uppercase tracking-widest text-[9px] font-bold">
            <a href="#" className="hover:text-[#f59309] transition">Instagram</a>
            <a href="#" className="hover:text-[#f59309] transition">Pinterest</a>
            <a href="#" className="hover:text-[#f59309] transition">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
