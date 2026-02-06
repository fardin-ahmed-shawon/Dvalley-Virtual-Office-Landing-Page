import { MapPin, Mail, Users, Phone, Calendar, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prestigious Business Address",
      description: "Get a premium Dhaka business address that enhances your company's credibility and professional image.",
    },
    {
      icon: Mail,
      title: "Mail & Package Handling",
      description: "Secure receiving and forwarding of all your business mail and packages with prompt notifications.",
    },
    {
      icon: Users,
      title: "Meeting Room Access",
      description: "You will get meeting room usage for client meetings and team collaborations.",
    },
    {
      icon: Phone,
      title: "Business Call Support",
      description: "Professional call handling and message taking services to never miss important business calls.",
    },
    {
      icon: Calendar,
      title: "Networking Events",
      description: "Exclusive access to monthly networking events, workshops, and community gatherings.",
    },
    {
      icon: Shield,
      title: "Business Registration Support",
      description: "Assistance with trade license and business registration using your virtual office address.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Virtual Office package includes all essential services to run your business professionally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Plus Many More Benefits!
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-card px-4 py-2 rounded-full shadow-sm">
              ✓ 24/7 Access to Your Mail
            </span>
            <span className="bg-card px-4 py-2 rounded-full shadow-sm">
              ✓ Professional Receptionist
            </span>
            <span className="bg-card px-4 py-2 rounded-full shadow-sm">
              ✓ High-Speed WiFi
            </span>
            <span className="bg-card px-4 py-2 rounded-full shadow-sm">
              ✓ Printing & Scanning
            </span>
            <span className="bg-card px-4 py-2 rounded-full shadow-sm">
              ✓ Business Lounge Access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
