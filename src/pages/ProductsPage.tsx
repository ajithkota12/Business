import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import SectionHeading from '../components/ui/SectionHeading';
import { useProductFilters } from '../hooks/useProductFilters';
import type { Category } from '../types';
import { Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const {
    filters,
    filteredProducts,
    setCategory,
    setSearch,
    toggleOffer,
    toggleInStock,
    setSortBy,
    resetFilters,
  } = useProductFilters();

  // Sync URL search params on mount
  useEffect(() => {
    const category = searchParams.get('category') as Category | null;
    const search = searchParams.get('search');
    if (category) setCategory(category);
    if (search) setSearch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeading
        title={t.productsPage.title}
        subtitle={t.productsPage.subtitle}
      />

      {/* Filters */}
      <div className="mb-8">
        <ProductFilters
          filters={filters}
          onSetCategory={setCategory}
          onSetSearch={setSearch}
          onToggleOffer={toggleOffer}
          onToggleInStock={toggleInStock}
          onSetSortBy={setSortBy}
          onReset={resetFilters}
          resultCount={filteredProducts.length}
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 p-8 shadow-xs">
          <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-700">{t.productsPage.noMatchTitle}</h3>
          <p className="text-slate-400 text-sm mt-1">{t.productsPage.noMatchDesc}</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-bold hover:bg-emerald-800 transition-colors shadow-sm"
          >
            {t.productsPage.resetFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

