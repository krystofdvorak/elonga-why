import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="https://elonga.com/en-us" style={{ textDecoration: 'none' }}>
          <span style={{
            fontWeight: 800, fontSize: 22, letterSpacing: '-0.04em',
            color: scrolled ? 'var(--navy)' : '#fff',
            transition: 'color 0.3s'
          }}>
            elonga
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}
          className="hidden md:flex">
          {[
            { label: 'Recovery', href: '#recovery' },
            { label: 'Performance', href: '#performance' },
            { label: 'Longevity', href: '#longevity' },
            { label: 'Science', href: '#science' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{
              textDecoration: 'none',
              fontSize: 14, fontWeight: 600,
              color: scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.85)',
              transition: 'color 0.2s',
              letterSpacing: '-0.01em'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--pink)'}
            onMouseLeave={e => e.target.style.color = scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.85)'}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://elonga.com/en-us" className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          Get Elonga — $99
        </a>
      </div>
    </nav>
  )
}
