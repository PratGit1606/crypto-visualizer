"use client";

import { useMemo, useState } from "react";
import Controls from "../components/Controls";
import CryptoChart from "../components/CryptoChart";
import ExplanationPanel from "../components/ExplanationPanel";
import { eccSecurity } from "../models/ecc";
import { pqSecurity } from "../models/pq";
import { rsaSecurity } from "../models/rsa";

export default function Page() {
  const [attackerPower, setAttackerPower] = useState(35);
  const [quantumAttacker, setQuantumAttacker] = useState(false);

  const metrics = useMemo(
    () => ({
      rsa: rsaSecurity(attackerPower, quantumAttacker),
      ecc: eccSecurity(attackerPower, quantumAttacker),
      pq: pqSecurity(attackerPower, quantumAttacker),
    }),
    [attackerPower, quantumAttacker],
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_35%),linear-gradient(180deg,_#08111f_0%,_#0f172a_42%,_#e2e8f0_42%,_#f8fafc_100%)] px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 p-8 text-white shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                STS304 Honors Project
              </span>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                  Cryptography Security Visualizer
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Explore how RSA, ECC, and post-quantum cryptography respond as
                  attacker capability grows. Switch to a quantum adversary model
                  to see why classical public-key systems break down and why
                  lattice-based designs matter.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[340px]">
              <MetricCard
                label="RSA"
                value={metrics.rsa}
                accent="from-rose-500/20 to-rose-400/5"
                textColor="text-rose-200"
              />
              <MetricCard
                label="ECC"
                value={metrics.ecc}
                accent="from-amber-500/20 to-amber-400/5"
                textColor="text-amber-200"
              />
              <MetricCard
                label="Post-Quantum"
                value={metrics.pq}
                accent="from-emerald-500/20 to-emerald-400/5"
                textColor="text-emerald-200"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          <Controls
            attackerPower={attackerPower}
            onAttackerPowerChange={setAttackerPower}
            quantumAttacker={quantumAttacker}
            onQuantumAttackerChange={setQuantumAttacker}
          />

          <CryptoChart
            attackerPower={attackerPower}
            quantumAttacker={quantumAttacker}
          />
        </section>

        <ExplanationPanel
          attackerPower={attackerPower}
          quantumAttacker={quantumAttacker}
          rsaStrength={metrics.rsa}
          eccStrength={metrics.ecc}
          pqStrength={metrics.pq}
        />

        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="max-w-4xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Call To Action
            </p>
            <h2 className="text-2xl font-semibold text-slate-950">
              Quantum-resistant cryptography starts before quantum computers are
              common.
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Near-future quantum-resistant cryptography will likely look less
              like a sudden invention and more like a migration period. Systems
              will increasingly adopt standardized post-quantum algorithms,
              hybrid deployments that combine classical and post-quantum methods,
              and infrastructure designed to swap cryptographic components
              without rebuilding entire platforms.
            </p>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              That means preparation does not depend on quantum computers being
              widely accessible first. Security teams can act now by inventorying
              where RSA and ECC are used, prioritizing crypto agility,
              monitoring post-quantum standards, planning certificate and key
              lifecycle updates, and advocating for migration roadmaps in high-
              value or long-lived systems. The practical takeaway is simple:
              organizations should treat post-quantum readiness as a present-day
              resilience project, not a last-minute response.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
  accent,
  textColor,
}: {
  label: string;
  value: number;
  accent: string;
  textColor: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} px-4 py-4`}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className={`mt-2 text-3xl font-semibold ${textColor}`}>
        {value.toFixed(2)}
      </p>
      <p className="mt-1 text-sm text-slate-300">Normalized strength</p>
    </div>
  );
}
