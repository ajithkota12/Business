import { useEffect } from 'react';
import { Phone, X, Clock, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, formatTelUrl } from '../../data/business';
import { useLanguage } from '../../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md max-h-[92dvh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 p-5 sm:p-6 text-white relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={t.contactModal.close}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-2.5 sm:mb-3">
            <Phone className="h-5 w-5 text-amber-300" />
          </div>
          <h2 id="contact-modal-title" className="text-lg sm:text-xl font-black text-white">
            {t.contactModal.title}
          </h2>
          <p className="text-emerald-100 text-xs mt-1 leading-relaxed">
            {t.contactModal.desc}
          </p>
        </div>

        {/* 3 Phone Numbers List */}
        <div className="p-4 sm:p-6 space-y-3 overflow-y-auto flex-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.contactModal.availableNumbers}
          </p>

          <div className="space-y-2.5">
            {BUSINESS_CONFIG.phones.map((phone, idx) => (
              <a
                key={phone.number}
                href={formatTelUrl(phone.number)}
                className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 active:scale-[0.99] transition-all shadow-2xs cursor-pointer"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-none min-w-0">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs group-hover:bg-emerald-700 group-hover:text-white transition-colors shrink-0">
                    #{idx + 1}
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-900 transition-colors block truncate">
                      {phone.display}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                      {t.contactModal.tapToCall}
                    </span>
                  </div>
                </div>

                <span className="pointer-events-none shrink-0 inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-700 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl group-hover:bg-emerald-800 transition-colors shadow-2xs">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{t.contactModal.callNow}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Business Hours & Location Info (No email) */}
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>
                <strong>{t.common.businessHours}:</strong> {t.common.workingDays}
              </span>
            </div>
            <a
              href={BUSINESS_CONFIG.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-slate-700 hover:text-emerald-700 transition-colors group pt-0.5"
            >
              <MapPin className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="flex-1 underline-offset-2 group-hover:underline">
                {t.common.addressDisplay}
              </span>
              <ExternalLink className="h-3 w-3 shrink-0 mt-0.5 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-bold transition-colors"
          >
            {t.contactModal.close}
          </button>
        </div>
      </div>
    </div>
  );
}

