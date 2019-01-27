import { Invoice } from './invoice';
import { Payment } from './payment';

export interface Customer {
  name: string;
  invoices: Invoice[];
  payments: Payment[];
}
