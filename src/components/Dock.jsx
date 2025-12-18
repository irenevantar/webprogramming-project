import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const DOCK_ITEMS = [
  { id: 'hero', label: '홈' },
  { id: 'characters', label: '등장인물' },
  { id: 'story', label: '시놉시스' },
  { id: 'ost', label: 'OST' },
  { id: 'trailers', label: '예고편' },
  { id: 'gallery', label: '포스터' },
  { id: 'staff', label: '제작진' },
]

const DockItem = ({ mouseX, item }) => {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [60, 100, 60])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })
  
  const fontSizeSync = useTransform(distance, [-150, 0, 150], [14, 20, 14])
  const fontSize = useSpring(fontSizeSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ 
        width, 
        fontSize,
        height: 'auto',
        aspectRatio: '1 / 1', // Keep it somewhat square-ish or just let width control spacing
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
        fontWeight: 700,
        fontFamily: "'Nanum Gothic', sans-serif",
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
      onClick={() => scrollToSection(item.id)}
      whileHover={{ y: -10 }}
    >
      {item.label}
    </motion.div>
  )
}

const Dock = () => {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '60px', // Reduced default height
        padding: '0 20px',
        gap: '20px',
        display: 'flex',
        alignItems: 'center', // Vertically center items
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        transition: 'height 0.3s ease', // Smooth height transition
      }}
      whileHover={{ height: '80px' }} // Expand on hover
    >
      {DOCK_ITEMS.map((item) => (
        <DockItem key={item.id} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  )
}

export default Dock
