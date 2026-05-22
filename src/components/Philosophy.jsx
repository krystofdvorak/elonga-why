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
  {
    word: 'Informed',
    body: 'Not flooded with data. One clear signal each morning — so you act on it, not scroll past it.',
    emoji: '🎯',
  },
  {
    word: 'Sustainable',
    body: 'Built for the long game. Not peak performance for 3 weeks. Consistent output for decades.',
    emoji: '🌱',
  },
  {
    word: 'Honest',
    body: 'Your body doesn\'t lie. Elonga doesn\'t either. Hard truths about recovery beat comfortable guesses.',
    emoji: '🔬',
  },
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
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(244,23,91,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244,23,91,0.05) 0%, transparent 40%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Two-column layout: quote left, pillars right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left — philosophy statement */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'all 0.7s ease',
          }}>
            <span className="section-label-light">Our philosophy</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              For people who take
              <br />
              <span className="gradient-text">the long game seriously.</span>
            </h2>
            <p style={{
              fontSize: 18, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 24,
            }}>
              Most wellness tools are built for 25-year-olds tracking workouts. Elonga is built for people with demanding careers, real responsibilities, and a genuine interest in <em style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'normal', fontWeight: 600 }}>not burning out before 55.</em>
            </p>
            <p style={{
              fontSize: 16, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.4)',
            }}>
              3 minutes. One score. No streaks to break. No guilt loops.
              Just a clear daily signal — and the autonomy to act on it.
            </p>

            {/* Origin callout */}
            <div style={{
              marginTop: 36,
              padding: '18px 24px',
              background: 'rgba(255,255,255,0.04)',
              borderLeft: '3px solid var(--pink)',
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                <span style={{ color: '#fff', fontWeight: 700 }}>Born in European cardiology labs.</span>
                {' '}The methodology behind Elonga was developed over 30 years in clinical research — not in a Silicon Valley accelerator.
              </p>
            </div>
          </div>

          {/* Right — three identity pillars */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 20,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(32px)',
            transition: 'all 0.7s ease 0.15s',
          }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(244,23,91,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              >
                <span style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{p.emoji}</span>
                <div>
                  <div style={{
                    fontSize: 20, fontWeight: 800,
                    color: '#fff', letterSpacing: '-0.03em', marginBottom: 8,
                  }}>
                    {p.word}
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Who is Elonga for" row */}
        <div style={{
          marginTop: 72,
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 48,
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.3s',
        }}>
          <p style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
            marginBottom: 24, textAlign: 'center',
          }}>
            Elonga is for
          </p>
          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {[
              'Executives & managers', 'Founders & entrepreneurs', 'Doctors & lawyers',
              'Anyone over 35', 'People who\'ve burned out before', 'Parents with demanding careers',
              'People serious about longevity', 'Anyone tired of guessing',
            ].map((tag, i) => (
              <span key={i} style={{
                fontSize: 14, fontWeight: 600,
                color: 'rgba(255,255,255,0.6)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 100,
                padding: '8px 18px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
