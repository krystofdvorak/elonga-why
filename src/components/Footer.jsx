export default function Footer() {
  return (
    <footer style={{
      background: 'var(--near-black)',
      padding: '56px 24px 40px',
      color: 'rgba(255,255,255,0.35)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', marginBottom: 12 }}>
              elonga
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>
              Stress and recovery measurement in 3 minutes a day. Based on 30+ years of HRV research.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[
              {
                title: 'Why Elonga',
                links: ['Recovery', 'Stress', 'Performance', 'Early Warning', 'Biological Age', 'Habits'],
              },
              {
                title: 'Company',
                links: ['Science', 'About', 'Blog', 'Press'],
              },
              {
                title: 'Support',
                links: ['FAQ', 'Contact', 'Shipping', 'Returns'],
              },
            ].map(group => (
              <div key={group.title}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
                  {group.title}
                </div>
                {group.links.map(link => (
                  <a key={link} href="https://elonga.com/en-us" style={{
                    display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none', marginBottom: 10,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12
        }}>
          <span style={{ fontSize: 12 }}>© 2026 Elonga. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="https://elonga.com/en-us" style={{
                fontSize: 12, color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
