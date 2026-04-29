import { COUPLE, FOOTER } from '../constants/appConstants';

export default function Footer() {

  return (
    <footer style={{ background: '#1a110a', color: 'rgba(253,248,243,0.6)', padding: '3.5rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'start', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>

        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '0.5rem' }}>{COUPLE.left} &amp; {COUPLE.right}</div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(253,248,243,0.4)', lineHeight: 1.6 }}>
            Merci de faire partie de notre histoire.<br />
            Rendez-vous du <strong style={{ color: 'var(--gold)' }}>{FOOTER.rendezVous}</strong>.
          </p>
        </div>

        <div style={{ width: 1, minHeight: 80, background: 'rgba(201,169,110,0.2)', margin: '0 auto' }} />

        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'flex-end' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Liens utiles</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FOOTER.links.map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{ fontSize: '0.82rem', color: 'rgba(253,248,243,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,248,243,0.5)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Adresses utiles</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FOOTER.addresses.map(([url, label]) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.82rem', color: 'rgba(253,248,243,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,248,243,0.5)')}>
                  📍 {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div style={{ maxWidth: 1000, margin: '1.5rem auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'rgba(253,248,243,0.25)' }}>
        <span>© {FOOTER.year} {COUPLE.left} &amp; {COUPLE.right} — Tous droits réservés</span>
        <a href="#accueil" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: 'var(--gold)', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}>
          ↑ Haut de page
        </a>
      </div>
    </footer>
  );
}
