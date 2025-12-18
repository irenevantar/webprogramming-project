import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const TRAILERS = [
  { id: 'fRqegBxEvEc', title: '메인 예고편' },
  { id: 'VUGXb3PyTEk', title: '15초 예고편' },
  { id: 'CZHt-8brcuE', title: '30초 예고편' },
  { id: 'SqmfFpHJ64U', title: 'JANE DOE 티저' },
  { id: 'NBsQkBc_Jsc', title: '소년X소녀의 여름 예고편' },
  { id: 'dOihGQCIw_w', title: '파이널 예고편' },
]

const Trailers = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    const currentIndex = TRAILERS.findIndex(t => t.id === selectedTrailer.id)
    const prevIndex = (currentIndex - 1 + TRAILERS.length) % TRAILERS.length
    setSelectedTrailer(TRAILERS[prevIndex])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const currentIndex = TRAILERS.findIndex(t => t.id === selectedTrailer.id)
    const nextIndex = (currentIndex + 1) % TRAILERS.length
    setSelectedTrailer(TRAILERS[nextIndex])
  }

  return (
    <section
      id="trailers"
      style={{
        minHeight: '100vh',
        background: '#000',
        padding: '8rem 4rem',
        position: 'relative',
      }}
    >
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 700,
          fontFamily: "'Nanum Gothic', sans-serif",
          color: '#fff',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <ScrollReveal as="span" style={{ color: '#f97316' }}>[</ScrollReveal>
          <ScrollReveal as="span">예고편</ScrollReveal>
          <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {TRAILERS.map((trailer, index) => (
          <ScrollReveal key={trailer.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTrailer(trailer)}
              className="poster-item" // Reusing cursor interaction class
              style={{
                cursor: 'pointer',
                background: '#0a0a0a',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(249, 115, 22, 0.1)',
              }}
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
              }}>
                <img
                  src={`https://img.youtube.com/vi/${trailer.id}/maxresdefault.jpg`}
                  alt={trailer.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#000',
                    border: '2px solid #f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '16px solid #f97316',
                      marginLeft: '4px',
                    }} />
                  </div>
                </div>
              </div>
              <div style={{
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <h3 style={{
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  fontFamily: "'Nanum Gothic', sans-serif",
                }}>
                  {trailer.title}
                </h3>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedTrailer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrailer(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              style={{
                position: 'fixed',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: '#f97316',
                fontSize: '4rem',
                cursor: 'pointer',
                zIndex: 10000,
                opacity: 0.8,
                padding: '20px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              style={{
                position: 'fixed',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: '#f97316',
                fontSize: '4rem',
                cursor: 'pointer',
                zIndex: 10000,
                opacity: 0.8,
                padding: '20px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8}
            >
              &gt;
            </button>

            <div style={{
              width: '90%',
              maxWidth: 'calc(90vw - 150px)',
              aspectRatio: '16 / 9',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedTrailer.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 0 50px rgba(249, 115, 22, 0.2)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedTrailer.id}?autoplay=1&rel=0`}
                    title={selectedTrailer.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Trailers
