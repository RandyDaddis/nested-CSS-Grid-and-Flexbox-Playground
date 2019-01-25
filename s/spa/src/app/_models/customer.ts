import { Product } from './product';
import { Payment } from './payment';

export interface Customer {
  id: number;
  name: string;
  products: Product[];
  payments: Payment[];
}
