import { NavLink } from 'react-router-dom';
import { Atom, Home as HomeIcon, Table2, Layers3, GitCompare, BookOpen, Trophy, Menu, X } from 'lucide-react';
import { useState } from 'react';

const LINKS = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/table', label: 'Periodic Table', icon: Table2 },
  { to: '/table?view=3d', label: '3D Explorer', icon: Layers3 },
  { to: '/compare', label: 'Compare', icon: GitCompare },
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/quiz', label: 'Quiz', icon: Trophy },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 shadow-glow-sm group-hover:shadow-glow transition">
            <Atom className="w-5 h-5 text-cyan-300" />
          </div>
          <span className="font-bold tracking-wider text-lg glow-text">
            {/* ELEMENT<span className="text-cyan-300">VERSE</span> */}
            PRA<span className="text-cyan-300">VED</span>

          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-cyan-500/30 text-cyan-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}