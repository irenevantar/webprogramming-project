import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const OST_DATA = [
  {
    id: 'opening',
    title: 'IRIS OUT',
    link: 'https://youtu.be/Cb0JZhdmjtg?si=6npTxtUmfishW3wn',
    color: '#f97316'
  },
  {
    id: 'ending',
    title: 'JANE DOE',
    link: 'https://youtu.be/zuO2fClon98?si=Vwyh4tJJyf-6t--D',
    color: '#f97316'
  }
]

const LPPlayer = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        cursor: 'pointer',
      }}>
        {/* LP Record */}
        <div style={{
          position: 'relative',
          width: '300px',
          height: '300px',
        }}>
          {/* Vinyl Record */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isHovered ? 'spin 4s linear infinite' : 'none',
              transition: 'transform 0.5s ease',
            }}
          >
            {/* Grooves */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              right: '5%',
              bottom: '5%',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.05)',
            }} />
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '15%',
              right: '15%',
              bottom: '15%',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.05)',
            }} />
            <div style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              right: '25%',
              bottom: '25%',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.05)',
            }} />

            {/* Label */}
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: data.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#000',
              }} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          color: '#fff',
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: "'Nanum Gothic', sans-serif",
          letterSpacing: '0.1em',
          transition: 'color 0.3s',
          textShadow: isHovered ? '0 0 10px rgba(249, 115, 22, 0.5)' : 'none',
        }}>
          {data.title}
        </h3>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </a>
  )
}

const OST = () => {
  return (
    <section
      id="ost"
      style={{
        padding: '8rem 0',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            fontFamily: "'Nanum Gothic', sans-serif",
            color: '#fff',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <ScrollReveal as="span" style={{ color: '#f97316' }}>[</ScrollReveal>
            <ScrollReveal as="span">OST</ScrollReveal>
            <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8rem',
          flexWrap: 'wrap',
        }}>
          {OST_DATA.map((ost, index) => (
            <ScrollReveal key={ost.id} delay={index * 0.2}>
              <LPPlayer data={ost} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OST
