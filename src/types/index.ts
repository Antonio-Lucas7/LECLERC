export interface Product {
  id: string;
  name: string;
  category: 'Alfaiataria' | 'Vestidos' | 'Blusas' | 'Calças' | 'Conjuntos' | 'Acessórios';
  description: string;
  detailedDescription?: string;
  image: string;
  secondaryImage?: string;
  detailImage?: string;
  price?: string;
  badge?: string;
  features?: string[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  isFlagship?: boolean;
  isNewIn?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  description: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  caption: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  mainImage: string;
  secondaryImage1: string;
  secondaryImage2: string;
  description: string;
  quote: string;
}
