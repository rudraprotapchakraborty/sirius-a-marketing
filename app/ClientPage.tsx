"use client"

import OurStory from "./components/home/OurStory"
import SocialFirstAgency from "./components/home/SocialFirstAgency"
import OurServiceOffering from "./components/home/OurServiceOfferings"
import Testimonials from "./components/home/Testimonials"
import WhatsNextForYourMarketing from "./components/home/WhatsNextForYourMarketing"
import Hero from "./components/home/Hero"
import CallToAction from "./components/home/CallToAction"
import TrustedByCompanies from "./components/home/TrustedByCompanies"
import IndustriesSection from "./components/home/IndustriesSection"

export default function ClientPage() {
  return (
    <div className="relative min-h-screen text-white max-w-full overflow-x-hidden">
      <Hero />
      <TrustedByCompanies />
      <OurServiceOffering />
      <WhatsNextForYourMarketing />
      <IndustriesSection />
      <Testimonials />
      <OurStory />
      <SocialFirstAgency />
      <CallToAction />
    </div>
  )
}
