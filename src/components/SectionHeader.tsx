interface Props {
  tag: string;
  title: string;
  light?: boolean;
}

export default function SectionHeader({ tag, title, light }: Props) {
  return (
    <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem', display: 'block' }}>
        {tag}
      </span>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: light ? 'var(--cream)' : 'var(--dark)', lineHeight: 1.1 }}>
        {title}
      </h2>
      <div style={{ width: 60, height: 1, background: light ? 'rgba(201,169,110,0.5)' : 'var(--gold)', margin: '1.2rem auto 0', opacity: light ? 1 : 0.6 }} />
    </div>
  );
}
