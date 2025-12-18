import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const OST_DATA = [
  {
    id: 'opening',
    title: 'IRIS OUT',
    // Using a sample audio file for demonstration since we don't have the actual files
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
    color: '#f97316'
  },
  {
    id: 'ending',
    title: 'JANE DOE',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    color: '#f97316'
  }
]

const LPPlayer = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setProgress((current / duration) * 100)
    }
  }

  const handleSeek = (e) => {
    const seekTime = (audioRef.current.duration / 100) * e.target.value
    audioRef.current.currentTime = seekTime
    setProgress(e.target.value)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    }}>
      <audio
        ref={audioRef}
        src={data.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* LP Record */}
      <div 
        onClick={togglePlay}
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          cursor: 'pointer',
        }}
      >
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
            animation: 'spin 4s linear infinite',
            animationPlayState: isPlaying ? 'running' : 'paused',
            transition: 'transform 0.5s ease',
          }}
        >
          {/* Cover Image (Placeholder) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            opacity: 0.6,
          }}>
             <img 
               src={withBase('assets/images/posters/mainposter1.png')} 
               alt="Cover" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
          </div>

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
            zIndex: 2,
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

      {/* Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
      }}>
        <h3 style={{
          color: '#fff',
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: "'Nanum Gothic', sans-serif",
          letterSpacing: '0.1em',
          textShadow: isPlaying ? '0 0 10px rgba(249, 115, 22, 0.5)' : 'none',
        }}>
          {data.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <button
            onClick={togglePlay}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f97316',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            style={{
              width: '100%',
              accentColor: '#f97316',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
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
