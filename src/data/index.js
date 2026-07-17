import monarchPrime from "../assets/monarch.jpeg";
import rockCity from "../assets/rockcity.png";
import royalCourt from "../assets/royalcourt.png";
import royalField from "../assets/royalfield.png";
import royalHeritage from "../assets/royalheritage.png";
import greenfieldEstate from "../assets/monarch.jpeg";
import portfolioimage1 from "../assets/slider1.jpeg";
import portfolioimage2 from "../assets/slider2.jpeg";
import ceo from "../assets/ceo.png";
import staffimage1 from "../assets/olanrewaju.png";
import staffimage2 from "../assets/agu.png";
import staffimage3 from "../assets/steven.png";
import staffimage4 from "../assets/cynthia.png";
import staffimage5 from "../assets/gbolahan.jpeg";



// ─── Business Units ───────────────────────────────────────────────
export const businessUnits = [
  {
    id: 'homes',
    name: 'Gamay Homes & Properties',
    slug: '/homes',
    tagline: 'Creating Wealth Through Real Estate',
    description: 'We develop, broker, and sell residential and agricultural real estate across Nigeria, making land ownership accessible and straightforward.',
    icon: 'Building2',
    color: 'primary',
    services: ['Residential Real Estate','Real Estate Brokerage','Building Construction','Residential Land Sales','Agricultural Land Sales'],
  },
  {
    id: 'multimedia',
    name: 'Gamay Multimedia',
    slug: '/multimedia',
    tagline: 'Building Businesses Through Creative Experiences',
    description: 'Full-service creative agency providing graphic design, photography, videography, digital marketing, branding, and media production.',
    icon: 'Palette',
    color: 'gold',
    services: ['Graphic Design','Photography','Videography','Content Creation','Branding','Digital Marketing','Printing','Media Production','IT Services','Broadcasting'],
  },
  {
    id: 'facility',
    name: 'Facility Management & Environmental Services',
    slug: '/facility',
    tagline: 'Professional Cleaning & Environmental Solutions',
    description: 'Comprehensive residential and commercial cleaning services, facility management, and environmental solutions for homes, offices, schools, and healthcare facilities.',
    icon: 'Leaf',
    color: 'emerald',
    services: ['Routine Cleaning','Deep Cleaning','Post Construction Cleaning','Move-In Cleaning','Move-Out Cleaning','Facility Management'],
  },
];

export const coreValues = [
  { icon: 'Star',       title: 'Excellence',  desc: 'We hold ourselves to the highest standards in every project, delivering quality that exceeds expectations.' },
  { icon: 'Shield',     title: 'Integrity',   desc: 'Transparency and honesty are the foundation of every relationship we build with clients and partners.' },
  { icon: 'Lightbulb', title: 'Innovation',  desc: 'We embrace emerging technologies and creative thinking to solve complex challenges with fresh perspectives.' },
  { icon: 'Users',     title: 'Partnership', desc: 'We grow with our clients, building long-term relationships that create sustainable value for all parties.' },
];

export const teamMembers = [
  { name: 'Chief Olamidele Fadimiluyi',     title: 'CEO', img: ceo },
  { name: 'Olanrewaju Osuolale',     title: 'General Manager', img: staffimage1 },
  { name: 'Agu Godsdelight',    title: 'Growth & Community',     img: staffimage2 },
  { name: 'Barr. Steven Olashite', title: 'Head, Legal',   img: staffimage3 },
  { name: 'Cynthia Fejiro',      title: 'Admin Officer',       img: staffimage4 },
  { name: 'Gbolahan Alaba',      title: 'Tech Lead',       img: staffimage5 },
  
];

export const testimonials = [
  { name: 'Emmanuel O.',  role: 'Property Developer',   company: 'Lagos',         quote: "Gamay Homes guided me through acquiring my first agricultural land seamlessly. Their professionalism and transparency are second to none.", rating: 5 },
  { name: 'Adaeze N.',    role: 'Business Owner',        company: 'Abuja',         quote: "Gamay Multimedia transformed our brand identity completely. The team understood our vision and delivered beyond what we imagined.", rating: 5 },
  // { name: 'Segun F.',     role: 'Facilities Manager',    company: 'Port Harcourt', quote: "Our office complex has never been cleaner. The Gamay facility team is punctual, thorough, and genuinely professional.", rating: 5 },
  { name: 'Blessing A.',  role: 'Real Estate Investor',  company: 'Lagos',         quote: "I have closed three land deals through Gamay Homes. Every transaction has been smooth, legal, and profitable. Highly recommended.", rating: 5 },
  { name: 'Olumide K.',   role: 'Marketing Director',    company: 'Kano',          quote: "Their content creation team produced a campaign that tripled our engagement. Gamay Multimedia is a true creative powerhouse.", rating: 5 },
];

