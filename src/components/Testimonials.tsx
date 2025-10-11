import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Tech Startup Founder",
      content: "Dvalley's virtual office gave my startup the professional image we needed at a price we could actually afford. The savings allowed us to invest more in product development!",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Freelance Consultant",
      content: "As a freelancer, having a prestigious business address was crucial for client trust. Dvalley delivered exactly that, plus amazing support from their team.",
      rating: 5,
    },
    {
      name: "Rakib Hassan",
      role: "E-commerce Owner",
      content: "The mail handling service is exceptional. I travel frequently, and knowing my business correspondence is managed professionally gives me peace of mind.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      role: "Marketing Agency Owner",
      content: "Best value for money in Dhaka! We were paying almost triple elsewhere. The meeting room access is a fantastic bonus that we use regularly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses who've experienced the Dvalley difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">
              4.9/5 Average Rating from 200+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
