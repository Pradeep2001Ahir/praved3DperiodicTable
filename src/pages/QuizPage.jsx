// import { useMemo, useState } from 'react';
// import { ELEMENTS } from '../data/elements';

// function shuffle(arr) {
//   const a = [...arr];
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// function buildQuiz(n = 10) {
//   const pool = shuffle(ELEMENTS).slice(0, n);
//   return pool.map((el) => {
//     const mode = Math.random() < 0.5 ? 'symbol' : 'number';
//     const correct = mode === 'symbol' ? el.name : `${el.name} (${el.sym})`;
//     const distractors = shuffle(ELEMENTS.filter((x) => x.n !== el.n))
//       .slice(0, 3)
//       .map((x) => (mode === 'symbol' ? x.name : `${x.name} (${x.sym})`));
//     return {
//       question:
//         mode === 'symbol'
//           ? `Which element has the symbol "${el.sym}"?`
//           : `Which element has atomic number ${el.n}?`,
//       correct,
//       options: shuffle([correct, ...distractors]),
//       meta: el,
//     };
//   });
// }

// export default function QuizPage() {
//   const [quiz, setQuiz] = useState(() => buildQuiz());
//   const [answers, setAnswers] = useState({});
//   const [current, setCurrent] = useState(0);
//   const [done, setDone] = useState(false);

//   const q = quiz[current];
//   const score = useMemo(
//     () => quiz.filter((item, i) => answers[i] === item.correct).length,
//     [quiz, answers]
//   );

//   function choose(opt) {
//     setAnswers((a) => ({ ...a, [current]: opt }));
//     setTimeout(() => {
//       if (current + 1 >= quiz.length) setDone(true);
//       else setCurrent((c) => c + 1);
//     }, 250);
//   }

//   function restart() {
//     setQuiz(buildQuiz());
//     setAnswers({});
//     setCurrent(0);
//     setDone(false);
//   }

//   if (done) {
//     const pct = Math.round((score / quiz.length) * 100);
//     return (
//       <div className="max-w-xl mx-auto px-4 py-16 text-center">
//         <h1 className="text-4xl font-black mb-3">
//           {pct >= 80 ? 'Outstanding!' : pct >= 50 ? 'Good job!' : 'Keep studying!'}
//         </h1>
//         <p className="text-slate-400 mb-8">
//           You scored {score} / {quiz.length} ({pct}%)
//         </p>
//         <button
//           onClick={restart}
//           className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-space font-semibold shadow-glow"
//         >
//           Play again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Chemistry Quiz</h1>
//         <span className="text-sm text-slate-400">
//           Question {current + 1} / {quiz.length} · Score {score}
//         </span>
//       </div>
//       <div className="h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all"
//           style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
//         />
//       </div>

//       <div className="glass rounded-2xl p-6">
//         <p className="text-lg mb-5">{q.question}</p>
//         <div className="grid gap-2">
//           {q.options.map((opt) => {
//             const chosen = answers[current] === opt;
//             const isCorrect = opt === q.correct;
//             const revealed = answers[current] !== undefined;
//             return (
//               <button
//                 key={opt}
//                 disabled={revealed}
//                 onClick={() => choose(opt)}
//                 className={`text-left px-4 py-3 rounded-xl border transition ${
//                   revealed && isCorrect
//                     ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200'
//                     : revealed && chosen
//                     ? 'bg-red-500/20 border-red-400/50 text-red-200'
//                     : 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10'
//                 }`}
//               >
//                 {opt}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }







import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ELEMENTS } from '../data/elements';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuiz(n = 10) {
  const pool = shuffle(ELEMENTS).slice(0, n);

  return pool.map((el) => {
    const mode = Math.random() < 0.5 ? 'symbol' : 'number';
    const correct =
      mode === 'symbol' ? el.name : `${el.name} (${el.sym})`;

    const distractors = shuffle(
      ELEMENTS.filter((x) => x.n !== el.n)
    )
      .slice(0, 3)
      .map((x) =>
        mode === 'symbol' ? x.name : `${x.name} (${x.sym})`
      );

    return {
      question:
        mode === 'symbol'
          ? `Which element has the symbol "${el.sym}"?`
          : `Which element has atomic number ${el.n}?`,
      correct,
      options: shuffle([correct, ...distractors]),
      meta: el,
    };
  });
}

export default function QuizPage() {
  const [quiz, setQuiz] = useState(() => buildQuiz());
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[current];

  const score = useMemo(
    () => quiz.filter((item, i) => answers[i] === item.correct).length,
    [quiz, answers]
  );

  const pageTitle = 'Chemistry Quiz – Test Your Periodic Table Knowledge | Praved';

  const pageDescription =
    'Test your chemistry knowledge with Praved interactive periodic table quiz. Practice chemical element symbols, atomic numbers and element identification with random questions.';

  function choose(opt) {
    setAnswers((a) => ({ ...a, [current]: opt }));

    setTimeout(() => {
      if (current + 1 >= quiz.length) setDone(true);
      else setCurrent((c) => c + 1);
    }, 250);
  }

  function restart() {
    setQuiz(buildQuiz());
    setAnswers({});
    setCurrent(0);
    setDone(false);
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="chemistry quiz, periodic table quiz, chemical elements quiz, atomic number quiz, element symbols quiz, chemistry practice, Praved"
        />

        <link
          rel="canonical"
          href="https://praved3dperiodic-table.vercel.app/quiz"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Praved" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://praved3dperiodic-table.vercel.app/quiz"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      {done ? (
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-black mb-3">
            {Math.round((score / quiz.length) * 100) >= 80
              ? 'Outstanding!'
              : Math.round((score / quiz.length) * 100) >= 50
              ? 'Good job!'
              : 'Keep studying!'}
          </h1>

          <p className="text-slate-400 mb-8">
            You scored {score} / {quiz.length} (
            {Math.round((score / quiz.length) * 100)}%)
          </p>

          <button
            onClick={restart}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-space font-semibold shadow-glow"
          >
            Play again
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Chemistry Quiz</h1>

            <span className="text-sm text-slate-400">
              Question {current + 1} / {quiz.length} · Score {score}
            </span>
          </div>

          <div className="h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all"
              style={{
                width: `${((current + 1) / quiz.length) * 100}%`,
              }}
            />
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-lg mb-5">{q.question}</p>

            <div className="grid gap-2">
              {q.options.map((opt) => {
                const chosen = answers[current] === opt;
                const isCorrect = opt === q.correct;
                const revealed = answers[current] !== undefined;

                return (
                  <button
                    key={opt}
                    disabled={revealed}
                    onClick={() => choose(opt)}
                    className={`text-left px-4 py-3 rounded-xl border transition ${
                      revealed && isCorrect
                        ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200'
                        : revealed && chosen
                        ? 'bg-red-500/20 border-red-400/50 text-red-200'
                        : 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
