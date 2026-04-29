import { COUPLE, NAV_LINKS } from '../constants/appConstants';

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 3rem',
      background: 'rgba(253, 248, 243, 0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(201, 169, 110, 0.2)',
    }}>
      <a href="#accueil" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--brown)', letterSpacing: '0.02em', textDecoration: 'none' }}>
        {COUPLE.left} &amp; {COUPLE.right}
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-list">
        {NAV_LINKS.map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#rsvp" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--gold)', padding: '0.55rem 1.4rem', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--brown)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}>
        Confirmer votre présence
      </a>
    </nav>
  );
}
