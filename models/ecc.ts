export function eccSecurity(attackerPower: number, quantumAttacker: boolean) {
  const normalizedPower = Math.max(0, attackerPower);
  const decayConstant = quantumAttacker ? 0.085 : 0.02;

  return Math.exp(-decayConstant * normalizedPower);
}
