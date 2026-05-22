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

const stats = [
  { number: '97%', label: 'HRV accuracy', sub: 'vs. lab session' },
  { number: '3M+', label: 'Measurements', sub: 'trained the algorithm' },
  { number: '30+', label: 'Years research', sub: 'by Dr. Šlachta, PhD' },
  { number: 'WHO', label: 'Collaboration', sub: 'methodology validated' },
  { number: '71%', label: 'Illness caught', sub: 'before symptoms' },
  { number: '2002', label: 'First study', sub: 'published' },
]

export default function Science() {
  const [ref, inView] = useInView()

  return (
    <section id="science" ref={ref} style={{
      background: 'linear-gradient(170deg, var(--navy) 0%, #1a0d1f 100%)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(244,23,91,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label-light">The science</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: '#fff', marginBottom: 16 }}>
            30 years of research.
            <br />
            <span className="gradient-text">3 minutes of your morning.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 420, margin: '0 auto' }}>
            Clinical-grade HRV analysis. Built in cardiology labs, not Silicon Valley.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 16,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '28px 20px',
              textAlign: 'center',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.5s ease ${i * 0.07}s`,
            }}>
              <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 8 }}>
                {s.number}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
