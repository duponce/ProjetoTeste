
export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  PROCESSING = 'PROCESSING',
  CANCELLED = 'CANCELLED'
}

export interface Order {
  id: string;
  customer: string;
  status: OrderStatus;
  total: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  description?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  image?: string;
  type: 'add' | 'edit' | 'person' | 'warning';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Brand {
  id: string;
  name: string;
  productCount: number;
  logo: string;
}

export interface Variant {
  id: string;
  size: string;
  finSetup: string;
  price: number;
  stockCount: number;
}
