"use client";

type ControlsProps = {
  attackerPower: number;
  onAttackerPowerChange: (value: number) => void;
  quantumAttacker: boolean;
  onQuantumAttackerChange: (value: boolean) => void;
};

export default function Controls({
  attackerPower,
  onAttackerPowerChange,
  quantumAttacker,
  onQuantumAttackerChange,
}: ControlsProps) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Controls
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Configure the attacker model
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Adjust the adversary&apos;s capability and switch between classical
            and quantum assumptions to see how each cryptosystem responds.
          </p>
        </div>

        <label className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <input
            type="checkbox"
            checked={quantumAttacker}
            onChange={(event) => onQuantumAttackerChange(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
          />
          <span className="space-y-1">
            <span className="block text-base font-medium text-slate-900">
              Quantum Attacker
            </span>
            <span className="block text-sm leading-6 text-slate-600">
              Simulate a future-capable adversary that can apply algorithms such
              as Shor&apos;s algorithm against RSA and ECC.
            </span>
          </span>
        </label>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <label
                htmlFor="attacker-power"
                className="text-base font-medium text-slate-900"
              >
                Attacker Power
              </label>
              <p className="mt-1 text-sm text-slate-600">
                Range: 0 to 100
              </p>
            </div>
            <div className="rounded-xl bg-slate-950 px-3 py-2 text-right text-white">
              <span className="block text-2xl font-semibold">{attackerPower}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
                power units
              </span>
            </div>
          </div>

          <input
            id="attacker-power"
            type="range"
            min={0}
            max={100}
            step={1}
            value={attackerPower}
            onChange={(event) =>
              onAttackerPowerChange(Number(event.target.value))
            }
            className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-cyan-600"
          />

          <div className="mt-3 flex justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
          </div>
        </div>
      </div>
    </section>
  );
}
