import { useRef, useEffect, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ margin: '0 auto' }}>
    <circle cx="9" cy="9" r="8.5" fill="#F4175B" fillOpacity=".12"/>
    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#F4175B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ margin: '0 auto' }}>
    <path d="M6 6l6 6M12 6l-6 6" stroke="#AAABB2" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const Half = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ margin: '0 auto' }}>
    <circle cx="9" cy="9" r="8.5" fill="#AAABB2" fillOpacity=".12"/>
    <path d="M6 9h6" stroke="#AAABB2" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const rows = [
  { feature: 'Wearing time', elonga: '3 min/day', watch: '24/7', ring: '24/7' },
  { feature: 'HRV method', elonga: 'Spectral (clinical-grade)', watch: 'RMSSD only', ring: 'RMSSD only' },
  { feature: 'Daily recommendation', elonga: <Check/>, watch: <Cross/>, ring: <Half/> },
  { feature: 'Illness early warning', elonga: <Check/>, watch: <Cross/>, ring: <Cross/> },
  { feature: 'Biological age', elonga: <Check/>, watch: <Cross/>, ring: <Cross/> },
  { feature: 'Habit correlation', elonga: <Check/>, watch: <Half/>, ring: <Half/> },
  { feature: 'Skin irritation risk', elonga: 'None', watch: 'Common', ring: 'Possible' },
  { feature: 'Battery life', elonga: 'Months', watch: '1–2 days', ring: '4–7 days' },
]

export default function Comparison() {
  const [ref, inView] = useInView()

  return (
    <section style={{
      background: 'var(--gray-light)',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Not another always-on tracker</span>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', color: 'var(--navy)', marginBottom: 16 }}>
            Why not just wear
            <br />
            <span className="gradient-text">a smartwatch?</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--gray-muted)', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
            There are fundamental differences in methodology — not just features.
          </p>
        </div>

        {/* Table */}
        <div style={{
          background: '#fff',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(19,22,42,0.06)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 1.4fr 1.3fr 1.3fr',
            background: 'var(--navy)',
            padding: '18px 24px',
            gap: 0,
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Feature
            </div>
            {['Elonga', 'Smartwatch', 'HRV Ring'].map((h, i) => (
              <div key={h} style={{
                textAlign: 'center', fontSize: 13, fontWeight: 700,
                color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)',
                letterSpacing: '-0.01em',
              }}>
                {i === 0 && (
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--pink)',
                    borderRadius: 100,
                    padding: '2px 10px',
                    fontSize: 12,
                  }}>
                    {h}
                  </div>
                )}
                {i > 0 && h}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 1.4fr 1.3fr 1.3fr',
              padding: '16px 24px', gap: 0,
              borderBottom: i < rows.length - 1 ? '1px solid var(--gray-light)' : 'none',
              background: i % 2 === 0 ? '#fff' : 'rgba(241,242,249,0.5)',
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center' }}>
                {row.feature}
              </div>
              {[row.elonga, row.watch, row.ring].map((val, j) => (
                <div key={j} style={{
                  textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: j === 0 ? 700 : 500,
                  color: j === 0 ? 'var(--pink)' : 'var(--gray-muted)',
                  background: j === 0 ? 'rgba(244,23,91,0.03)' : 'transparent',
                }}>
                  {typeof val === 'string' ? val : val}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{
          textAlign: 'center', marginTop: 20,
          fontSize: 13, color: 'var(--gray-muted)', lineHeight: 1.6
        }}>
          Spectral HRV analysis separates low-frequency (sympathetic/stress) and high-frequency (parasympathetic/recovery) components —
          giving a complete picture that single-metric RMSSD cannot provide.
        </p>
      </div>
    </section>
  )
}
