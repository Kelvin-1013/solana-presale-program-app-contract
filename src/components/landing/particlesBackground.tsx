"use client"

import { useCallback } from 'react'
import Particles from "react-tsparticles"
import type { Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import { usePathname } from 'next/navigation'

export default function ParticlesBackground() {
  const pathname = usePathname()
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  if (pathname !== '/') return null

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-50">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "image",
              image: [
                {
                  src: "/monkey/cuty-monkey-1.png",
                  width: 32,
                  height: 32,
                },
                {
                  src: "/monkey/cuty-monkey-2.png",
                  width: 32,
                  height: 32,
                },
                {
                  src: "/monkey/cuty-monkey-3.png",
                  width: 32,
                  height: 32,
                },
                {
                  src: "/monkey/thinking monkey.png",
                  width: 32,
                  height: 32,
                },
              ],
            },
            size: {
              value: { min: 20, max: 30 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}