import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrame

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)

    const particles = []
    const particleCount = 1000

    for (let i = 0; i < particleCount; i++) {
      let x
      let y

      /*
        Create a dense particle field.
        More particles are placed toward
        the left and right sides.
      */

      if (Math.random() < 0.65) {
        x = Math.random() * window.innerWidth
        y = Math.random() * window.innerHeight
      } else {
        const leftSide = Math.random() < 0.5

        x = leftSide
          ? Math.random() * window.innerWidth * 0.35
          : window.innerWidth * 0.65 +
            Math.random() * window.innerWidth * 0.35

        y = Math.random() * window.innerHeight
      }

      particles.push({
        x,
        y,

        size: Math.random() * 1.5 + 0.2,

        opacity: Math.random() * 0.55 + 0.05,

        speedX: (Math.random() - 0.5) * 0.95,
        speedY: (Math.random() - 0.5) * 0.95,

        phase: Math.random() * Math.PI * 2,

        drift: Math.random() * 1.2 + 0.2,
      })
    }

    const animate = (time) => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      )

      particles.forEach((particle) => {

        /*
          Main movement
        */

        particle.x +=
          particle.speedX +
          Math.sin(
            time * 0.0008 +
            particle.phase
          ) *
            0.25 *
            particle.drift

        particle.y +=
          particle.speedY +
          Math.cos(
            time * 0.0007 +
            particle.phase
          ) *
            0.18 *
            particle.drift


        /*
          Wrap particles around
          the viewport.
        */

        if (particle.x < -20) {
          particle.x = window.innerWidth + 20
        }

        if (particle.x > window.innerWidth + 20) {
          particle.x = -20
        }

        if (particle.y < -20) {
          particle.y = window.innerHeight + 20
        }

        if (particle.y > window.innerHeight + 20) {
          particle.y = -20
        }


        /*
          Subtle brightness animation
        */

        const pulse =
          Math.sin(
            time * 0.0015 +
            particle.phase
          ) * 0.18

        const opacity = Math.max(
          0.02,
          particle.opacity + pulse
        )


        /*
          Draw particle
        */

        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = `rgba(220, 225, 235, ${opacity})`

        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener(
        'resize',
        resizeCanvas
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  )
}

export default ParticleBackground