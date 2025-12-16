import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  baseTextColor?: string;
  highlightWords?: string[];
  highlightColor?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  baseTextColor = "#000000",
  highlightWords = [],
  highlightColor = "#007bff"
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    
    // Función para verificar si una palabra está en las palabras destacadas
    const isHighlightWord = (word: string, position: number, words: string[]) => {
      for (const phrase of highlightWords) {
        const phraseWords = phrase.split(' ');
        const startIndex = position;
        const endIndex = startIndex + phraseWords.length * 2 - 1; // *2 porque incluimos espacios
        
        if (endIndex < words.length) {
          const wordSequence = words.slice(startIndex, endIndex + 1).join('');
          if (wordSequence.trim() === phrase.trim()) {
            return phraseWords.length;
          }
        }
      }
      return 0;
    };
    
    const words = text.split(/(\s+)/);
    const result: (string | JSX.Element)[] = [];
    let i = 0;
    
    while (i < words.length) {
      const word = words[i];
      
      if (word.match(/^\s+$/)) {
        result.push(word);
        i++;
        continue;
      }
      
      const highlightLength = isHighlightWord(word, i, words);
      
      if (highlightLength > 0) {
        // Crear un span destacado para la frase completa
        const phraseElements: (string | JSX.Element)[] = [];
        const endIndex = i + highlightLength * 2 - 1;
        
        for (let j = i; j <= endIndex && j < words.length; j++) {
          if (words[j].match(/^\s+$/)) {
            phraseElements.push(words[j]);
          } else {
            phraseElements.push(
              <span className="word" key={j} style={{ color: highlightColor }}>
                {words[j]}
              </span>
            );
          }
        }
        
        result.push(...phraseElements);
        i = endIndex + 1;
      } else {
        result.push(
          <span className="word" key={i} style={{ color: baseTextColor }}>
            {word}
          </span>
        );
        i++;
      }
    }
    
    return result;
  }, [children, highlightWords, highlightColor, baseTextColor]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // ScrollTrigger principal con pinning
    const mainTrigger = ScrollTrigger.create({
      trigger: el.parentElement, // Pin el contenedor padre (la sección)
      scroller,
      start: "top top", // Pin cuando la sección llega a la parte superior
      end: "+=300%", // Área extendida para el efecto completo
      pin: true, // Pin la sección
      pinSpacing: true,
      anticipatePin: 1,
    });

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el.parentElement,
          scroller,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el.parentElement,
          scroller,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: el.parentElement,
            scroller,
            start: 'bottom bottom',
            end: '+=300%',
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;