import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { GALLERY_PHOTOS, GALLERY_SECTION_TITLE } from '../constants/appConstants';

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="galerie" style={{ padding: '6rem 2rem', background: '#fff' }}>
      <SectionHeader tag="Nos souvenirs" title={GALLERY_SECTION_TITLE} />

      <div className="fade-in-up site-container" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
        {GALLERY_PHOTOS.map((p, i) => (
          <div key={i}
            style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: 'var(--sand)', cursor: 'pointer', width: '100%', maxWidth: 280 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            <img src={p.src} alt="Photo de couple" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease', transform: hovered === i ? 'scale(1.05)' : 'scale(1)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1rem 1rem', background: 'linear-gradient(transparent, rgba(42,31,20,0.7))', color: '#fff', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', letterSpacing: '0.03em', transition: 'all 0.4s', opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'translateY(0)' : 'translateY(8px)' }}>
              {p.caption}
            </div>
          </div>
        ))}
      </div>

      <div className="fade-in-up" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="#accueil"
          style={{ display: 'inline-block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '0.75rem 2rem', textDecoration: 'none', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}>
          Retour à l'accueil
        </a>
      </div>
    </section>
  );
}
