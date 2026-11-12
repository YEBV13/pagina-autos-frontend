import { PACKAGES } from '../data';

// Paquetes de PPF con precios. El paquete destacado lleva la etiqueta.
// El botón agrega el paquete al carrito de cotización.
export default function Packages({ onAddToCart, cartItems }) {
  return (
    <section id="packages" className="band-cream">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Paint protection film</p>
          <h2>PPF packages</h2>
          <p className="lead">
            Pick the coverage that fits your car and how you drive it. Every
            package includes full prep and a warranty.
          </p>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((pkg) => {
            const pkgId = `ppf-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`;
            const inCart = cartItems.some((i) => i.id === pkgId);
            return (
            <article
              key={pkg.name}
              className={pkg.featured ? 'package-card featured' : 'package-card'}
            >
              {pkg.featured && <span className="tag">Most popular</span>}
              <h3>{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <p className="lead">{pkg.note}</p>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className={inCart ? 'btn btn-block btn-added' : 'btn btn-block'}
                style={{ marginTop: 18 }}
                disabled={inCart}
                onClick={() =>
                  onAddToCart({
                    id: pkgId,
                    title: `Paint Protection Film — ${pkg.name}`,
                    price: pkg.price,
                    priceValue: pkg.priceValue,
                  })
                }
              >
                {inCart ? 'Added to quote ✓' : `Add ${pkg.name} to quote`}
              </button>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
