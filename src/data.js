// ============================================================
// Datos de ejemplo — CAMBIAR por los datos reales del negocio
// Nombre, teléfono, precios y reseñas son placeholders.
// ============================================================

export const BUSINESS = {
  name: 'Ing. Yonatan E. Barrera Villegas',
  shortName: 'BarreNet',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'hello@apexshield.example',
  address: '123 Main St, Suite 100, Your City, ST 12345',
  instagram: '@apexshield',
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 3:00 PM' },
  ],
};

export const SERVICES = [
  {
    id: 'ppf',
    category: 'Protection',
    title: 'Paint Protection Film',
    description:
      'A clear, self-healing film that shields your paint from rock chips, scratches and road debris — nearly invisible once installed.',
    price: 'From $1,499',
    priceValue: 1499,
    image:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'color-ppf',
    category: 'Restyle',
    title: 'Colored PPF',
    description:
      'Change the color of your car and protect the paint at the same time, with a finish that looks factory fresh.',
    price: 'From $2,499',
    priceValue: 2499,
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ceramic',
    category: 'Protection',
    title: 'Ceramic Coating',
    description:
      'A hard, glossy coating that repels water and dirt, deepens the shine and makes washing your car far easier.',
    price: 'From $899',
    priceValue: 899,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tint',
    category: 'Protection',
    title: 'Ceramic Window Tint',
    description:
      'Ceramic tint that blocks heat and UV rays, keeps the cabin cooler and protects your interior from fading.',
    price: 'From $349',
    priceValue: 349,
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'wraps',
    category: 'Restyle',
    title: 'Vehicle Wraps',
    description:
      'Full color-change wraps and custom graphics, installed with tight lines and wrapped edges for a clean finish.',
    price: 'From $2,999',
    priceValue: 2999,
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'correction',
    category: 'Detailing',
    title: 'Paint Correction',
    description:
      'Multi-stage machine polishing that removes swirls and light scratches, restoring depth and gloss before any protection goes on.',
    price: 'From $599',
    priceValue: 599,
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'detailing',
    category: 'Detailing',
    title: 'Full Detailing',
    description:
      'Interior and exterior deep cleaning: wash, decontamination, leather care, plastics and glass, inside and out.',
    price: 'From $249',
    priceValue: 249,
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'wheels',
    category: 'Restyle',
    title: 'Wheels & Glass',
    description:
      'Wheel refinishing, powder coating and caliper color, plus windshield and auto glass replacement.',
    price: 'From $199',
    priceValue: 199,
    image:
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PACKAGES = [
  {
    name: 'Partial Front',
    price: '$899',
    priceValue: 899,
    note: 'Essential daily-driver protection.',
    features: ['Front bumper', 'Partial hood', 'Partial fenders', 'Mirrors', 'Headlights'],
    featured: false,
  },
  {
    name: 'Full Front',
    price: '$1,899',
    priceValue: 1899,
    note: 'Our most popular package.',
    features: [
      'Full hood',
      'Full fenders',
      'Front bumper',
      'Mirrors & headlights',
      'Rocker panels',
    ],
    featured: true,
  },
  {
    name: 'Full Body',
    price: '$5,499',
    priceValue: 5499,
    note: 'Maximum coverage, inside and out.',
    features: [
      'Every painted panel',
      'All Full Front coverage',
      'Door edges & handles',
      'Ceramic top coat included',
    ],
    featured: false,
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Tell us your vehicle',
    text: 'Send the year, make and model with a few photos. We talk through what you want protected or restyled.',
  },
  {
    n: '02',
    title: 'Get a straight quote',
    text: 'A clear plan and price for the coverage that fits. You pick the package — no upsell games.',
  },
  {
    n: '03',
    title: 'Prep and install',
    text: 'Proper decontamination and paint correction first, then a clean install with tucked edges and tight lines.',
  },
  {
    n: '04',
    title: 'Drive it protected',
    text: 'You leave with the finish dialed in and the care details in hand.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Top-tier work and attention to detail. The crew treated my car like it was their own.',
    author: 'Verified customer',
  },
  {
    quote:
      'The ceramic coating still beads water months later, and the car looks better than the day I bought it.',
    author: 'Verified customer',
  },
  {
    quote:
      'Clear quote, no surprises, and the full front PPF is invisible. I would send any car here.',
    author: 'Verified customer',
  },
];

export const FAQS = [
  {
    q: 'How long does paint protection film last?',
    a: 'With proper care, a quality PPF installation lasts 7 to 10 years. We use films with a manufacturer warranty — ask us which one fits your car.',
  },
  {
    q: 'Can I wash my car after ceramic coating?',
    a: 'Yes, after the coating cures (usually 7 days). Use a pH-neutral shampoo, a soft wash mitt and dry with a clean microfiber towel. We give you the full care sheet at pickup.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'Yes — every car is booked so we can give it the full prep time it deserves. Send a quote request and we will confirm the next open slot.',
  },
  {
    q: 'Do you work on daily drivers or only exotics?',
    a: 'Both. From a daily driver to a GT car, every vehicle gets the same prep, the same installers and the same standard.',
  },
];

export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Red sports car after detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sports car on the road',
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Black luxury coupe',
  },
  {
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Classic muscle car front view',
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sports car side profile',
  },
  {
    src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Car parked after a full detail',
  },
];
