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
    quote: "I've burned out twice in my career. The third time I saw it coming — Elonga flagged 9 consecutive low-readiness days before I even felt tired. I took a long weekend instead of a 3-month sick leave.",
    name: "Ondřej V.",
    role: "CFO, fintech company, 44",
    avatar: "OV",
    color: "#F4175B",
    tag: "Burnout prevention",
  },
  {
    quote: "I got the low-readiness warning on a Tuesday. By Thursday I was in bed with flu. First time in my life I saw it coming — I rescheduled a board presentation before I had to cancel it last minute.",
    name: "Jana R.",
    role: "Marketing director, 39",
    avatar: "JR",
    color: "#9B1FE8",
    tag: "Early Warning",
  },
  {
    quote: "My biological age dropped 4 years in 6 months. The habit data showed me that two glasses of wine were costing me 30% of my recovery quality. I didn't quit drinking — I just stopped doing it on work nights.",
    name: "Tomáš B.",
    role: "Founder, SaaS company, 38",
    avatar: "TB",
    color: "#1FE87F",
    tag: "Longevity",
  },
  {
    quote: "I thought I was good at managing stress. Elonga showed my nervous system was in high-alert mode every Monday through Thursday. I moved my most demanding client calls to Friday afternoons. Different person.",
    name: "David M.",
    role: "Management consultant, 41",
    avatar: "DM",
    color: "#1FA8E8",
    tag: "Stress",
  },
  {
    quote: "At 47 I started taking longevity seriously. Elonga gave me the first objective feedback I've ever had on whether what I'm doing is actually working. Not feelings — data. That's what I needed.",
    name: "Richard H.",
    role: "Partner at law firm, 47",
    avatar: "RH",
    color: "#E87F1F",
    tag: "Focus & Output",
  },
  {
    quote: "My team thought I was crazy buying everyone a 'stress bracelet'. Six months later our sick day usage dropped by 40% and two people told me it was the most useful company benefit they'd ever received.",
    name: "Klára N.",
    role: "COO, 120-person company, 43",
    avatar: "KN",
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
