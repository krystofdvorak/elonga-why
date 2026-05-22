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
    tag: 'Energy & Recovery',
    headline: 'Know if today is a push day — or a protect-your-energy day.',
    body: 'Your Readiness score tells you exactly where your nervous system stands every morning. Stop running on empty. Stop wasting good energy on bad days.',
    stat: '73% of users report more consistent daily energy within 30 days',
    color: '#F4175B',
    bg: '#FFF0F4',
  },
  {
    id: 'stress',
    icon: '🧠',
    tag: 'Stress & Nervous System',
    headline: 'See your stress load building — days before you crash.',
    body: 'Elonga maps sympathetic vs. parasympathetic balance every day. Watch how your calendar, sleep, and habits affect your nervous system — in data, not feelings.',
    stat: 'Stress visible 2–4 days before you consciously feel it',
    color: '#9B1FE8',
    bg: '#F5F0FF',
  },
  {
    id: 'focus',
    icon: '🎯',
    tag: 'Focus & Output',
    headline: 'Schedule your hardest work for when your body is actually ready.',
    body: 'HRV correlates strongly with cognitive performance. Elonga shows you your peak focus windows — so your best thinking lands on your most important work.',
    stat: 'High-readiness days correlate with 31% better decision quality',
    color: '#E87F1F',
    bg: '#FFF6F0',
  },
  {
    id: 'early-warning',
    icon: '🛡️',
    tag: 'Early Warning',
    headline: 'A 24–72h heads-up before you get sick.',
    body: 'HRV drops sharply as your immune system activates. Elonga flags it before you feel the first symptom — giving you time to clear your calendar before you\'re forced to.',
    stat: '71% of illnesses detected 1–3 days before first symptom',
    color: '#1FA8E8',
    bg: '#F0F8FF',
  },
  {
    id: 'biological-age',
    icon: '⏳',
    tag: 'Biological Age',
    headline: 'Find out how fast — or slow — you\'re actually aging.',
    body: 'Your Functional Age score compares your HRV to thousands of same-age peers. Small lifestyle changes show up as measurable biological progress within weeks.',
    stat: 'Users report avg. −3.2 years functional age in 6 months',
    color: '#1FE87F',
    bg: '#F0FFF8',
  },
  {
    id: 'habits',
    icon: '📊',
    tag: 'Habit Insights',
    headline: 'See exactly what alcohol, sleep, and stress do to your body.',
    body: 'Log habits, Elonga correlates them with your HRV. Finally understand which of your routines are investing in your future — and which are quietly withdrawing from it.',
    stat: '83% of users change at least one habit within 30 days',
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

              {/* Stat chip */}
              <div style={{
                marginTop: 'auto',
                background: `${page.color}0F`,
                borderRadius: 12,
                padding: '10px 14px',
                fontSize: 12, fontWeight: 600,
                color: page.color,
                lineHeight: 1.4,
              }}>
                📈 {page.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
