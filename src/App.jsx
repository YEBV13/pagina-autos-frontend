import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import { Testimonials, Gallery } from './components/Testimonials';
import Faq from './components/Faq';
import { QuoteSection, Contact, Footer } from './components/QuoteSection';
import CartDrawer from './components/CartDrawer';

// App arma la página completa con sus secciones.
// El carrito guarda los servicios que el cliente agrega para
// cotizar; el formulario recibe ese resumen.
function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(item) {
    setCart((prev) =>
      prev.some((i) => i.id === item.id) ? prev : [...prev, item],
    );
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function goToQuote() {
    setCartOpen(false);
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header cartCount={cart.length} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Services onAddToCart={addToCart} cartItems={cart} />
        <Packages onAddToCart={addToCart} cartItems={cart} />
        <Process />
        <Testimonials />
        <Gallery />
        <Faq />
        <QuoteSection cartItems={cart} onRemoveFromCart={removeFromCart} />
        <Contact />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onClear={() => setCart([])}
        onCheckout={goToQuote}
      />
    </>
  );
}

export default App;
