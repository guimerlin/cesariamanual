"use client"

import { useEffect, useRef } from "react"
import type { AppKey } from "../lib/ui-store"

export default function Eyes({ activeApp }: { activeApp: AppKey }) {
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateEyes = (e: MouseEvent) => {
      const eyes = [leftEyeRef.current, rightEyeRef.current]
      eyes.forEach((eye) => {
        if (!eye) return
        const rect = eye.getBoundingClientRect()
        const eyeCenterX = rect.left + rect.width / 2
        const eyeCenterY = rect.top + rect.height / 2
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)
        const distance = Math.min(rect.width / 4, rect.height / 4)
        const pupilX = Math.cos(angle) * distance
        const pupilY = Math.sin(angle) * distance
        const pupil = eye.querySelector(".pupil") as HTMLElement
        if (pupil) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`
        }
      })
    }

    window.addEventListener("mousemove", updateEyes)
    return () => window.removeEventListener("mousemove", updateEyes)
  }, [])

  const isActive = activeApp !== null && activeApp !== "palette"

  return (
    <div className="fixed top-8 right-8 z-50 pointer-events-none">
      <div className="flex gap-4">
        <div
          ref={leftEyeRef}
          className={`w-12 h-12 rounded-full border-4 border-black bg-white relative overflow-hidden transition-all duration-300 ${
            isActive ? "animate-pulse" : ""
          }`}
        >
          <div
            className="pupil w-4 h-4 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
            style={{ backgroundColor: isActive ? "#FF8C00" : "#000" }}
          />
        </div>
        <div
          ref={rightEyeRef}
          className={`w-12 h-12 rounded-full border-4 border-black bg-white relative overflow-hidden transition-all duration-300 ${
            isActive ? "animate-pulse" : ""
          }`}
        >
          <div
            className="pupil w-4 h-4 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
            style={{ backgroundColor: isActive ? "#FF8C00" : "#000" }}
          />
        </div>
      </div>
    </div>
  )
}
