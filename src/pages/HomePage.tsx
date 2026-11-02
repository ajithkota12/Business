import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Tag, Phone, Gift } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import ContactModal from '../components/ui/ContactModal';
import { FEATURED_PRODUCTS, CATEGORIES, PRODUCTS } from '../data/products';
import { BUSINESS_CONFIG, formatTelUrl } from '../data/business';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { t, language, getCategoryTranslation, getProductTranslation } = useLanguage();
  const featuredProducts = FEATURED_PRODUCTS.slice(0, 4);
  const offerProducts = PRODUCTS.filter((p) => p.offers.length > 0);

  return (
    <div className="flex flex-col gap-0">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 backdrop-blur-sm text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4 border border-emerald-500/30">
              {t.hero.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 tracking-tight">
              {t.hero.title1}<br />
              <span className="text-amber-300">{t.hero.title2}</span>
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-2.5 sm:gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg text-sm sm:text-base"
              >
                {t.common.browseProducts}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 text-amber-300" />
                {t.common.callUs}
              </button>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── USP Strips ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: Package,
                title: t.usp.rangeTitle,
                desc: t.usp.rangeDesc,
              },
              {
                icon: Truck,
                title: t.usp.ratesTitle,
                desc: t.usp.ratesDesc,
              },
              {
                icon: Tag,
                title: t.usp.offerTitle,
                desc: t.usp.offerDesc,
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-xs border border-slate-100"
              >
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-emerald-100 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Icon className="h-5 w-5 text-emerald-800" />
                </div>
                <p className="font-bold text-slate-800 text-sm">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t.categoriesSection.title}
            subtitle={t.categoriesSection.subtitle}
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
              const catInfo = getCategoryTranslation(cat.id);
              return (
                <Link
                  key={cat.id}
                  to={`/products?category=${cat.id}`}
                  className="group flex flex-col p-3.5 sm:p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all shadow-xs"
                >
                  <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">{catInfo.label}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">{catInfo.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ───────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <SectionHeading
              title={t.featuredSection.title}
              subtitle={t.featuredSection.subtitle}
              className="mb-0"
            />
            <Link
              to="/products"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 self-start sm:self-auto"
            >
              {t.common.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Offers Banner (BUY 10 + GET 1 FREE) ─────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-white shadow-md relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4">
                <Gift className="h-3.5 w-3.5" /> {t.homeOfferBanner.promoTag}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight">
                {t.homeOfferBanner.promoTitle}
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mb-4 leading-relaxed">
                {t.homeOfferBanner.promoDesc}
              </p>
              <div className="bg-emerald-900/60 border border-emerald-700/60 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-5 sm:mb-6">
                <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-2">
                  {t.homeOfferBanner.applicableVarieties}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {offerProducts.map((p) => {
                    const pTrans = getProductTranslation(p.id);
                    return (
                      <Link
                        key={p.id}
                        to={`/products/${p.id}`}
                        className="text-xs bg-white/10 hover:bg-white/20 border border-white/20 px-2.5 sm:px-3 py-1 rounded-lg text-white font-medium transition-colors"
                      >
                        {pTrans.title} {language === 'te' ? '(₹2 రకం)' : '(₹2 Variety)'}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                to="/offers"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-amber-300 transition-colors shadow-sm text-sm sm:text-base w-full sm:w-auto"
              >
                {t.homeOfferBanner.viewOfferDetails} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalogue Overview Stats ────────────────────────────────────────── */}
      <section className="bg-slate-900 py-10 sm:py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            {[
              { value: t.statsSection.sheetsVal, label: t.statsSection.sheetsLabel },
              { value: t.statsSection.catVal, label: t.statsSection.catLabel },
              { value: t.statsSection.varietiesVal, label: t.statsSection.varietiesLabel },
              { value: t.statsSection.offerVal, label: t.statsSection.offerLabel },
            ].map(({ value, label }) => (
              <div key={label} className="p-3 sm:p-4 bg-slate-800/50 rounded-xl sm:rounded-2xl border border-slate-800">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-300">{value}</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wholesale Direct Call CTA ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-emerald-800">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            {t.ctaSection.title}
          </h2>
          <p className="text-slate-600 mb-5 sm:mb-6 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            {t.ctaSection.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mb-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-6 sm:px-7 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-md text-sm sm:text-base"
            >
              <Phone className="h-4 w-4" />
              <span>{t.common.callUsDirectly}</span>
            </button>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-800 px-6 py-3 rounded-xl font-bold hover:border-emerald-600 hover:text-emerald-800 transition-colors shadow-xs text-sm sm:text-base"
            >
              <span>{t.common.browseProducts}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {BUSINESS_CONFIG.phones.map((phone) => (
              <a
                key={phone.number}
                href={formatTelUrl(phone.number)}
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:border-emerald-500 hover:text-emerald-800 transition-colors cursor-pointer shadow-2xs"
              >
                <Phone className="h-3 w-3 text-emerald-600" />
                <span>{phone.display}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details Popup Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

