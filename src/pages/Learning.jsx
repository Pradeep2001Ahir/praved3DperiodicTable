// import { ELEMENTS } from '../data/elements';

// const LESSONS = [
//   {
//     title: 'How the periodic table is organized',
//     body: `Elements are arranged by increasing atomic number. Columns are called groups and rows are periods. Elements in the same group share similar chemical properties because they have the same number of valence electrons.`,
//   },
//   {
//     title: 'Groups (columns)',
//     body: `Group 1 = alkali metals (very reactive). Group 2 = alkaline earth metals. Groups 3–12 = transition metals. Group 17 = halogens (reactive nonmetals). Group 18 = noble gases (very stable).`,
//   },
//   {
//     title: 'Periods (rows)',
//     body: `A period tells you which shell the outermost electron is in. Period 1 has only 2 elements (H, He). Period 2 has 8 elements. Later periods have 18 or 32 because more subshells become available.`,
//   },
//   {
//     title: 'Atomic number',
//     body: `The atomic number (Z) = the number of protons in the nucleus. In a neutral atom, it also equals the number of electrons. Hydrogen is 1, carbon is 6, gold is 79, and oganesson is 118.`,
//   },
//   {
//     title: 'Valence electrons & valency',
//     body: `Valence electrons are the outermost electrons — they decide bonding. Atoms tend to gain, lose or share electrons to reach a stable noble-gas configuration (an "octet" for most elements).`,
//   },
//   {
//     title: 'Electron configuration',
//     body: `Electrons fill subshells in a specific order (the "Aufbau principle"). Subshell notation uses superscripts: 1s² 2s² 2p⁶ 3s¹ for sodium. Each subshell can hold 2 (s), 6 (p), 10 (d) or 14 (f) electrons.`,
//   },
// ];

// export default function Learning() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-2">Learning Mode</h1>
//       <p className="text-slate-400 mb-8">
//         Short, beginner-friendly explanations of the periodic table and atomic structure.
//       </p>

//       <div className="space-y-4">
//         {LESSONS.map((l) => (
//           <details key={l.title} className="glass rounded-xl p-5 group">
//             <summary className="font-semibold cursor-pointer text-cyan-200 group-open:text-cyan-100">
//               {l.title}
//             </summary>
//             <p className="mt-3 text-sm text-slate-300 leading-relaxed">{l.body}</p>
//           </details>
//         ))}
//       </div>

//       <div className="mt-10 glass rounded-xl p-6">
//         <h2 className="font-semibold text-lg mb-3">Try it: how many valence electrons?</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
//           {[1, 6, 8, 11, 17, 18, 26, 79].map((n) => {
//             const el = ELEMENTS.find((x) => x.n === n);
//             if (!el) return null;
//             return (
//               <div key={n} className="rounded-lg bg-white/5 p-3">
//                 <div className="text-cyan-300 font-bold">{el.sym}</div>
//                 <div className="text-[11px] text-slate-400">{el.name}</div>
//                 <div className="text-[11px] mt-1 text-slate-300">{el.config}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



import { Helmet } from 'react-helmet-async';
import { ELEMENTS } from '../data/elements';

const LESSONS = [
  {
    title: 'How the periodic table is organized',
    body: `Elements are arranged by increasing atomic number. Columns are called groups and rows are periods. Elements in the same group share similar chemical properties because they have the same number of valence electrons.`,
  },
  {
    title: 'Groups (columns)',
    body: `Group 1 = alkali metals (very reactive). Group 2 = alkaline earth metals. Groups 3–12 = transition metals. Group 17 = halogens (reactive nonmetals). Group 18 = noble gases (very stable).`,
  },
  {
    title: 'Periods (rows)',
    body: `A period tells you which shell the outermost electron is in. Period 1 has only 2 elements (H, He). Period 2 has 8 elements. Later periods have 18 or 32 because more subshells become available.`,
  },
  {
    title: 'Atomic number',
    body: `The atomic number (Z) = the number of protons in the nucleus. In a neutral atom, it also equals the number of electrons. Hydrogen is 1, carbon is 6, gold is 79, and oganesson is 118.`,
  },
  {
    title: 'Valence electrons & valency',
    body: `Valence electrons are the outermost electrons — they decide bonding. Atoms tend to gain, lose or share electrons to reach a stable noble-gas configuration (an "octet" for most elements).`,
  },
  {
    title: 'Electron configuration',
    body: `Electrons fill subshells in a specific order (the "Aufbau principle"). Subshell notation uses superscripts: 1s² 2s² 2p⁶ 3s¹ for sodium. Each subshell can hold 2 (s), 6 (p), 10 (d) or 14 (f) electrons.`,
  },
];

export default function Learning() {
  const pageTitle = 'Chemistry Learning – Periodic Table & Atomic Structure | Praved';

  const pageDescription =
    'Learn chemistry with beginner-friendly lessons on the periodic table, atomic number, groups, periods, valence electrons, valency and electron configuration.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="chemistry learning, periodic table lessons, atomic structure, atomic number, valence electrons, valency, electron configuration, chemistry for students, Praved"
        />

        <link
          rel="canonical"
          href="https://praved3dperiodic-table.vercel.app/learn"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Praved" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://praved3dperiodic-table.vercel.app/learn"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Learning Mode</h1>

        <p className="text-slate-400 mb-8">
          Short, beginner-friendly explanations of the periodic table and atomic structure.
        </p>

        <div className="space-y-4">
          {LESSONS.map((l) => (
            <details key={l.title} className="glass rounded-xl p-5 group">
              <summary className="font-semibold cursor-pointer text-cyan-200 group-open:text-cyan-100">
                {l.title}
              </summary>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {l.body}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 glass rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-3">
            Try it: how many valence electrons?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[1, 6, 8, 11, 17, 18, 26, 79].map((n) => {
              const el = ELEMENTS.find((x) => x.n === n);
              if (!el) return null;

              return (
                <div key={n} className="rounded-lg bg-white/5 p-3">
                  <div className="text-cyan-300 font-bold">{el.sym}</div>
                  <div className="text-[11px] text-slate-400">{el.name}</div>
                  <div className="text-[11px] mt-1 text-slate-300">
                    {el.config}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
