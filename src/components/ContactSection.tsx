'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  })

  useEffect(() => {
    if (!sectionRef.current) return

    // Animaciones de entrada para los elementos
    const titleElement = titleRef.current
    const formElement = formRef.current

    if (titleElement && formElement) {
      // Timeline para animación de entrada
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      })

      // Animación del título
      tl.fromTo(titleElement,
        { 
          opacity: 0, 
          y: -40,
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
      // Animación del formulario
      .fromTo(formElement,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.0, 
          ease: "power2.out" 
        }, 
        "-=0.6"
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear mensaje para WhatsApp
    const message = `¡Hola! Me interesa consultar por disponibilidad en Cabaña Cantares del Río:

*Datos del huésped:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

*Detalles de la reserva:*
• Fecha de entrada: ${formData.checkIn}
• Fecha de salida: ${formData.checkOut}
• Cantidad de huéspedes: ${formData.guests}

*Consulta adicional:*
${formData.message || 'Sin consultas adicionales'}

¡Espero su respuesta! Gracias.`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Número de WhatsApp 
    const phoneNumber = "5493546407726" // Formato internacional sin +
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section 
      ref={sectionRef}
      className="py-12 px-4 md:px-8 relative"
      style={{ backgroundColor: '#e4dbcd' }}
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Título principal */}
        <div ref={titleRef} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair leading-tight mb-3" style={{ color: '#cc6535' }}>
            Consultar Disponibilidad
          </h2>
          <p className="text-base md:text-lg font-nunito leading-relaxed max-w-xl mx-auto mb-4" style={{ color: '#7a6c5f' }}>
            Envíanos tu consulta y nos comunicaremos contigo por WhatsApp para confirmar disponibilidad.
          </p>
          
          {/* Información de contacto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#cc6535' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
              </svg>
              <span className="font-medium font-josefin text-sm" style={{ color: '#7a6c5f' }}>
                +54 9 5346 40 7726
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#cc6535' }}>
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
              <span className="font-medium font-josefin text-sm" style={{ color: '#7a6c5f' }}>
                Respuesta en 24hs
              </span>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/40 shadow-xl">
            
            {/* Información personal */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold font-josefin mb-4" style={{ color: '#cc6535' }}>
                Información Personal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      color: '#7a6c5f'
                    }}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      color: '#7a6c5f'
                    }}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      color: '#7a6c5f'
                    }}
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </div>
            </div>

            {/* Detalles de la estadía */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold font-josefin mb-4" style={{ color: '#cc6535' }}>
                Detalles de la Estadía
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Fecha de entrada *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      color: '#7a6c5f'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Fecha de salida *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      color: '#7a6c5f'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                    Huéspedes
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      color: '#7a6c5f'
                    }}
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6+ personas</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium font-josefin mb-1.5" style={{ color: '#7a6c5f' }}>
                Consulta adicional (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm font-nunito focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                style={{ 
                  color: '#7a6c5f'
                }}
                placeholder="¿Tienes alguna pregunta específica o requerimiento especial?"
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-semibold font-josefin py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base"
                style={{ 
                  backgroundColor: '#cc6535', 
                  color: '#e4dbcd'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
                </svg>
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
            
          </div>
        </form>

      </div>
    </section>
  )
}