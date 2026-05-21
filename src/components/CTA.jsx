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

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(160deg, #0D0F1E 0%, #13162A 50%, #1a0820 100%)',
      padding: '100px 24px 120px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Glows */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse, rgba(244,23,91,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -50, left: '20%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(244,23,91,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <span className="section-label-light" style={{
          opacity: inView ? 1 : 0, transition: 'opacity 0.5s'
        }}>
          Start today
        </span>

        <h2 style={{
          fontSize: 'clamp(34px, 6vw, 64px)',
          color: '#fff',
          marginBottom: 20,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          Start knowing your body
          <br />
          <span className="gradient-text">tomorrow morning.</span>
        </h2>

        <p style={{
          fontSize: 18,
          color: 'rgba(255,255,255,0.55)',
          marginBottom: 48,
          lineHeight: 1.65,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.2s',
        }}>
          $99 bracelet + app. First year included.
          <br />
          Free shipping. 30-day money-back guarantee.
        </p>

        {/* Pricing card */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          padding: '36px 40px',
          marginBottom: 36,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease 0.3s',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginBottom: 28,
          }}>
            {[
              { icon: '📦', label: 'Elonga bracelet', val: '$99 once' },
              { icon: '📱', label: 'App + insights', val: 'Free 1st year' },
              { icon: '🔄', label: 'After year one', val: '$49/yr' },
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '0 16px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 16, color: '#fff', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  {item.val}
                </div>
              </div>
            ))}
          </div>

          <a href="https://elonga.com/en-us" className="btn-primary" style={{
            fontSize: 17, padding: '18px 40px', width: '100%',
            justifyContent: 'center',
          }}>
            Get Elonga — $99
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          {['30-day money back', 'Free shipping', '2,550+ 5★ reviews', 'Secure checkout'].map((badge, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="rgba(244,23,91,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
