import type { CategoryMeta, Offer, Product } from '../types';

// ─── Special Wholesale Offers ──────────────────────────────────────────────────
// Defined centrally and mapped to specific products and packet denominations.

export const BUY_10_GET_1_FREE_2RS: Offer = {
  id: 'buy10get1-2rs',
  label: 'BUY 10 + GET 1 FREE (₹2)',
  description: 'Buy 10 sheets of ₹2 packet variety and get 1 sheet free (Applicable to ₹2 packet variety).',
  applicableDenomination: '₹2',
  applicableProductIds: [
    'p-dhaniyalu',
    'p-ghasa-ghasalu',
    'p-dhalchina-chekka',
    'p-lavangalu',
    'p-jilakara',
  ],
  freeItemDescription: '1 extra sheet on purchase of 10 sheets',
  badgeColor: 'green',
};

export const BUY_10_GET_1_FREE_5RS: Offer = {
  id: 'buy10get1-5rs',
  label: 'BUY 10 + GET 1 FREE (₹5)',
  description: 'Buy 10 sheets of ₹5 packet variety and get 1 sheet free (Applicable to ₹5 packet variety).',
  applicableDenomination: '₹5',
  applicableProductIds: [
    'p-jeedi-pappu',
    'p-kismis',
    'p-kobbari',
    'p-sonti',
    'p-ealukalu',
    'p-dhaniyalu',
    'p-ghasa-ghasalu',
    'p-dhalchina-chekka',
    'p-lavangalu',
    'p-miriyalu',
    'p-chintapandu',
    'p-mashala',
    'p-biryani-dhinsulu',
    'p-jilakara',
  ],
  freeItemDescription: '1 extra sheet on purchase of 10 sheets',
  badgeColor: 'green',
};

export const BUY_10_GET_1_FREE: Offer = BUY_10_GET_1_FREE_2RS;

export const OFFERS: Record<string, Offer> = {
  buy10get1: BUY_10_GET_1_FREE_2RS,
  'buy10get1-2rs': BUY_10_GET_1_FREE_2RS,
  'buy10get1-5rs': BUY_10_GET_1_FREE_5RS,
};

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'all',
    label: 'All Products',
    icon: '🛒',
    description: 'Complete wholesale catalogue of spices, dry fruits & groceries',
  },
  {
    id: 'whole-spices',
    label: 'Whole Spices',
    icon: '🌿',
    description: 'Dhaniyalu, Dhalchina Chekka, Lavangalu, Miriyalu, Jilakara, Ealukalu & Sonti',
  },
  {
    id: 'dry-fruits',
    label: 'Dry Fruits',
    icon: '🥜',
    description: 'Jeedi Pappu (Cashews), Kismis (Raisins) & Baadam Pappu (Almonds)',
  },
  {
    id: 'blends-mixes',
    label: 'Masalas & Blends',
    icon: '🥘',
    description: 'Traditional Mashala & Whole Biryani Dhinsulu mixes',
  },
  {
    id: 'grocery-items',
    label: 'Grocery & Staples',
    icon: '🥥',
    description: 'Kobbari, Kobbari Podi, Chintapandu & Ghasa Ghasalu',
  },
];

