import { useEffect, useState, useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const interactiveElement = target.closest('a, button, [onclick], .character-card, .poster-item')
      if (interactiveElement || target.style.cursor === 'pointer') {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const interactiveElement = target.closest('a, button, [onclick], .character-card, .poster-item')
      if (interactiveElement || target.style.cursor === 'pointer') {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`cursor-follower ${isHovering ? 'cursor-hover' : ''}`}
    />
  )
}

export default Cursor
