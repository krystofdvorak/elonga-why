export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #0D0F1E 0%, #13162A 55%, #1a0d1f 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(244,23,91,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(244,23,91,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* 2-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* LEFT — text */}
          <div>
            <div className="fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(244,23,91,0.12)', border: '1px solid rgba(244,23,91,0.25)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', display: 'inline-block' }} className="pulse" />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink)' }}>Why Elonga</span>
            </div>

            <h1 className="fade-up delay-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', color: '#fff', lineHeight: 1.05, marginBottom: 24 }}>
              Your body knows
              <br />
              <span className="gradient-text">before you do.</span>
            </h1>

            <p className="fade-up delay-2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 460, lineHeight: 1.7, marginBottom: 40 }}>
              3 minutes every morning reveals what's really happening inside — stress, recovery, illness — <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>before you feel any of it.</strong>
            </p>

            <div className="fade-up delay-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="https://elonga.com/en-us" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
                Start for $99
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#how-it-works" className="btn-ghost" style={{ fontSize: 16 }}>See how it works</a>
            </div>

            {/* Outcome stat */}
            <div className="fade-up delay-4" style={{
              display: 'inline-flex', alignItems: 'center', gap: 16,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '16px 20px',
            }}>
              <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
                84%
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>
                  of users improve recovery<br />within 3 weeks
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>
                  Based on 2,550+ user reports
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — app mockup */}
          <div className="fade-up delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 280,
              background: '#12141F',
              borderRadius: 36,
              border: '8px solid #1E2035',
              boxShadow: '0 48px 96px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
              padding: '28px 20px 24px',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {/* Status bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>
                <span>9:07</span>
                <span style={{ letterSpacing: 2 }}>···</span>
              </div>

              {/* Greeting */}
              <div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Good morning</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Today's Readiness</div>
              </div>

              {/* Big score */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(244,23,91,0.15), rgba(244,23,91,0.05))',
                border: '1px solid rgba(244,23,91,0.2)',
                borderRadius: 20, padding: '20px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 72, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>82</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>/100</div>
                <div style={{
                  display: 'inline-block', marginTop: 10,
                  background: 'var(--pink)', borderRadius: 100,
                  padding: '4px 14px', fontSize: 11, fontWeight: 700, color: '#fff',
                }}>
                  ✓ Ready to push
                </div>
              </div>

              {/* Metrics */}
              {[
                { label: 'HRV', value: '62 ms', trend: '+4' },
                { label: 'Stress', value: 'Low', trend: '↓' },
                { label: 'Functional age', value: '38 yrs', trend: '−2' },
              ].map((m, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px',
                }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{m.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{m.value}</span>
                    <span style={{ fontSize: 11, color: 'var(--pink)', fontWeight: 700 }}>{m.trend}</span>
                  </div>
                </div>
              ))}

              {/* Time stamp */}
              <div style={{ textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.18)', marginTop: 4 }}>
                Measured today · 3 min 12 sec
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'rgba(255,255,255,0.25)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>
        <span>scroll</span>
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
          <rect x="1" y="1" width="12" height="16" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="6" y="4" width="2" height="3" rx="1" fill="currentColor">
            <animate attributeName="y" values="4;8;4" dur="1.8s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>
    </section>
  )
}
