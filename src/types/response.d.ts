interface Meta {
  code: number;
  errors: string[];
}

interface Pagination {
  // Define Pagination properties if they are expected in the actual data
}

export interface Category {
  id: string;
  title: string;
  tags: string[];
  have_others: boolean;
}

// Define the main object type
export interface BaseResponse<D = null> {
  meta: Meta;
  data: D;
  pagination: Pagination;
}
