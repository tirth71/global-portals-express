import { Wheat, Cpu, FlaskConical, Shirt } from "lucide-react";

export type ServiceCategory = {
  slug: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  products: string[];
  color: string;
};

export const services: ServiceCategory[] = [
  {
    slug: "agriculture-products",
    icon: Wheat,
    title: "Agriculture Products",
    description:
      "Premium quality agricultural exports including grains, spices, and organic produce",
    features: [
      "Organic Certification",
      "Quality Testing",
      "Cold Chain Logistics",
      "Custom Packaging",
    ],
    products: [
      "Basmati Rice",
      "Wheat",
      "Soybeans",
      "Black Pepper",
      "Turmeric",
      "Cardamom",
      "Tea Leaves",
      "Coffee Beans",
    ],
    color: "bg-green-500/10 text-green-600",
  },
  {
    slug: "electronics-machinery",
    icon: Cpu,
    title: "Electronics & Machinery",
    description:
      "Advanced technology products and industrial machinery for global markets",
    features: [
      "Technical Support",
      "Warranty Coverage",
      "Installation Assistance",
      "Bulk Orders",
    ],
    products: [
      "Industrial Pumps",
      "CNC Machines",
      "LED Displays",
      "Solar Panels",
      "Electrical Components",
      "Motors",
      "Sensors",
      "Control Systems",
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "chemicals-minerals",
    icon: FlaskConical,
    title: "Chemicals & Minerals",
    description:
      "Industrial chemicals and mineral products with certified quality standards",
    features: [
      "Safety Compliance",
      "MSDS Documentation",
      "Specialized Handling",
      "Regulatory Support",
    ],
    products: [
      "Iron Ore",
      "Aluminum Oxide",
      "Caustic Soda",
      "Sulfuric Acid",
      "Polymers",
      "Fertilizers",
      "Pigments",
      "Industrial Salts",
    ],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    slug: "textile-apparel",
    icon: Shirt,
    title: "Textile & Apparel",
    description:
      "Fashion and textile products from renowned manufacturers worldwide",
    features: [
      "Fashion Trends",
      "Quality Fabrics",
      "Custom Designs",
      "Sustainable Materials",
    ],
    products: [
      "Cotton Fabrics",
      "Silk Garments",
      "Denim Jeans",
      "Sportswear",
      "Home Textiles",
      "Leather Goods",
      "Handicrafts",
      "Embroidered Items",
    ],
    color: "bg-pink-500/10 text-pink-600",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
