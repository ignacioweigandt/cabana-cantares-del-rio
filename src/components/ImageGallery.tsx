'use client'

import { useEffect, useRef } from 'react'
import { scrollLockedImageCarousel, ScrollTrigger } from '@/lib/gsap'

export default function ImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !galleryRef.current) return

    // Imágenes del 2 al 9 (sin la 8)
    const imageElements = [2, 3, 4, 5, 6, 7, 9].map(num => 
      galleryRef.current?.querySelector(`[data-image="${num}"]`)
    ).filter(Boolean) as Element[]

    scrollLockedImageCarousel(containerRef.current, imageElements)

    return () => {
      // Cleanup ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-cabana-background px-4 md:px-8 overflow-hidden"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-josefin text-center mb-8 md:mb-12 text-cabana-dark">
          Galería
        </h2>
        
        {/* Contenedor de las imágenes */}
        <div 
          ref={galleryRef}
          className="relative h-[500px] md:h-[600px] flex items-center justify-center"
        >
          {/* Imágenes del 2 al 9 (sin la 8) */}
          {[2, 3, 4, 5, 6, 7, 9].map((num, index) => (
            <div
              key={num}
              data-image={num}
              className="absolute w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
              style={{
                transform: 'translateY(200px)', // Inicialmente fuera de la pantalla
                opacity: 0
              }}
            >
              <img
                src={`/images/${num === 3 || num === 4 ? `${num} ` : num}.webp`}
                alt={`Cabaña imagen ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}