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
    quote: "I was training 5 days a week and wondering why I wasn't improving. Elonga showed me I was in recovery deficit for 11 days straight. Dropped to 3 sessions, PRs started falling again.",
    name: "Martin K.",
    role: "Amateur cyclist, 34",
    avatar: "MK",
    color: "#F4175B",
    tag: "Performance",
  },
  {
    quote: "I got the 'low readiness' warning on a Tuesday. By Thursday I was in bed with flu. First time in my life I ever saw it coming — I even rescheduled a big meeting in advance.",
    name: "Jana R.",
    role: "Marketing director, mother of two",
    avatar: "JR",
    color: "#9B1FE8",
    tag: "Early Warning",
  },
  {
    quote: "My biological age dropped 4 years in 6 months. The habit tracking showed me that two glasses of wine were costing me 30% of my recovery. Eye-opening.",
    name: "Tomáš B.",
    role: "Entrepreneur, 38",
    avatar: "TB",
    color: "#1FE87F",
    tag: "Longevity",
  },
  {
    quote: "As a coach I was skeptical. Now half my athletes use it. The ones who follow their readiness scores are recovering 40% faster between sessions than the ones who don't.",
    name: "Petra S.",
    role: "Strength & conditioning coach",
    avatar: "PS",
    color: "#E87F1F",
    tag: "Recovery",
  },
  {
    quote: "I have a high-stress job and thought I was managing fine. Elonga showed my sympathetic activity was through the roof every Monday through Wednesday. I changed when I schedule my hardest meetings.",
    name: "David M.",
    role: "Software engineer, 41",
    avatar: "DM",
    color: "#1FA8E8",
    tag: "Stress",
  },
  {
    quote: "Three weeks in and I finally understand why some mornings feel heavy even after 8 hours of sleep. Alcohol the night before tanks my HRV completely. I can now see it in the data.",
    name: "Lucie H.",
    role: "Teacher & runner",
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
