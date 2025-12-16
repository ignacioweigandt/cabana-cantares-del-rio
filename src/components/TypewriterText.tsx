'use client'

import { useEffect, useRef } from 'react'
import { typewriterLoop } from '@/lib/gsap'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export default function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      typewriterLoop(textRef.current, text, delay)
    }

    // Cleanup al desmontar
    return () => {
      if (textRef.current) {
        textRef.current.textContent = ''
      }
    }
  }, [text, delay])

  return (
    <div ref={textRef} className={className}>
      {/* El texto se renderizará dinámicamente via GSAP */}
    </div>
  )
}