import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Call us for immediate assistance"
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@globalportalsexpress.com", "sales@globalportalsexpress.com"],
    description: "Send us your inquiries anytime"
  }, {
    icon: MapPin,
    title: "Address",
    details: ["123 International Trade Center", "Business District, NY 10001"],
    description: "Visit our headquarters"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    description: "We're here when you need us"
  }];
  return <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your global export journey? Contact our experienced team today 
            for personalized solutions and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => <Card key={info.title} className="group hover:shadow-float transition-all duration-500 animate-fade-in hover:scale-105 border-0 relative overflow-hidden hover:-rotate-1" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-10"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                        <info.icon className="h-6 w-6 text-secondary group-hover:animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">{info.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">{info.description}</p>
                        {info.details.map((detail, idx) => <p key={idx} className="text-sm text-foreground font-medium group-hover:text-secondary transition-colors duration-300">{detail}</p>)}
                      </div>
                    </div>
                    {/* Animated bottom border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-hero animate-fade-in delay-500 hover:shadow-neon transition-all duration-700 relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-pulse opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company Inc." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Export inquiry for agricultural products" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please provide details about your export requirements, quantities, destinations, and timeline..." className="min-h-[120px]" />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group relative overflow-hidden animate-slide-up delay-700">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-shimmer translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-hero hover:shadow-neon transition-all duration-700 group animate-scale-in delay-1000">
            
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;