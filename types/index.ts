export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  purity: string;
  weight: string;
  sizes?: string[];
  tags?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isPopular?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface MetalRate {
  gold: {
    rate10g: number;
    rate1g: number;
    change: number;
    changePercent: number;
    lastUpdated: string;
  };
  silver: {
    rate10g: number;
    rate1g: number;
    change: number;
    changePercent: number;
    lastUpdated: string;
  };
}

export interface Address {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered";
  address: Address;
  date: string;
}

export interface CustomizationRequest {
  name: string;
  phone: string;
  email: string;
  jewelleryType: string;
  description: string;
  referenceImage?: File;
}
