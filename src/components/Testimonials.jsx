import { TESTIMONIALS, GALLERY } from '../data';

// Reseñas de ejemplo (cambiar por reseñas reales del negocio).
export function Testimonials() {
  return (
    <section id="reviews" className="band-cream">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2>What drivers say</h2>
        </div>
        <div className="quotes-grid">
          {TESTIMONIALS.map((t, i) => (
            <article className="quote-card" key={i}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <footer>— {t.author}</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Galería de trabajos con fotos de ejemplo.
export function Gallery() {
  return (
    <section id="gallery" className="band">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Recent work</p>
          <h2>Fresh out of the shop</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
