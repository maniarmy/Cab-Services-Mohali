export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
}

export interface PopularRoute {
  id: string;
  destination: string;
  origin: string;
  distanceApprox: string;
}

export interface CarOption {
  id: string;
  name: string;
  category: string;
  seats: string;
  features: string[];
  imageSrc: string;
}
