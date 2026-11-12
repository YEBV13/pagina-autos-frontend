// Carrito de cotización: panel lateral con el resumen de los
// servicios que el cliente agregó, su total estimado y el botón
// para seguir al formulario de cotización.
export default function CartDrawer({ open, items, onClose, onRemove, onClear, onCheckout }) {
  if (!open) return null;

  const total = items.reduce((sum, item) => sum + (item.priceValue || 0), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(event) => event.stopPropagation()}
        aria-label="Quote cart"
      >
        <div className="cart-head">
          <h3>Your quote ({items.length})</h3>
          <button type="button" className="cart-close" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">
            No services yet. Add a service from the list to build your quote.
          </p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.price}</span>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.title}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <span>Estimated total (from)</span>
              <strong>${total.toLocaleString('en-US')}</strong>
            </div>
            <p className="form-note">
              Starting prices shown. The final price is confirmed after we see
              your vehicle.
            </p>

            <button type="button" className="btn btn-block" onClick={onCheckout}>
              Continue to quote →
            </button>
            <button
              type="button"
              className="btn btn-outline btn-block btn-small"
              style={{ marginTop: 10 }}
              onClick={onClear}
            >
              Clear cart
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
