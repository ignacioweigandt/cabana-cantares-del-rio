'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cloudRef = useRef<SVGElement>(null)
  const mountainRef = useRef<SVGElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const items = sectionRef.current.querySelectorAll('.amenity-item')

    // Animación de los elementos de texto
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animación de nubes controlada por scroll - izquierda a derecha (MÁS NOTORIO)
    const cloudsRight = sectionRef.current.querySelectorAll('.cloud-right')
    cloudsRight.forEach((cloud, index) => {
      gsap.fromTo(cloud, 
        { x: -150, y: -20, rotation: -15, scale: 0.8, opacity: 0.2 },
        {
          x: 200,
          y: (index + 1) * 40,
          rotation: 15,
          scale: 1.3,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5 + index * 0.2, // Scrub más rápido para mayor dinamismo
          }
        }
      )
    })

    // Animación de nubes controlada por scroll - derecha a izquierda (MÁS NOTORIO)
    const cloudsLeft = sectionRef.current.querySelectorAll('.cloud-left')
    cloudsLeft.forEach((cloud, index) => {
      gsap.fromTo(cloud, 
        { x: 150, y: -30, rotation: 15, scale: 0.7, opacity: 0.15 },
        {
          x: -200,
          y: (index + 1) * 50,
          rotation: -20,
          scale: 1.4,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8 + index * 0.3, // Scrub más dinámico
          }
        }
      )
    })

    // Animación de montañas controlada por scroll (MÁS DRAMÁTICO)
    const mountains = sectionRef.current.querySelectorAll('.mountain')
    mountains.forEach((mountain, index) => {
      gsap.fromTo(mountain,
        { y: -50, rotation: -10, scale: 0.8, opacity: 0.1 },
        {
          y: 60,
          rotation: 10,
          scale: 1.25,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3 + index * 0.15, // Scrub más responsivo
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const amenities = [
    {
      title: "Cocina completa",
      description: "equipada con heladera, microondas, horno y vajilla",
      icon: "🍽️"
    },
    {
      title: "Cochera privada y asador", 
      description: "para que disfrutes de un buen asado al aire libre",
      icon: "🔥"
    },
    {
      title: "Confort en todo el año",
      description: "con calefacción y aire acondicionado en la habitación principal",
      icon: "❄️"
    },
    {
      title: "Conexión y entretenimiento",
      description: "gracias al WiFi y la TV por cable",
      icon: "📺"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-cabana-background py-16 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        {/* SVG completo - Izquierda */}
        <div className="absolute -left-24 md:-left-32 top-48 md:top-64 w-32 h-32 md:w-40 md:h-40 opacity-40">
          <svg 
            className="w-full h-full mountain"
            fill="#cc6535" 
            viewBox="0 0 512 512"
          >
            <path d="M510.158,313.292L363.749,100.604c-1.815-3.09-5.164-5.169-9.006-5.169c-3.649,0-6.859,1.874-8.727,4.709l-77.663,99.009 l-35.436-35.436c-4.081-4.079-10.696-4.079-14.778,0l-49.974,49.974c-17.641-16.049-39.728-25.611-63.675-25.611 C46.873,188.081,0,243.392,0,311.379c0,63.826,41.312,116.478,94.041,122.682v57.041H80.457c-5.77,0-10.449,4.678-10.449,10.449 S74.687,512,80.457,512h342.815c5.77,0,10.449-4.678,10.449-10.449s-4.679-10.449-10.449-10.449H114.939v-57.041 c25.251-2.972,47.879-16.598,64.61-36.999h322.002c5.77,0,10.449-4.679,10.449-10.449v-67.397 C512,317.1,511.357,315.035,510.158,313.292z M344.294,136.2v62.329c0,1.763,0.446,3.497,1.297,5.042l21.866,39.698 l-14.127,40.859l-70.091-70.092L344.294,136.2z M114.939,412.979v-44.68l30.027-30.028c4.08-4.081,4.08-10.697,0-14.777 c-4.081-4.08-10.696-4.079-14.778,0l-15.249,15.251v-33.287c0-5.771-4.679-10.449-10.449-10.449s-10.449,4.678-10.449,10.449 v33.287l-3.387-3.388c-4.08-4.079-10.695-4.079-14.778,0c-4.08,4.08-4.08,10.696,0,14.778L94.041,368.3v44.68 c-41.179-6.319-73.143-49.472-73.143-101.601c0-56.464,37.499-102.4,83.592-102.4s83.592,45.936,83.592,102.4 C188.082,363.508,156.118,406.662,114.939,412.979z M193.353,376.164c9.9-18.837,15.626-41.036,15.626-64.786 c0-31.571-10.113-60.403-26.709-82.238l32.814-32.814v32.646c0,2.719,1.061,5.331,2.954,7.281l40.684,41.877l-35.882,49.423 c-1.866,2.57-2.462,5.851-1.619,8.913l10.933,39.698H193.353z M253.831,376.164L253.831,376.164l-11.125-40.401l38.094-52.468 c2.985-4.112,2.581-9.774-0.96-13.42l-43.855-45.143v-28.394L415.81,376.164H253.831z M491.102,376.164h-45.737l-75.604-75.604 l18.964-54.851c0.967-2.794,0.703-5.866-0.723-8.456l-22.81-41.41v-56.288l125.91,182.909V376.164z"/>
            {/* Nube animada - derecha a izquierda */}
            <g className="cloud-left">
              <path fill="#7997ff" d="M181.871,37.486C170.113,14.791,146.234,0,120.268,0S70.426,14.789,58.669,37.486 C26.188,38.291,0.015,64.955,0.015,97.615c0,5.77,4.678,10.449,10.449,10.449h219.61c5.771,0,10.449-4.679,10.449-10.449 C240.523,64.955,214.351,38.292,181.871,37.486z M22.324,87.166c4.589-16.587,19.824-28.802,37.86-28.802 c1.318,0,2.686,0.071,4.071,0.21c4.691,0.464,9.122-2.255,10.807-6.659c7.104-18.552,25.27-31.018,45.205-31.018 s38.104,12.466,45.21,31.019c1.686,4.404,6.105,7.13,10.808,6.659c1.382-0.139,2.751-0.21,4.068-0.21 c18.036,0,33.271,12.214,37.859,28.801H22.324z"/>
            </g>
          </svg>
        </div>

        {/* SVG completo - Derecha superior */}
        <div className="absolute -right-16 top-16 w-28 h-28 md:w-36 md:h-36 opacity-35">
          <svg 
            className="w-full h-full mountain"
            fill="#cc6535" 
            viewBox="0 0 512 512"
          >
            <path d="M510.158,313.292L363.749,100.604c-1.815-3.09-5.164-5.169-9.006-5.169c-3.649,0-6.859,1.874-8.727,4.709l-77.663,99.009 l-35.436-35.436c-4.081-4.079-10.696-4.079-14.778,0l-49.974,49.974c-17.641-16.049-39.728-25.611-63.675-25.611 C46.873,188.081,0,243.392,0,311.379c0,63.826,41.312,116.478,94.041,122.682v57.041H80.457c-5.77,0-10.449,4.678-10.449,10.449 S74.687,512,80.457,512h342.815c5.77,0,10.449-4.678,10.449-10.449s-4.679-10.449-10.449-10.449H114.939v-57.041 c25.251-2.972,47.879-16.598,64.61-36.999h322.002c5.77,0,10.449-4.679,10.449-10.449v-67.397 C512,317.1,511.357,315.035,510.158,313.292z M344.294,136.2v62.329c0,1.763,0.446,3.497,1.297,5.042l21.866,39.698 l-14.127,40.859l-70.091-70.092L344.294,136.2z M114.939,412.979v-44.68l30.027-30.028c4.08-4.081,4.08-10.697,0-14.777 c-4.081-4.08-10.696-4.079-14.778,0l-15.249,15.251v-33.287c0-5.771-4.679-10.449-10.449-10.449s-10.449,4.678-10.449,10.449 v33.287l-3.387-3.388c-4.08-4.079-10.695-4.079-14.778,0c-4.08,4.08-4.08,10.696,0,14.778L94.041,368.3v44.68 c-41.179-6.319-73.143-49.472-73.143-101.601c0-56.464,37.499-102.4,83.592-102.4s83.592,45.936,83.592,102.4 C188.082,363.508,156.118,406.662,114.939,412.979z M193.353,376.164c9.9-18.837,15.626-41.036,15.626-64.786 c0-31.571-10.113-60.403-26.709-82.238l32.814-32.814v32.646c0,2.719,1.061,5.331,2.954,7.281l40.684,41.877l-35.882,49.423 c-1.866,2.57-2.462,5.851-1.619,8.913l10.933,39.698H193.353z M253.831,376.164L253.831,376.164l-11.125-40.401l38.094-52.468 c2.985-4.112,2.581-9.774-0.96-13.42l-43.855-45.143v-28.394L415.81,376.164H253.831z M491.102,376.164h-45.737l-75.604-75.604 l18.964-54.851c0.967-2.794,0.703-5.866-0.723-8.456l-22.81-41.41v-56.288l125.91,182.909V376.164z"/>
            {/* Nube animada - izquierda a derecha */}
            <g className="cloud-right">
              <path fill="#7997ff" d="M181.871,37.486C170.113,14.791,146.234,0,120.268,0S70.426,14.789,58.669,37.486 C26.188,38.291,0.015,64.955,0.015,97.615c0,5.77,4.678,10.449,10.449,10.449h219.61c5.771,0,10.449-4.679,10.449-10.449 C240.523,64.955,214.351,38.292,181.871,37.486z M22.324,87.166c4.589-16.587,19.824-28.802,37.86-28.802 c1.318,0,2.686,0.071,4.071,0.21c4.691,0.464,9.122-2.255,10.807-6.659c7.104-18.552,25.27-31.018,45.205-31.018 s38.104,12.466,45.21,31.019c1.686,4.404,6.105,7.13,10.808,6.659c1.382-0.139,2.751-0.21,4.068-0.21 c18.036,0,33.271,12.214,37.859,28.801H22.324z"/>
            </g>
          </svg>
        </div>

        {/* SVG completo - Derecha inferior */}
        <div className="absolute -right-12 bottom-32 w-24 h-24 md:w-32 md:h-32 opacity-30">
          <svg 
            className="w-full h-full mountain"
            fill="#cc6535" 
            viewBox="0 0 512 512"
          >
            <path d="M510.158,313.292L363.749,100.604c-1.815-3.09-5.164-5.169-9.006-5.169c-3.649,0-6.859,1.874-8.727,4.709l-77.663,99.009 l-35.436-35.436c-4.081-4.079-10.696-4.079-14.778,0l-49.974,49.974c-17.641-16.049-39.728-25.611-63.675-25.611 C46.873,188.081,0,243.392,0,311.379c0,63.826,41.312,116.478,94.041,122.682v57.041H80.457c-5.77,0-10.449,4.678-10.449,10.449 S74.687,512,80.457,512h342.815c5.77,0,10.449-4.678,10.449-10.449s-4.679-10.449-10.449-10.449H114.939v-57.041 c25.251-2.972,47.879-16.598,64.61-36.999h322.002c5.77,0,10.449-4.679,10.449-10.449v-67.397 C512,317.1,511.357,315.035,510.158,313.292z M344.294,136.2v62.329c0,1.763,0.446,3.497,1.297,5.042l21.866,39.698 l-14.127,40.859l-70.091-70.092L344.294,136.2z M114.939,412.979v-44.68l30.027-30.028c4.08-4.081,4.08-10.697,0-14.777 c-4.081-4.08-10.696-4.079-14.778,0l-15.249,15.251v-33.287c0-5.771-4.679-10.449-10.449-10.449s-10.449,4.678-10.449,10.449 v33.287l-3.387-3.388c-4.08-4.079-10.695-4.079-14.778,0c-4.08,4.08-4.08,10.696,0,14.778L94.041,368.3v44.68 c-41.179-6.319-73.143-49.472-73.143-101.601c0-56.464,37.499-102.4,83.592-102.4s83.592,45.936,83.592,102.4 C188.082,363.508,156.118,406.662,114.939,412.979z M193.353,376.164c9.9-18.837,15.626-41.036,15.626-64.786 c0-31.571-10.113-60.403-26.709-82.238l32.814-32.814v32.646c0,2.719,1.061,5.331,2.954,7.281l40.684,41.877l-35.882,49.423 c-1.866,2.57-2.462,5.851-1.619,8.913l10.933,39.698H193.353z M253.831,376.164L253.831,376.164l-11.125-40.401l38.094-52.468 c2.985-4.112,2.581-9.774-0.96-13.42l-43.855-45.143v-28.394L415.81,376.164H253.831z M491.102,376.164h-45.737l-75.604-75.604 l18.964-54.851c0.967-2.794,0.703-5.866-0.723-8.456l-22.81-41.41v-56.288l125.91,182.909V376.164z"/>
            {/* Nube animada - izquierda a derecha */}
            <g className="cloud-right">
              <path fill="#7997ff" d="M181.871,37.486C170.113,14.791,146.234,0,120.268,0S70.426,14.789,58.669,37.486 C26.188,38.291,0.015,64.955,0.015,97.615c0,5.77,4.678,10.449,10.449,10.449h219.61c5.771,0,10.449-4.679,10.449-10.449 C240.523,64.955,214.351,38.292,181.871,37.486z M22.324,87.166c4.589-16.587,19.824-28.802,37.86-28.802 c1.318,0,2.686,0.071,4.071,0.21c4.691,0.464,9.122-2.255,10.807-6.659c7.104-18.552,25.27-31.018,45.205-31.018 s38.104,12.466,45.21,31.019c1.686,4.404,6.105,7.13,10.808,6.659c1.382-0.139,2.751-0.21,4.068-0.21 c18.036,0,33.271,12.214,37.859,28.801H22.324z"/>
            </g>
          </svg>
        </div>

        {/* Lista vertical de amenidades */}
        <div className="space-y-12 py-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              {/* Línea horizontal separadora */}
              <div className="border-t-2 border-cabana-secondary mb-8"></div>
              
              {/* Contenido centrado */}
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold font-josefin mb-3" style={{ color: '#cc6535' }}>
                  {amenity.title}
                </h3>
                <p className="text-lg md:text-xl font-josefin leading-relaxed" style={{ color: '#cc6535' }}>
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Línea final */}
          <div className="border-t-2 border-cabana-secondary"></div>
        </div>
      </div>
    </section>
  )
}