import { FAQS } from '../data';

// Preguntas frecuentes con <details> nativo, sin librerías.
export default function Faq() {
  return (
    <section id="faq" className="band-cream">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Good to know</p>
          <h2>Frequently asked questions</h2>
        </div>
        {FAQS.map((faq) => (
          <details className="faq-item" key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
