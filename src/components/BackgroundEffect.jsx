import { useEffect, useRef } from 'react'

const BackgroundEffect = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedY = Math.random() * 0.5 + 0.1
        this.opacity = Math.random() * 0.3 + 0.1
        this.fadeSpeed = Math.random() * 0.002 + 0.001
        this.fadingIn = true
      }

      update() {
        this.y -= this.speedY
        if (this.y < 0) {
          this.y = canvas.height
          this.x = Math.random() * canvas.width
        }

        if (this.fadingIn) {
          this.opacity += this.fadeSpeed
          if (this.opacity >= 0.4) this.fadingIn = false
        } else {
          this.opacity -= this.fadeSpeed
          if (this.opacity <= 0.1) this.fadingIn = true
        }
      }

      draw() {
        ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})` // Orange tint
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'transparent',
      }}
    />
  )
}

export default BackgroundEffect