export const properties = [
  {
    id: 1,
    slug: "monarch-prime-estate",
    name: "Monarch Prime Estate",
    location: "Epe, Lagos",
    category: "Residential",
    status: "Available",
    img: monarchPrime,

    sizes: [
      { size: "300 SQM", price: "₦800k" },
      { size: "500 SQM", price: "₦1.5M" },
    ],

    description:
      "Monarch Prime Estate is a fully documented residential estate located in Epe, Lagos. \
      It offers excellent road access, secure environment, and high investment appreciation potential.",

    features: [
      "Fertile Soil",
      "Good Access Road",
      "Electricity",
      "Drainage",
      "Security",
    ],
    landmarks: [
      "Redemption Camp",
      "Nestlé Company",
      "Ofada Bus Stop",
      "Lagos-Ibadan Expressway",
      "Papalanto Shagamu Interchange",
    ],
    documents: [
      "Contract of Sale",
      "Original Receipt",
      // "Registered Survey",
      "Allocation Letter",
      "Deed of Assignment",
    ],
    paymentPlan: [
      "As low as N100,000 Monthly",
    ],
  },

  {
    id: 2,
    slug: "rock-city-estate",
    name: "Rock City Estate",
    location: "Asipa, Obafemi Owode, Ogun State",
    category: "Residential",
    status: "Available",
    img: rockCity,

    sizes: [
      { size: "150 SQM", price: "₦200,000" },
      { size: "300 SQM", price: "₦400,000" },
      { size: "500 SQM", price: "₦700,000" },
    ],

    description:
      "Rock City Estate offers a smart investment opportunity in one of Abeokuta's rapidly developing Corridors.",

    features: [
      "Fertile Soil",
      "Good Access Road",
      "Electricity",
      "Drainage",
      "Security",
    ],
    landmarks: [
      "Sagamu Interchange",
      "Nigerian Brewery",
      "Day Waterman College",
      "Kobape Town",
    ],
    documents: [
      "Contract of Sale",
      "Original Receipt",
      // "Registered Survey",
      "Allocation Letter",
      "Deed of Assignment",
    ],
    paymentPlan: [
      "As low as N100,000 Monthly",
    ],
  },

  {
    id: 3,
    slug: "royal-court-estate",
    name: "Royal Court Estate (Phase II)",
    location: "Mowe, Ogun State",
    category: "Residential",
    status: "Available",
    img: royalCourt,

    sizes: [
      { size: "150 SQM", price: "₦250,000" },
      { size: "300 SQM", price: "₦500,000" },
      { size: "500 SQM", price: "₦950,000" },
    ],

    description:
      "Royal Court Phase II offers a great opportunity to own land in a fast-developing and strategically located environment.",

    features: [
      "Fertile Soil",
      "Good Access Road",
      "Electricity",
      "Drainage",
      "Security",
    ],
    landmarks: [
    "Redemption Camp",
    "Nestlé Company",
    "Ofada Bus Stop",
    "Lagos-Ibadan Expressway",
    "Papalanto Shagamu Interchange",
    ],
    documents: [
      "Contract of Sale",
      "Original Receipt",
      // "Registered Survey",
      "Allocation Letter",
      "Deed of Assignment",
    ],
    paymentPlan: [
      "As low as N100,000 Monthly",
    ],
  },

  {
    id: 4,
    slug: "royal-field-estate",
    name: "Royal Field Estate",
    location: "Ewekoro, Ogun State",
    category: "Residential",
    status: "Sold Out",
    img: royalField,

    sizes: [
      { size: "500 SQM", price: "Sold Out" },
      { size: "1000 SQM", price: "Sold Out" },
    ],

    description:
      "Commercial plots strategically positioned for business and mixed-use developments.",

    features: [
      "Fertile Soil",
      "Good Access Road",
      "Electricity",
      "Drainage",
      "Security",
    ],
    landmarks: [
      "Redemption Camp",
      "Nestlé Company",
      "Ofada Bus Stop",
      "Lagos-Ibadan Expressway",
      "Papalanto Shagamu Interchange",
    ],
    documents: [
      "Contract of Sale",
      "Original Receipt",
      // "Registered Survey",
      "Allocation Letter",
      "Deed of Assignment",
    ],
    paymentPlan: [
      "As low as N100,000 Monthly",
    ],
  },

  {
    id: 5,
    slug: "royal-heritage-estate",
    name: "Royal Heritage Estate",
    location: "Ibadan, Oyo State",
    category: "Residential",
    status: "Limited",
    img: royalHeritage,

    sizes: [
      { size: "150 SQM", price: "₦150,000" },
      { size: "300 SQM", price: "₦250,000" },
      { size: "500 SQM", price: "₦400,000" },
    ],

    description:
      "Royal Heritage Estate offers an excellent opportunity to own land in a fast-growing area of Ibadan. ",

    features: [
      "Fertile Soil",
      "Good Access Road",
      "Electricity",
      "Drainage",
      "Security",
    ],
    landmarks: [
      "Ido Local Government Area",
      "Ido Market",
      "Eruwa Road Corridor",
      "Ilaju Community",
      "Ibadan City Centre",
    ],
    documents: [
      "Contract of Sale",
      "Original Receipt",
      // "Registered Survey",
      "Allocation Letter",
      "Deed of Assignment",
    ],
    paymentPlan: [
      "As low as N100,000 Monthly",
    ],
  },

  // {
  //   id: 6,
  //   slug: "farmstead-acres",
  //   name: "Farmstead Acres",
  //   location: "Plateau State",
  //   category: "Residential",
  //   status: "Available",
  //   img: monarchPrime,

  //   sizes: [
  //     { size: "500 SQM", price: "₦950K" },
  //     { size: "1000 SQM", price: "₦1.8M" },
  //   ],

  //   description:
  //     "Agricultural investment property located in Plateau State with rich soil and easy accessibility.",

  //   features: [
  //     "Fertile Soil",
  //     "Good Access Road",
  //     "Electricity",
  //     "Drainage",
  //     "Security",
  //   ],
  //   landmarks: [
  //   "Redemption Camp",
  //   "Nestlé Company",
  //   "Ofada Bus Stop",
  //   "Lagos-Ibadan Expressway",
  //   "Papalanto Shagamu Interchange",
  //   ],
  //   documents: [
  //     "Contract of Sale",
  //     "Original Receipt",
  //     "Registered Survey",
  //     "Allocation Letter",
  //     "Deed of Assignment",
  //   ],
  //   paymentPlan: [
  //     "As low as N20,000 Monthly",
  //   ],
  // },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'Greenfield Estate Branding',
    category: 'Branding',
    division: 'Multimedia',

    img: greenfieldEstate,

    images: [
      portfolioimage1,
      portfolioimage2,
    ]
  },

  {
    id: 2,
    title: 'Lagos Property Development',
    category: 'Real Estate',
    division: 'Homes',

    img: greenfieldEstate,

    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 3,
    title: 'Corporate Identity Fintech',
    category: 'Design',
    division: 'Multimedia',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 4,
    title: 'Office Complex Deep Clean',
    category: 'Facility',
    division: 'Facility',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 5,
    title: 'Brand Film Food Company',
    category: 'Video',
    division: 'Multimedia',

    img: greenfieldEstate,
    youtube: "https://www.youtube.com/embed/MRZTtaYaluw?si=wjE_TirhUEniLe9m",
    // images: [
    //   portfolioimage1,
    //   portfolioimage2
    // ]
  },

  {
    id: 6,
    title: 'Agricultural Land Survey',
    category: 'Real Estate',
    division: 'Homes',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 7,
    title: 'Social Media Campaign',
    category: 'Marketing',
    division: 'Multimedia',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 8,
    title: 'Post Construction Cleanup',
    category: 'Facility',
    division: 'Facility',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },

  {
    id: 9,
    title: 'Product Photography Series',
    category: 'Photography',
    division: 'Multimedia',

    img: greenfieldEstate,
    images: [
      portfolioimage1,
      portfolioimage2
    ]
  },
];

