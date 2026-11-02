import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Share2, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import DenominationSelector from '../components/products/DenominationSelector';
import ProductCard from '../components/products/ProductCard';
import Badge from '../components/ui/Badge';
import { useLanguage } from '../context/LanguageContext';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { t, language, getProductTranslation, getCategoryTranslation } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-slate-800">{t.productDetail.notFoundTitle}</h2>
        <p className="text-slate-500 text-sm mt-1">{t.productDetail.notFoundDesc}</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-bold hover:bg-emerald-800 transition-colors shadow-sm"
        >
          {t.common.allProducts}
        </button>
      </div>
    );
  }

  const prodTrans = getProductTranslation(product.id);
  const categoryInfo = getCategoryTranslation(product.category);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = async () => {
    const title = language === 'te' ? prodTrans.teluguTitle : product.name;
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const ingredientsToDisplay =
    language === 'te' && prodTrans.ingredients && prodTrans.ingredients.length > 0
      ? prodTrans.ingredients
      : product.ingredients;

  const highlights = [
    t.productDetail.highlight1,
    t.productDetail.highlight2,
    t.productDetail.highlight3,
    t.productDetail.highlight4,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 flex-wrap leading-relaxed">
        <Link to="/" className="hover:text-emerald-700 transition-colors">{t.nav.home}</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-emerald-700 transition-colors">{t.nav.allProducts}</Link>
        <span>/</span>
        <Link
          to={`/products?category=${product.category}`}
          className="hover:text-emerald-700 transition-colors capitalize font-medium"
        >
          {categoryInfo.label}
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">
          {language === 'te' ? prodTrans.teluguTitle : product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        {/* Left – Realistic Product Image */}
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 aspect-square shadow-sm">
            <img
              src={product.image}
              alt={language === 'te' ? prodTrans.teluguTitle : product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80';
              }}
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span className="bg-white shadow-md px-4 py-2 rounded-full text-slate-700 font-bold text-sm">
                  {t.common.outOfStock}
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right – Product Details & Denomination Selection */}
        <div className="space-y-5 sm:space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md">
                {t.productDetail.wholesaleSheetBadge}
              </span>
              <div className="flex items-center gap-2">
                <Badge variant={product.inStock ? 'success' : 'danger'}>
                  {product.inStock ? t.common.inStock : t.common.outOfStock}
                </Badge>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label={t.productDetail.share}
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === 'te' ? prodTrans.teluguTitle : product.name}
              </h1>
              {language === 'te' ? (
                <span className="text-base sm:text-lg text-emerald-800 font-bold">
                  ({product.name})
                </span>
              ) : (
                product.teluguName && (
                  <span className="text-base sm:text-lg text-emerald-800 font-bold">
                    ({product.teluguName})
                  </span>
                )
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              {language === 'te' ? product.englishName : product.englishName}
            </p>
          </div>

          {/* Description */}
          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
            <p>{prodTrans.description || product.description}</p>
          </div>

          {/* Ingredients list if present (e.g. Mashala, Biryani Dhinsulu) */}
          {ingredientsToDisplay && ingredientsToDisplay.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                {t.productDetail.ingredientsTitle}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {ingredientsToDisplay.map((ing) => (
                  <li key={ing} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Denomination Selector & Sheet Rates */}
          <DenominationSelector product={product} />

          {/* Wholesale highlights */}
          <div className="border-t border-slate-100 pt-4 space-y-2.5">
            {highlights.map((point) => (
              <div key={point} className="flex items-start gap-2.5 text-xs text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Category Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t.productDetail.relatedTitle} ({categoryInfo.label})
            </h2>
            <Link
              to={`/products?category=${product.category}`}
              className="text-sm text-emerald-700 font-bold hover:text-emerald-900 flex items-center gap-1 self-start sm:self-auto"
            >
              {t.productDetail.viewCategory} <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

