'use client'

import { useEffect, useRef } from 'react'
import { splitTextReveal } from '@/lib/gsap'

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
}

export default function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      splitTextReveal(textRef.current, delay)
    }
  }, [delay])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}