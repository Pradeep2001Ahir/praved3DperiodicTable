import { Search, X } from 'lucide-react';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="relative flex-1">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, symbol or atomic number (e.g. Au, Oxygen, 79)"
        className="w-full bg-white/5 border border-cyan-500/20 rounded-xl pl-10 pr-10 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-300"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}