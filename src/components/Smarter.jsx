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

const stages = [
  {
    day: 'Day 1',
    title: 'Your baseline',
    color: '#F4175B',
    insights: [
      { label: 'Readiness score', value: '62', unit: '/100', note: 'First measurement' },
      { label: 'HRV baseline', value: '—', unit: '', note: 'Calibrating...' },
      { label: 'Functional age', value: '—', unit: '', note: 'Needs 3 days' },
    ],
    desc: 'Elonga takes your first measurement. No baseline yet — just raw data starting to accumulate.',
  },
  {
    day: 'Day 14',
    title: 'Personal calibration',
    color: '#E8105A',
    insights: [
      { label: 'Readiness score', value: '71', unit: '/100', note: 'Trending up' },
      { label: 'HRV baseline', value: '58', unit: 'ms', note: 'Your personal norm' },
      { label: 'Functional age', value: '34', unit: 'yrs', note: 'vs. 36 actual' },
    ],
    desc: 'Your personal HRV baseline is set. Readiness scores now compare against *you* — not population averages.',
  },
  {
    day: 'Day 30',
    title: 'Habit patterns emerge',
    color: '#D00F52',
    insights: [
      { label: 'Readiness score', value: '78', unit: '/100', note: '+16 from day 1' },
      { label: 'Top habit impact', value: 'Sleep', unit: '+11%', note: 'HRV boost' },
      { label: 'Stress pattern', value: 'Mon–Wed', unit: '', note: 'Work peak' },
    ],
    desc: 'Elonga spots correlations: which habits lift your HRV, which tank it. Patterns become visible.',
  },
  {
    day: 'Day 90',
    title: 'Fully personal intelligence',
    color: '#B80E48',
    insights: [
      { label: 'Readiness score', value: '84', unit: '/100', note: 'New personal best' },
      { label: 'Illness warnings', value: '3×', unit: '', note: 'All caught early' },
      { label: 'Functional age', value: '31', unit: 'yrs', note: '−3 from start' },
    ],
    desc: 'Your Elonga knows you. Recommendations are built entirely around your physiology, your life, your patterns.',
  },
]

export default function Smarter() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActive(a => (a + 1) % stages.length), 3000)
    return () => clearInterval(t)
  }, [inView])

  const s = stages[active]

  return (
    <section ref={ref} style={{
      background: 'var(--gray-light)',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">It gets smarter every day</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--navy)', marginBottom: 16 }}>
            The more you measure,
            <br />
            <span className="gradient-text">the more personal it gets.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--gray-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Unlike generic fitness trackers, Elonga calibrates to <em style={{ fontStyle: 'normal', fontWeight: 700, color: 'var(--navy)' }}>you</em> — your baseline, your habits, your life.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          alignItems: 'start',
        }}>
          {/* Left: stage selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {stages.map((stage, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                background: active === i ? 'var(--navy)' : '#fff',
                border: active === i ? '2px solid transparent' : '2px solid rgba(19,22,42,0.08)',
                borderRadius: 16, padding: '20px 24px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', gap: 16,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.08}s`,
              }}>
                {/* Progress dot */}
                <div style={{
                  width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                  background: active === i ? stage.color : 'rgba(19,22,42,0.15)',
                  boxShadow: active === i ? `0 0 0 4px ${stage.color}30` : 'none',
                  transition: 'all 0.3s',
                }} />
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: active === i ? stage.color : 'var(--gray-muted)',
                    marginBottom: 2,
                  }}>
                    {stage.day}
                  </div>
                  <div style={{
                    fontSize: 16, fontWeight: 700,
                    color: active === i ? '#fff' : 'var(--navy)',
                    letterSpacing: '-0.02em',
                  }}>
                    {stage.title}
                  </div>
                  {active === i && (
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 6, lineHeight: 1.5 }}>
                      {stage.desc}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: mock app card */}
          <div style={{
            background: 'var(--navy)',
            borderRadius: 24,
            padding: '32px',
            position: 'sticky', top: 100,
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.3s',
          }}>
            {/* App header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                  elonga · {s.day}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                  {s.title}
                </div>
              </div>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: `${s.color}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
              }}>
                📱
              </div>
            </div>

            {/* Insight rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s.insights.map((insight, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 12, padding: '14px 18px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 2 }}>
                      {insight.label}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
                      {insight.note}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>
                      {insight.value}
                    </span>
                    <span style={{ fontSize: 13, color: s.color, fontWeight: 700, marginLeft: 3 }}>
                      {insight.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Calibration progress</span>
                <span style={{ fontSize: 11, color: s.color, fontWeight: 700 }}>
                  {['3%', '25%', '55%', '100%'][active]}
                </span>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                <div style={{
                  height: '100%',
                  width: ['3%', '25%', '55%', '100%'][active],
                  background: `linear-gradient(90deg, ${s.color}, #F77AA0)`,
                  borderRadius: 2,
                  transition: 'width 0.8s ease',
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
