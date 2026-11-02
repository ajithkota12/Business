// ─── Configurable Business Information ─────────────────────────────────────────

export interface PhoneContact {
  number: string;
  display: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  subheading: string;
  phones: PhoneContact[];
  phoneDisplay: string;
  address: {
    village?: string;
    line1: string;
    city: string;
    state: string;
    pincode: string;
    display: string;
    mapUrl: string;
    embedUrl: string;
  };
  workingHours: {
    days: string;
    timing: string;
    closedDay: string;
  };
  notice: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Grocery & Spices Wholesale',
  tagline: 'Wholesale Packet & Sheet Supply',
  subheading: 'Whole Spices, Dry Fruits & Grocery Sachets at Wholesale Sheet Rates',
  phones: [
    { number: '8885369546', display: '8885369546' },
    { number: '7995041578', display: '7995041578' },
    { number: '738294804', display: '738294804' },
  ],
  phoneDisplay: '8885369546, 7995041578, 738294804',
  address: {
    village: 'Anigandlapadu',
    line1: 'Anigandlapadu Village',
    city: 'Penuganchiprolu Mandal, NTR District',
    state: 'Andhra Pradesh',
    pincode: '521190',
    display: 'Anigandlapadu, Penuganchiprolu Mandal, NTR District, Andhra Pradesh - 521190',
    mapUrl: 'https://www.google.com/maps/place/16%C2%B053\'27.4%22N+80%C2%B017\'06.9%22E/@16.8909541,80.2826801,17z/data=!3m1!4b1!4m7!1m2!10m1!1e2!3m3!8m2!3d16.890949!4d80.285255?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?q=16.890949,80.285255&hl=en&z=16&output=embed',
  },
  workingHours: {
    days: 'Monday – Saturday',
    timing: '9:00 AM – 7:30 PM',
    closedDay: 'Sunday: Closed',
  },
  notice: 'Wholesale sheet supply for retail kirana stores and distributors.',
};

export function formatTelUrl(phone: string): string {
  const clean = phone.replace(/\D/g, '');
  return clean ? `tel:${clean}` : 'tel:';
}

export function triggerPhoneCall(phone: string) {
  const clean = phone.replace(/\D/g, '');
  if (!clean) return;
  window.location.href = `tel:${clean}`;
}

