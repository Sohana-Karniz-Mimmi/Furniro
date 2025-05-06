export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductPrice {
  currentPrice: number;
  originalPrice: number;
}

export interface ProductBadge {
  text: string;
  type: "discount" | "new" | null;
  color: "red" | "green";
}

export interface Product {
  createdAt?: Date;
  _id: string;
  name: string;
  subTitle: string;
  description: string;
  mainImage : string;
  images: string[];
  price: ProductPrice;
  reviews?: {
    count: number;
    averageRating: number;
  };
  variants?: {
    sizes: string[];
    colors: ProductColor[];
  };
  stock: number;
  sku: string;
  metadata: {
    category: string;
    tags: string[];
  };
  badge?: ProductBadge;
  details: {
    description: string;
    dimensions?: string;
    materials?: string[];
  };
  relatedImages?: string[];
}
