import { useEffect, useState } from 'react';
import { BUSINESS, SERVICES } from '../data';

// ============================================================
// Formulario de cotización.
// Si existe VITE_API_URL (el backend .NET Core), envía el POST
// a /api/cotizaciones. Si no existe, muestra el resumen para
// enviarlo por correo o copiarlo por mensaje de texto.
// ============================================================

const EMPTY = {
  year: '',
  make: '',
  model: '',
  service: 'Paint Protection Film',
  timeframe: 'As soon as possible',
  contactPreference: 'Call',
  name: '',
  phone: '',
  email: '',
  message: '',
};

const YEARS = Array.from({ length: 37 }, (_, i) => String(2027 - i));

const VEHICLES = {
  Acura: [
    { name: 'CL', from: 1997, to: 2003 }, { name: 'ILX', from: 2013, to: 2022 },
    { name: 'Integra', from: 1991, to: 2001 }, { name: 'Integra', from: 2023, to: 2027 },
    { name: 'MDX', from: 2001, to: 2027 }, { name: 'NSX', from: 1991, to: 2005 },
    { name: 'NSX', from: 2016, to: 2022 }, { name: 'RDX', from: 2007, to: 2027 },
    { name: 'RL', from: 1996, to: 2012 }, { name: 'TL', from: 1996, to: 2014 },
    { name: 'TLX', from: 2015, to: 2027 },
  ],
  'Aston Martin': [
    { name: 'DB7', from: 1994, to: 2004 }, { name: 'DB9', from: 2005, to: 2016 },
    { name: 'DBS', from: 2008, to: 2012 }, { name: 'DBS Superleggera', from: 2019, to: 2023 },
    { name: 'DBX', from: 2021, to: 2027 }, { name: 'Vantage', from: 2006, to: 2027 },
  ],
  Audi: [
    { name: 'A4', from: 1996, to: 2025 }, { name: 'A5', from: 2008, to: 2027 },
    { name: 'A6', from: 1995, to: 2027 }, { name: 'A8', from: 1997, to: 2027 },
    { name: 'e-tron GT', from: 2022, to: 2027 }, { name: 'Q5', from: 2009, to: 2027 },
    { name: 'Q7', from: 2007, to: 2027 }, { name: 'Q8', from: 2019, to: 2027 },
    { name: 'R8', from: 2008, to: 2023 }, { name: 'RS 6', from: 2003, to: 2027 },
  ],
  Bentley: [
    { name: 'Arnage', from: 1999, to: 2009 }, { name: 'Bentayga', from: 2017, to: 2027 },
    { name: 'Continental GT', from: 2004, to: 2027 }, { name: 'Flying Spur', from: 2006, to: 2027 },
    { name: 'Mulsanne', from: 2010, to: 2020 },
  ],
  BMW: [
    { name: '3 Series', from: 1991, to: 2027 }, { name: '5 Series', from: 1991, to: 2027 },
    { name: '7 Series', from: 1991, to: 2027 }, { name: '8 Series', from: 1991, to: 1997 },
    { name: '8 Series', from: 2019, to: 2027 }, { name: 'i4', from: 2022, to: 2027 },
    { name: 'i7', from: 2023, to: 2027 }, { name: 'iX', from: 2022, to: 2027 },
    { name: 'M3', from: 1991, to: 2027 }, { name: 'M5', from: 1991, to: 2027 },
    { name: 'X3', from: 2004, to: 2027 }, { name: 'X5', from: 2000, to: 2027 },
    { name: 'X7', from: 2019, to: 2027 },
  ],
  Cadillac: [
    { name: 'CT4', from: 2020, to: 2027 }, { name: 'CT5', from: 2020, to: 2027 },
    { name: 'CTS', from: 2003, to: 2019 }, { name: 'Escalade', from: 1999, to: 2027 },
    { name: 'Lyriq', from: 2023, to: 2027 }, { name: 'XLR', from: 2004, to: 2009 },
  ],
  Genesis: [
    { name: 'G70', from: 2019, to: 2027 }, { name: 'G80', from: 2017, to: 2027 },
    { name: 'G90', from: 2017, to: 2027 }, { name: 'GV60', from: 2023, to: 2027 },
    { name: 'GV70', from: 2022, to: 2027 }, { name: 'GV80', from: 2021, to: 2027 },
  ],
  Infiniti: [
    { name: 'EX', from: 2008, to: 2013 }, { name: 'FX', from: 2003, to: 2013 },
    { name: 'G', from: 1991, to: 2015 }, { name: 'M', from: 1991, to: 2013 },
    { name: 'Q50', from: 2014, to: 2027 }, { name: 'QX60', from: 2013, to: 2027 },
    { name: 'QX80', from: 2004, to: 2027 },
  ],
  Jaguar: [
    { name: 'F-PACE', from: 2017, to: 2027 }, { name: 'F-TYPE', from: 2014, to: 2024 },
    { name: 'S-Type', from: 2000, to: 2008 }, { name: 'XJ', from: 1991, to: 2019 },
    { name: 'XK', from: 1997, to: 2015 }, { name: 'X-Type', from: 2002, to: 2008 },
  ],
  Lamborghini: [
    { name: 'Aventador', from: 2012, to: 2022 }, { name: 'Countach', from: 1991, to: 1991 },
    { name: 'Diablo', from: 1991, to: 2001 }, { name: 'Gallardo', from: 2004, to: 2014 },
    { name: 'Huracan', from: 2015, to: 2024 }, { name: 'Urus', from: 2019, to: 2027 },
    { name: 'Revuelto', from: 2024, to: 2027 },
  ],
  'Land Rover': [
    { name: 'Defender', from: 1991, to: 2016 }, { name: 'Defender', from: 2020, to: 2027 },
    { name: 'Discovery', from: 1991, to: 2027 }, { name: 'Range Rover', from: 1991, to: 2027 },
    { name: 'Range Rover Evoque', from: 2012, to: 2027 }, { name: 'Range Rover Sport', from: 2006, to: 2027 },
    { name: 'Range Rover Velar', from: 2018, to: 2027 },
  ],
  Lexus: [
    { name: 'ES', from: 1991, to: 2027 }, { name: 'GS', from: 1993, to: 2020 },
    { name: 'GX', from: 2003, to: 2027 }, { name: 'IS', from: 2001, to: 2027 },
    { name: 'LC', from: 2018, to: 2027 }, { name: 'LS', from: 1991, to: 2027 },
    { name: 'LX', from: 1996, to: 2027 }, { name: 'NX', from: 2015, to: 2027 },
    { name: 'RX', from: 1999, to: 2027 }, { name: 'RZ', from: 2023, to: 2027 },
  ],
  Maserati: [
    { name: 'Ghibli', from: 1991, to: 1998 }, { name: 'Ghibli', from: 2014, to: 2024 },
    { name: 'GranTurismo', from: 2008, to: 2019 }, { name: 'GranTurismo', from: 2024, to: 2027 },
    { name: 'Grecale', from: 2023, to: 2027 }, { name: 'Levante', from: 2017, to: 2024 },
    { name: 'Quattroporte', from: 1991, to: 2027 },
  ],
  'Mercedes-Benz': [
    { name: 'A-Class', from: 2019, to: 2022 }, { name: 'C-Class', from: 1994, to: 2027 },
    { name: 'E-Class', from: 1991, to: 2027 }, { name: 'G-Class', from: 1991, to: 2027 },
    { name: 'GLC', from: 2016, to: 2027 }, { name: 'GLE', from: 2016, to: 2027 },
    { name: 'GLS', from: 2017, to: 2027 }, { name: 'S-Class', from: 1991, to: 2027 },
    { name: 'SL', from: 1991, to: 2027 }, { name: 'EQS', from: 2022, to: 2027 },
  ],
  Porsche: [
    { name: '718 Boxster', from: 2017, to: 2027 }, { name: '718 Cayman', from: 2017, to: 2027 },
    { name: '911', from: 1991, to: 2027 }, { name: 'Cayenne', from: 2003, to: 2027 },
    { name: 'Macan', from: 2015, to: 2027 }, { name: 'Panamera', from: 2010, to: 2027 },
    { name: 'Taycan', from: 2020, to: 2027 },
  ],
  'Rolls-Royce': [
    { name: 'Cullinan', from: 2019, to: 2027 }, { name: 'Dawn', from: 2016, to: 2022 },
    { name: 'Ghost', from: 2010, to: 2027 }, { name: 'Phantom', from: 1991, to: 2027 },
    { name: 'Spectre', from: 2024, to: 2027 }, { name: 'Wraith', from: 2014, to: 2022 },
  ],
  Tesla: [
    { name: 'Model 3', from: 2017, to: 2027 }, { name: 'Model S', from: 2012, to: 2027 },
    { name: 'Model X', from: 2016, to: 2027 }, { name: 'Model Y', from: 2020, to: 2027 },
    { name: 'Roadster', from: 2008, to: 2012 },
  ],
  Volvo: [
    { name: 'S60', from: 2001, to: 2027 }, { name: 'S90', from: 1997, to: 1998 },
    { name: 'S90', from: 2017, to: 2027 }, { name: 'XC60', from: 2010, to: 2027 },
    { name: 'XC90', from: 2003, to: 2027 }, { name: 'EX90', from: 2025, to: 2027 },
  ],
};

