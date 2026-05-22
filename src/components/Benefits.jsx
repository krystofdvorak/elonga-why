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
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Recovery',
    headline: 'Know if today is a push day or a rest day.',
    body: 'One clear score every morning. No guessing, no overreaching.',
    color: '#F4175B',
  },
  {
    id: 'stress',
    img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Stress',
    headline: 'See stress building before you feel it.',
    body: 'Track your nervous system balance daily and catch burnout before it catches you.',
    color: '#9B1FE8',
  },
  {
    id: 'focus',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Focus & Energy',
    headline: 'More energy. Better days. On demand.',
    body: 'Know your peak hours and protect them. Your body has a schedule — now you do too.',
    color: '#E87F1F',
  },
  {
    id: 'early-warning',
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Early Warning',
    headline: 'Know you\'re getting sick before you feel it.',
    body: '24–72h warning before the first symptom. Never get blindsided again.',
    color: '#1FA8E8',
  },
  {
    id: 'biological-age',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Biological Age',
    headline: 'Find out how fast you\'re actually aging.',
    body: 'Your functional age vs. peers — and how to move the number in the right direction.',
    color: '#1FE87F',
  },
  {
    id: 'habits',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=280&fit=crop&auto=format&q=80',
    tag: 'Habits',
    headline: 'See what your habits actually do to your body.',
    body: 'Alcohol, sleep, coffee — finally measured, not guessed.',
    color: '#E8C81F',
  },
]

export default function Benefits() {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="recovery" ref={ref} style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Explore what Elonga tells you</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--navy)', maxWidth: 580, margin: '0 auto 16px' }}>
            Six things Elonga tells you
            <br />
            <span className="gradient-text">that no one else does.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {subpages.map((page, i) => (
            <div
              key={page.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: '#fff',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid var(--gray-mid)',
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, box-shadow 0.25s ease`,
                boxShadow: hovered === i ? '0 20px 48px rgba(19,22,42,0.1)' : '0 2px 8px rgba(19,22,42,0.04)',
              }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={page.img}
                  alt={page.tag}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                {/* Color overlay on hover */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `${page.color}`,
                  opacity: hovered === i ? 0.15 : 0,
                  transition: 'opacity 0.3s',
                }} />
                {/* Tag pill on image */}
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 100, padding: '5px 12px',
                  fontSize: 11, fontWeight: 700,
                  color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {page.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: 18, fontWeight: 800, color: 'var(--navy)',
                  letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 8,
                }}>
                  {page.headline}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gray-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                  {page.body}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 700, color: page.color,
                  transition: 'gap 0.2s',
                  gap: hovered === i ? 10 : 6,
                }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
