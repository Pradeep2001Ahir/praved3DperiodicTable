import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Learning from './pages/Learning';
import QuizPage from './pages/QuizPage';
import Compare from './pages/Compare';

export default function App() {
  return (
    <div className="min-h-screen bg-space text-slate-200 bg-space-gradient">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Explorer />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}