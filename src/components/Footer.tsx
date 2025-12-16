'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const contentElement = contentRef.current

    if (contentElement) {
      // Animación de entrada para el contenido del footer
      gsap.fromTo(contentElement,
        { 
          opacity: 0, 
          y: 30
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1.0, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <footer 
        ref={footerRef} 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/wave-haikei.svg)',
          minHeight: '400px'
        }}
      >
    </footer>
    
    {/* Sección azul completa con todo el contenido del footer */}
    <div 
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: '#7997ff' }}
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Información principal */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-playfair mb-4 text-white">
              Cabaña Cantares del Río
            </h3>
            <p className="text-base font-nunito leading-relaxed text-blue-100 mb-4">
              Un refugio de tranquilidad junto al río en Santa Rosa de Calamuchita, Córdoba. 
              Desconectá de la rutina y reconectá con la naturaleza en un entorno único y relajante.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-sm font-nunito text-blue-100">
                Las Acacias 10, Santa Rosa de Calamuchita, Córdoba
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
              </svg>
              <span className="text-sm font-nunito text-blue-100">
                +54 9 5346 40 7726
              </span>
            </div>
          </div>

          {/* Servicios y comodidades */}
          <div>
            <h4 className="text-lg font-semibold font-josefin mb-4 text-white">
              Comodidades
            </h4>
            <ul className="space-y-2">
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Vista al río
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Cocina equipada
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Parrilla exterior
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Wi-Fi gratuito
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Estacionamiento
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Aire acondicionado
              </li>
            </ul>
          </div>

          {/* Actividades */}
          <div>
            <h4 className="text-lg font-semibold font-josefin mb-4 text-white">
              Actividades Cercanas
            </h4>
            <ul className="space-y-2">
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Senderismo
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Pesca deportiva
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Avistamiento de aves
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Turismo aventura
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Balnearios
              </li>
              <li className="text-sm font-nunito text-blue-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Centro de la ciudad
              </li>
            </ul>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-blue-300/30 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            
            {/* Copyright */}
            <div className="text-base font-nunito text-blue-100 text-center md:text-left">
              © 2024 Cabaña Cantares del Río. Todos los derechos reservados.
            </div>

            {/* Quick contact */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5493546407726"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
                </svg>
                <span className="text-base font-medium text-white">
                  Consultar ahora
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}