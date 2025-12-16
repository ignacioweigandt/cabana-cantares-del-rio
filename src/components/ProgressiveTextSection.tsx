'use client'

import { useEffect, useRef } from 'react'
import { scrollLockedTextSequence, ScrollTrigger } from '@/lib/gsap'

export default function ProgressiveTextSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !line1Ref.current || !line2Ref.current || !line3Ref.current) return

    const lines = [line1Ref.current, line2Ref.current, line3Ref.current]
    
    scrollLockedTextSequence(containerRef.current, lines, 1) // índice 1 es la línea del medio

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
      className="min-h-screen flex items-center justify-center bg-cabana-background px-8"
    >
      <div className="text-center max-w-4xl">
        <div 
          ref={line1Ref}
          className="text-6xl md:text-8xl font-bold font-josefin mb-4 leading-tight"
          style={{ color: '#cc6536' }}
        >
          Un lugar para
        </div>
        
        <div 
          ref={line2Ref}
          className="text-6xl md:text-8xl font-bold font-josefin mb-4 leading-tight"
          style={{ color: '#cc6536' }}
        >
          compartir momentos únicos
        </div>
        
        <div 
          ref={line3Ref}
          className="text-6xl md:text-8xl font-bold font-josefin leading-tight"
          style={{ color: '#cc6536' }}
        >
          frente al río
        </div>
      </div>
    </section>
  )
}