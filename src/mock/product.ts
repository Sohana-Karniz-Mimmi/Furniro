import { Product } from "@/types/products";

const products: Product[] = [
  {
    _id: "SLT001",
    name: "Syltherine",
    subTitle: "Stylish cafe chair",
    description: "Ergonomic cafe chair with modern design",
    mainImage: "/images/products/syltherine-main.png",
    images: [
      "/images/products/syltherine-1.png",
      "/images/products/syltherine-2.png",
      "/images/products/syltherine-3.png",
    ],
    price: {
      currentPrice: 2500000,
      originalPrice: 3500000,
    },
    reviews: {
      count: 24,
      averageRating: 4.5,
    },
    variants: {
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
    },
    stock: 15,
    sku: "CHAIR-SLT-001",
    metadata: {
      category: "Chairs",
      tags: ["Cafe", "Modern", "Indoor"],
    },
    details: {
      description: "Premium polypropylene seat with steel frame",
      dimensions: "45cm × 50cm × 85cm",
      materials: ["Polypropylene", "Steel"],
    },
    badge: {
      text: "-28%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/syltherine-set.png"],
  },
  {
    _id: "LEV002",
    name: "Leviosa",
    subTitle: "Stylish cafe chair",
    description: "Minimalist chair for modern spaces",
    mainImage: "/images/products/leviosa-main.png",
    images: ["/images/products/leviosa-1.png"],
    price: {
      currentPrice: 2500000,
      originalPrice: 2500000,
    },
    reviews: {
      count: 18,
      averageRating: 4.7,
    },
    variants: {
      sizes: ["One Size"],
      colors: [{ name: "Beige", hex: "#F5F5DC" }],
    },
    stock: 10,
    sku: "CHAIR-LEV-002",
    metadata: {
      category: "Chairs",
      tags: ["Minimalist", "Scandinavian"],
    },
    details: {
      description: "FSC-certified oak frame with wool upholstery",
      dimensions: "50cm × 55cm × 80cm",
      materials: ["Oak Wood", "Wool"],
    },
    relatedImages: ["/images/related/leviosa-set.png"],
  },
  {
    _id: "LOL003",
    name: "Lolito",
    subTitle: "Luxury big sofa",
    description: "Premium three-seater sofa",
    mainImage: "/images/products/lolito-main.png",
    images: ["/images/products/lolito-1.png", "/images/products/lolito-2.png"],
    price: {
      currentPrice: 7000000,
      originalPrice: 14000000,
    },
    reviews: {
      count: 42,
      averageRating: 4.8,
    },
    variants: {
      sizes: ["3-Seater", "2.5-Seater"],
      colors: [
        { name: "Dark Brown", hex: "#654321" },
        { name: "Charcoal", hex: "#36454F" },
      ],
    },
    stock: 5,
    sku: "SOFA-LOL-003",
    metadata: {
      category: "Sofas",
      tags: ["Luxury", "Leather"],
    },
    details: {
      description: "Full-grain Italian leather with hardwood frame",
      dimensions: "220cm × 95cm × 85cm",
      materials: ["Italian Leather", "Beech Wood"],
    },
    badge: {
      text: "-50%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/lolito-livingroom.png"],
  },
  {
    _id: "RES004",
    name: "Respira",
    subTitle: "Outdoor bar table and stool",
    description: "Weather-resistant patio set",
    mainImage: "/images/products/respira-main.png",
    images: ["/images/products/respira-1.png"],
    price: {
      currentPrice: 500000,
      originalPrice: 500000,
    },
    reviews: {
      count: 36,
      averageRating: 4.3,
    },
    variants: {
      sizes: ["Standard"],
      colors: [
        { name: "Teak", hex: "#C19A6B" },
        { name: "Graphite", hex: "#41424C" },
      ],
    },
    stock: 20,
    sku: "OUT-RES-004",
    metadata: {
      category: "Outdoor",
      tags: ["Garden", "Patio"],
    },
    details: {
      description: "UV-protected polyrattan with powder-coated frame",
      dimensions: "Table: 120cm × 120cm × 75cm | Stool: 35cm × 35cm × 45cm",
      materials: ["Polyrattan", "Aluminum"],
    },
    relatedImages: ["/images/related/respira-patio.png"],
  },
  {
    _id: "SLT005",
    name: "Grifo",
    subTitle: "Night lamp",
    description: "Ergonomic cafe chair with modern design",
    mainImage: "/images/products/grifo-main.png",
    images: [
      "/images/products/syltherine-1.png",
      "/images/products/syltherine-2.png",
      "/images/products/syltherine-3.png",
    ],
    price: {
      currentPrice: 1500000,
      originalPrice: 1500000,
    },
    reviews: {
      count: 24,
      averageRating: 4.5,
    },
    variants: {
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
    },
    stock: 15,
    sku: "CHAIR-SLT-001",
    metadata: {
      category: "Chairs",
      tags: ["Cafe", "Modern", "Indoor"],
    },
    details: {
      description: "Premium polypropylene seat with steel frame",
      dimensions: "45cm × 50cm × 85cm",
      materials: ["Polypropylene", "Steel"],
    },
    badge: {
      text: "-28%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/syltherine-set.png"],
  },
  {
    _id: "LEV006",
    name: "Muggo",
    subTitle: "Small mug",
    description: "Minimalist chair for modern spaces",
    mainImage: "/images/products/muggo-main.png",
    images: ["/images/products/leviosa-1.png"],
    price: {
      currentPrice: 150000,
      originalPrice: 150000,
    },
    reviews: {
      count: 18,
      averageRating: 4.7,
    },
    variants: {
      sizes: ["One Size"],
      colors: [{ name: "Beige", hex: "#F5F5DC" }],
    },
    stock: 10,
    sku: "CHAIR-LEV-002",
    metadata: {
      category: "Chairs",
      tags: ["Minimalist", "Scandinavian"],
    },
    details: {
      description: "FSC-certified oak frame with wool upholstery",
      dimensions: "50cm × 55cm × 80cm",
      materials: ["Oak Wood", "Wool"],
    },
    relatedImages: ["/images/related/leviosa-set.png"],
  },
  {
    _id: "LOL007",
    name: "Pingky",
    subTitle: "Cute bed set",
    description: "Premium three-seater sofa",
    mainImage: "/images/products/pingky-main.png",
    images: ["/images/products/lolito-1.png", "/images/products/lolito-2.png"],
    price: {
      currentPrice: 7000000,
      originalPrice: 14000000,
    },
    reviews: {
      count: 42,
      averageRating: 4.8,
    },
    variants: {
      sizes: ["3-Seater", "2.5-Seater"],
      colors: [
        { name: "Dark Brown", hex: "#654321" },
        { name: "Charcoal", hex: "#36454F" },
      ],
    },
    stock: 5,
    sku: "SOFA-LOL-003",
    metadata: {
      category: "Sofas",
      tags: ["Luxury", "Leather"],
    },
    details: {
      description: "Full-grain Italian leather with hardwood frame",
      dimensions: "220cm × 95cm × 85cm",
      materials: ["Italian Leather", "Beech Wood"],
    },
    badge: {
      text: "-50%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/lolito-livingroom.png"],
  },
  {
    _id: "RES008",
    name: "Potty",
    subTitle: "Minimalist flower pot",
    description: "Weather-resistant patio set",
    mainImage: "/images/products/potty-main.png",
    images: ["/images/products/respira-1.png"],
    price: {
      currentPrice: 500000,
      originalPrice: 500000,
    },
    reviews: {
      count: 36,
      averageRating: 4.3,
    },
    variants: {
      sizes: ["Standard"],
      colors: [
        { name: "Teak", hex: "#C19A6B" },
        { name: "Graphite", hex: "#41424C" },
      ],
    },
    stock: 20,
    sku: "OUT-RES-004",
    metadata: {
      category: "Outdoor",
      tags: ["Garden", "Patio"],
    },
    details: {
      description: "UV-protected polyrattan with powder-coated frame",
      dimensions: "Table: 120cm × 120cm × 75cm | Stool: 35cm × 35cm × 45cm",
      materials: ["Polyrattan", "Aluminum"],
    },
    relatedImages: ["/images/related/respira-patio.png"],
  },
  {
    _id: "SLT009",
    name: "Syltherine",
    subTitle: "Stylish cafe chair",
    description: "Ergonomic cafe chair with modern design",
    mainImage: "/images/products/syltherine-main.png",
    images: [
      "/images/products/syltherine-1.png",
      "/images/products/syltherine-2.png",
      "/images/products/syltherine-3.png",
    ],
    price: {
      currentPrice: 2500000,
      originalPrice: 3500000,
    },
    reviews: {
      count: 24,
      averageRating: 4.5,
    },
    variants: {
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
    },
    stock: 15,
    sku: "CHAIR-SLT-001",
    metadata: {
      category: "Chairs",
      tags: ["Cafe", "Modern", "Indoor"],
    },
    details: {
      description: "Premium polypropylene seat with steel frame",
      dimensions: "45cm × 50cm × 85cm",
      materials: ["Polypropylene", "Steel"],
    },
    badge: {
      text: "-28%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/syltherine-set.png"],
  },
  {
    _id: "LEV0010",
    name: "Leviosa",
    subTitle: "Stylish cafe chair",
    description: "Minimalist chair for modern spaces",
    mainImage: "/images/products/leviosa-main.png",
    images: ["/images/products/leviosa-1.png"],
    price: {
      currentPrice: 2500000,
      originalPrice: 2500000,
    },
    reviews: {
      count: 18,
      averageRating: 4.7,
    },
    variants: {
      sizes: ["One Size"],
      colors: [{ name: "Beige", hex: "#F5F5DC" }],
    },
    stock: 10,
    sku: "CHAIR-LEV-002",
    metadata: {
      category: "Chairs",
      tags: ["Minimalist", "Scandinavian"],
    },
    details: {
      description: "FSC-certified oak frame with wool upholstery",
      dimensions: "50cm × 55cm × 80cm",
      materials: ["Oak Wood", "Wool"],
    },
    relatedImages: ["/images/related/leviosa-set.png"],
  },
  {
    _id: "LOL0011",
    name: "Lolito",
    subTitle: "Luxury big sofa",
    description: "Premium three-seater sofa",
    mainImage: "/images/products/lolito-main.png",
    images: ["/images/products/lolito-1.png", "/images/products/lolito-2.png"],
    price: {
      currentPrice: 7000000,
      originalPrice: 14000000,
    },
    reviews: {
      count: 42,
      averageRating: 4.8,
    },
    variants: {
      sizes: ["3-Seater", "2.5-Seater"],
      colors: [
        { name: "Dark Brown", hex: "#654321" },
        { name: "Charcoal", hex: "#36454F" },
      ],
    },
    stock: 5,
    sku: "SOFA-LOL-003",
    metadata: {
      category: "Sofas",
      tags: ["Luxury", "Leather"],
    },
    details: {
      description: "Full-grain Italian leather with hardwood frame",
      dimensions: "220cm × 95cm × 85cm",
      materials: ["Italian Leather", "Beech Wood"],
    },
    badge: {
      text: "-50%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/lolito-livingroom.png"],
  },
  {
    _id: "RES0012",
    name: "Respira",
    subTitle: "Outdoor bar table and stool",
    description: "Weather-resistant patio set",
    mainImage: "/images/products/respira-main.png",
    images: ["/images/products/respira-1.png"],
    price: {
      currentPrice: 500000,
      originalPrice: 500000,
    },
    reviews: {
      count: 36,
      averageRating: 4.3,
    },
    variants: {
      sizes: ["Standard"],
      colors: [
        { name: "Teak", hex: "#C19A6B" },
        { name: "Graphite", hex: "#41424C" },
      ],
    },
    stock: 20,
    sku: "OUT-RES-004",
    metadata: {
      category: "Outdoor",
      tags: ["Garden", "Patio"],
    },
    details: {
      description: "UV-protected polyrattan with powder-coated frame",
      dimensions: "Table: 120cm × 120cm × 75cm | Stool: 35cm × 35cm × 45cm",
      materials: ["Polyrattan", "Aluminum"],
    },
    relatedImages: ["/images/related/respira-patio.png"],
  },
  {
    _id: "SLT0013",
    name: "Syltherine",
    subTitle: "Stylish cafe chair",
    description: "Ergonomic cafe chair with modern design",
    mainImage: "/images/products/syltherine-main.png",
    images: [
      "/images/products/syltherine-1.png",
      "/images/products/syltherine-2.png",
      "/images/products/syltherine-3.png",
    ],
    price: {
      currentPrice: 2500000,
      originalPrice: 3500000,
    },
    reviews: {
      count: 24,
      averageRating: 4.5,
    },
    variants: {
      sizes: ["One Size"],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF" },
      ],
    },
    stock: 15,
    sku: "CHAIR-SLT-001",
    metadata: {
      category: "Chairs",
      tags: ["Cafe", "Modern", "Indoor"],
    },
    details: {
      description: "Premium polypropylene seat with steel frame",
      dimensions: "45cm × 50cm × 85cm",
      materials: ["Polypropylene", "Steel"],
    },
    badge: {
      text: "-28%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/syltherine-set.png"],
  },
  {
    _id: "LEV0014",
    name: "Leviosa",
    subTitle: "Stylish cafe chair",
    description: "Minimalist chair for modern spaces",
    mainImage: "/images/products/leviosa-main.png",
    images: ["/images/products/leviosa-1.png"],
    price: {
      currentPrice: 2500000,
      originalPrice: 2500000,
    },
    reviews: {
      count: 18,
      averageRating: 4.7,
    },
    variants: {
      sizes: ["One Size"],
      colors: [{ name: "Beige", hex: "#F5F5DC" }],
    },
    stock: 10,
    sku: "CHAIR-LEV-002",
    metadata: {
      category: "Chairs",
      tags: ["Minimalist", "Scandinavian"],
    },
    details: {
      description: "FSC-certified oak frame with wool upholstery",
      dimensions: "50cm × 55cm × 80cm",
      materials: ["Oak Wood", "Wool"],
    },
    relatedImages: ["/images/related/leviosa-set.png"],
  },
  {
    _id: "LOL0015",
    name: "Lolito",
    subTitle: "Luxury big sofa",
    description: "Premium three-seater sofa",
    mainImage: "/images/products/lolito-main.png",
    images: ["/images/products/lolito-1.png", "/images/products/lolito-2.png"],
    price: {
      currentPrice: 7000000,
      originalPrice: 14000000,
    },
    reviews: {
      count: 42,
      averageRating: 4.8,
    },
    variants: {
      sizes: ["3-Seater", "2.5-Seater"],
      colors: [
        { name: "Dark Brown", hex: "#654321" },
        { name: "Charcoal", hex: "#36454F" },
      ],
    },
    stock: 5,
    sku: "SOFA-LOL-003",
    metadata: {
      category: "Sofas",
      tags: ["Luxury", "Leather"],
    },
    details: {
      description: "Full-grain Italian leather with hardwood frame",
      dimensions: "220cm × 95cm × 85cm",
      materials: ["Italian Leather", "Beech Wood"],
    },
    badge: {
      text: "-50%",
      type: "discount",
      color: "red",
    },
    relatedImages: ["/images/related/lolito-livingroom.png"],
  },
  {
    _id: "RES0016",
    name: "Respira",
    subTitle: "Outdoor bar table and stool",
    description: "Weather-resistant patio set",
    mainImage: "/images/products/respira-main.png",
    images: ["/images/products/respira-1.png"],
    price: {
      currentPrice: 500000,
      originalPrice: 500000,
    },
    reviews: {
      count: 36,
      averageRating: 4.3,
    },
    variants: {
      sizes: ["Standard"],
      colors: [
        { name: "Teak", hex: "#C19A6B" },
        { name: "Graphite", hex: "#41424C" },
      ],
    },
    stock: 20,
    sku: "OUT-RES-004",
    metadata: {
      category: "Outdoor",
      tags: ["Garden", "Patio"],
    },
    details: {
      description: "UV-protected polyrattan with powder-coated frame",
      dimensions: "Table: 120cm × 120cm × 75cm | Stool: 35cm × 35cm × 45cm",
      materials: ["Polyrattan", "Aluminum"],
    },
    relatedImages: ["/images/related/respira-patio.png"],
  },
];

export default products;

// import { Product } from "@/types/products";

// const products: Product[] = [
//   {
//     createdAt: new Date(),
//     _id: "SS001",
//     name: "Asgaard Sofa",
//     subTitle: "",
//     description: "Premium quality sofa with ergonomic design",
//     mainImage: "/images/products/sofa-1.jpg",
//     images: ["/images/products/sofa-2.jpg", "/images/products/sofa-3.jpg"],
//     price: {
//       currentPricePrice: 2500000,
//       originalPricePrice: 3500000,
//     },
//     reviews: {
//       count: 5,
//       averageRating: 4.5,
//     },
//     variants: {
//       sizes: ["L", "XL", "XS"],
//       colors: [
//         { name: "Black", hex: "#000000" },
//         { name: "Red", hex: "#FF0000" },
//       ],
//     },
//     stock: 8,
//     sku: "SS001",
//     metadata: {
//       category: "Sofas",
//       tags: ["Living Room", "Premium"],
//     },
//     details: {
//       description:
//         "Embodying luxury and comfort with premium Italian leather...",
//       dimensions: "200cm × 90cm × 75cm",
//       materials: ["Italian Leather", "Hardwood Frame"],
//     },
//     relatedImages: ["", ""],
//   },
// ];

// export default products;
