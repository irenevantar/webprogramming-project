import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  className = '',
  style = {},
  as: Component = 'div',
}) => {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split('').map((char, index) => {
      if (char === ' ') return ' '
      return (
        <span className="char" key={index} style={{ display: 'inline-block' }}>
          {char}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const charElements = el.querySelectorAll('.char')
    const hasChars = charElements.length > 0
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: '+=150', // Faster animation (shorter scroll distance)
        scrub: 1,
      }
    })

    // Container rotation
    tl.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      { rotate: 0, ease: 'none', duration: 1 },
      0
    )

    if (hasChars) {
      // Char opacity
      tl.fromTo(
        charElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        { opacity: 1, stagger: 0.02, ease: 'none', duration: 1 },
        0
      )

      // Char blur
      if (enableBlur) {
        tl.fromTo(
          charElements,
          { filter: `blur(${blurStrength}px)` },
          { filter: 'blur(0px)', stagger: 0.02, ease: 'none', duration: 1 },
          0
        )
      }
    } else {
      // Fallback for non-text content: animate container opacity/blur
      tl.fromTo(
        el,
        { opacity: baseOpacity, filter: enableBlur ? `blur(${blurStrength}px)` : 'none' },
        { opacity: 1, filter: 'blur(0px)', ease: 'none', duration: 1 },
        0
      )
    }

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [enableBlur, baseRotation, baseOpacity, blurStrength])

  return (
    <Component ref={containerRef} className={className} style={style}>
      {typeof children === 'string' ? splitText : children}
    </Component>
  )
}

export default ScrollReveal
