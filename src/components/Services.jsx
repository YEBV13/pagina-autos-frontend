import { useState } from 'react';
import { SERVICES } from '../data';

// Lista de servicios con filtro por categoría.
// El botón "Add to quote" agrega el servicio al carrito.
export default function Services({ onAddToCart, cartItems }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(SERVICES.map((s) => s.category))];
  const visible =
    filter === 'All' ? SERVICES : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="services" className="band">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2>Protection &amp; restyling</h2>
          <p className="lead">
            Every service starts with proper prep — wash, decontamination and
            paint correction — so the result looks flawless up close and holds
            up for years.
          </p>
        </div>

        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={filter === cat ? 'chip active' : 'chip'}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All services' : cat}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {visible.map((service) => (
            <article className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-price">{service.price}</span>
                <button
                  type="button"
                  className={
                    cartItems.some((i) => i.id === service.id)
                      ? 'btn btn-added'
                      : 'btn'
                  }
                  disabled={cartItems.some((i) => i.id === service.id)}
                  onClick={() =>
                    onAddToCart({
                      id: service.id,
                      title: service.title,
                      price: service.price,
                      priceValue: service.priceValue,
                    })
                  }
                >
                  {cartItems.some((i) => i.id === service.id)
                    ? 'Added to quote ✓'
                    : 'Add to quote'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
