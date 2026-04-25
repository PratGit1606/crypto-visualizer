"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eccSecurity } from "../models/ecc";
import { pqSecurity } from "../models/pq";
import { rsaSecurity } from "../models/rsa";

type CryptoChartProps = {
  attackerPower: number;
  quantumAttacker: boolean;
};

export default function CryptoChart({
  attackerPower,
  quantumAttacker,
}: CryptoChartProps) {
  const data = Array.from({ length: 101 }, (_, power) => ({
    attackerPower: power,
    rsa: Number(rsaSecurity(power, quantumAttacker).toFixed(4)),
    ecc: Number(eccSecurity(power, quantumAttacker).toFixed(4)),
    pq: Number(pqSecurity(power, quantumAttacker).toFixed(4)),
  }));

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
          Visualization
        </p>
        <h2 className="text-2xl font-semibold text-slate-950">
          Security strength across attacker power
        </h2>
        <p className="text-sm leading-6 text-slate-600">
          The curves use exponential decay approximations. Lower values indicate
          faster loss of practical security as attacker capability increases.
        </p>
      </div>

      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 12, right: 18, left: 2, bottom: 18 }}
          >
            <CartesianGrid stroke="#cbd5e1" strokeDasharray="4 4" />
            <XAxis
              dataKey="attackerPower"
              type="number"
              domain={[0, 100]}
              tickLine={false}
              axisLine={{ stroke: "#94a3b8" }}
              tick={{ fill: "#475569", fontSize: 12 }}
              label={{
                value: "Attacker Power",
                position: "insideBottom",
                offset: -6,
                fill: "#334155",
              }}
            />
            <YAxis
              domain={[0, 1]}
              tickCount={6}
              tickLine={false}
              axisLine={{ stroke: "#94a3b8" }}
              tick={{ fill: "#475569", fontSize: 12 }}
              label={{
                value: "Security Strength (0-1)",
                angle: -90,
                position: "insideLeft",
                fill: "#334155",
              }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #cbd5e1",
                backgroundColor: "rgba(255,255,255,0.96)",
                boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
              }}
              formatter={(value) =>
                typeof value === "number" ? value.toFixed(3) : String(value)
              }
              labelFormatter={(label) => `Attacker Power: ${label}`}
            />
            <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 16 }} />
            <ReferenceLine
              x={attackerPower}
              stroke="#0f172a"
              strokeDasharray="6 6"
              label={{
                position: "top",
                value: `Selected: ${attackerPower}`,
                fill: "#0f172a",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="rsa"
              name="RSA"
              stroke="#f43f5e"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="ecc"
              name="ECC"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="pq"
              name="Post-Quantum"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
