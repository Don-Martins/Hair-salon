export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "all" | "styling" | "coloring" | "treatment";
  duration: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  specialty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  serviceCategory: string;
}

export interface Booking {
  id: string;
  service: Service;
  stylist: Stylist;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
