import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wheat, Cpu, FlaskConical, Shirt, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wheat,
      title: "Agriculture Products",
      description: "Premium quality agricultural exports including grains, spices, and organic produce",
      features: ["Organic Certification", "Quality Testing", "Cold Chain Logistics", "Custom Packaging"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Cpu,
      title: "Electronics & Machinery",
      description: "Advanced technology products and industrial machinery for global markets",
      features: ["Technical Support", "Warranty Coverage", "Installation Assistance", "Bulk Orders"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: FlaskConical,
      title: "Chemicals & Minerals",
      description: "Industrial chemicals and mineral products with certified quality standards",
      features: ["Safety Compliance", "MSDS Documentation", "Specialized Handling", "Regulatory Support"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Shirt,
      title: "Textile & Apparel",
      description: "Fashion and textile products from renowned manufacturers worldwide",
      features: ["Fashion Trends", "Quality Fabrics", "Custom Designs", "Sustainable Materials"],
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in exporting high-quality products across diverse industries, 
            ensuring excellence in every shipment worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="hover:shadow-hero transition-smooth hover:scale-105 border-0 bg-gradient-card animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Export Globally?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their international trade needs. 
            Let's discuss how we can help expand your business worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;