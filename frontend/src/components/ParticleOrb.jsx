import { useEffect, useRef } from 'react'

const ParticleOrb = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrame

    const resize = () => {
      const size = Math.min(
        window.innerWidth * 0.42,
        520
      )

      const dpr = window.devicePixelRatio || 1

      canvas.width = size * dpr
      canvas.height = size * dpr

      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    window.addEventListener('resize', resize)

    const size = Math.min(
      window.innerWidth * 0.42,
      520
    )

    const center = size / 2

    const particles = []

    /*
      Create particles distributed
      around a spherical volume.
    */

    const particleCount = 2600

    for (let i = 0; i < particleCount; i++) {
      const theta =
        Math.random() * Math.PI * 2

      const phi =
        Math.acos(
          2 * Math.random() - 1
        )

      const radius =
        Math.pow(Math.random(), 0.45) *
        (size * 0.27)

      particles.push({
        theta,
        phi,
        radius,

        size:
          Math.random() * 1.2 + 0.25,

        opacity:
          Math.random() * 0.65 + 0.08,

        speed:
          Math.random() * 0.0008 +
          0.00025,
      })
    }

    const animate = (time) => {
      ctx.clearRect(
        0,
        0,
        size,
        size
      )

      particles.forEach((particle) => {

        /*
          Rotate the particle field.
        */

        const theta =
          particle.theta +
          time * particle.speed

        const x3d =
          particle.radius *
          Math.sin(particle.phi) *
          Math.cos(theta)

        const y3d =
          particle.radius *
          Math.cos(particle.phi)

        const z3d =
          particle.radius *
          Math.sin(particle.phi) *
          Math.sin(theta)


        /*
          Simple perspective projection.
        */

        const perspective =
          1 +
          z3d /
            (size * 0.75)

        const x =
          center +
          x3d * perspective

        const y =
          center +
          y3d * perspective


        /*
          Particles toward the viewer
          become slightly brighter.
        */

        const depth =
          (z3d +
            particle.radius) /
          (particle.radius * 2)

        const opacity =
          particle.opacity *
          (0.35 + depth * 0.8)


        ctx.beginPath()

        ctx.arc(
          x,
          y,
          particle.size *
            perspective,
          0,
          Math.PI * 2
        )

        ctx.fillStyle =
          `rgba(220, 225, 235, ${opacity})`

        ctx.fill()
      })

      animationFrame =
        requestAnimationFrame(animate)
    }

    animationFrame =
      requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'resize',
        resize
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
    />
  )
}

export default ParticleOrb