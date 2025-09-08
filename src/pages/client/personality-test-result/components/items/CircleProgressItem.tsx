import { LockCircle } from 'iconsax-reactjs'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type CircleProgressItemProps = {
  value: number
  size?: number
  stroke?: number
  colorClass?: string
  once?: boolean
  label?: string
  children?: React.ReactNode
  durationMs?: number
}

const CircleProgressItem = ({
  value,
  size = 140,
  stroke = 10,
  colorClass = 'text-emerald-500',
  once = true,
  label,
  children,
  durationMs = 900
}: CircleProgressItemProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const [progress, setProgress] = useState(0) // 0..1
  const radius = useMemo(() => (size - stroke) / 2, [size, stroke])
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius])
  const target = Math.max(0, Math.min(1, value / 100))

  useEffect(() => {
    let raf = 0
    let start = 0
    const from = progress
    const to = inView ? target : 0

    const step = (ts: number) => {
      if (!start) start = ts
      const t = Math.min(1, (ts - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(from + (to - from) * eased)
      if (t < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, durationMs])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            if (once) obs.disconnect()
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  const dashOffset = useMemo(() => circumference * (1 - progress), [circumference, progress])

  return (
    <div ref={rootRef} className='flex flex-col items-center select-none'>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={`block ${colorClass}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          className='opacity-20'
          stroke='currentColor'
          fill='none'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 0.1s linear'
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        <foreignObject x={0} y={0} width={size} height={size}>
          <div className='w-full h-full grid place-items-center'>
            {children ?? (
              <div className='text-center'>
                <div className='text-xl font-semibold'>{Math.round(progress * 100)}%</div>
              </div>
            )}
          </div>
        </foreignObject>
      </svg>
      {label && (
        <div className='flex flex-col md:flex-row items-center mt-3 gap-1' style={{ maxWidth: size }}>
          <p className='text-xs  font-semibold text-neutral-600'>{label}</p>
          <LockCircle className='text-neutral-600 w-4 h-4 shrink-0' />
        </div>
      )}
    </div>
  )
}

export default CircleProgressItem
