interface Meta {
  code: number;
  errors: string[];
}

interface Pagination {
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
}

export interface Category {
  id: string;
  title: string;
  tags: string[];
  have_others: boolean;
}

export interface Brand {
  id: string;
  logo: string;
  products_count: number;
  title: string;
}

interface Product {
  id: string;
  title: string;
  is_in_stock: boolean;
  featured_image: string;
  rating: {
    product_ratings: number;
    total_reviews_count: number;
  };
  trendy: number;
  best_seller: number;
  featured: number;
  clearance: number;
  default_variant: {
    id: string;
    sku_id: string;
    title: string;
    product_title: string;
    product_id: string;
    price: string;
    stock: number;
    is_in_stock: boolean;
    is_stock_below_threshold: null | boolean;
    specs: null | any;
    image: string;
    options: {
      key: string;
      value: string;
      title: string;
      type: number;
    }[];
  };
}

export interface BaseResponse<D = null> {
  meta: Meta;
  data: D;
  pagination: Pagination;
}