function modelsForYear(make, year) {
  return (VEHICLES[make] || [])
    .filter((model) => Number(year) >= model.from && Number(year) <= model.to)
    .map((model) => model.name);
}

export default function QuoteForm({ selectedService, cartItems = [], onRemoveFromCart }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const availableMakes = Object.keys(VEHICLES).filter((make) => modelsForYear(make, form.year).length > 0);
  const availableModels = modelsForYear(form.make, form.year);

  // Total estimado del carrito (suma de los precios "desde").
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.priceValue || 0), 0);

  // Cuando el usuario pulsa "Quote" en un servicio, el formulario
  // baja hasta aquí y preselecciona ese servicio.
  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function updateYear(event) {
    const year = event.target.value;
    setForm((prev) => ({ ...prev, year, make: '', model: '' }));
  }

  function updateMake(event) {
    const make = event.target.value;
    setForm((prev) => ({ ...prev, make, model: '' }));
  }

  // Texto del resumen, igual al que se manda al backend.
  // Si el cliente agregó servicios al carrito, el resumen lleva
  // esa lista con sus precios y el total estimado.
  function summaryText() {
    const lines = [`Quote request — ${BUSINESS.shortName}`];
    if (cartItems.length > 0) {
      lines.push('Services:');
      cartItems.forEach((item) => lines.push(`- ${item.title} (${item.price})`));
      lines.push(`Estimated total (from): $${cartTotal.toLocaleString('en-US')}`);
    } else {
      lines.push(`Service: ${form.service}`);
    }
    lines.push(
      `Vehicle: ${form.year} ${form.make} ${form.model}`,
      `Timing: ${form.timeframe}`,
      `Preferred contact: ${form.contactPreference}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
    );
    if (form.message) lines.push(`Notes: ${form.message}`);
    return lines.join('\n');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setStatus('sending');

    const apiUrl = import.meta.env.VITE_API_URL;

    // Sin backend todavía: mostrar el resumen para enviarlo a mano.
    if (!apiUrl) {
      setStatus('sent');
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/cotizaciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          anio: Number(form.year),
          marca: form.make,
          modelo: form.model,
          servicio: form.service,
          servicios: cartItems.map((item) => ({
            servicio: item.title,
            precio: item.priceValue,
          })),
          totalEstimado: cartTotal,
          cuando: form.timeframe,
          contactoPreferido: form.contactPreference,
          nombre: form.name,
          telefono: form.phone,
          email: form.email,
          mensaje: form.message,
        }),
      });

      if (!response.ok) throw new Error(`Server answered ${response.status}`);
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setError('We could not send your request. Please try again or call us directly.');
      setStatus('error');
    }
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // Pantalla de éxito: resumen + enviar por correo o copiar para texto.
  if (status === 'sent') {
    return (
      <div className="form-card" id="quote-form">
        <div className="form-success">
          <h4>Request ready ✓</h4>
          <p>Here is your quote summary. Send it to the shop:</p>
          <pre>{summaryText()}</pre>
          <div className="success-actions">
            <a
              className="btn btn-small"
              href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent(
                `Quote request — ${form.year} ${form.make} ${form.model}`,
              )}&body=${encodeURIComponent(summaryText())}`}
            >
              Send by email
            </a>
            <button type="button" className="btn btn-outline btn-small" onClick={copySummary}>
              {copied ? 'Copied ✓' : 'Copy to send by text'}
            </button>
          </div>
          <p className="form-note">
            Once the API is connected (VITE_API_URL), this sends automatically.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-ghost btn-small"
          style={{ color: 'var(--text)', borderColor: 'var(--line)', marginTop: 14 }}
          onClick={() => {
            setForm(EMPTY);
            setStatus('idle');
          }}
        >
          New quote
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" id="quote-form" onSubmit={handleSubmit}>
      <h3>Get your quote</h3>
      <p>Tell us about your car and we will reply with a clear price.</p>

      {cartItems.length > 0 && (
        <div className="cart-in-form">
          <strong>Selected services</strong>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>
                  {item.title} — {item.price}
                </span>
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>
            Estimated total (from):{' '}
            <strong>${cartTotal.toLocaleString('en-US')}</strong>
          </p>
        </div>
      )}

      {status === 'error' && <div className="form-error">{error}</div>}

      <div className="field-row">
        <div className="field">
          <label htmlFor="year">Year *</label>
          <select id="year" required value={form.year} onChange={updateYear}>
            <option value="">Select</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="make">Make *</label>
          <select
            id="make"
            required
            disabled={!form.year}
            value={form.make}
            onChange={updateMake}
          >
            <option value="">{form.year ? 'Select make' : 'Select year first'}</option>
            {availableMakes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="model">Model *</label>
        <select
          id="model"
          required
          disabled={!form.make}
          value={form.model}
          onChange={update('model')}
        >
          <option value="">{form.make ? 'Select model' : 'Select make first'}</option>
          {availableModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="service">
          Service {cartItems.length === 0 ? '*' : '(optional — already in cart)'}
        </label>
        <select
          id="service"
          required={cartItems.length === 0}
          value={form.service}
          onChange={update('service')}
        >
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Paint Protection Film — Partial Front">PPF — Partial Front</option>
          <option value="Paint Protection Film — Full Front">PPF — Full Front</option>
          <option value="Paint Protection Film — Full Body">PPF — Full Body</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="timeframe">When do you want it? *</label>
        <select id="timeframe" required value={form.timeframe} onChange={update('timeframe')}>
          <option>As soon as possible</option>
          <option>This week</option>
          <option>Next week</option>
          <option>Within a month</option>
          <option>Just getting a price</option>
        </select>
      </div>

      <div className="field">
        <label>How should we reach you? *</label>
        <div className="radio-group">
          {['Call', 'Text', 'Email'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="contactPreference"
                value={option}
                checked={form.contactPreference === option}
                onChange={update('contactPreference')}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="name">Your name *</label>
        <input id="name" required value={form.name} onChange={update('name')} />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={update('phone')}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={update('email')}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Anything else? (optional)</label>
        <textarea
          id="message"
          rows={3}
          placeholder="Photos link, color change idea, deadline…"
          value={form.message}
          onChange={update('message')}
        />
      </div>

      <button type="submit" className="btn btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request my quote'}
      </button>
      <p className="form-note">
        No spam. We only use your info to answer your quote.
      </p>
    </form>
  );
}
