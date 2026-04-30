import { useState } from 'react';
import { COUPLE, NAV_LINKS } from '../constants/appConstants';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <a href="#accueil" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--brown)', letterSpacing: '0.02em', textDecoration: 'none' }}>
        {COUPLE.left} &amp; {COUPLE.right}
      </a>

      <button className="nav-hamburger" aria-label="Menu" onClick={() => setOpen(v => !v)}>
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <ul className={`nav-links-list ${open ? 'open' : ''}`}>
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

      {/* RSVP button removed per request */}
    </nav>
  );
}
