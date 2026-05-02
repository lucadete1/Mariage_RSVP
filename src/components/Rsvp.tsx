import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { supabase } from '../config/supabaseClient';


export default function Rsvp() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [guests, setGuests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    if (!name.trim()) { alert('Veuillez entrer votre nom.'); return; }
    if (!contact.trim()) { alert('Veuillez entrer votre numéro de téléphone.'); return; }
    setSubmitted(true);
    const { error } = await supabase.from('Invites').insert([
      {
        Nom: name,
        Contact: contact,
        Nombre_invites: guests ? parseInt(guests, 10) : null,
      },
    ]);
    if (error) {
      alert('Erreur lors de l\'enregistrement.');
      return;
    }
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#ece7f6',
    fontWeight: 500,
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(168, 151, 151, 0.15)',
    color: 'var(--cream)',
    padding: '0.8rem 1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    borderRadius: 2,
    width: '100%',
    WebkitAppearance: 'none',
  };

  return (
    <section id="rsvp" style={{ background: 'var(--gold)', color: 'var(--cream)', textAlign: 'center', padding: '6rem 2rem' }}>
      <SectionHeader tag="Confirmation" title="Confirmer votre présence" light />

      {submitted ? (
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#fff', fontSize: '1.2rem', padding: '2rem' }}>
          Merci ! Votre réponse a bien été enregistrée.
        </div>
      ) : (
        <div className="fade-in-up narrow-container" style={{ margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
            <label style={labelStyle}>Votre prénom &amp; nom</label>
            <input type="text" placeholder="Ex. Jean Kouadio" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
            <label style={labelStyle}>Numéro de téléphone</label>
            <input type="tel" placeholder="Ex.07 12 34 56 78" value={contact} onChange={e => setContact(e.target.value)} style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
            <label style={labelStyle}>Nombre de personnes invités</label>
            <select value={guests} onChange={e => setGuests(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">Sélectionner…</option>
              {['1','2','3','4','5','6+'].map(v => <option key={v} value={v} style={{ background: 'var(--dark)', color: 'var(--cream)' }}>{v}</option>)}
            </select>
          </div>



          <button onClick={handleSubmit}
            style={{ padding: '1rem', background: 'var(--cream)', border: 'none', color: 'var(--dark)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s', marginTop: '0.5rem', borderRadius: 2 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dark)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--dark)'; }}>
            Confirmer ma présence
          </button>
        </div>
      )}
    </section>
  );
}
