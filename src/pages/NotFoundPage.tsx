import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-xl mx-auto px-4 py-32 text-center">
      <p className="text-8xl font-extrabold text-emerald-100">404</p>
      <h1 className="text-2xl font-bold text-slate-800 mt-2 mb-2">{t.notFound.title}</h1>
      <p className="text-slate-400 mb-8">{t.notFound.desc}</p>
      <div className="flex justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-800 transition-colors"
        >
          <Home className="h-4 w-4" />
          {t.notFound.backHome}
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === 'te' ? 'వెనుకకు వెళ్లండి' : 'Go Back'}
        </button>
      </div>
    </div>
  );
}

