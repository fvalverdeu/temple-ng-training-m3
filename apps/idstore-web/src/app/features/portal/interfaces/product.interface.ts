export interface IProduct {
  images:      string[];
  _id:         string;
  sku:         string;
  name:        string;
  description: string;
  unit:        string;
  expiration:  string;
  model:       string;
  quantity:    string;
  price:       number;
  category:    string;
  maker:       string;
  status:      string;
}

export interface IProductRequest {
  name:     string;
  sku:      string;
  category: string;
  price:    IPrice | null;
  maker:    string;
  sort:     string;
}

export interface IPrice {
  minPrice: number;
  maxPrice: number;
}

