import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const SideNav = ({ isVisible }) => {
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'characters', label: '등장인물' },
    { id: 'story', label: '스토리' },
    { id: 'gallery', label: '포스터' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id

        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: isVisible ? 0 : -50,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 10, scale: 1.1 }}
            style={{
              background: 'transparent',
              border: 'none',
              color: isActive ? '#f97316' : '#c4b5fd',
              fontFamily: "'Nanum Gothic', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              textAlign: 'left',
              padding: '0.5rem 1rem',
              position: 'relative',
              overflow: 'visible',
              transition: 'color 0.3s ease, font-weight 0.3s ease',
            }}
          >
            {/* Active Indicator Line */}
            <motion.div
              animate={{
                height: isActive ? '100%' : '0%',
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                left: '-1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                background: 'linear-gradient(180deg, #f97316, #ea580c)',
                borderRadius: '2px',
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
          </motion.button>
        )
      })}
    </motion.nav>
  )
}

export default SideNav
