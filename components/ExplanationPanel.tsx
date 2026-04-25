"use client";

type ExplanationPanelProps = {
  attackerPower: number;
  quantumAttacker: boolean;
  rsaStrength: number;
  eccStrength: number;
  pqStrength: number;
};

export default function ExplanationPanel({
  attackerPower,
  quantumAttacker,
  rsaStrength,
  eccStrength,
  pqStrength,
}: ExplanationPanelProps) {
  const powerBand =
    attackerPower < 30 ? "low" : attackerPower < 70 ? "moderate" : "high";

  const threatModel = quantumAttacker
    ? "Quantum attacker model"
    : "Classical attacker model";

  const headline = quantumAttacker
    ? "Quantum capability changes the entire security picture."
    : "Without quantum capability, the decline is slower and more incremental.";

  const primaryExplanation = quantumAttacker
    ? "RSA and ECC both rely on number-theoretic problems that become tractable for large quantum computers using Shor's algorithm, so their curves fall sharply once the attacker has meaningful capability."
    : "In the classical setting, RSA and ECC still degrade as attacker resources grow, but the loss is gradual because factoring and discrete logarithms remain computationally expensive.";

  const powerExplanation =
    powerBand === "low"
      ? "At low attacker power, all three systems still retain most of their normalized strength, though post-quantum cryptography already shows the slowest decay."
      : powerBand === "moderate"
        ? "At moderate attacker power, the separation becomes clearer: classical systems weaken faster, while the post-quantum model maintains a larger safety margin."
        : "At high attacker power, the difference becomes stark. RSA and ECC approach collapse far sooner, while the lattice-based approximation retains meaningful residual strength.";

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Interpretation
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              {headline}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InsightCard
              title="Threat Model"
              body={`${threatModel}. ${primaryExplanation}`}
            />
            <InsightCard
              title="Power Assessment"
              body={`Attacker power is currently ${attackerPower}/100, which falls in the ${powerBand} range. ${powerExplanation}`}
            />
            <InsightCard
              title="RSA and ECC"
              body={`RSA currently measures ${rsaStrength.toFixed(2)} and ECC measures ${eccStrength.toFixed(2)}. ECC is somewhat more efficient in practice, but it remains vulnerable to the same quantum breakthrough class as RSA.`}
            />
            <InsightCard
              title="Why Post-Quantum Matters"
              body={`The post-quantum lattice-based approximation still measures ${pqStrength.toFixed(2)}. Its slower decay illustrates why quantum-resistant cryptography is a strategic replacement path rather than a small optimization.`}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Baseline-Level Summary
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              This visualization models security strength with exponential decay,
              where stronger adversaries push each cryptosystem closer to zero.
            </p>
            <p>
              The quantum toggle represents a change in attacker method, not just
              more computing power. That distinction is why RSA and ECC collapse
              so much faster once quantum algorithms are available.
            </p>
            <p>
              Post-quantum cryptography does not stay perfectly flat, but its
              slower decline shows the strategic value of schemes designed around
              problems believed to resist both classical and quantum attacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}
