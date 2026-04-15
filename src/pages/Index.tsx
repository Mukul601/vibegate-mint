import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FutureFeatures from "@/components/landing/FutureFeatures";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <Testimonials />
      <FutureFeatures />
      <CTA />
      <Footer />
    </div>
  );
}
