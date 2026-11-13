import { getCategory } from '../data/elements';

export default function ElementCard({ element, onClick, dimmed, highlighted }) {
  const cat = getCategory(element.cat);
  return (
    <button
      onClick={() => onClick?.(element)}
      className={`relative rounded-md p-1.5 text-left border transition-all duration-200 ${
        highlighted ? 'ring-2 ring-cyan-300 scale-105 z-10' : ''
      } ${dimmed ? 'opacity-20' : 'opacity-100'}`}
      style={{
        backgroundColor: `${cat.color}18`,
        borderColor: `${cat.color}55`,
        boxShadow: highlighted ? `0 0 18px ${cat.color}80` : 'none',
      }}
    >
      <div className="flex justify-between items-start text-[9px] leading-none">
        <span style={{ color: cat.color }} className="font-bold">
          {element.n}
        </span>
        <span className="text-slate-400 text-[8px]">{element.mass.toFixed(1)}</span>
      </div>
      <div
        className="text-base md:text-lg font-bold leading-none mt-0.5"
        style={{ color: cat.color }}
      >
        {element.sym}
      </div>
      <div className="text-[8px] md:text-[9px] text-slate-300 truncate leading-tight mt-0.5">
        {element.name}
      </div>
    </button>
  );
}