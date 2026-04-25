export function pqSecurity(attackerPower: number, quantumAttacker: boolean) {
  const normalizedPower = Math.max(0, attackerPower);
  const decayConstant = quantumAttacker ? 0.011 : 0.009;

  return Math.exp(-decayConstant * normalizedPower);
}
