'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  trigger?: string
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn'
  start?: string
  end?: string
}

export default function ScrollSection({ 
  children, 
  className = '',
  trigger,
  animation = 'fadeIn',
  start = 'top 80%',
  end = 'bottom 20%'
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current
    const triggerElement = trigger ? document.querySelector(trigger) : element

    let fromVars: gsap.TweenVars = {}
    let toVars: gsap.TweenVars = {}

    switch (animation) {
      case 'fadeIn':
        fromVars = { opacity: 0 }
        toVars = { opacity: 1, duration: 1 }
        break
      case 'slideUp':
        fromVars = { opacity: 0, y: 100 }
        toVars = { opacity: 1, y: 0, duration: 1 }
        break
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.8 }
        toVars = { opacity: 1, scale: 1, duration: 1 }
        break
    }

    gsap.fromTo(element, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [trigger, animation, start, end])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}