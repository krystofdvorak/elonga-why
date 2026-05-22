import { useRef, useEffect, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const pillars = [
  { word: 'Informed', body: 'One clear signal every morning. Act on it — don\'t scroll past it.', emoji: '🎯' },
  { word: 'Sustainable', body: 'Not peak performance for 3 weeks. Consistent energy for decades.', emoji: '🌱' },
  { word: 'Honest', body: 'Your body doesn\'t lie. Neither does Elonga.', emoji: '🔬' },
]

export default function Philosophy() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} style={{
      background: 'var(--navy)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(244,23,91,0.07) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64, alignItems: 'center',
        }}>
          {/* Left */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'all 0.7s ease',
          }}>
            <span className="section-label-light">Our philosophy</span>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Wellness without
              <br />
              <span className="gradient-text">the obsession.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
              Most health apps want you addicted to your data. Elonga wants you to check in once, get a clear answer, and go live your life.
            </p>
            <div style={{
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.04)',
              borderLeft: '3px solid var(--pink)',
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                <span style={{ color: '#fff', fontWeight: 700 }}>Born in European cardiology labs.</span>
                {' '}30 years of clinical HRV research — not a Silicon Valley side project.
              </p>
            </div>
          </div>

          {/* Right */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 16,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(32px)',
            transition: 'all 0.7s ease 0.15s',
          }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '20px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(244,23,91,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{p.emoji}</span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {p.word}
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
