export default function CategoryFilter({ active, setActive }) {
  const options = [
    { key: 'all', label: 'All' },
    { key: 'metal', label: 'Metals' },
    { key: 'nonmetal-group', label: 'Nonmetals' },
  ];
  const extra = [
    { key: 'alkali', label: 'Alkali' },
    { key: 'alkaline', label: 'Alkaline' },
    { key: 'transition', label: 'Transition' },
    { key: 'lanthanide', label: 'Lanthanides' },
    { key: 'actinide', label: 'Actinides' },
    { key: 'noble', label: 'Noble Gases' },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {[...options, ...extra].map((o) => (
        <button
          key={o.key}
          onClick={() => setActive(o.key)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
            active === o.key
              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200'
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-cyan-200'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}