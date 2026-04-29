import { useEffect, useState, useRef } from 'react';
import { COUPLE, HERO } from '../constants/appConstants';

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const d = Math.max(0, diff);
  return {
    days:  Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    mins:  Math.floor((d % 3600000) / 60000),
    secs:  Math.floor((d % 60000) / 1000),
  };
}

export default function Hero() {
  // Countdown basé sur la cérémonie principale (mariage civil).
  const weddingDate = useRef(new Date(HERO.weddingDateISO));
  const { days, hours, mins, secs } = useCountdown(weddingDate.current);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="accueil" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      {/* BG radial */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(232,223,208,0.4) 0%, transparent 60%)' }} />

      {/* Ornament */}
      <div className="animate-fade-up" style={{ fontFamily: 'var(--font-serif)', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ display: 'block', width: 40, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
        Mariage
        <span style={{ display: 'block', width: 40, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
      </div>

      <h1 className="animate-fade-up" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--dark)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '1.2rem', position: 'relative' }}>
        {COUPLE.left} <span style={{ color: 'var(--gold)' }}>&amp;</span> {COUPLE.right}
      </h1>

      <p className="animate-fade-up-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
        {HERO.subtitle}
      </p>

      <p className="animate-fade-up-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Nous scellons et célébrons notre union.
      </p>

      <a href="#rsvp" className="animate-fade-up-3"
        style={{ display: 'inline-block', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dark)', border: '1px solid var(--gold)', padding: '0.9rem 2.5rem', textDecoration: 'none', transition: 'all 0.3s', position: 'relative' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--dark)'; }}>
        Je participe
      </a>

      {/* Countdown */}
      <div className="animate-fade-up-4" style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem' }}>
        {[['days', days, 'Jours'], ['hours', pad(hours), 'Heures'], ['mins', pad(mins), 'Minutes'], ['secs', pad(secs), 'Secondes']].map(([key, val, label]) => (
          <div key={key as string} style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{val}</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label as string}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
