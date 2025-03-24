"use client"

import OurStory from "./components/OurStory"
import SocialFirstAgency from "./components/SocialFirstAgency"
import OurServiceOffering from "./components/OurServiceOfferings"
import Testimonials from "./components/Testimonials"
import WhatsNextForYourMarketing from "./components/WhatsNextForYourMarketing"
import TrustedByCompanies from "./components/TrustedByCompanies"
import Hero from "./components/Hero"
import LatestBlogs from "./components/LatestBlogs"
import CallToAction from "./components/CallToAction"

export default function ClientPage() {
  return (
    <div className="min-h-screen text-white max-w-full overflow-x-hidden">
      <Hero></Hero>
      <TrustedByCompanies></TrustedByCompanies>
      <OurServiceOffering></OurServiceOffering>
      <WhatsNextForYourMarketing></WhatsNextForYourMarketing>
      <Testimonials />
      <OurStory></OurStory>
      <SocialFirstAgency></SocialFirstAgency>
      <LatestBlogs></LatestBlogs>
      <CallToAction></CallToAction>
    </div>
  )
}

