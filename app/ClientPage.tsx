"use client";

import Hero from "./components/home/Hero";
import TrustedByCompanies from "./components/home/TrustedByCompanies";
import OurServiceOffering from "./components/home/OurServiceOfferings";
import WhatsNextForYourMarketing from "./components/home/WhatsNextForYourMarketing";
import IndustriesSection from "./components/home/IndustriesSection";
import Testimonials from "./components/home/Testimonials";
import OurStory from "./components/home/OurStory";
import SocialFirstAgency from "./components/home/SocialFirstAgency";
import CallToAction from "./components/home/CallToAction";

export default function ClientPage() {
  return (
    <div className="relative min-h-screen max-w-full overflow-x-hidden text-foreground">
      <Hero />
      <TrustedByCompanies />
      <OurServiceOffering />
      <WhatsNextForYourMarketing />
      <IndustriesSection />
      <SocialFirstAgency />
      <Testimonials />
      <OurStory />
      <CallToAction />
    </div>
  );
}
