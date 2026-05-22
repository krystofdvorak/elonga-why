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

const Stars = () => (
  <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1l1.545 3.09 3.455.5-2.5 2.41.59 3.41L7 8.82l-3.09 1.59.59-3.41L2 4.59l3.455-.5L7 1z"
          fill="#F4175B"/>
      </svg>
    ))}
  </div>
)

const testimonials = [
  {
    quote: "Elonga flagged 9 low-readiness days before I even felt tired. I took a long weekend instead of a 3-month sick leave.",
    name: "Ondřej V.",
    role: "44, Prague",
    avatar: "OV",
    color: "#F4175B",
    tag: "Burnout",
  },
  {
    quote: "Low readiness on Tuesday. Flu on Thursday. First time in my life I saw it coming — and rescheduled before I had to cancel.",
    name: "Jana R.",
    role: "39, Brno",
    avatar: "JR",
    color: "#9B1FE8",
    tag: "Early Warning",
  },
  {
    quote: "My biological age dropped 4 years in 6 months. Turns out two glasses of wine were costing me 30% of my recovery.",
    name: "Tomáš B.",
    role: "38, founder",
    avatar: "TB",
    color: "#1FE87F",
    tag: "Longevity",
  },
  {
    quote: "I thought I handled stress well. Elonga showed my nervous system in high-alert mode Monday through Thursday. I adjusted my schedule. Different person.",
    name: "David M.",
    role: "41, consultant",
    avatar: "DM",
    color: "#1FA8E8",
    tag: "Stress",
  },
  {
    quote: "First objective data I've ever had on whether what I'm doing is actually working. Not feelings — numbers.",
    name: "Richard H.",
    role: "47, lawyer",
    avatar: "RH",
    color: "#E87F1F",
    tag: "Longevity",
  },
  {
    quote: "I finally understand why some mornings feel heavy even after 8 hours of sleep. I can see it in the data now.",
    name: "Lucie H.",
    role: "35, teacher",
    avatar: "LH",
    color: "#E8C81F",
    tag: "Habits",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section style={{
      background: '#fff',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Real results</span>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', color: 'var(--navy)', marginBottom: 16 }}>
            2,550+ people already
            <br />
            <span className="gradient-text">know what their body needs.</span>
          </h2>
        </div>

        {/* Testimonial masonry grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: 'var(--gray-light)',
              borderRadius: 20,
              padding: '28px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(28px)',
              transition: `all 0.55s ease ${i * 0.08}s`,
              display: 'flex', flexDirection: 'column', gap: 16,
              borderTop: `3px solid ${t.color}`,
            }}>
              <Stars />

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontSize: 11, fontWeight: 700,
                color: t.color,
                background: `${t.color}12`,
                borderRadius: 100, padding: '3px 10px',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                width: 'fit-content',
              }}>
                {t.tag}
              </span>

              <p style={{
                fontSize: 15, color: 'var(--navy)',
                lineHeight: 1.7, fontStyle: 'italic',
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${t.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: t.color, flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
