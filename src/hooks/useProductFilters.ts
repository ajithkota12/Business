import { useState, useMemo } from 'react';
import type { FilterState, Category, Product } from '../types';
import { PRODUCTS } from '../data/products';

const defaultFilters: FilterState = {
  category: 'all',
  searchQuery: '',
  hasOffer: false,
  inStockOnly: false,
  sortBy: 'default',
  minPrice: 0,
  maxPrice: 100000,
};

export function useProductFilters() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const setCategory = (category: Category) =>
    setFilters((f) => ({ ...f, category }));

  const setSearch = (searchQuery: string) =>
    setFilters((f) => ({ ...f, searchQuery }));

  const toggleOffer = () =>
    setFilters((f) => ({ ...f, hasOffer: !f.hasOffer }));

  const toggleInStock = () =>
    setFilters((f) => ({ ...f, inStockOnly: !f.inStockOnly }));

  const setSortBy = (sortBy: FilterState['sortBy']) =>
    setFilters((f) => ({ ...f, sortBy }));

  const resetFilters = () => setFilters(defaultFilters);

  const filteredProducts: Product[] = useMemo(() => {
    let result = [...PRODUCTS];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.teluguName && p.teluguName.includes(q)) ||
          (p.englishName && p.englishName.toLowerCase().includes(q)) ||
          p.denominations.some(
            (d) =>
              d.packetValue.toLowerCase().includes(q) ||
              d.label.toLowerCase().includes(q)
          ) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (filters.hasOffer) {
      result = result.filter((p) => p.offers.length > 0);
    }

    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => {
          const minA = Math.min(...a.denominations.map((d) => d.pricePerSheet));
          const minB = Math.min(...b.denominations.map((d) => d.pricePerSheet));
          return minA - minB;
        });
        break;
      case 'price-desc':
        result.sort((a, b) => {
          const maxA = Math.max(...a.denominations.map((d) => d.pricePerSheet));
          const maxB = Math.max(...b.denominations.map((d) => d.pricePerSheet));
          return maxB - maxA;
        });
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters]);

  return {
    filters,
    filteredProducts,
    setCategory,
    setSearch,
    toggleOffer,
    toggleInStock,
    setSortBy,
    resetFilters,
  };
}
