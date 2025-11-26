import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Cursor.css'

const Cursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 500, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="cursor-follower"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  )
}

export default Cursor
