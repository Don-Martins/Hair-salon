import React, { useState } from "react";
import { Smile, TrendingDown, Info, Scissors, ShieldCheck, Droplet, Sparkles } from "lucide-react";

export default function ProblemSolution() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    updateSlider(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    if (e.touches[0]) {
      updateSlider(e.touches[0].clientX, e.currentTarget);
    }
  };

  const updateSlider = (clientX: number, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  // Problems listed in Velvera
  const problems = [
    {
      id: "prob-1",
      title: "Frizzy Hair",
      description: "Hair that constantly looks dry, frizzy, and difficult to manage or style in daily humidity.",
      icon: <TrendingDown className="w-5 h-5 text-red-500" />
    },
    {
      id: "prob-2",
      title: "Damaged Strands",
      description: "Hair that feels structurally weak, breaks easily, and looks lifeless due to color heat fatigue.",
      icon: <Info className="w-5 h-5 text-red-500" />
    },
    {
      id: "prob-3",
      title: "Thinning Volume",
      description: "Lack of volume, bounce, and density, making your hair look limp and difficult to lock styles.",
      icon: <Info className="w-5 h-5 text-red-500" />
    }
  ];

  // Solutions listed in Velvera
  const solutions = [
    {
      id: "sol-1",
      title: "Deep Hydration",
      description: "Our high-precision keratin and moisture-rich treatments completely seal cuticles and smooth frizz.",
      icon: <Droplet className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "sol-2",
      title: "Repair Hair Fibers",
      description: "We use nourishing bond-repair formulas and peptide treatments to repair damaged cortex locks.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "sol-3",
      title: "Add Fullness & Density",
      description: "From precision layers to volumizing scalp steam treatments and high-grade custom extensions.",
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fffcfa] border-b border-[#1f1f1f06] overflow-hidden" id="problem-solution">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Double Header: Problems & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* List of Problems */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold bg-red-400/5 px-3 py-1 rounded-full">Common Issues</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
                Common hair problems you may experience
              </h2>
            </div>
            
            <div className="space-y-4">
              {problems.map((prob) => (
                <div 
                  key={prob.id} 
                  className="p-5 rounded-2xl bg-[#fff9f5] border border-red-100 flex gap-4 transition hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    {prob.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1f1f1f] mb-1">{prob.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* List of Solutions */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold bg-emerald-400/5 px-3 py-1 rounded-full">The Healing Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1f1f] tracking-tight leading-tight">
                This is how we bring your hair back to life
              </h2>
            </div>

            <div className="space-y-4">
              {solutions.map((sol) => (
                <div 
                  key={sol.id} 
                  className="p-5 rounded-2xl bg-[#fff9f5] border border-emerald-100 flex gap-4 transition hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    {sol.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1f1f1f] mb-1">{sol.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{sol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Epic Before/After Interactive Sliding Canvas */}
        <div className="mt-16 bg-[#fff9f5] rounded-3xl p-6 sm:p-10 border border-[#1f1f1f0a] max-w-4xl mx-auto text-center">
          <div className="max-w-xl mx-auto space-y-3 mb-8">
            <span className="text-[10px] font-mono font-bold text-[#f59309] bg-[#f59309]/10 px-3 py-1 rounded-full uppercase tracking-wider">Before & After Artistry</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1f1f]">Slide to witness the healthy glow</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Drag or swipe the center bar below. Watch frizzy, lifeless hair transform into a nourished, silky gloss finish.
            </p>
          </div>

          {/* Interactive Container */}
          <div 
            className="relative w-full max-w-[640px] mx-auto aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsSliding(true)}
            onTouchStart={() => setIsSliding(true)}
            onMouseUp={() => setIsSliding(false)}
            onMouseLeave={() => setIsSliding(false)}
            onTouchEnd={() => setIsSliding(false)}
          >
            {/* After Image (Full Background) */}
            <img 
              src="https://framerusercontent.com/images/sYjPCZBTlLwoHSXFJfrfaUZ4zU.jpg" 
              alt="After - Healthy glowing silky hair transformation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-4 bottom-4 bg-[#1f1f1f]/80 text-[#fffcfa] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              AFTER VELVÉRA
            </div>

            {/* Before Image (Clipping Overlaid) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              {/* Force image to remain the absolute container width */}
              <div className="absolute inset-y-0 left-0 w-[640px] h-full max-w-none">
                <img 
                  src="https://framerusercontent.com/images/WBUsZbdIaQQO0T0IRFLBzmYKZIM.jpg" 
                  alt="Before - Lifeless frizzy dry hair"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.6] sepia-[0.10] pointer-events-none"
                  referrerPolicy="no-referrer"
                  style={{ width: '640px', maxWidth: 'none', height: '100%' }}
                />
              </div>
              <div className="absolute left-4 bottom-4 bg-[#1f1f1f]/80 text-[#fffcfa] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full z-10">
                BEFORE
              </div>
            </div>

            {/* Sliding Divider Control */}
            <div 
              className="absolute inset-y-0 w-1 bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Circular handle button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1f1f1f] text-white border-2 border-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-1 items-center font-mono text-[9px] tracking-tighter">
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-2 mt-4 text-[11px] text-gray-400 font-medium">
            <span>◄ Drag slider left or right ►</span>
          </div>
        </div>

      </div>
    </section>
  );
}
