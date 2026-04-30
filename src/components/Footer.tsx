import { COUPLE, FOOTER } from '../constants/appConstants';

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="footer-left">
          <div className="footer-title">{COUPLE.left} &amp; {COUPLE.right}</div>
          <p className="footer-desc">
            Merci de faire partie de notre histoire.<br />
            Rendez-vous du <strong className="gold">{FOOTER.rendezVous}</strong>.
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-right">
          <div className="footer-group">
            <h4 className="footer-heading">Contacts</h4>
            <div className="footer-contact">📞 <a href={`tel:${FOOTER.phone}`} className="footer-link">{FOOTER.phone}</a></div>
          </div>

          <div className="footer-group">
            <h4 className="footer-heading">Adresses utiles</h4>
            <div className="footer-addresses">
              {FOOTER.addresses.map(([url, label]) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="footer-link">📍 {label}</a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span className="muted">© {FOOTER.year} {COUPLE.left} &amp; {COUPLE.right} — Tous droits réservés</span>
        <a href="#accueil" className="back-top">↑ Haut de page</a>
      </div>
    </footer>
  );
}
