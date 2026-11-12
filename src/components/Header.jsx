import { BUSINESS } from '../data';

// Barra superior fija: logo, navegación, carrito y botón de cotización.
export default function Header({ cartCount, onCartOpen }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#top">
          Rotulaciones <span>MaTe</span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="#gallery">Work</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" className="cart-btn" onClick={onCartOpen}>
          Quote cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <a className="btn" href="#quote">
          Get a Quote
        </a>
      </div>
    </header>
  );
}
