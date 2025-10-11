import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    plan: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwyykzv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest. Our team will contact you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          plan: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send form data. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Start Your Virtual Office Today!
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and get your exclusive offer within 24 hours
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium">
                  Company Name (Optional)
                </Label>
                <Input
                  id="company"
                  placeholder="Your company or business name"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan" className="text-foreground font-medium">
                  Preferred Plan *
                </Label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) => handleChange("plan", value)}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your preferred plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Plan - 1990 BDT/month</SelectItem>
                    <SelectItem value="yearly">Yearly Plan - 19,990 BDT/year (Save 2 months!)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you'll receive a personalized quote and can speak with our team
                    to customize your virtual office package to your specific needs.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit & Get Offer
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center space-y-2 animate-fade-in">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Location:</strong> 23/2 SEL HUQ Sky Park, Shyamoli, Mirpur Road, Dhaka
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Phone:</strong> +880 1540-791548
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Email:</strong> contact@dvalleybd.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
