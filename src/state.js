export const SEED = 90163573443884;
export function summarize(rows) {
  const n = rows.length;
  const sum = rows.reduce((a, r) => a + r.value, 0);
  const top = [...rows].sort((a, b) => b.value - a.value)[0] || null;
  return { n, sum, mean: n ? sum / n : 0, top: top && top.key, seed: SEED };
}
