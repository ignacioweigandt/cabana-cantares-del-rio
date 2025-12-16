'use client'

import { useEffect } from 'react'
import { initGSAP } from '@/lib/gsap'
import Hero from '@/components/Hero'
import ProgressiveTextSection from '@/components/ProgressiveTextSection'
import ImageGallery from '@/components/ImageGallery'
import CabinDescriptionSection from '@/components/CabinDescriptionSection'
import AmenitiesSection from '@/components/AmenitiesSection'
import LocationSection from '@/components/LocationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollSection from '@/components/ScrollSection'

export default function Home() {
  useEffect(() => {
    initGSAP()
  }, [])

  return (
    <main className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      
      <ProgressiveTextSection />

      <div id="gallery">
        <ImageGallery />
      </div>

      <CabinDescriptionSection />

      <div id="amenities">
        <AmenitiesSection />
      </div>

      <div id="location">
        <LocationSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}