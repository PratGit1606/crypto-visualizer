export function rsaSecurity(attackerPower: number, quantumAttacker: boolean) {
  const normalizedPower = Math.max(0, attackerPower);
  const decayConstant = quantumAttacker ? 0.12 : 0.026;

  return Math.exp(-decayConstant * normalizedPower);
}
