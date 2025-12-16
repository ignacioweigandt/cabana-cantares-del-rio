# 📋 TodoList - Landing Page Cabaña Cantares del Río

## ✅ TAREAS COMPLETADAS

### 🚀 1. Setup Inicial (COMPLETADO)
- [x] Configurar Next.js 14 con TypeScript
- [x] Instalar y configurar GSAP con ScrollTrigger y SplitText
- [x] Configurar Tailwind CSS
- [x] Resolver problemas de configuración GSAP (infinite recursion)
- [x] Crear estructura inicial del proyecto

### 🎨 2. Configuración de Diseño (COMPLETADO)
- [x] Implementar paleta de colores:
  - [x] Color de fondo: #e5dccd (beige)
  - [x] Color principal: #cc6535
  - [x] Color destacado: #7997ff
  - [x] Color secundario: #8e7765
- [x] Integrar Google Fonts (Josefin Sans, Neuton, Nunito, Playfair Display)
- [x] Configurar fuentes en Tailwind config
- [x] Crear variables CSS globales

### 🏠 3. Sección Hero (COMPLETADO)
- [x] Crear componente Hero con imagen y logo
- [x] Implementar animación de cortina de carga (#cc6535)
- [x] Resolver problemas de carga de imágenes:
  - [x] Corregir nombres con espacios ("1 .webp")
  - [x] Arreglar estructura de carpetas (public/images)
  - [x] Cambiar a etiquetas <img> regulares por compatibilidad
- [x] Implementar diseño responsive con CSS-in-JS
- [x] Mitad izquierda: imagen principal
- [x] Mitad derecha: logo centrado

### 📝 4. Sección Texto Progresivo (COMPLETADO)
- [x] Crear ProgressiveTextSection con tres líneas
- [x] Texto: "Un lugar para compartir momentos únicos frente al río"
- [x] Implementar scroll-driven animation con pinning
- [x] Configurar scroll lock al final de la sección
- [x] Animación secuencial de revelado de texto
- [x] Cambio de color de línea del medio a #7997ff
- [x] Optimizar velocidad de animación
- [x] Ajustar responsive: móvil centrado, desktop superior

### 🖼️ 5. Galería de Imágenes (COMPLETADO)
- [x] Crear ImageGallery con carrusel animado
- [x] Usar imágenes del 2 al 9 (eliminar imagen 8)
- [x] Implementar scroll-driven carousel con pin
- [x] Corregir nombres de archivos ("3 .webp", "4 .webp")
- [x] Comportamiento diferenciado:
  - [x] Desktop: 4 imágenes visibles, carrusel horizontal
  - [x] Móvil: 1 imagen centrada, slideshow secuencial
- [x] Ajustar tamaños responsive
- [x] Optimizar timing entre imágenes (1.2s móvil, 0.3s desktop)
- [x] Mejorar fluidez de animaciones

### 🌟 6. Sección ScrollReveal Avanzado (COMPLETADO)
- [x] Crear CabinDescriptionSection con ScrollReveal
- [x] Implementar efecto de blur y rotación controlado por scroll
- [x] Texto optimizado sobre características de la cabaña
- [x] Configurar colores específicos:
  - [x] Texto base: #cc6535
  - [x] Palabras destacadas en #7997ff: "4 personas", "planta alta", "cómoda cama matrimonial", "dos camas individuales"
- [x] Implementar scroll-pinning para control total
- [x] Ajustar posicionamiento responsive
- [x] Sincronizar animaciones (rotación, opacity, blur)

### 🏔️ 7. Sección Amenidades con SVG (COMPLETADO)
- [x] Crear AmenitiesSection con información de servicios
- [x] Integrar mountain-river.svg con animaciones
- [x] Distribuir 3 SVGs: 1 izquierda, 2 derecha
- [x] Implementar animaciones de nubes:
  - [x] Izquierda: movimiento derecha a izquierda
  - [x] Derecha: movimiento izquierda a derecha
- [x] Configurar scroll-driven animations con scrub
- [x] Layout vertical con líneas separadoras
- [x] Información incluida:
  - [x] Cocina completa equipada
  - [x] Cochera privada y asador
  - [x] Confort todo el año (calefacción/AC)
  - [x] Conexión WiFi y TV cable
- [x] Diseño centrado, color uniforme #cc6535
- [x] Eliminar elementos decorativos innecesarios
- [x] Fuente Josefin Sans aplicada

---

---

## 📸 2. Sección Galería y Contenido

### 📝 Componentes a crear:
- [ ] **ImageTextSection** (componente reutilizable)
  - [ ] Variante imagen-izquierda / texto-derecha
  - [ ] Variante texto-izquierda / imagen-derecha
  - [ ] Soporte para múltiples párrafos
  - [ ] Integración con Next.js Image component

### 🏞️ Secciones de contenido:
- [ ] **"La Experiencia"** - Descripción general de la cabaña
- [ ] **"Comodidades"** - Amenidades y servicios
- [ ] **"Actividades"** - Qué hacer en el lugar
- [ ] **"El Entorno"** - Descripción del entorno natural

### 🎬 Animaciones:
- [ ] ScrollTrigger para cada sección
- [ ] Animación de entrada de imágenes (slideIn)
- [ ] Animación de texto (fadeInUp)
- [ ] Efecto parallax leve en imágenes

### 🖼️ Assets necesarios:
- [ ] Crear directorio `public/images/`
- [ ] Conseguir/crear imágenes de la cabaña
- [ ] Optimizar imágenes para web
- [ ] Crear versiones responsive

---

## 🗺️ 3. Sección Mapa

### 📝 Componentes:
- [ ] **MapSection** 
  - [ ] Integrar Google Maps o Mapbox
  - [ ] Marcador personalizado para la ubicación
  - [ ] Información de ubicación al lado del mapa
  - [ ] Direcciones y cómo llegar

### 🎬 Animaciones:
- [ ] Animación de entrada del contenedor del mapa
- [ ] Animación de la información de ubicación
- [ ] Efecto hover en el marcador

### 📱 Responsive:
- [ ] Layout stack en móviles (mapa arriba, info abajo)
- [ ] Ajustar altura del mapa para móviles

---

## 📞 4. Sección Contacto

### 📝 Componentes:
- [ ] **ContactSection**
  - [ ] Formulario de contacto funcional
  - [ ] Campos: Nombre, Email, Teléfono, Mensaje
  - [ ] Validaciones en tiempo real
  - [ ] Estado de envío (loading, success, error)

### 📋 Información de contacto:
- [ ] Teléfono con link directo para llamar
- [ ] Email con mailto
- [ ] Enlaces a redes sociales
- [ ] Horarios de atención

### 🎬 Animaciones:
- [ ] Animación de entrada de los elementos del formulario
- [ ] Efectos de focus en inputs
- [ ] Animación de confirmación de envío

### ⚡ Funcionalidad:
- [ ] Configurar endpoint para envío de emails
- [ ] Implementar validaciones
- [ ] Manejo de errores

---

## 🦶 5. Footer

### 📝 Componentes:
- [ ] **Footer**
  - [ ] Links útiles (Inicio, Galería, Ubicación, Contacto)
  - [ ] Información legal (términos, privacidad)
  - [ ] Redes sociales
  - [ ] Copyright

### 🎨 Diseño:
- [ ] Layout multi-columna
- [ ] Versión móvil stack
- [ ] Iconos de redes sociales
- [ ] Colores y tipografía consistentes

---

## 🛠️ 6. Optimizaciones y Mejoras

### 🚀 Rendimiento:
- [ ] Implementar lazy loading para imágenes
- [ ] Optimizar animaciones GSAP
- [ ] Minimizar bundle size
- [ ] Implementar preloading de imágenes críticas

### 🔍 SEO:
- [ ] Meta tags apropiados
- [ ] Open Graph tags
- [ ] Structured data
- [ ] Optimizar títulos y descripciones

### ♿ Accesibilidad:
- [ ] Alt texts para imágenes
- [ ] Navegación por teclado
- [ ] Contraste de colores
- [ ] ARIA labels

### 📱 Responsive:
- [ ] Testing en diferentes dispositivos
- [ ] Optimizar para tablets
- [ ] Performance en móviles

---

## 🎨 7. Refinamientos Visuales

### 🎨 Sistema de diseño:
- [ ] Definir paleta de colores
- [ ] Establecer tipografías
- [ ] Crear tokens de espaciado
- [ ] Documentar componentes

### 🎬 Animaciones avanzadas:
- [ ] Cursor personalizado
- [ ] Scroll indicators
- [ ] Loading animations
- [ ] Micro-interactions

---

## 📚 8. Documentación y Mantenimiento

### 📖 Documentación:
- [ ] Actualizar CLAUDE.md con nueva arquitectura
- [ ] Documentar componentes creados
- [ ] Crear guía de uso de animaciones
- [ ] README con instrucciones de desarrollo

### 🧪 Testing:
- [ ] Testing básico de componentes
- [ ] Testing responsive
- [ ] Testing de formularios
- [ ] Testing de rendimiento

---

## 🚀 Orden de Implementación Sugerido:

1. **Hero Section** - Base visual de la página
2. **ImageTextSection + contenido** - Corazón informativo  
3. **Footer** - Navegación y información básica
4. **Contacto** - Funcionalidad de comunicación
5. **Mapa** - Información de ubicación
6. **Optimizaciones** - Performance y SEO
7. **Refinamientos** - Pulido final

---

## 📝 Notas de Desarrollo:

- Usar componentes modulares y reutilizables
- Mantener consistencia en animaciones GSAP
- Priorizar rendimiento en móviles
- Testear en diferentes navegadores
- Documentar decisiones de diseño importantes