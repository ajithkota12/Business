import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'pill' | 'expanded';
}

export default function LanguageToggle({ className = '', variant = 'pill' }: LanguageToggleProps) {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  if (variant === 'expanded') {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-white text-emerald-800 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('te')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'te'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          తెలుగు
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-emerald-600 text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs group ${className}`}
      title={language === 'en' ? 'తెలుగులోకి మార్చండి (Switch to Telugu)' : 'Switch to English'}
      aria-label="Toggle language between English and Telugu"
    >
      <Languages className="h-4 w-4 text-emerald-700 group-hover:scale-110 transition-transform" />
      <span className="flex items-center gap-1">
        <span className={language === 'en' ? 'text-emerald-800 font-extrabold' : 'text-slate-400 font-normal'}>
          EN
        </span>
        <span className="text-slate-300">|</span>
        <span className={language === 'te' ? 'text-emerald-800 font-extrabold' : 'text-slate-400 font-normal'}>
          తెలుగు
        </span>
      </span>
    </button>
  );
}
