import agricultureImg from "@/assets/products/agriculture.jpg";
import machineryImg from "@/assets/products/machinery.jpg";
import chemicalsImg from "@/assets/products/chemicals.jpg";
import textilesImg from "@/assets/products/textiles.jpg";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  serviceSlug: string; // matches services.ts slug
  slug: string; // product slug
  name: string;
  image: string; // path to image (can reuse category image)
  description: string;
  specs: ProductSpec[];
};

const categoryImageMap: Record<string, string> = {
  "agriculture-products": agricultureImg,
  "electronics-machinery": machineryImg,
  "chemicals-minerals": chemicalsImg,
  "textile-apparel": textilesImg,
};

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const makeDetail = (serviceSlug: string, name: string, overrides?: Partial<ProductDetail>): ProductDetail => ({
  serviceSlug,
  slug: toSlug(name),
  name,
  image: categoryImageMap[serviceSlug],
  description: `High-quality ${name} from our ${serviceSlug.replace(/-/g, " ")}. Export-ready, quality-checked, and compliant with international standards.`,
  specs: [
    { label: "Packaging", value: "Custom, export-grade" },
    { label: "MOQ", value: "Flexible (bulk orders welcomed)" },
    { label: "Origin", value: "India" },
    { label: "Grade", value: "Premium" },
  ],
  ...overrides,
});

const productNames: Record<string, string[]> = {
  "agriculture-products": [
    "Basmati Rice",
    "Wheat",
    "Soybeans",
    "Black Pepper",
    "Turmeric",
    "Cardamom",
    "Tea Leaves",
    "Coffee Beans",
  ],
  "electronics-machinery": [
    "Industrial Pumps",
    "CNC Machines",
    "LED Displays",
    "Solar Panels",
    "Electrical Components",
    "Motors",
    "Sensors",
    "Control Systems",
  ],
  "chemicals-minerals": [
    "Iron Ore",
    "Aluminum Oxide",
    "Caustic Soda",
    "Sulfuric Acid",
    "Polymers",
    "Fertilizers",
    "Pigments",
    "Industrial Salts",
  ],
  "textile-apparel": [
    "Cotton Fabrics",
    "Silk Garments",
    "Denim Jeans",
    "Sportswear",
    "Home Textiles",
    "Leather Goods",
    "Handicrafts",
    "Embroidered Items",
  ],
};

export const products: ProductDetail[] = Object.entries(productNames).flatMap(([serviceSlug, names]) =>
  names.map((name) => makeDetail(serviceSlug, name))
);

export const getProductDetail = (serviceSlug: string, productSlug: string) =>
  products.find((p) => p.serviceSlug === serviceSlug && p.slug === productSlug);

export const getProductImage = (serviceSlug: string, productSlug: string) =>
  getProductDetail(serviceSlug, productSlug)?.image || categoryImageMap[serviceSlug];
