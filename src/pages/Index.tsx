import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientShowcase from "@/components/ClientShowcase";
import PricingComparison from "@/components/PricingComparison";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ClientShowcase />
      <PricingComparison />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
