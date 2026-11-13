// Approximate electron shell distribution from atomic number
// Used for the Bohr-style educational model.
const SHELL_CAPACITY = [2, 8, 18, 32, 32, 18, 8];

export function electronsForShells(atomicNumber) {
  let remaining = atomicNumber;
  const shells = [];
  for (const cap of SHELL_CAPACITY) {
    if (remaining <= 0) break;
    const take = Math.min(cap, remaining);
    shells.push(take);
    remaining -= take;
  }
  return shells;
}

export function parseConfig(config) {
  // "1s² 2s² 2p⁶ 3s¹" or "[Ne] 3s¹"
  // Returns array of { n, l, count }
  const subshells = [];
  const re = /(\d)([spdf])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g;
  let m;
  while ((m = re.exec(config))) {
    const n = parseInt(m[1]);
    const l = m[2];
    const sup = m[3];
    const count = parseInt(sup.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) =>
      '0123456789'['⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)]
    ));
    subshells.push({ n, l, count });
  }
  return subshells;
}