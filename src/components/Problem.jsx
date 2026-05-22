import { useRef, useEffect, useState } from 'react'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const problems = [
  {
    emoji: '🔋',
    title: 'Burnout doesn\'t feel like burnout.',
    body: 'It feels like a normal Tuesday. Your nervous system is depleted weeks before your mind admits it.',
    color: '#F4175B',
  },
  {
    emoji: '📉',
    title: 'Stress builds invisibly.',
    body: 'It stacks silently in your autonomic nervous system. You feel "fine" — right until you crash.',
    color: '#E8105A',
  },
  {
    emoji: '🤒',
    title: 'Illness starts 24–72h before symptoms.',
    body: 'Your HRV drops the day before you get sick. Without tracking it, you never saw it coming.',
    color: '#D00F52',
  },
]

export default function Problem() {
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">The problem</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--navy)', maxWidth: 600, margin: '0 auto 16px' }}>
            Your body sends signals.
            <br />
            <span className="gradient-text">You just can't read them.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: 'var(--gray-light)', borderRadius: 24, padding: '32px',
              borderLeft: `3px solid ${p.color}`,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: `all 0.6s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{p.emoji}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--gray-muted)', lineHeight: 1.65 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 48, padding: '32px',
          background: 'linear-gradient(135deg, var(--navy) 0%, #1a0d1f 100%)',
          borderRadius: 20,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease 0.4s',
        }}>
          <p style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            Elonga reads what you can't feel. Every morning. In 3 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
