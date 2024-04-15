"use client";
import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import QualityFeatures from "@/components/QualityFeatures";
import About from "@/components/About";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import TherapistForm from "@/components/TherapistForm";
import About2 from "@/components/About2";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <TherapistForm />
      <About />
      <Features />
      <About2 />
      <Work />
      <ContactForm />
      <Community />
       {/* <QualityFeatures />
      <CoreFeatures />
      <Pricing />
      <Team />
      <Testimonials />
      <Subscribe /> */}
    </div>
  );
}
