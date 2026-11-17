import { Building2, Users, Star } from "lucide-react";
import C1 from "../assets/c4.png";
import C2 from "../assets/c2.jpg";
import C3 from "../assets/c3.jpg";
import C4 from "../assets/c1.jpg";
import C5 from "../assets/c5.jpeg";
import C6 from "../assets/c6.png";
import C7 from "../assets/471767111_122133305600518406_9119095537216198514_n.jpg";
import C8 from "../assets/539767862_784439797438296_2587876904245068289_n.png";
import C9 from "../assets/795385966_122173599062958258_4159725293848021339_n.jpg";
import C10 from "../assets/819470285_122205131960594264_7608944805154707556_n.jpg";
import C11 from "../assets/Screenshot 2026-11-16 135620.png";
import C12 from "../assets/download.png";
import C13 from "../assets/download (1).png";
import C14 from "../assets/download (2).png";
import C15 from "../assets/download (3).png";
import C16 from "../assets/download (4).png";
import C17 from "../assets/download (5).png";
import C18 from "../assets/download (6).png";
import C19 from "../assets/download (7).png";
import C20 from "../assets/download (8).png";
import C21 from "../assets/download (9).png";
import C22 from "../assets/aaaaa.png";
import C23 from "../assets/download (11).png";
import C24 from "../assets/download (12).png";
import C25 from "../assets/aaaaaa2.png";
import C26 from "../assets/download (14).png";

const ClientLogos = {
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
  C8,
  C9,
  C10,
  C11,
  C12,
  C13,
  C14,
  C15,
  C16,
  C17,
  C18,
  C19,
  C20,
  C21,
  C22,
  C23,
  C24,
  C25,
  C26,
};

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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 items-center justify-items-center">
            {Object.values(ClientLogos).map((logo, index) => (
              <div
                key={index}
                className="w-32 h-20 bg-muted rounded-lg flex items-center justify-center animate-scale-in overflow-hidden p-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          <br />
          <p className="text-center text-sm text-muted-foreground mt-8">
            Trusted by leading startups, tech companies, and consultancies across Dhaka
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
