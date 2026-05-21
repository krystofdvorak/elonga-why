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

const pillars = [
  {
    number: '3M+',
    label: 'Measurements',
    detail: 'Real-world data trained the 3-minute algorithm — validated against lab-standard 20-minute sessions.',
  },
  {
    number: '30+',
    label: 'Years of HRV research',
    detail: 'Co-founder Dr. Radim Šlachta, PhD has spent over three decades developing the spectral HRV methodology.',
  },
  {
    number: '2002',
    label: 'First published study',
    detail: 'Spectral Analysis of Heart Rate Variability — the methodological foundation that powers every Elonga measurement.',
  },
  {
    number: 'WHO',
    label: 'Collaboration',
    detail: 'The methodology has been validated through clinical practice and collaboration with the World Health Organization.',
  },
]

const methodSteps = [
  {
    title: 'Optical detection',
    body: 'The sensor reads heartbeat intervals down to 1ms precision using photoplethysmography (PPG) technology.'
  },
  {
    title: 'Spectral HRV analysis',
    body: 'Rather than simple RMSSD (used by most wearables), Elonga runs full frequency-domain spectral analysis — separating sympathetic and parasympathetic contributions.'
  },
  {
    title: 'Autonomic nervous system mapping',
    body: 'The algorithm identifies the ratio of stress (LF) to recovery (HF) activity — the same metric used in cardiology and elite sports labs.'
  },
  {
    title: 'Personalized baseline',
    body: 'After ~14 days, Elonga calibrates to your unique physiology. Your readiness score becomes increasingly personal and accurate over time.'
  },
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
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(244,23,91,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label-light">The science</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: '#fff', marginBottom: 16 }}>
            30 years of research.
            <br />
            <span className="gradient-text">3 minutes of your morning.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
            Spectral HRV analysis was developed in cardiology labs, not fitness startups. Elonga brings it to your forearm.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginBottom: 64,
        }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '28px 24px',
              textAlign: 'center',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}>
              <div style={{
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800,
                color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 6
              }}>
                {p.number}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--pink)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                {p.label}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Method breakdown */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 24,
          padding: '40px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 32, letterSpacing: '-0.02em' }}>
            What happens inside those 3 minutes
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}>
            {methodSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--pink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: '#fff', marginTop: 2,
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6, letterSpacing: '-0.01em' }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* vs other wearables note */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, justifyContent: 'center' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', flexShrink: 0 }} />
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Most smartwatches use only RMSSD — a single HRV metric. Elonga runs full spectral analysis, separating sympathetic and parasympathetic contributions for a clinically complete picture.
          </p>
        </div>
      </div>
    </section>
  )
}
