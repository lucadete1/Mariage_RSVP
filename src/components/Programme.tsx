import SectionHeader from './SectionHeader';

import { PROGRAM_BY_DAY, PROGRAM_SECTION_TITLE } from '../constants/appConstants';

export default function Programme() {
  return (
    <section id="programme" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <SectionHeader tag="La journée" title={PROGRAM_SECTION_TITLE} />

      <div
        className="fade-in-up"
        style={{
          maxWidth: 760,
          margin: '0 auto',
          display: 'grid',
          gap: '2.1rem',
        }}
      >
        {PROGRAM_BY_DAY.map((day) => (
          <div key={day.dateLabel} style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(201,169,110,0.18)', borderRadius: 10, padding: '1.8rem 1.6rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.65rem', color: 'var(--gold)', marginBottom: '1.3rem' }}>
              {day.dateLabel}
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {day.events.map((ev) => (
                <div key={ev.time} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '1.3rem', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: 'var(--gold)', textAlign: 'right', paddingTop: 2, lineHeight: 1.2 }}>
                    {ev.time}
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.3rem' }}>
                      {ev.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {ev.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="fade-in-up" style={{ textAlign: 'center', marginTop: '2.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1rem' }}>
        Votre présence est notre plus beau cadeau.
      </p>
    </section>
  );
}
