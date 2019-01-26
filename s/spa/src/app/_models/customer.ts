import { Invoice } from './invoice';
import { Payment } from './payment';

export interface Customer {
  id: number;
  name: string;
  invoices: Invoice[];
  payments: Payment[];
}
