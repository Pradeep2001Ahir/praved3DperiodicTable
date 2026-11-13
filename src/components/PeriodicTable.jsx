import { useMemo, useState } from 'react';
import { getGridPosition, ELEMENTS, CATEGORIES } from '../data/elements';
import ElementCard from './ElementCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

export default function PeriodicTable({ onSelect }) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ELEMENTS.filter((e) => {
      const matchCat = activeCat === 'all' || e.cat === activeCat;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.sym.toLowerCase() === q ||
        String(e.n) === q
      );
    });
  }, [query, activeCat]);

  const matchedNumbers = new Set(filtered.map((e) => e.n));

  const grid = useMemo(() => {
    const map = {};
    for (const el of ELEMENTS) {
      const { row, col } = getGridPosition(el);
      map[`${row}-${col}`] = el;
    }
    return map;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar query={query} setQuery={setQuery} />
        <CategoryFilter active={activeCat} setActive={setActiveCat} />
      </div>

      {/* 2D grid */}
      <div className="overflow-x-auto pb-4">
        <div
          className="grid gap-1 min-w-[900px]"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
            gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
          }}
        >
          {Object.entries(grid).map(([key, el]) => {
            const [row, col] = key.split('-').map(Number);
            return (
              <div
                key={key}
                style={{ gridRow: row, gridColumn: col }}
                className="aspect-square"
              >
                <ElementCard
                  element={el}
                  onClick={onSelect}
                  dimmed={filtered.length > 0 && filtered.length < 118 && !matchedNumbers.has(el.n)}
                  highlighted={matchedNumbers.has(el.n) && filtered.length < 118 && filtered.length > 0}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mt-6">
        {Object.entries(CATEGORIES).map(([key, c]) => (
          <button
            key={key}
            onClick={() => setActiveCat(activeCat === key ? 'all' : key)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] border transition ${
              activeCat === key ? 'ring-2 ring-white/40' : ''
            }`}
            style={{ borderColor: `${c.color}66`, backgroundColor: `${c.color}22`, color: c.color }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
            {c.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 mt-8">No elements match your search.</p>
      )}
      {filtered.length > 0 && filtered.length < 118 && (
        <p className="text-center text-cyan-300 text-sm mt-6">
          {filtered.length} element{filtered.length === 1 ? '' : 's'} match
        </p>
      )}
    </div>
  );
}