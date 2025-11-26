import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ShinyText from './ShinyText'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 10) + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Pochita GIF */}
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/images/pochita.gif`}
          alt="Pochita Loading"
          width="120"
          height="120"
          style={{ margin: '0 auto 2rem', display: 'block', objectFit: 'contain' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '1rem' }}
        >
          <ShinyText 
            text="CHAINSAW LOADING..." 
            speed={3}
            style={{
              '--shiny-color': 'rgba(249, 115, 22, 0.4)',
              '--shiny-shimmer-color': '#a855f7',
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: '1.125rem',
              letterSpacing: '0.1em',
            }}
          />
        </motion.div>
        
        {/* Progress Bar */}
        <div
          style={{
            width: '200px',
            height: '4px',
            background: 'rgba(249, 115, 22, 0.2)',
            borderRadius: '2px',
            margin: '1rem auto 0.5rem',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #f97316, #a855f7)',
              borderRadius: '2px',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <motion.div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 400,
            fontSize: '0.875rem',
            color: '#a855f7',
            letterSpacing: '0.1em',
          }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
