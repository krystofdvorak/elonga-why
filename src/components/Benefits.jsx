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

const subpages = [
  {
    id: 'recovery',
    icon: '⚡',
    tag: 'Recovery',
    headline: 'Know if today is a push day or a rest day.',
    body: 'One clear score every morning. No guessing, no overreaching.',
    color: '#F4175B',
    bg: '#FFF0F4',
  },
  {
    id: 'stress',
    icon: '🧠',
    tag: 'Stress',
    headline: 'See stress building before you feel it.',
    body: 'Track your nervous system balance daily and catch burnout before it catches you.',
    color: '#9B1FE8',
    bg: '#F5F0FF',
  },
  {
    id: 'focus',
    icon: '🎯',
    tag: 'Focus & Energy',
    headline: 'More energy. Better days. On demand.',
    body: 'Know your peak hours and protect them. Your body has a schedule — now you do too.',
    color: '#E87F1F',
    bg: '#FFF6F0',
  },
  {
    id: 'early-warning',
    icon: '🛡️',
    tag: 'Early Warning',
    headline: 'Know you\'re getting sick before you feel it.',
    body: '24–72h warning before the first symptom. Never get blindsided again.',
    color: '#1FA8E8',
    bg: '#F0F8FF',
  },
  {
    id: 'biological-age',
    icon: '⏳',
    tag: 'Biological Age',
    headline: 'Find out how fast you\'re actually aging.',
    body: 'Your functional age vs. peers — and how to move the number in the right direction.',
    color: '#1FE87F',
    bg: '#F0FFF8',
  },
  {
    id: 'habits',
    icon: '📊',
    tag: 'Habits',
    headline: 'See what your habits actually do to your body.',
    body: 'Alcohol, sleep, coffee — finally measured, not guessed.',
    color: '#E8C81F',
    bg: '#FFFDF0',
  },
]

export default function Benefits() {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="recovery" ref={ref} style={{
      background: '#fff',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Explore what Elonga tells you</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--navy)', maxWidth: 640, margin: '0 auto 16px' }}>
            Six things Elonga tells you
            <br />
            <span className="gradient-text">that no one else does.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--gray-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Each 3-minute measurement feeds into six dimensions that shape your energy, decisions, and how fast you age.
          </p>
        </div>

        {/* 6-card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {subpages.map((page, i) => (
            <div
              key={page.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? page.bg : 'var(--gray-light)',
                borderRadius: 24,
                padding: '32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${i * 0.08}s`,
                border: hovered === i ? `1.5px solid ${page.color}22` : '1.5px solid transparent',
                boxShadow: hovered === i ? `0 16px 40px ${page.color}18` : 'none',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}
            >
              {/* Tag row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: `${page.color}15`,
                  borderRadius: 100, padding: '5px 12px',
                }}>
                  <span style={{ fontSize: 14 }}>{page.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: page.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {page.tag}
                  </span>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: `${page.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: page.color,
                  transition: 'transform 0.2s',
                  transform: hovered === i ? 'translateX(2px)' : 'none',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: 19, fontWeight: 800, color: 'var(--navy)',
                  letterSpacing: '-0.025em', lineHeight: 1.3, marginBottom: 10
                }}>
                  {page.headline}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gray-muted)', lineHeight: 1.7 }}>
                  {page.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
