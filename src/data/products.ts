import agricultureImg from "@/assets/products/agriculture.jpg";
import machineryImg from "@/assets/products/machinery.jpg";
import chemicalsImg from "@/assets/products/chemicals.jpg";
import textilesImg from "@/assets/products/textiles.jpg";
// Product-specific images
import imgAgrBasmati from "@/assets/products/agriculture-products--basmati-rice.jpg";
import imgAgrWheat from "@/assets/products/agriculture-products--wheat.jpg";
import imgAgrSoybeans from "@/assets/products/agriculture-products--soybeans.jpg";
import imgAgrBlackPepper from "@/assets/products/agriculture-products--black-pepper.jpg";
import imgAgrTurmeric from "@/assets/products/agriculture-products--turmeric.jpg";
import imgAgrCardamom from "@/assets/products/agriculture-products--cardamom.jpg";
import imgAgrTeaLeaves from "@/assets/products/agriculture-products--tea-leaves.jpg";
import imgAgrCoffeeBeans from "@/assets/products/agriculture-products--coffee-beans.jpg";

import imgEMIndustrialPumps from "@/assets/products/electronics-machinery--industrial-pumps.jpg";
import imgEMCncMachines from "@/assets/products/electronics-machinery--cnc-machines.jpg";
import imgEMLedDisplays from "@/assets/products/electronics-machinery--led-displays.jpg";
import imgEMSolarPanels from "@/assets/products/electronics-machinery--solar-panels.jpg";
import imgEMElectricalComponents from "@/assets/products/electronics-machinery--electrical-components.jpg";
import imgEMMotors from "@/assets/products/electronics-machinery--motors.jpg";
import imgEMSensors from "@/assets/products/electronics-machinery--sensors.jpg";
import imgEMControlSystems from "@/assets/products/electronics-machinery--control-systems.jpg";

import imgChemIronOre from "@/assets/products/chemicals-minerals--iron-ore.jpg";
import imgChemAluminumOxide from "@/assets/products/chemicals-minerals--aluminum-oxide.jpg";
import imgChemCausticSoda from "@/assets/products/chemicals-minerals--caustic-soda.jpg";
import imgChemSulfuricAcid from "@/assets/products/chemicals-minerals--sulfuric-acid.jpg";
import imgChemPolymers from "@/assets/products/chemicals-minerals--polymers.jpg";
import imgChemFertilizers from "@/assets/products/chemicals-minerals--fertilizers.jpg";
import imgChemPigments from "@/assets/products/chemicals-minerals--pigments.jpg";
import imgChemIndustrialSalts from "@/assets/products/chemicals-minerals--industrial-salts.jpg";

import imgTextCottonFabrics from "@/assets/products/textile-apparel--cotton-fabrics.jpg";
import imgTextSilkGarments from "@/assets/products/textile-apparel--silk-garments.jpg";
import imgTextDenimJeans from "@/assets/products/textile-apparel--denim-jeans.jpg";
import imgTextSportswear from "@/assets/products/textile-apparel--sportswear.jpg";
import imgTextHomeTextiles from "@/assets/products/textile-apparel--home-textiles.jpg";
import imgTextLeatherGoods from "@/assets/products/textile-apparel--leather-goods.jpg";
import imgTextHandicrafts from "@/assets/products/textile-apparel--handicrafts.jpg";
import imgTextEmbroideredItems from "@/assets/products/textile-apparel--embroidered-items.jpg";

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

const productImageMap: Record<string, string> = {
  "agriculture-products/basmati-rice": imgAgrBasmati,
  "agriculture-products/wheat": imgAgrWheat,
  "agriculture-products/soybeans": imgAgrSoybeans,
  "agriculture-products/black-pepper": imgAgrBlackPepper,
  "agriculture-products/turmeric": imgAgrTurmeric,
  "agriculture-products/cardamom": imgAgrCardamom,
  "agriculture-products/tea-leaves": imgAgrTeaLeaves,
  "agriculture-products/coffee-beans": imgAgrCoffeeBeans,

  "electronics-machinery/industrial-pumps": imgEMIndustrialPumps,
  "electronics-machinery/cnc-machines": imgEMCncMachines,
  "electronics-machinery/led-displays": imgEMLedDisplays,
  "electronics-machinery/solar-panels": imgEMSolarPanels,
  "electronics-machinery/electrical-components": imgEMElectricalComponents,
  "electronics-machinery/motors": imgEMMotors,
  "electronics-machinery/sensors": imgEMSensors,
  "electronics-machinery/control-systems": imgEMControlSystems,

  "chemicals-minerals/iron-ore": imgChemIronOre,
  "chemicals-minerals/aluminum-oxide": imgChemAluminumOxide,
  "chemicals-minerals/caustic-soda": imgChemCausticSoda,
  "chemicals-minerals/sulfuric-acid": imgChemSulfuricAcid,
  "chemicals-minerals/polymers": imgChemPolymers,
  "chemicals-minerals/fertilizers": imgChemFertilizers,
  "chemicals-minerals/pigments": imgChemPigments,
  "chemicals-minerals/industrial-salts": imgChemIndustrialSalts,

  "textile-apparel/cotton-fabrics": imgTextCottonFabrics,
  "textile-apparel/silk-garments": imgTextSilkGarments,
  "textile-apparel/denim-jeans": imgTextDenimJeans,
  "textile-apparel/sportswear": imgTextSportswear,
  "textile-apparel/home-textiles": imgTextHomeTextiles,
  "textile-apparel/leather-goods": imgTextLeatherGoods,
  "textile-apparel/handicrafts": imgTextHandicrafts,
  "textile-apparel/embroidered-items": imgTextEmbroideredItems,
};

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
  names.map((name) => {
    const key = `${serviceSlug}/${toSlug(name)}`;
    const image = productImageMap[key] || categoryImageMap[serviceSlug];
    return makeDetail(serviceSlug, name, { image });
  })
);

export const getProductDetail = (serviceSlug: string, productSlug: string) =>
  products.find((p) => p.serviceSlug === serviceSlug && p.slug === productSlug);

export const getProductImage = (serviceSlug: string, productSlug: string) =>
  getProductDetail(serviceSlug, productSlug)?.image || categoryImageMap[serviceSlug];
