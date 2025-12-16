'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !curtainRef.current || !contentRef.current) return

    // Timeline para la animación de carga
    const tl = gsap.timeline()

    // El contenido está visible desde el inicio
    gsap.set(contentRef.current, { opacity: 1 })

    // Animación de cortina que se retira de abajo hacia arriba
    tl.to(curtainRef.current, {
      y: '-100%',
      duration: 1.2,
      ease: 'power3.inOut',
      delay: 0.5
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex overflow-hidden"
    >
      {/* Cortina de carga */}
      <div 
        ref={curtainRef}
        className="absolute inset-0 z-50"
        style={{ 
          backgroundColor: '#cc6536',
          transformOrigin: 'bottom',
          willChange: 'transform'
        }}
      />

      {/* Contenido del Hero */}
      <div ref={contentRef} className="hero-content flex w-full">
        {/* Mitad izquierda - Imagen principal */}
        <div className="hero-image w-1/2 relative">
          <img
            src="/images/cabana-main.webp"
            alt="Cabaña Cantares del Río"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mitad derecha - Logo centrado */}
        <div className="hero-logo w-1/2 bg-cabana-background flex items-end justify-center pb-8">
          <div className="relative">
            <img
              src="/images/logo.webp"
              alt="Logo Cantares del Río"
              className="logo-img object-contain w-[400px] h-[280px]"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop - ajustar imagen y logo al hero completo */
        .hero-content {
          height: 100vh;
        }
        
        .hero-image {
          height: 100vh;
          border-radius: 0 20px 20px 0;
          overflow: hidden;
        }
        
        .hero-logo {
          height: 100vh;
          align-items: flex-end !important;
          padding-bottom: 0rem !important;
        }
        
        .logo-img {
          max-width: 100%;
          max-height: 100%;
        }
        
        /* Móvil */
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
            height: 100vh !important;
          }
          
          .hero-image {
            width: 100% !important;
            height: 65vh !important;
            border-radius: 0 0 20px 20px !important;
            overflow: hidden !important;
          }
          
          .hero-logo {
            width: 100% !important;
            height: 35vh !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  )
}