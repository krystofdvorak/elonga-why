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
    body: 'It feels like a normal Tuesday. Then a normal Wednesday. Your nervous system is running on empty weeks before your mind catches up.',
    color: '#F4175B',
  },
  {
    emoji: '📉',
    title: 'Work stress accumulates invisibly.',
    body: 'Deadlines, sleep debt, back-to-back meetings — it all stacks in your autonomic nervous system. You feel "fine" right until you don\'t.',
    color: '#E8105A',
  },
  {
    emoji: '🤒',
    title: 'Illness starts 24–72h before symptoms.',
    body: 'Your HRV drops sharply the day before you get sick. Without tracking it, you fly into your biggest week of the quarter already compromised.',
    color: '#D00F52',
  },
]

export default function Problem() {
  const [ref, inView] = useInView(0.15)

  return (
    <section ref={ref} style={{
      background: '#fff',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">The problem</span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: 'var(--navy)',
            maxWidth: 680, margin: '0 auto 20px',
          }}>
            You manage everything.
            <br />
            <span className="gradient-text">Except how you actually feel.</span>
          </h2>
          <p style={{
            fontSize: 18, color: 'var(--gray-muted)',
            maxWidth: 520, margin: '0 auto',
            lineHeight: 1.7,
          }}>
            High performers are great at pushing through. That's also exactly why they crash harder. Your body gives signals days in advance — you just don't have the tool to read them.
          </p>
        </div>

        {/* Problem cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: 'var(--gray-light)',
              borderRadius: 24,
              padding: '36px 32px',
              borderLeft: `3px solid ${p.color}`,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
              transition: `all 0.6s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{p.emoji}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--gray-muted)', lineHeight: 1.7 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div style={{
          textAlign: 'center', marginTop: 64,
          padding: '40px 32px',
          background: 'linear-gradient(135deg, var(--navy) 0%, #1a0d1f 100%)',
          borderRadius: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease 0.4s',
        }}>
          <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>
            Elonga reads what you can't feel.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
            Every morning. In 3 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
