import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = ({ onScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
      if (onScroll) onScroll(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* YouTube Background Video */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/mWacdcatC9o?autoplay=1&mute=1&loop=1&playlist=mWacdcatC9o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
          title="Chainsaw Man Reze Arc Trailer"
          allow="autoplay; encrypted-media"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '177.77777778vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* 투명 오버레이로 YouTube UI 차단 및 클릭 시 링크 이동 */}
        <div
          onClick={() => window.open('https://www.youtube.com/watch?v=mWacdcatC9o', '_blank')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            pointerEvents: 'auto',
            zIndex: 1,
            cursor: 'pointer',
          }}
          title="Click to watch trailer on YouTube"
        />
      </div>

      {/* Scroll Indicator - Only visible initially */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: '#f97316',
          }}
        >
          스크롤
        </motion.span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          style={{ color: '#f97316' }}
        >
          <path
            d="M12 4L12 20M12 20L6 14M12 20L18 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}

export default Hero
