import { useState, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table2, Layers3 } from 'lucide-react';
import PeriodicTable from '../components/PeriodicTable';
import ElementExplorer from '../components/ElementExplorer';

const PeriodicTable3D = lazy(() => import('../components/PeriodicTable3D'));

export default function Explorer() {
  const [params, setParams] = useSearchParams();
  const [selected, setSelected] = useState(null);
  const view = params.get('view') === '3d' ? '3d' : '2d';

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Periodic Table</h1>
          <p className="text-slate-400 text-sm mt-1">
            Click any element to explore its 3D model and properties.
          </p>
        </div>
        <div className="flex rounded-xl overflow-hidden border border-cyan-500/30">
          <button
            onClick={() => setParams({})}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium ${
              view === '2d' ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-400'
            }`}
          >
            <Table2 className="w-4 h-4" /> 2D
          </button>
          <button
            onClick={() => setParams({ view: '3d' })}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium ${
              view === '3d' ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-400'
            }`}
          >
            <Layers3 className="w-4 h-4" /> 3D
          </button>
        </div>
      </div>

      {view === '2d' ? (
        <PeriodicTable onSelect={setSelected} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Suspense fallback={<div className="h-[70vh] flex items-center justify-center text-slate-500">Loading 3D table…</div>}>
            <PeriodicTable3D onSelect={setSelected} />
          </Suspense>
        </div>
      )}

      {selected && (
        <ElementExplorer
          element={selected}
          onClose={() => setSelected(null)}
          onNavigate={setSelected}
        />
      )}
    </div>
  );
}