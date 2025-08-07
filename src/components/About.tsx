import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Clock, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide partnerships spanning 30+ countries for seamless international trade"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring products meet international standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics network guaranteeing on-time shipments across all destinations"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record in international trade with thousands of successful transactions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-secondary">Global Portals Express</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established with a vision to connect global markets, we are your trusted partner in international trade, 
            specializing in export services that bridge continents and create opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="border-0 bg-gradient-card hover:shadow-card transition-smooth hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-hero p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To facilitate seamless international trade by providing exceptional export services, 
                    quality products, and reliable logistics solutions that exceed client expectations.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading global export company, recognized for innovation, 
                    integrity, and sustainable business practices that create value for all stakeholders.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-ocean rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Company Milestones</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">2008 - Company Founded</div>
                    <div className="text-white/80 text-sm">Started with a vision for global trade</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">2015 - International Expansion</div>
                    <div className="text-white/80 text-sm">Reached 20+ partner countries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">2020 - Digital Transformation</div>
                    <div className="text-white/80 text-sm">Launched online platform for clients</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold">2024 - Industry Leadership</div>
                    <div className="text-white/80 text-sm">500+ successful shipments annually</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;