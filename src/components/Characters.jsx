import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

// Character Data
const CHARACTERS = [
  {
    id: 'denji',
    name: '덴지',
    role: '체인소 맨',
    description: '체인소의 악마 포치타와 융합한 주인공. 평범한 삶을 꿈꾸는 데블 헌터로, 끊임없이 혼란에 휘말린다. 그의 꿈은 식빵에 잼을 발라 먹고 침대에서 자는 소박한 것이다.',
    images: [
      withBase('assets/images/new_characters/denji.png'),
      withBase('assets/images/new_characters/chainsawman.png')
    ],
    width: '300px',
    height: '600px'
  },
  {
    id: 'reze',
    name: '레제',
    role: '폭탄의 악마',
    description: '폭탄의 악마로 알려진 하이브리드. 카페에서 일하는 순수한 소녀처럼 보이지만, 실제로는 체인소의 심장을 훔치기 위해 소련에서 파견된 훈련된 암살자다. 그녀의 폭발적인 힘은 그녀의 매력만큼이나 강력하다.',
    images: [
      withBase('assets/images/reze.png'),
      withBase('assets/images/new_characters/bombdevil.png')
    ],
    width: '300px',
    height: '600px'
  },
  {
    id: 'makima',
    name: '마키마',
    role: '지배의 악마',
    description: '공안 대마 특이 4과의 고위 데블 헌터. 교활하고 지적이며 인간과 악마 모두에게 두려움의 대상이다. 그녀는 사람들을 개로 여기며 절대적인 복종을 요구한다.',
    images: [withBase('assets/images/new_characters/makima.png')]
  },
  {
    id: 'aki',
    name: '하야카와 아키',
    role: '데블 헌터',
    description: '공안 대마 특이 4과 소속의 데블 헌터. 여우의 악마, 저주의 악마, 미래의 악마와 계약했다. 총의 악마에게 가족을 잃고 복수를 위해 살아가지만, 점차 동료들을 깊이 아끼게 된다.',
    images: [withBase('assets/images/aki.png')]
  },
  {
    id: 'power',
    name: '파워',
    role: '피의 마인',
    description: '시체를 차지한 피의 마인. 유치하고 탐욕스러우며 고양이를 좋아하지만, 덴지의 가까운 동료가 된다. 종종 거짓말을 하고 위험에서 도망치지만, 숨겨진 의리가 있다.',
    images: [withBase('assets/images/new_characters/power.png')]
  },
  {
    id: 'beam',
    name: '빔',
    role: '상어의 마인',
    description: '벽이나 바닥 같은 고체를 헤엄칠 수 있는 상어의 마인. "체인소 님"에게 광적으로 충성하며 종종 거칠고 예측할 수 없는 행동을 한다.',
    images: [withBase('assets/images/new_characters/beam.png')]
  },
  {
    id: 'angel',
    name: '천사의 악마',
    role: '천사의 악마',
    description: '천사의 공포를 구현한 악마. 닿기만 해도 수명을 흡수할 수 있으며, 훔친 시간으로 강력한 무기를 만든다. 강력한 힘에도 불구하고 게으르고 일하기 싫어한다.',
    images: [withBase('assets/images/new_characters/angle_devil.png')]
  },
  {
    id: 'pochita',
    name: '포치타',
    role: '체인소의 악마',
    description: '약해진 강아지 모습의 원래 체인소 악마. 심장이 되어 덴지를 구했다. 그는 혼돈의 화신이자 지옥의 영웅이다.',
    images: [withBase('assets/images/new_characters/pochita.png')]
  }
]

