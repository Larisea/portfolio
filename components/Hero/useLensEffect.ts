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
  })

  const layerEnRef = useRef<HTMLDivElement>(null)
  const layerCnRef = useRef<HTMLDivElement>(null)
  const circleDecoRef = useRef<HTMLDivElement>(null)

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

    // Circle decoration
    if (circleDecoRef.current) {
      circleDecoRef.current.style.left = s.mx + 'px'
      circleDecoRef.current.style.top = s.my + 'px'
    }

    const done = Math.abs(s.cr - s.tr) < 0.5
    if (!done) {
      s.raf = requestAnimationFrame(frame)
    } else {
      s.cr = s.tr
      s.raf = null
    }
  }, [feather])

  const tick = useCallback(() => {
    if (!state.current.raf) {
      state.current.raf = requestAnimationFrame(frame)
    }
  }, [frame])

  const onMouseEnter = useCallback(() => {
    state.current.inside = true
    state.current.tr = radius
    circleDecoRef.current?.classList.add('visible')
    tick()
  }, [radius, tick])

  const onMouseLeave = useCallback(() => {
    state.current.inside = false
    state.current.tr = 0
    circleDecoRef.current?.classList.remove('visible')
    tick()
  }, [tick])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      state.current.mx = e.clientX
      state.current.my = e.clientY
      tick()
    },
    [tick]
  )

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (state.current.raf) {
        cancelAnimationFrame(state.current.raf)
      }
    }
  }, [])

  return {
    layerEnRef,
    layerCnRef,
    circleDecoRef,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  }
}
