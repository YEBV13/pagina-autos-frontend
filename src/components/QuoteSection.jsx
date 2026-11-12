import QuoteForm from './QuoteForm';
import { BUSINESS } from '../data';

// Sección de cotización: texto a la izquierda, formulario a la derecha.
// Contacto y pie de página.
export function QuoteSection({ cartItems, onRemoveFromCart }) {
  return (
    <section id="quote" className="quote-section">
      <div className="container quote-inner">
        <div>
          <p className="eyebrow">Get a quote</p>
          <h2>Let's talk about your car</h2>
          <p className="lead">
            Send your vehicle and the service you want. We reply with a clear
            price and the next open slot — usually within one business day.
          </p>
          <p className="quote-contact">
            Prefer to talk? Call{' '}
            <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a> or email{' '}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </p>
        </div>
        <QuoteForm cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="band">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Visit us</p>
          <h2>Contact &amp; hours</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Shop</h3>
            <p>{BUSINESS.address}</p>
          </div>
          <div className="contact-card">
            <h3>Call &amp; email</h3>
            <p>
              {BUSINESS.phone}
              <br />
              {BUSINESS.email}
              <br />
              Instagram {BUSINESS.instagram}
            </p>
          </div>
          <div className="contact-card">
            <h3>Hours</h3>
            {BUSINESS.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>Ing. Yonatan E. Barrera Villegas</strong> — Paint protection,
          ceramic coating, wraps &amp; tint.
        </div>
        <div className="draft-note">
          DRAFT — sample business data. Replace with the real business details.
        </div>
        <div>© {new Date().getFullYear()} BarreNet</div>
      </div>
    </footer>
  );
}
