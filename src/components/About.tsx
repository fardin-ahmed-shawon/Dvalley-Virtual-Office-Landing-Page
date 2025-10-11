import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About D Valley
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg animate-scale-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              D Valley is Dhaka's premier coworking space located in the heart of Shyamoli, 
              offering innovative workspace solutions for entrepreneurs, startups, and 
              freelancers. We provide a professional, reliable, and inspiring environment 
              that empowers your business to thrive.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Trusted Partner</h3>
                  <p className="text-muted-foreground text-sm">
                    Supporting hundreds of businesses since establishment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Prime Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Strategic position in Shyamoli, Dhaka's business hub
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Environment</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern facilities designed for productivity and growth
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Reliable Service</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicated support team ensuring seamless operations
                  </p>
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
