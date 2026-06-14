import { ArrowRight, Sparkles, Star } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBooking, onExploreServices }: HeroProps) {
  // Avatars of happy clients for the hero badge
  const clientAvatars = [
    "https://framerusercontent.com/images/8v5NNmvvmuOAuVTdhlxvSRSjTU.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/m455LRAidPOrFX87s3wP38TCw.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/vow8aT2ZiPX6Uqxurh8dm0zePnQ.jpg?scale-down-to=512",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fff9f5] overflow-hidden" id="hero">
      {/* Decorative vector shape background in modern Framer style */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#f59309]/5 blur-[80px]" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#ff6a00]/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left Headline Information */}
        <div className="md:col-span-7 space-y-6 text-left max-w-2xl">
          {/* Avatar stat pill */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#1f1f1f0d] p-1.5 pr-4 rounded-full shadow-sm animate-fade-in select-none">
            <div className="flex -space-x-2">
              {clientAvatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Happy hair salon client"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#1f1f1f] text-sm">32K+</span>{" "}
              <span className="text-gray-500 font-medium">Happy customers</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f1f1f] leading-[1.1] tracking-tight">
            Let your hair shine with <span className="font-serif italic font-normal text-[#1f1f1f]/80">strength & beauty</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
            A haircut is just the beginning. Experience hair artistry that enhances your beauty and boosts your confidence. Our master stylists tailor every session to your unique elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-full tracking-wider hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition shadow-md flex items-center justify-center gap-2 uppercase"
            >
              <span>Book Appointment</span>
              <Sparkles className="w-4 h-4 text-[#f59309]" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-8 py-4 border border-gray-300 hover:border-[#1f1f1f] text-[#1f1f1f] text-xs font-semibold rounded-full tracking-wider hover:bg-[#1f1f1f04] transition flex items-center justify-center gap-1.5 uppercase"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Fashion Artwork Layout */}
        <div className="md:col-span-5 relative mt-8 md:mt-0 select-none">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-[-2deg] transition hover:rotate-0 duration-500">
            <img
              src="https://framerusercontent.com/images/cu0iRUOxQzf0JjmOA2eNYaYymY.jpeg"
              alt="Velvera Hair Artistry Model with beautiful shining hair"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Elegant transparent overlay subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Overlapping client review placard in hero */}
          <div className="absolute bottom-[-24px] left-[-12px] sm:left-[-32px] md:left-[-40px] bg-white text-[#1f1f1f] p-4 sm:p-5 rounded-2xl shadow-xl border border-[#1f1f1f0a] max-w-[280px] sm:max-w-[320px] text-left transform md:rotate-[2deg] hover:scale-[1.02] transition duration-300">
            <div className="flex items-center gap-0.5 text-[#f59309] text-xs mb-2">
              <Star className="w-3.5 fill-current" />
              <Star className="w-3.5 fill-current" />
              <Star className="w-3.5 fill-current" />
              <Star className="w-3.5 fill-current" />
              <Star className="w-3.5 fill-current" />
              <span className="font-mono text-gray-400 font-semibold ml-1.5 text-[10px]">5.0 RATING</span>
            </div>
            
            <p className="text-[11px] sm:text-xs text-gray-500 italic leading-relaxed mb-3">
              "The stylists at Velvera guided me through every step of my hair transformation with amazing expert care"
            </p>

            <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
              <img
                src="https://framerusercontent.com/images/8v5NNmvvmuOAuVTdhlxvSRSjTU.jpg?scale-down-to=512"
                alt="Sarah Johnson Client"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-[#1f1f1f]">Sarah Johnson</h4>
                <p className="text-[9px] text-gray-400 font-medium">Balayage & Styling Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
