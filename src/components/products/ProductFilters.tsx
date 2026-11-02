import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import type { FilterState } from '../../types';
import CategoryChip from './CategoryChip';
import { CATEGORIES } from '../../data/products';
import type { Category } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProductFiltersProps {
  filters: FilterState;
  onSetCategory: (cat: Category) => void;
  onSetSearch: (q: string) => void;
  onToggleOffer: () => void;
  onToggleInStock: () => void;
  onSetSortBy: (s: FilterState['sortBy']) => void;
  onReset: () => void;
  resultCount: number;
}

export default function ProductFilters({
  filters,
  onSetCategory,
  onSetSearch,
  onToggleOffer,
  onToggleInStock,
  onSetSortBy,
  onReset,
  resultCount,
}: ProductFiltersProps) {
  const { t, language } = useLanguage();

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.searchQuery ||
    filters.hasOffer ||
    filters.inStockOnly ||
    filters.sortBy !== 'default';

  return (
    <div className="space-y-4">
      {/* Search + Sort Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onSetSearch(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onSetSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={language === 'te' ? 'వెతుకులాట తొలగించు' : 'Clear search'}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <ArrowUpDown className="h-4 w-4 text-slate-400 shrink-0" />
          <select
            value={filters.sortBy}
            onChange={(e) => onSetSortBy(e.target.value as FilterState['sortBy'])}
            className="flex-1 sm:flex-initial py-2.5 px-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-700"
          >
            <option value="default">{t.productsPage.sortDefault}</option>
            <option value="name">{t.productsPage.sortName}</option>
            <option value="price-asc">{t.productsPage.sortPriceAsc}</option>
            <option value="price-desc">{t.productsPage.sortPriceDesc}</option>
            <option value="rating">{language === 'te' ? 'ఉత్తమ రేటింగ్' : 'Best Rated'}</option>
          </select>
        </div>
      </div>

      {/* Category Chips with edge-to-edge scroll on mobile */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
        {CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat.id}
            category={cat}
            isActive={filters.category === cat.id}
            onClick={() => onSetCategory(cat.id)}
          />
        ))}
      </div>

      {/* Toggle Filters Row */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5">
          <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            {language === 'te' ? 'ఫిల్టర్:' : 'Filter:'}
          </span>
        </div>

        {/* Offer toggle */}
        <button
          onClick={onToggleOffer}
          className={`flex items-center gap-1.5 text-xs px-3 sm:px-3.5 py-1.5 rounded-full border font-bold transition-colors ${
            filters.hasOffer
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
          }`}
        >
          🎁 {t.common.buy10Get1Free}
        </button>

        {/* In stock toggle */}
        <button
          onClick={onToggleInStock}
          className={`flex items-center gap-1.5 text-xs px-3 sm:px-3.5 py-1.5 rounded-full border font-bold transition-colors ${
            filters.inStockOnly
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
          }`}
        >
          ✓ {t.productsPage.inStockOnly}
        </button>

        {/* Reset & Result count */}
        <div className="flex items-center gap-3 w-full sm:w-auto sm:ml-auto justify-between sm:justify-end pt-1 sm:pt-0">
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-xs text-red-600 hover:text-red-800 font-bold"
            >
              <X className="h-3.5 w-3.5" />
              {t.productsPage.clearFilters}
            </button>
          )}

          {/* Result count */}
          <p className="text-xs text-slate-500 font-medium whitespace-nowrap">
            {t.productsPage.showing} <strong>{resultCount}</strong> {resultCount === 1 ? t.productsPage.productSingular : t.productsPage.productPlural}
          </p>
        </div>
      </div>
    </div>
  );
}

