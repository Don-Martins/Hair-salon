import { Service, Stylist, Testimonial, FAQItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "svc-precision-cut",
    name: "Precision Haircut",
    description: "Tailored haircut customized for your hair strength, features, and style. Includes custom luxury hair wash, head massage, and blowout.",
    price: 99,
    category: "styling",
    duration: "60 mins"
  },
  {
    id: "svc-custom-color",
    name: "Customized Hair Coloring",
    description: "Premium rich dimensional coloring. Specifically matched formulas for balayage, highlights, or full color transitions that protect hair fibers.",
    price: 179,
    category: "coloring",
    duration: "120 mins"
  },
  {
    id: "svc-deep-conditioning",
    name: "Deep Conditioning Treatment",
    description: "High-tier hydration with proper keratin care. Perfect for restoring lifelike moisture, repair, and shine to dry or damaged hair.",
    price: 129,
    category: "treatment",
    duration: "45 mins"
  },
  {
    id: "svc-keratin-smoothing",
    name: "Keratin Treatment",
    description: "Deep smoothing hydration to erase frizzy hairs, restore hair fiber strength, and achieve smooth, highly manageable results.",
    price: 249,
    category: "treatment",
    duration: "150 mins"
  },
  {
    id: "svc-blowout-sculpt",
    name: "Blowout & Custom Styling",
    description: "Elegant professional blowout and sculpting for dynamic hair flow and bounce. Designed for special events or everyday luxury.",
    price: 79,
    category: "styling",
    duration: "45 mins"
  },
  {
    id: "svc-volume-boost",
    name: "Volume Boost & Extensions",
    description: "Add beautiful fullness, volume, and density to thinning hair using expert premium bond techniques or volumizing treatment overlays.",
    price: 199,
    category: "styling",
    duration: "90 mins"
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: "sty-emma",
    name: "Emma Rose",
    role: "Lead Stylist & Founder",
    image: "https://framerusercontent.com/images/L5hGg9cDY7Paq8x6XXI5RcsIU.jpg",
    rating: 5.0,
    specialty: "Precision Cuts & Hair Design"
  },
  {
    id: "sty-sophia",
    name: "Sophia Lane",
    role: "Color Specialist",
    image: "https://framerusercontent.com/images/RuHzOwFMTuFko0uX7XGtl6t0vck.jpg",
    rating: 4.9,
    specialty: "Balayage, Highlights & Color Transitions"
  },
  {
    id: "sty-jane",
    name: "Jane Doe",
    role: "Hair Treatment Expert",
    image: "https://framerusercontent.com/images/DVp5BoKelew8Se8b7VAcDHqTk7M.jpg",
    rating: 5.0,
    specialty: "Keratin & Restorative Hair Solutions"
  },
  {
    id: "sty-olivia",
    name: "Olivia Tate",
    role: "Blowout & Styling Artist",
    image: "https://framerusercontent.com/images/vow8aT2ZiPX6Uqxurh8dm0zePnQ.jpg",
    rating: 4.8,
    specialty: "Volumizing & Red Carpet Styles"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Emma Rose",
    role: "Balayage & Styling Client",
    text: "Absolutely love my new look! Velvera completely transformed my hair with the perfect cut and color, enhancing both its style and health. I’ve never felt more confident and refreshed!",
    rating: 5,
    image: "https://framerusercontent.com/images/8v5NNmvvmuOAuVTdhlxvSRSjTU.jpg?scale-down-to=512",
    serviceCategory: "coloring"
  },
  {
    id: "test-2",
    name: "Sophia Lane",
    role: "Keratin Treatment Client",
    text: "Velvera transformed my hair with the perfect cut and color. Frizz is absolutely gone, and my hair feels incredibly silky and hydrated. Best styling experience indeed!",
    rating: 5,
    image: "https://framerusercontent.com/images/m455LRAidPOrFX87s3wP38TCw.jpg?scale-down-to=512",
    serviceCategory: "treatment"
  },
  {
    id: "test-3",
    name: "Jane Doe",
    role: "Haircut & Blowout Client",
    text: "Healthy hair like never before! My damaged, lifeless strands feel soft, structured, and incredibly manageable. The hair artistry here is second to none.",
    rating: 5,
    image: "https://framerusercontent.com/images/vow8aT2ZiPX6Uqxurh8dm0zePnQ.jpg?scale-down-to=512",
    serviceCategory: "styling"
  },
  {
    id: "test-4",
    name: "Olivia Tate",
    role: "Hair Repair Treatment Client",
    text: "Volume and shine restored! My hair used to feel flat and dry, but after their deep conditioning and volume boost treatments, it's full, bouncy, and has that glorious salon-quality gloss!",
    rating: 5,
    image: "https://framerusercontent.com/images/rC9bP94CeVadqhrTryYCmkFzNU.jpg?scale-down-to=512",
    serviceCategory: "treatment"
  },
  {
    id: "test-5",
    name: "Isabella Wren",
    role: "Balayage & Gloss Client",
    text: "Perfect color every single time! Their color specialists know exactly what tones compliment my skin. My balayage looks completely natural and extremely vibrant. I can't stop checking the mirror!",
    rating: 5,
    image: "https://framerusercontent.com/images/wznTXN7RoaKIpX8t0YmTodhfUxw.jpg",
    serviceCategory: "coloring"
  },
  {
    id: "test-6",
    name: "Lily Quinn",
    role: "Volume Boost Treatment Client",
    text: "Best salon experience ever! The team really listens, understands your style aspirations, and tailors every portion of the visit perfectly. The hospitality is warm and authentic.",
    rating: 5,
    image: "https://framerusercontent.com/images/t4DCR0o9bc3kPyFhUCUENzeOghY.jpg",
    serviceCategory: "styling"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How often should I get a haircut?",
    answer: "It depends entirely on your hair type and style goals. For maintaining precise shape, sharp edges, and optimal hair fiber health, we recommend scheduling a trim every 6-8 weeks."
  },
  {
    id: "faq-2",
    question: "Do you offer hair treatments for damaged hair?",
    answer: "Yes, we specify in rich hair rejuvenation. We provide personalized deep conditioning, keratin smoothness therapies, and bond-repair formulas styled to rebuild damaged, lifeless fibers from within."
  },
  {
    id: "faq-3",
    question: "Can I book an appointment online?",
    answer: "Absolutely! Our integrated booking system allows you to select your target services, choose your preferred expert stylist, and pick an available date and time. You will receive an immediate reservation ticket!"
  },
  {
    id: "faq-4",
    question: "What hair colors work best for my skin tone?",
    answer: "During your complimentary initial consultation, our expert color specialists analyze your skin's warm or cool undertones and hair health to curate custom shades that elevate your natural features."
  },
  {
    id: "faq-5",
    question: "Do you use professional premium hair products?",
    answer: "Yes, we exclusively partner with leading luxury brands that offer sulfate-free, mineral-pure, and organic hair formulations. This ensures the utmost long-term health and protection of your hair."
  },
  {
    id: "faq-6",
    question: "Is a consultation required before my appointment?",
    answer: "While basic haircuts and blowouts do not require a separate session, we highly recommend a free initial consultation for dimensional coloring, transformations, and customized hair treatments."
  }
];

export const GALLERY_IMAGES = [
  "https://framerusercontent.com/images/dZEpcnHnY1537g0DHOfvzdOx4.webp",
  "https://framerusercontent.com/images/aKWr7Jsb6awIHzNIYHZov7G64M.jpg",
  "https://framerusercontent.com/images/WBUsZbdIaQQO0T0IRFLBzmYKZIM.jpg",
  "https://framerusercontent.com/images/XhxVrjYBjPzk2nydUuHYjhscbxo.jpg",
  "https://framerusercontent.com/images/pbR8ExjxRpHE9uv74FLUNnvgTQ.jpg",
  "https://framerusercontent.com/images/sYjPCZBTlLwoHSXFJfrfaUZ4zU.jpg"
];
