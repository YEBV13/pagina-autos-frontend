import { STEPS } from '../data';

// Proceso en 4 pasos, igual que la referencia pero con texto propio.
export default function Process() {
  return (
    <section id="process" className="band">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How it goes</p>
          <h2>From first message to protected finish</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <article className="step-card" key={step.n}>
              <div className="step-num">{step.n}</div>
              <h3>{step.title}</h3>
              <p className="lead">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
