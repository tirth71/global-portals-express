import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceBySlug } from "@/data/services";
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

const ProductDetails = () => {
  const { slug, product } = useParams<{ slug: string; product: string }>();

  const { service, productName, detail } = useMemo(() => {
    const svc = getServiceBySlug(slug || "");
    if (!svc) return { service: undefined, productName: undefined, detail: undefined };
    const name = svc.products.find((p) => toSlug(p) === (product || ""));
    const d = getProductDetail(svc.slug, product || "");
    return { service: svc, productName: name, detail: d };
  }, [slug, product]);

  useEffect(() => {
    if (!service) return;
    const name = (detail?.name || productName);
    if (!name) return;
    const title = `Udaan | ${name} – ${service.title}`;
    const description = `${name} in ${service.title}. Specifications, high-quality images, and export options by Udaan.`;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `/services/${service.slug}/${toSlug(name)}`);

    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      brand: "Udaan",
      category: service.title,
      image: detail?.image || categoryImageMap[service.slug],
      description,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [service, productName, detail]);
  const name = detail?.name || productName;

  if (!service || !name) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Product not found</h1>
          <p className="text-muted-foreground">The product you are looking for does not exist.</p>
          <Button asChild variant="ocean">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const imgSrc = detail?.image || categoryImageMap[service.slug];

  return (
    <main className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="story-link">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/" className="story-link">Services</Link>
            <span className="mx-2">/</span>
            <Link to={`/services/${service.slug}`} className="story-link">{service.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">{name} – Full Details</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Premium {name.toLowerCase()} from our {service.title.toLowerCase()} category. Export-ready, quality-checked, and compliant with international standards.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-0">
                <img
                  src={imgSrc}
                  alt={`${name} - ${service.title} by Udaan`}
                  loading="lazy"
                  className="w-full h-72 object-cover bg-muted"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Category:</span> {service.title}</li>
                  <li><span className="font-semibold text-foreground">Brand:</span> Udaan</li>
                  {detail?.specs?.length ? (
                    detail.specs.map((s) => (
                      <li key={s.label}><span className="font-semibold text-foreground">{s.label}:</span> {s.value}</li>
                    ))
                  ) : (
                    <>
                      <li><span className="font-semibold text-foreground">Packaging:</span> Custom as per requirement</li>
                      <li><span className="font-semibold text-foreground">MOQ:</span> Flexible (bulk orders welcomed)</li>
                      <li><span className="font-semibold text-foreground">Quality:</span> Export grade, inspected</li>
                      <li><span className="font-semibold text-foreground">Availability:</span> In stock</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          </article>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why choose Udaan?</CardTitle>
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
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Share your quantity, destination, and specifications to receive a tailored quote.</p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/#contact">Contact Udaan</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </section>

        <div className="mt-10 flex gap-3">
          <Button asChild variant="outline">
            <Link to={`/services/${service.slug}`}>← Back to {service.title}</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/#services">Explore Other Categories</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
