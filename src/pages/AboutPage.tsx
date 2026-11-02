import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Package, Layers, Store, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, formatTelUrl } from '../data/business';
import ContactModal from '../components/ui/ContactModal';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          {t.aboutPage.pageTitle}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          {t.aboutPage.pageSubtitle}
        </p>
      </div>

      {/* Catalogue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-center">
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            {t.aboutPage.overviewHeading}
          </h2>
          <p>{t.aboutPage.overviewP1}</p>
          <p>{t.aboutPage.overviewP2}</p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:text-emerald-900"
            >
              {t.aboutPage.exploreLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 4 Feature highlights */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: Package,
              title: t.aboutPage.featureRangeTitle,
              desc: t.aboutPage.featureRangeDesc,
            },
            {
              icon: Layers,
              title: t.aboutPage.featureSheetsTitle,
              desc: t.aboutPage.featureSheetsDesc,
            },
            {
              icon: Store,
              title: t.aboutPage.featureRetailTitle,
              desc: t.aboutPage.featureRetailDesc,
            },
            {
              icon: Clock,
              title: t.aboutPage.featureSupplyTitle,
              desc: t.aboutPage.featureSupplyDesc,
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-emerald-50/60 rounded-2xl p-4 sm:p-5 border border-emerald-100 flex flex-col justify-between"
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-2">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm sm:text-base">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catalogue Specifications */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 mb-14 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
          {t.aboutPage.specsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              {t.aboutPage.denom2Title}
            </span>
            <p className="text-2xl font-black text-slate-900 mb-2">{t.aboutPage.denom2Price}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.aboutPage.denom2Desc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              {t.aboutPage.denom5Title}
            </span>
            <p className="text-2xl font-black text-slate-900 mb-2">{t.aboutPage.denom5Price}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.aboutPage.denom5Desc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              {t.aboutPage.denom10Title}
            </span>
            <p className="text-2xl font-black text-slate-900 mb-2">{t.aboutPage.denom10Price}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.aboutPage.denom10Desc}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details with all 3 phones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-5">{t.aboutPage.contactCardTitle}</h2>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="pt-1">
              <a
                href={BUSINESS_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-3 text-slate-800 hover:text-emerald-700 transition-colors group"
                title={t.common.openInGoogleMaps}
              >
                <MapPin className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-semibold block">{t.common.addressDisplay}</span>
                  <span className="text-xs text-emerald-700 font-medium inline-flex items-center gap-1 mt-0.5 group-hover:underline">
                    {t.aboutPage.viewOnGoogleMaps} <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                {t.common.directContactNumbers}
              </p>
              <div className="space-y-2">
                {BUSINESS_CONFIG.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={formatTelUrl(phone.number)}
                    className="flex items-center gap-2.5 text-slate-800 hover:text-emerald-700 font-bold text-sm cursor-pointer"
                  >
                    <Phone className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                <strong>{t.common.businessHours}:</strong> {t.common.workingDays}
                <br />
                <strong>{t.common.closedDay}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{t.aboutPage.wholesaleCtaTitle}</h2>
            <p className="text-emerald-100 text-sm leading-relaxed">
              {t.aboutPage.wholesaleCtaDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="flex-1 text-center bg-white text-emerald-950 font-bold py-3 px-4 rounded-xl hover:bg-emerald-50 transition-colors text-sm shadow-sm inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-emerald-700" />
              <span>{t.common.callUsDirectly}</span>
            </button>
            <Link
              to="/products"
              className="flex-1 text-center bg-emerald-900/80 border border-emerald-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-900 transition-colors text-sm inline-flex items-center justify-center gap-1.5"
            >
              <span>{t.common.browseProducts}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Location Map ──────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 mb-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
              <MapPin className="h-4 w-4 text-emerald-700" />
              <span>{t.aboutPage.mapHeading}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{t.common.addressDisplay}</h2>
          </div>
          <a
            href={BUSINESS_CONFIG.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-2xs shrink-0"
          >
            <span>{t.common.openInGoogleMaps}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] sm:aspect-[16/7] min-h-[250px] sm:min-h-[340px] w-full bg-slate-100">
          <iframe
            title={language === 'te' ? 'వ్యాపార లొకేషన్ మ్యాప్' : 'Business Location Map'}
            src={BUSINESS_CONFIG.address.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Contact Details Popup Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

