import { Link } from 'react-router-dom';
import { Phone, MapPin, Store, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { BUSINESS_CONFIG, formatTelUrl } from '../../data/business';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t, getCategoryTranslation } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand & Overview */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Store className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-white text-base block leading-tight">
                  {t.nav.brandName}
                </span>
                <span className="block text-xs text-slate-400">
                  {t.nav.brandTagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {t.aboutPage.pageSubtitle}
            </p>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <p className="text-xs text-emerald-400 font-semibold">{t.statsSection.sheetsLabel}</p>
              <p className="text-xs text-slate-400 mt-0.5">{t.statsSection.varietiesVal} {t.statsSection.varietiesLabel}</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              {t.categoriesSection.title}
            </h3>
            <ul className="space-y-2.5">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const catT = getCategoryTranslation(cat.id);
                return (
                  <li key={cat.id}>
                    <Link
                      to={`/products?category=${cat.id}`}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                    >
                      <span>{cat.icon}</span>
                      <span>{catT.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links without cart/order */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: t.footer.homePage },
                { to: '/products', label: t.footer.allProducts },
                { to: '/offers', label: t.footer.specialOffers },
                { to: '/about', label: t.footer.aboutCatalogue },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-emerald-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with all 3 phone numbers */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-2.5 text-sm">
              {BUSINESS_CONFIG.phones.map((phone) => (
                <a
                  key={phone.number}
                  href={formatTelUrl(phone.number)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors font-bold cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{phone.display}</span>
                </a>
              ))}
              <a
                href={BUSINESS_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 flex items-start gap-2.5 text-slate-400 hover:text-emerald-400 text-xs transition-colors group"
                title={t.common.openInGoogleMaps}
              >
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="flex-1">{t.common.addressDisplay}</span>
                <ExternalLink className="h-3 w-3 shrink-0 mt-0.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
            <div className="mt-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
              <p className="text-xs text-slate-400 font-medium">{t.common.businessHours}</p>
              <p className="text-xs text-slate-200 mt-1">{t.common.workingDays}</p>
              <p className="text-xs text-slate-400">{t.common.closedDay}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {t.nav.brandName}.
          </p>
          <p className="text-slate-500">
            {t.footer.copyrightNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