const Characters = () => {
  const scrollContainerRef = useRef(null)
  const [selectedChar, setSelectedChar] = useState(null)
  const [transformState, setTransformState] = useState({}) // { [id]: 0 or 1 }
  const requestRef = useRef()
  const scrollSpeed = useRef(0)

  // Auto-scroll Logic
  const handleMouseMove = useCallback((e) => {
    if (!scrollContainerRef.current) return
    
    const { left, width } = scrollContainerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const percentage = x / width

    if (percentage < 0.1) {
      // Scroll Left
      scrollSpeed.current = -5 * (1 - percentage / 0.1)
    } else if (percentage > 0.9) {
      // Scroll Right
      scrollSpeed.current = 5 * ((percentage - 0.9) / 0.1)
    } else {
      scrollSpeed.current = 0
    }
  }, [])

  const animateScroll = useCallback(() => {
    if (scrollContainerRef.current && scrollSpeed.current !== 0) {
      scrollContainerRef.current.scrollLeft += scrollSpeed.current
    }
    requestRef.current = requestAnimationFrame(animateScroll)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll)
    return () => cancelAnimationFrame(requestRef.current)
  }, [animateScroll])

  // Modal Navigation
  const handleNext = (e) => {
    e.stopPropagation()
    const currentIndex = CHARACTERS.findIndex(c => c.id === selectedChar.id)
    const nextIndex = (currentIndex + 1) % CHARACTERS.length
    setSelectedChar(CHARACTERS[nextIndex])
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    const currentIndex = CHARACTERS.findIndex(c => c.id === selectedChar.id)
    const prevIndex = (currentIndex - 1 + CHARACTERS.length) % CHARACTERS.length
    setSelectedChar(CHARACTERS[prevIndex])
  }

  // Transform Logic
  const toggleTransform = (id) => {
    setTransformState(prev => ({
      ...prev,
      [id]: prev[id] === 1 ? 0 : 1
    }))
  }

  return (
    <section
      id="characters"
      style={{
        background: '#000000',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '0 2rem 4rem', textAlign: 'center' }}>
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
          <ScrollReveal as="span">등장인물</ScrollReveal>
          <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
        </h2>
      </div>

      {/* Character List */}
      <div
        ref={scrollContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { scrollSpeed.current = 0 }}
        style={{
          display: 'flex',
          alignItems: 'flex-end', // Changed from center to align names
          gap: '4rem',
          overflowX: 'auto',
          padding: '2rem 4rem',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
          cursor: 'grab',
          minHeight: '650px', // Ensure enough space
        }}
        className="no-scrollbar"
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        
        {CHARACTERS.map((char) => {
          const isSmallChar = char.id === 'reze' || char.id === 'aki'
          const cardWidth = isSmallChar ? '240px' : (char.width || '300px')
          // Fixed height for all image containers to ensure alignment
          const cardHeight = '500px'

          return (
            <motion.div
              key={char.id}
              onClick={() => setSelectedChar(char)}
              whileHover={{ scale: 1.05, y: -10 }}
              className="character-card"
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                width: cardWidth,
              }}
            >
              <div style={{
                width: cardWidth,
                height: cardHeight,
                marginBottom: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)', // Subtle background for transparent images
              }}>
                <img
                  src={char.images[0]}
                  alt={char.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: char.id === 'reze' ? 'contain' : 'cover', // Special handling for Reze
                    objectPosition: 'center bottom', // Align image to bottom
                    filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.2))',
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#f97316',
                letterSpacing: '0.1em',
              }}>
                {char.name}
              </h3>
            </motion.div>
          )
        })}
      </div>

      {/* Instruction Text */}
      <div style={{
        textAlign: 'center',
        padding: '2rem 0',
        marginTop: '1rem',
      }}>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          fontFamily: "'Nanum Gothic', sans-serif",
        }}>
          캐릭터를 클릭하면 소개글이 나옵니다
        </p>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChar(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '90%',
                maxWidth: 'calc(90vw - 150px)',
                height: '72vh',
                background: '#0a0a0a',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '20px',
                display: 'flex',
                overflow: 'hidden',
                position: 'relative',
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
                  zIndex: 10000,
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
                  zIndex: 10000,
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                &gt;
              </button>

              {/* Left: Image */}
              <div style={{
                flex: 1.2,
                background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.1), transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                overflow: 'hidden', // Added overflow hidden
              }}>
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={`${selectedChar.id}-${transformState[selectedChar.id] || 0}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    src={selectedChar.images[transformState[selectedChar.id] || 0]}
                    alt={selectedChar.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 0 40px rgba(249, 115, 22, 0.4))',
                      transform: selectedChar.id === 'pochita' 
                        ? 'scale(0.4)' 
                        : (['reze', 'aki'].includes(selectedChar.id) ? 'scale(0.5)' : 'scale(1.2)'),
                      objectPosition: selectedChar.id === 'pochita' ? 'center center' : 'center center',
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Right: Info */}
              <div style={{
                flex: 0.8,
                padding: '4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
              }}>
                <h2 style={{
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: '#f97316',
                  marginBottom: '1rem',
                  lineHeight: 1,
                }}>
                  {selectedChar.name}
                </h2>
                <p style={{
                  fontFamily: "'Nanum Gothic', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '2rem',
                }}>
                  {selectedChar.role}
                </p>
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#d1d5db',
                  marginBottom: '3rem',
                }}>
                  {selectedChar.description}
                </p>

                {/* Transform Button */}
                {selectedChar.images.length > 1 && (
                  <button
                    onClick={() => toggleTransform(selectedChar.id)}
                    style={{
                      padding: '1rem 2rem',
                      background: 'linear-gradient(90deg, #f97316, #ea580c)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
                    }}
                  >
                    변신
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Characters
