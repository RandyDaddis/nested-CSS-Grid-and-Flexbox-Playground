import { Injectable } from '@angular/core';

import { Customer } from '../_models/customer';
import { Invoice } from '../_models/invoice';
import { Payment } from '../_models/payment';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
    payments: Payment[] = [
      { id: 21, amount: 100.00, date: new Date('January 21, 2019').toLocaleDateString() },
      { id: 22, amount: 2000.00, date: new Date('December 21, 2018').toLocaleDateString() },
      { id: 23, amount: 30000.00, date: new Date('November 21, 2019').toLocaleDateString() },
      { id: 24, amount: 4000000, date: new Date('October 21, 2018').toLocaleDateString() }
    ];
    invoices: Invoice[] = [
      { id: 11, name: "Item 11", quantity: 5, price: 4.00 },
      { id: 12, name: "Item 123", quantity: 100, price: 200.00 },
      { id: 13, name: "Item 134", quantity: 20000, price: 50000 }
    ];
    customers: Customer[] = [
      { id: 1, name: "Acme Widget Manufacturing, Inc.", invoices: this.invoices, payments: this.payments },
      { id: 2, name: "Brandy Wines, LLC", invoices: this.invoices, payments: this.payments }
    ];

  getCustomers() {
    return this.customers;
  }
}
