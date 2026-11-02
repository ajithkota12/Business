import type { CategoryMeta } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface CategoryChipProps {
  category: CategoryMeta;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryChip({ category, isActive, onClick }: CategoryChipProps) {
  const { getCategoryTranslation } = useLanguage();
  const categoryInfo = getCategoryTranslation(category.id);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-150 whitespace-nowrap ${
        isActive
          ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-800'
      }`}
    >
      <span>{category.icon}</span>
      <span>{categoryInfo.label}</span>
    </button>
  );
}

