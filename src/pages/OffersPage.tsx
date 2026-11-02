import { Link } from 'react-router-dom';
import { ArrowRight, Gift, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export default function OffersPage() {
  const { t } = useLanguage();
  const productsWithOffers = PRODUCTS.filter((p) => p.offers.length > 0 && p.inStock);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeading
        title={t.offersPage.title}
        subtitle={t.offersPage.subtitle}
      />

      {/* Main Offer Highlight Card */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-md mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full">
              <Gift className="h-3.5 w-3.5" /> {t.offersPage.activePromoBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              {t.homeOfferBanner.promoTitle}
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              {t.offersPage.offerDetailsDesc}
            </p>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{t.offersPage.check1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-300">
                <AlertCircle className="h-4 w-4 text-amber-300 shrink-0" />
                <span>{t.offersPage.note}</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl shrink-0 text-center w-full md:w-auto min-w-[200px]">
            <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">{t.offersPage.qualifyingVariety}</p>
            <p className="text-xl sm:text-2xl font-black text-amber-300 my-1">{t.offersPage.twoRupeePackets}</p>
            <p className="text-xs text-slate-300">{t.offersPage.sheetDisplayCards}</p>
          </div>
        </div>
      </div>

      {/* Qualifying Products Grid */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t.offersPage.qualifyingProductsTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.offersPage.qualifyingProductsDesc}
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm text-emerald-700 font-semibold hover:text-emerald-900 flex items-center gap-1 self-start sm:self-auto shrink-0"
          >
            {t.common.allProducts} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productsWithOffers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

