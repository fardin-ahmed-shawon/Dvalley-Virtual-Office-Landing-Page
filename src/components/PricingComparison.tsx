import { Check, X, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingComparison = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Market Average",
      icon: <X className="h-5 w-5 text-destructive" />,
      monthly: "3500–5000 BDT",
      yearly: "42000–60000 BDT",
      highlight: false,
      status: "Expensive",
      color: "text-destructive",
    },
    {
      name: "Dvalley",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      monthly: "1990 BDT",
      yearly: "19,990 BDT",
      highlight: true,
      status: "Best Deal",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide">
              BEST DEAL IN THE MARKET
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Transparent & Fair Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Dvalley outshines competitors — more value, less cost.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-scale-in">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50 shadow-lg scale-105"
                  : "bg-card border-border"
              }`}
            >
              {/* Glow Accent for Dvalley */}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-3xl opacity-30"></div>
              )}

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {plan.icon}
                    <h3
                      className={`text-xl font-bold ${
                        plan.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  {plan.highlight && (
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      BEST VALUE
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div
                    className={`text-3xl font-extrabold ${
                      plan.highlight ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {plan.monthly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.highlight ? "Save up to 60%" : "Higher market rate"}
                  </div>

                  <div className="mt-4 text-xl font-bold text-foreground">
                    {plan.yearly}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {plan.highlight ? "2 months FREE" : ""}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-4"></div>

                {/* Status */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div
                    className={`inline-flex items-center gap-1 font-semibold ${plan.color}`}
                  >
                    {plan.highlight ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    <span>{plan.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/15 via-background to-primary/15 rounded-2xl p-8 max-w-3xl mx-auto shadow-md border border-primary/50">
            <div className="flex items-center justify-center gap-2 mb-3 text-primary font-semibold text-xl">
              <TrendingUp className="h-5 w-5" />
              <span>Save up to 3,000 BDT per month!</span>
            </div>
            <p className="text-muted-foreground mb-6">
              That’s <span className="font-semibold text-foreground">36,000 BDT annually</span> — reinvest it in your business growth 🚀
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Claim This Offer Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;