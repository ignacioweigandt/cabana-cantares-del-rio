'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuRef.current || !menuItemsRef.current) return

    if (isOpen) {
      // Animación de apertura - cortina de arriba hacia abajo
      const tl = gsap.timeline()
      
      tl.set(menuRef.current, { display: 'flex' })
        .fromTo(menuRef.current, 
          { 
            clipPath: 'inset(0 0 100% 0)',
            opacity: 1
          }, 
          { 
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.8,
            ease: "power3.out"
          }
        )
        .fromTo(menuItemsRef.current.children,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
          },
          "-=0.3"
        )
    } else {
      // Animación de cierre - cortina hacia arriba
      const tl = gsap.timeline()
      
      tl.to(menuItemsRef.current.children,
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
          }
        )
        .to(menuRef.current,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.6,
            ease: "power3.in"
          },
          "-=0.1"
        )
        .set(menuRef.current, { display: 'none' })
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuItemClick = (sectionId: string) => {
    setIsOpen(false)
    // Scroll suave a la sección
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <>
      {/* Botón Menu */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 px-6 py-3 rounded-full font-semibold font-josefin text-base transition-all duration-300 hover:scale-105"
        style={{ 
          backgroundColor: '#cc6535',
          color: '#e4dbcd'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#7997ff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#cc6535'
        }}
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Overlay del menú */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden items-center justify-center"
        style={{ backgroundColor: '#7997ff' }}
      >
        <div ref={menuItemsRef} className="text-center space-y-8">
          
          {/* La Cabaña */}
          <div>
            <button 
              onClick={() => handleMenuItemClick('home')}
              className="block text-5xl md:text-7xl font-bold font-playfair transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              la cabaña
            </button>
          </div>

          {/* Galería */}
          <div>
            <button 
              onClick={() => handleMenuItemClick('gallery')}
              className="block text-5xl md:text-7xl font-bold font-playfair transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              galería
            </button>
          </div>

          {/* Comodidades */}
          <div>
            <button 
              onClick={() => handleMenuItemClick('amenities')}
              className="block text-5xl md:text-7xl font-bold font-playfair transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              comodidades
            </button>
          </div>

          {/* Ubicación */}
          <div>
            <button 
              onClick={() => handleMenuItemClick('location')}
              className="block text-5xl md:text-7xl font-bold font-playfair transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              ubicación
            </button>
          </div>

          {/* Enlaces inferiores */}
          <div className="pt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <button 
              onClick={() => handleMenuItemClick('contact')}
              className="text-2xl md:text-3xl font-semibold font-josefin transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              contacto
            </button>
            <a
              href="https://wa.me/5493546407726"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-2xl md:text-3xl font-semibold font-josefin transition-all duration-300 hover:scale-105 hover:opacity-80"
              style={{ color: '#e4dbcd' }}
            >
              whatsapp
            </a>
          </div>

        </div>
      </div>
    </>
  )
}