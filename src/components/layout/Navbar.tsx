import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Store, Phone } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { BUSINESS_CONFIG, formatTelUrl, triggerPhoneCall } from '../../data/business';
import ContactModal from '../ui/ContactModal';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { t, language, getCategoryTranslation } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors px-1 pb-0.5 border-b-2 ${
      isActive
        ? 'text-emerald-700 border-emerald-600 font-semibold'
        : 'text-slate-600 border-transparent hover:text-emerald-700'
    }`;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        {/* Top bar with all 3 contact numbers and removed minimum order */}
        <div className="bg-emerald-800 text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
            <span>📦 {t.hero.badge}</span>
            <span className="opacity-60 hidden sm:inline">·</span>
            <span className="font-medium flex items-center gap-1.5 flex-wrap justify-center">
              <span>{t.common.directContactNumbers}</span>
              {BUSINESS_CONFIG.phones.map((phone, idx) => (
                <span key={phone.number} className="inline-flex items-center gap-1">
                  <a
                    href={formatTelUrl(phone.number)}
                    target="_self"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerPhoneCall(phone.number);
                    }}
                    className="underline hover:text-emerald-200 font-bold cursor-pointer"
                  >
                    {phone.display}
                  </a>
                  {idx < BUSINESS_CONFIG.phones.length - 1 && <span className="opacity-60">,</span>}
                </span>
              ))}
            </span>
            <span className="opacity-60 hidden md:inline">·</span>
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="hidden md:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded-full font-bold text-[10px] transition-colors"
            >
              <Phone className="h-2.5 w-2.5" />
              <span>{t.common.callUs}</span>
            </button>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2">
            {/* Logo / Brand identity */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 shrink">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                <Store className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 leading-tight block truncate">
                  {t.nav.brandName}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 leading-none block truncate">
                  {t.nav.brandTagline}
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-7 shrink-0">
              <NavLink to="/" end className={navLinkClass}>{t.nav.home}</NavLink>
              <NavLink to="/products" className={navLinkClass}>{t.nav.allProducts}</NavLink>
              <NavLink to="/offers" className={navLinkClass}>{t.nav.specialOffers}</NavLink>
              <NavLink to="/about" className={navLinkClass}>{t.nav.about}</NavLink>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Language Toggle */}
              <LanguageToggle />

              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen((o) => !o)}
                className="p-1.5 sm:p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label={t.common.search}
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Call Us popup button */}
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-emerald-700 text-white text-xs font-bold px-2.5 sm:px-3.5 py-2 rounded-xl hover:bg-emerald-800 transition-colors shadow-xs"
                title={t.common.callUs}
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t.common.callUs}</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden p-1.5 sm:p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label={language === 'te' ? 'మెనూ' : 'Menu'}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Search bar dropdown */}
          {searchOpen && (
            <div className="py-3 border-t border-slate-100">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.common.searchPlaceholder}
                  className="flex-1 rounded-lg border border-slate-200 px-3.5 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-700 text-white px-4 sm:px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors shrink-0"
                >
                  {t.common.search}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {/* Language selection in mobile drawer */}
              <div className="mb-3 px-1">
                <p className="text-[11px] text-slate-500 font-bold mb-1.5 uppercase tracking-wider">
                  {language === 'te' ? 'భాషను ఎంచుకోండి:' : 'Select Language:'}
                </p>
                <LanguageToggle variant="expanded" />
              </div>


              {[
                { to: '/', label: t.nav.home, end: true },
                { to: '/products', label: t.nav.allProducts },
                { to: '/offers', label: t.nav.specialOffersFull },
                { to: '/about', label: t.nav.about },
              ].map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Call Us Button in Mobile Drawer */}
              <div className="pt-2 px-1">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-emerald-800 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{t.common.callUsDirectly}</span>
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-400 px-3 mb-2 font-medium uppercase tracking-wide">
                  {t.categoriesSection.title}
                </p>
                {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                  const catT = getCategoryTranslation(cat.id);
                  return (
                    <NavLink
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <span>{cat.icon}</span>
                      <span>{catT.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Details Popup Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
