export type Language = 'en' | 'te';

export interface Translations {
  common: {
    callUs: string;
    callUsDirectly: string;
    browseProducts: string;
    allProducts: string;
    viewAll: string;
    inStock: string;
    outOfStock: string;
    perSheet: string;
    packets: string;
    wholesaleRate: string;
    viewSheetRates: string;
    buy10Get1Free: string;
    pricesMayVary: string;
    pricesMayVaryNotice: string;
    rateVariesBadge: string;
    openInGoogleMaps: string;
    businessLocation: string;
    directContactNumbers: string;
    businessHours: string;
    workingDays: string;
    closedDay: string;
    addressDisplay: string;
    searchPlaceholder: string;
    search: string;
    callToBook: string;
    callForPriceConfirm: string;
    specialOfferScheme: string;
    bonusSheetDesc: string;
    selectedVarietyText: string;
  };
  nav: {
    home: string;
    allProducts: string;
    specialOffers: string;
    specialOffersFull: string;
    about: string;
    brandName: string;
    brandTagline: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
  };
  usp: {
    rangeTitle: string;
    rangeDesc: string;
    ratesTitle: string;
    ratesDesc: string;
    offerTitle: string;
    offerDesc: string;
  };
  categoriesSection: {
    title: string;
    subtitle: string;
    all: string;
    allDesc: string;
    wholeSpices: string;
    wholeSpicesDesc: string;
    dryFruits: string;
    dryFruitsDesc: string;
    blends: string;
    blendsDesc: string;
    groceries: string;
    groceriesDesc: string;
  };
  featuredSection: {
    title: string;
    subtitle: string;
  };
  homeOfferBanner: {
    promoTag: string;
    promoTitle: string;
    promoDesc: string;
    applicableVarieties: string;
    viewOfferDetails: string;
  };
  statsSection: {
    sheetsVal: string;
    sheetsLabel: string;
    catVal: string;
    catLabel: string;
    varietiesVal: string;
    varietiesLabel: string;
    offerVal: string;
    offerLabel: string;
  };
  ctaSection: {
    title: string;
    desc: string;
  };
  productsPage: {
    title: string;
    subtitle: string;
    showing: string;
    productSingular: string;
    productPlural: string;
    noMatchTitle: string;
    noMatchDesc: string;
    resetFilters: string;
    allCategories: string;
    offersOnly: string;
    inStockOnly: string;
    sortDefault: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    sortName: string;
    clearFilters: string;
  };
  productDetail: {
    wholesaleSheetBadge: string;
    share: string;
    ingredientsTitle: string;
    availableVarietiesTitle: string;
    wholesalePricingSubtitle: string;
    selectedVarietyText: string;
    callPromptBooking: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    highlight4: string;
    relatedTitle: string;
    viewCategory: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  offersPage: {
    title: string;
    subtitle: string;
    activePromoBadge: string;
    offerDetailsDesc: string;
    check1: string;
    note: string;
    qualifyingVariety: string;
    twoRupeePackets: string;
    sheetDisplayCards: string;
    qualifyingProductsTitle: string;
    qualifyingProductsDesc: string;
    filterAll: string;
    filterTwoRupee: string;
    filterFiveRupee: string;
  };
  aboutPage: {
    pageTitle: string;
    pageSubtitle: string;
    overviewHeading: string;
    overviewP1: string;
    overviewP2: string;
    exploreLink: string;
    featureRangeTitle: string;
    featureRangeDesc: string;
    featureSheetsTitle: string;
    featureSheetsDesc: string;
    featureRetailTitle: string;
    featureRetailDesc: string;
    featureSupplyTitle: string;
    featureSupplyDesc: string;
    specsTitle: string;
    denom2Title: string;
    denom2Price: string;
    denom2Desc: string;
    denom5Title: string;
    denom5Price: string;
    denom5Desc: string;
    denom10Title: string;
    denom10Price: string;
    denom10Desc: string;
    contactCardTitle: string;
    viewOnGoogleMaps: string;
    mapHeading: string;
    wholesaleCtaTitle: string;
    wholesaleCtaDesc: string;
  };
  contactModal: {
    title: string;
    desc: string;
    availableNumbers: string;
    tapToCall: string;
    callNow: string;
    close: string;
  };
  footer: {
    navigationTitle: string;
    homePage: string;
    allProducts: string;
    specialOffers: string;
    aboutCatalogue: string;
    contactTitle: string;
    copyrightNotice: string;
  };
  notFound: {
    title: string;
    desc: string;
    backHome: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    common: {
      callUs: 'Call Us',
      callUsDirectly: 'Call Us Directly',
      browseProducts: 'Browse Products',
      allProducts: 'All Products',
      viewAll: 'View All',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      perSheet: '/ sheet',
      packets: 'Packets',
      wholesaleRate: 'Wholesale Rate',
      viewSheetRates: 'View Sheet Rates',
      buy10Get1Free: 'BUY 10 + GET 1 FREE',
      pricesMayVary: 'Prices may vary, contact for more details',
      pricesMayVaryNotice:
        'Wholesale sheet rates for the ₹10 packet variety are subject to daily market rates. Call our direct numbers for confirmed sheet pricing.',
      rateVariesBadge: 'Prices May Vary',
      openInGoogleMaps: 'Open in Google Maps',
      businessLocation: 'Business Location',
      directContactNumbers: 'Direct Contact Numbers:',
      businessHours: 'Business Hours',
      workingDays: 'Monday – Saturday: 9:00 AM – 7:30 PM',
      closedDay: 'Sunday: Closed',
      addressDisplay: 'Anigandlapadu, Penuganchiprolu Mandal, NTR District, Andhra Pradesh - 521190',
      searchPlaceholder: 'Search Jeedi Pappu, Dhaniyalu, Jilakara, Lavangalu...',
      search: 'Search',
      callToBook: 'Call to Book Sheets',
      callForPriceConfirm: 'Call for ₹10 Sheet Rate Confirmation',
      specialOfferScheme: 'Special Promotional Scheme: BUY 10 + GET 1 FREE',
      bonusSheetDesc: 'Order 10 sheets of this ₹2 packet variety and receive 1 extra sheet free.',
      selectedVarietyText: 'Selected variety:',
    },
    nav: {
      home: 'Home',
      allProducts: 'All Products',
      specialOffers: 'Special Offers',
      specialOffersFull: 'Special Offers (Buy 10 + Get 1)',
      about: 'About',
      brandName: 'Grocery & Spices Wholesale',
      brandTagline: 'Wholesale Packet & Sheet Supply',
    },
    hero: {
      badge: '🏷️ Wholesale Sheet & Packet Catalogue',
      title1: 'Spices, Dry Fruits &',
      title2: 'Grocery Sachets',
      desc: 'Wholesale display sheets of ₹2, ₹5 and ₹10 packets for retail stores. Transparent pricing per sheet on everyday spices and groceries.',
    },
    usp: {
      rangeTitle: 'Wholesale Range',
      rangeDesc: 'Whole spices, dry fruits, masalas & groceries',
      ratesTitle: 'Wholesale Sheet Rates',
      ratesDesc: 'Transparent ₹30, ₹40, ₹45, ₹50 & ₹90 sheet rates',
      offerTitle: 'Buy 10 + Get 1 Free',
      offerDesc: 'Special offer on ₹2 & ₹5 packet varieties',
    },
    categoriesSection: {
      title: 'Browse by Category',
      subtitle: 'Explore our wholesale grocery & spices products organized by category',
      all: 'All Products',
      allDesc: 'Complete wholesale catalogue of spices, dry fruits & groceries',
      wholeSpices: 'Whole Spices',
      wholeSpicesDesc: 'Dhaniyalu, Dhalchina Chekka, Lavangalu, Miriyalu, Jilakara, Ealukalu & Sonti',
      dryFruits: 'Dry Fruits',
      dryFruitsDesc: 'Jeedi Pappu (Cashews), Kismis (Raisins) & Baadam Pappu (Almonds)',
      blends: 'Masalas & Blends',
      blendsDesc: 'Traditional Mashala & Whole Biryani Dhinsulu mixes',
      groceries: 'Grocery & Staples',
      groceriesDesc: 'Kobbari, Kobbari Podi, Chintapandu & Ghasa Ghasalu',
    },
    featuredSection: {
      title: 'Featured Products',
      subtitle: 'Popular everyday wholesale spices and dry fruits',
    },
    homeOfferBanner: {
      promoTag: 'Special Wholesale Promotion',
      promoTitle: 'BUY 10 + GET 1 FREE',
      promoDesc:
        'Buy 10 sheets of ₹2 or ₹5 packet varieties and get 1 extra sheet free! Designed for retail kirana stores and bulk stockists.',
      applicableVarieties: 'Applicable Varieties: ₹2 & ₹5 Packets',
      viewOfferDetails: 'View Offer Details',
    },
    statsSection: {
      sheetsVal: 'Ready Stock',
      sheetsLabel: 'Wholesale Sheets',
      catVal: 'Catalogue',
      catLabel: 'Spices & Groceries',
      varietiesVal: '₹2, ₹5, ₹10',
      varietiesLabel: 'Packet Varieties',
      offerVal: '10 + 1 Free',
      offerLabel: 'Offer on ₹2 & ₹5 Varieties',
    },
    ctaSection: {
      title: 'Have a Wholesale Requirement?',
      desc: 'Call any of our direct contact lines for prompt stock availability, wholesale sheet rates, and booking.',
    },
    productsPage: {
      title: 'Complete Product Catalogue',
      subtitle:
        'Grocery and whole spices varieties available in ₹2, ₹5 and ₹10 packet display sheets',
      showing: 'Showing',
      productSingular: 'product',
      productPlural: 'products',
      noMatchTitle: 'No products match your filters',
      noMatchDesc: 'Try adjusting your search terms or clearing the active filters',
      resetFilters: 'Reset All Filters',
      allCategories: 'All Categories',
      offersOnly: 'Buy 10 + 1 Free Only',
      inStockOnly: 'In Stock Only',
      sortDefault: 'Default Order',
      sortPriceAsc: 'Price: Low to High',
      sortPriceDesc: 'Price: High to Low',
      sortName: 'Name (A-Z)',
      clearFilters: 'Clear Filters',
    },
    productDetail: {
      wholesaleSheetBadge: 'Wholesale Hanging Sheet',
      share: 'Share',
      ingredientsTitle: 'Ingredients:',
      availableVarietiesTitle: 'Available Packet Varieties & Sheet Rates',
      wholesalePricingSubtitle: 'Wholesale Pricing',
      selectedVarietyText: 'Selected variety:',
      callPromptBooking: 'Call Directly for Instant Sheet Availability & Booking:',
      highlight1: 'Transparent plastic packets for clear product visibility',
      highlight2: 'Ready-to-hang card sheets suited for kirana and general store counters',
      highlight3: 'Transparent sheet pricing with special BUY 10 + GET 1 FREE on ₹2 & ₹5 varieties',
      highlight4: 'Wholesale supply with prompt order turnaround',
      relatedTitle: 'Other Products in Category',
      viewCategory: 'View Category',
      notFoundTitle: 'Product not found in catalogue',
      notFoundDesc: 'Please select from our catalogue products.',
    },
    offersPage: {
      title: 'Special Wholesale Offers',
      subtitle: 'Current promotional schemes for retail store orders',
      activePromoBadge: 'ACTIVE WHOLESALE PROMOTION',
      offerDetailsDesc:
        'Buy 10 sheets of any qualifying ₹2 or ₹5 packet variety and get 1 extra sheet completely free. This promotion is designed for retail kirana stores and bulk stockists.',
      check1: 'Applicable to both ₹2 and ₹5 packet varieties of the qualifying products below.',
      note: 'Note: This offer applies to ₹2 and ₹5 packet varieties; does not apply to ₹10 variety.',
      qualifyingVariety: 'Qualifying Varieties',
      twoRupeePackets: '₹2 & ₹5 Packets',
      sheetDisplayCards: 'Sheet Display Cards',
      qualifyingProductsTitle: 'Products Qualifying for BUY 10 + GET 1 FREE',
      qualifyingProductsDesc:
        'Select ₹2 or ₹5 packet varieties on qualifying products to receive the bonus sheet.',
      filterAll: 'All Offers (₹2 & ₹5)',
      filterTwoRupee: '₹2 Variety Offers',
      filterFiveRupee: '₹5 Variety Offers',
    },
    aboutPage: {
      pageTitle: 'About Wholesale Packet & Sheet Supply',
      pageSubtitle:
        'Wholesale supplier of transparent grocery sachets and hanging display card sheets for kirana merchants, grocery stores, and retail stockists.',
      overviewHeading: 'Wholesale Grocery & Spices Sachet Sheets',
      overviewP1:
        'We supply ready-to-hang card sheets of essential spices, dry fruits, and daily cooking ingredients. Each sheet holds convenient retail-denominated sachets (₹2, ₹5, and ₹10 varieties) ready for point-of-sale display in kirana and general stores.',
      overviewP2:
        'All products are packed in transparent, clean plastic packets to provide full visibility of the raw spices and ingredients. Retailers purchase by the sheet at competitive wholesale rates.',
      exploreLink: 'Explore our complete product catalogue',
      featureRangeTitle: 'Wholesale Range',
      featureRangeDesc: 'Essential spices, dry fruits & groceries',
      featureSheetsTitle: 'Sheet Formats',
      featureSheetsDesc: 'Hanging display cards with sachets',
      featureRetailTitle: 'Ready for Retail',
      featureRetailDesc: 'Hanging card sheets for store counters',
      featureSupplyTitle: 'Prompt Supply',
      featureSupplyDesc: 'Regular replenishment for retail stock',
      specsTitle: 'Catalogue Specifications & Pricing Structure',
      denom2Title: '₹2 Packet Variety',
      denom2Price: '₹30 / sheet',
      denom2Desc:
        'Available on Dhaniyalu, Ghasa Ghasalu, Dhalchina Chekka, Lavangalu, and Jilakara. Qualifies for BUY 10 + GET 1 FREE offer!',
      denom5Title: '₹5 Packet Variety',
      denom5Price: '₹40 – ₹50 / sheet',
      denom5Desc:
        'Standard rate is ₹40 per sheet across spices and dry fruits. Ghasa Ghasalu is ₹45, and Kobbari, Sonti & Mashala are ₹50 per sheet.',
      denom10Title: '₹10 Packet Variety',
      denom10Price: '₹90 / sheet',
      denom10Desc:
        'Sheet rate of ₹90 per sheet for ₹10 sachet varieties including dry fruits, whole spices, and coconut powder.',
      contactCardTitle: 'Contact Details',
      viewOnGoogleMaps: 'View on Google Maps',
      mapHeading: 'Business Location',
      wholesaleCtaTitle: 'Have a Wholesale Requirement?',
      wholesaleCtaDesc:
        'Call any of our direct phone numbers for prompt stock availability, sheet rates, and booking.',
    },
    contactModal: {
      title: 'Call Us Directly',
      desc: 'Choose any of our 3 direct wholesale lines for instant stock availability, sheet rates, and booking.',
      availableNumbers: 'Available Contact Numbers:',
      tapToCall: 'Tap to call directly',
      callNow: 'Call Now',
      close: 'Close Window',
    },
    footer: {
      navigationTitle: 'Catalogue Navigation',
      homePage: 'Home Page',
      allProducts: 'All Products',
      specialOffers: 'Special Offers (Buy 10 + Get 1)',
      aboutCatalogue: 'About Catalogue',
      contactTitle: 'Direct Contact Numbers',
      copyrightNotice: 'Wholesale prices are per display card sheet.',
    },
    notFound: {
      title: 'Page Not Found',
      desc: 'The page you are looking for does not exist.',
      backHome: 'Back to Home',
    },
  },
  te: {
    common: {
      callUs: 'మాకు కాల్ చేయండి',
      callUsDirectly: 'నేరుగా కాల్ చేయండి',
      browseProducts: 'వస్తువుల జాబితా',
      allProducts: 'అన్ని వస్తువులు',
      viewAll: 'అన్నీ చూడండి',
      inStock: 'స్టాక్ ఉంది',
      outOfStock: 'స్టాక్ లేదు',
      perSheet: '/ షీట్',
      packets: 'ప్యాకెట్లు',
      wholesaleRate: 'హోల్‌సేల్ ధర',
      viewSheetRates: 'షీట్ ధరలు చూడండి',
      buy10Get1Free: '10 కొనండి + 1 ఉచితం',
      pricesMayVary: 'ధరలు మారవచ్చు, మరిన్ని వివరాలకు సంప్రదించండి',
      pricesMayVaryNotice:
        '₹10 ప్యాకెట్ షీట్ ధరలు రోజువారీ మార్కెట్ రేట్ల ప్రకారం మారవచ్చు. ఖచ్చితమైన రేటు కోసం మా నంబర్లకు నేరుగా కాల్ చేయండి.',
      rateVariesBadge: 'ధరలు మారవచ్చు',
      openInGoogleMaps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
      businessLocation: 'వ్యాపార చిరునామా',
      directContactNumbers: 'సంప్రదించవలసిన ఫోన్ నంబర్లు:',
      businessHours: 'వ్యాపార వేళలు',
      workingDays: 'సోమవారం – శనివారం: ఉదయం 9:00 – సాయంత్రం 7:30',
      closedDay: 'ఆదివారం: సెలవు',
      addressDisplay: 'అనిగండ్లపాడు, పెనుగంచిప్రోలు మండలం, ఎన్టీఆర్ జిల్లా, ఆంధ్రప్రదేశ్ - 521190',
      searchPlaceholder: 'జీడిపప్పు, ధనియాలు, జీలకర్ర, లవంగాలు వెతకండి...',
      search: 'వెతకండి',
      callToBook: 'షీట్లు బుక్ చేయడానికి కాల్ చేయండి',
      callForPriceConfirm: '₹10 షీట్ రేటు నిర్ధారణ కోసం కాల్ చేయండి',
      specialOfferScheme: 'ప్రత్యేక ఆఫర్ పథకం: 10 కొనండి + 1 షీట్ ఉచితం',
      bonusSheetDesc: 'ఈ ₹2 ప్యాకెట్ రకం 10 షీట్లు ఆర్డర్ చేయండి, 1 అదనపు షీట్ ఉచితంగా పొందండి.',
      selectedVarietyText: 'ఎంచుకున్న రకం:',
    },
    nav: {
      home: 'హోమ్',
      allProducts: 'అన్ని వస్తువులు',
      specialOffers: 'ప్రత్యేక ఆఫర్లు',
      specialOffersFull: 'ప్రత్యేక ఆఫర్లు (10 కొంటే 1 ఉచితం)',
      about: 'మా గురించి',
      brandName: 'కిరాణా & మసాలా హోల్‌సేల్',
      brandTagline: 'హోల్‌సేల్ ప్యాకెట్ & షీట్ సప్లై',
    },
    hero: {
      badge: '🏷️ హోల్‌సేల్ షీట్ & ప్యాకెట్ కేటలాగ్',
      title1: 'మసాలాలు, డ్రై ఫ్రూట్స్ &',
      title2: 'కిరాణా ప్యాకెట్లు',
      desc: 'కిరాణా మరియు రిటైల్ దుకాణాల కోసం ₹2, ₹5 మరియు ₹10 ప్యాకెట్ల హోల్‌సేల్ డిస్ప్లే షీట్లు. రోజువారీ మసాలాలు మరియు కిరాణా సరుకులపై పారదర్శక హోల్‌సేల్ ధరలు.',
    },
    usp: {
      rangeTitle: 'విస్తృత శ్రేణి',
      rangeDesc: 'పోపు దినుసులు, డ్రై ఫ్రూట్స్, మసాలాలు & నిత్యావసరాలు',
      ratesTitle: 'హోల్‌సేల్ షీట్ ధరలు',
      ratesDesc: 'స్పష్టమైన ₹30, ₹40, ₹45, ₹50 & ₹90 షీట్ రేట్లు',
      offerTitle: '10 కొంటే 1 ఉచితం',
      offerDesc: '₹2 & ₹5 ప్యాకెట్ రకాలపై ప్రత్యేక ఆఫర్',
    },
    categoriesSection: {
      title: 'విభాగాల వారీగా చూడండి',
      subtitle: 'మా హోల్‌సేల్ కిరాణా మరియు మసాలా వస్తువులను వర్గాల వారీగా అన్వేషించండి',
      all: 'అన్ని వస్తువులు',
      allDesc: 'మసాలాలు, డ్రై ఫ్రూట్స్ & కిరాణా వస్తువుల పూర్తి కేటలాగ్',
      wholeSpices: 'పోపు & మసాలా దినుసులు',
      wholeSpicesDesc: 'ధనియాలు, దాల్చిన చెక్క, లవంగాలు, మిరియాలు, జీలకర్ర, ఏలకులు & శొంటి',
      dryFruits: 'డ్రై ఫ్రూట్స్',
      dryFruitsDesc: 'జీడిపప్పు, కిస్మిస్ & బాదం పప్పు',
      blends: 'మసాలాలు & మిశ్రమాలు',
      blendsDesc: 'సాంప్రదాయ గరం మసాలా & బిర్యానీ దినుసులు',
      groceries: 'కిరాణా వస్తువులు',
      groceriesDesc: 'కొబ్బరి, కొబ్బరి పొడి, చింతపండు & గసగసాలు',
    },
    featuredSection: {
      title: 'ప్రముఖ వస్తువులు',
      subtitle: 'కిరాణా దుకాణాల్లో అత్యధికంగా అమ్ముడయ్యే ప్రముఖ వస్తువులు',
    },
    homeOfferBanner: {
      promoTag: 'ప్రత్యేక హోల్‌సేల్ ప్రమోషన్',
      promoTitle: '10 కొనండి + 1 షీట్ ఉచితం',
      promoDesc:
        '₹2 లేదా ₹5 ప్యాకెట్ రకాలపై 10 షీట్లు కొనుగోలు చేయండి, 1 అదనపు షీట్ ఉచితంగా పొందండి! కిరాణా దుకాణాలు మరియు హోల్‌సేల్ వర్తకుల కోసం.',
      applicableVarieties: 'ఆఫర్ వర్తించే రకాలు: ₹2 & ₹5 ప్యాకెట్లు',
      viewOfferDetails: 'ఆఫర్ వివరాలు చూడండి',
    },
    statsSection: {
      sheetsVal: 'స్టాక్ రెడీ',
      sheetsLabel: 'హోల్‌సేల్ షీట్లు',
      catVal: 'కేటలాగ్',
      catLabel: 'మసాలాలు & కిరాణా',
      varietiesVal: '₹2, ₹5, ₹10',
      varietiesLabel: 'ప్యాకెట్ రకాలు',
      offerVal: '10 + 1 ఉచితం',
      offerLabel: '₹2 & ₹5 రకాలపై ఆఫర్',
    },
    ctaSection: {
      title: 'హోల్‌సేల్ సరుకులు కావాలా?',
      desc: 'స్టాక్ లభ్యత, హోల్‌సేల్ షీట్ ధరలు మరియు బుకింగ్ కోసం మా ఫోన్ నంబర్లకు నేరుగా కాల్ చేయండి.',
    },
    productsPage: {
      title: 'వస్తువుల పూర్తి కేటలాగ్',
      subtitle:
        '₹2, ₹5 మరియు ₹10 ప్యాకెట్ డిస్ప్లే షీట్లలో లభించే కిరాణా మరియు మసాలా రకాలు',
      showing: 'చూపిస్తున్నవి',
      productSingular: 'వస్తువు',
      productPlural: 'వస్తువులు',
      noMatchTitle: 'మీరు వెతికిన వస్తువులు ఏవీ కనిపించలేదు',
      noMatchDesc: 'దయచేసి మీ శోధన పదాలను మార్చండి లేదా ఫిల్టర్లను తొలగించండి',
      resetFilters: 'అన్ని ఫిల్టర్లను రీసెట్ చేయండి',
      allCategories: 'అన్ని రకాలు',
      offersOnly: 'ఆఫర్ ఉన్నవి మాత్రమే',
      inStockOnly: 'స్టాక్ ఉన్నవి మాత్రమే',
      sortDefault: 'సాధారణ క్రమం',
      sortPriceAsc: 'ధర: తక్కువ నుండి ఎక్కువ',
      sortPriceDesc: 'ధర: ఎక్కువ నుండి తక్కువ',
      sortName: 'పేరు ప్రకారం (అ-క్ష)',
      clearFilters: 'ఫిల్టర్లు క్లియర్ చేయండి',
    },
    productDetail: {
      wholesaleSheetBadge: 'హోల్‌సేల్ హ్యాంగింగ్ షీట్',
      share: 'షేర్ చేయండి',
      ingredientsTitle: 'పదార్థాలు:',
      availableVarietiesTitle: 'లభించే ప్యాకెట్ రకాలు & షీట్ ధరలు',
      wholesalePricingSubtitle: 'హోల్‌సేల్ ధరలు',
      selectedVarietyText: 'ఎంచుకున్న రకం:',
      callPromptBooking: 'తక్షణ స్టాక్ లభ్యత & బుకింగ్ కోసం నేరుగా కాల్ చేయండి:',
      highlight1: 'వస్తువు నాణ్యత స్పష్టంగా కనిపించే పారదర్శక ప్యాకెట్లు',
      highlight2: 'కిరాణా మరియు జనరల్ స్టోర్ కౌంటర్లలో వేలాడదీయడానికి సిద్ధంగా ఉన్న కార్డ్ షీట్లు',
      highlight3: 'పారదర్శక షీట్ ధరలు మరియు ₹2 & ₹5 రకాలపై 10 కొంటే 1 ఉచితం ఆఫర్',
      highlight4: 'హోల్‌సేల్ సప్లై మరియు తక్షణ రవాణా',
      relatedTitle: 'ఈ విభాగంలోని ఇతర వస్తువులు',
      viewCategory: 'విభాగం చూడండి',
      notFoundTitle: 'కేటలాగ్‌లో ఈ వస్తువు కనిపించలేదు',
      notFoundDesc: 'దయచేసి మా కేటలాగ్ నుండి వస్తువులను ఎంచుకోండి.',
    },
    offersPage: {
      title: 'ప్రత్యేక హోల్‌సేల్ ఆఫర్లు',
      subtitle: 'రిటైల్ దుకాణాల కోసం ప్రస్తుత ఆఫర్ పథకాలు',
      activePromoBadge: 'యాక్టివ్ హోల్‌సేల్ ఆఫర్',
      offerDetailsDesc:
        'అర్హత కలిగిన ఏదైనా ₹2 లేదా ₹5 ప్యాకెట్ రకానికి చెందిన 10 షీట్లు కొనుగోలు చేస్తే 1 అదనపు షీట్ పూర్తిగా ఉచితంగా పొందండి. ఈ ఆఫర్ కిరాణా దుకాణాలు మరియు హోల్‌సేల్ వ్యాపారుల కోసం ప్రత్యేకంగా రూపొందించబడింది.',
      check1: 'దిగువ ఇవ్వబడిన వస్తువుల ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు వర్తిస్తుంది.',
      note: 'గమనిక: ఈ ఆఫర్ ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు మాత్రమే వర్తిస్తుంది; ₹10 ప్యాకెట్ రకాలకు వర్తించదు.',
      qualifyingVariety: 'అర్హత కలిగిన రకాలు',
      twoRupeePackets: '₹2 & ₹5 ప్యాకెట్లు',
      sheetDisplayCards: 'షీట్ డిస్ప్లే కార్డులు',
      qualifyingProductsTitle: '10 కొంటే 1 ఉచితం ఆఫర్ వర్తించే వస్తువులు',
      qualifyingProductsDesc:
        'ఉచిత షీట్ పొందడానికి ఈ వస్తువులలో ₹2 లేదా ₹5 ప్యాకెట్ రకాలను ఎంచుకోండి.',
      filterAll: 'అన్ని ఆఫర్లు (₹2 & ₹5)',
      filterTwoRupee: '₹2 రకాల ఆఫర్లు',
      filterFiveRupee: '₹5 రకాల ఆఫర్లు',
    },
    aboutPage: {
      pageTitle: 'హోల్‌సేల్ ప్యాకెట్ & షీట్ సప్లై గురించి',
      pageSubtitle:
        'కిరాణా వర్తకులు, నిత్యావసర దుకాణాలు మరియు రిటైలర్ల కోసం పారదర్శక ప్యాకెట్లు మరియు హ్యాంగింగ్ కార్డ్ షీట్ల హోల్‌సేల్ సరఫరాదారులు.',
      overviewHeading: 'హోల్‌సేల్ కిరాణా & మసాలా ప్యాకెట్ షీట్లు',
      overviewP1:
        'మేము ముఖ్యమైన పోపు దినుసులు, డ్రై ఫ్రూట్స్ మరియు రోజువారీ వంట సరుకుల రెడీ-టు-హాంగ్ కార్డ్ షీట్లను సరఫరా చేస్తాము. ప్రతి షీట్‌లో కిరాణా దుకాణాల కౌంటర్లకు అనువైన ₹2, ₹5 మరియు ₹10 ప్యాకెట్లు ఉంటాయి.',
      overviewP2:
        'అన్ని వస్తువులు స్వచ్ఛమైన పారదర్శక ప్లాస్టిక్ ప్యాకెట్లలో ప్యాక్ చేయబడి ఉంటాయి, తద్వారా సరుకు నాణ్యత స్పష్టంగా కనిపిస్తుంది. రిటైలర్లు పోటీ హోల్‌సేల్ ధరలకు షీట్ల వారీగా కొనుగోలు చేయవచ్చు.',
      exploreLink: 'మా పూర్తి కేటలాగ్‌ను చూడండి',
      featureRangeTitle: 'విస్తృత శ్రేణి',
      featureRangeDesc: 'ముఖ్యమైన మసాలాలు, డ్రై ఫ్రూట్స్ & నిత్యావసరాలు',
      featureSheetsTitle: 'షీట్ ఫార్మాట్లు',
      featureSheetsDesc: 'ప్యాకెట్లతో కూడిన హ్యాంగింగ్ డిస్ప్లే కార్డులు',
      featureRetailTitle: 'దుకాణాలకు సిద్ధం',
      featureRetailDesc: 'కౌంటర్లలో వేలాడదీసే అనువైన షీట్లు',
      featureSupplyTitle: 'వేగవంతమైన సరఫరా',
      featureSupplyDesc: 'రిటైల్ దుకాణాలకు నిరంతర స్టాక్ సరఫరా',
      specsTitle: 'కేటలాగ్ వివరాలు & ధరల వివరాలు',
      denom2Title: '₹2 ప్యాకెట్ రకం',
      denom2Price: '₹30 / షీట్',
      denom2Desc:
        'ధనియాలు, గసగసాలు, దాల్చిన చెక్క, లవంగాలు మరియు జీలకర్రలలో లభిస్తుంది. 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది!',
      denom5Title: '₹5 ప్యాకెట్ రకం',
      denom5Price: '₹40 – ₹50 / షీట్',
      denom5Desc:
        'మసాలాలు మరియు డ్రై ఫ్రూట్స్‌లో ప్రామాణిక రేటు ₹40. గసగసాలు ₹45, మరియు కొబ్బరి, శొంఠి, మసాలా షీట్‌కు ₹50.',
      denom10Title: '₹10 ప్యాకెట్ రకం',
      denom10Price: '₹90 / షీట్',
      denom10Desc:
        'డ్రై ఫ్రూట్స్, పోపు దినుసులు మరియు కొబ్బరి పొడితో సహా ₹10 ప్యాకెట్ రకాలకు షీట్ రేటు ₹90.',
      contactCardTitle: 'సంప్రదించవలసిన వివరాలు',
      viewOnGoogleMaps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
      mapHeading: 'వ్యాపార చిరునామా',
      wholesaleCtaTitle: 'హోల్‌సేల్ సరుకులు కావాలా?',
      wholesaleCtaDesc:
        'స్టాక్ లభ్యత, షీట్ ధరలు మరియు బుకింగ్ కోసం మా ఫోన్ నంబర్లకు నేరుగా కాల్ చేయండి.',
    },
    contactModal: {
      title: 'నేరుగా కాల్ చేయండి',
      desc: 'తక్షణ స్టాక్ లభ్యత, షీట్ ధరలు మరియు బుకింగ్ కోసం మా 3 హోల్‌సేల్ నంబర్లలో దేనికైనా కాల్ చేయండి.',
      availableNumbers: 'అందుబాటులో ఉన్న ఫోన్ నంబర్లు:',
      tapToCall: 'కాల్ చేయడానికి ట్యాప్ చేయండి',
      callNow: 'కాల్ చేయండి',
      close: 'మూసివేయి',
    },
    footer: {
      navigationTitle: 'కేటలాగ్ లింకులు',
      homePage: 'హోమ్ పేజీ',
      allProducts: 'అన్ని వస్తువులు',
      specialOffers: 'ప్రత్యేక ఆఫర్లు (10 కొంటే 1 ఉచితం)',
      aboutCatalogue: 'వ్యాపారం గురించి',
      contactTitle: 'నేరుగా సంప్రదించండి',
      copyrightNotice: 'హోల్‌సేల్ ధరలన్నీ డిస్ప్లే కార్డ్ షీట్ ప్రకారం ఉంటాయి.',
    },
    notFound: {
      title: 'పేజీ కనుగొనబడలేదు',
      desc: 'మీరు వెతుకుతున్న పేజీ అందుబాటులో లేదు.',
      backHome: 'తిరిగి హోమ్‌కి వెళ్లండి',
    },
  },
};

export const PRODUCT_TRANSLATIONS: Record<
  string,
  {
    teluguTitle: string;
    englishTitle: string;
    teluguDesc: string;
    englishDesc: string;
    teluguIngredients?: string[];
  }
> = {
  'p-jeedi-pappu': {
    teluguTitle: 'జీడిపప్పు',
    englishTitle: 'Jeedi Pappu (Cashew Nuts)',
    teluguDesc:
      'నాణ్యమైన జీడిపప్పు పారదర్శక ప్యాకెట్లలో డిస్ప్లే కార్డ్ షీట్లపై ప్యాక్ చేయబడింది. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Premium whole cashew nuts (Jeedi Pappu) carefully packed in transparent plastic sachets on display cards. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-kismis': {
    teluguTitle: 'కిస్మిస్',
    englishTitle: 'Kismis (Raisins)',
    teluguDesc:
      'సహజమైన తీపి మరియు సమానమైన పరిమాణం కలిగిన బంగారు కిస్మిస్ పారదర్శక ప్యాకెట్లలో లభిస్తుంది. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Selected golden seedless raisins (Kismis) packed in transparent plastic sachets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-baadam-pappu': {
    teluguTitle: 'బాదం పప్పు',
    englishTitle: 'Baadam Pappu (Almonds)',
    teluguDesc:
      'మంచి నాణ్యత మరియు సహజమైన రుచి కలిగిన బాదం పప్పు పారదర్శక ప్యాకెట్లలో లభిస్తుంది.',
    englishDesc:
      'Whole raw almonds (Baadam Pappu) packed in transparent clear packets. High quality nuts with consistent shape and rich taste.',
  },
  'p-kobbari': {
    teluguTitle: 'కొబ్బరి',
    englishTitle: 'Kobbari (Dry Coconut Pieces)',
    teluguDesc:
      'వంటలకు మరియు పూజలకు అనువైన స్వచ్ఛమైన ఎండిన కొబ్బరి ముక్కలు. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Clean dry coconut copra pieces (Kobbari) packed in transparent sachets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-sonti': {
    teluguTitle: 'శొంటి',
    englishTitle: 'Sonti (Dry Ginger)',
    teluguDesc:
      'ఔషధ గుణాలు మరియు ఘాటైన సువాసన కలిగిన నాణ్యమైన శొంటి. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Sun-dried whole dry ginger roots (Sonti / Sonth) packed in clean transparent plastic sachets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-ealukalu': {
    teluguTitle: 'ఏలకులు',
    englishTitle: 'Ealukalu (Green Cardamom)',
    teluguDesc:
      'తీపి వంటకాలకు మరియు టీకి మంచి సువాసననిచ్చే పచ్చి ఏలకులు. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Whole aromatic green cardamom pods (Ealukalu / Elaichi) packed in transparent clear packets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-dhaniyalu': {
    teluguTitle: 'ధనియాలు',
    englishTitle: 'Dhaniyalu (Coriander Seeds)',
    teluguDesc:
      'స్వచ్ఛమైన ధనియాలు పారదర్శక ప్యాకెట్లలో లభిస్తాయి. ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Clean whole coriander seeds (Dhaniyalu / Sabut Dhania) in transparent sachets. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
  },
  'p-ghasa-ghasalu': {
    teluguTitle: 'గసగసాలు',
    englishTitle: 'Ghasa Ghasalu (Poppy Seeds)',
    teluguDesc:
      'స్వచ్ఛమైన తెల్లటి గసగసాలు పారదర్శక ప్యాకెట్లలో లభిస్తాయి. ₹5 రకం షీట్ ₹45. ₹2 మరియు ₹5 రకాలకు 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Fine white poppy seeds (Ghasa Ghasalu / Khus Khus) packed in clear transparent plastic sachets. Note ₹5 variety is ₹45 per sheet. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
  },
  'p-dhalchina-chekka': {
    teluguTitle: 'దాల్చిన చెక్క',
    englishTitle: 'Dhalchina Chekka (Cinnamon Bark)',
    teluguDesc:
      'సువాసన కలిగిన నాణ్యమైన దాల్చిన చెక్క ముక్కలు. ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Aromatic cinnamon bark pieces (Dhalchina Chekka / Dalchini) in clear transparent plastic packets. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
  },
  'p-lavangalu': {
    teluguTitle: 'లవంగాలు',
    englishTitle: 'Lavangalu (Cloves)',
    teluguDesc:
      'గుండ్రని మొగ్గలు కలిగిన స్వచ్ఛమైన లవంగాలు. ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Whole aromatic cloves (Lavangalu / Laung) with intact round heads packed in transparent sachets. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
  },
  'p-miriyalu': {
    teluguTitle: 'మిరియాలు',
    englishTitle: 'Miriyalu (Black Pepper)',
    teluguDesc:
      'మంచి ఘాటు మరియు సువాసన కలిగిన నల్ల మిరియాలు. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Whole dried black peppercorns (Miriyalu / Kali Mirch) packed in transparent plastic sachets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-chintapandu': {
    teluguTitle: 'చింతపండు',
    englishTitle: 'Chintapandu (Tamarind)',
    teluguDesc:
      'గింజలు మరియు ఈనెలు తొలగించిన శుభ్రమైన చింతపండు. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Clean seedless sour tamarind (Chintapandu / Imli) compressed into handy retail packets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
  },
  'p-mashala': {
    teluguTitle: 'మసాలా',
    englishTitle: 'Mashala (Garam Masala Mix)',
    teluguDesc:
      'ధనియాలు, వెల్లుల్లి, కొబ్బరి మరియు దాల్చిన చెక్కల సమపాళ్ల సాంప్రదాయ మిశ్రమం. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Wholesale blend of traditional whole spices. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
    teluguIngredients: ['ధనియాలు', 'వెల్లుల్లి', 'కొబ్బరి', 'దాల్చిన చెక్క'],
  },
  'p-biryani-dhinsulu': {
    teluguTitle: 'బిర్యానీ దినుసులు',
    englishTitle: 'Biryani Dhinsulu (Biryani Spices Mix)',
    teluguDesc:
      'రుచికరమైన బిర్యానీ తయారీకి అవసరమైన అన్ని రకాల హోల్ స్పైసెస్ మిశ్రమం. ₹5 ప్యాకెట్ రకానికి 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Complete whole biryani spice mix in handy transparent sachets. Special BUY 10 + GET 1 FREE offer applies to the ₹5 packet variety.',
    teluguIngredients: [
      'బిర్యానీ ఆకు',
      'లవంగాలు',
      'దాల్చిన చెక్క',
      'ఏలకులు',
      'అనాస పువ్వు',
      'మరాఠీ మొగ్గ',
      'జాపత్రి',
      'షాహీ జీరా',
    ],
  },
  'p-jilakara': {
    teluguTitle: 'జీలకర్ర',
    englishTitle: 'Jilakara (Cumin Seeds)',
    teluguDesc:
      'స్వచ్ఛమైన జీలకర్ర పారదర్శక ప్యాకెట్లలో లభిస్తుంది. ₹2 మరియు ₹5 ప్యాకెట్ రకాలకు 10 కొంటే 1 ఉచితం ఆఫర్ వర్తిస్తుంది.',
    englishDesc:
      'Whole clean cumin seeds (Jilakara / Jeera) packed in clear transparent plastic sachets. Natural earthy fragrance. Special BUY 10 + GET 1 FREE offer applies to ₹2 and ₹5 packet varieties.',
  },
  'p-kobbari-podi': {
    teluguTitle: 'కొబ్బరి పొడి',
    englishTitle: 'Kobbari Podi (Coconut Powder)',
    teluguDesc:
      'స్వచ్ఛమైన తురిమిన కొబ్బరి పొడి పారదర్శక ప్యాకెట్లలో లభిస్తుంది.',
    englishDesc:
      'Fine desiccated dry coconut powder (Kobbari Podi) packed in transparent plastic sachets. Perfect for sweets, chutneys, gravies, and confectionery use.',
  },
};
