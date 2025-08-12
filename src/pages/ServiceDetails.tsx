import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceBySlug, services } from "@/data/services";
import { getProductDetail } from "@/data/products";
import agricultureImg from "@/assets/products/agriculture.jpg";
import machineryImg from "@/assets/products/machinery.jpg";
import chemicalsImg from "@/assets/products/chemicals.jpg";
import textilesImg from "@/assets/products/textiles.jpg";

const categoryImageMap: Record<string, string> = {
  "agriculture-products": agricultureImg,
  "electronics-machinery": machineryImg,
  "chemicals-minerals": chemicalsImg,
  "textile-apparel": textilesImg,
};

const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = useMemo(() => getServiceBySlug(slug || ""), [slug]);

  useEffect(() => {
    if (!service) return;
    const title = `Udaan | ${service.title} Details`;
    const description = `${service.title} – ${service.description}. Explore full product list with specifications and images by Udaan.`;

    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `/services/${service.slug}`);

    // Structured data (ItemList of products)
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${service.title} products`,
      itemListElement: service.products.map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name,
          brand: 'Udaan',
          category: service.title,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [service]);

  if (!service) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Category not found</h1>
          <p className="text-muted-foreground">The service you are looking for does not exist.</p>
          <Button asChild variant="ocean">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="story-link">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color}`}>
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {service.title} – Product Details
              </h1>
              <p className="text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {service.products.map((product) => {
                    const productSlug = toSlug(product);
                    const imgSrc = categoryImageMap[service.slug];
                    return (
                      <Link
                        to={`/services/${service.slug}/${productSlug}`}
                        key={product}
                        className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover-scale block focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label={`View details for ${product}`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${product} - ${service.title} by Udaan`}
                          loading="lazy"
                          className="w-full h-40 object-cover bg-muted"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold">{product}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Premium {product.toLowerCase()} from trusted suppliers, quality-checked and export-ready.
                          </p>
                          <span className="text-sm text-primary story-link mt-2 inline-block">View details</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </article>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need a Quote?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Tell us your quantity, destination, and requirements.</p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/#contact">Contact Udaan</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </section>

        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/#services">← Back to Services</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
