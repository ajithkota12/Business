import { Link } from 'react-router-dom';
import { ArrowRight, PackageX, Gift } from 'lucide-react';
import type { Product } from '../../types';
import OfferBadge from './OfferBadge';
import { useLanguage } from '../../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t, getProductTranslation } = useLanguage();
  const lowestPrice = Math.min(...product.denominations.map((d) => d.pricePerSheet));
  const highestPrice = Math.max(...product.denominations.map((d) => d.pricePerSheet));
  const packetVarieties = product.denominations.map((d) => d.packetValue).join(', ');
  const translation = getProductTranslation(product.id);

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-200 group flex flex-col">
      {/* Image Container */}
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={language === 'te' ? translation.teluguTitle : product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80';
          }}
        />
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-1">
            <PackageX className="h-8 w-8 text-slate-400" />
            <span className="text-xs font-semibold text-slate-600">{t.common.outOfStock}</span>
          </div>
        )}

        {/* Offer badge */}
        {product.offers.length > 0 && product.inStock && (
          <div className="absolute top-2.5 right-2.5 shadow-sm">
            <OfferBadge offers={product.offers} size="sm" />
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 gap-2 sm:gap-2.5">
        {/* Title and Telugu / English Subtitle */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
            <Link to={`/products/${product.id}`}>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {language === 'te' ? translation.teluguTitle : product.name}
              </h3>
            </Link>
            {language === 'te' ? (
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {product.englishName || product.name}
              </span>
            ) : (
              product.teluguName && (
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {product.teluguName}
                </span>
              )
            )}
          </div>
          {language === 'en' && product.englishName && (
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{product.englishName}</p>
          )}
        </div>

        {/* Varieties chip */}
        <div className="flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 rounded-lg px-2.5 py-1 border border-slate-100">
          <span className="text-slate-400 font-normal">{t.common.packets}:</span>
          <span className="font-semibold text-slate-800">{packetVarieties}</span>
        </div>

        {/* Price display */}
        <div className="mt-auto pt-2 border-t border-slate-50">
          <p className="text-[11px] text-slate-400 font-medium">{t.common.wholesaleRate}</p>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-base sm:text-lg font-extrabold text-slate-900">
              ₹{lowestPrice}
              {lowestPrice !== highestPrice && (
                <span className="text-xs sm:text-sm font-semibold text-slate-500"> – ₹{highestPrice}</span>
              )}
            </span>
            <span className="text-xs text-slate-500 font-medium">{t.common.perSheet}</span>
          </div>
        </div>

        {/* If product has special offer */}
        {product.offers.length > 0 && (
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 rounded-lg p-1.5 font-medium border border-emerald-100">
            <Gift className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">
              {(() => {
                const has2 = product.offers.some((o) => o.applicableDenomination === '₹2');
                const has5 = product.offers.some((o) => o.applicableDenomination === '₹5');
                if (has2 && has5) {
                  return language === 'te'
                    ? '10 షీట్లు కొంటే 1 ఉచితం (₹2 & ₹5 రకాలు)'
                    : 'Buy 10 Sheets + Get 1 Free (₹2 & ₹5 varieties)';
                }
                if (has5) {
                  return language === 'te'
                    ? '10 షీట్లు కొంటే 1 ఉచితం (₹5 రకం)'
                    : 'Buy 10 Sheets + Get 1 Free (₹5 variety)';
                }
                return language === 'te'
                  ? '10 షీట్లు కొంటే 1 ఉచితం (₹2 రకం)'
                  : 'Buy 10 Sheets + Get 1 Free (₹2 variety)';
              })()}
            </span>
          </div>
        )}

        {/* CTA: View Details & Sheet Rates */}
        <Link
          to={`/products/${product.id}`}
          className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[42px] rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-xs ${
            product.inStock
              ? 'bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.99]'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
          }`}
        >
          <span>{product.inStock ? t.common.viewSheetRates : t.common.outOfStock}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
