import { BUSINESS } from '../data';

// Portada: frase principal, botones y números de confianza.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div>
          <p className="eyebrow">Paint Protection · Ceramic Coating · Tint</p>
          <h1>
            Your car, protected. <span>Your finish, flawless.</span>
          </h1>
          <p className="lead">
            Paint protection film, ceramic coating and tint for daily drivers,
            luxury and exotic cars — installed by certified hands, with prep
            done right before a single panel is covered.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#quote">
              Get My Quote
            </a>
            <a className="btn btn-ghost" href={`tel:${BUSINESS.phoneHref}`}>
              Call {BUSINESS.phone}
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>4.9 ★</strong>
              <span>Customer rating</span>
            </div>
            <div>
              <strong>300+</strong>
              <span>Cars protected</span>
            </div>
            <div>
              <strong>7–10 yrs</strong>
              <span>PPF warranty</span>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80"
            alt="Black luxury coupe after paint protection"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
