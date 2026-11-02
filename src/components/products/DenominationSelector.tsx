import { useState } from 'react';
import { Gift, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Product } from '../../types';
import { BUSINESS_CONFIG, formatTelUrl } from '../../data/business';
import { useLanguage } from '../../context/LanguageContext';

interface DenominationSelectorProps {
  product: Product;
}

export default function DenominationSelector({ product }: DenominationSelectorProps) {
  const { t, getDenominationLabel } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = product.denominations[selectedIndex];

  // Check if current denomination qualifies for BUY 10 + GET 1 FREE
  const isOfferApplicable = selected.packetValue === '₹2' && selected.offerId === 'buy10get1';

  return (
    <div className="space-y-6">
      {/* Denomination / Packet Variety Cards */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-sm font-bold text-slate-900">
            {t.productDetail.availableVarietiesTitle}
          </label>
          <span className="text-xs text-slate-500 font-medium">
            {t.productDetail.wholesalePricingSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {product.denominations.map((denom, idx) => {
            const hasDenomOffer = denom.packetValue === '₹2' && denom.offerId === 'buy10get1';
            const isTenRupee = denom.packetValue === '₹10';
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? isTenRupee
                      ? 'border-amber-500 bg-amber-50/70 shadow-sm'
                      : 'border-emerald-600 bg-emerald-50/70 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-emerald-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {getDenominationLabel(denom.packetValue, hasDenomOffer)}
                  </p>
                  {hasDenomOffer && (
                    <span className="shrink-0 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                      {t.usp.offerTitle}
                    </span>
                  )}
                  {isTenRupee && (
                    <span className="shrink-0 bg-amber-400 text-amber-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs border border-amber-500/50 whitespace-nowrap">
                      {t.common.rateVariesBadge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xl font-extrabold ${isTenRupee ? 'text-amber-900' : 'text-emerald-800'}`}>
                    ₹{denom.pricePerSheet}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{t.common.perSheet}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Special Offer / ₹10 Price Alert Box */}
      {selected.packetValue === '₹10' ? (
        <div className="p-4 bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-yellow-500/15 border-2 border-amber-400 rounded-2xl flex items-start gap-3 text-amber-950 shadow-sm animate-in fade-in duration-200">
          <div className="h-9 w-9 rounded-xl bg-amber-400/30 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
            <AlertCircle className="h-5 w-5 text-amber-800" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black text-amber-950 uppercase tracking-wide">
              {t.common.pricesMayVary}
            </p>
            <p className="text-xs text-amber-900/90 mt-0.5 font-medium">
              {t.common.pricesMayVaryNotice}
            </p>
          </div>
        </div>
      ) : isOfferApplicable ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <Gift className="h-4 w-4 text-emerald-700 shrink-0" />
            <span>{t.common.specialOfferScheme}</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            {t.common.bonusSheetDesc}
          </p>
        </div>
      ) : (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 text-xs text-slate-600">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>
            {t.common.selectedVarietyText}{' '}
            <strong>{getDenominationLabel(selected.packetValue, false)}</strong>{' '}
            {t.common.wholesaleRate}{' '}
            <strong>₹{selected.pricePerSheet} {t.common.perSheet}</strong>
          </span>
        </div>
      )}

      {/* Direct Call to Order / Inquire */}
      <div className="space-y-3 pt-1">
        <a
          href={formatTelUrl(BUSINESS_CONFIG.phones[0].number)}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          <span>
            {selected.packetValue === '₹10'
              ? `${t.common.callForPriceConfirm} (${BUSINESS_CONFIG.phones[0].display})`
              : `${t.common.callToBook} (${BUSINESS_CONFIG.phones[0].display})`}
          </span>
        </a>

        {/* Direct Call Numbers */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-xs text-slate-500 font-semibold mb-2 text-center uppercase tracking-wider">
            {t.productDetail.callPromptBooking}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {BUSINESS_CONFIG.phones.map((phone) => (
              <a
                key={phone.number}
                href={formatTelUrl(phone.number)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-800 rounded-xl text-xs font-bold text-slate-800 transition-colors shadow-2xs cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-700" />
                <span>{phone.display}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
