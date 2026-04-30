import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { COUPLE, GIFTS } from '../constants/appConstants';
import { generateGiftsPdf } from '../utils/generateGiftsPdf';

export default function Cadeaux() {
  const [shopHover, setShopHover] = useState<number | null>(null);

  return (
    <section id="cadeaux" style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
      <SectionHeader tag="Liste" title={`Liste des cadeaux ${COUPLE.left} & ${COUPLE.right}`} />

      <div className="fade-in-up site-container" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'var(--gold)' }}>
              {['N°', 'Désignation', 'Qté'].map(h => (
                <th key={h} style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.06em', fontSize: '0.78rem', textTransform: 'uppercase', color: '#fff' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GIFTS.map(([n, desc, qty], i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(201,169,110,0.2)' }}>
                <td style={{ padding: '0.95rem 1rem', color: 'var(--text-muted)', fontSize: '0.8rem', verticalAlign: 'top' }}>{n}</td>
                <td style={{ padding: '0.95rem 1rem', color: 'var(--text)', verticalAlign: 'top' }}>{desc}</td>
                <td style={{ padding: '0.95rem 1rem', color: 'var(--text)', verticalAlign: 'top' }}>{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fade-in-up site-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <button onClick={generateGiftsPdf}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--gold)', color: '#fff', padding: '0.85rem 2rem', textDecoration: 'none', transition: 'background 0.2s', borderRadius: 2, border: 'none', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--brown)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}>
          ↓ Télécharger la liste en PDF
        </button>



        <p style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Merci pour votre amour et votre soutien, que Dieu vous bénisse !
        </p>
      </div>
    </section>
  );
}
