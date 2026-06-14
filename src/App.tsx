import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Process from "./components/Process";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TeamCard from "./components/TeamCard";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import BookingSystem, { CustomerBookingsPanel } from "./components/BookingSystem";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReservationsOpen, setIsReservationsOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string>("");
  const [preSelectedStylistId, setPreSelectedStylistId] = useState<string>("");

  const handleOpenBookingSimple = () => {
    setPreSelectedServiceId("");
    setPreSelectedStylistId("");
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    setPreSelectedStylistId("");
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithStylist = (stylistId: string) => {
    setPreSelectedServiceId("");
    setPreSelectedStylistId(stylistId);
    setIsBookingOpen(true);
  };

  const handleExploreServicesButton = () => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fffcfa] text-[#1f1f1f] selection:bg-[#f59309]/15 selection:text-[#f59309] antialiased">
      {/* Global Navigation Header */}
      <Navbar 
        onOpenBooking={handleOpenBookingSimple}
        onOpenReservations={() => setIsReservationsOpen(true)}
      />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBookingSimple}
          onExploreServices={handleExploreServicesButton}
        />

        {/* Problem and Solution focus layout with sliding comparison frame */}
        <ProblemSolution />

        {/* Services catalog filters tab */}
        <Services onSelectServiceAndBook={handleOpenBookingWithService} />

        {/* Brand story values and photo showcase */}
        <AboutUs onOpenBooking={handleOpenBookingSimple} />

        {/* Interactive service sequence step indicator */}
        <Process />

        {/* Verified Client Testimonials Slider */}
        <TestimonialCarousel />

        {/* Team master designers lineup and direct book booking callbacks */}
        <TeamCard onSelectStylistAndBook={handleOpenBookingWithStylist} />

        {/* FAQ list expanding accordion elements */}
        <FAQAccordion />
      </main>

      {/* Corporate signature coordinates, newsletter triggers & copyrights */}
      <Footer />

      {/* Global Booking Systems Wizards Dialog */}
      <BookingSystem 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedServiceId={preSelectedServiceId}
        preSelectedStylistId={preSelectedStylistId}
      />

      {/* Persistent Customer Saved Bookings Sidebar drawer panel */}
      <CustomerBookingsPanel 
        isOpen={isReservationsOpen}
        onClose={() => setIsReservationsOpen(false)}
        onOpenBookingWizard={handleOpenBookingSimple}
      />
    </div>
  );
}
