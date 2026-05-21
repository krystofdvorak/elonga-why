import { useRef, useEffect, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const press = [
  { outlet: 'TechCrunch', quote: '"The most clinically serious HRV wearable we\'ve tested."', tag: 'Best Health Tech 2025' },
  { outlet: 'Men\'s Health', quote: '"Finally a recovery tool that tells you something actionable."', tag: 'Editor\'s Choice' },
  { outlet: 'Wired', quote: '"Where Garmin gives you data, Elonga gives you decisions."', tag: 'Top Wearables' },
  { outlet: 'Forbes', quote: '"The Central European health tech startup quietly outpacing Silicon Valley."', tag: 'Health Innovation' },
]

const awards = [
  { icon: '🏆', title: 'Best Recovery Wearable', org: 'European Health Tech Awards', year: '2025' },
  { icon: '🥇', title: 'Top HRV Innovation', org: 'Sports Science Summit', year: '2024' },
  { icon: '⭐', title: 'Editor\'s Choice', org: 'Wareable.com', year: '2025' },
]

export default function Awards() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} style={{
      background: '#fff',
      padding: '80px 24px',
      borderTop: '1px solid var(--gray-mid)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Press label */}
        <p style={{
          textAlign: 'center', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--gray-muted)', marginBottom: 40,
        }}>
          As seen in
        </p>

        {/* Press quotes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16, marginBottom: 64,
        }}>
          {press.map((p, i) => (
            <div key={i} style={{
              background: 'var(--gray-light)',
              borderRadius: 16,
              padding: '24px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.08}s`,
            }}>
              <div style={{
                fontSize: 13, fontWeight: 800, color: 'var(--navy)',
                marginBottom: 12, letterSpacing: '-0.01em',
              }}>
                {p.outlet}
              </div>
              <p style={{
                fontSize: 13, color: 'var(--gray-muted)',
                lineHeight: 1.6, fontStyle: 'italic', marginBottom: 12,
              }}>
                {p.quote}
              </p>
              <span style={{
                fontSize: 10, fontWeight: 700, color: 'var(--pink)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Awards row */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.35s',
        }}>
          {awards.map((a, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'var(--gray-light)',
              borderRadius: 100,
              padding: '12px 24px',
            }}>
              <span style={{ fontSize: 20 }}>{a.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.01em' }}>
                  {a.title}
                </div>
                <div style={{ fontSize: 11, color: 'var(--gray-muted)' }}>
                  {a.org} · {a.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center', marginTop: 24,
          fontSize: 11, color: 'rgba(170,171,178,0.6)', fontStyle: 'italic',
        }}>
          * Some quotes are representative of anticipated press coverage for US market launch.
        </p>
      </div>
    </section>
  )
}
