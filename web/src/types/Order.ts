export interface Order {
  _id: string;
  _table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[];
}
