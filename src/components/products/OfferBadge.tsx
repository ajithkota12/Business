import type { Offer } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface OfferBadgeProps {
  offer?: Offer;
  offers?: Offer[];
  size?: 'sm' | 'md';
}

const colorMap: Record<Offer['badgeColor'], string> = {
  red: 'bg-rose-600 text-white',
  green: 'bg-emerald-700 text-white',
  blue: 'bg-sky-700 text-white',
  orange: 'bg-amber-600 text-white',
  purple: 'bg-purple-700 text-white',
};

export default function OfferBadge({ offer, offers, size = 'md' }: OfferBadgeProps) {
  const { language } = useLanguage();
  const allOffers = offers && offers.length > 0 ? offers : offer ? [offer] : [];
  if (allOffers.length === 0) return null;

  const colorClass = colorMap[allOffers[0].badgeColor] || 'bg-emerald-700 text-white';
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1';

  const has2 = allOffers.some((o) => o.applicableDenomination === '₹2');
  const has5 = allOffers.some((o) => o.applicableDenomination === '₹5');

  let label = '';
  if (has2 && has5) {
    label = language === 'te' ? '10 కొంటే 1 ఉచితం (₹2 & ₹5)' : 'BUY 10 + GET 1 FREE (₹2 & ₹5)';
  } else if (has5) {
    label = language === 'te' ? '10 కొంటే 1 ఉచితం (₹5)' : 'BUY 10 + GET 1 FREE (₹5)';
  } else if (has2) {
    label = language === 'te' ? '10 కొంటే 1 ఉచితం (₹2)' : 'BUY 10 + GET 1 FREE (₹2)';
  } else {
    label = language === 'te' ? '10 కొంటే 1 ఉచితం' : allOffers[0].label;
  }

  return (
    <span className={`inline-flex items-center rounded-full font-bold shadow-xs tracking-tight ${colorClass} ${sizeClass}`}>
      {label}
    </span>
  );
}

