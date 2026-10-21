import { ServiceItem, PopularRoute, CarOption } from './types';
import newSwiftDzireImg from './assets/images/new_swift_dzire_1789446754763.jpg';
import hyundaiAuraImg from './assets/images/hyundai_aura_white_1789446916145.jpg';
import marutiErtigaImg from './assets/images/maruti_ertiga_white_1789446929904.jpg';
import hondaAmazeImg from './assets/images/honda_amaze_1789446768718.jpg';

export const PHONE_NUMBER = '9815505661';
export const DISPLAY_PHONE = '9815505661';
export const TEL_LINK = `tel:${PHONE_NUMBER}`;
export const WHATSAPP_NUMBER = '919815505661';

export function getWhatsAppLink(message?: string): string {
  const text = message || 'Hello Cab Services Mohali, I want to book a cab in Mohali.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const CAB_SERVICES: ServiceItem[] = [
  {
    id: 'local',
    title: 'Local Cab Service',
    shortDesc: 'Quick and reliable cabs across Mohali, Chandigarh and Panchkula for daily commute and city travel.',
    badge: 'City Travel',
  },
  {
    id: 'airport',
    title: 'Airport Transfers',
    shortDesc: 'Punctual pickup and drop service for Chandigarh International Airport with 24/7 availability.',
    badge: 'On-Time Guaranteed',
  },
  {
    id: 'outstation',
    title: 'Outstation Taxi',
    shortDesc: 'One-way and round-trip outstation cabs with verified drivers and well-maintained cars.',
    badge: 'One-Way & Round-Trip',
  },
];

export const POPULAR_ROUTES: PopularRoute[] = [
  { id: 'amritsar', origin: 'Chandigarh', destination: 'Amritsar', distanceApprox: '225 km' },
  { id: 'delhi', origin: 'Chandigarh', destination: 'Delhi', distanceApprox: '250 km' },
  { id: 'shimla', origin: 'Chandigarh', destination: 'Shimla', distanceApprox: '115 km' },
  { id: 'ludhiana', origin: 'Chandigarh', destination: 'Ludhiana', distanceApprox: '105 km' },
  { id: 'patiala', origin: 'Chandigarh', destination: 'Patiala', distanceApprox: '70 km' },
  { id: 'ambala', origin: 'Chandigarh', destination: 'Ambala', distanceApprox: '45 km' },
  { id: 'ropar', origin: 'Chandigarh', destination: 'Ropar', distanceApprox: '42 km' },
  { id: 'sangrur', origin: 'Chandigarh', destination: 'Sangrur', distanceApprox: '125 km' },
];

export const CAR_OPTIONS: CarOption[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Compact Sedan',
    seats: '4 Passengers + Driver',
    features: ['Air Conditioned', 'Spacious Boot Space', 'Clean & Sanitized'],
    imageSrc: newSwiftDzireImg,
  },
  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    category: 'Modern Sedan',
    seats: '4 Passengers + Driver',
    features: ['Air Conditioned', 'Smooth Ride', 'Pristine & Sanitized'],
    imageSrc: hyundaiAuraImg,
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    category: 'Spacious 6/7 Seater',
    seats: '6-7 Passengers + Driver',
    features: ['Air Conditioned', 'Large Luggage Space', 'Family & Group Travel'],
    imageSrc: marutiErtigaImg,
  },
  {
    id: 'honda-amaze',
    name: 'Honda Amaze',
    category: 'Comfort Sedan',
    seats: '4 Passengers + Driver',
    features: ['Air Conditioned', 'Extra Legroom', 'Smooth Highway Ride'],
    imageSrc: hondaAmazeImg,
  },
];
