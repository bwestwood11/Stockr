import { cn } from "@/lib/utils";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <section className={cn("main-wrapper", "container max-w-7xl mx-auto")}>
      <HeroSection /> 
      <Features />
      <Pricing /> 
    </section>
  );
}
