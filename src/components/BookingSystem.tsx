import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Check, Sparkles, Scissors, Trash2 } from "lucide-react";
import { Service, Stylist, Booking } from "../types";
import { SERVICES, STYLISTS } from "../data";

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  preSelectedStylistId?: string;
}

export default function BookingSystem({
  isOpen,
  onClose,
  preSelectedServiceId,
  preSelectedStylistId
}: BookingSystemProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("velvera_bookings");
      if (stored) {
        setMyBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading bookings", e);
    }
  }, []);

  // Sync preselected options
  useEffect(() => {
    if (preSelectedServiceId) {
      const found = SERVICES.find(s => s.id === preSelectedServiceId);
      if (found) setSelectedService(found);
    }
    if (preSelectedStylistId) {
      const found = STYLISTS.find(s => s.id === preSelectedStylistId);
      if (found) setSelectedStylist(found);
    }
  }, [preSelectedServiceId, preSelectedStylistId, isOpen]);

  if (!isOpen) return null;

  // Generate calendar dates (next 12 days)
  const getNextDays = () => {
    const days = [];
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 1; i <= 12; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      // Skip Sundays as our luxury salon is closed
      if (d.getDay() === 0) continue; 
      
      days.push({
        id: d.toISOString().split("T")[0],
        dayName: weekdayNames[d.getDay()],
        dayNum: d.getDate(),
        month: monthNames[d.getMonth()]
      });
    }
    return days;
  };

  const TIME_SLOTS = [
    "09:30 AM", "10:30 AM", "11:30 AM", "01:00 PM", "02:00 PM", "03:30 PM", "04:30 PM", "05:30 PM"
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && !selectedStylist) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedStylist || !selectedDate || !selectedTime || !customerName || !customerEmail || !customerPhone) {
      return;
    }

    const newBooking: Booking = {
      id: "VV-" + Math.floor(100000 + Math.random() * 900000),
      service: selectedService,
      stylist: selectedStylist,
      date: selectedDate,
      time: selectedTime,
      customerName,
      customerEmail,
      customerPhone,
      notes,
      createdAt: new Date().toISOString()
    };

    const updated = [newBooking, ...myBookings];
    setMyBookings(updated);
    localStorage.setItem("velvera_bookings", JSON.stringify(updated));
    setConfirmedBooking(newBooking);
    setStep(5); // Show success ticket
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate("");
    setSelectedTime("");
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setNotes("");
    setConfirmedBooking(null);
  };

  const deleteBooking = (id: string) => {
    const updated = myBookings.filter(b => b.id !== id);
    setMyBookings(updated);
    localStorage.setItem("velvera_bookings", JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1fc0] backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#fffcfa] text-[#1f1f1f] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#1f1f1f14] flex flex-col md:flex-row h-[90vh] md:h-[600px]">
        {/* Left Bar / Steps Sidebar */}
        <div className="bg-[#1f1f1f] text-[#fffcfa] p-6 md:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="w-5 h-5 text-[#f59309] transform rotate-90" />
              <span className="font-serif text-xl tracking-wider">Velvéra Booking</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 1 ? 'border-[#f59309] text-[#f59309] bg-[#f59309]/10' : 'border-gray-600 text-gray-500'}`}>
                  {step > 1 ? <Check className="w-4 h-4" /> : "01"}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Step 01</p>
                  <p className={`text-sm font-medium ${step === 1 ? 'text-[#fffcfa]' : 'text-gray-400'}`}>Select Service</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 2 ? 'border-[#f59309] text-[#f59309] bg-[#f59309]/10' : 'border-gray-600 text-gray-500'}`}>
                  {step > 2 ? <Check className="w-4 h-4" /> : "02"}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Step 02</p>
                  <p className={`text-sm font-medium ${step === 2 ? 'text-[#fffcfa]' : 'text-gray-400'}`}>Choose Stylist</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 3 ? 'border-[#f59309] text-[#f59309] bg-[#f59309]/10' : 'border-gray-600 text-gray-500'}`}>
                  {step > 3 ? <Check className="w-4 h-4" /> : "03"}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Step 03</p>
                  <p className={`text-sm font-medium ${step === 3 ? 'text-[#fffcfa]' : 'text-gray-400'}`}>Date & Time</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border ${step >= 4 ? 'border-[#f59309] text-[#f59309] bg-[#f59309]/10' : 'border-gray-600 text-gray-500'}`}>
                  {step > 4 ? <Check className="w-4 h-4" /> : "04"}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Step 04</p>
                  <p className={`text-sm font-medium ${step === 4 ? 'text-[#fffcfa]' : 'text-gray-400'}`}>Contact & Notes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current selections display */}
          {selectedService && step < 5 && (
            <div className="border-t border-[#fffcfa]/10 pt-4 mt-4 text-xs space-y-1">
              <p className="text-gray-400 tracking-wider">RESERVATION DETAIL</p>
              <div className="flex justify-between font-mono text-gray-300">
                <span>{selectedService.name}</span>
                <span>${selectedService.price}</span>
              </div>
              {selectedStylist && (
                <div className="flex justify-between text-[#f59309]">
                  <span>Stylist: {selectedStylist.name}</span>
                </div>
              )}
              {selectedDate && selectedTime && (
                <div className="flex items-center gap-1 text-gray-300 mt-1">
                  <Calendar className="w-3" />
                  <span>{selectedDate} @ {selectedTime}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Content Sheet */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-[#1f1f1f0a] mb-4">
            <h3 className="font-serif text-2xl text-[#1f1f1f]">
              {step === 1 && "Select Hair Service"}
              {step === 2 && "Choose Stylist / Expert"}
              {step === 3 && "Pick Date & Slot"}
              {step === 4 && "Finalize Appointment"}
              {step === 5 && "Booking Successful!"}
            </h3>
            <button 
              onClick={onClose}
              className="p-1 px-2 text-gray-400 hover:text-[#1f1f1f] rounded-lg transition"
              id="close-booking-modal"
            >
              <X className="w-6" />
            </button>
          </div>

          <div className="flex-1">
            {/* Step 1: Services List */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {SERVICES.map(svc => (
                  <div
                    key={svc.id}
                    onClick={() => setSelectedService(svc)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-left flex justify-between items-start ${
                      selectedService?.id === svc.id
                        ? "border-[#f59309] bg-[#f59309]/5"
                        : "border-[#1f1f1f0a] hover:border-[#1f1f1f1c] bg-[#fffgfa]"
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-[#1f1f1f]">{svc.name}</h4>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{svc.duration}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{svc.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[#1f1f1f] text-base font-bold">${svc.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Choose Stylist */}
            {step === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {STYLISTS.map(stylist => (
                  <div
                    key={stylist.id}
                    onClick={() => setSelectedStylist(stylist)}
                    className={`p-3 rounded-xl border-2 transition cursor-pointer flex flex-col items-center text-center ${
                      selectedStylist?.id === stylist.id
                        ? "border-[#f59309] bg-[#f59309]/5"
                        : "border-[#1f1f1f0a] hover:border-[#1f1f1f1c]"
                    }`}
                  >
                    <img 
                      src={stylist.image} 
                      alt={stylist.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover mb-2 border border-gray-150"
                    />
                    <h4 className="text-xs font-semibold text-[#1f1f1f]">{stylist.name}</h4>
                    <p className="text-[10px] text-gray-400 mb-1 leading-snug">{stylist.role}</p>
                    <div className="flex items-center gap-0.5 text-[#f59309] text-[10px]">
                      <span>★</span>
                      <span className="font-mono">{stylist.rating.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Date & Time Selector */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2">Available Dates</label>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x pr-1">
                    {getNextDays().map((day) => (
                      <button
                        key={day.id}
                        onClick={() => setSelectedDate(day.id)}
                        className={`p-2.5 rounded-lg border-2 snap-center flex flex-col items-center min-w-[64px] transition ${
                          selectedDate === day.id
                            ? "border-[#f59309] bg-[#f59309] text-white"
                            : "border-[#1f1f1f0a] hover:border-gray-300 text-gray-600 bg-white"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono tracking-wider">{day.dayName}</span>
                        <span className="text-base font-bold my-0.5">{day.dayNum}</span>
                        <span className="text-[10px]">{day.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2">Daily Time Slots</label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2 rounded-lg text-xs font-mono font-medium border transition ${
                          selectedTime === slot
                            ? "border-[#f59309] bg-[#f59309] text-white"
                            : "border-gray-200 hover:border-gray-300 text-gray-600 bg-white"
                        }`}
                      >
                        <Clock className="w-3 inline mr-1 -mt-0.5 text-gray-400" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact details */}
            {step === 4 && (
              <form onSubmit={handleCreateBooking} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold mb-1 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="Jane Austin"
                      className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f59309]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="+31 6 12345678"
                      className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f59309]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-semibold mb-1 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={e => setCustomerEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f59309]"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-semibold mb-1 block">Special Requests / Hair Concerns (Optional)</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="e.g. I have split ends, dry scalp, or prefer extra shine treatment..."
                    className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f59309] text-xs resize-none"
                  />
                </div>

                <button type="submit" className="hidden" id="booking-form-submit-trigger" />
              </form>
            )}

            {/* Step 5: Success Board */}
            {step === 5 && confirmedBooking && (
              <div className="flex flex-col items-center text-center p-3">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-3">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                
                {/* Elegant Receipt Ticket Design */}
                <div className="bg-white border-2 border-[#1f1f1f0d] rounded-2xl w-full max-w-sm p-4 text-left shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-[#f59309]" />
                  
                  <div className="flex justify-between items-start mb-3 pt-2">
                    <div>
                      <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">RESERVATION TICKET</p>
                      <h4 className="font-serif text-lg leading-tight text-[#1f1f1f]">{confirmedBooking.service.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="bg-[#1f1f1f] text-white font-mono text-[10px] px-2 py-1 rounded">
                        {confirmedBooking.id}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 border-y border-[#1f1f1f0a] py-3 text-xs mb-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stylist:</span>
                      <span className="font-semibold text-[#1f1f1f]">{confirmedBooking.stylist.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date & Slot:</span>
                      <span className="font-mono text-gray-800 font-semibold">{confirmedBooking.date} • {confirmedBooking.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Guest Name:</span>
                      <span className="font-semibold text-[#1f1f1f]">{confirmedBooking.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Price:</span>
                      <span className="font-mono font-bold text-[#f59309]">${confirmedBooking.service.price}</span>
                    </div>
                  </div>

                  {/* Pseudo Barcode */}
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-full flex items-center justify-between opacity-80 mb-1">
                      {Array.from({ length: 35 }).map((_, idx) => (
                        <div 
                          key={idx} 
                          style={{ width: `${(idx % 3 === 0 ? 3 : (idx % 2 === 0 ? 1 : 2))}px` }} 
                          className="h-5 bg-gray-500 rounded-sm"
                        />
                      ))}
                    </div>
                    <p className="text-[9px] text-gray-400 font-mono">SCAN TO CHECK IN • VELVERA APPOINTMENTS</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-4 leading-normal max-w-md">
                  We look forward to styled excellence. An appointment confirmation receipt was simulated. Manage or cancel your booking at any time via the bookings bar.
                </p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-[#1f1f1f0a] mt-4">
            {step > 1 && step < 5 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                onClick={handleNextStep}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className="px-5 py-2.5 bg-[#1f1f1f] text-[#fffcfa] text-xs font-semibold rounded-lg hover:bg-black transition disabled:opacity-30 flex items-center gap-1.5"
              >
                <span>Continue</span>
                <Sparkles className="w-3.5 h-3.5 text-[#f59309]" />
              </button>
            ) : step === 4 ? (
              <button
                onClick={() => document.getElementById("booking-form-submit-trigger")?.click()}
                className="px-6 py-2.5 bg-[#f59309] text-white text-xs font-semibold rounded-lg hover:bg-[#e08605] tracking-wide transition uppercase shadow-md flex items-center gap-1.5"
              >
                <span>Confirm & Place Book</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-lg text-xs transition"
              >
                Book Another Service
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Side Drawer of Bookings List
interface CustomerBookingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingWizard: () => void;
}

export function CustomerBookingsPanel({
  isOpen,
  onClose,
  onOpenBookingWizard
}: CustomerBookingsPanelProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem("velvera_bookings");
        if (stored) {
          setBookings(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem("velvera_bookings", JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-[#fffcfa] text-[#1f1f1f] w-full max-w-md h-full shadow-2xl flex flex-col p-6 border-l border-[#1f1f1f12] animate-slide-in">
        <div className="flex justify-between items-center border-b border-[#1f1f1f0d] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#f59309]" />
            <h3 className="font-serif text-xl font-medium">My Reservations</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-900 rounded-lg transition"
          >
            <X className="w-6" />
          </button>
        </div>

        {/* List content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {bookings.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
              <Scissors className="w-12 h-12 stroke-[1] mb-3 text-gray-300 transform rotate-45" />
              <p className="text-sm font-medium mb-1">No active appointments</p>
              <p className="text-xs max-w-[240px] leading-relaxed mb-4">You have not scheduled any hair artistry sessions yet.</p>
              <button
                onClick={() => {
                  onClose();
                  onOpenBookingWizard();
                }}
                className="px-4 py-2 bg-[#1f1f1f] hover:bg-black text-[#fffcfa] text-xs font-medium rounded-full transition"
              >
                Schedule Session Now
              </button>
            </div>
          ) : (
            bookings.map((bk) => (
              <div 
                key={bk.id}
                className="bg-white rounded-xl p-4 border border-[#1f1f1f0a] shadow-sm relative overflow-hidden flex flex-col justify-between hover:border-gray-300 transition"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-[#f59309]" />
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                      {bk.id}
                    </span>
                    <h4 className="font-serif text-base text-[#1f1f1f] mt-1 pr-4">{bk.service.name}</h4>
                  </div>
                  <button
                    onClick={() => handleDelete(bk.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg transition"
                    title="Cancel Appointment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>Stylist: {bk.stylist.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{bk.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{bk.time}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px]">
                  <span className="text-gray-400 uppercase tracking-widest">Fee expected:</span>
                  <span className="font-mono font-bold text-gray-800 text-sm">${bk.service.price}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {bookings.length > 0 && (
          <div className="border-t border-[#1f1f1f0a] pt-4 mt-4">
            <button
              onClick={() => {
                onClose();
                onOpenBookingWizard();
              }}
              className="w-full py-3 bg-[#1f1f1f] hover:bg-black text-[#fffcfa] text-xs font-semibold rounded-xl uppercase tracking-wider transition"
            >
              Book Another Service (+ )
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
