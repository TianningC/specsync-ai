import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { AIAgent } from "@/components/AIAgent";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <AIAgent />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
