import { useRef, useCallback, useEffect } from 'react'
import { lerp } from '@/lib/math'

interface LensState {
  mx: number
  my: number
  cx: number
  cy: number
  cr: number
  tr: number
  inside: boolean
  raf: number | null
  autoRaf: number | null
  autoTime: number
}

export function useLensEffect(radius: number, feather: number) {
  const state = useRef<LensState>({
    mx: -500,
    my: -500,
    cx: -500,
    cy: -500,
    cr: 0,
    tr: 0,
    inside: false,
    raf: null,
    autoRaf: null,
    autoTime: 0,
  })

  const layerEnRef = useRef<HTMLDivElement>(null)
  const layerCnRef = useRef<HTMLDivElement>(null)
  const circleDecoRef = useRef<HTMLDivElement>(null)

  // Main animation frame - always runs while active
  const frame = useCallback(() => {
    const s = state.current
    s.cx = lerp(s.cx, s.mx, 0.25)
    s.cy = lerp(s.cy, s.my, 0.25)
    s.cr = lerp(s.cr, s.tr, 0.2)

    const r = Math.max(0, s.cr)
    const inner = Math.max(0, r - feather)

    // English mask: hide inside circle
    if (layerEnRef.current) {
      if (r < 1) {
        layerEnRef.current.style.maskImage = 'none'
        layerEnRef.current.style.webkitMaskImage = 'none'
      } else {
        const mask = `radial-gradient(circle ${r}px at ${s.cx}px ${s.cy}px, transparent 0%, transparent ${inner}px, black ${r}px)`
        layerEnRef.current.style.maskImage = mask
        layerEnRef.current.style.webkitMaskImage = mask
      }
    }

    // Chinese mask: show inside circle
    if (layerCnRef.current) {
      if (r < 1) {
        const hidden = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)'
        layerCnRef.current.style.maskImage = hidden
        layerCnRef.current.style.webkitMaskImage = hidden
      } else {
        const mask = `radial-gradient(circle ${r}px at ${s.cx}px ${s.cy}px, black 0%, black ${inner}px, transparent ${r}px)`
        layerCnRef.current.style.maskImage = mask
        layerCnRef.current.style.webkitMaskImage = mask
      }
    }

    // Circle decoration - use lerped position for smoothness
    if (circleDecoRef.current) {
      circleDecoRef.current.style.left = s.cx + 'px'
      circleDecoRef.current.style.top = s.cy + 'px'
    }

    // Always continue - auto-float or mouse tracking needs continuous updates
    s.raf = requestAnimationFrame(frame)
  }, [feather])

  // Auto-float animation - updates target position
  const autoFrame = useCallback(() => {
    const s = state.current
    if (!s.inside) {
      s.autoTime += 0.006
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200
      const h = typeof window !== 'undefined' ? window.innerHeight : 800
      const isMobile = w <= 768
      const rangeX = isMobile ? 0.08 : 0.12
      const rangeY = isMobile ? 0.06 : 0.08
      s.mx = w / 2 + Math.sin(s.autoTime) * w * rangeX
      s.my = h / 2 + Math.cos(s.autoTime * 0.7) * h * rangeY
      s.tr = radius
    }
    s.autoRaf = requestAnimationFrame(autoFrame)
  }, [radius])

  // Start animation loops on mount
  useEffect(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth / 2 : 600
    const h = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
    state.current.mx = w
    state.current.my = h
    state.current.cx = w
    state.current.cy = h
    state.current.tr = radius

    // Start both loops
    state.current.raf = requestAnimationFrame(frame)
    state.current.autoRaf = requestAnimationFrame(autoFrame)

    return () => {
      if (state.current.raf) cancelAnimationFrame(state.current.raf)
      if (state.current.autoRaf) cancelAnimationFrame(state.current.autoRaf)
    }
  }, [autoFrame, frame, radius])

  const onMouseEnter = useCallback(() => {
    state.current.inside = true
    state.current.tr = radius
    circleDecoRef.current?.classList.add('visible')
  }, [radius])

  const onMouseLeave = useCallback(() => {
    state.current.inside = false
    state.current.tr = radius
    circleDecoRef.current?.classList.remove('visible')
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      state.current.mx = e.clientX
      state.current.my = e.clientY
    },
    []
  )

  return {
    layerEnRef,
    layerCnRef,
    circleDecoRef,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  }
}
