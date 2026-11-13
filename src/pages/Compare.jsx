import { useState } from 'react';
import { ELEMENTS, getCategory } from '../data/elements';

const FIELDS = [
  { key: 'n', label: 'Atomic number' },
  { key: 'mass', label: 'Atomic mass', unit: ' u' },
  { key: 'radius', label: 'Atomic radius', unit: ' pm' },
  { key: 'en', label: 'Electronegativity' },
  { key: 'density', label: 'Density', unit: ' g/cm³' },
  { key: 'melt', label: 'Melting point', unit: ' K' },
  { key: 'boil', label: 'Boiling point', unit: ' K' },
  { key: 'config', label: 'Configuration' },
  { key: 'cat', label: 'Category', fmt: (v) => getCategory(v).name },
];

export default function Compare() {
  const [a, setA] = useState(ELEMENTS[0].n);
  const [b, setB] = useState(ELEMENTS[7].n);

  const elA = ELEMENTS.find((e) => e.n === Number(a));
  const elB = ELEMENTS.find((e) => e.n === Number(b));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Compare Elements</h1>
      <p className="text-slate-400 mb-6">Pick two elements to see a side-by-side comparison.</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <select
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="bg-white/5 border border-cyan-500/30 rounded-xl px-3 py-2 text-sm"
        >
          {ELEMENTS.map((e) => (
            <option key={e.n} value={e.n} className="bg-space">
              {e.n} — {e.name} ({e.sym})
            </option>
          ))}
        </select>
        <select
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="bg-white/5 border border-cyan-500/30 rounded-xl px-3 py-2 text-sm"
        >
          {ELEMENTS.map((e) => (
            <option key={e.n} value={e.n} className="bg-space">
              {e.n} — {e.name} ({e.sym})
            </option>
          ))}
        </select>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 bg-cyan-500/10">
          <div className="p-4 font-semibold">Property</div>
          <div className="p-4 font-semibold" style={{ color: getCategory(elA.cat).color }}>
            {elA.name} ({elA.sym})
          </div>
          <div className="p-4 font-semibold" style={{ color: getCategory(elB.cat).color }}>
            {elB.name} ({elB.sym})
          </div>
        </div>
        {FIELDS.map((f) => {
          const va = elA[f.key];
          const vb = elB[f.key];
          const fmtV = (v) => {
            if (f.fmt) return v !== null && v !== undefined ? f.fmt(v) : 'N/A';
            return v === null || v === undefined ? 'N/A' : `${v}${f.unit || ''}`;
          };
          return (
            <div key={f.key} className="grid grid-cols-3 border-t border-white/5">
              <div className="p-4 text-slate-400 text-sm">{f.label}</div>
              <div className="p-4 text-slate-200 text-sm">{fmtV(va)}</div>
              <div className="p-4 text-slate-200 text-sm">{fmtV(vb)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}