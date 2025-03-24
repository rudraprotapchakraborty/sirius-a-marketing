"use client"

import { Button } from "@/components/ui/button"
import OurStory from "./components/OurStory"
import SocialFirstAgency from "./components/SocialFirstAgency"
import OurServiceOffering from "./components/OurServiceOfferings"
import Testimonials from "./components/Testimonials"
import WhatsNextForYourMarketing from "./components/WhatsNextForYourMarketing"
import TrustedByCompanies from "./components/TrustedByCompanies"
import Hero from "./components/Hero"
import LatestBlogs from "./components/LatestBlogs"

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

      {/* Final CTA - No Animation */}
      <section className="container mx-auto px-4 py-20 max-w-full bg-white/70 dark:bg-transparent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Call to Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Partner with Sirius A Marketing to elevate your business. Schedule a complimentary consultation to discuss
            your marketing transformation.
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-lg text-gray-900 dark:text-white">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call us:{" "}
              <a href="tel:+4407362622636" className="text-purple-600 dark:text-purple-400 hover:underline">
                +4407362622636
              </a>
            </p>
            <p className="text-lg text-gray-900 dark:text-white">
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              Email:{" "}
              <a href="mailto:siriusmarketing@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                siriusmarketing@gmail.com
              </a>
            </p>
          </div>
          <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">Schedule Consultation</Button>
        </div>
      </section>
      
    </div>
  )
}

