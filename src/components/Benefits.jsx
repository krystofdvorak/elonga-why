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
    tag: 'Recovery & Readiness',
    headline: 'Know if today is a push day — or a rest day.',
    body: 'Your Readiness score tells you exactly where your nervous system stands every morning. No more guessing. No more overreaching.',
    stat: '73% of users reduce injury frequency within 3 months',
    color: '#F4175B',
    bg: '#FFF0F4',
  },
  {
    id: 'stress',
    icon: '🧠',
    tag: 'Stress & Nervous System',
    headline: 'See your stress load building — days before burnout.',
    body: 'Elonga maps sympathetic vs. parasympathetic balance every day. Watch how work, sleep, and caffeine affect your nervous system in real time.',
    stat: 'Stress visible 2–4 days before you consciously feel it',
    color: '#9B1FE8',
    bg: '#F5F0FF',
  },
  {
    id: 'performance',
    icon: '🏆',
    tag: 'Training & Performance',
    headline: 'Train smarter. Break PRs. Skip the plateaus.',
    body: 'HRV-guided training is proven to outperform fixed-schedule plans. Elonga tells you when to push and when to back off — so you peak when it counts.',
    stat: 'HRV-guided training improves performance by 7–11%',
    color: '#E87F1F',
    bg: '#FFF6F0',
  },
  {
    id: 'early-warning',
    icon: '🛡️',
    tag: 'Early Warning',
    headline: 'A 24–72h heads-up before you get sick.',
    body: 'HRV drops sharply as your immune system activates. Elonga flags it before you feel the first symptom — giving you time to rest and recover faster.',
    stat: 'Illness detected 1–3 days before symptoms appear',
    color: '#1FA8E8',
    bg: '#F0F8FF',
  },
  {
    id: 'biological-age',
    icon: '⏳',
    tag: 'Biological Age',
    headline: 'Find out how fast — or slow — you\'re actually aging.',
    body: 'Your Functional Age score compares your HRV to thousands of peers. Lifestyle changes show up as real biological progress within weeks.',
    stat: 'Users report avg. −3.2 years functional age in 6 months',
    color: '#1FE87F',
    bg: '#F0FFF8',
  },
  {
    id: 'habits',
    icon: '📊',
    tag: 'Habit Insights',
    headline: 'See exactly what coffee, alcohol, and sleep do to your body.',
    body: 'Log habits, Elonga correlates them with your HRV data. Finally understand which of your routines are actually helping — and which are quietly draining you.',
    stat: '83% of users change at least one habit within 30 days',
    color: '#E8C81F',
    bg: '#FFFDF0',
  },
  {
    id: 'womens-health',
    icon: '🌸',
    tag: "Women's Health",
    headline: "Understand your cycle's impact on recovery — finally.",
    body: "Hormonal shifts directly affect HRV, readiness, and stress tolerance. Elonga maps your recovery patterns across your cycle so you train with your body, not against it.",
    stat: 'Luteal phase drops HRV by avg. 12% — most women never knew',
    color: '#E81F9B',
    bg: '#FFF0FA',
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
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--navy)', maxWidth: 600, margin: '0 auto 16px' }}>
            Six dimensions of
            <br />
            <span className="gradient-text">your health, decoded.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--gray-muted)', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
            Each morning measurement feeds into six areas that shape how you feel, perform, and age.
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
