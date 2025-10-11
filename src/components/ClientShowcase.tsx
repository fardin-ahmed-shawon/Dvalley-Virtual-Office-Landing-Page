import { Building2, Users, Star } from "lucide-react";

const ClientShowcase = () => {
  const stats = [
    { icon: Building2, value: "200+", label: "Happy Clients" },
    { icon: Users, value: "500+", label: "Members Served" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Entrepreneurs, Startups & Freelancers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful businesses who have chosen D Valley as their virtual office partner
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="bg-secondary/30 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="w-32 h-20 bg-muted rounded-lg flex items-center justify-center animate-scale-in"
                style={{ animationDelay: `${item * 50}ms` }}
              >
                <Building2 className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Trusted by leading startups, tech companies, and consultancies across Dhaka
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
