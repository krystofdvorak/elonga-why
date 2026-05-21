import { useRef, useEffect, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="14" cy="10" r="3" fill="currentColor"/>
        <path d="M8 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Wake up',
    subtitle: 'First thing, before coffee',
    body: 'Right after waking — before caffeine, food, or stress enter the picture — your baseline is cleanest.',
    time: 'Seconds 0–5',
    color: '#F4175B',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="4" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M11 9h6M11 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Attach sensor',
    subtitle: 'Optical sensor on forearm',
    body: 'Press the Elonga bracelet against your inner forearm. The optical sensor detects heartbeat intervals to millisecond precision.',
    time: 'Seconds 5–30',
    color: '#E8105A',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14 L8 8 L12 16 L16 6 L20 18 L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'HRV scan',
    subtitle: 'Spectral analysis in real time',
    body: 'The algorithm — trained on 3M+ measurements — runs clinical-grade spectral HRV analysis. Same as a sports lab, compressed into 3 minutes.',
    time: '3 minutes',
    color: '#D00F52',
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14l5 5 11-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Your day, optimized',
    subtitle: 'Readiness score + plan',
    body: 'A clear daily recommendation: push hard, train easy, or rest. Plus insight into why — which habits are helping or hurting.',
    time: 'Instant result',
    color: '#B80E48',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  // Auto-cycle
  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 2800)
    return () => clearInterval(t)
  }, [inView])

  return (
    <section id="how-it-works" ref={ref} style={{
      background: 'var(--gray-light)',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">How it works</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--navy)', marginBottom: 16 }}>
            Three minutes.
            <br />
            <span className="gradient-text">Millisecond precision.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--gray-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            The same analysis that takes 20 minutes in a sports lab — compressed by an algorithm trained on millions of real-world measurements.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginBottom: 56,
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? 'var(--navy)' : '#fff',
                borderRadius: 20,
                padding: '28px 24px',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: `${i * 0.1}s`,
                border: active === i ? '2px solid transparent' : '2px solid transparent',
                boxShadow: active === i ? '0 16px 40px rgba(19,22,42,0.18)' : 'none',
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                color: active === i ? 'rgba(255,255,255,0.35)' : 'var(--gray-muted)',
                marginBottom: 16, textTransform: 'uppercase',
              }}>
                Step {step.number}
              </div>

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: active === i ? 'rgba(244,23,91,0.15)' : 'var(--gray-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
                color: active === i ? 'var(--pink)' : 'var(--navy)',
                transition: 'all 0.3s',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontSize: 18, fontWeight: 800,
                color: active === i ? '#fff' : 'var(--navy)',
                marginBottom: 4, letterSpacing: '-0.02em',
              }}>
                {step.title}
              </h3>
              <div style={{
                fontSize: 12, fontWeight: 600,
                color: active === i ? 'var(--pink)' : 'var(--pink)',
                marginBottom: 12, letterSpacing: '-0.01em',
              }}>
                {step.time}
              </div>
              <p style={{
                fontSize: 14, lineHeight: 1.65,
                color: active === i ? 'rgba(255,255,255,0.65)' : 'var(--gray-muted)',
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div style={{
          background: '#fff',
          borderRadius: 20,
          padding: '28px 36px',
          display: 'flex', alignItems: 'center', gap: 20,
          flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
          justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ fontSize: 14, color: 'var(--gray-muted)', marginBottom: 4 }}>The result</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              No 24/7 wearable. No obsessive tracking. Just one clear morning signal.
            </p>
          </div>
          <a href="https://elonga.com/en-us" className="btn-primary" style={{ flexShrink: 0 }}>
            Try it today
          </a>
        </div>
      </div>
    </section>
  )
}
