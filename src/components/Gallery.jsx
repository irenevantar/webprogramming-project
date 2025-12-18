import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const POSTERS = [
  { id: 'main1', title: '메인 포스터 1', src: withBase('assets/images/posters/mainposter1.png') },
  { id: 'main2', title: '메인 포스터 2', src: withBase('assets/images/posters/mainposter2.png') },
  { id: 'main3', title: '메인 포스터 3', src: withBase('assets/images/posters/mainposter3.png') },
  { id: 'main4', title: '메인 포스터 4', src: withBase('assets/images/posters/mainposter4.png') },
  { id: 'special', title: '스페셜 포스터', src: withBase('assets/images/posters/specialposter.png') },
  { id: 'cafe', title: '카페 포스터', src: withBase('assets/images/posters/cafeposter.png') },
  { id: 'pochita', title: '포치타 포스터', src: withBase('assets/images/posters/pochitaposter.png') },
  { id: 'chainsaw', title: '체인소 맨 포스터', src: withBase('assets/images/posters/chainsawmanposter.png') },
  { id: 'denji', title: '덴지 포스터', src: withBase('assets/images/posters/denjiposter.png') },
  { id: 'reze', title: '레제 포스터', src: withBase('assets/images/posters/rezeposter.png') },
  { id: 'bomb', title: '폭탄의 악마 포스터', src: withBase('assets/images/posters/bombdevil.png') },
  { id: 'makima', title: '마키마 포스터', src: withBase('assets/images/posters/makimaposter.png') },
  { id: 'power', title: '파워 포스터', src: withBase('assets/images/posters/powerposter.png') },
  { id: 'aki', title: '아키 포스터', src: withBase('assets/images/posters/akiposter.png') },
  { id: 'beam', title: '빔 포스터', src: withBase('assets/images/posters/beamposter.png') },
  { id: 'angel', title: '천사의 악마 포스터', src: withBase('assets/images/posters/angledevilposter.png') },
]

const GalleryItem = ({ index, poster, onClick }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={onClick}
      className="poster-item"
      style={{
        position: 'relative',
        aspectRatio: '2 / 3',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#0a0a0a',
        border: '1px solid rgba(249, 115, 22, 0.1)',
        cursor: 'pointer',
      }}
    >
      <img
        src={poster.src}
        alt={poster.title}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
      className="poster-overlay"
      >
        <p style={{
          color: '#fff',
          fontFamily: "'Nanum Gothic', sans-serif",
          fontWeight: 700,
          fontSize: '0.875rem',
          textAlign: 'center',
        }}>
          {poster.title}
        </p>
      </div>
      <style>{`
        div:hover .poster-overlay { opacity: 1 !important; }
      `}</style>
    </motion.div>
  )
}

const Gallery = () => {
  const [selectedPoster, setSelectedPoster] = useState(null)

  const handleNext = (e) => {
    e.stopPropagation()
    const currentIndex = POSTERS.findIndex(p => p.id === selectedPoster.id)
    const nextIndex = (currentIndex + 1) % POSTERS.length
    setSelectedPoster(POSTERS[nextIndex])
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    const currentIndex = POSTERS.findIndex(p => p.id === selectedPoster.id)
    const prevIndex = (currentIndex - 1 + POSTERS.length) % POSTERS.length
    setSelectedPoster(POSTERS[prevIndex])
  }

  return (
    <>
      <section
        id="gallery"
        style={{
          padding: '8rem 0',
          background: '#000000',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            fontFamily: "'Nanum Gothic', sans-serif",
            letterSpacing: '0.02em',
            marginBottom: '4rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            color: '#fff'
          }}
        >
          <ScrollReveal as="span" style={{ color: '#f97316' }}>[</ScrollReveal>
          <ScrollReveal as="span">포스터</ScrollReveal>
          <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          {POSTERS.map((poster, index) => (
            <GalleryItem 
              key={poster.id} 
              index={index} 
              poster={poster} 
              onClick={() => setSelectedPoster(poster)}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Lightbox Modal */}
    <AnimatePresence>
      {selectedPoster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPoster(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'pointer',
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
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              zIndex: 10001,
              fontSize: '3rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              zIndex: 10001,
              fontSize: '3rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            &gt;
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: 'calc(100vw - 150px)',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedPoster.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <img
                  src={selectedPoster.src}
                  alt={selectedPoster.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 0 50px rgba(249, 115, 22, 0.2)',
                  }}
                />
                <p style={{
                  color: '#fff',
                  marginTop: '1rem',
                  fontFamily: "'Nanum Gothic', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                }}>
                  {selectedPoster.title}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedPoster(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 10001,
            }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
}

export default Gallery
