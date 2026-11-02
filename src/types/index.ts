// ─── Core Domain Types for Grocery & Spices Wholesale ─────────────────────────

export type Category =
  | 'all'
  | 'whole-spices'
  | 'dry-fruits'
  | 'blends-mixes'
  | 'grocery-items';

export interface Denomination {
  /** Packet variety description, e.g. "₹2 Packet", "₹5 Packet", "₹10 Packet" */
  label: string;
  /** Packet denomination value, e.g. "₹2", "₹5", "₹10" */
  packetValue: '₹2' | '₹5' | '₹10' | string;
  /** Price in ₹ per display sheet */
  pricePerSheet: number;
  /** Numerical price per sheet for calculation compatibility */
  pricePerPacket: number;
  /** Approximate sachets/packets per sheet if relevant */
  quantity?: number;
  /** Optional minimum order quantity in sheets */
  minOrder?: number;
  /** Optional ID of special offer applicable to this denomination */
  offerId?: string;
}

export interface Offer {
  id: string;
  label: string;
  description: string;
  applicableDenomination?: string;
  applicableProductIds: string[];
  discountPercent?: number;
  freeItemDescription?: string;
  expiresAt?: string;
  badgeColor: 'red' | 'green' | 'blue' | 'orange' | 'purple';
}

export interface Product {
  id: string;
  name: string;
  teluguName?: string;
  englishName?: string;
  brand: string;
  category: Exclude<Category, 'all'>;
  description: string;
  ingredients?: string[];
  image: string;
  /** Starting sheet price */
  sheetPrice: number;
  denominations: Denomination[];
  tags: string[];
  inStock: boolean;
  offers: Offer[];
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  hasOffer: boolean;
  inStockOnly: boolean;
  sortBy: 'default' | 'price-asc' | 'price-desc' | 'name' | 'rating';
  minPrice: number;
  maxPrice: number;
}

export interface CategoryMeta {
  id: Category;
  label: string;
  icon: string;
  description: string;
}