export const blogPosts = [
  { id: 1, title: '5 Reasons to Invest in Agricultural Land in Nigeria', category: 'Property Investment', date: 'May 12, 2025', author: 'Chioma Okonkwo',    excerpt: 'Agricultural real estate is one of the fastest-growing investment classes in Nigeria. Here is why savvy investors are buying farmland now.', img: null },
  { id: 2, title: 'How to Build a Powerful Brand Identity from Scratch',  category: 'Branding & Marketing', date: 'Apr 28, 2025', author: 'Ibrahim Musa',     excerpt: 'Your brand is more than a logo. Discover the frameworks top companies use to create identities that endure.', img: null },
  { id: 3, title: 'Deep Cleaning vs Routine Cleaning: What You Need',     category: 'Cleaning Tips',        date: 'Apr 15, 2025', author: 'Funmilayo Adeyemi', excerpt: 'Understanding the difference between deep and routine cleaning helps you schedule the right service for your space.', img: null },
  { id: 4, title: 'Real Estate Due Diligence: A Buyer Checklist',         category: 'Real Estate Tips',    date: 'Mar 30, 2025', author: 'Adebayo Gamay',     excerpt: 'Before you sign, verify. This comprehensive checklist protects you from common pitfalls in Nigerian real estate transactions.', img: null },
  { id: 5, title: 'Why Video Content Dominates Digital Marketing in 2025', category: 'Branding & Marketing', date: 'Mar 18, 2025', author: 'Ibrahim Musa',  excerpt: 'Brands that invest in video see dramatically higher engagement rates. Here is how to build a video-first content strategy.', img: null },
  { id: 6, title: '10 Tips for Maintaining a Clean Office Environment',   category: 'Cleaning Tips',        date: 'Mar 5, 2025',  author: 'Funmilayo Adeyemi', excerpt: 'A clean workspace boosts productivity and morale. These practical tips will help your team maintain cleanliness daily.', img: null },
];

