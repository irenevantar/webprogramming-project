import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const OST_DATA = [
  {
    id: 'opening',
    type: 'Opening',
    title: 'IRIS OUT',
    videoId: 'Cb0JZhdmjtg',
    color: '#f97316',
    cover: withBase('assets/images/posters/iris_out_cover.png')
  },
  {
    id: 'ending',
    type: 'Ending',
    title: 'JANE DOE',
    videoId: 'zuO2fClon98',
    color: '#a78bfa',
    cover: withBase('assets/images/posters/jane_doe_cover.png')
  }
]

const LPPlayer = ({ data, isPlaying, onToggle, progress, onSeek }) => {
  const percentage = progress.duration > 0 ? (progress.currentTime / progress.duration) * 100 : 0

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4rem',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      {/* Left: LP Record */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {/* Label */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: data.color,
          color: '#000',
          padding: '0.25rem 0.75rem',
          borderRadius: '999px',
          fontSize: '0.875rem',
          fontWeight: 700,
          zIndex: 10,
          boxShadow: `0 0 10px ${data.color}80`,
          whiteSpace: 'nowrap',
        }}>
          {data.type}
        </div>

        <a 
          href={`https://www.youtube.com/watch?v=${data.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            cursor: 'pointer',
            display: 'block',
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
              boxShadow: isPlaying ? `0 0 30px ${data.color}40` : '0 10px 30px rgba(0,0,0,0.5)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 4s linear infinite',
              animationPlayState: isPlaying ? 'running' : 'paused',
              transition: 'all 0.5s ease',
            }}
          >
            {/* Cover Image */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              opacity: 0.8,
              filter: 'brightness(1.2)',
            }}>
               <img 
                 src={data.cover} 
                 alt="Cover" 
                 loading="lazy"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
            </div>

            {/* Grooves */}
            {[1, 2, 3].map(i => (
              <div key={i} style={{
                position: 'absolute',
                top: `${5 + i * 10}%`,
                left: `${5 + i * 10}%`,
                right: `${5 + i * 10}%`,
                bottom: `${5 + i * 10}%`,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.05)',
              }} />
            ))}

            {/* Center Label */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: data.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 20px ${data.color}60`,
              zIndex: 2,
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#000',
              }} />
            </div>
          </div>
        </a>
        
        {/* Instruction Text */}
        <p style={{
          fontSize: '0.8rem',
          fontWeight: 300,
          opacity: 0.7,
          color: '#fff',
          marginTop: '0.5rem',
          fontFamily: "'Nanum Gothic', sans-serif",
        }}>
          커버 이미지를 누를시 원본 곡 링크로 이동합니다
        </p>
      </div>

      {/* Right: Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
        flex: 1,
        maxWidth: '600px',
      }}>
        <h3 style={{
          color: '#fff',
          fontSize: '2.5rem',
          fontWeight: 800,
          fontFamily: "'Nanum Gothic', sans-serif",
          letterSpacing: '0.1em',
          textShadow: isPlaying ? `0 0 10px ${data.color}80` : 'none',
          margin: 0,
        }}>
          {data.title}
        </h3>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem', 
          width: '100%',
          padding: '1rem 0',
          transition: 'all 0.3s ease',
        }}>
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: 'none',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              padding: 0,
            }}
          >
            <AnimatePresence mode='wait'>
              {isPlaying ? (
                <motion.svg
                  key="pause"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="23" y="15" width="12" height="50" rx="6" fill={data.color} />
                  <rect x="45" y="15" width="12" height="50" rx="6" fill={data.color} />
                </motion.svg>
              ) : (
                <motion.svg
                  key="play"
                  initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65 40L25 65L25 15L65 40Z" fill={data.color} stroke={data.color} strokeWidth="4" strokeLinejoin="round" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
          
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <input
              type="range"
              className={`ost-range-${data.id}`}
              min="0"
              max={progress.duration || 100}
              value={progress.currentTime}
              onChange={(e) => onSeek(parseFloat(e.target.value))}
              style={{
                width: '100%',
                appearance: 'none',
                background: `linear-gradient(to right, ${data.color} ${percentage}%, rgba(255,255,255,0.1) ${percentage}%)`,
                height: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '1.3rem', 
              fontWeight: 700,
              color: '#fff',
              fontFamily: "'Nanum Gothic', sans-serif" 
            }}>
              <span>{formatTime(progress.currentTime)}</span>
              <span>{formatTime(progress.duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const formatTime = (seconds) => {
  if (!seconds) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const OST = () => {
  const [playingId, setPlayingId] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progresses, setProgresses] = useState({}) // { [id]: { currentTime, duration } }
  const playersRef = useRef({})
  const intervalRef = useRef(null)

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    const initPlayers = () => {
      OST_DATA.forEach(track => {
        if (!playersRef.current[track.id]) {
          playersRef.current[track.id] = new window.YT.Player(`player-${track.id}`, {
            height: '0',
            width: '0',
            videoId: track.videoId,
            playerVars: {
              'playsinline': 1,
              'controls': 0,
              'disablekb': 1
            },
            events: {
              'onStateChange': (event) => onPlayerStateChange(event, track.id)
            }
          })
        }
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayers()
    } else {
      window.onYouTubeIframeAPIReady = initPlayers
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const startProgressTracking = (id) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    
    intervalRef.current = setInterval(() => {
      const player = playersRef.current[id]
      if (player && player.getCurrentTime) {
        const currentTime = player.getCurrentTime()
        const duration = player.getDuration()
        setProgresses(prev => ({
          ...prev,
          [id]: { currentTime, duration }
        }))
      }
    }, 1000)
  }

  const stopProgressTracking = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const onPlayerStateChange = (event, id) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true)
      startProgressTracking(id)
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false)
      stopProgressTracking()
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false)
      stopProgressTracking()
      setPlayingId(null)
      setProgresses(prev => ({
        ...prev,
        [id]: { currentTime: 0, duration: 0 }
      }))
    }
  }

  const togglePlay = (id) => {
    const player = playersRef.current[id]
    if (!player || typeof player.playVideo !== 'function') return

    if (playingId === id) {
      if (isPlaying) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
    } else {
      // Stop currently playing
      if (playingId && playersRef.current[playingId]) {
        playersRef.current[playingId].pauseVideo()
      }
      player.playVideo()
      setPlayingId(id)
    }
  }

  const handleSeek = (id, time) => {
    const player = playersRef.current[id]
    if (player && player.seekTo) {
      player.seekTo(time, true)
      setProgresses(prev => ({
        ...prev,
        [id]: { ...prev[id], currentTime: time }
      }))
    }
  }

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
      {/* Hidden Players */}
      {OST_DATA.map(track => (
        <div 
          key={track.id} 
          id={`player-${track.id}`} 
          style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }} 
        />
      ))}

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
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6rem',
        }}>
          {OST_DATA.map((ost, index) => (
            <ScrollReveal key={ost.id} delay={index * 0.2} style={{ width: '100%' }}>
              <LPPlayer 
                data={ost} 
                isPlaying={playingId === ost.id && isPlaying}
                onToggle={() => togglePlay(ost.id)}
                progress={progresses[ost.id] || { currentTime: 0, duration: 0 }}
                onSeek={(time) => handleSeek(ost.id, time)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Custom Range Thumb Styles */
        .ost-range-opening::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FF9900;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
          margin-top: -6px; /* Adjust for alignment */
          transform: translateY(1px);
        }
        .ost-range-opening::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FF9900;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
          transform: translateY(1px);
        }
        
        .ost-range-ending::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #800080;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
          margin-top: -6px;
          transform: translateY(1px);
        }
        .ost-range-ending::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #800080;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
          transform: translateY(1px);
        }
      `}</style>
    </section>
  )
}

export default OST