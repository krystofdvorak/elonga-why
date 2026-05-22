export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #0D0F1E 0%, #13162A 55%, #1a0d1f 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(244,23,91,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(244,23,91,0.07) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <div className="fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(244,23,91,0.12)',
          border: '1px solid rgba(244,23,91,0.25)',
          borderRadius: 100, padding: '6px 16px',
          marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', display: 'inline-block' }} className="pulse" />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink)' }}>
            Why Elonga
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up delay-1" style={{
          fontSize: 'clamp(42px, 7vw, 80px)',
          color: '#fff',
          marginBottom: 28,
          lineHeight: 1.05,
        }}>
          Your body knows
          <br />
          <span className="gradient-text">before you do.</span>
        </h1>

        {/* Subheadline */}
        <p className="fade-up delay-2" style={{
          fontSize: 'clamp(17px, 2.2vw, 20px)',
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 580, margin: '0 auto 48px',
          lineHeight: 1.65,
          fontWeight: 400,
        }}>
          3 minutes every morning. That's all it takes to see burnout building,
          energy draining, and illness approaching —&nbsp;
          <em style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'normal', fontWeight: 600 }}>before you feel any of it.</em>
        </p>

        {/* CTAs */}
        <div className="fade-up delay-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://elonga.com/en-us" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
            Start for $99
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="btn-ghost" style={{ fontSize: 16 }}>
            See how it works
          </a>
        </div>

        {/* Big outcome stat — Oura style "88% see improvement" */}
        <div className="fade-up delay-4" style={{
          marginTop: 64,
          background: 'rgba(244,23,91,0.08)',
          border: '1px solid rgba(244,23,91,0.2)',
          borderRadius: 20,
          padding: '28px 40px',
          maxWidth: 580, marginLeft: 'auto', marginRight: 'auto',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 8 }}>
            84% of users improve
            <br />
            <span className="gradient-text">recovery within 3 weeks.</span>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 12, fontWeight: 500 }}>
            Based on 2,550+ user reports · avg. onboarding period 14 days
          </p>
        </div>

        {/* Stats bar */}
        <div className="fade-up delay-4" style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          marginTop: 24,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: '24px 32px',
          flexWrap: 'wrap',
          maxWidth: 640, marginLeft: 'auto', marginRight: 'auto',
        }}>
          {[
            { number: '3 min', label: 'morning measurement' },
            { number: '3M+', label: 'measurements analyzed' },
            { number: '30 yrs', label: 'HRV research' },
            { number: '2 550+', label: 'five-star reviews' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: '1 1 120px',
              padding: '8px 16px',
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        animation: 'fadeUp 1s ease 0.8s both',
      }}>
        <span>scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="1" y="1" width="14" height="18" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="7" y="5" width="2" height="4" rx="1" fill="currentColor">
            <animate attributeName="y" values="5;9;5" dur="1.8s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>
    </section>
  )
}
