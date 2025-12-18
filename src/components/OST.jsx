import { useState, useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const OST_DATA = [
  {
    id: 'opening',
    type: 'Opening',
    title: 'IRIS OUT',
    videoId: 'Cb0JZhdmjtg',
    color: '#f97316',
    cover: withBase('assets/images/posters/mainposter1.png')
  },
  {
    id: 'ending',
    type: 'Ending',
    title: 'JANE DOE',
    videoId: 'zuO2fClon98',
    color: '#a78bfa',
    cover: withBase('assets/images/posters/mainposter2.png')
  }
]

const LPPlayer = ({ data, isPlaying, onToggle }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    }}>
      {/* Label */}
      <div style={{
        background: data.color,
        color: '#000',
        padding: '0.25rem 0.75rem',
        borderRadius: '999px',
        fontSize: '0.875rem',
        fontWeight: 700,
        marginBottom: '-1rem',
        zIndex: 10,
        boxShadow: `0 0 10px ${data.color}80`,
      }}>
        {data.type}
      </div>

      {/* LP Record */}
      <div 
        onClick={onToggle}
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
            opacity: 0.6,
          }}>
             <img 
               src={data.cover} 
               alt="Cover" 
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
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: data.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 20px ${data.color}60`,
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
          textShadow: isPlaying ? `0 0 10px ${data.color}80` : 'none',
        }}>
          {data.title}
        </h3>

        <button
          onClick={onToggle}
          style={{
            background: 'transparent',
            border: '2px solid ' + data.color,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: data.color,
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: isPlaying ? data.color : 'transparent',
            color: isPlaying ? '#000' : data.color,
          }}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  )
}

const OST = () => {
  const [playingId, setPlayingId] = useState(null)
  const playersRef = useRef({})

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
      // Cleanup if needed
    }
  }, [])

  const onPlayerStateChange = (event, id) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      setPlayingId(null)
    }
  }

  const togglePlay = (id) => {
    const player = playersRef.current[id]
    if (!player || typeof player.playVideo !== 'function') return

    if (playingId === id) {
      player.pauseVideo()
      setPlayingId(null)
    } else {
      // Stop currently playing
      if (playingId && playersRef.current[playingId]) {
        playersRef.current[playingId].pauseVideo()
      }
      player.playVideo()
      setPlayingId(id)
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
            <ScrollReveal as="span" className="text-gradient">[</ScrollReveal>
            <ScrollReveal as="span" className="text-gradient">OST</ScrollReveal>
            <ScrollReveal as="span" className="text-gradient">]</ScrollReveal>
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
              <LPPlayer 
                data={ost} 
                isPlaying={playingId === ost.id}
                onToggle={() => togglePlay(ost.id)}
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
      `}</style>
    </section>
  )
}

export default OST