export const multimediaServices = [
  { icon: 'Palette',         title: 'Graphic Design',        desc: 'Logos, brand identity, marketing collateral, and print design.' },
  { icon: 'Camera',          title: 'Photography',           desc: 'Product, corporate, event, and real estate photography.' },
  { icon: 'Video',           title: 'Videography',           desc: 'Brand films, commercials, documentaries, and event coverage.' },
  { icon: 'FileText',        title: 'Content Creation',      desc: 'Blog posts, social media content, scripts, and copywriting.' },
  { icon: 'Briefcase',       title: 'Branding',              desc: 'Full brand strategy, positioning, guidelines, and identity systems.' },
  { icon: 'Megaphone',       title: 'Advertising',           desc: 'Campaign conceptualisation, creative execution, and media placement.' },
  { icon: 'TrendingUp',      title: 'Digital Marketing',     desc: 'SEO, paid ads, social media management, and analytics.' },
  { icon: 'Printer',         title: 'Printing',              desc: 'High-quality offset and digital printing for all marketing needs.' },
  { icon: 'Film',            title: 'Media Production',      desc: 'Full pre/post production for TV, OTT, and online platforms.' },
  { icon: 'Monitor',         title: 'IT Services',           desc: 'Web development, software solutions, and IT consulting.' },
  { icon: 'Radio',           title: 'Broadcasting Services', desc: 'Radio, streaming, and broadcast production support.' },
];

export const facilityServices = [
  { icon: 'Home',     title: 'Routine Cleaning',           desc: 'Scheduled residential and office cleaning to maintain consistent hygiene standards.' },
  { icon: 'Sparkles', title: 'Deep Cleaning',              desc: 'Intensive top-to-bottom cleaning for spaces requiring thorough sanitisation.' },
  { icon: 'HardHat',  title: 'Post Construction Cleaning', desc: 'Specialist cleaning of new builds and renovations to make them move-in ready.' },
  { icon: 'Package',  title: 'Move-In Cleaning',           desc: 'Comprehensive preparation of your new space for a fresh, clean start.' },
  { icon: 'Truck',    title: 'Move-Out Cleaning',          desc: 'Detailed end-of-tenancy cleaning ensuring properties are returned in pristine condition.' },
];

export const industries = [
  { icon: 'Home',            label: 'Residential'          },
  { icon: 'Building2',       label: 'Corporate Offices'    },
  { icon: 'GraduationCap',   label: 'Schools'              },
  { icon: 'Heart',           label: 'Hospitals'            },
  { icon: 'ShoppingBag',     label: 'Commercial Buildings' },
  { icon: 'UtensilsCrossed', label: 'Hospitality'          },
];

export const contactInfo = {
  phone: '09027424136',
  email: 'hello@gamay.ng',
  whatsapp: '+2349027424136',
  mapUrl:   'https://maps.app.goo.gl/hY2bt8oaAvpstNeE8',
};
