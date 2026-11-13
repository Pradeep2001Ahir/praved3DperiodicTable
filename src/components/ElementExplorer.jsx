import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCategory, ELEMENTS } from '../data/elements';
import { electronsForShells, parseConfig } from '../utils/shells';

const MaterialModel3D = lazy(() => import('./MaterialModel3D'));
const AtomicModel3D = lazy(() => import('./AtomicModel3D'));

const TABS = [
  'Overview',
  '3D Model',
  'Atomic Structure',
  'Electron Configuration',
  'Physical Properties',
  'Chemical Properties',
  'Uses & Applications',
  'History & Discovery',
  'Fun Facts',
];

export default function ElementExplorer({ element, onClose, onNavigate }) {
  const [tab, setTab] = useState('Overview');
  const [fullscreen, setFullscreen] = useState(false);
  const cat = getCategory(element.cat);

  useEffect(() => {
    setTab('Overview');
  }, [element.n]);

  const idx = ELEMENTS.findIndex((e) => e.n === element.n);
  const prev = ELEMENTS[(idx - 1 + ELEMENTS.length) % ELEMENTS.length];
  const next = ELEMENTS[(idx + 1) % ELEMENTS.length];

  return (
    <div className="fixed inset-0 z-[60] bg-space/95 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate(prev)}
              className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/50 text-slate-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate(next)}
              className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/50 text-slate-300"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-red-300 border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* LEFT — info */}
          <div>
            <div
              className="rounded-2xl p-6 mb-4 border"
              style={{ borderColor: `${cat.color}55`, background: `linear-gradient(135deg, ${cat.color}22, transparent)` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {cat.name} · Period {element.period} · Group {element.group} · {element.block}-block
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ color: cat.color }}>
                    {element.name}
                  </h2>
                  <p className="text-slate-400 mt-1">
                    {element.sym} · Atomic number {element.n} · {element.mass} u
                  </p>
                </div>
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-black"
                  style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}66`, color: cat.color }}
                >
                  {element.sym}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                    tab === t
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-cyan-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl p-6"
              >
                {tab === 'Overview' && <OverviewTab el={element} />}
                {tab === '3D Model' && (
                  <p className="text-sm text-slate-400">
                    Open the 3D viewer on the right → drag to rotate, scroll to zoom.
                    The model depends on the element's physical state and category.
                  </p>
                )}
                {tab === 'Atomic Structure' && <AtomicTab el={element} />}
                {tab === 'Electron Configuration' && <ConfigTab el={element} />}
                {tab === 'Physical Properties' && <PhysicalTab el={element} />}
                {tab === 'Chemical Properties' && <ChemicalTab el={element} />}
                {tab === 'Uses & Applications' && <UsesTab el={element} />}
                {tab === 'History & Discovery' && <HistoryTab el={element} />}
                {tab === 'Fun Facts' && <FunTab el={element} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — 3D */}
          <div className={fullscreen ? 'fixed inset-0 z-[70] bg-space' : 'relative'}>
            <div className={`${fullscreen ? 'h-screen' : 'h-[70vh] lg:h-[80vh]'} rounded-2xl overflow-hidden glass relative`}>
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                <button
                  onClick={() => setFullscreen((v) => !v)}
                  className="px-3 py-1.5 text-xs rounded-lg bg-white/10 hover:bg-cyan-500/30 border border-white/10 text-slate-200"
                >
                  {fullscreen ? 'Exit fullscreen' : 'Fullscreen 3D'}
                </button>
              </div>
              <Suspense fallback={<Center>Loading 3D…</Center>}>
                {tab === 'Atomic Structure' ? (
                  <AtomicModel3D element={element} />
                ) : (
                  <MaterialModel3D element={element} />
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Center({ children }) {
  return <div className="w-full h-full flex items-center justify-center text-slate-500">{children}</div>;
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-1.5 border-b border-white/5 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-200 text-right">{value ?? 'N/A'}</span>
    </div>
  );
}

function OverviewTab({ el }) {
  return (
    <div className="space-y-1">
      <Row label="Atomic number" value={el.n} />
      <Row label="Atomic mass" value={`${el.mass} u`} />
      <Row label="Category" value={getCategory(el.cat).name} />
      <Row label="Period" value={el.period} />
      <Row label="Group" value={el.group} />
      <Row label="Block" value={`${el.block}-block`} />
      <Row label="Standard state" value={el.state} />
      <Row label="Electron configuration" value={el.config} />
    </div>
  );
}

function AtomicTab({ el }) {
  const shells = electronsForShells(el.n);
  const total = shells.reduce((a, b) => a + b, 0);
  return (
    <div className="space-y-3 text-sm">
      <p className="text-slate-400 text-xs italic">
        Note: this is an <strong>educational Bohr-style model</strong>, not a literal
        representation of electron trajectories (electrons exist in probability clouds).
      </p>
      <Row label="Protons" value={el.n} />
      <Row label="Electrons (neutral atom)" value={total} />
      <Row label="Neutrons (approx.)" value={Math.round(el.mass) - el.n} />
      <Row label="Shell distribution" value={shells.join(', ')} />
    </div>
  );
}

function ConfigTab({ el }) {
  const subshells = parseConfig(el.config);
  return (
    <div className="space-y-3 text-sm">
      <Row label="Configuration" value={el.config} />
      <Row label="Valence electrons" value={valence(el)} />
      <div className="pt-2">
        <p className="text-slate-400 mb-2">Orbital boxes (↑ = +½, ↓ = −½):</p>
        <div className="flex flex-wrap gap-2">
          {subshells.map((s, i) => (
            <OrbitalBox key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function valence(el) {
  const shells = electronsForShells(el.n);
  const last = shells[shells.length - 1];
  return last ?? 0;
}

function OrbitalBox({ n, l, count }) {
  const capacity = { s: 2, p: 6, d: 10, f: 14 }[l];
  const arrows = [];
  for (let i = 0; i < count; i++) arrows.push(i % 2 === 0 ? '↑' : '↓');
  return (
    <div className="text-center">
      <div className="text-[10px] text-slate-500 mb-1">
        {n}
        {l}
      </div>
      <div className="flex border border-cyan-500/40 rounded overflow-hidden">
        {Array.from({ length: capacity }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-7 flex items-center justify-center border-r last:border-r-0 border-cyan-500/20 text-cyan-200 text-sm"
          >
            {arrows[i] ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
}

function fmt(v, unit = '') {
  if (v === null || v === undefined) return 'N/A (predicted/unknown)';
  return `${v}${unit}`;
}

function PhysicalTab({ el }) {
  return (
    <div className="space-y-1">
      <Row label="State at 20 °C" value={el.state} />
      <Row label="Melting point" value={fmt(el.melt, ' K')} />
      <Row label="Boiling point" value={fmt(el.boil, ' K')} />
      <Row label="Density" value={fmt(el.density, ' g/cm³')} />
      <Row label="Atomic radius (empirical)" value={fmt(el.radius, ' pm')} />
    </div>
  );
}

function ChemicalTab({ el }) {
  return (
    <div className="space-y-1">
      <Row label="Electronegativity (Pauling)" value={fmt(el.en)} />
      <Row label="Common oxidation states" value={el.ox.length ? el.ox.join(', ') : 'N/A'} />
      <Row label="Electron configuration" value={el.config} />
    </div>
  );
}

function UsesTab({ el }) {
  return <p className="text-sm text-slate-300 leading-relaxed">{el.uses}</p>;
}

function HistoryTab({ el }) {
  return (
    <div className="space-y-1">
      <Row label="Discovery year" value={el.year === 0 ? 'Known since antiquity' : el.year} />
      <Row label="Discovered by" value={el.discoverer} />
    </div>
  );
}

function FunTab({ el }) {
  return <p className="text-sm text-slate-300 leading-relaxed">{el.fact}</p>;
}