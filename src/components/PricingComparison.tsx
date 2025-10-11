import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingComparison = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">BEST DEAL IN THE MARKET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Unbeatable Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare and see why D Valley offers the best value for your business
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Comparison Table */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden animate-scale-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Service Provider
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Monthly Rate
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Yearly Rate
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">Market Average</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground line-through">3500-5000 BDT</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-muted-foreground line-through">42000-60000 BDT</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1 text-destructive">
                        <X className="h-4 w-4" />
                        <span className="text-sm">Expensive</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      D Valley
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-2xl font-bold text-primary">1990 BDT</div>
                      <div className="text-xs text-muted-foreground">Save up to 60%</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-2xl font-bold text-primary">19,990 BDT</div>
                      <div className="text-xs text-muted-foreground">2 months FREE</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1 text-primary font-semibold">
                        <Check className="h-5 w-5" />
                        <span>Best Deal</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="mt-8 text-center bg-primary/10 rounded-xl p-6 animate-fade-in">
            <p className="text-lg font-semibold text-foreground mb-2">
              💰 Save up to <span className="text-primary text-2xl">3,000 BDT per month</span> with D Valley
            </p>
            <p className="text-muted-foreground mb-4">
              That's <span className="font-semibold text-foreground">36,000 BDT savings annually</span> — invest it back into growing your business!
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
