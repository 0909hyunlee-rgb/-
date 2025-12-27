
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  kakaoId: string;
  instagram: string;
  businessHours: string;
}
