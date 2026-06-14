import { useState, useEffect } from "react";
import { Menu, X, Calendar, Sparkles, Phone } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenReservations: () => void;
}

export default function Navbar({ onOpenBooking, onOpenReservations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#fff9f5]/90 backdrop-blur-md shadow-sm py-4 border-b border-[#1f1f1f0a]" 
        : "bg-transparent py-6"
    }`} id="navbar">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-2xl lg:text-3xl tracking-widest text-[#1f1f1f] hover:opacity-80 transition focus:outline-none"
        >
          Velvéra
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-600 tracking-wider uppercase select-none">
          <button onClick={() => handleScrollTo("problem-solution")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">Problems</button>
          <button onClick={() => handleScrollTo("services")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">Services</button>
          <button onClick={() => handleScrollTo("about")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">About</button>
          <button onClick={() => handleScrollTo("process")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">Process</button>
          <button onClick={() => handleScrollTo("reviews")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">Reviews</button>
          <button onClick={() => handleScrollTo("team")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">Team</button>
          <button onClick={() => handleScrollTo("faq")} className="hover:text-[#1f1f1f] hover:translate-y-[-1px] transition-all">FAQ</button>
        </div>

        {/* Utility / CTAs */}
        <div className="hidden md:flex items-center gap-4">
          {/* View appointments */}
          <button 
            onClick={onOpenReservations}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#1f1f1f] border border-gray-300 rounded-full hover:border-[#1f1f1f] bg-[#fff9f5] transition"
            title="My Saved Booking Reservations"
          >
            <Calendar className="w-3.5 h-3.5 text-[#f59309]" />
            <span className="font-semibold tracking-wide">My Bookings</span>
          </button>
          
          <button 
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-full tracking-wider hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition shadow-md flex items-center gap-1.5 uppercase"
          >
            <span>Book Appointment</span>
            <Sparkles className="w-3.5 h-3.5 text-[#f59309]" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={onOpenReservations}
            className="p-2 text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full bg-white shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#f59309]" />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-full bg-white shadow-sm"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Fluid Backdrop Open) */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] z-30 bg-[#fff9f5] border-b border-gray-150 shadow-lg px-6 py-6 space-y-4 animate-slide-in">
          <div className="flex flex-col gap-4 text-left font-serif text-lg text-gray-800">
            <button onClick={() => handleScrollTo("problem-solution")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Our Work & Focus</span>
              <span className="font-mono text-xs text-gray-400">01</span>
            </button>
            <button onClick={() => handleScrollTo("services")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Premium Services</span>
              <span className="font-mono text-xs text-gray-400">02</span>
            </button>
            <button onClick={() => handleScrollTo("about")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Heritage & Salon</span>
              <span className="font-mono text-xs text-gray-400">03</span>
            </button>
            <button onClick={() => handleScrollTo("process")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Service Process</span>
              <span className="font-mono text-xs text-gray-400">04</span>
            </button>
            <button onClick={() => handleScrollTo("reviews")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Client Reviews</span>
              <span className="font-mono text-xs text-gray-400">05</span>
            </button>
            <button onClick={() => handleScrollTo("team")} className="flex justify-between items-center hover:text-[#f59309] text-left border-b border-gray-100 pb-2">
              <span>Expert Stylists</span>
              <span className="font-mono text-xs text-gray-400">06</span>
            </button>
            <button onClick={() => handleScrollTo("faq")} className="flex justify-between items-center hover:text-[#f59309] text-left pb-2">
              <span>Frequent FAQs</span>
              <span className="font-mono text-xs text-gray-400">07</span>
            </button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-full tracking-wider hover:bg-black transition text-center uppercase shadow flex items-center justify-center gap-1.5"
            >
              <span>Schedule Artistry</span>
              <Sparkles className="w-4 h-4 text-[#f59309]" />
            </button>
            
            <a 
              href="tel:+31612345678"
              className="w-full py-2.5 border border-gray-300 text-gray-600 rounded-full text-xs font-semibold tracking-wider transition text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
