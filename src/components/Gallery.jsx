import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'
import rezePosterImg from '/assets/images/reze-poster.jpg'
import rezePoster2Img from '/assets/images/reze-poster-2.jpg'
import rezePoster3Img from '/assets/images/reze-poster-3.png'

const GalleryItem = ({ index, image, onClick }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onClick={image ? onClick : undefined}
      style={{
        position: 'relative',
        aspectRatio: '2 / 3',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#0a0a0a',
        border: '1px solid rgba(196, 181, 253, 0.1)',
        cursor: image ? 'pointer' : 'default',
      }}
    >
      {image ? (
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#6b7280',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M10 60 L30 40 L50 55 L70 35 L70 70 L10 70 Z" fill="currentColor" opacity="0.3" />
          </svg>
          <ScrollReveal
            as="p"
            baseRotation={2}
            enableBlur={true}
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: '1rem',
            }}
          >
            이미지를 추가하세요
          </ScrollReveal>
        </div>
      )}
    </motion.div>
  )
}

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    rezePosterImg,
    rezePoster2Img,
    rezePoster3Img,
  ]

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
            fontWeight: 900,
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
          <span style={{ color: '#5eead4' }}>[</span>
          <ScrollReveal as="span" baseRotation={5} enableBlur={true}>
            GALLERY
          </ScrollReveal>
          <span style={{ color: '#5eead4' }}>]</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          {images.map((image, index) => (
            <GalleryItem 
              key={index} 
              index={index} 
              image={image} 
              onClick={() => image && setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </section>

    {/* 이미지 확대 모달 */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
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
            padding: '2rem',
          }}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            src={selectedImage}
            alt="확대된 포스터"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 100px rgba(94, 234, 212, 0.3)',
              cursor: 'default',
            }}
          />
          
          {/* 닫기 버튼 */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(196, 181, 253, 0.2)',
              border: '2px solid #c4b5fd',
              color: '#c4b5fd',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
            }}
          >
            ✕
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
}

export default Gallery
