import type { Offer } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface OfferBadgeProps {
  offer: Offer;
  size?: 'sm' | 'md';
}

const colorMap: Record<Offer['badgeColor'], string> = {
  red: 'bg-rose-600 text-white',
  green: 'bg-emerald-700 text-white',
  blue: 'bg-sky-700 text-white',
  orange: 'bg-amber-600 text-white',
  purple: 'bg-purple-700 text-white',
};

export default function OfferBadge({ offer, size = 'md' }: OfferBadgeProps) {
  const { t, language } = useLanguage();
  const colorClass = colorMap[offer.badgeColor] || 'bg-emerald-700 text-white';
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1';

  const label = language === 'te' ? t.common.buy10Get1Free : offer.label;

  return (
    <span className={`inline-flex items-center rounded-full font-bold shadow-xs tracking-tight ${colorClass} ${sizeClass}`}>
      {label}
    </span>
  );
}

