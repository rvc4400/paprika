
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Cta } from "@/components/landing/Cta";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Cta />
    </div>
  );
}
