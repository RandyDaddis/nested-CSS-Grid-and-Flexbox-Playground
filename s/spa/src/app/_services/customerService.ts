import { Injectable } from '@angular/core';

import { Customer } from '../_models/customer';
import { Invoice } from '../_models/invoice';
import { Payment } from '../_models/payment';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
    payments: Payment[] = [
      { amount: 100.00, date: new Date('January 21, 2019').toLocaleDateString() },
      { amount: 2000.00, date: new Date('December 21, 2018').toLocaleDateString() },
      { amount: 30000.00, date: new Date('November 21, 2019').toLocaleDateString() },
      { amount: 4000000, date: new Date('October 21, 2018').toLocaleDateString() }
    ];
    invoices: Invoice[] = [
      { description: "Item 11", quantity: 5, price: 4.00 },
      { description: "Item 123", quantity: 100, price: 200.00 },
      { description: "Item 134", quantity: 20000, price: 50000 }
    ];
    customers: Customer[] = [
      { name: "Acme Widget Manufacturing, Inc.", invoices: this.invoices, payments: this.payments },
      { name: "Brandy Wines, LLC", invoices: this.invoices, payments: this.payments }
    ];

  getCustomers() {
    return this.customers;
  }
}
