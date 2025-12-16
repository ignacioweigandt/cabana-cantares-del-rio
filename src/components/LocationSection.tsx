'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    // Detectar tamaño de pantalla
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)

    // Animaciones de entrada y salida para los elementos
    const titleElement = titleRef.current
    const mapElement = mapRef.current
    const textElement = textRef.current

    if (titleElement && mapElement && textElement) {
      // Timeline para animación de entrada
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      })

      // Animación del título - aparece desde arriba con fade
      tl.fromTo(titleElement,
        { 
          opacity: 0, 
          y: -50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          ease: "power3.out" 
        }
      )
      // Animación del mapa - aparece con escala y rotación
      .fromTo(mapElement,
        { 
          opacity: 0, 
          scale: 0.3,
          rotation: -180,
          y: 50
        },
        { 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 1.5, 
          ease: "back.out(1.7)" 
        }, 
        "-=0.8"
      )
      // Animación del texto - aparece desde abajo con stagger
      .fromTo(textElement.querySelectorAll('.bg-white\\/20'),
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out" 
        }, 
        "-=0.6"
      )
      .fromTo(textElement.querySelector('a'),
        { 
          opacity: 0, 
          y: 20
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6, 
          ease: "power2.out" 
        }, 
        "-=0.4"
      )

      // Animación de parallax suave durante el scroll
      gsap.to(mapElement, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const coordinates = "-32.05899333456759, -64.54231007468178"
  const googleMapsUrl = `https://www.google.com/maps?q=${coordinates}&hl=es&z=15&output=embed`

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-16 px-4 md:px-8 relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(/images/blob1.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center min-h-screen pt-8 md:pt-20">
        
        {/* Título principal */}
        <div ref={titleRef} className="text-center mb-4 md:mb-8 px-4" style={{ marginTop: '40px' }}>
          <h2 className="text-3xl md:text-5xl font-bold font-playfair leading-tight" style={{ color: '#cc6535' }}>
            Nuestra Ubicación
          </h2>
        </div>

        {/* Mapa centrado sobre la forma circular */}
        <div ref={mapRef} className="relative z-10 mb-8 md:mb-32" 
             style={{ 
               marginTop: isDesktop ? '180px' : '120px' 
             }}>
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-white p-2 mx-auto">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-full"
              title="Ubicación Cabaña Cantares del Río"
            ></iframe>
          </div>
        </div>

        {/* Información bien debajo del círculo */}
        <div ref={textRef} className="w-full max-w-2xl space-y-4 md:space-y-6 px-4" 
             style={{ 
               marginTop: isDesktop ? '50px' : '60px' 
             }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h3 className="text-lg md:text-xl font-semibold font-josefin mb-2 md:mb-3" style={{ color: '#cc6535' }}>
                Dirección
              </h3>
              <p className="text-base md:text-lg font-nunito leading-relaxed" style={{ color: '#7a6c5f' }}>
                Las Acacias 10, X5196<br />
                Santa Rosa de Calamuchita, Córdoba
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h3 className="text-lg md:text-xl font-semibold font-josefin mb-2 md:mb-3" style={{ color: '#cc6535' }}>
                Proximidad
              </h3>
              <p className="text-base md:text-lg font-nunito leading-relaxed" style={{ color: '#7a6c5f' }}>
                A solo 5 minutos del centro de<br />
                Santa Rosa de Calamuchita
              </p>
            </div>

          </div>

          {/* Botón centrado */}
          <div className="text-center pt-4 md:pt-6">
            <a
              href={`https://www.google.com/maps?q=${coordinates}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold font-josefin py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
              style={{ backgroundColor: '#cc6535', color: '#7a6c5f' }}
            >
              <span>Abrir en Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}