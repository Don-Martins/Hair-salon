import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquareCode, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialCarousel() {
  const [activeCursor, setActiveCursor] = useState(0);

  const handleNext = () => {
    setActiveCursor((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveCursor((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[activeCursor];

  return (
    <section className="py-20 md:py-28 bg-[#fff9f5] border-b border-[#1f1f1f0a]" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59309] font-semibold bg-[#f59309]/10 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
            What our clients say about Velvéra services
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Real evaluations from guests who trusted our master stylists to elevate their hair profile with high precision.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="max-w-4xl mx-auto relative select-none bg-white border border-[#1f1f1f0a] rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[300px]">
          
          {/* Avatar Profile Left */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#fff9f5] shadow-md shrink-0 relative">
            <img 
              src={activeReview.image} 
              alt={activeReview.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#f59309]/10" />
          </div>

          {/* Testimonial Core Content Right */}
          <div className="flex-1 text-left space-y-4">
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#f59309] text-sm">
              {Array.from({ length: activeReview.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="font-mono text-gray-400 text-xs ml-2 font-bold uppercase tracking-wider">Verified Gust</span>
            </div>

            {/* Core Review Text */}
            <div className="relative">
              <span className="absolute top-[-20px] left-[-16px] text-6xl font-serif text-gray-150 leading-none select-none">“</span>
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed italic relative z-10">
                {activeReview.text}
              </p>
            </div>

            {/* Author */}
            <div className="pt-2 border-t border-gray-100 flex justify-between items-end">
              <div>
                <h4 className="font-serif text-base font-bold text-[#1f1f1f]">{activeReview.name}</h4>
                <p className="text-xs text-gray-400 font-semibold">{activeReview.role}</p>
              </div>

              {/* Slider Controller buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-gray-200 hover:border-[#1f1f1f] text-gray-400 hover:text-[#1f1f1f] bg-white rounded-full transition shadow-sm"
                  id="prev-testimonial"
                  title="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-gray-200 hover:border-[#1f1f1f] text-gray-400 hover:text-[#1f1f1f] bg-white rounded-full transition shadow-sm"
                  id="next-testimonial"
                  title="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic masonry block indicator beads */}
        <div className="flex justify-center items-center gap-1.5 mt-6 select-none">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCursor(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeCursor === i ? "w-6 bg-[#f59309]" : "w-1.5 bg-gray-200"
              }`}
              title={`View testimonial ${i+1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
