import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

// Export GSAP and plugins for use throughout the app
export { gsap, ScrollTrigger, SplitText }

// Utility function to initialize GSAP with common settings
export const initGSAP = () => {
  // Set default ease
  gsap.defaults({ ease: 'power2.out' })
  
  // Refresh ScrollTrigger on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
}

// Utility animations
export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      delay,
      ease: 'power3.out' 
    }
  )
}

export const staggerFadeIn = (elements: string | Element[], stagger = 0.1) => {
  return gsap.fromTo(elements,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger,
      ease: 'power2.out' 
    }
  )
}

export const splitTextReveal = (element: string | Element, delay = 0) => {
  const split = new SplitText(element, { type: 'chars,words' })
  
  return gsap.fromTo(split.chars,
    { opacity: 0, y: 100 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay,
      stagger: 0.02, 
      ease: 'power3.out' 
    }
  )
}

// Animación personalizada de cortina que se retira
export const curtainReveal = (curtainElement: Element, contentElement: Element) => {
  const tl = gsap.timeline()
  
  // Inicialmente ocultar el contenido
  gsap.set(contentElement, { opacity: 0 })
  
  // Cortina se retira de abajo hacia arriba
  tl.to(curtainElement, {
    y: '-100%',
    duration: 1.2,
    ease: 'power3.inOut',
    delay: 0.5
  })
  // Mostrar contenido
  .to(contentElement, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  
  return tl
}

// Efecto typewriter en bucle
export const typewriterLoop = (element: Element, text: string, delay = 0) => {
  const tl = gsap.timeline({ repeat: -1, delay })
  
  // Configurar el elemento
  const el = element as HTMLElement
  el.textContent = ''
  
  // Función para escribir texto
  const writeText = () => {
    for (let i = 0; i <= text.length; i++) {
      tl.to(el, {
        duration: 0.1,
        onComplete: function() {
          el.textContent = text.substring(0, i)
        }
      })
    }
  }
  
  // Función para borrar texto
  const deleteText = () => {
    for (let i = text.length; i >= 0; i--) {
      tl.to(el, {
        duration: 0.05,
        onComplete: function() {
          el.textContent = text.substring(0, i)
        }
      })
    }
  }
  
  // Secuencia: escribir -> pausa -> borrar -> pausa
  writeText()
  tl.to({}, { duration: 2 }) // pausa después de escribir
  deleteText()
  tl.to({}, { duration: 1 }) // pausa antes de repetir
  
  return tl
}

// Scroll-driven animation con scroll lock que inicia al final de la sección
export const scrollLockedTextSequence = (
  container: Element,
  lines: Element[],
  middleLineIndex: number = 1
) => {
  // Estado inicial - todas las líneas ocultas
  gsap.set(lines, { opacity: 0, y: 100 })
  
  // Timeline principal que se controla con scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "bottom bottom", // Inicia cuando el FINAL de la sección llega al final de la pantalla
      end: "+=100%", // Área más corta para scrubbing - menos scroll necesario
      scrub: 1, // Scrubbing: el scroll controla la animación
      pin: true, // PIN: "congela" la sección durante la animación
      pinSpacing: true, // Mantener espacio para scroll natural después
      anticipatePin: 1,
    }
  })
  
  // Paso 1: Revelar primera línea
  tl.to(lines[0], {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })
  
  // Paso 2: Revelar segunda línea  
  tl.to(lines[1], {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "+=0.2")
  
  // Paso 3: Revelar tercera línea
  tl.to(lines[2], {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "+=0.2")
  
  // Paso 4: Cambiar color de la línea del medio
  tl.to(lines[middleLineIndex], {
    color: '#7997ff',
    duration: 1,
    ease: "power2.inOut"
  }, "+=0.2")
  
  // Cuando el timeline termina, el pin se libera automáticamente
  // y el scroll continúa normalmente
  
  return tl
}

// Scroll-driven image carousel con efecto de carrusel y choque
export const scrollLockedImageCarousel = (
  container: Element,
  images: Element[]
) => {
  // Estado inicial - todas las imágenes fuera de pantalla
  gsap.set(images, { 
    opacity: 0, 
    y: 200,
    x: (i) => Math.random() * 400 - 200, // Posiciones aleatorias horizontales
    scale: 0.8,
    rotation: (i) => Math.random() * 20 - 10 // Rotación aleatoria inicial
  })
  
  // Timeline principal controlado por scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "bottom bottom", // Pin al final de la sección
      end: "+=200%", // Área más corta para mayor fluidez
      scrub: 0.5, // Scrub más sensible para mayor fluidez
      pin: true, // Pin la sección
      pinSpacing: true,
      anticipatePin: 1,
    }
  })
  
  // Configuración responsive
  const isMobile = window.innerWidth < 768
  const maxVisible = isMobile ? 1 : 4 // Móvil: 1 imagen, Desktop: 4 imágenes
  const imageWidth = isMobile ? 300 : 400 // Móvil: más grandes, Desktop: mucho más grandes
  
  images.forEach((image, index) => {
    const delay = isMobile ? index * 1.2 : index * 0.3 // Móvil: más tiempo para apreciar, Desktop: rápido
    
    if (isMobile) {
      // MÓVIL: Cada imagen aparece en el centro y luego se corre hacia la izquierda
      tl.to(image, {
        opacity: 1,
        y: 0,
        x: 0, // Aparece en el centro
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
      }, delay)
      
      // Si hay una imagen anterior, moverla hacia la izquierda y hacerla desaparecer
      if (index > 0) {
        const previousImage = images[index - 1]
        tl.to(previousImage, {
          x: -window.innerWidth / 2 - 150, // Sale por la izquierda
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power1.in",
        }, delay + 0.8) // Overlap más tardío para que se aprecie la imagen
      }
    } else {
      // DESKTOP: Comportamiento original (izquierda a derecha)
      tl.to(image, {
        opacity: 1,
        y: 0,
        x: index * imageWidth - (imageWidth * 1.5), // Centrado mejor para que no salga de pantalla
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
      }, delay)
      
      // Si hay más de 4 imágenes, empujar todas hacia la izquierda
      if (index >= maxVisible) {
        tl.to(images.slice(0, index + 1), {
          x: (i) => (i * imageWidth - (imageWidth * 1.5)) - (imageWidth * (index - maxVisible + 1)),
          duration: 0.6,
          ease: "power1.inOut",
        }, delay + 0.3)
        
        const exitingImage = images[index - maxVisible]
        if (exitingImage) {
          tl.to(exitingImage, {
            x: -window.innerWidth / 2 - 200,
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power1.in",
          }, delay + 0.3)
        }
      }
    }
  })
  
  return tl
}

