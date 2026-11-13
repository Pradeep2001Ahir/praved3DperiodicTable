// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Atom, FlaskConical, ArrowRight, Sparkles } from 'lucide-react';
// import AtomScene from '../components/AtomScene';

// const STATS = [
//   { value: '118', label: 'Chemical Elements' },
//   { value: '7', label: 'Periods' },
//   { value: '18', label: 'Groups' },
//   { value: '4', label: 'Element Blocks' },
// ];

// export default function Home() {
//   return (
//     <div className="relative overflow-hidden">
//       <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center relative">
//         <AtomScene />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-4xl"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 text-xs font-medium mb-6">
//             <Sparkles className="w-3.5 h-3.5" />
//             Interactive 3D Chemistry Learning Platform
//           </span>
//           <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
//             EXPLORE THE
//             <br />
//             <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent glow-text">
//               UNIVERSE OF ELEMENTS WITH PRAVED
//             </span>
//           </h1>
//           <p className="mt-6 text-slate-400 max-w-2xl mx-auto md:text-lg">
//             Discover, visualize and understand every element of the periodic table
//             in an immersive 3D experience.
//           </p>
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//             <Link
//               to="/table"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-space font-semibold shadow-glow hover:brightness-110 transition"
//             >
//               Explore Periodic Table
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//             </Link>
//             <Link
//               to="/learn"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 bg-cyan-500/5 text-cyan-200 hover:bg-cyan-500/10 transition"
//             >
//               <FlaskConical className="w-4 h-4" /> Learn Chemistry
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       <section className="max-w-5xl mx-auto px-4 pb-24 -mt-10 relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {STATS.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="glass rounded-2xl p-6 text-center hover:shadow-glow transition"
//             >
//               <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
//                 {s.value}
//               </div>
//               <div className="text-xs md:text-sm text-slate-400 mt-1">{s.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <section className="max-w-5xl mx-auto px-4 pb-24">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
//           A complete chemistry lab in your browser
//         </h2>
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             { icon: Atom, title: '360° 3D Models', text: 'Rotate, zoom and inspect real 3D visualizations for every element.' },
//             { icon: FlaskConical, title: '9 Detail Tabs', text: 'Overview, atomic structure, electron configuration, properties, history and more.' },
//             { icon: Sparkles, title: 'Search & Compare', text: 'Search any element, filter by category, and compare any two side-by-side.' },
//           ].map(({ icon: Icon, title, text }) => (
//             <div key={title} className="glass rounded-2xl p-6">
//               <Icon className="w-8 h-8 text-cyan-300 mb-4" />
//               <h3 className="font-semibold text-lg mb-2">{title}</h3>
//               <p className="text-sm text-slate-400">{text}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }




import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, FlaskConical, ArrowRight, Sparkles, Code2, Phone } from 'lucide-react';
import AtomScene from '../components/AtomScene';

const STATS = [
  { value: '118', label: 'Chemical Elements' },
  { value: '7', label: 'Periods' },
  { value: '18', label: 'Groups' },
  { value: '4', label: 'Element Blocks' },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center relative">
        <AtomScene />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive 3D Chemistry Learning Platform
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
            EXPLORE THE
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent glow-text">
              UNIVERSE OF ELEMENTS WITH PRAVED
            </span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto md:text-lg">
            Discover, visualize and understand every element of the periodic table
            in an immersive 3D experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/table"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-space font-semibold shadow-glow hover:brightness-110 transition"
            >
              Explore Periodic Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/40 bg-cyan-500/5 text-cyan-200 hover:bg-cyan-500/10 transition"
            >
              <FlaskConical className="w-4 h-4" /> Learn Chemistry
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:shadow-glow transition"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          A complete chemistry lab in your browser
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Atom, title: '360° 3D Models', text: 'Rotate, zoom and inspect real 3D visualizations for every element.' },
            { icon: FlaskConical, title: '9 Detail Tabs', text: 'Overview, atomic structure, electron configuration, properties, history and more.' },
            { icon: Sparkles, title: 'Search & Compare', text: 'Search any element, filter by category, and compare any two side-by-side.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <Icon className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Developer Credit Section ===== */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center border border-cyan-400/20"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 mb-4">
            <Code2 className="w-7 h-7 text-cyan-300" />
          </div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/70 font-semibold mb-2">
            Designed & Developed by
          </p>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Pradeep yadav
          </h3>
          <a
            href="tel:+919999999999"
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-400/40 bg-cyan-500/5 text-cyan-200 hover:bg-cyan-500/10 transition text-sm"
          >
            <Phone className="w-4 h-4" />
            +91 83492 52729
          </a>
        </motion.div>
      </section>
    </div>
  );
}