import SectionHeader from './SectionHeader';
import { PALETTE_IMAGES } from '../constants/appConstants';

export default function Couleurs() {
  return (
    <section id="couleurs" style={{ padding: '6rem 2rem', background: '#fff', textAlign: 'center' }}>
      <SectionHeader tag="Palette" title="Couleurs du Mariage" />

      <p className="fade-in-up" style={{ maxWidth: 550, margin: '0 auto 2.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        Une palette douce, chaleureuse et élégante choisie avec amour par Emec &amp; Agathe.
      </p>

      <div className="fade-in-up" style={{ maxWidth: 700, margin: '0 auto 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', justifyItems: 'stretch', alignItems: 'stretch' }}>
          {PALETTE_IMAGES.map((src, i) => (
            <div
              key={i}
              style={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(92,61,46,0.12)',
                aspectRatio: '1 / 1',
                width: '100%',
                display: 'flex',
              }}
            >
              <img
                src={src}
                alt={`Palette des couleurs ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="fade-in-up" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        Ces couleurs guideront les décorations, tenues et ambiance du grand jour.
      </p>
    </section>
  );
}