// ─── Actual 16 Product Catalogue ──────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // 1. Jeedi Pappu
  {
    id: 'p-jeedi-pappu',
    name: 'Jeedi Pappu',
    teluguName: 'జీడిపప్పు',
    englishName: 'Cashew Nuts',
    brand: 'Wholesale Standard',
    category: 'dry-fruits',
    description:
      'Premium whole cashew nuts (Jeedi Pappu) carefully packed in transparent plastic sachets on display cards. Crisp, clean, and ready for retail counter sale.',
    image: '/images/products/jeedi_pappu_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['jeedi pappu', 'cashew', 'kaju', 'dry fruits', 'nuts', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.8,
    reviewCount: 38,
  },

  // 2. Kismis
  {
    id: 'p-kismis',
    name: 'Kismis',
    teluguName: 'కిస్మిస్',
    englishName: 'Raisins',
    brand: 'Wholesale Standard',
    category: 'dry-fruits',
    description:
      'Selected golden seedless raisins (Kismis) packed in transparent plastic sachets. Uniform size and natural sweetness.',
    image: '/images/products/kismis_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['kismis', 'raisins', 'kishmish', 'dry fruits', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.7,
    reviewCount: 26,
  },

  // 3. Baadam Pappu
  {
    id: 'p-baadam-pappu',
    name: 'Baadam Pappu',
    teluguName: 'బాదం పప్పు',
    englishName: 'Almonds',
    brand: 'Wholesale Standard',
    category: 'dry-fruits',
    description:
      'Whole raw almonds (Baadam Pappu) packed in transparent clear packets. High quality nuts with consistent shape and rich taste.',
    image: '/images/products/baadam_packet.jpg',
    sheetPrice: 90,
    denominations: [
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['baadam pappu', 'almonds', 'badam', 'dry fruits', 'nuts'],
    inStock: true,
    offers: [],
    featured: true,
    rating: 4.9,
    reviewCount: 42,
  },

  // 4. Kobbari
  {
    id: 'p-kobbari',
    name: 'Kobbari',
    teluguName: 'కొబ్బరి',
    englishName: 'Dry Coconut Pieces',
    brand: 'Wholesale Standard',
    category: 'grocery-items',
    description:
      'Clean dry coconut copra pieces (Kobbari) packed in transparent sachets. Ideal for daily culinary and puja requirements.',
    image: '/images/products/kobbari_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
    ],
    tags: ['kobbari', 'dry coconut', 'copra', 'groceries', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: false,
    rating: 4.6,
    reviewCount: 29,
  },

  // 5. Sonti
  {
    id: 'p-sonti',
    name: 'Sonti',
    teluguName: 'శొంఠి',
    englishName: 'Dry Ginger',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Whole dried ginger pieces (Sonti / Sukku) packed in clear transparent plastic sachets. Natural pungent aroma and medicinal spice value.',
    image: '/images/products/sonti_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['sonti', 'dry ginger', 'sonth', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: false,
    rating: 4.5,
    reviewCount: 18,
  },

  // 6. Ealukalu
  {
    id: 'p-ealukalu',
    name: 'Ealukalu',
    teluguName: 'ఏలకులు',
    englishName: 'Green Cardamom',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Fragrant whole green cardamom pods (Ealukalu / Elaichi) packed in clear transparent sachets. Intense natural aroma and fresh pods.',
    image: '/images/products/ealukalu_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['ealukalu', 'cardamom', 'elaichi', 'whole spices', 'aromatic', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.8,
    reviewCount: 35,
  },

  // 7. Dhaniyalu (HAS OFFERS ON ₹2 & ₹5 VARIETIES)
  {
    id: 'p-dhaniyalu',
    name: 'Dhaniyalu',
    teluguName: 'ధనియాలు',
    englishName: 'Coriander Seeds',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Clean whole coriander seeds (Dhaniyalu / Sabut Dhania) in transparent sachets. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
    image: '/images/products/dhaniyalu_packet.jpg',
    sheetPrice: 30,
    denominations: [
      {
        label: '₹2 Packet Variety (Special Offer)',
        packetValue: '₹2',
        pricePerSheet: 30,
        pricePerPacket: 30,
        minOrder: 1,
        offerId: 'buy10get1-2rs',
      },
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['dhaniyalu', 'coriander seeds', 'dhania', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_2RS, BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.7,
    reviewCount: 48,
  },

  // 8. Ghasa Ghasalu (HAS OFFERS ON ₹2 & ₹5 VARIETIES, ₹5 is ₹45)
  {
    id: 'p-ghasa-ghasalu',
    name: 'Ghasa Ghasalu',
    teluguName: 'గసగసాలు',
    englishName: 'Poppy Seeds',
    brand: 'Wholesale Standard',
    category: 'grocery-items',
    description:
      'Fine white poppy seeds (Ghasa Ghasalu / Khus Khus) packed in clear transparent plastic sachets. Note ₹5 variety is ₹45 per sheet. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
    image: '/images/products/ghasa_ghasalu_packet.jpg',
    sheetPrice: 30,
    denominations: [
      {
        label: '₹2 Packet Variety (Special Offer)',
        packetValue: '₹2',
        pricePerSheet: 30,
        pricePerPacket: 30,
        minOrder: 1,
        offerId: 'buy10get1-2rs',
      },
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 45,
        pricePerPacket: 45,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['ghasa ghasalu', 'poppy seeds', 'khus khus', 'spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_2RS, BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.8,
    reviewCount: 31,
  },

  // 9. Dhalchina Chekka (HAS OFFERS ON ₹2 & ₹5 VARIETIES)
  {
    id: 'p-dhalchina-chekka',
    name: 'Dhalchina Chekka',
    teluguName: 'దాల్చిన చెక్క',
    englishName: 'Cinnamon Bark',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Aromatic cinnamon bark pieces (Dhalchina Chekka / Dalchini) in clear transparent plastic packets. BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
    image: '/images/products/dhalchina_chekka_packet.jpg',
    sheetPrice: 30,
    denominations: [
      {
        label: '₹2 Packet Variety (Special Offer)',
        packetValue: '₹2',
        pricePerSheet: 30,
        pricePerPacket: 30,
        minOrder: 1,
        offerId: 'buy10get1-2rs',
      },
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['dhalchina chekka', 'cinnamon', 'dalchini', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_2RS, BUY_10_GET_1_FREE_5RS],
    featured: false,
    rating: 4.6,
    reviewCount: 27,
  },

  // 10. Lavangalu (HAS OFFERS ON ₹2 & ₹5 VARIETIES)
  {
    id: 'p-lavangalu',
    name: 'Lavangalu',
    teluguName: 'లవంగాలు',
    englishName: 'Cloves',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Whole aromatic cloves (Lavangalu / Laung) with intact round heads packed in transparent sachets. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
    image: '/images/products/lavangalu_packet.jpg',
    sheetPrice: 30,
    denominations: [
      {
        label: '₹2 Packet Variety (Special Offer)',
        packetValue: '₹2',
        pricePerSheet: 30,
        pricePerPacket: 30,
        minOrder: 1,
        offerId: 'buy10get1-2rs',
      },
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['lavangalu', 'cloves', 'laung', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_2RS, BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.8,
    reviewCount: 39,
  },

  // 11. Miriyalu
  {
    id: 'p-miriyalu',
    name: 'Miriyalu',
    teluguName: 'మిరియాలు',
    englishName: 'Black Pepper',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Whole pungent black peppercorns (Miriyalu / Kali Mirch) packed in transparent clear plastic sachets. Uniform bold grade peppercorns.',
    image: '/images/products/miriyalu_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['miriyalu', 'black pepper', 'kali mirch', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: false,
    rating: 4.7,
    reviewCount: 22,
  },

  // 12. Chintapandu
  {
    id: 'p-chintapandu',
    name: 'Chintapandu',
    teluguName: 'చింతపండు',
    englishName: 'Tamarind',
    brand: 'Wholesale Standard',
    category: 'grocery-items',
    description:
      'Clean seedless cooking tamarind pulp blocks (Chintapandu / Imli) packed in transparent plastic sachets. Rich sour taste for culinary preparation.',
    image: '/images/products/chintapandu_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
    ],
    tags: ['chintapandu', 'tamarind', 'imli', 'groceries', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: false,
    rating: 4.5,
    reviewCount: 19,
  },

  // 13. Mashala (with specific ingredients)
  {
    id: 'p-mashala',
    name: 'Mashala',
    teluguName: 'మసాలా',
    englishName: 'Garam Masala Blend',
    brand: 'Wholesale Standard',
    category: 'blends-mixes',
    description:
      'Traditional cooking masala mix packed in transparent clear plastic sachets. Contains a balanced blend of Dhaniyalu, Yelli Payalu, Kobbari and Dhalchina Chekka.',
    ingredients: [
      'Dhaniyalu (Coriander Seeds)',
      'Yelli Payalu (Garlic)',
      'Kobbari (Dry Coconut)',
      'Dhalchina Chekka (Cinnamon Bark)',
    ],
    image: '/images/products/mashala_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
    ],
    tags: ['mashala', 'masala', 'garam masala', 'spices', 'blend', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.9,
    reviewCount: 44,
  },

  // 14. Biryani Dhinsulu
  {
    id: 'p-biryani-dhinsulu',
    name: 'Biryani Dhinsulu',
    teluguName: 'బిర్యానీ దినుసులు',
    englishName: 'Whole Biryani Spices Mix',
    brand: 'Wholesale Standard',
    category: 'blends-mixes',
    description:
      'Whole aromatic spices mix for authentic biryani and pulao preparations (Biryani Dhinsulu). Packed in transparent plastic sachets with whole spices.',
    ingredients: [
      'Star Anise (Biryani Puvvu)',
      'Bay Leaf (Biryani Aaku)',
      'Cloves (Lavangalu)',
      'Cardamom (Ealukalu)',
      'Cinnamon (Dhalchina Chekka)',
      'Mace / Shahi Jeera',
    ],
    image: '/images/products/biryani_dhinsulu_packet.jpg',
    sheetPrice: 40,
    denominations: [
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
    ],
    tags: ['biryani dhinsulu', 'biryani spices', 'whole spices', 'khada masala', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.8,
    reviewCount: 36,
  },

  // 15. Jilakara (HAS OFFERS ON ₹2 & ₹5 VARIETIES)
  {
    id: 'p-jilakara',
    name: 'Jilakara',
    teluguName: 'జీలకర్ర',
    englishName: 'Cumin Seeds',
    brand: 'Wholesale Standard',
    category: 'whole-spices',
    description:
      'Whole clean cumin seeds (Jilakara / Jeera) packed in clear transparent plastic sachets. Natural earthy fragrance. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
    image: '/images/products/jilakara_packet.jpg',
    sheetPrice: 30,
    denominations: [
      {
        label: '₹2 Packet Variety (Special Offer)',
        packetValue: '₹2',
        pricePerSheet: 30,
        pricePerPacket: 30,
        minOrder: 1,
        offerId: 'buy10get1-2rs',
      },
      {
        label: '₹5 Packet Variety (Special Offer)',
        packetValue: '₹5',
        pricePerSheet: 40,
        pricePerPacket: 40,
        minOrder: 1,
        offerId: 'buy10get1-5rs',
      },
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['jilakara', 'cumin seeds', 'jeera', 'whole spices', 'offer'],
    inStock: true,
    offers: [BUY_10_GET_1_FREE_2RS, BUY_10_GET_1_FREE_5RS],
    featured: true,
    rating: 4.7,
    reviewCount: 41,
  },

  // 16. Kobbari Podi
  {
    id: 'p-kobbari-podi',
    name: 'Kobbari Podi',
    teluguName: 'కొబ్బరి పొడి',
    englishName: 'Dry Coconut Powder',
    brand: 'Wholesale Standard',
    category: 'grocery-items',
    description:
      'Finely grated dry coconut powder (Kobbari Podi / Desiccated Coconut) packed in clear transparent plastic sachets. Ideal for curries, sweets, and savouries.',
    image: '/images/products/kobbari_podi_packet.jpg',
    sheetPrice: 90,
    denominations: [
      {
        label: '₹10 Packet Variety',
        packetValue: '₹10',
        pricePerSheet: 90,
        pricePerPacket: 90,
        minOrder: 1,
      },
    ],
    tags: ['kobbari podi', 'coconut powder', 'desiccated coconut', 'groceries'],
    inStock: true,
    offers: [],
    featured: false,
    rating: 4.6,
    reviewCount: 24,
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
export const IN_STOCK_PRODUCTS = PRODUCTS.filter((p) => p.inStock);
