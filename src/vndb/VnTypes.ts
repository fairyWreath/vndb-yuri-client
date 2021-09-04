interface VnSearchImage {
  src: string;
  nsfw?: any;
  violence?: any;
}

export interface VnSearchItem {
  title: string;
  id: string;
  image: VnSearchImage;
  popularity: number;
  released: number;
  min_released: number;
  max_released: number;
  rating: string;
  length: string;
}

export interface VnSearchQuery {
  tags: string[];
  sort_by?: string;
  sort_order?: string;
  released?: string;
  search?: string;
  nsfw?: boolean;
  results?: number;
  last_sort_value?: any;
  last_sort_vid?: string;
}
