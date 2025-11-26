import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
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

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
      }
    )

    const charElements = el.querySelectorAll('.char')

    gsap.fromTo(
      charElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=10%',
          end: 'bottom center',
          scrub: 1,
        },
      }
    )

    if (enableBlur) {
      gsap.fromTo(
        charElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=10%',
            end: 'bottom center',
            scrub: 1,
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [enableBlur, baseRotation, baseOpacity, blurStrength])

  return (
    <Component ref={containerRef} className={className} style={style}>
      {splitText}
    </Component>
  )
}

export default ScrollReveal
